"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CursorPager = void 0;
const EMPTY_PAGING_RESULTS = () => ({
    edges: [],
    pageInfo: { hasNextPage: false, hasPreviousPage: false },
    totalCount: () => Promise.resolve(0)
});
const DEFAULT_PAGING_META = (query) => ({
    opts: { offset: 0, limit: 0, isBackward: false, isForward: true, hasBefore: false },
    query
});
class CursorPager {
    constructor(strategy, enableFetchAllWithNegative) {
        this.strategy = strategy;
        this.enableFetchAllWithNegative = enableFetchAllWithNegative;
    }
    async page(queryMany, query, count) {
        const pagingMeta = this.getPageMeta(query);
        if (!this.isValidPaging(pagingMeta)) {
            return EMPTY_PAGING_RESULTS();
        }
        const results = await this.runQuery(queryMany, query, pagingMeta);
        if (this.isEmptyPage(results, pagingMeta)) {
            return EMPTY_PAGING_RESULTS();
        }
        return this.createPagingResult(results, pagingMeta, () => count(query.filter ?? {}));
    }
    isValidPaging(pagingMeta) {
        const minimumLimit = this.enableFetchAllWithNegative ? -1 : 1;
        const hasLimit = 'limit' in pagingMeta.opts && pagingMeta.opts.limit !== null;
        const isValidLimit = pagingMeta.opts.limit >= minimumLimit;
        if (hasLimit && !isValidLimit) {
            return false;
        }
        if ('offset' in pagingMeta.opts) {
            return pagingMeta.opts.offset > 0 || hasLimit;
        }
        return hasLimit;
    }
    async runQuery(queryMany, query, pagingMeta) {
        const { opts } = pagingMeta;
        const windowedQuery = this.strategy.createQuery(query, opts, true);
        const nodes = await queryMany(windowedQuery);
        const returnNodes = this.strategy.checkForExtraNode(nodes, opts);
        const hasExtraNode = returnNodes.length !== nodes.length;
        return { nodes: returnNodes, hasExtraNode };
    }
    getPageMeta(query) {
        const { paging } = query;
        if (!paging) {
            return DEFAULT_PAGING_META(query);
        }
        return { opts: this.strategy.fromCursorArgs(paging), query };
    }
    createPagingResult(results, pagingMeta, totalCount) {
        const { nodes, hasExtraNode } = results;
        const { isForward, hasBefore } = pagingMeta.opts;
        const edges = nodes.map((node, i) => ({
            node,
            cursor: this.strategy.toCursor(node, i, pagingMeta.opts, pagingMeta.query)
        }));
        const pageInfo = {
            startCursor: edges[0]?.cursor,
            endCursor: edges[edges.length - 1]?.cursor,
            // if we re paging forward and have an extra node we have more pages to load. Or there we know that we have a before cursor, thus we have next page
            hasNextPage: isForward ? hasExtraNode : hasBefore,
            // we have a previous page if we are going backwards and have an extra node.
            hasPreviousPage: this.hasPreviousPage(results, pagingMeta)
        };
        return { edges, pageInfo, totalCount };
    }
    hasPreviousPage(results, pagingMeta) {
        const { hasExtraNode } = results;
        const { opts } = pagingMeta;
        return opts.isBackward ? hasExtraNode : !this.strategy.isEmptyCursor(opts);
    }
    /**
     * @description
     * It is an empty page if:
     *
     * 1. We don't have an extra node.
     * 2. There were no nodes returned.
     * 3. We're paging forward.
     * 4. And we don't have an offset.
     */
    isEmptyPage(results, pagingMeta) {
        const { opts } = pagingMeta;
        const isEmpty = !results.hasExtraNode && !results.nodes.length && pagingMeta.opts.isForward;
        return isEmpty && this.strategy.isEmptyCursor(opts);
    }
}
exports.CursorPager = CursorPager;
//# sourceMappingURL=pager.js.map