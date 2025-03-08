"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDTOIdTypeOrDefault = exports.getDTONames = void 0;
const graphql_1 = require("@nestjs/graphql");
const nestjs_query_core_1 = require("@ptc-org/nestjs-query-core");
const pluralize_1 = require("pluralize");
const decorators_1 = require("../decorators");
const external_utils_1 = require("./external.utils");
/** @internal */
const getDTONames = (DTOClass, opts) => {
    const baseName = (0, nestjs_query_core_1.upperCaseFirst)(opts?.dtoName ?? (0, external_utils_1.findGraphqlObjectMetadata)(DTOClass)?.name ?? DTOClass.name);
    const pluralBaseName = (0, pluralize_1.plural)(baseName);
    const baseNameLower = (0, nestjs_query_core_1.lowerCaseFirst)(baseName);
    const pluralBaseNameLower = (0, pluralize_1.plural)(baseNameLower);
    return {
        baseName,
        baseNameLower,
        pluralBaseName,
        pluralBaseNameLower
    };
};
exports.getDTONames = getDTONames;
const getDTOIdTypeOrDefault = (DTOS, defaultType = graphql_1.ID) => {
    const dtoWithIDField = DTOS.find((dto) => !!(0, decorators_1.getIDField)(dto));
    if (dtoWithIDField) {
        return (0, decorators_1.getIDField)(dtoWithIDField)?.returnTypeFunc() ?? defaultType;
    }
    return defaultType;
};
exports.getDTOIdTypeOrDefault = getDTOIdTypeOrDefault;
//# sourceMappingURL=dto.utils.js.map