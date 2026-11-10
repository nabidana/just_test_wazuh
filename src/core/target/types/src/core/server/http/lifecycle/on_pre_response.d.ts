import { Lifecycle, Request, ResponseToolkit as HapiResponseToolkit } from '@hapi/hapi';
import { Logger } from '../../logging';
import { OpenSearchDashboardsRequest, ResponseHeaders } from '../router';
declare enum ResultType {
    render = "render",
    next = "next"
}
interface Render {
    type: ResultType.render;
    body: string;
    headers?: ResponseHeaders;
}
interface Next {
    type: ResultType.next;
    headers?: ResponseHeaders;
}
/**
 * @internal
 */
declare type OnPreResponseResult = Render | Next;
/**
 * Additional data to extend a response when rendering a new body
 * @public
 */
export interface OnPreResponseRender {
    /** additional headers to attach to the response */
    headers?: ResponseHeaders;
    /** the body to use in the response */
    body: string;
}
/**
 * Additional data to extend a response.
 * @public
 */
export interface OnPreResponseExtensions {
    /** additional headers to attach to the response */
    headers?: ResponseHeaders;
}
/**
 * Response status code.
 * @public
 */
export interface OnPreResponseInfo {
    statusCode: number;
}
/**
 * A tool set defining an outcome of OnPreResponse interceptor for incoming request.
 * @public
 */
export interface OnPreResponseToolkit {
    /** To override the response with a different body */
    render: (responseRender: OnPreResponseRender) => OnPreResponseResult;
    /** To pass request to the next handler */
    next: (responseExtensions?: OnPreResponseExtensions) => OnPreResponseResult;
}
/**
 * See {@link OnPreRoutingToolkit}.
 * @public
 */
export declare type OnPreResponseHandler = (request: OpenSearchDashboardsRequest, preResponse: OnPreResponseInfo, toolkit: OnPreResponseToolkit) => OnPreResponseResult | Promise<OnPreResponseResult>;
/**
 * @public
 * Adopt custom request interceptor to Hapi lifecycle system.
 * @param fn - an extension point allowing to perform custom logic for
 * incoming HTTP requests.
 */
export declare function adoptToHapiOnPreResponseFormat(fn: OnPreResponseHandler, log: Logger): (request: Request, responseToolkit: HapiResponseToolkit) => Promise<Lifecycle.ReturnValue>;
export {};
//# sourceMappingURL=on_pre_response.d.ts.map