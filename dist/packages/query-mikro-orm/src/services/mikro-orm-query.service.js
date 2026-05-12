"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MikroOrmQueryService = void 0;
const core_1 = require("@mikro-orm/core");
const nestjs_query_core_1 = require("@ptc-org/nestjs-query-core");
class MikroOrmQueryService extends nestjs_query_core_1.NoOpQueryService {
    constructor(repo, assembler) {
        super();
        this.repo = repo;
        this.assembler = assembler;
    }
    async getById(id, opts) {
        const where = this.convertFilter(opts?.filter);
        const meta = this.repo.getEntityManager().getMetadata().get(this.repo.getEntityName());
        const pkField = meta.primaryKeys[0];
        const entity = await this.repo.findOneOrFail({
            ...where,
            [pkField]: id
        });
        if (this.assembler) {
            return this.assembler.convertToDTO(entity);
        }
        return entity;
    }
    async findById(id, opts) {
        const where = this.convertFilter(opts?.filter);
        const meta = this.repo.getEntityManager().getMetadata().get(this.repo.getEntityName());
        const pkField = meta.primaryKeys[0];
        const entity = await this.repo.findOne({
            ...where,
            [pkField]: id
        });
        if (!entity)
            return undefined;
        if (this.assembler) {
            return this.assembler.convertToDTO(entity);
        }
        return entity;
    }
    async query(query, _opts) {
        const convertedQuery = this.assembler?.convertQuery?.(query) ?? query;
        const orderBy = this.convertSorting(convertedQuery.sorting);
        const { limit, offset } = convertedQuery.paging ?? {};
        const where = this.convertFilter(convertedQuery.filter);
        const entities = await this.repo.findAll({
            orderBy,
            limit,
            offset,
            where
        });
        if (this.assembler) {
            return this.assembler.convertToDTOs(entities);
        }
        return entities;
    }
    async count(filter, opts) {
        if (opts?.withDeleted) {
            throw new Error('MikroOrmQueryService does not support withDeleted on count');
        }
        const convertedFilter = this.assembler?.convertQuery?.({ filter })?.filter ?? filter;
        const where = this.convertFilter(convertedFilter);
        return this.repo.count(where);
    }
    convertFilter(filter) {
        if (!filter) {
            return {};
        }
        const convertedFilter = this.assembler?.convertQuery?.({ filter })?.filter ?? filter;
        if ((convertedFilter?.and || convertedFilter?.or) && Object.keys(convertedFilter).length > 1) {
            throw new Error('filter must contain either only `and` or `or` property, or other properties');
        }
        if (convertedFilter?.and) {
            return {
                $and: convertedFilter.and.map((f) => this.convertFilter(f))
            };
        }
        if (convertedFilter?.or) {
            return {
                $or: convertedFilter.or.map((f) => this.convertFilter(f))
            };
        }
        return this.expandFilter(convertedFilter);
    }
    expandFilter(comparisons) {
        const filters = Object.entries(comparisons).map(([k, v]) => {
            return this.expandFilterComparison(k, v);
        });
        return Object.fromEntries(filters);
    }
    expandFilterComparison(k, v) {
        if (k === 'eq' || k === 'is') {
            return ['$eq', v];
        }
        if (k === 'neq' || k === 'isNot') {
            return ['$ne', v];
        }
        if (k === 'gt') {
            return ['$gt', v];
        }
        if (k === 'gte') {
            return ['$gte', v];
        }
        if (k === 'lt') {
            return ['$lt', v];
        }
        if (k === 'lte') {
            return ['$lte', v];
        }
        if (k === 'in') {
            return ['$in', v];
        }
        if (k === 'notIn') {
            return ['$nin', v];
        }
        if (k === 'like') {
            return ['$like', v];
        }
        if (k === 'notLike') {
            return ['$not', { $like: v }];
        }
        if (k === 'iLike') {
            return ['$ilike', v];
        }
        if (k === 'notILike') {
            return ['$not', { $ilike: v }];
        }
        return [k, this.expandFilter(v)];
    }
    async findRelation(RelationClass, relationName, entities, opts) {
        if (!Array.isArray(entities)) {
            const dto = entities;
            const entity = this.assembler ? await Promise.resolve(this.assembler.convertToEntity(dto)) : dto;
            const relation = await this.findRelationForEntity(entity, relationName, opts);
            return relation;
        }
        const entries = await Promise.all(entities.map(async (dto) => {
            const entity = this.assembler ? await Promise.resolve(this.assembler.convertToEntity(dto)) : dto;
            const relation = await this.findRelationForEntity(entity, relationName, opts);
            return [dto, relation];
        }));
        return new Map(entries);
    }
    async findRelationForEntity(entity, relationName, opts) {
        if (opts?.withDeleted) {
            throw new Error('MikroOrmQueryService does not support withDeleted on findRelation');
        }
        const relation = await this.loadRelationForEntity(entity, relationName);
        if (!relation)
            return undefined;
        if (opts?.filter && Object.keys(opts.filter).length > 0) {
            return this.matchesFilter(relation, opts.filter);
        }
        return relation;
    }
    async loadRelationForEntity(entity, relationName) {
        const relationRef = entity[relationName];
        if (!relationRef) {
            const em = this.repo.getEntityManager();
            await em.populate(entity, [relationName]);
            const loadedRef = entity[relationName];
            if (!loadedRef)
                return undefined;
            if ('load' in loadedRef) {
                return (await loadedRef.load()) ?? undefined;
            }
            return loadedRef;
        }
        if ('load' in relationRef) {
            const relation = (await relationRef.load()) ?? undefined;
            return relation;
        }
        const wrapped = (0, core_1.wrap)(relationRef);
        if (!wrapped.isInitialized()) {
            const em = this.repo.getEntityManager();
            await em.refresh(relationRef);
        }
        return relationRef;
    }
    async matchesFilter(relation, filter) {
        const em = this.repo.getEntityManager();
        const where = this.convertFilter(filter);
        const wrapped = (0, core_1.wrap)(relation, true);
        const pk = wrapped.getPrimaryKey();
        const found = await em.findOne(relation.constructor, {
            ...where,
            [wrapped.__meta.primaryKeys[0]]: pk
        });
        return found ?? undefined;
    }
    async countRelations(RelationClass, relationName, entities, filter, opts) {
        if (opts?.withDeleted) {
            throw new Error('MikroOrmQueryService does not support withDeleted on countRelations');
        }
        if (!Array.isArray(entities)) {
            const dto = entities;
            const entity = this.assembler ? await Promise.resolve(this.assembler.convertToEntity(dto)) : dto;
            const count = await this.countRelationsForEntity(entity, relationName, filter);
            return count;
        }
        const entries = await Promise.all(entities.map(async (dto) => {
            const entity = this.assembler ? await Promise.resolve(this.assembler.convertToEntity(dto)) : dto;
            const count = await this.countRelationsForEntity(entity, relationName, filter);
            return [dto, count];
        }));
        return new Map(entries);
    }
    async countRelationsForEntity(entity, relationName, filter) {
        const where = this.convertFilter(filter);
        const collection = entity[relationName];
        const count = await collection.loadCount({ where });
        return count;
    }
    async queryRelations(RelationClass, relationName, entities, query, opts) {
        if (opts?.withDeleted) {
            throw new Error('MikroOrmQueryService does not support withDeleted on queryRelations');
        }
        if (!Array.isArray(entities)) {
            const dto = entities;
            const entity = this.assembler ? await Promise.resolve(this.assembler.convertToEntity(dto)) : dto;
            const relations = await this.queryRelationsForEntity(RelationClass, entity, relationName, query);
            return relations;
        }
        const entries = await Promise.all(entities.map(async (dto) => {
            const entity = this.assembler ? await Promise.resolve(this.assembler.convertToEntity(dto)) : dto;
            const relations = await this.queryRelationsForEntity(RelationClass, entity, relationName, query);
            return [dto, relations];
        }));
        return new Map(entries);
    }
    async queryRelationsForEntity(relationDtoClass, entity, relationName, query) {
        const { offset, limit } = query.paging ?? {};
        const where = this.convertFilter(query.filter);
        const orderBy = this.convertSorting(query.sorting);
        const collection = entity[relationName];
        const relationEntities = !offset && !limit
            ? await collection.loadItems({ orderBy, where })
            : await collection.matching({
                orderBy,
                where,
                offset,
                limit
            });
        if (relationEntities.length === 0) {
            return [];
        }
        const [relationEntity] = relationEntities;
        const entityClass = Object.getPrototypeOf(relationEntity).constructor;
        if (relationDtoClass === entityClass) {
            return relationEntities;
        }
        const assembler = nestjs_query_core_1.AssemblerFactory.getAssembler(relationDtoClass, entityClass);
        const relationDtos = await assembler.convertToDTOs(relationEntities);
        return relationDtos;
    }
    convertSorting(sorting) {
        return (sorting ?? []).map((s) => {
            const direction = this.convertSortDirection(s);
            return {
                [s.field]: direction
            };
        });
    }
    convertSortDirection(s) {
        switch (s.direction) {
            case nestjs_query_core_1.SortDirection.ASC:
                return s.nulls === nestjs_query_core_1.SortNulls.NULLS_FIRST
                    ? core_1.QueryOrder.ASC_NULLS_FIRST
                    : s.nulls === nestjs_query_core_1.SortNulls.NULLS_LAST
                        ? core_1.QueryOrder.ASC_NULLS_LAST
                        : core_1.QueryOrder.ASC;
            case nestjs_query_core_1.SortDirection.DESC:
                return s.nulls === nestjs_query_core_1.SortNulls.NULLS_FIRST
                    ? core_1.QueryOrder.DESC_NULLS_FIRST
                    : s.nulls === nestjs_query_core_1.SortNulls.NULLS_LAST
                        ? core_1.QueryOrder.DESC_NULLS_LAST
                        : core_1.QueryOrder.DESC;
        }
    }
}
exports.MikroOrmQueryService = MikroOrmQueryService;
//# sourceMappingURL=mikro-orm-query.service.js.map