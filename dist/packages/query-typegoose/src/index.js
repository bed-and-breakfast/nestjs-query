"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TypegooseQueryService = exports.ReferenceCacheService = exports.NestjsQueryTypegooseModule = exports.NestjsQueryTypegooseCacheModule = void 0;
const tslib_1 = require("tslib");
var cache_module_1 = require("./cache-module");
Object.defineProperty(exports, "NestjsQueryTypegooseCacheModule", { enumerable: true, get: function () { return cache_module_1.NestjsQueryTypegooseCacheModule; } });
tslib_1.__exportStar(require("./decorators/relation-cache.decorator"), exports);
var module_1 = require("./module");
Object.defineProperty(exports, "NestjsQueryTypegooseModule", { enumerable: true, get: function () { return module_1.NestjsQueryTypegooseModule; } });
var services_1 = require("./services");
Object.defineProperty(exports, "ReferenceCacheService", { enumerable: true, get: function () { return services_1.ReferenceCacheService; } });
Object.defineProperty(exports, "TypegooseQueryService", { enumerable: true, get: function () { return services_1.TypegooseQueryService; } });
//# sourceMappingURL=index.js.map