import { EntityRepository, FilterQuery, QueryOrderMap } from '@mikro-orm/core';
import { Assembler, Class, CountOptions, Filter, FilterComparisons, FindByIdOptions, FindRelationOptions, GetByIdOptions, NoOpQueryService, Query, QueryOptions, QueryRelationsOptions, SortField } from '@ptc-org/nestjs-query-core';
export declare class MikroOrmQueryService<DTO extends object, Entity extends object = DTO> extends NoOpQueryService<DTO, Entity> {
    protected repo: EntityRepository<Entity>;
    protected assembler?: Assembler<DTO, Entity>;
    constructor(repo: EntityRepository<Entity>, assembler?: Assembler<DTO, Entity>);
    getById(id: string | number, opts?: GetByIdOptions<DTO>): Promise<DTO>;
    findById(id: string | number, opts?: FindByIdOptions<DTO>): Promise<DTO | undefined>;
    query(query: Query<DTO>, _opts?: QueryOptions<DTO>): Promise<DTO[]>;
    count(filter: Filter<DTO>, opts?: CountOptions): Promise<number>;
    protected convertFilter(filter: Filter<DTO> | Filter<Entity> | undefined): FilterQuery<Entity>;
    protected expandFilter(comparisons: FilterComparisons<unknown>): FilterQuery<Entity>;
    protected expandFilterComparison(k: string, v: unknown): [string, unknown];
    findRelation<Relation extends object>(RelationClass: Class<Relation>, relationName: string, entities: DTO | DTO[], opts?: FindRelationOptions<Relation>): Promise<Map<DTO, Relation | undefined> | Relation | undefined>;
    private findRelationForEntity;
    private loadRelationForEntity;
    private matchesFilter;
    countRelations<RelationDTO>(RelationClass: Class<RelationDTO>, relationName: string, dto: DTO, filter: Filter<RelationDTO>, opts?: QueryRelationsOptions): Promise<number>;
    countRelations<RelationDTO>(RelationClass: Class<RelationDTO>, relationName: string, dto: DTO[], filter: Filter<RelationDTO>, opts?: QueryRelationsOptions): Promise<Map<DTO, number>>;
    private countRelationsForEntity;
    queryRelations<RelationDTO>(RelationClass: Class<RelationDTO>, relationName: string, entities: DTO, query: Query<RelationDTO>, opts?: QueryRelationsOptions): Promise<RelationDTO[]>;
    queryRelations<RelationDTO>(RelationClass: Class<RelationDTO>, relationName: string, entities: DTO[], query: Query<RelationDTO>, opts?: QueryRelationsOptions): Promise<Map<DTO, RelationDTO[]>>;
    private queryRelationsForEntity;
    convertSorting<T = Entity>(sorting: Array<SortField<unknown>> | undefined): Array<QueryOrderMap<T>>;
    private convertSortDirection;
}
