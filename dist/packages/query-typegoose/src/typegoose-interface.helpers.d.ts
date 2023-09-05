import { mongoose } from '@typegoose/typegoose';
import { Cache } from 'cache-manager';
export interface TypegooseClass {
    new (...args: any[]): any;
}
export interface TypegooseClassWrapper {
    typegooseClass: TypegooseClass;
}
export interface TypegooseClassWithOptions extends TypegooseClassWrapper {
    schemaOptions?: mongoose.SchemaOptions;
    discriminators?: (TypegooseClass | TypegooseDiscriminator)[];
    cache?: true;
    cacheRelations?: true | {
        loadAll?: boolean;
        cacheManager?: Cache;
    };
}
export interface TypegooseDiscriminator extends TypegooseClassWrapper {
    discriminatorId?: string;
}
