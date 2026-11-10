import { Lifecycle, Request, ResponseToolkit as HapiResponseToolkit } from '@hapi/hapi';
import { Logger } from '../../logging';
import { OpenSearchDashboardsRequest, OpenSearchDashboardsResponse, LifecycleResponseFactory } from '../router';
declare enum ResultType {
    next = "next"
}
interface Next {
    type: ResultType.next;
}
declare type OnPreAuthResult = Next;
/**
 * @public
 * A tool set defining an outcome of OnPreAuth interceptor for incoming request.
 */
export interface OnPreAuthToolkit {
    /** To pass request to the next handler */
    next: () => OnPreAuthResult;
}
/**
 * See {@link OnPreAuthToolkit}.
 * @public
 */
export declare type OnPreAuthHandler = (request: OpenSearchDashboardsRequest, response: LifecycleResponseFactory, toolkit: OnPreAuthToolkit) => OnPreAuthResult | OpenSearchDashboardsResponse | Promise<OnPreAuthResult | OpenSearchDashboardsResponse>;
/**
 * @public
 * Adopt custom request interceptor to Hapi lifecycle system.
 * @param fn - an extension point allowing to perform custom logic for
 * incoming HTTP requests before a user has been authenticated.
 */
export declare function adoptToHapiOnPreAuth(fn: OnPreAuthHandler, log: Logger): (request: Request, responseToolkit: HapiResponseToolkit) => Promise<Lifecycle.ReturnValue>;
export {};
//# sourceMappingURL=on_pre_auth.d.ts.map