import type { PrependOptions } from './types';
export declare class BasePath {
    private readonly basePath;
    readonly serverBasePath: string;
    private readonly clientBasePath;
    constructor(basePath?: string, serverBasePath?: string, clientBasePath?: string);
    get: () => string;
    getBasePath: () => string;
    prepend: (path: string, prependOptions?: PrependOptions | undefined) => string;
    remove: (path: string, prependOptions?: PrependOptions | undefined) => string;
}
//# sourceMappingURL=base_path.d.ts.map