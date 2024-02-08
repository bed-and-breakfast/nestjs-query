import { Inject, Injectable, OnApplicationBootstrap } from '@nestjs/common'
import { Class } from '@ptc-org/nestjs-query-core'
import { getModelForClass, ReturnModelType } from '@typegoose/typegoose'
import { Base } from '@typegoose/typegoose/lib/defaultClasses'
import { Cache } from 'cache-manager'
import { RefType } from 'mongoose'

import { CacheModuleOptions, MODULE_OPTIONS_TOKEN } from '../cache.module-definition'
import { TypegooseClass, TypegooseClassWithOptions } from '../typegoose-interface.helpers'

@Injectable()
export class ReferenceCacheService implements OnApplicationBootstrap {
  protected readonly cacheModels: Set<TypegooseClass> = new Set<TypegooseClass>()

  protected readonly relationModels: Map<Class<Base<RefType>>, ReturnModelType<Class<Base<RefType>>>> = new Map()

  protected readonly cacheManager: Cache

  protected readonly relationsCacheManagers?: Map<Class<Base<RefType>>, Cache>

  constructor(@Inject(MODULE_OPTIONS_TOKEN) private options: CacheModuleOptions) {
    this.cacheManager = options.cacheManager
    this.relationsCacheManagers = options.relationsCacheManagers
  }

  enableCache(model: TypegooseClass | TypegooseClassWithOptions) {
    const RelationClass = (model as TypegooseClassWithOptions).typegooseClass ?? (model as TypegooseClass)

    this.cacheModels.add(RelationClass)

    if (
      typeof (model as TypegooseClassWithOptions).cache === 'object' &&
      ((model as TypegooseClassWithOptions).cache as { loadAll?: boolean }).loadAll
    ) {
      this.relationModels.set(RelationClass, getModelForClass(RelationClass) as ReturnModelType<Class<Base<RefType>>>)
    }

    Reflect.defineMetadata('cacheProvider', this, model)
  }

  protected modelCacheManager<Entity extends Base<RefType>>(RelationClass: Class<Entity>): Cache {
    return this.relationsCacheManagers?.get(RelationClass) ?? this.cacheManager
  }

  protected cacheKey<Entity extends Base<RefType>>(RelationClass: Class<Entity>, key: string): string {
    return RelationClass.name + ':' + key
  }

  isCachedRelation<Entity extends Base<RefType>>(RelationClass: Class<Entity>) {
    return this.cacheModels.has(RelationClass)
  }

  async onApplicationBootstrap() {
    if (!this.options.disablePreloading && this.relationModels) {
      for (const model of this.relationModels.keys()) {
        await this.setAll(model)
      }
    }
  }

  async get<Entity extends Base<RefType>>(RelationClass: Class<Entity>, id: string | number): Promise<Entity> {
    if (!this.isCachedRelation(RelationClass)) return undefined

    return this.modelCacheManager(RelationClass).get(this.cacheKey(RelationClass, id.toString()))
  }

  async set<Entity extends Base<RefType>>(RelationClass: Class<Entity>, id: unknown, value: Entity) {
    if (this.isCachedRelation(RelationClass)) {
      await this.modelCacheManager(RelationClass).set(this.cacheKey(RelationClass, id.toString()), value)

      // console.log('set', RelationClass.name, id.toString())
    }
  }

  async setAll<Entity extends Base<RefType>>(RelationClass: Class<Entity>) {
    if (this.isCachedRelation(RelationClass)) {
      const findQuery = this.relationModels.get(RelationClass).find()

      const relations = await (findQuery.withDeleted ? findQuery.withDeleted() : findQuery).exec()

      for (const relation of relations) {
        if (relation._id) {
          await this.modelCacheManager(RelationClass).set(this.cacheKey(RelationClass, relation._id.toString()), relation)
        }
      }

      if (!this.options.disablePreloadingLog) {
        console.log(RelationClass.name, relations.length)
      }
    }
  }

  async invalidate<Entity extends Base<RefType>>(RelationClass: Class<Entity>, id: unknown) {
    if (this.isCachedRelation(RelationClass)) {
      await this.modelCacheManager(RelationClass).del(this.cacheKey(RelationClass, id.toString()))
    }
  }
}
