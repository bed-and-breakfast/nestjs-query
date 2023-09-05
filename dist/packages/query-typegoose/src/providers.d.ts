import { FactoryProvider } from '@nestjs/common';
import { TypegooseClass, TypegooseClassWithOptions, TypegooseDiscriminator } from './typegoose-interface.helpers';
type ClassOrDiscriminator = TypegooseClassWithOptions | TypegooseDiscriminator;
type TypegooseInput = TypegooseClass | ClassOrDiscriminator;
export declare function ensureProperInput(item: TypegooseInput): ClassOrDiscriminator | undefined;
export declare const createTypegooseQueryServiceProviders: (models: (TypegooseClass | TypegooseClassWithOptions)[]) => FactoryProvider[];
export {};
