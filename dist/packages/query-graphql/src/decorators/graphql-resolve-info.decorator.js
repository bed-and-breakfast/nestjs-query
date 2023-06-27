"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GraphQLResolveInfo = void 0;
const common_1 = require("@nestjs/common");
const graphql_1 = require("@nestjs/graphql");
const graphql_resolve_info_utils_1 = require("./graphql-resolve-info.utils");
/**
 * @internal this implementation is not final and subjected to change! Use at own risk!
 */
function GraphQLResolveInfo(simplify = true) {
    return (0, common_1.createParamDecorator)((data, ctx) => {
        const resolveInfo = graphql_1.GqlExecutionContext.create(ctx).getInfo();
        if (simplify) {
            return (0, graphql_resolve_info_utils_1.simplifyResolveInfo)(resolveInfo);
        }
        return resolveInfo;
    })();
}
exports.GraphQLResolveInfo = GraphQLResolveInfo;
//# sourceMappingURL=graphql-resolve-info.decorator.js.map