"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getQueryOptions = exports.QueryOptions = void 0;
const nestjs_query_core_1 = require("@ptc-org/nestjs-query-core");
const constants_1 = require("./constants");
const valueReflector = new nestjs_query_core_1.ValueReflector(constants_1.QUERY_OPTIONS_KEY);
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function QueryOptions(opts) {
    return (target) => {
        valueReflector.set(target, opts);
    };
}
exports.QueryOptions = QueryOptions;
const getQueryOptions = (DTOClass) => valueReflector.get(DTOClass);
exports.getQueryOptions = getQueryOptions;
//# sourceMappingURL=query-options.decorator.js.map