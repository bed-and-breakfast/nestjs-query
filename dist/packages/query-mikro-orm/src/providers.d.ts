import { FactoryProvider } from '@nestjs/common';
import { Assembler, Class } from '@ptc-org/nestjs-query-core';
export interface EntityServiceOptions<DTO extends object = object, Entity extends object = object> {
    entity: Class<Entity>;
    dto?: Class<DTO>;
    assembler?: Class<Assembler<DTO, Entity>>;
}
export declare function createMikroOrmQueryServiceProviders(options: Array<Class<object> | EntityServiceOptions>, dataSource?: string): FactoryProvider[];
