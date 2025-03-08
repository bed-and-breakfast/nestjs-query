"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getOrCreateArrayConnectionType = getOrCreateArrayConnectionType;
const nestjs_query_core_1 = require("@ptc-org/nestjs-query-core");
const reflector = new nestjs_query_core_1.ValueReflector('nestjs-query:array-connection-type');
function getOrCreateArrayConnectionType(TItemClass) {
    return reflector.memoize(TItemClass, () => {
        class AbstractConnection extends Array {
            static async createFromPromise(queryMany, query) {
                // remove paging from the query because the ArrayConnection does not support paging.
                const { paging, ...rest } = query;
                return queryMany(rest);
            }
        }
        AbstractConnection.resolveType = [TItemClass];
        return AbstractConnection;
    });
}
//# sourceMappingURL=array-connection.type.js.map