"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getQueryServiceToken = getQueryServiceToken;
exports.getAssemblerQueryServiceToken = getAssemblerQueryServiceToken;
function getQueryServiceToken(DTOClass) {
    return `${DTOClass.name}QueryService`;
}
function getAssemblerQueryServiceToken(AssemblerClass) {
    return `${AssemblerClass.name}QueryService`;
}
//# sourceMappingURL=helpers.js.map