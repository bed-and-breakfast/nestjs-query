"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReadRelationsResolver = exports.ReadRelationsMixin = void 0;
const tslib_1 = require("tslib");
const common_1 = require("@nestjs/common");
const graphql_1 = require("@nestjs/graphql");
const nestjs_query_core_1 = require("@ptc-org/nestjs-query-core");
const auth_1 = require("../../auth");
const common_2 = require("../../common");
const decorators_1 = require("../../decorators");
const graphql_resolve_info_utils_1 = require("../../decorators/graphql-resolve-info.utils");
const interceptors_1 = require("../../interceptors");
const loader_1 = require("../../loader");
const types_1 = require("../../types");
const helpers_1 = require("../helpers");
const resolver_interface_1 = require("../resolver.interface");
const helpers_2 = require("./helpers");
const Info = () => {
    return (0, common_1.createParamDecorator)((data, ctx) => {
        const info = graphql_1.GqlExecutionContext.create(ctx).getInfo();
        return (0, graphql_resolve_info_utils_1.simplifyResolveInfo)(info);
    })();
};
const ReadOneRelationMixin = (DTOClass, relation) => (Base) => {
    var _a;
    if (relation.disableRead) {
        return Base;
    }
    const commonResolverOpts = (0, helpers_2.removeRelationOpts)(relation);
    const relationDTO = relation.DTO;
    const { baseNameLower, baseName } = (0, common_2.getDTONames)(relationDTO, { dtoName: relation.dtoName });
    const relationName = relation.relationName ?? baseNameLower;
    const loaderName = `load${baseName}For${DTOClass.name}`;
    const findLoader = new loader_1.FindRelationsLoader(relationDTO, relationName);
    let ReadOneMixin = class ReadOneMixin extends Base {
        async [_a = `find${baseName}`](dto, context, authFilter, relations, info) {
            console.log(info, dto[relationName]);
            if (Object.values(info.fields).length === 1 && info.fields.id) {
                return { id: dto[relationName] };
            }
            const results = await loader_1.DataLoaderFactory.getOrCreateLoader(context, loaderName, findLoader.createLoader(this.service, {
                withDeleted: relation.withDeleted,
                lookedAhead: relation.enableLookAhead
            })).load({
                dto,
                filter: authFilter,
                relations
            });
            console.log(results);
            return results;
        }
    };
    tslib_1.__decorate([
        (0, decorators_1.ResolverField)(baseNameLower, () => relationDTO, { nullable: relation.nullable, complexity: relation.complexity, description: relation?.description }, commonResolverOpts, { interceptors: [(0, interceptors_1.AuthorizerInterceptor)(DTOClass)] }),
        tslib_1.__param(0, (0, graphql_1.Parent)()),
        tslib_1.__param(1, (0, graphql_1.Context)()),
        tslib_1.__param(2, (0, decorators_1.RelationAuthorizerFilter)(baseNameLower, {
            operationGroup: auth_1.OperationGroup.READ,
            many: false
        })),
        tslib_1.__param(3, (0, decorators_1.GraphQLLookAheadRelations)(DTOClass)),
        tslib_1.__param(4, Info()),
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", [Object, Object, Object, Array, Object]),
        tslib_1.__metadata("design:returntype", Promise)
    ], ReadOneMixin.prototype, _a, null);
    ReadOneMixin = tslib_1.__decorate([
        (0, graphql_1.Resolver)(() => DTOClass, { isAbstract: true })
    ], ReadOneMixin);
    return ReadOneMixin;
};
const ReadManyRelationMixin = (DTOClass, relation) => (Base) => {
    var _a;
    if (relation.disableRead) {
        return Base;
    }
    const commonResolverOpts = (0, helpers_2.removeRelationOpts)(relation);
    const relationDTO = relation.DTO;
    const dtoName = (0, common_2.getDTONames)(DTOClass).baseName;
    const { pluralBaseNameLower, pluralBaseName } = (0, common_2.getDTONames)(relationDTO, { dtoName: relation.dtoName });
    const relationName = relation.relationName ?? pluralBaseNameLower;
    const relationLoaderName = `load${pluralBaseName}For${DTOClass.name}`;
    const countRelationLoaderName = `count${pluralBaseName}For${DTOClass.name}`;
    const queryLoader = new loader_1.QueryRelationsLoader(relationDTO, relationName);
    const countLoader = new loader_1.CountRelationsLoader(relationDTO, relationName);
    const connectionName = `${dtoName}${pluralBaseName}Connection`;
    let RelationQA = class RelationQA extends (0, types_1.QueryArgsType)(relationDTO, {
        ...relation,
        connectionName,
        disableKeySetPagination: true
    }) {
    };
    RelationQA = tslib_1.__decorate([
        (0, graphql_1.ArgsType)()
    ], RelationQA);
    // disable keyset pagination for relations otherwise recursive paging will not work
    const { ConnectionType: CT } = RelationQA;
    let ReadManyMixin = class ReadManyMixin extends Base {
        async [_a = `query${pluralBaseName}`](dto, q, context, relationFilter, relations, info) {
            console.log(info, dto[relationName], relationFilter);
            if (Object.values(info.fields).length === 1 && info.fields.id) {
                // return CT.createFromPromise(
                //   (query) => relationLoader.load({ dto, query }),
                //   mergeQuery(relationQuery, { filter: relationFilter, relations }),
                //   (filter) => relationCountLoader.load({ dto, filter })
                // )
            }
            const relationQuery = await (0, helpers_1.transformAndValidate)(RelationQA, q);
            const relationLoader = loader_1.DataLoaderFactory.getOrCreateLoader(context, relationLoaderName, queryLoader.createLoader(this.service));
            const relationCountLoader = loader_1.DataLoaderFactory.getOrCreateLoader(context, countRelationLoaderName, countLoader.createLoader(this.service));
            return CT.createFromPromise((query) => {
                console.log('query', query);
                return relationLoader.load({ dto, query });
            }, (0, nestjs_query_core_1.mergeQuery)(relationQuery, { filter: relationFilter, relations }), (filter) => {
                console.log('filter', filter);
                return relationCountLoader.load({ dto, filter });
            });
        }
    };
    tslib_1.__decorate([
        (0, decorators_1.ResolverField)(pluralBaseNameLower, () => CT.resolveType, { nullable: relation.nullable, complexity: relation.complexity, description: relation?.description }, commonResolverOpts, { interceptors: [(0, interceptors_1.AuthorizerInterceptor)(DTOClass)] }),
        tslib_1.__param(0, (0, graphql_1.Parent)()),
        tslib_1.__param(1, (0, graphql_1.Args)()),
        tslib_1.__param(2, (0, graphql_1.Context)()),
        tslib_1.__param(3, (0, decorators_1.RelationAuthorizerFilter)(pluralBaseNameLower, {
            operationGroup: auth_1.OperationGroup.READ,
            many: true
        })),
        tslib_1.__param(4, (0, decorators_1.GraphQLLookAheadRelations)(relationDTO)),
        tslib_1.__param(5, Info()),
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", [Object, RelationQA, Object, Object, Array, Object]),
        tslib_1.__metadata("design:returntype", Promise)
    ], ReadManyMixin.prototype, _a, null);
    ReadManyMixin = tslib_1.__decorate([
        (0, graphql_1.Resolver)(() => DTOClass, { isAbstract: true })
    ], ReadManyMixin);
    return ReadManyMixin;
};
const ReadRelationsMixin = (DTOClass, relations) => (Base) => {
    const { many, one, enableTotalCount } = relations;
    const manyRelations = (0, helpers_2.flattenRelations)(many ?? {});
    const oneRelations = (0, helpers_2.flattenRelations)(one ?? {});
    const WithMany = manyRelations.reduce((RB, a) => ReadManyRelationMixin(DTOClass, { enableTotalCount, ...a })(RB), Base);
    return oneRelations.reduce((RB, a) => ReadOneRelationMixin(DTOClass, a)(RB), WithMany);
};
exports.ReadRelationsMixin = ReadRelationsMixin;
const ReadRelationsResolver = (DTOClass, relations) => (0, exports.ReadRelationsMixin)(DTOClass, relations)(resolver_interface_1.BaseServiceResolver);
exports.ReadRelationsResolver = ReadRelationsResolver;
//# sourceMappingURL=read-relations.resolver.js.map