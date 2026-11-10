import { Request, ResponseObject, ResponseToolkit } from '@hapi/hapi';
import Boom from '@hapi/boom';
import { Logger } from '../../logging';
import { OpenSearchDashboardsRequest } from './request';
import { OpenSearchDashboardsResponseFactory, IOpenSearchDashboardsResponse } from './response';
import { RouteConfig, RouteConfigOptions, RouteMethod } from './route';
import { RequestHandlerContext } from '../../../server';
interface RouterRoute {
    method: RouteMethod;
    path: string;
    options: RouteConfigOptions<RouteMethod>;
    handler: (req: Request, responseToolkit: ResponseToolkit) => Promise<ResponseObject | Boom.Boom<any>>;
}
/**
 * Route handler common definition
 *
 * @public
 */
export declare type RouteRegistrar<Method extends RouteMethod> = <P, Q, B>(route: RouteConfig<P, Q, B, Method>, handler: RequestHandler<P, Q, B, Method>) => void;
/**
 * Registers route handlers for specified resource path and method.
 * See {@link RouteConfig} and {@link RequestHandler} for more information about arguments to route registrations.
 *
 * @public
 */
export interface IRouter {
    /**
     * Resulted path
     */
    routerPath: string;
    /**
     * Register a route handler for `GET` request.
     * @param route {@link RouteConfig} - a route configuration.
     * @param handler {@link RequestHandler} - a function to call to respond to an incoming request
     */
    get: RouteRegistrar<'get'>;
    /**
     * Register a route handler for `POST` request.
     * @param route {@link RouteConfig} - a route configuration.
     * @param handler {@link RequestHandler} - a function to call to respond to an incoming request
     */
    post: RouteRegistrar<'post'>;
    /**
     * Register a route handler for `PUT` request.
     * @param route {@link RouteConfig} - a route configuration.
     * @param handler {@link RequestHandler} - a function to call to respond to an incoming request
     */
    put: RouteRegistrar<'put'>;
    /**
     * Register a route handler for `PATCH` request.
     * @param route {@link RouteConfig} - a route configuration.
     * @param handler {@link RequestHandler} - a function to call to respond to an incoming request
     */
    patch: RouteRegistrar<'patch'>;
    /**
     * Register a route handler for `DELETE` request.
     * @param route {@link RouteConfig} - a route configuration.
     * @param handler {@link RequestHandler} - a function to call to respond to an incoming request
     */
    delete: RouteRegistrar<'delete'>;
    /**
     * Wrap a router handler to catch and converts legacy boom errors to proper custom errors.
     * @param handler {@link RequestHandler} - a route handler to wrap
     */
    handleLegacyErrors: RequestHandlerWrapper;
    /**
     * Returns all routes registered with this router.
     * @returns List of registered routes.
     * @internal
     */
    getRoutes: () => RouterRoute[];
}
export declare type ContextEnhancer<P, Q, B, Method extends RouteMethod> = (handler: RequestHandler<P, Q, B, Method>) => RequestHandlerEnhanced<P, Q, B, Method>;
/**
 * @internal
 */
export declare class Router implements IRouter {
    readonly routerPath: string;
    private readonly log;
    private readonly enhanceWithContext;
    routes: Array<Readonly<RouterRoute>>;
    get: IRouter['get'];
    post: IRouter['post'];
    delete: IRouter['delete'];
    put: IRouter['put'];
    patch: IRouter['patch'];
    constructor(routerPath: string, log: Logger, enhanceWithContext: ContextEnhancer<any, any, any, any>);
    getRoutes(): Readonly<RouterRoute>[];
    handleLegacyErrors: RequestHandlerWrapper;
    private handle;
}
declare type WithoutHeadArgument<T> = T extends (first: any, ...rest: infer Params) => infer Return ? (...rest: Params) => Return : never;
declare type RequestHandlerEnhanced<P, Q, B, Method extends RouteMethod> = WithoutHeadArgument<RequestHandler<P, Q, B, Method>>;
/**
 * A function executed when route path matched requested resource path.
 * Request handler is expected to return a result of one of {@link OpenSearchDashboardsResponseFactory} functions.
 * @param context {@link RequestHandlerContext} - the core context exposed for this request.
 * @param request {@link OpenSearchDashboardsRequest} - object containing information about requested resource,
 * such as path, method, headers, parameters, query, body, etc.
 * @param response {@link OpenSearchDashboardsResponseFactory} - a set of helper functions used to respond to a request.
 *
 * @example
 * ```ts
 * const router = httpSetup.createRouter();
 * // creates a route handler for GET request on 'my-app/path/{id}' path
 * router.get(
 *   {
 *     path: 'path/{id}',
 *     // defines a validation schema for a named segment of the route path
 *     validate: {
 *       params: schema.object({
 *         id: schema.string(),
 *       }),
 *     },
 *   },
 *   // function to execute to create a responses
 *   async (context, request, response) => {
 *     const data = await context.findObject(request.params.id);
 *     // creates a command to respond with 'not found' error
 *     if (!data) return response.notFound();
 *     // creates a command to send found data to the client
 *     return response.ok(data);
 *   }
 * );
 * ```
 * @public
 */
export declare type RequestHandler<P = unknown, Q = unknown, B = unknown, Method extends RouteMethod = any, ResponseFactory extends OpenSearchDashboardsResponseFactory = OpenSearchDashboardsResponseFactory> = (context: RequestHandlerContext, request: OpenSearchDashboardsRequest<P, Q, B, Method>, response: ResponseFactory) => IOpenSearchDashboardsResponse<any> | Promise<IOpenSearchDashboardsResponse<any>>;
/**
 * Type-safe wrapper for {@link RequestHandler} function.
 * @example
 * ```typescript
 * export const wrapper: RequestHandlerWrapper = handler => {
 *   return async (context, request, response) => {
 *     // do some logic
 *     ...
 *   };
 * }
 * ```
 * @public
 */
export declare type RequestHandlerWrapper = <P, Q, B, Method extends RouteMethod = any, ResponseFactory extends OpenSearchDashboardsResponseFactory = OpenSearchDashboardsResponseFactory>(handler: RequestHandler<P, Q, B, Method, ResponseFactory>) => RequestHandler<P, Q, B, Method, ResponseFactory>;
export {};
//# sourceMappingURL=router.d.ts.map