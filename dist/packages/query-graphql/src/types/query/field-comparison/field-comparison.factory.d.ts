import { ReturnTypeFunc } from '@nestjs/graphql';
import { Class, FilterComparisonOperators, FilterFieldComparison } from '@ptc-org/nestjs-query-core';
type FilterComparisonOptions<T> = {
    FieldType: Class<T>;
    fieldName: string;
    allowedComparisons?: FilterComparisonOperators<T>[];
    returnTypeFunc?: ReturnTypeFunc;
};
/** @internal */
export declare function createFilterComparisonType<T>(options: FilterComparisonOptions<T>): Class<FilterFieldComparison<T>>;
export {};
