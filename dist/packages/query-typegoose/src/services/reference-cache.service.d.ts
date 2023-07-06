import { OnApplicationBootstrap } from '@nestjs/common';
import { Class } from '@ptc-org/nestjs-query-core';
import { ReturnModelType } from '@typegoose/typegoose';
import { Base } from '@typegoose/typegoose/lib/defaultClasses';
import { Cache } from 'cache-manager';
import { RefType } from 'mongoose';
import { TypegooseClass, TypegooseClassWithOptions } from '../typegoose-interface.helpers';
export declare class ReferenceCacheService implements OnApplicationBootstrap {
    private cacheManager;
    protected readonly cacheModels: Set<TypegooseClass>;
    protected readonly relationModels: Map<Class<Base<RefType>>, ReturnModelType<Class<Base<RefType>>>>;
    constructor(cacheManager: Cache);
    enableCache(model: TypegooseClass | TypegooseClassWithOptions): void;
    isCachedRelation<Entity extends Base<RefType>>(RelationClass: Class<Entity>): boolean;
    onApplicationBootstrap(): Promise<void>;
    get<Entity extends Base<RefType>>(RelationClass: Class<Entity>, id: unknown): Promise<Entity>;
    set<Entity extends Base<RefType>>(RelationClass: Class<Entity>, id: unknown, value: Entity): Promise<void>;
    setAll<Entity extends Base<RefType>>(RelationClass: Class<Entity>): Promise<void>;
    invalidate<Entity extends Base<RefType>>(RelationClass: Class<Entity>, id: unknown): Promise<void>;
}
