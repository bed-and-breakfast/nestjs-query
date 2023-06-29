import { TypegooseModule } from '@m8a/nestjs-typegoose'
import { DynamicModule } from '@nestjs/common'

import { createTypegooseQueryServiceProviders } from './providers'
import { ReferenceCacheService } from './services/reference-cache.service'
import { TypegooseClass, TypegooseClassWithOptions } from './typegoose-interface.helpers'

export class NestjsQueryTypegooseModule {
  static forFeature(
    models: (TypegooseClass | TypegooseClassWithOptions)[],
    cacheModels?: TypegooseClass[],
    connectionName?: string
  ): DynamicModule {
    const queryServiceProviders = createTypegooseQueryServiceProviders(models)
    const typegooseModule = TypegooseModule.forFeature(models, connectionName)
    const referenceCacheServiceProvider = { provide: ReferenceCacheService, useValue: new ReferenceCacheService(cacheModels) }

    return {
      imports: [typegooseModule],
      module: NestjsQueryTypegooseModule,
      providers: [referenceCacheServiceProvider, ...queryServiceProviders],
      exports: [referenceCacheServiceProvider, ...queryServiceProviders, typegooseModule]
    }
  }
}
