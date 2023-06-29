"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RelationCache = void 0;
const RelationCache = () => {
    return (DTOClass) => {
        const invalidateCache = (dto) => {
            const t = Reflect.getOwnMetadata('cacheProvider', DTOClass);
            t.invalidate(DTOClass, dto._id);
        };
        // post<DTO>(
        //   'save',
        //   function (dto?: DTO) {
        //     console.log('save', dto._id)
        //     // invalidateCache(!(this && (this as DTO)[RelationCache.name]) ? this : dto)
        //   },
        //   { query: true }
        // )(DTOClass)
        // post<DTO>(
        //   'update',
        //   function () {
        //     // @ts-ignore
        //     console.log('updateMany', this._conditions._id)
        //     // invalidateCache(!(this && (this as DTO)[RelationCache.name]) ? this : dto)
        //   },
        //   { query: true }
        // )(DTOClass)
        // post<DTO>(
        //   'updateOne',
        //   function () {
        //     // @ts-ignore
        //     console.log('updateMany', this._conditions._id)
        //     // invalidateCache(!(this && (this as DTO)[RelationCache.name]) ? this : dto)
        //   },
        //   { query: true }
        // )(DTOClass)
        // post<DTO>(
        //   'updateMany',
        //   function () {
        //     // @ts-ignore
        //     console.log('updateMany', this._conditions._id)
        //     // invalidateCache(!(this && (this as DTO)[RelationCache.name]) ? this : dto)
        //   },
        //   { query: true }
        // )(DTOClass)
        // post<DTO>(
        //   'findOneAndUpdate',
        //   function () {
        //     // @ts-ignore
        //     console.log('updateMany', this._conditions._id)
        //     // invalidateCache(!(this && (this as DTO)[RelationCache.name]) ? this : dto)
        //   },
        //   { query: true }
        // )(DTOClass)
        // post<DTO>(
        //   'update',
        //   function () {
        //     // @ts-ignore
        //     console.log('updateMany', this._conditions._id)
        //     // invalidateCache(!(this && (this as DTO)[RelationCache.name]) ? this : dto)
        //   },
        //   { query: true }
        // )(DTOClass)
        return DTOClass;
    };
};
exports.RelationCache = RelationCache;
//# sourceMappingURL=relation-cache.decorator.js.map