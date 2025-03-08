"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReferenceQueryService = void 0;
/* eslint-disable no-underscore-dangle */
const nestjs_query_core_1 = require("@ptc-org/nestjs-query-core");
const mongoose_1 = require("mongoose");
const mongoose_types_helper_1 = require("../mongoose-types.helper");
const query_1 = require("../query");
class ReferenceQueryService {
    async aggregateRelations(RelationClass, relationName, dto, filter, aggregateQuery) {
        this.checkForReference('AggregateRelations', relationName);
        if (Array.isArray(dto)) {
            return this.batchAggregateRelations(RelationClass, relationName, dto, filter, aggregateQuery);
        }
        const assembler = nestjs_query_core_1.AssemblerFactory.getAssembler(RelationClass, mongoose_1.Document);
        const relationModel = this.getReferenceModel(relationName);
        const referenceQueryBuilder = this.getReferenceQueryBuilder(relationName);
        const refFilter = this.getReferenceFilter(relationName, dto, assembler.convertQuery({ filter }).filter);
        if (!refFilter) {
            return [];
        }
        const { filterQuery, aggregate, options } = referenceQueryBuilder.buildAggregateQuery(assembler.convertAggregateQuery(aggregateQuery), refFilter);
        const aggPipeline = [{ $match: filterQuery }, { $group: aggregate }];
        if (options.sort) {
            aggPipeline.push({ $sort: options.sort ?? {} });
        }
        const aggResult = await relationModel.aggregate(aggPipeline).exec();
        return query_1.AggregateBuilder.convertToAggregateResponse(aggResult);
    }
    async countRelations(RelationClass, relationName, dto, filter) {
        this.checkForReference('CountRelations', relationName);
        if (Array.isArray(dto)) {
            return this.batchCountRelations(RelationClass, relationName, dto, filter);
        }
        const assembler = nestjs_query_core_1.AssemblerFactory.getAssembler(RelationClass, mongoose_1.Document);
        const relationModel = this.getReferenceModel(relationName);
        const referenceQueryBuilder = this.getReferenceQueryBuilder(relationName);
        const refFilter = this.getReferenceFilter(relationName, dto, assembler.convertQuery({ filter }).filter);
        if (!refFilter) {
            return 0;
        }
        return relationModel.countDocuments(referenceQueryBuilder.buildFilterQuery(refFilter)).exec();
    }
    async findRelation(RelationClass, relationName, dto, opts) {
        this.checkForReference('FindRelation', relationName);
        if (Array.isArray(dto)) {
            return this.batchFindRelations(RelationClass, relationName, dto, opts);
        }
        const foundEntity = await this.Model.findById(dto._id ?? dto.id);
        if (!foundEntity) {
            return undefined;
        }
        const assembler = nestjs_query_core_1.AssemblerFactory.getAssembler(RelationClass, mongoose_1.Document);
        const referenceQueryBuilder = this.getReferenceQueryBuilder(relationName);
        const filterQuery = referenceQueryBuilder.buildFilterQuery(assembler.convertQuery({ filter: opts?.filter }).filter);
        const populated = await foundEntity.populate({ path: relationName, match: filterQuery });
        const populatedRef = populated.get(relationName);
        return populatedRef ? assembler.convertToDTO(populatedRef) : undefined;
    }
    /**
     * Query for an array of relations for multiple dtos.
     * @param RelationClass - The class to serialize the relations into.
     * @param dtos - The entities to query relations for.
     * @param relationName - The name of relation to query for.
     * @param opts - A query to filter, page or sort relations.
     * @param withDeleted - Also query the soft deleted records
     */
    async batchQueryRelations(RelationClass, relationName, dtos, opts, withDeleted) {
        const assembler = nestjs_query_core_1.AssemblerFactory.getAssembler(RelationClass, mongoose_1.Document);
        const referenceQueryBuilder = this.getReferenceQueryBuilder(relationName);
        const query = assembler.convertQuery(opts);
        // If paging is enabled, we need to query each entity individually
        if (query.paging) {
            const entityRelations = await Promise.all(dtos.map((d) => this.queryRelations(RelationClass, relationName, d, opts)));
            return entityRelations.reduce((results, relations, index) => {
                const e = dtos[index];
                results.set(e, relations);
                return results;
            }, new Map());
        }
        const refFilter = this.getReferenceFilter(relationName, dtos, query.filter);
        const results = new Map();
        if (!refFilter) {
            return results;
        }
        const refFieldMap = this.getReferenceFieldMap(relationName);
        if (!refFieldMap) {
            return results;
        }
        const { filterQuery, options } = referenceQueryBuilder.buildQuery({ ...query, filter: refFilter });
        const referenceModel = this.getReferenceModel(relationName);
        const entityRelations = await referenceModel.find(filterQuery).sort(options.sort).exec();
        for (const dto of dtos) {
            const referenceIds = this.getReferenceIds(refFieldMap.localField, dto);
            const refs = entityRelations.filter((er) => {
                return referenceIds.some((rid) => {
                    const oneOrManyIds = er[refFieldMap.foreignField];
                    const ids = Array.isArray(oneOrManyIds) ? oneOrManyIds : [oneOrManyIds];
                    return ids.some((id) => String(id) === String(rid));
                });
            });
            results.set(dto, await assembler.convertToDTOs(refs));
        }
        return results;
    }
    /**
     * Query for an array of relations for multiple dtos.
     * @param RelationClass - The class to serialize the relations into.
     * @param entities - The entities to query relations for.
     * @param relationName - The name of relation to query for.
     * @param filter - Filter.
     * @param query - A query to filter, page or sort relations.
     */
    async batchAggregateRelations(RelationClass, relationName, entities, filter, query) {
        const entityRelations = await Promise.all(entities.map((e) => this.aggregateRelations(RelationClass, relationName, e, filter, query)));
        return entityRelations.reduce((results, relationAggregate, index) => {
            const e = entities[index];
            results.set(e, relationAggregate);
            return results;
        }, new Map());
    }
    /**
     * Count the number of relations for multiple dtos.
     * @param RelationClass - The class to serialize the relations into.
     * @param entities - The entities to query relations for.
     * @param relationName - The name of relation to query for.
     * @param filter - The filter to apply to the relation query.
     */
    async batchCountRelations(RelationClass, relationName, entities, filter) {
        const entityRelations = await Promise.all(entities.map((e) => this.countRelations(RelationClass, relationName, e, filter)));
        return entityRelations.reduce((results, relationCount, index) => {
            const e = entities[index];
            results.set(e, relationCount);
            return results;
        }, new Map());
    }
    /**
     * Query for a relation for multiple dtos.
     * @param RelationClass - The class to serialize the relations into.
     * @param dtos - The dto to query relations for.
     * @param relationName - The name of relation to query for.
     * @param opts - A query to filter, page or sort relations.
     */
    async batchFindRelations(RelationClass, relationName, dtos, opts) {
        const batchResults = await this.batchQueryRelations(RelationClass, relationName, dtos, {
            filter: opts?.filter
        }, opts?.withDeleted);
        const results = new Map();
        batchResults.forEach((relation, dto) => {
            // get just the first one.
            results.set(dto, relation[0]);
        });
        return results;
    }
    async queryRelations(RelationClass, relationName, dto, query) {
        this.checkForReference('QueryRelations', relationName);
        if (Array.isArray(dto)) {
            return this.batchQueryRelations(RelationClass, relationName, dto, query);
        }
        const foundEntity = await this.Model.findById(dto._id ?? dto.id);
        if (!foundEntity) {
            return [];
        }
        const assembler = nestjs_query_core_1.AssemblerFactory.getAssembler(RelationClass, mongoose_1.Document);
        const referenceQueryBuilder = this.getReferenceQueryBuilder(relationName);
        const { filterQuery, options } = referenceQueryBuilder.buildQuery(assembler.convertQuery(query));
        const populated = await foundEntity.populate({ path: relationName, match: filterQuery, options });
        return assembler.convertToDTOs(populated.get(relationName));
    }
    async addRelations(relationName, id, relationIds, opts) {
        this.checkForReference('AddRelations', relationName, false);
        const entity = await this.getById(id, opts);
        const refCount = await this.getRefCount(relationName, relationIds, opts?.relationFilter);
        if (relationIds.length !== refCount) {
            throw new Error(`Unable to find all ${relationName} to add to ${this.Model.modelName}`);
        }
        await entity.updateOne({ $push: { [relationName]: { $each: relationIds } } }).exec();
        // reload the document
        return this.getById(id);
    }
    async setRelations(relationName, id, relationIds, opts) {
        this.checkForReference('AddRelations', relationName, false);
        const entity = await this.getById(id, opts);
        const refCount = await this.getRefCount(relationName, relationIds, opts?.relationFilter);
        if (relationIds.length !== refCount) {
            throw new Error(`Unable to find all ${relationName} to set on ${this.Model.modelName}`);
        }
        await entity.updateOne({ [relationName]: relationIds }).exec();
        // reload the document
        return this.getById(id);
    }
    async setRelation(relationName, id, relationId, opts) {
        this.checkForReference('SetRelation', relationName, false);
        const entity = await this.getById(id, opts);
        const refCount = await this.getRefCount(relationName, [relationId], opts?.relationFilter);
        if (refCount !== 1) {
            throw new Error(`Unable to find ${relationName} to set on ${this.Model.modelName}`);
        }
        await entity.updateOne({ [relationName]: relationId }).exec();
        // reload the document
        return this.getById(id);
    }
    async removeRelation(relationName, id, relationId, opts) {
        this.checkForReference('RemoveRelation', relationName, false);
        const entity = await this.getById(id, opts);
        const refCount = await this.getRefCount(relationName, [relationId], opts?.relationFilter);
        if (refCount !== 1) {
            throw new Error(`Unable to find ${relationName} to remove from ${this.Model.modelName}`);
        }
        await entity
            .updateOne({
            $unset: { [relationName]: relationId }
        })
            .exec();
        // reload the document
        return this.getById(id);
    }
    async removeRelations(relationName, id, relationIds, opts) {
        this.checkForReference('RemoveRelations', relationName, false);
        const entity = await this.getById(id, opts);
        const refCount = await this.getRefCount(relationName, relationIds, opts?.relationFilter);
        if (relationIds.length !== refCount) {
            throw new Error(`Unable to find all ${relationName} to remove from ${this.Model.modelName}`);
        }
        if (this.isVirtualPath(relationName)) {
            throw new Error(`RemoveRelations not supported for virtual relation ${relationName}`);
        }
        await entity
            .updateOne({
            $pullAll: { [relationName]: relationIds }
        })
            .exec();
        // reload the document
        return this.getById(id);
    }
    checkForReference(operation, refName, allowVirtual = true) {
        if (this.isReferencePath(refName)) {
            return;
        }
        if (this.isVirtualPath(refName)) {
            if (allowVirtual) {
                return;
            }
            throw new Error(`${operation} not supported for virtual relation ${refName}`);
        }
        throw new Error(`Unable to find reference ${refName} on ${this.Model.modelName}`);
    }
    isReferencePath(refName) {
        return !!this.Model.schema.path(refName);
    }
    isVirtualPath(refName) {
        return !!this.Model.schema.virtualpath(refName);
    }
    getReferenceQueryBuilder(refName) {
        return new query_1.FilterQueryBuilder(this.getReferenceModel(refName));
    }
    getReferenceModel(refName) {
        const { db } = this.Model;
        if (this.isReferencePath(refName)) {
            const schemaType = this.Model.schema.path(refName);
            if ((0, mongoose_types_helper_1.isEmbeddedSchemaTypeOptions)(schemaType)) {
                return db.model(schemaType.$embeddedSchemaType.options.ref);
            }
            if ((0, mongoose_types_helper_1.isSchemaTypeWithReferenceOptions)(schemaType)) {
                return db.model(schemaType.options.ref);
            }
        }
        else if (this.isVirtualPath(refName)) {
            const schemaType = this.Model.schema.virtualpath(refName);
            if ((0, mongoose_types_helper_1.isVirtualTypeWithReferenceOptions)(schemaType)) {
                return db.model(schemaType.options.ref);
            }
        }
        throw new Error(`Unable to lookup reference type for ${refName}`);
    }
    getReferenceFilter(refName, entity, filter) {
        const refFieldMap = this.getReferenceFieldMap(refName);
        if (!refFieldMap) {
            return undefined;
        }
        const referenceIds = this.getReferenceIds(refFieldMap.localField, entity);
        const refFilter = {
            [refFieldMap.foreignField]: { in: referenceIds }
        };
        return (0, nestjs_query_core_1.mergeFilter)(filter ?? {}, refFilter);
    }
    getReferenceIds(localField, entity) {
        const entities = Array.isArray(entity) ? entity : [entity];
        return entities.flatMap((e) => e[localField]).filter((id) => !!id);
    }
    getReferenceFieldMap(refName) {
        if (this.isReferencePath(refName)) {
            return {
                foreignField: '_id',
                localField: refName
            };
        }
        if (this.isVirtualPath(refName)) {
            const virtualType = this.Model.schema.virtualpath(refName);
            if (!(0, mongoose_types_helper_1.isVirtualTypeWithReferenceOptions)(virtualType)) {
                throw new Error(`Unable to lookup reference type for ${refName}`);
            }
            return {
                foreignField: virtualType.options.foreignField,
                localField: virtualType.options.localField
            };
        }
        return undefined;
    }
    getRefCount(relationName, relationIds, filter) {
        const referenceModel = this.getReferenceModel(relationName);
        const referenceQueryBuilder = this.getReferenceQueryBuilder(relationName);
        return referenceModel.countDocuments(referenceQueryBuilder.buildIdFilterQuery(relationIds, filter)).exec();
    }
}
exports.ReferenceQueryService = ReferenceQueryService;
//# sourceMappingURL=reference-query.service.js.map