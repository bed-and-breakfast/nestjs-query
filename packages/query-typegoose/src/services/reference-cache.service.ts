import { CACHE_MANAGER } from '@nestjs/cache-manager'
import { Inject, Injectable, OnApplicationBootstrap } from '@nestjs/common'
import { Class } from '@ptc-org/nestjs-query-core'
import { getModelForClass, ReturnModelType } from '@typegoose/typegoose'
import { Base } from '@typegoose/typegoose/lib/defaultClasses'
import { Cache } from 'cache-manager'
import { RefType } from 'mongoose'

import { TypegooseClass, TypegooseClassWithOptions } from '../typegoose-interface.helpers'

@Injectable()
export class ReferenceCacheService implements OnApplicationBootstrap {
  protected readonly cacheModels: Set<TypegooseClass> = new Set<TypegooseClass>()

  protected readonly relationModels: Map<Class<Base<RefType>>, ReturnModelType<Class<Base<RefType>>>> = new Map()

  constructor(@Inject(CACHE_MANAGER) private cacheManager: Cache) {}

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

  isCachedRelation<Entity extends Base<RefType>>(RelationClass: Class<Entity>) {
    return this.cacheModels.has(RelationClass)
  }

  async onApplicationBootstrap() {
    if (this.relationModels) {
      for (const model of this.relationModels.keys()) {
        await this.setAll(model)
      }
    }
  }

  async get<Entity extends Base<RefType>>(RelationClass: Class<Entity>, id: unknown): Promise<Entity> {
    if (!this.isCachedRelation(RelationClass)) return undefined

    return this.cacheManager.get(RelationClass.name + ':' + id.toString())
  }

  async set<Entity extends Base<RefType>>(RelationClass: Class<Entity>, id: unknown, value: Entity) {
    if (this.isCachedRelation(RelationClass)) {
      await this.cacheManager.set(RelationClass.name + ':' + id.toString(), value)

      // console.log('set', RelationClass.name, id.toString())
    }
  }

  async setAll<Entity extends Base<RefType>>(RelationClass: Class<Entity>) {
    if (this.isCachedRelation(RelationClass)) {
      const find = this.relationModels.get(RelationClass).find()

      const relations = await (find.withDeleted ? find.withDeleted() : find).exec()

      for (const relation of relations) {
        if (relation._id) {
          await this.cacheManager.set(RelationClass.name + ':' + relation._id.toString(), relation)
        }
      }

      console.log(RelationClass.name, relations.length)
    }
  }

  async invalidate<Entity extends Base<RefType>>(RelationClass: Class<Entity>, id: unknown) {
    if (this.isCachedRelation(RelationClass)) {
      await this.cacheManager.del(RelationClass.name + ':' + id.toString())
    }
  }
}
