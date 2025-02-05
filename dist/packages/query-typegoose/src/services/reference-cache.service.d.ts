/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/callback" />
/// <reference types="mongoose/types/collection" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/expressions" />
/// <reference types="mongoose/types/helpers" />
/// <reference types="mongoose/types/middlewares" />
/// <reference types="mongoose/types/indexes" />
/// <reference types="mongoose/types/models" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/populate" />
/// <reference types="mongoose/types/query" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose/types/schematypes" />
/// <reference types="mongoose/types/session" />
/// <reference types="mongoose/types/types" />
/// <reference types="mongoose/types/utility" />
/// <reference types="mongoose/types/validation" />
/// <reference types="mongoose/types/virtuals" />
/// <reference types="mongoose/types/inferschematype" />
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
