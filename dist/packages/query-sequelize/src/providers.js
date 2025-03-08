"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createSequelizeQueryServiceProviders = void 0;
const sequelize_1 = require("@nestjs/sequelize");
const nestjs_query_core_1 = require("@ptc-org/nestjs-query-core");
const services_1 = require("./services");
function createSequelizeQueryServiceProvider(EntityClass, connection) {
    return {
        provide: (0, nestjs_query_core_1.getQueryServiceToken)(EntityClass),
        useFactory(entity) {
            (0, nestjs_query_core_1.AssemblerSerializer)((instance) => instance.get({ plain: true }))(entity);
            // eslint-disable-next-line @typescript-eslint/ban-types
            (0, nestjs_query_core_1.AssemblerDeserializer)((obj) => entity.build(obj))(entity);
            return new services_1.SequelizeQueryService(entity);
        },
        inject: [(0, sequelize_1.getModelToken)(EntityClass, connection)]
    };
}
const createSequelizeQueryServiceProviders = (entities, connection) => entities.map((entity) => createSequelizeQueryServiceProvider(entity, connection));
exports.createSequelizeQueryServiceProviders = createSequelizeQueryServiceProviders;
//# sourceMappingURL=providers.js.map