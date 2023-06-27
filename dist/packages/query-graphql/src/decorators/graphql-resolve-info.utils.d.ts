import type { Query } from '@ptc-org/nestjs-query-core';
import type { GraphQLResolveInfo as ResolveInfo } from 'graphql';
type QueryResolveFields<DTO> = {
    [key in keyof DTO]: QueryResolveTree<DTO[key] extends ArrayLike<unknown> ? DTO[key][number] : DTO[key]>;
};
export interface QueryResolveTree<DTO> {
    name: string;
    alias: string;
    args?: Query<DTO>;
    fields: QueryResolveFields<DTO>;
}
export declare function simplifyResolveInfo<DTO>(resolveInfo: ResolveInfo): QueryResolveTree<DTO>;
export {};
