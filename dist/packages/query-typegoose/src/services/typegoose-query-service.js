"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TypegooseQueryService = void 0;
const tslib_1 = require("tslib");
const common_1 = require("@nestjs/common");
const typegoose_1 = require("@typegoose/typegoose");
const class_transformer_1 = require("class-transformer");
const query_1 = require("../query");
const reference_cache_service_1 = require("./reference-cache.service");
const reference_query_service_1 = require("./reference-query.service");
let TypegooseQueryService = class TypegooseQueryService extends reference_query_service_1.ReferenceQueryService {
    constructor(
    // @TODO Casting should probably be handled by assembler
    Entity, Model, referenceCacheService, filterQueryBuilder = new query_1.FilterQueryBuilder(Model)) {
        super(Model, referenceCacheService);
        this.Entity = Entity;
        this.Model = Model;
        this.referenceCacheService = referenceCacheService;
        this.filterQueryBuilder = filterQueryBuilder;
    }
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
    async query(query) {
        const { filterQuery, options } = this.filterQueryBuilder.buildQuery(query);
        const entities = await this.Model.find(filterQuery, {}, options).lean().cacheQuery();
        return entities.map((entity) => (0, class_transformer_1.plainToClass)(this.Entity, entity));
    }
    async aggregate(filter, aggregateQuery) {
        const { aggregate, filterQuery, options } = this.filterQueryBuilder.buildAggregateQuery(aggregateQuery, filter);
        const aggPipeline = [{ $match: filterQuery }, { $group: aggregate }];
        if (options.sort) {
            aggPipeline.push({ $sort: options.sort ?? {} });
        }
        // @ts-ignore
        const aggResult = await this.Model.aggregate(aggPipeline).cachePipeline();
        return query_1.AggregateBuilder.convertToAggregateResponse(aggResult);
    }
    async count(filter) {
        const filterQuery = this.filterQueryBuilder.buildFilterQuery(filter);
        return (await this.Model.countDocuments(filterQuery).cacheQuery()) ?? 0;
    }
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
    async findById(id, opts) {
        const filterQuery = this.filterQueryBuilder.buildIdFilterQuery(id, opts?.filter);
        const doc = await this.Model.findOne(filterQuery).lean().cacheQuery();
        if (!doc) {
            return undefined;
        }
        return (0, class_transformer_1.plainToClass)(this.Entity, doc);
    }
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
    async getById(id, opts) {
        const doc = await this.findById(id, opts);
        if (!doc) {
            throw new common_1.NotFoundException(`Unable to find ${this.Model.modelName} with id: ${id}`);
        }
        return doc;
    }
    /**
     * Creates a single entity.
     *
     * @example
     * ```ts
     * const todoItem = await this.service.createOne({title: 'Todo Item', completed: false });
     * ```
     * @param record - The entity to create.
     */
    async createOne(record) {
        this.ensureIdIsNotPresent(record);
        const doc = await this.Model.create(record);
        return doc;
    }
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
    async createMany(records) {
        records.forEach((r) => this.ensureIdIsNotPresent(r));
        const entities = await this.Model.create(records);
        return entities;
    }
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
    async updateOne(id, update, opts) {
        this.ensureIdIsNotPresent(update);
        const filterQuery = this.filterQueryBuilder.buildIdFilterQuery(id, opts?.filter);
        const doc = await this.Model.findOneAndUpdate(filterQuery, this.getUpdateQuery(update), {
            new: true
        });
        if (!doc) {
            throw new common_1.NotFoundException(`Unable to find ${this.Model.modelName} with id: ${id}`);
        }
        return doc;
    }
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
    async updateMany(update, filter) {
        this.ensureIdIsNotPresent(update);
        const filterQuery = this.filterQueryBuilder.buildFilterQuery(filter);
        const res = await this.Model.updateMany(filterQuery, this.getUpdateQuery(update)).exec();
        return { updatedCount: res.modifiedCount || 0 };
    }
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
    async deleteOne(id, opts) {
        const filterQuery = this.filterQueryBuilder.buildIdFilterQuery(id, opts?.filter);
        await this.referenceCacheService.invalidate(this.Entity, id);
        const doc = await this.Model.findOneAndDelete(filterQuery);
        if (!doc) {
            throw new common_1.NotFoundException(`Unable to find ${this.Model.modelName} with id: ${id}`);
        }
        return doc;
    }
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
    async deleteMany(filter) {
        const filterQuery = this.filterQueryBuilder.buildFilterQuery(filter);
        if (this.referenceCacheService.isCachedRelation(this.Entity)) {
            const toBeDeleted = await this.Model.find(filterQuery).select('_id').cacheQuery();
            const deletePromises = [];
            toBeDeleted.forEach((id) => {
                console.log('DID', id);
                deletePromises.push(this.referenceCacheService.invalidate(this.Entity, id));
            });
            await Promise.all(deletePromises);
        }
        const res = await this.Model.deleteMany(filterQuery);
        return { deletedCount: res.deletedCount || 0 };
    }
    ensureIdIsNotPresent(e) {
        if (Object.entries(e).find(([k, v]) => (k === 'id' || k === '_id') && typeof v !== `undefined`)) {
            throw new Error('Id cannot be specified when updating or creating');
        }
    }
    getUpdateQuery(entity) {
        if (entity instanceof this.Model) {
            return entity.modifiedPaths().reduce((update, k) => 
            // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
            ({ ...update, [k]: entity.get(k) }), {});
        }
        const arrayUpdateQuery = this.buildArrayUpdateQuery(entity);
        return { ...entity, ...arrayUpdateQuery };
    }
    buildArrayUpdateQuery(entity) {
        // eslint-disable-next-line prefer-const
        let query = {
            $addToSet: {},
            $pull: {}
        };
        Object.keys(entity).forEach((key) => {
            if (this.Model.schema.path(key) instanceof typegoose_1.mongoose.Schema.Types.Array && typeof entity[key] === 'object') {
                // Converting the type of the object as it has the custom array input type.
                const convert = entity[key];
                if (Object.prototype.hasOwnProperty.call(convert, 'push')) {
                    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
                    query.$addToSet[key] = { $each: convert.push };
                }
                if (Object.prototype.hasOwnProperty.call(convert, 'pull')) {
                    query.$pull[key] = {};
                    convert.pull.forEach((item, index) => {
                        Object.keys(item).forEach((innerKey) => {
                            if (query.$pull[key][innerKey] !== undefined) {
                                query.$pull[key][innerKey].$in.push(convert.pull[index][innerKey]);
                            }
                            else {
                                query.$pull[key][innerKey] = { $in: [convert.pull[index][innerKey]] };
                            }
                        });
                    });
                }
                if (Object.prototype.hasOwnProperty.call(entity[key], 'push') ||
                    Object.prototype.hasOwnProperty.call(entity[key], 'pull')) {
                    // eslint-disable-next-line no-param-reassign
                    delete entity[key];
                }
            }
        });
        return query;
    }
};
TypegooseQueryService = tslib_1.__decorate([
    tslib_1.__param(2, (0, common_1.Optional)()),
    tslib_1.__metadata("design:paramtypes", [Object, Object, reference_cache_service_1.ReferenceCacheService,
        query_1.FilterQueryBuilder])
], TypegooseQueryService);
exports.TypegooseQueryService = TypegooseQueryService;
//# sourceMappingURL=typegoose-query-service.js.map