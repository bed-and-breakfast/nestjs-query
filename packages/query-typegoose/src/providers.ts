import { getModelToken } from '@m8a/nestjs-typegoose'
import { FactoryProvider } from '@nestjs/common'
import { AssemblerSerializer, getQueryServiceToken } from '@ptc-org/nestjs-query-core'
import { DocumentType, mongoose, plugin } from '@typegoose/typegoose'
import { Base } from '@typegoose/typegoose/lib/defaultClasses'
import { isClass } from 'is-class'
import mongooseLeanDefaults from 'mongoose-lean-defaults'
import mongooseLeanGetters from 'mongoose-lean-getters'
import mongooseLeanId from 'mongoose-lean-id'
import mongooseLeanVirtuals from 'mongoose-lean-virtuals'

import { TypegooseQueryService } from './services'
import { ReferenceCacheService } from './services/reference-cache.service'
import { TypegooseClass, TypegooseClassWithOptions, TypegooseDiscriminator } from './typegoose-interface.helpers'
import { ReturnModelType } from './typegoose-types.helper'

type ClassOrDiscriminator = TypegooseClassWithOptions | TypegooseDiscriminator
type TypegooseInput = TypegooseClass | ClassOrDiscriminator

const isTypegooseClass = (item: TypegooseInput): item is TypegooseClass => isClass(item)

const isTypegooseClassWithOptions = (item: ClassOrDiscriminator): item is TypegooseClassWithOptions =>
  isTypegooseClass(item.typegooseClass)

AssemblerSerializer((obj: mongoose.Document) => obj.toObject({ virtuals: true }))(mongoose.Document)

function ensureProperInput(item: TypegooseInput): ClassOrDiscriminator | undefined {
  if (isTypegooseClass(item)) {
    return { typegooseClass: item }
  }
  if (isTypegooseClassWithOptions(item)) {
    return item
  }
  return undefined
}

function createTypegooseQueryServiceProvider<Entity extends Base>(
  model: TypegooseClass | TypegooseClassWithOptions
): FactoryProvider {
  const inputModel = ensureProperInput(model)

  plugin(mongooseLeanId)(inputModel.typegooseClass)
  plugin(mongooseLeanVirtuals)(inputModel.typegooseClass)
  plugin(mongooseLeanGetters)(inputModel.typegooseClass)
  plugin(mongooseLeanDefaults)(inputModel.typegooseClass)

  if (!inputModel) {
    // eslint-disable-next-line @typescript-eslint/restrict-template-expressions,@typescript-eslint/no-base-to-string
    throw new Error(`Model definitions ${model} is incorrect.`)
  }
  const modelName = inputModel.typegooseClass?.name

  return {
    provide: getQueryServiceToken({ name: modelName }),
    useFactory(ModelClass: ReturnModelType<new () => Entity>, referenceCacheService?: ReferenceCacheService) {
      if ((model as TypegooseClassWithOptions).cache) {
        referenceCacheService.enableCache(model)
      }

      // initialize default serializer for documents, this is the type that mongoose returns from queries
      // eslint-disable-next-line @typescript-eslint/no-unsafe-return
      AssemblerSerializer((obj: DocumentType<unknown>) => obj.toObject({ virtuals: true }))(ModelClass)

      return new TypegooseQueryService(inputModel.typegooseClass, ModelClass, referenceCacheService)
    },
    inject: [getModelToken(modelName), ReferenceCacheService]
  }
}

export const createTypegooseQueryServiceProviders = (models: (TypegooseClass | TypegooseClassWithOptions)[]): FactoryProvider[] =>
  models.map((model) => createTypegooseQueryServiceProvider(model))
