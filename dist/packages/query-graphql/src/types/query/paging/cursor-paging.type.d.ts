import { Class } from '@ptc-org/nestjs-query-core';
import { CursorQueryArgsTypeOpts } from '..';
import { CursorPagingType } from './interfaces';
export declare const getOrCreateCursorPagingType: <DTO>(opts: CursorQueryArgsTypeOpts<DTO>) => Class<CursorPagingType>;
