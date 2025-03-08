"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isHookClass = isHookClass;
function isHookClass(hook) {
    return typeof hook === 'function' && 'prototype' in hook && 'run' in hook.prototype;
}
//# sourceMappingURL=hooks.js.map