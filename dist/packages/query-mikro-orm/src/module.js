"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NestjsQueryMikroOrmModule = void 0;
const nestjs_1 = require("@mikro-orm/nestjs");
const providers_1 = require("./providers");
class NestjsQueryMikroOrmModule {
    static forFeature(entities, dataSource) {
        const queryServiceProviders = (0, providers_1.createMikroOrmQueryServiceProviders)(entities, dataSource);
        const entityClasses = entities.map((e) => (typeof e === 'object' && 'entity' in e ? e.entity : e));
        const mikroOrmModule = nestjs_1.MikroOrmModule.forFeature(entityClasses, dataSource);
        return {
            imports: [mikroOrmModule],
            module: NestjsQueryMikroOrmModule,
            providers: queryServiceProviders,
            exports: [...queryServiceProviders, mikroOrmModule]
        };
    }
}
exports.NestjsQueryMikroOrmModule = NestjsQueryMikroOrmModule;
//# sourceMappingURL=module.js.map