"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NestjsQueryTypegooseModule = void 0;
const nestjs_typegoose_1 = require("@m8a/nestjs-typegoose");
const providers_1 = require("./providers");
const reference_cache_service_1 = require("./services/reference-cache.service");
class NestjsQueryTypegooseModule {
    static forFeature(models, cacheModels, connectionName) {
        const queryServiceProviders = (0, providers_1.createTypegooseQueryServiceProviders)(models);
        const typegooseModule = nestjs_typegoose_1.TypegooseModule.forFeature(models, connectionName);
        const referenceCacheServiceProvider = { provide: reference_cache_service_1.ReferenceCacheService, useValue: new reference_cache_service_1.ReferenceCacheService(cacheModels) };
        return {
            imports: [typegooseModule],
            module: NestjsQueryTypegooseModule,
            providers: [referenceCacheServiceProvider, ...queryServiceProviders],
            exports: [referenceCacheServiceProvider, ...queryServiceProviders, typegooseModule]
        };
    }
}
exports.NestjsQueryTypegooseModule = NestjsQueryTypegooseModule;
//# sourceMappingURL=module.js.map