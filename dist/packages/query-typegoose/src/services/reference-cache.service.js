"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReferenceCacheService = void 0;
const tslib_1 = require("tslib");
const common_1 = require("@nestjs/common");
const typegoose_1 = require("@typegoose/typegoose");
const cache_module_definition_1 = require("../cache.module-definition");
let ReferenceCacheService = class ReferenceCacheService {
    constructor(options) {
        this.options = options;
        this.cacheModels = new Set();
        this.relationModels = new Map();
        this.cacheManager = options.cacheManager;
        this.relationsCacheManagers = options.relationsCacheManagers;
    }
    enableCache(model) {
        const RelationClass = model.typegooseClass ?? model;
        this.cacheModels.add(RelationClass);
        if (typeof model.cache === 'object' &&
            model.cache.loadAll) {
            this.relationModels.set(RelationClass, (0, typegoose_1.getModelForClass)(RelationClass));
        }
        Reflect.defineMetadata('cacheProvider', this, model);
    }
    modelCacheManager(RelationClass) {
        return this.relationsCacheManagers?.get(RelationClass) ?? this.cacheManager;
    }
    cacheKey(RelationClass, key) {
        return RelationClass.name + ':' + key;
    }
    isCachedRelation(RelationClass) {
        return this.cacheModels.has(RelationClass);
    }
    async onApplicationBootstrap() {
        if (!this.options.disablePreloading && this.relationModels) {
            for (const model of this.relationModels.keys()) {
                await this.setAll(model);
            }
        }
    }
    async get(RelationClass, id) {
        if (!this.isCachedRelation(RelationClass))
            return undefined;
        return this.modelCacheManager(RelationClass).get(this.cacheKey(RelationClass, id.toString()));
    }
    async set(RelationClass, id, value) {
        if (this.isCachedRelation(RelationClass)) {
            await this.modelCacheManager(RelationClass).set(this.cacheKey(RelationClass, id.toString()), value);
            // console.log('set', RelationClass.name, id.toString())
        }
    }
    async setAll(RelationClass) {
        if (this.isCachedRelation(RelationClass)) {
            const findQuery = this.relationModels.get(RelationClass).find();
            const relations = await (findQuery.withDeleted ? findQuery.withDeleted() : findQuery).exec();
            for (const relation of relations) {
                if (relation._id) {
                    await this.modelCacheManager(RelationClass).set(this.cacheKey(RelationClass, relation._id.toString()), relation);
                }
            }
            if (!this.options.disablePreloadingLog) {
                console.log(RelationClass.name, relations.length);
            }
        }
    }
    async invalidate(RelationClass, id) {
        if (this.isCachedRelation(RelationClass)) {
            await this.modelCacheManager(RelationClass).del(this.cacheKey(RelationClass, id.toString()));
        }
    }
};
exports.ReferenceCacheService = ReferenceCacheService;
exports.ReferenceCacheService = ReferenceCacheService = tslib_1.__decorate([
    (0, common_1.Injectable)(),
    tslib_1.__param(0, (0, common_1.Inject)(cache_module_definition_1.MODULE_OPTIONS_TOKEN)),
    tslib_1.__metadata("design:paramtypes", [Object])
], ReferenceCacheService);
//# sourceMappingURL=reference-cache.service.js.map