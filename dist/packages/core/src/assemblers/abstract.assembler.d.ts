import { Class, DeepPartial } from '../common';
import { AggregateQuery, AggregateResponse, Query } from '../interfaces';
import { Assembler } from './assembler';
/**
 * Base implementation for Assemblers that requires the implementation of.
 * * convertToDTO
 * * convertToEntity
 * * convertQuery
 *
 */
export declare abstract class AbstractAssembler<DTO, Entity, C = DeepPartial<DTO>, CE = DeepPartial<Entity>, U = C, UE = CE> implements Assembler<DTO, Entity, C, CE, U, UE> {
    readonly DTOClass: Class<DTO>;
    readonly EntityClass: Class<Entity>;
    /**
     * @param DTOClass - Optional class definition for the DTO. If not provided it will be looked up from the \@Assembler annotation.
     * @param EntityClass - Optional class definition for the entity. If not provided it will be looked up from the \@Assembler annotation.
     */
    constructor(DTOClass?: Class<DTO>, EntityClass?: Class<Entity>);
    abstract convertToDTO(entity: Entity): Promise<DTO> | DTO;
    abstract convertToEntity(dto: DTO): Promise<Entity> | Entity;
    abstract convertQuery(query: Query<DTO>): Query<Entity>;
    abstract convertAggregateQuery(aggregate: AggregateQuery<DTO>): AggregateQuery<Entity>;
    abstract convertAggregateResponse(aggregate: AggregateResponse<Entity>): AggregateResponse<DTO>;
    abstract convertToCreateEntity(create: C): Promise<CE> | CE;
    abstract convertToUpdateEntity(update: U): Promise<UE> | UE;
    convertToDTOs(entities: Entity[]): Promise<DTO[]>;
    convertToEntities(dtos: DTO[]): Promise<Entity[]>;
    convertToCreateEntities(createDtos: C[]): Promise<CE[]>;
}
