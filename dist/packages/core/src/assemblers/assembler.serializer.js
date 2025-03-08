"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AssemblerSerializer = AssemblerSerializer;
exports.getAssemblerSerializer = getAssemblerSerializer;
const common_1 = require("../common");
const constants_1 = require("./constants");
const reflector = new common_1.ValueReflector(constants_1.ASSEMBLER_SERIALIZER_KEY);
// eslint-disable-next-line @typescript-eslint/no-redeclare -- intentional
function AssemblerSerializer(serializer) {
    return (cls) => {
        if (reflector.isDefined(cls)) {
            throw new Error(`Assembler Serializer already registered for ${cls.name}`);
        }
        reflector.set(cls, serializer);
        return cls;
    };
}
function getAssemblerSerializer(DTOClass) {
    return reflector.get(DTOClass, true);
}
//# sourceMappingURL=assembler.serializer.js.map