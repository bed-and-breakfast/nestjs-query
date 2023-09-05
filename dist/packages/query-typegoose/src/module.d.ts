import { DynamicModule } from '@nestjs/common';
import { TypegooseClass, TypegooseClassWithOptions } from './typegoose-interface.helpers';
export declare class NestjsQueryTypegooseModule {
    static forFeature(models: (TypegooseClass | TypegooseClassWithOptions)[], connectionName?: string): DynamicModule;
    onModuleInit(): void;
}
