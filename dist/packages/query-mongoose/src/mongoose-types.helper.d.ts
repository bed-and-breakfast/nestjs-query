/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/callback" />
/// <reference types="mongoose/types/collection" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/expressions" />
/// <reference types="mongoose/types/helpers" />
/// <reference types="mongoose/types/middlewares" />
/// <reference types="mongoose/types/indexes" />
/// <reference types="mongoose/types/models" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/populate" />
/// <reference types="mongoose/types/query" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose/types/schematypes" />
/// <reference types="mongoose/types/session" />
/// <reference types="mongoose/types/types" />
/// <reference types="mongoose/types/utility" />
/// <reference types="mongoose/types/validation" />
/// <reference types="mongoose/types/virtuals" />
/// <reference types="mongoose/types/inferschematype" />
import { SchemaType } from 'mongoose';
export type ReferenceOptions = {
    type: SchemaType;
    ref: string;
};
export declare function isReferenceOptions(options: unknown): options is ReferenceOptions;
export type SchemaTypeWithReferenceOptions = {
    options: ReferenceOptions;
};
export declare function isSchemaTypeWithReferenceOptions(type: unknown): type is SchemaTypeWithReferenceOptions;
export type EmbeddedSchemaTypeOptions = {
    $embeddedSchemaType: {
        options: ReferenceOptions;
    };
};
export declare function isEmbeddedSchemaTypeOptions(options: unknown): options is EmbeddedSchemaTypeOptions;
export type VirtualReferenceOptions = {
    ref: string;
    localField: string;
    foreignField: string;
};
export declare function isVirtualReferenceOptions(options: unknown): options is VirtualReferenceOptions;
export type VirtualTypeWithOptions = {
    options: VirtualReferenceOptions;
};
export declare function isVirtualTypeWithReferenceOptions(virtualType: unknown): virtualType is VirtualTypeWithOptions;
