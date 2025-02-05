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
import { DocumentType } from '@typegoose/typegoose';
import { Base } from '@typegoose/typegoose/lib/defaultClasses';
import { RefType } from 'mongoose';
import { FilterQueryBuilder } from '../query';
import { ReturnModelType } from '../typegoose-types.helper';
import { ReferenceCacheService } from './reference-cache.service';
export declare abstract class ReferenceQueryService<Entity extends Base> {
    readonly Model: ReturnModelType<new () => Entity>;
    protected readonly referenceCacheService?: ReferenceCacheService;
    abstract readonly filterQueryBuilder: FilterQueryBuilder<Entity>;
    protected constructor(Model: ReturnModelType<new () => Entity>, referenceCacheService?: ReferenceCacheService);
    abstract getById(id: string | number, opts?: GetByIdOptions<Entity>): Promise<Entity>;
    aggregateRelations<Relation>(RelationClass: Class<Relation>, relationName: string, entities: DocumentType<Entity>[], filter: Filter<Relation>, aggregate: AggregateQuery<Relation>): Promise<Map<DocumentType<Entity>, AggregateResponse<DocumentType<Relation>>[]>>;
    aggregateRelations<Relation>(RelationClass: Class<Relation>, relationName: string, dto: DocumentType<Entity>, filter: Filter<Relation>, aggregate: AggregateQuery<Relation>): Promise<AggregateResponse<DocumentType<Relation>>[]>;
    countRelations<Relation>(RelationClass: Class<Relation>, relationName: string, entities: DocumentType<Entity>[], filter: Filter<Relation>): Promise<Map<DocumentType<Entity>, number>>;
    countRelations<Relation>(RelationClass: Class<Relation>, relationName: string, dto: DocumentType<Entity>, filter: Filter<Relation>): Promise<number>;
    findRelation<Relation extends Base<RefType>>(RelationClass: Class<Relation>, relationName: string, dtos: Entity[], opts?: FindRelationOptions<Relation>): Promise<Map<Entity, Relation | undefined>>;
    findRelation<Relation extends Base<RefType>>(RelationClass: Class<Relation>, relationName: string, dto: Entity, opts?: FindRelationOptions<Relation>): Promise<DocumentType<Relation> | undefined>;
    queryRelations<Relation extends Base<RefType>>(RelationClass: Class<Relation>, relationName: string, entities: Entity[], query: Query<Relation>): Promise<Map<DocumentType<Entity>, DocumentType<Relation>[]>>;
    queryRelations<Relation extends Base<RefType>>(RelationClass: Class<Relation>, relationName: string, dto: Entity, query: Query<Relation>): Promise<DocumentType<Relation>[]>;
    addRelations<Relation>(relationName: string, id: string, relationIds: (string | number)[], opts?: ModifyRelationOptions<Entity, Relation>): Promise<Entity>;
    setRelations<Relation>(relationName: string, id: string, relationIds: (string | number)[], opts?: ModifyRelationOptions<Entity, Relation>): Promise<Entity>;
    setRelation<Relation>(relationName: string, id: string | number, relationId: string | number, opts?: ModifyRelationOptions<Entity, Relation>): Promise<Entity>;
    removeRelation<Relation>(relationName: string, id: string | number, relationId: string | number, opts?: ModifyRelationOptions<Entity, Relation>): Promise<Entity>;
    removeRelations<Relation>(relationName: string, id: string | number, relationIds: string[] | number[], opts?: ModifyRelationOptions<Entity, Relation>): Promise<Entity>;
    private getReferenceEntity;
    private isReferencePath;
    private isVirtualPath;
    private getReferenceFilter;
    private getObjectIdReferenceFilter;
    private getVirtualReferenceFilter;
    private getReferenceModel;
    private getRefCount;
    private getReferenceQueryBuilder;
    private checkForReference;
    private findAndUpdate;
}
