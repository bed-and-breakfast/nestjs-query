import { Class, DeepPartial } from '../common';
import { AggregateQuery, AggregateResponse, Query } from '../interfaces';
import { AbstractAssembler } from './abstract.assembler';
/**
 * Base assembler that uses class-transformer to transform to and from the DTO/Entity.
 */
export declare abstract class ClassTransformerAssembler<DTO, Entity extends DeepPartial<Entity>> extends AbstractAssembler<DTO, Entity, DeepPartial<DTO>, DeepPartial<Entity>, DeepPartial<DTO>, DeepPartial<Entity>> {
    convertToDTO(entity: Entity): DTO | Promise<DTO>;
    convertToEntity(dto: DTO): Entity | Promise<Entity>;
    convertQuery(query: Query<DTO>): Query<Entity>;
    convertAggregateQuery(aggregate: AggregateQuery<DTO>): AggregateQuery<Entity>;
    convertAggregateResponse(aggregate: AggregateResponse<Entity>): AggregateResponse<DTO>;
    convertToCreateEntity(create: DeepPartial<DTO>): DeepPartial<Entity> | Promise<DeepPartial<Entity>>;
    convertToUpdateEntity(create: DeepPartial<DTO>): DeepPartial<Entity> | Promise<DeepPartial<Entity>>;
    convert<T>(cls: Class<T>, obj: object): T;
    isConstructor(x: any): boolean;
    toPlain(entityOrDto: Entity | DTO): object;
}
