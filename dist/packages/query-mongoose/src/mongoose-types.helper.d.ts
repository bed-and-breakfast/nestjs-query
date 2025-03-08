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
