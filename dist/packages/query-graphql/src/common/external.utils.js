"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findGraphqlObjectMetadata = findGraphqlObjectMetadata;
exports.getGraphqlObjectMetadata = getGraphqlObjectMetadata;
exports.getGraphqlObjectName = getGraphqlObjectName;
exports.getGraphqlEnumMetadata = getGraphqlEnumMetadata;
const graphql_1 = require("@nestjs/graphql");
const lazy_metadata_storage_1 = require("@nestjs/graphql/dist/schema-builder/storages/lazy-metadata.storage");
const type_errors_1 = require("../types/type.errors");
/**
 * @internal
 */
function findGraphqlObjectMetadata(objType) {
    return graphql_1.TypeMetadataStorage.getObjectTypesMetadata().find((o) => o.target === objType);
}
function getGraphqlObjectMetadata(objType, notFoundMsg) {
    const metadata = findGraphqlObjectMetadata(objType);
    if (!metadata) {
        throw new type_errors_1.UnregisteredObjectType(objType, notFoundMsg);
    }
    return metadata;
}
function getGraphqlObjectName(DTOClass, notFoundMsg) {
    return getGraphqlObjectMetadata(DTOClass, notFoundMsg).name;
}
// eslint-disable-next-line @typescript-eslint/ban-types
function getGraphqlEnumMetadata(objType) {
    // hack to get enums loaded it may break in the future :(
    lazy_metadata_storage_1.LazyMetadataStorage.load();
    return graphql_1.TypeMetadataStorage.getEnumsMetadata().find((o) => o.ref === objType);
}
//# sourceMappingURL=external.utils.js.map