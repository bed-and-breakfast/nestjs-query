import { FactoryProvider } from '@nestjs/common';
import { ModelDefinition } from '@nestjs/mongoose';
import { Class } from '@ptc-org/nestjs-query-core';
import { Document } from 'mongoose';
export type NestjsQueryModelDefinition<Entity extends Document> = {
    document: Class<Entity>;
} & ModelDefinition;
export declare const createMongooseQueryServiceProviders: (models: NestjsQueryModelDefinition<Document>[]) => FactoryProvider[];
