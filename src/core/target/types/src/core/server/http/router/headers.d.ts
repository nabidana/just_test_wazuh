/// <reference types="node" />
import { IncomingHttpHeaders } from 'http';
/**
 * Creates a Union type of all known keys of a given interface.
 * @example
 * ```ts
 * interface Person {
 *   name: string;
 *   age: number;
 *   [attributes: string]: string | number;
 * }
 * type PersonKnownKeys = KnownKeys<Person>; // "age" | "name"
 * ```
 */
declare type KnownKeys<T> = {
    [K in keyof T]: string extends K ? never : number extends K ? never : K;
} extends {
    [_ in keyof T]: infer U;
} ? U : never;
/**
 * Set of well-known HTTP headers.
 * @public
 */
export declare type KnownHeaders = KnownKeys<IncomingHttpHeaders>;
/**
 * Http request headers to read.
 * @public
 */
export declare type Headers = {
    [header in KnownHeaders]?: string | string[] | undefined;
} & {
    [header: string]: string | string[] | undefined;
};
/**
 * Http response headers to set.
 * @public
 */
export declare type ResponseHeaders = Record<KnownHeaders, string | string[]> | Record<string, string | string[]>;
export declare function filterHeaders(headers: Headers, fieldsToKeep: string[], fieldsToExclude?: string[]): Pick<Headers, string>;
export {};
//# sourceMappingURL=headers.d.ts.map