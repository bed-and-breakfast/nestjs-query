import { Class } from '@ptc-org/nestjs-query-core';
import { Base } from '@typegoose/typegoose/lib/defaultClasses';
import { RefType } from 'mongoose';
export declare const RelationCache: <DTO extends Base<RefType>>() => <Cls extends Class<DTO>>(DTOClass: Cls) => void | Cls;
