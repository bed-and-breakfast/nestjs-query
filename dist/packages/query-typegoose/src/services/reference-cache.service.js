"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReferenceCacheService = void 0;
const tslib_1 = require("tslib");
const cache_manager_1 = require("@nestjs/cache-manager");
const common_1 = require("@nestjs/common");
const typegoose_1 = require("@typegoose/typegoose");
let ReferenceCacheService = class ReferenceCacheService {
    constructor(cacheManager) {
        this.cacheManager = cacheManager;
        this.cacheModels = new Set();
        this.relationModels = new Map();
    }
    enableCache(model) {
        const RelationClass = model.typegooseClass ?? model;
        this.cacheModels.add(RelationClass);
        if (typeof model.cacheRelations === 'object' &&
            model.cacheRelations.loadAll) {
            this.relationModels.set(RelationClass, (0, typegoose_1.getModelForClass)(RelationClass));
        }
        Reflect.defineMetadata('relationCacheProvider', this, model);
    }
    isCachedRelation(RelationClass) {
        return this.cacheModels.has(RelationClass);
    }
    async onApplicationBootstrap() {
        if (this.relationModels) {
            for (const model of this.relationModels.keys()) {
                await this.setAll(model);
            }
        }
    }
    async get(RelationClass, id) {
        if (!this.isCachedRelation(RelationClass))
            return undefined;
        return this.cacheManager.get(RelationClass.name + ':' + id.toString());
    }
    async set(RelationClass, id, value) {
        if (this.isCachedRelation(RelationClass)) {
            await this.cacheManager.set(RelationClass.name + ':' + id.toString(), value);
            console.log('set', RelationClass.name, id.toString());
        }
    }
    async setAll(RelationClass) {
        if (this.isCachedRelation(RelationClass)) {
            const find = this.relationModels.get(RelationClass).find();
            const relations = await (find.withDeleted ? find.withDeleted() : find).exec();
            for (const relation of relations) {
                if (relation._id) {
                    await this.cacheManager.set(RelationClass.name + ':' + relation._id.toString(), relation);
                }
            }
            console.log(RelationClass.name, relations.length);
        }
    }
    async invalidate(RelationClass, id) {
        if (this.isCachedRelation(RelationClass)) {
            await this.cacheManager.del(RelationClass.name + ':' + id.toString());
        }
    }
};
ReferenceCacheService = tslib_1.__decorate([
    (0, common_1.Injectable)(),
    tslib_1.__param(0, (0, common_1.Inject)(cache_manager_1.CACHE_MANAGER)),
    tslib_1.__metadata("design:paramtypes", [Object])
], ReferenceCacheService);
exports.ReferenceCacheService = ReferenceCacheService;
//# sourceMappingURL=reference-cache.service.js.map