import { AggregateQuery, AggregateResponse, Class, Filter, FindRelationOptions, GetByIdOptions, ModifyRelationOptions, Query } from '@ptc-org/nestjs-query-core';
import { Document, Model as MongooseModel } from 'mongoose';
export declare abstract class ReferenceQueryService<Entity extends Document> {
    abstract readonly Model: MongooseModel<Entity>;
    abstract getById(id: string | number, opts?: GetByIdOptions<Entity>): Promise<Entity>;
    aggregateRelations<Relation extends Document>(RelationClass: Class<Relation>, relationName: string, entities: Entity[], filter: Filter<Relation>, aggregate: AggregateQuery<Relation>): Promise<Map<Entity, AggregateResponse<Relation>[]>>;
    aggregateRelations<Relation extends Document>(RelationClass: Class<Relation>, relationName: string, dto: Entity, filter: Filter<Relation>, aggregate: AggregateQuery<Relation>): Promise<AggregateResponse<Relation>[]>;
    countRelations<Relation extends Document>(RelationClass: Class<Relation>, relationName: string, entities: Entity[], filter: Filter<Relation>): Promise<Map<Entity, number>>;
    countRelations<Relation extends Document>(RelationClass: Class<Relation>, relationName: string, dto: Entity, filter: Filter<Relation>): Promise<number>;
    findRelation<Relation extends Document>(RelationClass: Class<Relation>, relationName: string, dtos: Entity[], opts?: FindRelationOptions<Relation>): Promise<Map<Entity, Relation | undefined>>;
    findRelation<Relation extends Document>(RelationClass: Class<Relation>, relationName: string, dto: Entity, opts?: FindRelationOptions<Relation>): Promise<Relation | undefined>;
    /**
     * Query for an array of relations for multiple dtos.
     * @param RelationClass - The class to serialize the relations into.
     * @param dtos - The entities to query relations for.
     * @param relationName - The name of relation to query for.
     * @param opts - A query to filter, page or sort relations.
     * @param withDeleted - Also query the soft deleted records
     */
    private batchQueryRelations;
    /**
     * Query for an array of relations for multiple dtos.
     * @param RelationClass - The class to serialize the relations into.
     * @param entities - The entities to query relations for.
     * @param relationName - The name of relation to query for.
     * @param filter - Filter.
     * @param query - A query to filter, page or sort relations.
     */
    private batchAggregateRelations;
    /**
     * Count the number of relations for multiple dtos.
     * @param RelationClass - The class to serialize the relations into.
     * @param entities - The entities to query relations for.
     * @param relationName - The name of relation to query for.
     * @param filter - The filter to apply to the relation query.
     */
    private batchCountRelations;
    /**
     * Query for a relation for multiple dtos.
     * @param RelationClass - The class to serialize the relations into.
     * @param dtos - The dto to query relations for.
     * @param relationName - The name of relation to query for.
     * @param opts - A query to filter, page or sort relations.
     */
    private batchFindRelations;
    queryRelations<Relation extends Document>(RelationClass: Class<Relation>, relationName: string, entities: Entity[], query: Query<Relation>): Promise<Map<Entity, Relation[]>>;
    queryRelations<Relation extends Document>(RelationClass: Class<Relation>, relationName: string, dto: Entity, query: Query<Relation>): Promise<Relation[]>;
    addRelations<Relation extends Document>(relationName: string, id: string, relationIds: (string | number)[], opts?: ModifyRelationOptions<Entity, Relation>): Promise<Entity>;
    setRelations<Relation extends Document>(relationName: string, id: string, relationIds: (string | number)[], opts?: ModifyRelationOptions<Entity, Relation>): Promise<Entity>;
    setRelation<Relation extends Document>(relationName: string, id: string | number, relationId: string | number, opts?: ModifyRelationOptions<Entity, Relation>): Promise<Entity>;
    removeRelation<Relation extends Document>(relationName: string, id: string | number, relationId: string | number, opts?: ModifyRelationOptions<Entity, Relation>): Promise<Entity>;
    removeRelations<Relation extends Document>(relationName: string, id: string | number, relationIds: string[] | number[], opts?: ModifyRelationOptions<Entity, Relation>): Promise<Entity>;
    private checkForReference;
    private isReferencePath;
    private isVirtualPath;
    private getReferenceQueryBuilder;
    private getReferenceModel;
    private getReferenceFilter;
    private getReferenceIds;
    private getReferenceFieldMap;
    private getRefCount;
}
