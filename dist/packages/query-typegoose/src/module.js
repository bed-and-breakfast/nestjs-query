"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NestjsQueryTypegooseModule = void 0;
const nestjs_typegoose_1 = require("@m8a/nestjs-typegoose");
const providers_1 = require("./providers");
const reference_cache_service_1 = require("./services/reference-cache.service");
class NestjsQueryTypegooseModule {
    static forFeature(models, cacheModels, connectionName) {
        const queryServiceProviders = (0, providers_1.createTypegooseQueryServiceProviders)(models, cacheModels);
        const typegooseModule = nestjs_typegoose_1.TypegooseModule.forFeature(models, connectionName);
        return {
            imports: [typegooseModule],
            module: NestjsQueryTypegooseModule,
            providers: [reference_cache_service_1.ReferenceCacheService, ...queryServiceProviders],
            exports: [reference_cache_service_1.ReferenceCacheService, ...queryServiceProviders, typegooseModule]
        };
    }
}
exports.NestjsQueryTypegooseModule = NestjsQueryTypegooseModule;
//# sourceMappingURL=module.js.map