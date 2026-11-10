/// <reference types="node" />
import { URL } from 'url';
import { Request, RouteOptionsApp, RequestApplicationState } from '@hapi/hapi';
import { Observable } from 'rxjs';
import { RecursiveReadonly } from '@osd/utility-types';
import { Headers } from './headers';
import { RouteMethod, RouteConfigOptions } from './route';
import { IOpenSearchDashboardsSocket } from './socket';
import { RouteValidator, RouteValidatorFullConfig } from './validator';
declare const requestSymbol: unique symbol;
/**
 * @internal
 */
export interface OpenSearchDashboardsRouteOptions extends RouteOptionsApp {
    xsrfRequired: boolean;
}
/**
 * @internal
 */
export interface OpenSearchDashboardsRequestState extends RequestApplicationState {
    requestId: string;
    requestUuid: string;
}
/**
 * Route options: If 'GET' or 'OPTIONS' method, body options won't be returned.
 * @public
 */
export declare type OpenSearchDashboardsRequestRouteOptions<Method extends RouteMethod> = Method extends 'get' | 'options' ? Required<Omit<RouteConfigOptions<Method>, 'body'>> : Required<RouteConfigOptions<Method>>;
/**
 * Request specific route information exposed to a handler.
 * @public
 * */
export interface OpenSearchDashboardsRequestRoute<Method extends RouteMethod> {
    path: string;
    method: Method;
    options: OpenSearchDashboardsRequestRouteOptions<Method>;
}
/**
 * Request events.
 * @public
 * */
export interface OpenSearchDashboardsRequestEvents {
    /**
     * Observable that emits once if and when the request has been aborted.
     */
    aborted$: Observable<void>;
    /**
     * Observable that emits once if and when the request has been completely handled.
     *
     * @remarks
     * The request may be considered completed if:
     * - A response has been sent to the client; or
     * - The request was aborted.
     */
    completed$: Observable<void>;
}
/**
 * @deprecated
 * `hapi` request object, supported during migration process only for backward compatibility.
 * @public
 */
export interface LegacyRequest extends Request {
}
/**
 * OpenSearch Dashboards specific abstraction for an incoming request.
 * @public
 */
export declare class OpenSearchDashboardsRequest<Params = unknown, Query = unknown, Body = unknown, Method extends RouteMethod = any> {
    readonly params: Params;
    readonly query: Query;
    readonly body: Body;
    private readonly withoutSecretHeaders;
    /**
     * Factory for creating requests. Validates the request before creating an
     * instance of a OpenSearchDashboardsRequest.
     * @internal
     */
    static from<P, Q, B>(req: Request, routeSchemas?: RouteValidator<P, Q, B> | RouteValidatorFullConfig<P, Q, B>, withoutSecretHeaders?: boolean): OpenSearchDashboardsRequest<P, Q, B, any>;
    /**
     * Validates the different parts of a request based on the schemas defined for
     * the route. Builds up the actual params, query and body object that will be
     * received in the route handler.
     * @internal
     */
    private static validate;
    /**
     * A identifier to identify this request.
     *
     * @remarks
     * Depending on the user's configuration, this value may be sourced from the
     * incoming request's `X-Opaque-Id` header which is not guaranteed to be unique
     * per request.
     */
    readonly id: string;
    /**
     * A UUID to identify this request.
     *
     * @remarks
     * This value is NOT sourced from the incoming request's `X-Opaque-Id` header. it
     * is always a UUID uniquely identifying the request.
     */
    readonly uuid: string;
    /** a WHATWG URL standard object. */
    readonly url: URL;
    /** matched route details */
    readonly route: RecursiveReadonly<OpenSearchDashboardsRequestRoute<Method>>;
    /**
     * Readonly copy of incoming request headers.
     * @remarks
     * This property will contain a `filtered` copy of request headers.
     */
    readonly headers: Headers;
    /**
     * Whether or not the request is a "system request" rather than an application-level request.
     * Can be set on the client using the `HttpFetchOptions#asSystemRequest` option.
     */
    readonly isSystemRequest: boolean;
    /** {@link IOpenSearchDashboardsSocket} */
    readonly socket: IOpenSearchDashboardsSocket;
    /** Request events {@link OpenSearchDashboardsRequestEvents} */
    readonly events: OpenSearchDashboardsRequestEvents;
    readonly auth: {
        isAuthenticated: boolean;
    };
    /** @internal */
    protected readonly [requestSymbol]: Request;
    constructor(request: Request, params: Params, query: Query, body: Body, withoutSecretHeaders: boolean);
    private getEvents;
    private getRouteInfo;
    private getAuthRequired;
}
/**
 * Returns underlying Hapi Request
 * @internal
 */
export declare const ensureRawRequest: (request: OpenSearchDashboardsRequest | LegacyRequest) => Request;
/**
 * Checks if an incoming request is a {@link OpenSearchDashboardsRequest}
 * @internal
 */
export declare function isOpenSearchDashboardsRequest(request: unknown): request is OpenSearchDashboardsRequest;
/**
 * Checks if an incoming request either OpenSearchDashboardsRequest or Legacy.Request
 * @internal
 */
export declare function isRealRequest(request: unknown): request is OpenSearchDashboardsRequest | LegacyRequest;
export {};
//# sourceMappingURL=request.d.ts.map