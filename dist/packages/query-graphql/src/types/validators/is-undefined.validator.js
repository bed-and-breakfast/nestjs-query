"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IsUndefined = IsUndefined;
const class_validator_1 = require("class-validator");
/** @internal */
function IsUndefined(validationOptions) {
    // eslint-disable-next-line @typescript-eslint/ban-types
    return (obj, property) => (0, class_validator_1.ValidateIf)((o) => o[property] !== undefined, validationOptions)(obj, property);
}
//# sourceMappingURL=is-undefined.validator.js.map