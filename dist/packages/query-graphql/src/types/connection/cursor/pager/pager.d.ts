import { CursorQueryArgsType } from '../../../query';
import { Count, Pager, QueryMany } from '../../interfaces';
import { CursorPagerResult } from './interfaces';
import { PagerStrategy } from './strategies';
export declare class CursorPager<DTO> implements Pager<DTO, CursorPagerResult<DTO>> {
    readonly strategy: PagerStrategy<DTO>;
    private readonly enableFetchAllWithNegative?;
    constructor(strategy: PagerStrategy<DTO>, enableFetchAllWithNegative?: boolean);
    page<Q extends CursorQueryArgsType<DTO>>(queryMany: QueryMany<DTO, Q>, query: Q, count: Count<DTO>): Promise<CursorPagerResult<DTO>>;
    private isValidPaging;
    private runQuery;
    private getPageMeta;
    private createPagingResult;
    private hasPreviousPage;
    /**
     * @description
     * It is an empty page if:
     *
     * 1. We don't have an extra node.
     * 2. There were no nodes returned.
     * 3. We're paging forward.
     * 4. And we don't have an offset.
     */
    private isEmptyPage;
}
