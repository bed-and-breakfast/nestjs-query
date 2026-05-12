import { DynamicModule } from '@nestjs/common';
import { Class } from '@ptc-org/nestjs-query-core';
import { EntityServiceOptions } from './providers';
export declare class NestjsQueryMikroOrmModule {
    static forFeature(entities: Array<Class<object> | EntityServiceOptions>, dataSource?: string): DynamicModule;
}
