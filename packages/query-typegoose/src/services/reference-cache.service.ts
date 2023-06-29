import { Injectable, OnApplicationBootstrap } from '@nestjs/common'
import { Class } from '@ptc-org/nestjs-query-core'
import { getModelForClass, ReturnModelType } from '@typegoose/typegoose'
import { Base } from '@typegoose/typegoose/lib/defaultClasses'
import { RefType } from 'mongoose'

import { TypegooseClass } from '../typegoose-interface.helpers'

@Injectable()
export class ReferenceCacheService implements OnApplicationBootstrap {
  protected readonly relationCache: Map<Class<Base<RefType>>, Map<Base<RefType>['_id'] | Base<RefType>['id'], Base<RefType>>> =
    new Map()

  protected readonly relationModels: Map<Class<Base<RefType>>, ReturnModelType<Class<Base<RefType>>>> = new Map()

  constructor(protected readonly cacheModels: TypegooseClass[]) {
    if (cacheModels) {
      console.log('cacheServices', cacheModels)

      cacheModels.forEach((cacheModel) => {
        Reflect.defineMetadata('cacheProvider', this, cacheModel)
      })
    }
  }

  isCachedRelation<Entity extends Base<RefType>>(RelationClass: Class<Entity>) {
    return this.cacheModels?.includes(RelationClass)
  }

  initRelation<Entity extends Base<RefType>>(RelationClass: Class<Entity>) {
    if (!this.relationCache.get(RelationClass)) {
      this.relationCache.set(RelationClass, new Map())
    }

    if (!this.relationModels.get(RelationClass)) {
      this.relationModels.set(RelationClass, getModelForClass(RelationClass) as ReturnModelType<Class<Base<RefType>>>)
    }
  }

  async onApplicationBootstrap() {
    if (this.cacheModels) {
      for (const cacheModel of this.cacheModels) {
        await this.setAll(cacheModel)
      }
    }
  }

  get<Entity extends Base<RefType>>(RelationClass: Class<Entity>, id: unknown): Entity {
    if (!this.isCachedRelation(RelationClass)) return undefined

    return this.relationCache.get(RelationClass).get(id.toString()) as Entity
  }

  set<Entity extends Base<RefType>>(RelationClass: Class<Entity>, id: unknown, value: Entity) {
    if (this.isCachedRelation(RelationClass)) {
      this.initRelation(RelationClass)

      this.relationCache.get(RelationClass).set(id.toString(), value)

      console.log('set', RelationClass.name, id.toString())
    }
  }

  async setAll<Entity extends Base<RefType>>(RelationClass: Class<Entity>) {
    if (this.isCachedRelation(RelationClass)) {
      this.initRelation(RelationClass)

      const relations = await this.relationModels.get(RelationClass).find().exec()

      relations.forEach((relation) => {
        if (relation._id) {
          this.relationCache.get(RelationClass).set(relation._id.toString(), relation)
        }
      })

      console.log(RelationClass.name, relations.length)
    }
  }

  invalidate<Entity extends Base<RefType>>(RelationClass: Class<Entity>, id: unknown) {
    if (this.isCachedRelation(RelationClass)) {
      this.relationCache.get(RelationClass).delete(id.toString())
    }
  }
}
