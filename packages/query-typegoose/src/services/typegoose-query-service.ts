import { NotFoundException, Optional } from '@nestjs/common'
import {
  AggregateQuery,
  AggregateResponse,
  DeepPartial,
  DeleteManyResponse,
  DeleteOneOptions,
  Filter,
  FindByIdOptions,
  GetByIdOptions,
  Query,
  QueryService,
  UpdateManyResponse,
  UpdateOneOptions
} from '@ptc-org/nestjs-query-core'
import { DocumentType, mongoose } from '@typegoose/typegoose'
import { Base } from '@typegoose/typegoose/lib/defaultClasses'
import { plainToClass } from 'class-transformer'
import { PipelineStage } from 'mongoose'

import { AggregateBuilder, FilterQueryBuilder } from '../query'
import { TypegooseClass } from '../typegoose-interface.helpers'
import { ReturnModelType, UpdateArrayQuery } from '../typegoose-types.helper'
import { ReferenceCacheService } from './reference-cache.service'
import { ReferenceQueryService } from './reference-query.service'

export interface TypegooseQueryServiceOpts {
  toObjectOptions?: mongoose.ToObjectOptions
}

export class TypegooseQueryService<Entity extends Base> extends ReferenceQueryService<Entity> implements QueryService<Entity> {
  constructor(
    // @TODO Casting should probably be handled by assembler
    readonly Entity: TypegooseClass,
    readonly Model: ReturnModelType<new () => Entity>,
    @Optional() protected readonly referenceCacheService?: ReferenceCacheService,
    readonly filterQueryBuilder: FilterQueryBuilder<Entity> = new FilterQueryBuilder(Model)
  ) {
    super(Model, referenceCacheService)
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
  async query(query: Query<Entity>): Promise<Entity[]> {
    const { filterQuery, options } = this.filterQueryBuilder.buildQuery(query)
    const entities = await this.Model.find(filterQuery, {}, options).lean()

    return entities.map((entity) => plainToClass(this.Entity, entity) as typeof entity)
  }

  async aggregate(filter: Filter<Entity>, aggregateQuery: AggregateQuery<Entity>): Promise<AggregateResponse<Entity>[]> {
    const { aggregate, filterQuery, options } = this.filterQueryBuilder.buildAggregateQuery(aggregateQuery, filter)
    const aggPipeline: PipelineStage[] = [{ $match: filterQuery }, { $group: aggregate }]
    if (options.sort) {
      aggPipeline.push({ $sort: options.sort ?? {} })
    }
    const aggResult = await this.Model.aggregate<Record<string, unknown>>(aggPipeline).exec()
    return AggregateBuilder.convertToAggregateResponse(aggResult)
  }

  count(filter: Filter<Entity>): Promise<number> {
    const filterQuery = this.filterQueryBuilder.buildFilterQuery(filter)
    return this.Model.countDocuments(filterQuery).exec()
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
  async findById(id: string | number, opts?: FindByIdOptions<Entity>): Promise<Entity | undefined> {
    const filterQuery = this.filterQueryBuilder.buildIdFilterQuery(id, opts?.filter)
    const doc = await this.Model.findOne(filterQuery).lean()
    if (!doc) {
      return undefined
    }

    return plainToClass(this.Entity, doc) as typeof doc
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
  async getById(id: string, opts?: GetByIdOptions<Entity>): Promise<Entity> {
    const doc = await this.findById(id, opts)
    if (!doc) {
      throw new NotFoundException(`Unable to find ${this.Model.modelName} with id: ${id}`)
    }
    return doc
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
  async createOne(record: DeepPartial<Entity>): Promise<DocumentType<Entity>> {
    // this.ensureIdIsNotPresent(record)
    const doc = await this.Model.create(record)
    return doc
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
  async createMany(records: DeepPartial<Entity>[]): Promise<DocumentType<Entity>[]> {
    // records.forEach((r) => this.ensureIdIsNotPresent(r))
    const entities = await this.Model.create(records)
    return entities
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
  async updateOne(id: string, update: DeepPartial<Entity>, opts?: UpdateOneOptions<Entity>): Promise<DocumentType<Entity>> {
    this.ensureIdIsNotPresent(update)
    const filterQuery = this.filterQueryBuilder.buildIdFilterQuery(id, opts?.filter)
    const doc = await this.Model.findOneAndUpdate(filterQuery, this.getUpdateQuery(update as DocumentType<Entity>), {
      new: true
    })
    if (!doc) {
      throw new NotFoundException(`Unable to find ${this.Model.modelName} with id: ${id}`)
    }
    return doc
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
  async updateMany(update: DeepPartial<Entity>, filter: Filter<Entity>): Promise<UpdateManyResponse> {
    this.ensureIdIsNotPresent(update)
    const filterQuery = this.filterQueryBuilder.buildFilterQuery(filter)
    const res = await this.Model.updateMany(filterQuery, this.getUpdateQuery(update as DocumentType<Entity>)).exec()
    return { updatedCount: res.modifiedCount || 0 }
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
  async deleteOne(id: string, opts?: DeleteOneOptions<Entity>): Promise<DocumentType<Entity>> {
    const filterQuery = this.filterQueryBuilder.buildIdFilterQuery(id, opts?.filter)
    const doc = await this.Model.findOneAndDelete(filterQuery)
    if (!doc) {
      throw new NotFoundException(`Unable to find ${this.Model.modelName} with id: ${id}`)
    }
    return doc
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
  async deleteMany(filter: Filter<Entity>): Promise<DeleteManyResponse> {
    const filterQuery = this.filterQueryBuilder.buildFilterQuery(filter)
    const res = await this.Model.deleteMany(filterQuery).exec()
    return { deletedCount: res.deletedCount || 0 }
  }

  private ensureIdIsNotPresent(e: DeepPartial<Entity>): void {
    if (Object.entries(e).find(([k, v]) => (k === 'id' || k === '_id') && typeof v !== `undefined`)) {
      throw new Error('Id cannot be specified when updating or creating')
    }
  }

  private getUpdateQuery(entity: DocumentType<Entity>): mongoose.UpdateQuery<DocumentType<Entity>> {
    if (entity instanceof this.Model) {
      return entity.modifiedPaths().reduce(
        (update: mongoose.UpdateQuery<DocumentType<Entity>>, k) =>
          // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
          ({ ...update, [k]: entity.get(k) }),
        {}
      )
    }
    const arrayUpdateQuery: mongoose.UpdateQuery<unknown> = this.buildArrayUpdateQuery(entity as DeepPartial<Entity>)
    return { ...entity, ...arrayUpdateQuery } as mongoose.UpdateQuery<DocumentType<Entity>>
  }

  private buildArrayUpdateQuery(entity: DeepPartial<Entity>) {
    // eslint-disable-next-line prefer-const
    let query = {
      $addToSet: {},
      $pull: {}
    } as UpdateArrayQuery<Entity>

    Object.keys(entity).forEach((key) => {
      if (this.Model.schema.path(key) instanceof mongoose.Schema.Types.Array && typeof entity[key as keyof Entity] === 'object') {
        // Converting the type of the object as it has the custom array input type.
        const convert = entity[key as keyof Entity] as unknown as { push: Entity[]; pull: Entity[] }

        if (Object.prototype.hasOwnProperty.call(convert, 'push')) {
          // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
          query.$addToSet[key] = { $each: convert.push }
        }

        if (Object.prototype.hasOwnProperty.call(convert, 'pull')) {
          query.$pull[key] = {}
          convert.pull.forEach((item, index) => {
            Object.keys(item).forEach((innerKey) => {
              if (query.$pull[key][innerKey] !== undefined) {
                query.$pull[key][innerKey].$in.push(convert.pull[index][innerKey as keyof Entity])
              } else {
                query.$pull[key][innerKey] = { $in: [convert.pull[index][innerKey as keyof Entity]] }
              }
            })
          })
        }

        if (
          Object.prototype.hasOwnProperty.call(entity[key as keyof Entity], 'push') ||
          Object.prototype.hasOwnProperty.call(entity[key as keyof Entity], 'pull')
        ) {
          // eslint-disable-next-line no-param-reassign
          delete entity[key as keyof Entity]
        }
      }
    })

    return query
  }
}
