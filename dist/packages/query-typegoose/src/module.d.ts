import { DynamicModule } from '@nestjs/common';
import { TypegooseClass, TypegooseClassWithOptions } from './typegoose-interface.helpers';
export declare class NestjsQueryTypegooseModule {
    static forFeature(models: (TypegooseClass | TypegooseClassWithOptions)[], cacheModels?: TypegooseClass[], connectionName?: string): DynamicModule;
}
