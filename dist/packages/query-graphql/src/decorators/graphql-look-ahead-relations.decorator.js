"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GraphQLLookAheadRelations = void 0;
const common_1 = require("@nestjs/common");
const graphql_1 = require("@nestjs/graphql");
const graphql_resolve_info_utils_1 = require("./graphql-resolve-info.utils");
const relation_decorator_1 = require("./relation.decorator");
function createLookAheadInfo(relations, simpleResolveInfo) {
    return relations
        .map((relation) => {
        if (relation.name in simpleResolveInfo.fields) {
            return {
                name: relation.name,
                query: simpleResolveInfo.fields[relation.name].args || {}
            };
        }
        return false;
    })
        .filter(Boolean);
}
/**
 * @internal this implementation is not final and subjected to change! Use at own risk!
 */
const GraphQLLookAheadRelations = (DTOClass) => {
    // Get all relations that have look ahead enabled
    const relations = (0, relation_decorator_1.getRelationsDescriptors)(DTOClass).filter((relation) => relation.relationOpts.enableLookAhead && !relation.isMany);
    if (relations.length === 0) {
        return () => [];
    }
    return (0, common_1.createParamDecorator)((data, ctx) => {
        const info = graphql_1.GqlExecutionContext.create(ctx).getInfo();
        return createLookAheadInfo(relations, (0, graphql_resolve_info_utils_1.simplifyResolveInfo)(info));
    })();
};
exports.GraphQLLookAheadRelations = GraphQLLookAheadRelations;
//# sourceMappingURL=graphql-look-ahead-relations.decorator.js.map