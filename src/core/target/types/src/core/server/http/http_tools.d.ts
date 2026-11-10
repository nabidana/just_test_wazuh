import { Lifecycle, Request, ResponseToolkit, Server, ServerOptions, Util } from '@hapi/hapi';
import { ValidationError } from 'joi';
import { HttpConfig } from './http_config';
import { OpenSearchDashboardsRequest } from './router';
/**
 * Converts OpenSearch Dashboards `HttpConfig` into `ServerOptions` that are accepted by the Hapi server.
 */
export declare function getServerOptions(config: HttpConfig, { configureTLS }?: {
    configureTLS?: boolean | undefined;
}): ServerOptions;
export declare function getListenerOptions(config: HttpConfig): {
    keepaliveTimeout: number;
    socketTimeout: number;
};
interface ListenerOptions {
    keepaliveTimeout: number;
    socketTimeout: number;
}
export declare function createServer(serverOptions: ServerOptions, listenerOptions: ListenerOptions): Server;
/**
 * Hapi extends the ValidationError interface to add this output key with more data.
 */
export interface HapiValidationError extends ValidationError {
    output: {
        statusCode: number;
        headers: Util.Dictionary<string | string[]>;
        payload: {
            statusCode: number;
            error: string;
            message?: string;
            validation: {
                source: string;
                keys: string[];
            };
        };
    };
}
/**
 * Used to replicate Hapi v16 and below's validation responses. Should be used in the routes.validate.failAction key.
 */
export declare function defaultValidationErrorHandler(request: Request, h: ResponseToolkit, err?: Error): Lifecycle.ReturnValue;
export declare function getRequestId(request: Request, options: HttpConfig['requestId']): string;
/**
 * Return back the expected redirect url with basePath and conditional workspace id based on the request.
 * This method should be used when the request is not authenticated and need a redirect url after login.
 * And it should take care all the stuff on prepending required params into the path.
 * @param request Hapi request object
 * @returns the expected next url
 */
export declare function getRedirectUrl(props: {
    request: OpenSearchDashboardsRequest;
    nextUrl: string;
    basePath: string;
}): string;
export {};
//# sourceMappingURL=http_tools.d.ts.map