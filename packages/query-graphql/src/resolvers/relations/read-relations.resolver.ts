import { createParamDecorator, ExecutionContext } from '@nestjs/common'
import { Args, ArgsType, Context, GqlExecutionContext, Parent, Resolver } from '@nestjs/graphql'
import { Class, Filter, mergeQuery, QueryResolveTree, QueryService, SelectRelation } from '@ptc-org/nestjs-query-core'
import { GraphQLResolveInfo } from 'graphql'

import { OperationGroup } from '../../auth'
import { getDTONames } from '../../common'
import {
  GraphQLLookAheadRelations,
  GraphQLResolveInfoResult,
  GraphQLResultInfo,
  RelationAuthorizerFilter,
  ResolverField
} from '../../decorators'
import { simplifyResolveInfo } from '../../decorators/graphql-resolve-info.utils'
import { InjectDataLoaderConfig } from '../../decorators/inject-dataloader-config.decorator'
import { AuthorizerInterceptor } from '../../interceptors'
import { CountRelationsLoader, DataLoaderFactory, FindRelationsLoader, QueryRelationsLoader } from '../../loader'
import { DataLoaderOptions } from '../../pipes/inject-data-loader-config.pipe'
import { QueryArgsType } from '../../types'
import { transformAndValidate } from '../helpers'
import { BaseServiceResolver, ServiceResolver } from '../resolver.interface'
import { flattenRelations, removeRelationOpts } from './helpers'
import { RelationsOpts, ResolverRelation } from './relations.interface'

export interface ReadRelationsResolverOpts extends RelationsOpts {
  enableTotalCount?: boolean
}

const GraphQLInfo = <DTO>(): ParameterDecorator => {
  return createParamDecorator((data: unknown, ctx: ExecutionContext): QueryResolveTree<DTO> => {
    const info = GqlExecutionContext.create(ctx).getInfo<GraphQLResolveInfo>()
    return simplifyResolveInfo(info)
  })()
}

const ReadOneRelationMixin =
  <DTO, Relation>(DTOClass: Class<DTO>, relation: ResolverRelation<Relation>) =>
  <B extends Class<ServiceResolver<DTO, QueryService<DTO, unknown, unknown>>>>(Base: B): B => {
    if (relation.disableRead) {
      return Base
    }
    const commonResolverOpts = removeRelationOpts(relation)
    const relationDTO = relation.DTO
    const { baseNameLower, baseName } = getDTONames(relationDTO, { dtoName: relation.dtoName })
    const relationName = relation.relationName ?? baseNameLower
    const loaderName = `load${baseName}For${DTOClass.name}`

    const findLoader = new FindRelationsLoader<DTO, Relation>(relationDTO, relationName)

    @Resolver(() => DTOClass, { isAbstract: true })
    class ReadOneMixin extends Base {
      @ResolverField(
        baseNameLower,
        () => relationDTO,
        { nullable: relation.nullable, complexity: relation.complexity, description: relation?.description },
        commonResolverOpts,
        { interceptors: [AuthorizerInterceptor(DTOClass)] }
      )
      async [`find${baseName}`](
        @Parent() dto: DTO,
        @Context() context: ExecutionContext,
        @RelationAuthorizerFilter(baseNameLower, {
          operationGroup: OperationGroup.READ,
          many: false
        })
        authFilter?: Filter<Relation>,
        @GraphQLResultInfo(DTOClass)
        resolveInfo?: GraphQLResolveInfoResult<Relation>,
        @InjectDataLoaderConfig()
        dataLoaderConfig?: DataLoaderOptions,
        @GraphQLInfo<DTO>()
        info?: QueryResolveTree<DTO>
      ): Promise<Relation | undefined> {
        if (info?.fields && Object.values(info.fields).length === 1 && (info.fields as { id?: unknown }).id) {
          return { id: dto[relationName] } as Relation
        }

        const results = await DataLoaderFactory.getOrCreateLoader(
          context,
          loaderName,
          () =>
            findLoader.createLoader(this.service, {
              resolveInfo: resolveInfo?.info,
              withDeleted: relation.withDeleted,
              lookedAhead: relation.enableLookAhead
            }),
          dataLoaderConfig
        ).load({
          dto,
          filter: authFilter,
          relations: resolveInfo?.relations
        })

        return results
      }
    }

    return ReadOneMixin
  }

const ReadManyRelationMixin =
  <DTO, Relation>(DTOClass: Class<DTO>, relation: ResolverRelation<Relation>) =>
  <B extends Class<ServiceResolver<DTO, QueryService<DTO, unknown, unknown>>>>(Base: B): B => {
    if (relation.disableRead) {
      return Base
    }
    const commonResolverOpts = removeRelationOpts(relation)
    const relationDTO = relation.DTO
    const dtoName = getDTONames(DTOClass).baseName
    const { baseNameLower, baseName } = getDTONames(relationDTO, { dtoName: relation.dtoName })
    const relationName = relation.relationName ?? baseNameLower
    const relationLoaderName = `load${baseName}For${DTOClass.name}`
    const countRelationLoaderName = `count${baseName}For${DTOClass.name}`
    const queryLoader = new QueryRelationsLoader<DTO, Relation>(relationDTO, relationName)
    const countLoader = new CountRelationsLoader<DTO, Relation>(relationDTO, relationName)
    const connectionName = `${dtoName}${baseName}Connection`

    @ArgsType()
    class RelationQA extends QueryArgsType(relationDTO, {
      ...relation,
      connectionName,
      disableKeySetPagination: true
    }) {}

    // disable keyset pagination for relations otherwise recursive paging will not work
    const { ConnectionType: CT } = RelationQA

    @Resolver(() => DTOClass, { isAbstract: true })
    class ReadManyMixin extends Base {
      @ResolverField(
        baseNameLower,
        () => CT.resolveType,
        { nullable: relation.nullable, complexity: relation.complexity, description: relation?.description },
        commonResolverOpts,
        { interceptors: [AuthorizerInterceptor(DTOClass)] }
      )
      async [`query${baseName}`](
        @Parent() dto: DTO,
        @Args() q: RelationQA,
        @Context() context: ExecutionContext,
        @RelationAuthorizerFilter(baseNameLower, {
          operationGroup: OperationGroup.READ,
          many: true
        })
        relationFilter?: Filter<Relation>,
        @GraphQLResultInfo(DTOClass)
        resolveInfo?: GraphQLResolveInfoResult<Relation>,
        @InjectDataLoaderConfig()
        dataLoaderConfig?: DataLoaderOptions,
        @GraphQLLookAheadRelations(DTOClass)
        relations?: SelectRelation<Relation>[],
        @GraphQLInfo<DTO>()
        info?: QueryResolveTree<DTO>
      ): Promise<InstanceType<typeof CT>> {
        const relationQuery = await transformAndValidate(RelationQA, q)

        // @TODO Test loading only ids, also with virtuals
        if (info?.fields && Object.values(info.fields).length === 1 && (info.fields as { id?: unknown }).id) {
          if (
            Array.isArray(dto[relationName]) &&
            (!info.args.filter || Object.keys(info.args.filter).length === 0) &&
            (!info.args.sorting || info.args.sorting.length === 0) &&
            (!info.args.paging || Object.keys(info.args.paging).length === 0)
          ) {
            return CT.createFromPromise(
              // eslint-disable-next-line @typescript-eslint/require-await
              async (): Promise<Relation[]> => (dto[relationName] as string[]).map((id) => ({ id })) as Relation[],
              mergeQuery(relationQuery, { filter: relationFilter, relations }),
              // eslint-disable-next-line @typescript-eslint/require-await
              async (): Promise<number> => (dto[relationName] as string[]).length
            )
          }
        }

        const relationLoader = DataLoaderFactory.getOrCreateLoader(
          context,
          relationLoaderName,
          () => queryLoader.createLoader(this.service),
          dataLoaderConfig
        )

        const relationCountLoader = DataLoaderFactory.getOrCreateLoader(
          context,
          countRelationLoaderName,
          () => countLoader.createLoader(this.service),
          dataLoaderConfig
        )

        return CT.createFromPromise(
          (query) => relationLoader.load({ dto, query }),
          mergeQuery(relationQuery, { filter: relationFilter, relations: resolveInfo?.relations }),
          (filter) => relationCountLoader.load({ dto, filter })
        )
      }
    }

    return ReadManyMixin
  }

export const ReadRelationsMixin =
  <DTO>(DTOClass: Class<DTO>, relations: ReadRelationsResolverOpts) =>
  <B extends Class<ServiceResolver<DTO, QueryService<DTO, unknown, unknown>>>>(Base: B): B => {
    const { many, one, enableTotalCount } = relations
    const manyRelations = flattenRelations(many ?? {})
    const oneRelations = flattenRelations(one ?? {})
    const WithMany = manyRelations.reduce((RB, a) => ReadManyRelationMixin(DTOClass, { enableTotalCount, ...a })(RB), Base)
    return oneRelations.reduce((RB, a) => ReadOneRelationMixin(DTOClass, a)(RB), WithMany)
  }

export const ReadRelationsResolver = <DTO, QS extends QueryService<DTO, unknown, unknown> = QueryService<DTO, unknown, unknown>>(
  DTOClass: Class<DTO>,
  relations: ReadRelationsResolverOpts
): Class<ServiceResolver<DTO, QS>> => ReadRelationsMixin(DTOClass, relations)(BaseServiceResolver)
