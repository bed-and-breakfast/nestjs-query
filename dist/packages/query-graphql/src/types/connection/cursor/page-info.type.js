"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getOrCreatePageInfoType = void 0;
const tslib_1 = require("tslib");
const graphql_1 = require("@nestjs/graphql");
const cursor_scalar_1 = require("../../cursor.scalar");
/** @internal */
let pageInfoType = null;
// eslint-disable-next-line @typescript-eslint/no-redeclare -- intentional
const getOrCreatePageInfoType = () => {
    if (pageInfoType) {
        return pageInfoType;
    }
    let PageInfoTypeImpl = class PageInfoTypeImpl {
        constructor(hasNextPage, hasPreviousPage, startCursor, endCursor) {
            this.hasNextPage = hasNextPage;
            this.hasPreviousPage = hasPreviousPage;
            this.startCursor = startCursor;
            this.endCursor = endCursor;
        }
    };
    tslib_1.__decorate([
        (0, graphql_1.Field)(() => Boolean, { nullable: true, description: 'true if paging forward and there are more records.' }),
        tslib_1.__metadata("design:type", Boolean)
    ], PageInfoTypeImpl.prototype, "hasNextPage", void 0);
    tslib_1.__decorate([
        (0, graphql_1.Field)(() => Boolean, { nullable: true, description: 'true if paging backwards and there are more records.' }),
        tslib_1.__metadata("design:type", Boolean)
    ], PageInfoTypeImpl.prototype, "hasPreviousPage", void 0);
    tslib_1.__decorate([
        (0, graphql_1.Field)(() => cursor_scalar_1.ConnectionCursorScalar, { nullable: true, description: 'The cursor of the first returned record.' }),
        tslib_1.__metadata("design:type", String)
    ], PageInfoTypeImpl.prototype, "startCursor", void 0);
    tslib_1.__decorate([
        (0, graphql_1.Field)(() => cursor_scalar_1.ConnectionCursorScalar, {
            nullable: true,
            description: 'The cursor of the last returned record.'
        }),
        tslib_1.__metadata("design:type", String)
    ], PageInfoTypeImpl.prototype, "endCursor", void 0);
    PageInfoTypeImpl = tslib_1.__decorate([
        (0, graphql_1.ObjectType)('PageInfo'),
        tslib_1.__metadata("design:paramtypes", [Boolean, Boolean, String, String])
    ], PageInfoTypeImpl);
    pageInfoType = PageInfoTypeImpl;
    return pageInfoType;
};
exports.getOrCreatePageInfoType = getOrCreatePageInfoType;
//# sourceMappingURL=page-info.type.js.map