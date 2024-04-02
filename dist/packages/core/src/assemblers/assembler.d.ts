import { Class, DeepPartial, MetaValue } from '../common';
import { AggregateQuery, AggregateResponse, Query } from '../interfaces';
export interface Assembler<DTO, Entity, CreateDTO = DeepPartial<DTO>, CreateEntity = DeepPartial<Entity>, UpdateDTO = CreateDTO, UpdateEntity = CreateEntity> {
    /**
     * Convert an entity to a DTO
     * @param entity - the entity to convert
     */
    convertToDTO(entity: Entity): Promise<DTO> | DTO;
    /**
     * Convert a DTO to an entity.
     * @param dto - The dto to convert.
     */
    convertToEntity(dto: DTO): Promise<Entity> | Entity;
    /**
     * Convert a DTO query to an entity query.
     * @param query - the query to convert.
     */
    convertQuery(query: Query<DTO>): Query<Entity>;
    /**
     * Convert a DTO query to an entity query.
     * @param aggregate - the aggregate query to convert.
     */
    convertAggregateQuery(aggregate: AggregateQuery<DTO>): AggregateQuery<Entity>;
    /**
     * Convert a Entity aggregate response query to an dto aggregate.
     * @param aggregate - the aggregate query to convert.
     */
    convertAggregateResponse(aggregate: AggregateResponse<Entity>): AggregateResponse<DTO>;
    /**
     * Convert a create dto input to the equivalent create entity type
     * @param createDTO
     */
    convertToCreateEntity(createDTO: CreateDTO): Promise<CreateEntity> | CreateEntity;
    /**
     * Convert a update dto input to the equivalent update entity type
     * @param createDTO
     */
    convertToUpdateEntity(createDTO: UpdateDTO): Promise<UpdateEntity> | UpdateEntity;
    /**
     * Convert an array of entities to a an of DTOs
     * @param entities - the entities to convert.
     */
    convertToDTOs(entities: Entity[]): Promise<DTO[]>;
    /**
     * Convert an array of DTOs to an array of entities.
     * @param dtos - the dtos to convert.
     */
    convertToEntities(dtos: DTO[]): Promise<Entity[]>;
    /**
     * Convert an array of create DTOs to an array of create entities
     * @param createDtos
     */
    convertToCreateEntities(createDtos: CreateDTO[]): Promise<CreateEntity[]>;
}
export interface AssemblerClasses<DTO, Entity> {
    DTOClass: Class<DTO>;
    EntityClass: Class<Entity>;
}
/**
 * Class decorator for Assemblers to register them with nestjs-query
 * @param DTOClass - the DTO class.
 * @param EntityClass - The entity class.
 */
export declare function Assembler<DTO, Entity, C = DeepPartial<DTO>, CE = DeepPartial<Entity>, U = DeepPartial<DTO>, UE = DeepPartial<Entity>>(DTOClass: Class<DTO>, EntityClass: Class<Entity>): <Cls extends Class<Assembler<DTO, Entity, C, CE, U, UE>>>(cls: Cls) => void | Cls;
export declare function getAssemblers<DTO>(DTOClass: Class<DTO>): MetaValue<Map<Class<unknown>, Class<Assembler<DTO, unknown, unknown, unknown, unknown, unknown>>>>;
export declare function getAssemblerClasses<DTO, Entity, C, CE, U, UE>(AssemblerClass: Class<Assembler<DTO, Entity, C, CE, U, UE>>): MetaValue<AssemblerClasses<DTO, Entity>>;
