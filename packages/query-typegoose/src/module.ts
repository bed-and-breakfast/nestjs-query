import { TypegooseModule } from '@m8a/nestjs-typegoose'
import { DynamicModule } from '@nestjs/common'
import { getModelForClass } from '@typegoose/typegoose'
import mongoose, { Mongoose } from 'mongoose'
import { applySpeedGooseCacheLayer, SharedCacheStrategies } from 'speedgoose'
import { registerListenerForInternalEvents } from 'speedgoose/lib/src/mongooseModelEvents'

import { createTypegooseQueryServiceProviders, ensureProperInput } from './providers'
import { TypegooseClass, TypegooseClassWithOptions } from './typegoose-interface.helpers'

// export const nestjsQueryTypegooseModules = {
//   total: 0,
//   loaded: 0
// }

const allModels: TypegooseClass[] = []

export class NestjsQueryTypegooseModule {
  static forFeature(models: (TypegooseClass | TypegooseClassWithOptions)[], connectionName?: string): DynamicModule {
    // nestjsQueryTypegooseModules.total += 1

    const queryServiceProviders = createTypegooseQueryServiceProviders(models)

    const typegooseModule = TypegooseModule.forFeature(models, connectionName)

    allModels.push(...models.map((model) => ensureProperInput(model).typegooseClass))

    models.forEach((model) => {
      const discriminators = (model as TypegooseClassWithOptions).discriminators

      if (discriminators) {
        allModels.push(...discriminators.map((discriminator) => ensureProperInput(discriminator).typegooseClass))
      }
    })

    void applySpeedGooseCacheLayer(mongoose as unknown as Mongoose, {
      // enabled: false,
      sharedCacheStrategy: SharedCacheStrategies.IN_MEMORY,
      defaultTtl: 0,
      debugConfig: {
        // enabled: true
      }
    })

    return {
      imports: [typegooseModule],
      module: NestjsQueryTypegooseModule,
      providers: [...queryServiceProviders],
      exports: [...queryServiceProviders, typegooseModule]
    }
  }

  onModuleInit() {
    registerListenerForInternalEvents({
      models: allModels.map((model) => getModelForClass(model))
    } as unknown as Mongoose)
  }

  // onModuleInit() {
  //   nestjsQueryTypegooseModules.loaded += 1
  //
  //   if (nestjsQueryTypegooseModules.loaded === nestjsQueryTypegooseModules.total) {
  //     console.log('MM2', mongoose.models)
  //
  //     // void applySpeedGooseCacheLayer(mongoose as unknown as Mongoose, {
  //     //   // enabled: false,
  //     //   sharedCacheStrategy: SharedCacheStrategies.IN_MEMORY,
  //     //   defaultTtl: 0,
  //     //   debugConfig: {
  //     //     enabled: true
  //     //   }
  //     // })
  //   }
  // }
}
