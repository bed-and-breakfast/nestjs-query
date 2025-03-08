"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Assembler = Assembler;
exports.getAssemblers = getAssemblers;
exports.getAssemblerClasses = getAssemblerClasses;
const common_1 = require("../common");
const constants_1 = require("./constants");
const assemblerReflector = new common_1.ValueReflector(constants_1.ASSEMBLER_CLASSES_KEY);
const reflector = new common_1.MapReflector(constants_1.ASSEMBLER_KEY);
/**
 * Class decorator for Assemblers to register them with nestjs-query
 * @param DTOClass - the DTO class.
 * @param EntityClass - The entity class.
 */
// eslint-disable-next-line @typescript-eslint/no-redeclare -- intentional
function Assembler(DTOClass, EntityClass) {
    return (cls) => {
        if (reflector.has(DTOClass, EntityClass)) {
            throw new Error(`Assembler already registered for ${DTOClass.name} ${EntityClass.name}`);
        }
        assemblerReflector.set(cls, { DTOClass, EntityClass });
        reflector.set(DTOClass, EntityClass, cls);
        return cls;
    };
}
function getAssemblers(DTOClass) {
    return reflector.get(DTOClass);
}
function getAssemblerClasses(AssemblerClass) {
    return assemblerReflector.get(AssemblerClass);
}
//# sourceMappingURL=assembler.js.map