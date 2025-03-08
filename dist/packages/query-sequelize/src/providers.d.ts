import { FactoryProvider } from '@nestjs/common';
import { ModelCtor, SequelizeOptions } from 'sequelize-typescript';
export declare const createSequelizeQueryServiceProviders: (entities: ModelCtor[], connection?: SequelizeOptions | string) => FactoryProvider[];
