import { IHttpFetchError } from './types';
/** @internal */
export declare class HttpFetchError extends Error implements IHttpFetchError {
    readonly request: Request;
    readonly response?: Response | undefined;
    readonly body?: any;
    readonly name: string;
    readonly req: Request;
    readonly res?: Response;
    constructor(message: string, name: string, request: Request, response?: Response | undefined, body?: any);
}
//# sourceMappingURL=http_fetch_error.d.ts.map