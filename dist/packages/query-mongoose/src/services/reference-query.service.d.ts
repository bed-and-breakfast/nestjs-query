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
import { AggregateQuery, AggregateResponse, Class, Filter, FindRelationOptions, GetByIdOptions, ModifyRelationOptions, Query } from '@ptc-org/nestjs-query-core';
import { Document, Model as MongooseModel } from 'mongoose';
export declare abstract class ReferenceQueryService<Entity extends Document> {
    abstract readonly Model: MongooseModel<Entity>;
    abstract getById(id: string | number, opts?: GetByIdOptions<Entity>): Promise<Entity>;
    aggregateRelations<Relation extends Document>(RelationClass: Class<Relation>, relationName: string, entities: Entity[], filter: Filter<Relation>, aggregate: AggregateQuery<Relation>): Promise<Map<Entity, AggregateResponse<Relation>[]>>;
    aggregateRelations<Relation extends Document>(RelationClass: Class<Relation>, relationName: string, dto: Entity, filter: Filter<Relation>, aggregate: AggregateQuery<Relation>): Promise<AggregateResponse<Relation>[]>;
    countRelations<Relation extends Document>(RelationClass: Class<Relation>, relationName: string, entities: Entity[], filter: Filter<Relation>): Promise<Map<Entity, number>>;
    countRelations<Relation extends Document>(RelationClass: Class<Relation>, relationName: string, dto: Entity, filter: Filter<Relation>): Promise<number>;
    findRelation<Relation>(RelationClass: Class<Relation>, relationName: string, dtos: Entity[], opts?: FindRelationOptions<Relation>): Promise<Map<Entity, Relation | undefined>>;
    findRelation<Relation>(RelationClass: Class<Relation>, relationName: string, dto: Entity, opts?: FindRelationOptions<Relation>): Promise<Relation | undefined>;
    queryRelations<Relation>(RelationClass: Class<Relation>, relationName: string, entities: Entity[], query: Query<Relation>): Promise<Map<Entity, Relation[]>>;
    queryRelations<Relation>(RelationClass: Class<Relation>, relationName: string, dto: Entity, query: Query<Relation>): Promise<Relation[]>;
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
    private getObjectIdReferenceFilter;
    private getVirtualReferenceFilter;
    private getRefCount;
}
