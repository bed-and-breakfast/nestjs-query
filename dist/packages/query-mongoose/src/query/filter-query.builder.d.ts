/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/callback" />
/// <reference types="mongoose/types/collection" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/expressions" />
/// <reference types="mongoose/types/helpers" />
/// <reference types="mongoose/types/middlewares" />
/// <reference types="mongoose/types/indexes" />
/// <reference types="mongoose/types/models" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/populate" />
/// <reference types="mongoose/types/query" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose/types/schematypes" />
/// <reference types="mongoose/types/session" />
/// <reference types="mongoose/types/types" />
/// <reference types="mongoose/types/utility" />
/// <reference types="mongoose/types/validation" />
/// <reference types="mongoose/types/virtuals" />
/// <reference types="mongoose/types/inferschematype" />
import { AggregateQuery, Filter, Query, SortField } from '@ptc-org/nestjs-query-core';
import { Document, FilterQuery, Model as MongooseModel } from 'mongoose';
import { AggregateBuilder, MongooseGroupAndAggregate } from './aggregate.builder';
import { WhereBuilder } from './where.builder';
type MongooseSort = Record<string, 1 | -1>;
type MongooseQuery<Entity extends Document> = {
    filterQuery: FilterQuery<Entity>;
    options: {
        limit?: number;
        skip?: number;
        sort?: MongooseSort;
    };
};
type MongooseAggregateQuery<Entity extends Document> = MongooseQuery<Entity> & {
    aggregate: MongooseGroupAndAggregate;
};
/**
 * @internal
 *
 * Class that will convert a Query into a `typeorm` Query Builder.
 */
export declare class FilterQueryBuilder<Entity extends Document> {
    readonly Model: MongooseModel<Entity>;
    readonly whereBuilder: WhereBuilder<Entity>;
    readonly aggregateBuilder: AggregateBuilder<Entity>;
    constructor(Model: MongooseModel<Entity>, whereBuilder?: WhereBuilder<Entity>, aggregateBuilder?: AggregateBuilder<Entity>);
    buildQuery({ filter, paging, sorting }: Query<Entity>): MongooseQuery<Entity>;
    buildAggregateQuery(aggregate: AggregateQuery<Entity>, filter?: Filter<Entity>): MongooseAggregateQuery<Entity>;
    buildIdAggregateQuery(id: unknown, filter: Filter<Entity>, aggregate: AggregateQuery<Entity>): MongooseAggregateQuery<Entity>;
    buildIdFilterQuery(id: unknown, filter?: Filter<Entity>): FilterQuery<Entity>;
    /**
     * Applies the filter from a Query to a `typeorm` QueryBuilder.
     *
     * @param filter - the filter.
     */
    buildFilterQuery(filter?: Filter<Entity>): FilterQuery<Entity>;
    /**
     * Applies the ORDER BY clause to a `typeorm` QueryBuilder.
     * @param sorts - an array of SortFields to create the ORDER BY clause.
     */
    buildSorting(sorts?: SortField<Entity>[]): MongooseSort | undefined;
    private buildAggregateSorting;
}
export {};
