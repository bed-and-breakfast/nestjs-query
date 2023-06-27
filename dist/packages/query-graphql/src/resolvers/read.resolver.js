"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReadResolver = exports.Readable = void 0;
const tslib_1 = require("tslib");
const graphql_1 = require("@nestjs/graphql");
const nestjs_query_core_1 = require("@ptc-org/nestjs-query-core");
const lodash_omit_1 = tslib_1.__importDefault(require("lodash.omit"));
const auth_1 = require("../auth");
const common_1 = require("../common");
const decorators_1 = require("../decorators");
const hooks_1 = require("../hooks");
const interceptors_1 = require("../interceptors");
const types_1 = require("../types");
const resolver_interface_1 = require("./resolver.interface");
/**
 * @internal
 * Mixin to add `read` graphql endpoints.
 */
const Readable = (DTOClass, opts) => (BaseClass) => {
    const { baseNameLower, pluralBaseNameLower, baseName } = (0, common_1.getDTONames)(DTOClass, opts);
    const readOneQueryName = opts.one?.name ?? baseNameLower;
    const readManyQueryName = opts.many?.name ?? pluralBaseNameLower;
    const { QueryArgs = (0, types_1.QueryArgsType)(DTOClass, { ...opts, connectionName: `${baseName}Connection` }) } = opts;
    const { ConnectionType } = QueryArgs;
    const commonResolverOpts = (0, lodash_omit_1.default)(opts, 'dtoName', 'one', 'many', 'QueryArgs', 'Connection', 'withDeleted');
    let QA = class QA extends QueryArgs {
    };
    QA = tslib_1.__decorate([
        (0, graphql_1.ArgsType)()
    ], QA);
    let FO = class FO extends (0, types_1.FindOneArgsType)(DTOClass) {
    };
    FO = tslib_1.__decorate([
        (0, graphql_1.ArgsType)()
    ], FO);
    let ReadResolverBase = class ReadResolverBase extends BaseClass {
        async findById(input, authorizeFilter, relations) {
            return this.service.getById(input.id, {
                filter: authorizeFilter,
                withDeleted: opts?.one?.withDeleted,
                relations
            });
        }
        async queryMany(query, authorizeFilter, relations) {
            return ConnectionType.createFromPromise((q) => this.service.query(q), (0, nestjs_query_core_1.mergeQuery)(query, { filter: authorizeFilter, relations }), (filter) => this.service.count(filter));
        }
    };
    tslib_1.__decorate([
        (0, decorators_1.ResolverQuery)(() => DTOClass, { name: readOneQueryName, description: opts?.one?.description }, commonResolverOpts, { interceptors: [(0, interceptors_1.HookInterceptor)(hooks_1.HookTypes.BEFORE_FIND_ONE, DTOClass), (0, interceptors_1.AuthorizerInterceptor)(DTOClass)] }, opts.one ?? {}),
        tslib_1.__param(0, (0, decorators_1.HookArgs)()),
        tslib_1.__param(1, (0, decorators_1.AuthorizerFilter)({
            operationGroup: auth_1.OperationGroup.READ,
            many: false
        })),
        tslib_1.__param(2, (0, decorators_1.GraphQLLookAheadRelations)(DTOClass)),
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", [FO, Object, Array]),
        tslib_1.__metadata("design:returntype", Promise)
    ], ReadResolverBase.prototype, "findById", null);
    tslib_1.__decorate([
        (0, decorators_1.ResolverQuery)(() => QueryArgs.ConnectionType.resolveType, { name: readManyQueryName, description: opts?.many?.description }, commonResolverOpts, { interceptors: [(0, interceptors_1.HookInterceptor)(hooks_1.HookTypes.BEFORE_QUERY_MANY, DTOClass), (0, interceptors_1.AuthorizerInterceptor)(DTOClass)] }, opts.many ?? {}),
        tslib_1.__param(0, (0, decorators_1.HookArgs)()),
        tslib_1.__param(1, (0, decorators_1.AuthorizerFilter)({
            operationGroup: auth_1.OperationGroup.READ,
            many: true
        })),
        tslib_1.__param(2, (0, decorators_1.GraphQLLookAheadRelations)(DTOClass)),
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", [QA, Object, Array]),
        tslib_1.__metadata("design:returntype", Promise)
    ], ReadResolverBase.prototype, "queryMany", null);
    ReadResolverBase = tslib_1.__decorate([
        (0, graphql_1.Resolver)(() => DTOClass, { isAbstract: true })
    ], ReadResolverBase);
    return ReadResolverBase;
};
exports.Readable = Readable;
// eslint-disable-next-line @typescript-eslint/no-redeclare -- intentional
const ReadResolver = (DTOClass, opts = {}) => (0, exports.Readable)(DTOClass, opts)(resolver_interface_1.BaseServiceResolver);
exports.ReadResolver = ReadResolver;
//# sourceMappingURL=read.resolver.js.map