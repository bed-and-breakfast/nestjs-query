import { Class } from '@ptc-org/nestjs-query-core'
import { Base } from '@typegoose/typegoose/lib/defaultClasses'
import { RefType } from 'mongoose'

import { ReferenceCacheService } from '../services/reference-cache.service'

export const RelationCache = <DTO extends Base<RefType>>() => {
  return <Cls extends Class<DTO>>(DTOClass: Cls): Cls | void => {
    const invalidateCache = (dto: DTO) => {
      const t: ReferenceCacheService = Reflect.getOwnMetadata('cacheProvider', DTOClass)
      t.invalidate(DTOClass, dto._id)
    }

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

    return DTOClass
  }
}
