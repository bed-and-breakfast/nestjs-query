"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPrototypeChain = getPrototypeChain;
function getPrototypeChain(Cls) {
    const baseClass = Object.getPrototypeOf(Cls);
    if (baseClass) {
        return [Cls, ...getPrototypeChain(baseClass)];
    }
    return [Cls];
}
//# sourceMappingURL=class.utils.js.map