"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QueryService = QueryService;
const common_1 = require("@nestjs/common");
/**
 * QueryService decorator to register with nestjs-query
 * @param DTOClass - the DTO class that the QueryService is used for.
 * @param options - InjectableOptions
 */
// eslint-disable-next-line @typescript-eslint/no-redeclare,@typescript-eslint/no-unused-vars -- intentional
function QueryService(DTOClass, options) {
    return (cls) => {
        return (0, common_1.Injectable)(options)(cls);
    };
}
//# sourceMappingURL=query.service.js.map