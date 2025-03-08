export type NamedType = {
    name: string;
};
export declare const isNamed: (SomeType: any) => SomeType is NamedType;
export declare function upperCaseFirst(input: string, locale?: string[] | string): string;
export declare function lowerCaseFirst(input: string): string;
