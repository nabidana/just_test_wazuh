import { IRouter, RouteConfig, IOpenSearchDashboardsResponse, ResponseHeaders, HttpResponseOptions, OpenSearchDashboardsResponseFactory, RequestHandler } from '../http';
/**
 * Allows to configure HTTP response parameters
 * @public
 */
export interface HttpResourcesRenderOptions {
    /**
     * HTTP Headers with additional information about response.
     * @remarks
     * All HTML pages are already pre-configured with `content-security-policy` header that cannot be overridden.
     * */
    headers?: ResponseHeaders;
}
/**
 * HTTP Resources response parameters
 * @public
 */
export declare type HttpResourcesResponseOptions = HttpResponseOptions;
/**
 * Extended set of {@link OpenSearchDashboardsResponseFactory} helpers used to respond with HTML or JS resource.
 * @public
 */
export interface HttpResourcesServiceToolkit {
    /** To respond with HTML page bootstrapping OpenSearch Dashboards application. */
    renderCoreApp: (options?: HttpResourcesRenderOptions) => Promise<IOpenSearchDashboardsResponse>;
    /** To respond with HTML page bootstrapping OpenSearch Dashboards application without retrieving user-specific information. */
    renderAnonymousCoreApp: (options?: HttpResourcesRenderOptions) => Promise<IOpenSearchDashboardsResponse>;
    /** To respond with a custom HTML page. */
    renderHtml: (options: HttpResourcesResponseOptions) => IOpenSearchDashboardsResponse;
    /** To respond with a custom JS script file. */
    renderJs: (options: HttpResourcesResponseOptions) => IOpenSearchDashboardsResponse;
}
/**
 * Extended version of {@link RequestHandler} having access to {@link HttpResourcesServiceToolkit}
 * to respond with HTML or JS resources.
 * @param context {@link RequestHandlerContext} - the core context exposed for this request.
 * @param request {@link OpenSearchDashboardsRequest} - object containing information about requested resource,
 * such as path, method, headers, parameters, query, body, etc.
 * @param response {@link OpenSearchDashboardsResponseFactory} {@libk HttpResourcesServiceToolkit} - a set of helper functions used to respond to a request.
 *
 *  @example
 * ```typescript
 * httpResources.register({
 *   path: '/login',
 *   validate: {
 *     params: schema.object({ id: schema.string() }),
 *   },
 * },
 * async (context, request, response) => {
 *   //..
 *   return response.renderCoreApp();
 * });
 * @public
 */
export declare type HttpResourcesRequestHandler<P = unknown, Q = unknown, B = unknown> = RequestHandler<P, Q, B, 'get', OpenSearchDashboardsResponseFactory & HttpResourcesServiceToolkit>;
/**
 * Allows to configure HTTP response parameters
 * @internal
 */
export interface InternalHttpResourcesSetup {
    createRegistrar(router: IRouter): HttpResources;
}
/**
 * HttpResources service is responsible for serving static & dynamic assets for OpenSearch Dashboards application via HTTP.
 * Provides API allowing plug-ins to respond with:
 * - a pre-configured HTML page bootstrapping OpenSearch Dashboards client app
 * - custom HTML page
 * - custom JS script file.
 * @public
 */
export interface HttpResources {
    /** To register a route handler executing passed function to form response. */
    register: <P, Q, B>(route: RouteConfig<P, Q, B, 'get'>, handler: HttpResourcesRequestHandler<P, Q, B>) => void;
}
//# sourceMappingURL=types.d.ts.map