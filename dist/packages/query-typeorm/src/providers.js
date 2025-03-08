"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createTypeOrmQueryServiceProviders = void 0;
const typeorm_1 = require("@nestjs/typeorm");
const nestjs_query_core_1 = require("@ptc-org/nestjs-query-core");
const services_1 = require("./services");
function createTypeOrmQueryServiceProvider(EntityClass, dataSource) {
    return {
        provide: (0, nestjs_query_core_1.getQueryServiceToken)(EntityClass),
        useFactory(repo) {
            return new services_1.TypeOrmQueryService(repo);
        },
        inject: [(0, typeorm_1.getRepositoryToken)(EntityClass, dataSource)]
    };
}
const createTypeOrmQueryServiceProviders = (entities, dataSource) => entities.map((entity) => createTypeOrmQueryServiceProvider(entity, dataSource));
exports.createTypeOrmQueryServiceProviders = createTypeOrmQueryServiceProviders;
//# sourceMappingURL=providers.js.map