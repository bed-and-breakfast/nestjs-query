"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.randomString = randomString;
const uuid_1 = require("uuid");
const replacer = /-/g;
function randomString() {
    return (0, uuid_1.v4)().replace(replacer, '');
}
//# sourceMappingURL=randomString.js.map