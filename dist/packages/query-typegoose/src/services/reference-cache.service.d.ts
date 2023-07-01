import { OnApplicationBootstrap } from '@nestjs/common';
import { Class } from '@ptc-org/nestjs-query-core';
import { ReturnModelType } from '@typegoose/typegoose';
import { Base } from '@typegoose/typegoose/lib/defaultClasses';
import { RefType } from 'mongoose';
import { TypegooseClass } from '../typegoose-interface.helpers';
export declare class ReferenceCacheService implements OnApplicationBootstrap {
    protected readonly cacheModels: Set<TypegooseClass>;
    protected readonly relationCache: Map<Class<Base<RefType>>, Map<Base<RefType>['_id'] | Base<RefType>['id'], Base<RefType>>>;
    protected readonly relationModels: Map<Class<Base<RefType>>, ReturnModelType<Class<Base<RefType>>>>;
    constructor();
    enableCache(model: TypegooseClass): void;
    isCachedRelation<Entity extends Base<RefType>>(RelationClass: Class<Entity>): boolean;
    initRelation<Entity extends Base<RefType>>(RelationClass: Class<Entity>): void;
    onApplicationBootstrap(): Promise<void>;
    get<Entity extends Base<RefType>>(RelationClass: Class<Entity>, id: unknown): Entity;
    set<Entity extends Base<RefType>>(RelationClass: Class<Entity>, id: unknown, value: Entity): void;
    setAll<Entity extends Base<RefType>>(RelationClass: Class<Entity>): Promise<void>;
    invalidate<Entity extends Base<RefType>>(RelationClass: Class<Entity>, id: unknown): void;
}
