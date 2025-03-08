"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LimitOffsetPagerStrategy = void 0;
const helpers_1 = require("./helpers");
class LimitOffsetPagerStrategy {
    constructor(enableFetchAllWithNegative) {
        this.enableFetchAllWithNegative = enableFetchAllWithNegative;
    }
    toCursor(dto, index, pagingOpts) {
        return LimitOffsetPagerStrategy.offsetToCursor(pagingOpts.offset + index);
    }
    fromCursorArgs(cursor) {
        const isForward = (0, helpers_1.isForwardPaging)(cursor);
        const isBackward = (0, helpers_1.isBackwardPaging)(cursor);
        const hasBefore = (0, helpers_1.hasBeforeCursor)(cursor);
        return { limit: this.getLimit(cursor), offset: this.getOffset(cursor), isForward, isBackward, hasBefore };
    }
    isEmptyCursor(opts) {
        return opts.offset === 0;
    }
    createQuery(query, opts, includeExtraNode) {
        const { isBackward } = opts;
        const paging = { limit: opts.limit, offset: opts.offset };
        if (includeExtraNode && (!this.enableFetchAllWithNegative || opts.limit !== -1)) {
            // Add 1 to the limit so we will fetch an additional node
            paging.limit += 1;
            // if paging backwards remove one from the offset to check for a previous page.
            if (isBackward) {
                paging.offset -= 1;
            }
            if (paging.offset < 0) {
                // if the offset is < 0 it means we underflowed and that we cant have an extra page.
                paging.offset = 0;
                paging.limit = opts.limit;
            }
        }
        if (this.enableFetchAllWithNegative && paging.limit === -1)
            delete paging.limit;
        return { ...query, paging };
    }
    checkForExtraNode(nodes, opts) {
        if (opts.limit === -1) {
            // If we are fetching all the nodes we don't need to check for an extra node.
            return nodes;
        }
        const returnNodes = [...nodes];
        // check if we have an additional node
        // if paging forward that indicates we have a next page
        // if paging backward that indicates we have a previous page.
        const hasExtraNode = nodes.length > opts.limit;
        if (hasExtraNode) {
            // remove the additional node so its not returned in the results.
            if (opts.isForward) {
                returnNodes.pop();
            }
            else {
                returnNodes.shift();
            }
        }
        return returnNodes;
    }
    getLimit(cursor) {
        if ((0, helpers_1.isBackwardPaging)(cursor)) {
            const { last = 0, before } = cursor;
            const offsetFromCursor = before ? LimitOffsetPagerStrategy.cursorToOffset(before) : 0;
            if (this.enableFetchAllWithNegative && last === -1)
                return offsetFromCursor;
            const offset = offsetFromCursor - last;
            // Check to see if our before-page is underflowing past the 0th item
            if (offset < 0) {
                // Adjust the limit with the underflow value
                return Math.max(last + offset, 0);
            }
            return last;
        }
        return cursor.first ?? 0;
    }
    getOffset(cursor) {
        if ((0, helpers_1.isBackwardPaging)(cursor)) {
            if (this.enableFetchAllWithNegative && cursor.last === -1)
                return 0;
            const { last, before } = cursor;
            const beforeOffset = before ? LimitOffsetPagerStrategy.cursorToOffset(before) : 0;
            const offset = last ? beforeOffset - last : 0;
            // Check to see if our before-page is underflowing past the 0th item
            return Math.max(offset, 0);
        }
        const { after } = cursor;
        const offset = after ? LimitOffsetPagerStrategy.cursorToOffset(after) + 1 : 0;
        return Math.max(offset, 0);
    }
    static offsetToCursor(offset) {
        return (0, helpers_1.encodeBase64)(`${this.CURSOR_PREFIX}${String(offset)}`);
    }
    static cursorToOffset(cursor) {
        return parseInt((0, helpers_1.decodeBase64)(cursor).substring(this.CURSOR_PREFIX.length), 10);
    }
}
exports.LimitOffsetPagerStrategy = LimitOffsetPagerStrategy;
LimitOffsetPagerStrategy.CURSOR_PREFIX = 'arrayconnection:';
//# sourceMappingURL=limit-offset.pager-strategy.js.map