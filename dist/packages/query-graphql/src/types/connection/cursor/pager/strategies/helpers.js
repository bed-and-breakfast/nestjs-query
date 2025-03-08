"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isBackwardPaging = isBackwardPaging;
exports.isForwardPaging = isForwardPaging;
exports.hasBeforeCursor = hasBeforeCursor;
exports.encodeBase64 = encodeBase64;
exports.decodeBase64 = decodeBase64;
function isBackwardPaging(cursor) {
    return typeof cursor.last !== 'undefined';
}
function isForwardPaging(cursor) {
    return !isBackwardPaging(cursor);
}
function hasBeforeCursor(cursor) {
    return isBackwardPaging(cursor) && !!cursor.before;
}
function encodeBase64(str) {
    return Buffer.from(str, 'utf8').toString('base64');
}
function decodeBase64(str) {
    return Buffer.from(str, 'base64').toString('utf8');
}
//# sourceMappingURL=helpers.js.map