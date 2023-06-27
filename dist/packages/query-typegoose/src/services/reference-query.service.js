"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReferenceQueryService = void 0;
const tslib_1 = require("tslib");
/* eslint-disable no-underscore-dangle */
const common_1 = require("@nestjs/common");
const nestjs_query_core_1 = require("@ptc-org/nestjs-query-core");
const typegoose_1 = require("@typegoose/typegoose");
const lodash_omit_1 = tslib_1.__importDefault(require("lodash.omit"));
const query_1 = require("../query");
const typegoose_types_helper_1 = require("../typegoose-types.helper");
class ReferenceQueryService {
    constructor(Model) {
        this.Model = Model;
    }
    async aggregateRelations(RelationClass, relationName, dto, filter, aggregateQuery) {
        this.checkForReference('AggregateRelations', relationName);
        const relationModel = this.getReferenceModel(relationName);
        const referenceQueryBuilder = this.getReferenceQueryBuilder(relationName);
        if (Array.isArray(dto)) {
            return dto.reduce(async (mapPromise, entity) => {
                const map = await mapPromise;
                const refs = await this.aggregateRelations(RelationClass, relationName, entity, filter, aggregateQuery);
                return map.set(entity, refs);
            }, Promise.resolve(new Map()));
        }
        const assembler = nestjs_query_core_1.AssemblerFactory.getAssembler(RelationClass, this.getReferenceEntity(relationName));
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
            return dto.reduce(async (mapPromise, entity) => {
                const map = await mapPromise;
                const refs = await this.countRelations(RelationClass, relationName, entity, filter);
                return map.set(entity, refs);
            }, Promise.resolve(new Map()));
        }
        const assembler = nestjs_query_core_1.AssemblerFactory.getAssembler(RelationClass, this.getReferenceEntity(relationName));
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
        const referenceQueryBuilder = this.getReferenceQueryBuilder(relationName);
        const assembler = nestjs_query_core_1.AssemblerFactory.getAssembler(RelationClass, this.getReferenceEntity(relationName));
        const filterQuery = referenceQueryBuilder.buildFilterQuery(assembler.convertQuery({ filter: opts?.filter }).filter);
        let arrayDto = dto;
        if (!Array.isArray(dto)) {
            arrayDto = [dto];
        }
        // eslint-disable-next-line no-underscore-dangle
        const foundEntities = await this.Model.find({ _id: { $in: arrayDto.map((d) => d._id ?? d.id) } }).populate({
            path: relationName,
            match: filterQuery
        });
        const references = arrayDto.map((d, i) => {
            let populatedRef;
            if (typeof foundEntities[i] !== 'undefined') {
                populatedRef = foundEntities[i].get(relationName);
            }
            return [d, populatedRef ? assembler.convertToDTO(populatedRef) : undefined];
        });
        return Array.isArray(dto) ? new Map(references) : references[0][1];
    }
    async queryRelations(RelationClass, relationName, dto, query) {
        this.checkForReference('QueryRelations', relationName);
        const referenceQueryBuilder = this.getReferenceQueryBuilder(relationName);
        const assembler = nestjs_query_core_1.AssemblerFactory.getAssembler(RelationClass, this.getReferenceEntity(relationName));
        const { filterQuery, options } = referenceQueryBuilder.buildQuery(assembler.convertQuery(query));
        let arrayDto = dto;
        if (!Array.isArray(dto)) {
            arrayDto = [dto];
        }
        // eslint-disable-next-line no-underscore-dangle
        const foundEntities = await this.Model.find({ _id: { $in: arrayDto.map((d) => d._id ?? d.id) } }).populate({
            path: relationName,
            match: filterQuery,
            ...(options.limit ? { perDocumentLimit: options.limit, options: (0, lodash_omit_1.default)(options, 'limit') } : { options })
        });
        const references = arrayDto.map((d, i) => {
            let populatedRef;
            if (typeof foundEntities[i] !== 'undefined') {
                populatedRef = foundEntities[i].get(relationName);
            }
            return [d, populatedRef ? assembler.convertToDTOs(populatedRef) : []];
        });
        return Array.isArray(dto) ? new Map(references) : references[0][1];
    }
    async addRelations(relationName, id, relationIds, opts) {
        this.checkForReference('AddRelations', relationName, false);
        const refCount = await this.getRefCount(relationName, relationIds, opts?.relationFilter);
        if (relationIds.length !== refCount) {
            throw new Error(`Unable to find all ${relationName} to add to ${this.Model.modelName}`);
        }
        return this.findAndUpdate(id, opts?.filter, {
            $push: { [relationName]: { $each: relationIds } }
        });
    }
    async setRelations(relationName, id, relationIds, opts) {
        this.checkForReference('AddRelations', relationName, false);
        const refCount = await this.getRefCount(relationName, relationIds, opts?.relationFilter);
        if (relationIds.length !== refCount) {
            throw new Error(`Unable to find all ${relationName} to set on ${this.Model.modelName}`);
        }
        return this.findAndUpdate(id, opts?.filter, { [relationName]: relationIds });
    }
    async setRelation(relationName, id, relationId, opts) {
        this.checkForReference('SetRelation', relationName, false);
        const refCount = await this.getRefCount(relationName, [relationId], opts?.relationFilter);
        if (refCount !== 1) {
            throw new Error(`Unable to find ${relationName} to set on ${this.Model.modelName}`);
        }
        return this.findAndUpdate(id, opts?.filter, { [relationName]: relationId });
    }
    async removeRelation(relationName, id, relationId, opts) {
        this.checkForReference('RemoveRelation', relationName, false);
        const refCount = await this.getRefCount(relationName, [relationId], opts?.relationFilter);
        if (refCount !== 1) {
            throw new Error(`Unable to find ${relationName} to remove from ${this.Model.modelName}`);
        }
        await this.findAndUpdate(id, opts?.filter, { $unset: { [relationName]: relationId } });
        // reload the document
        return this.getById(id);
    }
    async removeRelations(relationName, id, relationIds, opts) {
        this.checkForReference('RemoveRelations', relationName, false);
        const refCount = await this.getRefCount(relationName, relationIds, opts?.relationFilter);
        if (relationIds.length !== refCount) {
            throw new Error(`Unable to find all ${relationName} to remove from ${this.Model.modelName}`);
        }
        if (this.isVirtualPath(relationName)) {
            throw new Error(`RemoveRelations not supported for virtual relation ${relationName}`);
        }
        await this.findAndUpdate(id, opts?.filter, { $pullAll: { [relationName]: relationIds } });
        // reload the document
        return this.getById(id);
    }
    getReferenceEntity(relationName) {
        const ReferenceModel = this.getReferenceModel(relationName);
        return (0, typegoose_1.getClass)(ReferenceModel.modelName);
    }
    isReferencePath(refName) {
        return !!this.Model.schema.path(refName);
    }
    isVirtualPath(refName) {
        return !!this.Model.schema.virtualpath(refName);
    }
    getReferenceFilter(refName, entity, filter) {
        if (this.isReferencePath(refName)) {
            return this.getObjectIdReferenceFilter(refName, entity, filter);
        }
        if (this.isVirtualPath(refName)) {
            const virtualType = this.Model.schema.virtualpath(refName);
            if ((0, typegoose_types_helper_1.isVirtualTypeWithReferenceOptions)(virtualType)) {
                return this.getVirtualReferenceFilter(virtualType, entity, filter);
            }
            throw new Error(`Unable to lookup reference type for ${refName}`);
        }
        return undefined;
    }
    getObjectIdReferenceFilter(refName, entity, filter) {
        const referenceIds = entity[refName];
        const refFilter = {
            _id: { [Array.isArray(referenceIds) ? 'in' : 'eq']: referenceIds }
        };
        return (0, nestjs_query_core_1.mergeFilter)(filter ?? {}, refFilter);
    }
    getVirtualReferenceFilter(virtualType, entity, filter) {
        const { foreignField, localField } = virtualType.options;
        const refVal = entity[localField];
        const isArray = Array.isArray(refVal);
        const lookupFilter = {
            [foreignField]: { [isArray ? 'in' : 'eq']: refVal }
        };
        return (0, nestjs_query_core_1.mergeFilter)(filter ?? {}, lookupFilter);
    }
    getReferenceModel(refName) {
        let refModel;
        if (this.isReferencePath(refName)) {
            const schemaType = this.Model.schema.path(refName);
            if ((0, typegoose_types_helper_1.isEmbeddedSchemaTypeOptions)(schemaType)) {
                refModel = (0, typegoose_1.getModelWithString)(schemaType.$embeddedSchemaType.options.ref);
            }
            else if ((0, typegoose_types_helper_1.isSchemaTypeWithReferenceOptions)(schemaType)) {
                refModel = (0, typegoose_1.getModelWithString)(schemaType.options.ref);
            }
        }
        else if (this.isVirtualPath(refName)) {
            const schemaType = this.Model.schema.virtualpath(refName);
            if ((0, typegoose_types_helper_1.isVirtualTypeWithReferenceOptions)(schemaType)) {
                refModel = (0, typegoose_1.getModelWithString)(schemaType.options.ref);
            }
        }
        if (!refModel) {
            throw new Error(`Unable to lookup reference type for ${refName}`);
        }
        return refModel;
    }
    getRefCount(relationName, relationIds, filter) {
        const referenceModel = this.getReferenceModel(relationName);
        const referenceQueryBuilder = this.getReferenceQueryBuilder(relationName);
        return referenceModel.countDocuments(referenceQueryBuilder.buildIdFilterQuery(relationIds, filter)).exec();
    }
    getReferenceQueryBuilder(refName) {
        return new query_1.FilterQueryBuilder(this.getReferenceModel(refName));
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
    async findAndUpdate(id, filter, query) {
        const entity = await this.Model.findOneAndUpdate(this.filterQueryBuilder.buildIdFilterQuery(id, filter), query, {
            new: true
        }).exec();
        if (!entity) {
            throw new common_1.NotFoundException(`Unable to find ${this.Model.modelName} with id: ${id}`);
        }
        return entity;
    }
}
exports.ReferenceQueryService = ReferenceQueryService;
//# sourceMappingURL=reference-query.service.js.map