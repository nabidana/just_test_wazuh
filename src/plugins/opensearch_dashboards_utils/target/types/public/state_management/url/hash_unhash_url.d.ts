export declare type IParsedUrlQuery = Record<string, any>;
interface IUrlQueryMapperOptions {
    hashableParams: string[];
}
export declare type IUrlQueryReplacerOptions = IUrlQueryMapperOptions;
export declare const unhashQuery: (query: IParsedUrlQuery, options?: IUrlQueryMapperOptions) => {
    [k: string]: any;
};
export declare const hashQuery: (query: IParsedUrlQuery, options?: IUrlQueryMapperOptions) => {
    [k: string]: any;
};
export declare const unhashUrl: (url: string) => string;
export declare const hashUrl: (url: string) => string;
export {};
//# sourceMappingURL=hash_unhash_url.d.ts.map