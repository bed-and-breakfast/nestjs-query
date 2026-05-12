"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MikroOrmAssembler = void 0;
const nestjs_query_core_1 = require("@ptc-org/nestjs-query-core");
class MikroOrmAssembler extends nestjs_query_core_1.AbstractAssembler {
    convertToDTO(entity) {
        return entity;
    }
    convertToEntity(dto) {
        return dto;
    }
    convertQuery(query) {
        return query;
    }
    convertAggregateQuery(aggregate) {
        return aggregate;
    }
    convertAggregateResponse(aggregate) {
        return aggregate;
    }
    convertToCreateEntity(create) {
        return create;
    }
    convertToUpdateEntity(update) {
        return update;
    }
}
exports.MikroOrmAssembler = MikroOrmAssembler;
//# sourceMappingURL=mikro-orm.assembler.js.map