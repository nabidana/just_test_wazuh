import { Lifecycle, Request, ResponseToolkit as HapiResponseToolkit } from '@hapi/hapi';
import { Logger } from '../../logging';
import { OpenSearchDashboardsRequest, OpenSearchDashboardsResponse, LifecycleResponseFactory } from '../router';
declare enum ResultType {
    next = "next"
}
interface Next {
    type: ResultType.next;
}
declare type OnPostAuthResult = Next;
/**
 * @public
 * A tool set defining an outcome of OnPostAuth interceptor for incoming request.
 */
export interface OnPostAuthToolkit {
    /** To pass request to the next handler */
    next: () => OnPostAuthResult;
}
/**
 * See {@link OnPostAuthToolkit}.
 * @public
 */
export declare type OnPostAuthHandler = (request: OpenSearchDashboardsRequest, response: LifecycleResponseFactory, toolkit: OnPostAuthToolkit) => OnPostAuthResult | OpenSearchDashboardsResponse | Promise<OnPostAuthResult | OpenSearchDashboardsResponse>;
/**
 * @public
 * Adopt custom request interceptor to Hapi lifecycle system.
 * @param fn - an extension point allowing to perform custom logic for
 * incoming HTTP requests.
 */
export declare function adoptToHapiOnPostAuthFormat(fn: OnPostAuthHandler, log: Logger): (request: Request, responseToolkit: HapiResponseToolkit) => Promise<Lifecycle.ReturnValue>;
export {};
//# sourceMappingURL=on_post_auth.d.ts.map