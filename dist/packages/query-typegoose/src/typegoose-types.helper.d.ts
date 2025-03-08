import { DocumentType, mongoose } from '@typegoose/typegoose';
import { AnyParamConstructor, BeAnObject, BeAnyObject, IObjectWithTypegooseFunction } from '@typegoose/typegoose/lib/types';
export type ReferenceOptions = {
    type: mongoose.SchemaType;
    ref: string;
};
export type UpdateArrayQuery<T> = {
    $addToSet: {
        [key: string]: {
            $each: T[];
        };
    };
    $pull: {
        [key: string]: {
            [key: string]: {
                $in: T[keyof T][];
            };
        };
    };
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
type CustomModelType<T, QueryHelpers = BeAnObject> = mongoose.Model<T, // raw doc type
QueryHelpers, // query helpers
IObjectWithTypegooseFunction, // instance methods
BeAnyObject, DocumentType<T>>;
export type ReturnModelType<U extends AnyParamConstructor<unknown>, QueryHelpers = BeAnObject> = CustomModelType<InstanceType<U>, QueryHelpers> & U;
export {};
