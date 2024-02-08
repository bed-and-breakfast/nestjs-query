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
const inject_dataloader_config_decorator_1 = require("../../decorators/inject-dataloader-config.decorator");
const interceptors_1 = require("../../interceptors");
const loader_1 = require("../../loader");
const types_1 = require("../../types");
const helpers_1 = require("../helpers");
const resolver_interface_1 = require("../resolver.interface");
const helpers_2 = require("./helpers");
const GraphQLInfo = () => {
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
        async [_a = `find${baseName}`](dto, context, authFilter, resolveInfo, dataLoaderConfig, info) {
            if (info?.fields && Object.values(info.fields).length === 1 && info.fields.id) {
                return { id: dto[relationName] };
            }
            const results = await loader_1.DataLoaderFactory.getOrCreateLoader(context, loaderName, () => findLoader.createLoader(this.service, {
                resolveInfo: resolveInfo?.info,
                withDeleted: relation.withDeleted,
                lookedAhead: relation.enableLookAhead
            }), dataLoaderConfig).load({
                dto,
                filter: authFilter,
                relations: resolveInfo?.relations
            });
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
        tslib_1.__param(3, (0, decorators_1.GraphQLResultInfo)(DTOClass)),
        tslib_1.__param(4, (0, inject_dataloader_config_decorator_1.InjectDataLoaderConfig)()),
        tslib_1.__param(5, GraphQLInfo()),
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", [Object, Object, Object, Object, Object, Object]),
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
        async [_a = `query${pluralBaseName}`](dto, q, context, relationFilter, resolveInfo, dataLoaderConfig, relations, info) {
            const relationQuery = await (0, helpers_1.transformAndValidate)(RelationQA, q);
            // @TODO Test loading only ids, also with virtuals
            if (info?.fields && Object.values(info.fields).length === 1 && info.fields.id) {
                if (Array.isArray(dto[relationName]) &&
                    (!info.args.filter || Object.keys(info.args.filter).length === 0) &&
                    (!info.args.sorting || info.args.sorting.length === 0) &&
                    (!info.args.paging || Object.keys(info.args.paging).length === 0)) {
                    return CT.createFromPromise(
                    // eslint-disable-next-line @typescript-eslint/require-await
                    async () => dto[relationName].map((id) => ({ id })), (0, nestjs_query_core_1.mergeQuery)(relationQuery, { filter: relationFilter, relations }), 
                    // eslint-disable-next-line @typescript-eslint/require-await
                    async () => dto[relationName].length);
                }
            }
            const relationLoader = loader_1.DataLoaderFactory.getOrCreateLoader(context, relationLoaderName, () => queryLoader.createLoader(this.service), dataLoaderConfig);
            const relationCountLoader = loader_1.DataLoaderFactory.getOrCreateLoader(context, countRelationLoaderName, () => countLoader.createLoader(this.service), dataLoaderConfig);
            return CT.createFromPromise((query) => relationLoader.load({ dto, query }), (0, nestjs_query_core_1.mergeQuery)(relationQuery, { filter: relationFilter, relations: resolveInfo?.relations }), (filter) => relationCountLoader.load({ dto, filter }));
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
        tslib_1.__param(4, (0, decorators_1.GraphQLResultInfo)(DTOClass)),
        tslib_1.__param(5, (0, inject_dataloader_config_decorator_1.InjectDataLoaderConfig)()),
        tslib_1.__param(6, (0, decorators_1.GraphQLLookAheadRelations)(DTOClass)),
        tslib_1.__param(7, GraphQLInfo()),
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", [Object, RelationQA, Object, Object, Object, Object, Array, Object]),
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