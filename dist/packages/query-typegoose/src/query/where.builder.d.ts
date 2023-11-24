/// <reference types="mongoose/types/query" />
import { Filter } from '@ptc-org/nestjs-query-core';
import { mongoose } from '@typegoose/typegoose';
import { ReturnModelType } from '../typegoose-types.helper';
import { ComparisonBuilder } from './comparison.builder';
/**
 * @internal
 * Builds a WHERE clause from a Filter.
 */
export declare class WhereBuilder<Entity> {
    readonly Model: ReturnModelType<new () => Entity>;
    readonly comparisonBuilder: ComparisonBuilder<Entity>;
    constructor(Model: ReturnModelType<new () => Entity>, comparisonBuilder?: ComparisonBuilder<Entity>);
    /**
     * Builds a WHERE clause from a Filter.
     * @param filter - the filter to build the WHERE clause from.
     */
    build(filter: Filter<Entity>): mongoose.FilterQuery<new () => Entity>;
    /**
     * Normalizes a filter to a dot notation filter for objects with sub objects.
     * @param filter - the filter to normalize.
     * @private
     */
    private getNormalizedFilter;
    /**
     * Checks if a filter is a GraphQLFilter.
     * @param filter - the filter to check.
     * @private
     */
    private isGraphQLFilter;
    /**
     * Creates field comparisons from a filter. This method will ignore and/or properties.
     * @param filter - the filter with fields to create comparisons for.
     */
    private filterFields;
    private getField;
    private withFilterComparison;
}
