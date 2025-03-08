"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isNamed = void 0;
exports.upperCaseFirst = upperCaseFirst;
exports.lowerCaseFirst = lowerCaseFirst;
// eslint-disable-next-line @typescript-eslint/no-explicit-any,@typescript-eslint/explicit-module-boundary-types
const isNamed = (SomeType) => 
// eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
'name' in SomeType && typeof SomeType.name === 'string';
exports.isNamed = isNamed;
function upperCaseFirst(input, locale) {
    return input.charAt(0).toLocaleUpperCase(locale) + input.slice(1);
}
function lowerCaseFirst(input) {
    return input.charAt(0).toLowerCase() + input.slice(1);
}
//# sourceMappingURL=misc.utils.js.map