import { Class, MetaValue } from '@ptc-org/nestjs-query-core';
import { BeforeCreateManyHook, BeforeCreateOneHook, BeforeDeleteManyHook, BeforeDeleteOneHook, BeforeFindOneHook, BeforeQueryManyHook, BeforeUpdateManyHook, BeforeUpdateOneHook, Hook, HookTypes } from '../hooks';
export type HookMetaValue<H extends Hook<unknown>> = MetaValue<Class<H>[]>;
export type HookDecoratorArg<H extends Hook<unknown>> = Class<H> | H['run'];
export declare const BeforeCreateOne: (...data: HookDecoratorArg<BeforeCreateOneHook<any>>[]) => (target: Function) => void;
export declare const BeforeCreateMany: (...data: HookDecoratorArg<BeforeCreateManyHook<any>>[]) => (target: Function) => void;
export declare const BeforeUpdateOne: (...data: HookDecoratorArg<BeforeUpdateOneHook<any>>[]) => (target: Function) => void;
export declare const BeforeUpdateMany: (...data: HookDecoratorArg<BeforeUpdateManyHook<any, any>>[]) => (target: Function) => void;
export declare const BeforeDeleteOne: (...data: HookDecoratorArg<BeforeDeleteOneHook>[]) => (target: Function) => void;
export declare const BeforeDeleteMany: (...data: HookDecoratorArg<BeforeDeleteManyHook<any>>[]) => (target: Function) => void;
export declare const BeforeQueryMany: (...data: HookDecoratorArg<BeforeQueryManyHook<any>>[]) => (target: Function) => void;
export declare const BeforeFindOne: (...data: HookDecoratorArg<BeforeFindOneHook>[]) => (target: Function) => void;
export declare const getHooksForType: <H extends Hook<unknown>>(hookType: HookTypes, DTOClass: Class<unknown>) => HookMetaValue<H>;
