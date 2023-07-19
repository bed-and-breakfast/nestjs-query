"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RelationCache = void 0;
const RelationCache = () => {
    return (DTOClass) => {
        // plugin(mongooseLeanId)(DTOClass)
        // plugin(mongooseLeanVirtuals)(DTOClass)
        // plugin(mongooseLeanGetters)(DTOClass)
        // plugin(mongooseLeanDefaults)(DTOClass)
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
        // post<DTO>(
        //   'findOneAndUpdate',
        //   function (dto) {
        //     const schema = this.model.schema
        //     const referenceCacheService: ReferenceCacheService = Reflect.getOwnMetadata('cacheProvider', DTOClass)
        //
        //     console.log(
        //       'findOneAndUpdate',
        //       dto
        //       // getClass(this.model.modelName).name
        //       // dto
        //       // schema.paths
        //       // // @ts-ignore
        //       // schema.tree.testReference.ref,
        //       // // @ts-ignore
        //       // schema.tree.testReferences.type[0].ref
        //     )
        //
        //     // console.log('invalidate', getClass(this.model.modelName).name, dto._id ?? dto.id)
        //     referenceCacheService.invalidate(getClass(this.model.modelName) as Class<Base<RefType>>, dto._id ?? dto.id)
        //
        //     Object.keys(dto.toObject()).forEach((key) => {
        //       const refs: string[] = []
        //       // @ts-ignore
        //       const ref: string = schema.tree[key]?.ref
        //
        //       if (!ref) {
        //         // @ts-ignore
        //         if (Array.isArray(schema.tree[key]?.type)) {
        //           // @ts-ignore
        //           schema.tree[key]?.type.forEach((t: { ref?: string }) => {
        //             if (t.ref) {
        //               refs.push(t.ref)
        //             }
        //           })
        //         }
        //       } else {
        //         refs.push(ref)
        //       }
        //
        //       refs.forEach((ref) => {
        //         const keyValues: unknown[] = Array.isArray(dto[key]) ? dto[key] : [dto[key]]
        //
        //         keyValues.forEach((val) => {
        //           // console.log('invalidate', getClass(ref).name, val)
        //           referenceCacheService.invalidate(getClass(ref) as Class<Base<RefType>>, val)
        //         })
        //       })
        //     })
        //   },
        //   { query: true }
        // )(DTOClass)
        return DTOClass;
    };
};
exports.RelationCache = RelationCache;
//# sourceMappingURL=relation-cache.decorator.js.map