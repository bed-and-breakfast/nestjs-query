import { Class, QueryService } from '@ptc-org/nestjs-query-core';
import { NestjsQueryDataloader } from './relations.loader';
export type ReferenceArgs = {
    [key: string]: string | number;
};
export declare class ReferenceLoader<DTO> implements NestjsQueryDataloader<DTO, ReferenceArgs, DTO | undefined | Error> {
    readonly DTOClass: Class<DTO>;
    private readonly logger;
    constructor(DTOClass: Class<DTO>);
    createLoader(service: QueryService<DTO, unknown, unknown>, key?: string): (args: ReadonlyArray<ReferenceArgs>) => Promise<(DTO | undefined | Error)[]>;
}
