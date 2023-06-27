import { Filter, FilterComparisons, FilterFieldComparison } from '../interfaces';
import { QueryFieldMap } from './query.helpers';
export type LikeComparisonOperators = 'like' | 'notLike' | 'iLike' | 'notILike';
export type InComparisonOperators = 'in' | 'notIn';
export type BetweenComparisonOperators = 'between' | 'notBetween';
export type RangeComparisonOperators = 'gt' | 'gte' | 'lt' | 'lte';
export type BooleanComparisonOperators = 'eq' | 'neq' | 'is' | 'isNot';
export declare const isLikeComparisonOperator: (op: unknown) => op is LikeComparisonOperators;
export declare const isInComparisonOperators: (op: unknown) => op is InComparisonOperators;
export declare const isBetweenComparisonOperators: (op: unknown) => op is BetweenComparisonOperators;
export declare const isRangeComparisonOperators: (op: unknown) => op is RangeComparisonOperators;
export declare const isBooleanComparisonOperators: (op: unknown) => op is BooleanComparisonOperators;
export declare const isComparison: <DTO, K extends keyof DTO>(maybeComparison?: (DTO[K] extends infer T ? T extends DTO[K] ? T extends string | String ? import("../interfaces").StringFieldComparisons : T extends boolean | Boolean ? import("../interfaces").BooleanFieldComparisons : T extends number | bigint | symbol | RegExp | Date | (string | number | bigint | boolean | symbol | RegExp | Date)[] ? import("../interfaces").CommonFieldComparisonType<T> : T extends (infer U)[] ? import("../interfaces").CommonFieldComparisonType<U> | Filter<U> : import("../interfaces").CommonFieldComparisonType<T> | Filter<T> : never : never) | Filter<DTO[K]>) => maybeComparison is DTO[K] extends infer T ? T extends DTO[K] ? T extends string | String ? import("../interfaces").StringFieldComparisons : T extends boolean | Boolean ? import("../interfaces").BooleanFieldComparisons : T extends number | bigint | symbol | RegExp | Date | (string | number | bigint | boolean | symbol | RegExp | Date)[] ? import("../interfaces").CommonFieldComparisonType<T> : T extends (infer U)[] ? import("../interfaces").CommonFieldComparisonType<U> | Filter<U> : import("../interfaces").CommonFieldComparisonType<T> | Filter<T> : never : never;
export declare const getFilterFieldComparison: <DTO, K extends keyof DTO>(obj: FilterComparisons<DTO>, field: K) => (DTO[K] extends infer T ? T extends DTO[K] ? T extends string | String ? import("../interfaces").StringFieldComparisons : T extends boolean | Boolean ? import("../interfaces").BooleanFieldComparisons : T extends number | bigint | symbol | RegExp | Date | (string | number | bigint | boolean | symbol | RegExp | Date)[] ? import("../interfaces").CommonFieldComparisonType<T> : T extends (infer U)[] ? import("../interfaces").CommonFieldComparisonType<U> | Filter<U> : import("../interfaces").CommonFieldComparisonType<T> | Filter<T> : never : never) & {
    and?: Filter<DTO[K]>[];
    or?: Filter<DTO[K]>[];
} & FilterComparisons<DTO[K]>;
export declare const transformFilter: <From, To>(filter: Filter<From>, fieldMap: QueryFieldMap<From, To, keyof To>) => Filter<To>;
export declare const mergeFilter: <T>(base: Filter<T>, source: Filter<T>) => Filter<T>;
export declare const getFilterFields: <DTO>(filter: Filter<DTO>) => string[];
export declare const getFilterComparisons: <DTO, K extends keyof DTO>(filter: Filter<DTO>, key: K) => (DTO[K] extends infer T ? T extends DTO[K] ? T extends string | String ? import("../interfaces").StringFieldComparisons : T extends boolean | Boolean ? import("../interfaces").BooleanFieldComparisons : T extends number | bigint | symbol | RegExp | Date | (string | number | bigint | boolean | symbol | RegExp | Date)[] ? import("../interfaces").CommonFieldComparisonType<T> : T extends (infer U)[] ? import("../interfaces").CommonFieldComparisonType<U> | Filter<U> : import("../interfaces").CommonFieldComparisonType<T> | Filter<T> : never : never)[];
export declare const getFilterOmitting: <DTO>(filter: Filter<DTO>, ...keys: (keyof DTO | keyof {
    and?: Filter<DTO>[];
    or?: Filter<DTO>[];
})[]) => Filter<DTO>;
export declare function applyFilter<DTO>(dto: DTO[], filter: Filter<DTO>): DTO[];
export declare function applyFilter<DTO>(dto: DTO, filter: Filter<DTO>): boolean;
