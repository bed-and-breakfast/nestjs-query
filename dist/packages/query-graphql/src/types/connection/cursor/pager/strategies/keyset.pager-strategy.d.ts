import { Class, Query } from '@ptc-org/nestjs-query-core';
import { CursorPagingType } from '../../../../query';
import { KeySetPagingOpts, PagerStrategy } from './pager-strategy';
export declare class KeysetPagerStrategy<DTO> implements PagerStrategy<DTO> {
    readonly DTOClass: Class<DTO>;
    readonly pageFields: (keyof DTO)[];
    private readonly enableFetchAllWithNegative?;
    constructor(DTOClass: Class<DTO>, pageFields: (keyof DTO)[], enableFetchAllWithNegative?: boolean);
    fromCursorArgs(cursor: CursorPagingType): KeySetPagingOpts<DTO>;
    toCursor(dto: DTO, index: number, opts: KeySetPagingOpts<DTO>, query: Query<DTO>): string;
    isEmptyCursor(opts: KeySetPagingOpts<DTO>): boolean;
    createQuery<Q extends Query<DTO>>(query: Q, opts: KeySetPagingOpts<DTO>, includeExtraNode: boolean): Q;
    checkForExtraNode(nodes: DTO[], opts: KeySetPagingOpts<DTO>): DTO[];
    private get defaultSort();
    private encodeCursor;
    private decodeCursor;
    private createFieldsFilter;
    /**
     * @description
     * Strip the default sorting criteria if it is set by the client.
     */
    private getSortFields;
    private createKeySetPayload;
}
