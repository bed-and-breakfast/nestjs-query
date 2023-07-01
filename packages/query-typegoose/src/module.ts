import { TypegooseModule } from '@m8a/nestjs-typegoose'
import { DynamicModule } from '@nestjs/common'

import { createTypegooseQueryServiceProviders } from './providers'
import { TypegooseClass, TypegooseClassWithOptions } from './typegoose-interface.helpers'

export class NestjsQueryTypegooseModule {
  static forFeature(
    models: (TypegooseClass | TypegooseClassWithOptions)[],
    cacheModels?: TypegooseClass[],
    connectionName?: string
  ): DynamicModule {
    const queryServiceProviders = createTypegooseQueryServiceProviders(models, cacheModels)
    const typegooseModule = TypegooseModule.forFeature(models, connectionName)

    return {
      imports: [typegooseModule],
      module: NestjsQueryTypegooseModule,
      providers: [...queryServiceProviders],
      exports: [...queryServiceProviders, typegooseModule]
    }
  }
}
