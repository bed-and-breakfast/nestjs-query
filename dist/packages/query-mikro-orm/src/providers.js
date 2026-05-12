"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createMikroOrmQueryServiceProviders = createMikroOrmQueryServiceProviders;
const nestjs_1 = require("@mikro-orm/nestjs");
const nestjs_query_core_1 = require("@ptc-org/nestjs-query-core");
const services_1 = require("./services");
function createMikroOrmQueryServiceProvider(EntityClass, DTOClass, AssemblerClass, dataSource) {
    return {
        provide: (0, nestjs_query_core_1.getQueryServiceToken)(DTOClass ?? EntityClass),
        useFactory(repo) {
            if (AssemblerClass) {
                const assembler = new AssemblerClass();
                return new services_1.MikroOrmQueryService(repo, assembler);
            }
            if (DTOClass) {
                const assembler = nestjs_query_core_1.AssemblerFactory.getAssembler(DTOClass, EntityClass);
                if (assembler) {
                    return new services_1.MikroOrmQueryService(repo, assembler);
                }
            }
            return new services_1.MikroOrmQueryService(repo);
        },
        inject: [(0, nestjs_1.getRepositoryToken)(EntityClass, dataSource)]
    };
}
function createMikroOrmQueryServiceProviders(options, dataSource) {
    return options.map((option) => {
        if (typeof option === 'object' && 'entity' in option) {
            return createMikroOrmQueryServiceProvider(option.entity, option.dto, option.assembler, dataSource);
        }
        return createMikroOrmQueryServiceProvider(option, undefined, undefined, dataSource);
    });
}
//# sourceMappingURL=providers.js.map