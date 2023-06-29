"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReferenceCacheService = void 0;
const tslib_1 = require("tslib");
const common_1 = require("@nestjs/common");
const typegoose_1 = require("@typegoose/typegoose");
let ReferenceCacheService = class ReferenceCacheService {
    constructor(cacheModels) {
        this.cacheModels = cacheModels;
        this.relationCache = new Map();
        this.relationModels = new Map();
        if (cacheModels) {
            console.log('cacheServices', cacheModels);
            cacheModels.forEach((cacheModel) => {
                Reflect.defineMetadata('cacheProvider', this, cacheModel);
            });
        }
    }
    isCachedRelation(RelationClass) {
        return this.cacheModels?.includes(RelationClass);
    }
    initRelation(RelationClass) {
        if (!this.relationCache.get(RelationClass)) {
            this.relationCache.set(RelationClass, new Map());
        }
        if (!this.relationModels.get(RelationClass)) {
            this.relationModels.set(RelationClass, (0, typegoose_1.getModelForClass)(RelationClass));
        }
    }
    async onApplicationBootstrap() {
        if (this.cacheModels) {
            for (const cacheModel of this.cacheModels) {
                await this.setAll(cacheModel);
            }
        }
    }
    get(RelationClass, id) {
        if (!this.isCachedRelation(RelationClass))
            return undefined;
        return this.relationCache.get(RelationClass).get(id.toString());
    }
    set(RelationClass, id, value) {
        if (this.isCachedRelation(RelationClass)) {
            this.initRelation(RelationClass);
            this.relationCache.get(RelationClass).set(id.toString(), value);
            console.log('set', RelationClass.name, id.toString());
        }
    }
    async setAll(RelationClass) {
        if (this.isCachedRelation(RelationClass)) {
            this.initRelation(RelationClass);
            const relations = await this.relationModels.get(RelationClass).find().exec();
            relations.forEach((relation) => {
                if (relation._id) {
                    this.relationCache.get(RelationClass).set(relation._id.toString(), relation);
                }
            });
            console.log(RelationClass.name, relations.length);
        }
    }
    invalidate(RelationClass, id) {
        if (this.isCachedRelation(RelationClass)) {
            this.relationCache.get(RelationClass).delete(id.toString());
        }
    }
};
ReferenceCacheService = tslib_1.__decorate([
    (0, common_1.Injectable)(),
    tslib_1.__metadata("design:paramtypes", [Array])
], ReferenceCacheService);
exports.ReferenceCacheService = ReferenceCacheService;
//# sourceMappingURL=reference-cache.service.js.map