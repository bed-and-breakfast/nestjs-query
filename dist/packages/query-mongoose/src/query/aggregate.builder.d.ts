import { AggregateQuery, AggregateQueryField, AggregateResponse } from '@ptc-org/nestjs-query-core';
import { Document } from 'mongoose';
type Aggregate = Record<string, Record<string, unknown>>;
type Group = {
    _id: Record<string, string> | null;
};
export type MongooseGroupAndAggregate = Aggregate & Group;
/**
 * @internal
 * Builds a WHERE clause from a Filter.
 */
export declare class AggregateBuilder<Entity extends Document> {
    static convertToAggregateResponse<Entity>(aggregates: Record<string, unknown>[]): AggregateResponse<Entity>[];
    private static extractResponse;
    /**
     * Builds a aggregate SELECT clause from a aggregate.
     * @param aggregate - the aggregates to select.
     */
    build(aggregate: AggregateQuery<Entity>): MongooseGroupAndAggregate;
    private createAggSelect;
    private createGroupBySelect;
    getGroupBySelects(aggregatedFields?: AggregateQueryField<Entity>[]): string[] | undefined;
    private getGroupByAlias;
}
export {};
