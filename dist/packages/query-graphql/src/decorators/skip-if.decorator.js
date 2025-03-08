"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SkipIf = SkipIf;
const decorator_utils_1 = require("./decorator.utils");
/**
 * @internal
 * Wraps Args to allow skipping decorating
 * @param check - checker to run.
 * @param decorators - The decorators to apply
 */
function SkipIf(check, ...decorators) {
    if (check()) {
        return () => { };
    }
    return (0, decorator_utils_1.composeDecorators)(...decorators);
}
//# sourceMappingURL=skip-if.decorator.js.map