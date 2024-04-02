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
import { AggregateQuery, AggregateResponse, DeepPartial, DeleteManyResponse, DeleteOneOptions, Filter, FindByIdOptions, GetByIdOptions, Query, QueryService, UpdateManyResponse, UpdateOneOptions } from '@ptc-org/nestjs-query-core';
import { Document, Model as MongooseModel } from 'mongoose';
import { FilterQueryBuilder } from '../query';
import { ReferenceQueryService } from './reference-query.service';
/**
 * Base class for all query services that use Typegoose.
 *
 * @example
 *
 * ```ts
 * @QueryService(TodoItemEntity)
 * export class TodoItemService extends TypegooseQueryService<TodoItemEntity> {
 *   constructor(
 *     @InjectModel(TodoItemEntity) model: ReturnModelType<typeof TodoItemEntity>,
 *   ) {
 *     super(model);
 *   }
 * }
 * ```
 */
export declare class MongooseQueryService<Entity extends Document> extends ReferenceQueryService<Entity> implements QueryService<Entity, DeepPartial<Entity>, DeepPartial<Entity>> {
    readonly Model: MongooseModel<Entity>;
    readonly filterQueryBuilder: FilterQueryBuilder<Entity>;
    constructor(Model: MongooseModel<Entity>, filterQueryBuilder?: FilterQueryBuilder<Entity>);
    /**
     * Query for multiple entities, using a Query from `@ptc-org/nestjs-query-core`.
     *
     * @example
     * ```ts
     * const todoItems = await this.service.query({
     *   filter: { title: { eq: 'Foo' } },
     *   paging: { limit: 10 },
     *   sorting: [{ field: "create", direction: SortDirection.DESC }],
     * });
     * ```
     * @param query - The Query used to filter, page, and sort rows.
     */
    query(query: Query<Entity>): Promise<Entity[]>;
    aggregate(filter: Filter<Entity>, aggregateQuery: AggregateQuery<Entity>): Promise<AggregateResponse<Entity>[]>;
    count(filter: Filter<Entity>): Promise<number>;
    /**
     * Find an entity by it's `id`.
     *
     * @example
     * ```ts
     * const todoItem = await this.service.findById(1);
     * ```
     * @param id - The id of the record to find.
     * @param opts - Additional options
     */
    findById(id: string | number, opts?: FindByIdOptions<Entity>): Promise<Entity | undefined>;
    /**
     * Gets an entity by it's `id`. If the entity is not found a rejected promise is returned.
     *
     * @example
     * ```ts
     * try {
     *   const todoItem = await this.service.getById(1);
     * } catch(e) {
     *   console.error('Unable to find entity with id = 1');
     * }
     * ```
     * @param id - The id of the record to find.
     * @param opts - Additional options
     */
    getById(id: string, opts?: GetByIdOptions<Entity>): Promise<Entity>;
    /**
     * Creates a single entity.
     *
     * @example
     * ```ts
     * const todoItem = await this.service.createOne({title: 'Todo Item', completed: false });
     * ```
     * @param record - The entity to create.
     */
    createOne(record: DeepPartial<Entity>): Promise<Entity>;
    /**
     * Create multiple entities.
     *
     * @example
     * ```ts
     * const todoItem = await this.service.createMany([
     *   {title: 'Todo Item 1', completed: false },
     *   {title: 'Todo Item 2', completed: true },
     * ]);
     * ```
     * @param records - The entities to create.
     */
    createMany(records: DeepPartial<Entity>[]): Promise<Entity[]>;
    /**
     * Update an entity.
     *
     * @example
     * ```ts
     * const updatedEntity = await this.service.updateOne(1, { completed: true });
     * ```
     * @param id - The `id` of the record.
     * @param update - A `Partial` of the entity with fields to update.
     * @param opts - Additional options
     */
    updateOne(id: string, update: DeepPartial<Entity>, opts?: UpdateOneOptions<Entity>): Promise<Entity>;
    /**
     * Update multiple entities with a `@ptc-org/nestjs-query-core` Filter.
     *
     * @example
     * ```ts
     * const { updatedCount } = await this.service.updateMany(
     *   { completed: true }, // the update to apply
     *   { title: { eq: 'Foo Title' } } // Filter to find records to update
     * );
     * ```
     * @param update - A `Partial` of entity with the fields to update
     * @param filter - A Filter used to find the records to update
     */
    updateMany(update: DeepPartial<Entity>, filter: Filter<Entity>): Promise<UpdateManyResponse>;
    /**
     * Delete an entity by `id`.
     *
     * @example
     *
     * ```ts
     * const deletedTodo = await this.service.deleteOne(1);
     * ```
     *
     * @param id - The `id` of the entity to delete.
     * @param opts - Additional filter to use when finding the entity to delete.
     */
    deleteOne(id: string, opts?: DeleteOneOptions<Entity>): Promise<Entity>;
    /**
     * Delete multiple records with a `@ptc-org/nestjs-query-core` `Filter`.
     *
     * @example
     *
     * ```ts
     * const { deletedCount } = this.service.deleteMany({
     *   created: { lte: new Date('2020-1-1') }
     * });
     * ```
     *
     * @param filter - A `Filter` to find records to delete.
     */
    deleteMany(filter: Filter<Entity>): Promise<DeleteManyResponse>;
    private ensureIdIsNotPresent;
    private getUpdateQuery;
}
