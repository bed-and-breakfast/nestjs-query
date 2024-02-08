import { OnApplicationBootstrap } from '@nestjs/common';
import { Class } from '@ptc-org/nestjs-query-core';
import { ReturnModelType } from '@typegoose/typegoose';
import { Base } from '@typegoose/typegoose/lib/defaultClasses';
import { Cache } from 'cache-manager';
import { RefType } from 'mongoose';
import { CacheModuleOptions } from '../cache.module-definition';
import { TypegooseClass, TypegooseClassWithOptions } from '../typegoose-interface.helpers';
export declare class ReferenceCacheService implements OnApplicationBootstrap {
    private options;
    protected readonly cacheModels: Set<TypegooseClass>;
    protected readonly relationModels: Map<Class<Base<RefType>>, ReturnModelType<Class<Base<RefType>>>>;
    protected readonly cacheManager: Cache;
    protected readonly relationsCacheManagers?: Map<Class<Base<RefType>>, Cache>;
    constructor(options: CacheModuleOptions);
    enableCache(model: TypegooseClass | TypegooseClassWithOptions): void;
    protected modelCacheManager<Entity extends Base<RefType>>(RelationClass: Class<Entity>): Cache;
    protected cacheKey<Entity extends Base<RefType>>(RelationClass: Class<Entity>, key: string): string;
    isCachedRelation<Entity extends Base<RefType>>(RelationClass: Class<Entity>): boolean;
    onApplicationBootstrap(): Promise<void>;
    get<Entity extends Base<RefType>>(RelationClass: Class<Entity>, id: string | number): Promise<Entity>;
    set<Entity extends Base<RefType>>(RelationClass: Class<Entity>, id: unknown, value: Entity): Promise<void>;
    setAll<Entity extends Base<RefType>>(RelationClass: Class<Entity>): Promise<void>;
    invalidate<Entity extends Base<RefType>>(RelationClass: Class<Entity>, id: unknown): Promise<void>;
}
