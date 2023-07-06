"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NestjsQueryTypegooseCacheModule = void 0;
const tslib_1 = require("tslib");
const cache_manager_1 = require("@nestjs/cache-manager");
const common_1 = require("@nestjs/common");
const reference_cache_service_1 = require("./services/reference-cache.service");
let NestjsQueryTypegooseCacheModule = class NestjsQueryTypegooseCacheModule {
};
NestjsQueryTypegooseCacheModule = tslib_1.__decorate([
    (0, common_1.Global)(),
    (0, common_1.Module)({
        imports: [cache_manager_1.CacheModule.register({ ttl: 0 })],
        providers: [reference_cache_service_1.ReferenceCacheService],
        exports: [reference_cache_service_1.ReferenceCacheService]
    })
], NestjsQueryTypegooseCacheModule);
exports.NestjsQueryTypegooseCacheModule = NestjsQueryTypegooseCacheModule;
//# sourceMappingURL=cache-module.js.map