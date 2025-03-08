"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AbstractAssembler = void 0;
const assembler_1 = require("./assembler");
/**
 * Base implementation for Assemblers that requires the implementation of.
 * * convertToDTO
 * * convertToEntity
 * * convertQuery
 *
 */
class AbstractAssembler {
    /**
     * @param DTOClass - Optional class definition for the DTO. If not provided it will be looked up from the \@Assembler annotation.
     * @param EntityClass - Optional class definition for the entity. If not provided it will be looked up from the \@Assembler annotation.
     */
    constructor(DTOClass, EntityClass) {
        const classes = (0, assembler_1.getAssemblerClasses)(this.constructor);
        const DTOClas = DTOClass ?? classes?.DTOClass;
        const EntityClas = EntityClass ?? classes?.EntityClass;
        if (!DTOClas || !EntityClas) {
            // the DTO and entity classes were not provided and we didnt find them in the metadata storage.
            throw new Error(`Unable to determine DTO or Entity types for ${this.constructor.name}. Did you annotate your assembler with @Assembler`);
        }
        this.DTOClass = DTOClas;
        this.EntityClass = EntityClas;
    }
    convertToDTOs(entities) {
        return Promise.all(entities.map((e) => this.convertToDTO(e)));
    }
    convertToEntities(dtos) {
        return Promise.all(dtos.map((dto) => this.convertToEntity(dto)));
    }
    convertToCreateEntities(createDtos) {
        return Promise.all(createDtos.map((c) => this.convertToCreateEntity(c)));
    }
}
exports.AbstractAssembler = AbstractAssembler;
//# sourceMappingURL=abstract.assembler.js.map