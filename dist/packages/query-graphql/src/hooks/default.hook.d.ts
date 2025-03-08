import { Class } from '@ptc-org/nestjs-query-core';
import { Hook } from './hooks';
export declare const createDefaultHook: <T>(func: Hook<T>["run"]) => Class<Hook<T>>;
