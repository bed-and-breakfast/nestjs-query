import { AbstractAssembler, AggregateQuery, AggregateResponse, DeepPartial, Query } from '@ptc-org/nestjs-query-core';
export declare class MikroOrmAssembler<DTO, Entity, C = DeepPartial<DTO>, CE = DeepPartial<Entity>, U = C, UE = CE> extends AbstractAssembler<DTO, Entity, C, CE, U, UE> {
    convertToDTO(entity: Entity): DTO | Promise<DTO>;
    convertToEntity(dto: DTO): Entity;
    convertQuery(query: Query<DTO>): Query<Entity>;
    convertAggregateQuery(aggregate: AggregateQuery<DTO>): AggregateQuery<Entity>;
    convertAggregateResponse(aggregate: AggregateResponse<Entity>): AggregateResponse<DTO>;
    convertToCreateEntity(create: C): CE;
    convertToUpdateEntity(update: U): UE;
}
