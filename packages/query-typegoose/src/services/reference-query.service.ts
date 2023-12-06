/* eslint-disable no-underscore-dangle */
import { NotFoundException, Optional } from '@nestjs/common'
import {
  AggregateQuery,
  AggregateResponse,
  AssemblerFactory,
  Class,
  Filter,
  FindRelationOptions,
  GetByIdOptions,
  mergeFilter,
  ModifyRelationOptions,
  Query
} from '@ptc-org/nestjs-query-core'
import { DocumentType, getClass, getModelForClass, getModelWithString, mongoose } from '@typegoose/typegoose'
import { Base } from '@typegoose/typegoose/lib/defaultClasses'
import omit from 'lodash.omit'
import { PipelineStage, RefType } from 'mongoose'

import { AggregateBuilder, FilterQueryBuilder } from '../query'
import {
  isEmbeddedSchemaTypeOptions,
  isSchemaTypeWithReferenceOptions,
  isVirtualTypeWithReferenceOptions,
  ReturnModelType,
  VirtualTypeWithOptions
} from '../typegoose-types.helper'
import { ReferenceCacheService } from './reference-cache.service'

export abstract class ReferenceQueryService<Entity extends Base> {
  abstract readonly filterQueryBuilder: FilterQueryBuilder<Entity>

  protected constructor(
    readonly Model: ReturnModelType<new () => Entity>,
    @Optional() protected readonly referenceCacheService?: ReferenceCacheService
  ) {}

  abstract getById(id: string | number, opts?: GetByIdOptions<Entity>): Promise<Entity>

  public aggregateRelations<Relation>(
    RelationClass: Class<Relation>,
    relationName: string,
    entities: DocumentType<Entity>[],
    filter: Filter<Relation>,
    aggregate: AggregateQuery<Relation>
  ): Promise<Map<DocumentType<Entity>, AggregateResponse<DocumentType<Relation>>[]>>

  public aggregateRelations<Relation>(
    RelationClass: Class<Relation>,
    relationName: string,
    dto: DocumentType<Entity>,
    filter: Filter<Relation>,
    aggregate: AggregateQuery<Relation>
  ): Promise<AggregateResponse<DocumentType<Relation>>[]>

  public async aggregateRelations<Relation>(
    RelationClass: Class<Relation>,
    relationName: string,
    dto: DocumentType<Entity> | DocumentType<Entity>[],
    filter: Filter<Relation>,
    aggregateQuery: AggregateQuery<Relation>
  ): Promise<
    AggregateResponse<DocumentType<Relation>>[] | Map<DocumentType<Entity>, AggregateResponse<DocumentType<Relation>>[]>
  > {
    this.checkForReference('AggregateRelations', relationName)
    const relationModel = this.getReferenceModel(relationName)
    const referenceQueryBuilder = this.getReferenceQueryBuilder(relationName)
    if (Array.isArray(dto)) {
      return dto.reduce(async (mapPromise, entity) => {
        const map = await mapPromise
        const refs = await this.aggregateRelations(RelationClass, relationName, entity, filter, aggregateQuery)
        return map.set(entity, refs)
      }, Promise.resolve(new Map<DocumentType<Entity>, AggregateResponse<DocumentType<Relation>>[]>()))
    }
    const assembler = AssemblerFactory.getAssembler(RelationClass, this.getReferenceEntity(relationName))
    const refFilter = this.getReferenceFilter(relationName, dto, assembler.convertQuery({ filter }).filter)
    if (!refFilter) {
      return []
    }
    const { filterQuery, aggregate, options } = referenceQueryBuilder.buildAggregateQuery(
      assembler.convertAggregateQuery(aggregateQuery),
      refFilter
    )
    const aggPipeline: PipelineStage[] = [{ $match: filterQuery }, { $group: aggregate }]
    if (options.sort) {
      aggPipeline.push({ $sort: options.sort ?? {} })
    }
    const aggResult = await relationModel.aggregate<Record<string, unknown>>(aggPipeline).exec()
    return AggregateBuilder.convertToAggregateResponse(aggResult)
  }

  public countRelations<Relation>(
    RelationClass: Class<Relation>,
    relationName: string,
    entities: DocumentType<Entity>[],
    filter: Filter<Relation>
  ): Promise<Map<DocumentType<Entity>, number>>

  public countRelations<Relation>(
    RelationClass: Class<Relation>,
    relationName: string,
    dto: DocumentType<Entity>,
    filter: Filter<Relation>
  ): Promise<number>

  public async countRelations<Relation>(
    RelationClass: Class<Relation>,
    relationName: string,
    dto: DocumentType<Entity> | DocumentType<Entity>[],
    filter: Filter<Relation>
  ): Promise<number | Map<DocumentType<Entity>, number>> {
    this.checkForReference('CountRelations', relationName)
    if (Array.isArray(dto)) {
      return dto.reduce(async (mapPromise, entity) => {
        const map = await mapPromise
        const refs = await this.countRelations(RelationClass, relationName, entity, filter)
        return map.set(entity, refs)
      }, Promise.resolve(new Map<DocumentType<Entity>, number>()))
    }
    const assembler = AssemblerFactory.getAssembler(RelationClass, this.getReferenceEntity(relationName))
    const relationModel = this.getReferenceModel<Relation>(relationName)
    const referenceQueryBuilder = this.getReferenceQueryBuilder(relationName)
    const refFilter = this.getReferenceFilter(relationName, dto, assembler.convertQuery({ filter }).filter)
    if (!refFilter) {
      return 0
    }
    return relationModel.countDocuments(referenceQueryBuilder.buildFilterQuery(refFilter)).lean()
  }

  public findRelation<Relation extends Base<RefType>>(
    RelationClass: Class<Relation>,
    relationName: string,
    dtos: Entity[],
    opts?: FindRelationOptions<Relation>
  ): Promise<Map<Entity, Relation | undefined>>

  public findRelation<Relation extends Base<RefType>>(
    RelationClass: Class<Relation>,
    relationName: string,
    dto: Entity,
    opts?: FindRelationOptions<Relation>
  ): Promise<DocumentType<Relation> | undefined>

  public async findRelation<Relation extends Base<RefType>>(
    RelationClass: Class<Relation>,
    relationName: string,
    dto: Entity | Entity[],
    opts?: FindRelationOptions<Relation>
  ): Promise<(Relation | undefined) | Map<Entity, Relation | undefined>> {
    const relationModel = getModelForClass(RelationClass)
    this.checkForReference('FindRelation', relationName)
    const referenceQueryBuilder = this.getReferenceQueryBuilder(relationName)
    const assembler = AssemblerFactory.getAssembler(RelationClass, this.getReferenceEntity(relationName))
    const filterQuery = referenceQueryBuilder.buildFilterQuery(assembler.convertQuery({ filter: opts?.filter }).filter)

    let arrayDto = dto as Entity[]

    if (!Array.isArray(dto)) {
      arrayDto = [dto]
    }

    let references: [Entity, Relation | undefined][]

    if (
      !this.referenceCacheService.isCachedRelation(RelationClass) ||
      (opts?.filter && Object.keys(opts.filter).length > 0) ||
      this.getReferenceModel(relationName).schema?.virtuals?.[relationName]
      // !(relationName in arrayDto[0]) /* @TODO Replace with: arrayDto[0].schema.virtuals[relationName] (after updating tests) */
    ) {
      // console.log('no cache', RelationClass, opts?.filter)

      // references = await this.queryRelation(RelationClass, relationName, arrayDto, { filter: opts?.filter })

      // eslint-disable-next-line no-underscore-dangle
      const foundEntities = await this.Model.find({ _id: { $in: arrayDto.map((d) => d._id ?? d.id) } })
        .populate({
          path: relationName,
          match: filterQuery
        })
        .lean()

      references = await Promise.all(
        arrayDto.map(async (d) => {
          let populatedRef: Relation | undefined
          const foundEntity = foundEntities.find(
            (entity) => (entity._id.toString() ?? entity.id.toString()) === (d._id.toString() ?? d.id.toString())
          )

          // @TODO add tests with multiple entities that checks for order
          if (typeof foundEntity !== 'undefined') {
            populatedRef = foundEntity[relationName]
          }

          if (populatedRef) {
            if (populatedRef._id) {
              await this.referenceCacheService.set(RelationClass, populatedRef._id, populatedRef)
            }
          }

          return [d, populatedRef ? assembler.convertToDTO(populatedRef) : undefined]
        })
      )
    } else {
      const unresolvedReferences: string[] = []

      // Find unresolved references
      for (const d of arrayDto) {
        if (d[relationName] && !unresolvedReferences.includes(d[relationName])) {
          if (!(await this.referenceCacheService.get(RelationClass, d[relationName]))) {
            unresolvedReferences.push(d[relationName])
          }
        }
      }

      if (unresolvedReferences.length > 0) {
        // console.log('unresolvedReferences', unresolvedReferences)

        // Fetch and cache unresolved references
        const unresolvedReferenceResults = await relationModel
          .find({ _id: { $in: unresolvedReferences.map((ref) => ref) } })
          .lean()
        for (const ref of unresolvedReferenceResults) {
          if (ref._id) {
            await this.referenceCacheService.set(RelationClass, ref._id, ref as unknown as Relation)
          }
        }
      }

      // Set reference results
      references = await Promise.all(
        arrayDto.map(async (d) => {
          if (d[relationName]) {
            const relation = await this.referenceCacheService.get(RelationClass, d[relationName])

            if ((relation as { deleted?: boolean }).deleted !== true) {
              return [d, assembler.convertToDTO(relation)]
            }
          }

          return [d, undefined]
        })
      )
    }

    // console.log(
    //   RelationClass.name,
    //   relationName,
    //   opts,
    //   // arrayDto[0].schema.virtuals,
    //   arrayDto,
    //   Array.isArray(dto) ? new Map(references) : references[0][1]
    // )

    return Array.isArray(dto) ? new Map(references) : references[0][1]
  }

  public queryRelations<Relation extends Base<RefType>>(
    RelationClass: Class<Relation>,
    relationName: string,
    entities: Entity[],
    query: Query<Relation>
  ): Promise<Map<DocumentType<Entity>, DocumentType<Relation>[]>>

  public queryRelations<Relation extends Base<RefType>>(
    RelationClass: Class<Relation>,
    relationName: string,
    dto: Entity,
    query: Query<Relation>
  ): Promise<DocumentType<Relation>[]>

  public async queryRelations<Relation extends Base<RefType>>(
    RelationClass: Class<Relation>,
    relationName: string,
    dto: Entity | Entity[],
    query: Query<Relation>
  ): Promise<Relation[] | Map<Entity, Relation[]>> {
    const relationModel = getModelForClass(RelationClass)
    this.checkForReference('QueryRelations', relationName)
    const referenceQueryBuilder = this.getReferenceQueryBuilder<Relation>(relationName)
    const assembler = AssemblerFactory.getAssembler(RelationClass, this.getReferenceEntity(relationName))
    const { filterQuery, options } = referenceQueryBuilder.buildQuery(assembler.convertQuery(query))

    let arrayDto = dto as Entity[]

    if (!Array.isArray(dto)) {
      arrayDto = [dto]
    }

    let references: [Entity, Relation[]][]

    if (
      !this.referenceCacheService.isCachedRelation(RelationClass) ||
      (query.filter && Object.keys(query.filter).length > 0) ||
      (query.paging && Object.keys(query.paging).length > 0) ||
      (query.sorting && query.sorting.length > 0) ||
      this.getReferenceModel(relationName).schema?.virtuals?.[relationName]
      // !(relationName in arrayDto[0]) /* @TODO Replace with: arrayDto[0].schema.virtuals[relationName] (after updating tests) */
    ) {
      // console.log('no cache', RelationClass, query)

      // references = await this.queryRelation(RelationClass, relationName, arrayDto, query, true)

      // eslint-disable-next-line no-underscore-dangle
      const foundEntities = await this.Model.find({ _id: { $in: arrayDto.map((d) => d._id ?? d.id) } }).populate({
        path: relationName,
        match: filterQuery,
        ...(options.limit ? { perDocumentLimit: options.limit, options: omit(options, 'limit') } : { options })
      })
      // .cacheQuery()

      references = await Promise.all(
        arrayDto.map(async (d) => {
          let populatedRef: Relation[] | undefined
          const foundEntity = foundEntities.find(
            (entity) => (entity._id.toString() ?? entity.id.toString()) === (d._id.toString() ?? d.id.toString())
          )

          // @TODO add tests with multiple entities that checks for order
          if (typeof foundEntity !== 'undefined') {
            populatedRef = foundEntity.get(relationName)

            for (const p of populatedRef) {
              if (p) {
                if (p._id) {
                  await this.referenceCacheService.set(RelationClass, p._id, p)
                }
              }
            }
          }

          return [d, populatedRef ? assembler.convertToDTOs(populatedRef) : []]
        })
      )
    } else {
      const unresolvedReferences: string[] = []

      // Find unresolved references
      for (const d of arrayDto) {
        if (d[relationName] && !unresolvedReferences[d[relationName]]) {
          for (const referenceId of d[relationName]) {
            if (!(await this.referenceCacheService.get(RelationClass, referenceId))) {
              unresolvedReferences.push((referenceId as unknown).toString())
            }
          }
        }
      }

      if (unresolvedReferences.length > 0) {
        // console.log('unresolvedReferences', unresolvedReferences)

        // Fetch and cache unresolved references
        const unresolvedReferenceResults = await relationModel
          .find({ _id: { $in: unresolvedReferences.map((ref) => ref) } })
          .lean()
        for (const ref of unresolvedReferenceResults) {
          if (ref._id) {
            await this.referenceCacheService.set(RelationClass, ref._id, ref as unknown as Relation)
          }
        }
      }

      // Set reference results
      references = await Promise.all(
        arrayDto.map(async (d) => {
          if (d[relationName]) {
            return [
              d,
              assembler
                .convertToDTOs(
                  await Promise.all(
                    d[relationName].map(async (reference) => this.referenceCacheService.get(RelationClass, reference))
                  )
                )
                .filter((item) => item !== undefined && (item as { deleted?: boolean }).deleted !== true)
            ]
          }

          return [d, []]
        })
      )
    }

    return Array.isArray(dto) ? new Map(references) : references[0][1]
  }

  // private async queryRelation<Relation extends Base<RefType>>(
  //   RelationClass: Class<Relation>,
  //   relationName: string,
  //   arrayDto: DocumentType<Entity>[],
  //   query: Query<Relation>,
  //   multiple = false
  // ): Promise<[DocumentType<Entity>, Relation[]][]> {
  //   const referenceQueryBuilder = this.getReferenceQueryBuilder(relationName)
  //   const assembler = AssemblerFactory.getAssembler(RelationClass, this.getReferenceEntity(relationName))
  //
  //   console.log(assembler.convertQuery(query))
  //   const { filterQuery, options } = referenceQueryBuilder.buildFilterQuery(
  //     multiple ? assembler.convertQuery(query) : assembler.convertQuery(query).filter
  //   )
  //   console.log(options)
  //
  //   const foundEntities = await this.Model.find({ _id: { $in: arrayDto.map((d) => d._id ?? d.id) } }).populate({
  //     path: relationName,
  //     match: filterQuery,
  //     ...(options.limit ? { perDocumentLimit: options.limit, options: omit(options, 'limit') } : { options })
  //   })
  //   // .cacheQuery()
  //
  //   const references = arrayDto.map((d) => {
  //     let populatedRef: Relation | Relation[] | undefined
  //     const foundEntity = foundEntities.find(
  //       (entity) => (entity._id.toString() ?? entity.id.toString()) === (d._id.toString() ?? d.id.toString())
  //     )
  //
  //     // @TODO add tests with multiple entities that checks for order
  //     if (typeof foundEntity !== 'undefined') {
  //       populatedRef = foundEntity.get(relationName)
  //     }
  //
  //     if (!populatedRef) {
  //       return multiple ? [d, []] : [d, undefined]
  //     }
  //
  //     if (!Array.isArray(populatedRef)) {
  //       populatedRef = [populatedRef]
  //     }
  //
  //     for (const ref of populatedRef) {
  //       if (ref) {
  //         if (ref._id) {
  //           await this.referenceCacheService.set(RelationClass, ref._id, ref)
  //         }
  //       }
  //     })
  //
  //     return [d, assembler.convertToDTOs(populatedRef)] as [DocumentType<Entity>, Relation[]]
  //   })
  //
  //   return references
  // }

  public async addRelations<Relation>(
    relationName: string,
    id: string,
    relationIds: (string | number)[],
    opts?: ModifyRelationOptions<Entity, Relation>
  ): Promise<Entity> {
    this.checkForReference('AddRelations', relationName, false)
    const refCount = await this.getRefCount(relationName, relationIds, opts?.relationFilter)
    if (relationIds.length !== refCount) {
      throw new Error(`Unable to find all ${relationName} to add to ${this.Model.modelName}`)
    }

    return this.findAndUpdate(id, opts?.filter, {
      $push: { [relationName]: { $each: relationIds } }
    } as mongoose.UpdateQuery<DocumentType<Entity>>)
  }

  public async setRelations<Relation>(
    relationName: string,
    id: string,
    relationIds: (string | number)[],
    opts?: ModifyRelationOptions<Entity, Relation>
  ): Promise<Entity> {
    this.checkForReference('AddRelations', relationName, false)
    const refCount = await this.getRefCount(relationName, relationIds, opts?.relationFilter)

    if (relationIds.length !== refCount) {
      throw new Error(`Unable to find all ${relationName} to set on ${this.Model.modelName}`)
    }

    return this.findAndUpdate(id, opts?.filter, { [relationName]: relationIds } as mongoose.UpdateQuery<DocumentType<Entity>>)
  }

  public async setRelation<Relation>(
    relationName: string,
    id: string | number,
    relationId: string | number,
    opts?: ModifyRelationOptions<Entity, Relation>
  ): Promise<Entity> {
    this.checkForReference('SetRelation', relationName, false)
    const refCount = await this.getRefCount(relationName, [relationId], opts?.relationFilter)
    if (refCount !== 1) {
      throw new Error(`Unable to find ${relationName} to set on ${this.Model.modelName}`)
    }

    return this.findAndUpdate(id, opts?.filter, { [relationName]: relationId } as mongoose.UpdateQuery<DocumentType<Entity>>)
  }

  public async removeRelation<Relation>(
    relationName: string,
    id: string | number,
    relationId: string | number,
    opts?: ModifyRelationOptions<Entity, Relation>
  ): Promise<Entity> {
    this.checkForReference('RemoveRelation', relationName, false)
    const refCount = await this.getRefCount(relationName, [relationId], opts?.relationFilter)
    if (refCount !== 1) {
      throw new Error(`Unable to find ${relationName} to remove from ${this.Model.modelName}`)
    }

    await this.findAndUpdate(id, opts?.filter, { $unset: { [relationName]: relationId } } as mongoose.UpdateQuery<
      DocumentType<Entity>
    >)

    // reload the document
    return this.getById(id)
  }

  public async removeRelations<Relation>(
    relationName: string,
    id: string | number,
    relationIds: string[] | number[],
    opts?: ModifyRelationOptions<Entity, Relation>
  ): Promise<Entity> {
    this.checkForReference('RemoveRelations', relationName, false)
    const refCount = await this.getRefCount(relationName, relationIds, opts?.relationFilter)
    if (relationIds.length !== refCount) {
      throw new Error(`Unable to find all ${relationName} to remove from ${this.Model.modelName}`)
    }
    if (this.isVirtualPath(relationName)) {
      throw new Error(`RemoveRelations not supported for virtual relation ${relationName}`)
    }
    await this.findAndUpdate(id, opts?.filter, { $pullAll: { [relationName]: relationIds } } as mongoose.UpdateQuery<
      DocumentType<Entity>
    >)

    // reload the document
    return this.getById(id)
  }

  private getReferenceEntity(relationName: string) {
    const ReferenceModel = this.getReferenceModel(relationName)
    return getClass(ReferenceModel.modelName) as Class<unknown>
  }

  private isReferencePath(refName: string): boolean {
    return !!this.Model.schema.path(refName)
  }

  private isVirtualPath(refName: string): boolean {
    return !!this.Model.schema.virtualpath(refName)
  }

  private getReferenceFilter<Relation>(refName: string, entity: Entity, filter?: Filter<Relation>): Filter<Relation> | undefined {
    if (this.isReferencePath(refName)) {
      return this.getObjectIdReferenceFilter(refName, entity, filter)
    }
    if (this.isVirtualPath(refName)) {
      const virtualType = this.Model.schema.virtualpath(refName)
      if (isVirtualTypeWithReferenceOptions(virtualType)) {
        return this.getVirtualReferenceFilter(virtualType, entity, filter)
      }
      throw new Error(`Unable to lookup reference type for ${refName}`)
    }
    return undefined
  }

  private getObjectIdReferenceFilter<Ref>(refName: string, entity: Entity, filter?: Filter<Ref>): Filter<Ref> {
    const referenceIds = entity[refName as keyof Entity]
    const refFilter = {
      _id: { [Array.isArray(referenceIds) ? 'in' : 'eq']: referenceIds }
    } as unknown as Filter<Ref>
    return mergeFilter(filter ?? ({} as Filter<Ref>), refFilter)
  }

  private getVirtualReferenceFilter<Ref>(virtualType: VirtualTypeWithOptions, entity: Entity, filter?: Filter<Ref>): Filter<Ref> {
    const { foreignField, localField } = virtualType.options
    const refVal = entity[localField as keyof Entity]
    const isArray = Array.isArray(refVal)
    const lookupFilter = {
      [foreignField as keyof Ref]: { [isArray ? 'in' : 'eq']: refVal }
    } as unknown as Filter<Ref>
    return mergeFilter(filter ?? ({} as Filter<Ref>), lookupFilter)
  }

  private getReferenceModel<Ref>(refName: string): ReturnModelType<Class<Ref>> {
    let refModel: ReturnModelType<Class<Ref>> | undefined
    if (this.isReferencePath(refName)) {
      const schemaType = this.Model.schema.path(refName)
      if (isEmbeddedSchemaTypeOptions(schemaType)) {
        refModel = getModelWithString(schemaType.$embeddedSchemaType.options.ref)
      } else if (isSchemaTypeWithReferenceOptions(schemaType)) {
        refModel = getModelWithString(schemaType.options.ref)
      }
    } else if (this.isVirtualPath(refName)) {
      const schemaType = this.Model.schema.virtualpath(refName)
      if (isVirtualTypeWithReferenceOptions(schemaType)) {
        refModel = getModelWithString(schemaType.options.ref)
      }
    }
    if (!refModel) {
      throw new Error(`Unable to lookup reference type for ${refName}`)
    }
    return refModel
  }

  private getRefCount<Relation extends Document>(
    relationName: string,
    relationIds: (string | number)[],
    filter?: Filter<Relation>
  ): Promise<number> {
    const referenceModel = this.getReferenceModel<Relation>(relationName)
    const referenceQueryBuilder = this.getReferenceQueryBuilder(relationName)
    return referenceModel.countDocuments(referenceQueryBuilder.buildIdFilterQuery(relationIds, filter)).lean()
  }

  private getReferenceQueryBuilder<Ref>(refName: string): FilterQueryBuilder<Ref> {
    return new FilterQueryBuilder<Ref>(this.getReferenceModel(refName))
  }

  private checkForReference(operation: string, refName: string, allowVirtual = true): void {
    if (this.isReferencePath(refName)) {
      return
    }
    if (this.isVirtualPath(refName)) {
      if (allowVirtual) {
        return
      }
      throw new Error(`${operation} not supported for virtual relation ${refName}`)
    }
    throw new Error(`Unable to find reference ${refName} on ${this.Model.modelName}`)
  }

  private async findAndUpdate(
    id: string | number,
    filter: Filter<Entity>,
    query: mongoose.UpdateQuery<DocumentType<Entity>>
  ): Promise<Entity> {
    const entity = await this.Model.findOneAndUpdate(this.filterQueryBuilder.buildIdFilterQuery(id, filter), query, {
      new: true
    }).lean()
    if (!entity) {
      throw new NotFoundException(`Unable to find ${this.Model.modelName} with id: ${id}`)
    }

    return entity as Entity
  }
}
