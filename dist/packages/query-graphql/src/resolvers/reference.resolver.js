"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReferenceResolver = exports.Referenceable = void 0;
const tslib_1 = require("tslib");
const common_1 = require("@nestjs/common");
const graphql_1 = require("@nestjs/graphql");
const common_2 = require("../common");
const inject_dataloader_config_decorator_1 = require("../decorators/inject-dataloader-config.decorator");
const loader_1 = require("../loader");
const resolver_interface_1 = require("./resolver.interface");
/**
 * @internal
 * Mixin to expose `resolveReference` for a DTO on the resolver.
 */
const Referenceable = (DTOClass, opts) => (BaseClass) => {
    if (!('key' in opts) || opts.key === undefined) {
        return BaseClass;
    }
    const { key } = opts;
    const { baseName } = (0, common_2.getDTONames)(DTOClass);
    const loaderName = `loadReference${baseName}`;
    const referenceLoader = new loader_1.ReferenceLoader(DTOClass);
    let ResolveReferenceResolverBase = class ResolveReferenceResolverBase extends BaseClass {
        constructor() {
            super(...arguments);
            this.logger = new common_1.Logger(`ReferenceResolver<${baseName}>`);
        }
        async resolveReference(representation, context, dataLoaderConfig) {
            const id = representation[key];
            if (id === undefined) {
                throw new common_1.BadRequestException(`Unable to resolve reference, missing required key ${key} for ${baseName}`);
            }
            // Safety check for service availability
            if (!this.service) {
                throw new common_1.BadRequestException(`Service not available for ${baseName} reference resolution`);
            }
            // Ensure loader name is unique in Federation scenarios
            const serviceName = this.service?.constructor?.name || 'UnknownService';
            const uniqueLoaderName = `${loaderName}_${serviceName}`;
            const loader = loader_1.DataLoaderFactory.getOrCreateLoader(context, uniqueLoaderName, () => referenceLoader.createLoader(this.service, key), {
                // Ensure batching is enabled for performance
                batch: true,
                cache: true,
                maxBatchSize: 1000,
                ...dataLoaderConfig
            });
            const result = await loader.load({ [key]: id });
            if (!result) {
                this.logger.error(`Unable to find ${baseName} with ${key}: ${String(id)}`);
                throw new common_1.BadRequestException(`Unable to find ${baseName} with ${key}: ${String(id)}`);
            }
            return result;
        }
    };
    tslib_1.__decorate([
        (0, graphql_1.ResolveReference)(),
        tslib_1.__param(0, (0, graphql_1.Parent)()),
        tslib_1.__param(1, (0, graphql_1.Context)()),
        tslib_1.__param(2, (0, inject_dataloader_config_decorator_1.InjectDataLoaderConfig)()),
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", [Object, Object, Object]),
        tslib_1.__metadata("design:returntype", Promise)
    ], ResolveReferenceResolverBase.prototype, "resolveReference", null);
    ResolveReferenceResolverBase = tslib_1.__decorate([
        (0, graphql_1.Resolver)(() => DTOClass, { isAbstract: true })
    ], ResolveReferenceResolverBase);
    return ResolveReferenceResolverBase;
};
exports.Referenceable = Referenceable;
const ReferenceResolver = (DTOClass, opts = {}) => (0, exports.Referenceable)(DTOClass, opts)(resolver_interface_1.BaseServiceResolver);
exports.ReferenceResolver = ReferenceResolver;
//# sourceMappingURL=reference.resolver.js.map