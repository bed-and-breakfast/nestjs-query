"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AssemblerDeserializer = AssemblerDeserializer;
exports.getAssemblerDeserializer = getAssemblerDeserializer;
const common_1 = require("../common");
const constants_1 = require("./constants");
const reflector = new common_1.ValueReflector(constants_1.ASSEMBLER_DESERIALIZER_KEY);
// eslint-disable-next-line @typescript-eslint/no-redeclare -- intentional
function AssemblerDeserializer(deserializer) {
    return (cls) => {
        if (reflector.isDefined(cls)) {
            throw new Error(`Assembler Deserializer already registered for ${cls.name}`);
        }
        reflector.set(cls, deserializer);
        return cls;
    };
}
function getAssemblerDeserializer(DTOClass) {
    return reflector.get(DTOClass, true);
}
//# sourceMappingURL=assembler.deserializer.js.map