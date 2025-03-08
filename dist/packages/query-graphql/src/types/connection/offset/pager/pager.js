"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OffsetPager = void 0;
const EMPTY_PAGING_RESULTS = () => ({
    nodes: [],
    pageInfo: { hasNextPage: false, hasPreviousPage: false },
    totalCount: () => Promise.resolve(0)
});
const DEFAULT_PAGING_META = (query) => ({
    opts: { offset: 0, limit: 0 },
    query
});
class OffsetPager {
    constructor(enableFetchAllWithNegative) {
        this.enableFetchAllWithNegative = enableFetchAllWithNegative;
    }
    async page(queryMany, query, count) {
        const pagingMeta = this.getPageMeta(query);
        if (!this.isValidPaging(pagingMeta)) {
            return EMPTY_PAGING_RESULTS();
        }
        const results = await this.runQuery(queryMany, query, pagingMeta);
        return this.createPagingResult(results, pagingMeta, () => count(query.filter ?? {}));
    }
    isValidPaging(pagingMeta) {
        return pagingMeta.opts.limit >= (this.enableFetchAllWithNegative ? -1 : 1);
    }
    async runQuery(queryMany, query, pagingMeta) {
        const windowedQuery = this.createQuery(query, pagingMeta);
        const nodes = await queryMany(windowedQuery);
        const returnNodes = this.checkForExtraNode(nodes, pagingMeta.opts);
        const hasExtraNode = returnNodes.length !== nodes.length;
        return { nodes: returnNodes, hasExtraNode };
    }
    getPageMeta(query) {
        const { limit = 0, offset = 0 } = query.paging ?? {};
        if (!limit) {
            return DEFAULT_PAGING_META(query);
        }
        return { opts: { limit, offset }, query };
    }
    createPagingResult(results, pagingMeta, totalCount) {
        const { nodes, hasExtraNode } = results;
        const pageInfo = {
            hasNextPage: hasExtraNode,
            // we have a previous page if we are going backwards and have an extra node.
            hasPreviousPage: pagingMeta.opts.offset > 0
        };
        return { nodes, pageInfo, totalCount };
    }
    createQuery(query, pagingMeta) {
        const { limit, offset } = pagingMeta.opts;
        const paging = { limit: limit + 1, offset };
        if (this.enableFetchAllWithNegative && limit === -1)
            delete paging.limit;
        return { ...query, paging };
    }
    checkForExtraNode(nodes, opts) {
        if (this.enableFetchAllWithNegative && opts.limit === -1)
            return nodes;
        const returnNodes = [...nodes];
        const hasExtraNode = nodes.length > opts.limit;
        if (hasExtraNode) {
            returnNodes.pop();
        }
        return returnNodes;
    }
}
exports.OffsetPager = OffsetPager;
//# sourceMappingURL=pager.js.map