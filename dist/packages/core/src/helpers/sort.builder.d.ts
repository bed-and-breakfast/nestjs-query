import { SortDirection, SortField, SortNulls } from '../interfaces';
type SortResult = -1 | 0 | 1;
type SortComparator<Field> = (a: Field, b: Field) => SortResult;
type Sorter<DTO> = (dtos: DTO[]) => DTO[];
export declare class SortBuilder {
    static build<DTO>(sorts: SortField<DTO>[]): Sorter<DTO>;
    static buildComparator<DTO>(field: keyof DTO, direction: SortDirection, nulls?: SortNulls): SortComparator<DTO>;
    static fieldValueComparator<DTO, Field extends keyof DTO>(field: keyof DTO, direction: SortDirection): SortComparator<DTO[Field]>;
    static nullsComparator<Field>(direction: SortDirection, nulls?: SortNulls): SortComparator<Field>;
}
export {};
