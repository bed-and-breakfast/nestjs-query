"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NestjsQueryTypeOrmModule = void 0;
const typeorm_1 = require("@nestjs/typeorm");
const providers_1 = require("./providers");
class NestjsQueryTypeOrmModule {
    static forFeature(entities, dataSource) {
        const queryServiceProviders = (0, providers_1.createTypeOrmQueryServiceProviders)(entities, dataSource);
        const typeOrmModule = typeorm_1.TypeOrmModule.forFeature(entities, dataSource);
        return {
            imports: [typeOrmModule],
            module: NestjsQueryTypeOrmModule,
            providers: [...queryServiceProviders],
            exports: [...queryServiceProviders, typeOrmModule]
        };
    }
}
exports.NestjsQueryTypeOrmModule = NestjsQueryTypeOrmModule;
//# sourceMappingURL=module.js.map