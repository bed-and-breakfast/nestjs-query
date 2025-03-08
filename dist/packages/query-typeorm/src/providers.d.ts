import { FactoryProvider } from '@nestjs/common';
import { Class } from '@ptc-org/nestjs-query-core';
import type { DataSource } from 'typeorm';
export declare const createTypeOrmQueryServiceProviders: (entities: Class<unknown>[], dataSource?: DataSource | string) => FactoryProvider[];
