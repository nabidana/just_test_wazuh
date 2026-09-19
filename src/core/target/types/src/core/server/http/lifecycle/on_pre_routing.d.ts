import { Lifecycle, Request, ResponseToolkit as HapiResponseToolkit } from '@hapi/hapi';
import { Logger } from '../../logging';
import { OpenSearchDashboardsRequest, OpenSearchDashboardsResponse, LifecycleResponseFactory } from '../router';
declare enum ResultType {
    next = "next",
    rewriteUrl = "rewriteUrl"
}
interface Next {
    type: ResultType.next;
}
interface RewriteUrl {
    type: ResultType.rewriteUrl;
    url: string;
}
declare type OnPreRoutingResult = Next | RewriteUrl;
/**
 * @public
 * A tool set defining an outcome of OnPreRouting interceptor for incoming request.
 */
export interface OnPreRoutingToolkit {
    /** To pass request to the next handler */
    next: () => OnPreRoutingResult;
    /** Rewrite requested resources url before is was authenticated and routed to a handler */
    rewriteUrl: (url: string) => OnPreRoutingResult;
}
/**
 * See {@link OnPreRoutingToolkit}.
 * @public
 */
export declare type OnPreRoutingHandler = (request: OpenSearchDashboardsRequest, response: LifecycleResponseFactory, toolkit: OnPreRoutingToolkit) => OnPreRoutingResult | OpenSearchDashboardsResponse | Promise<OnPreRoutingResult | OpenSearchDashboardsResponse>;
/**
 * @public
 * Adopt custom request interceptor to Hapi lifecycle system.
 * @param fn - an extension point allowing to perform custom logic for
 * incoming HTTP requests.
 */
export declare function adoptToHapiOnRequest(fn: OnPreRoutingHandler, log: Logger): (request: Request, responseToolkit: HapiResponseToolkit) => Promise<Lifecycle.ReturnValue>;
export {};
//# sourceMappingURL=on_pre_routing.d.ts.map