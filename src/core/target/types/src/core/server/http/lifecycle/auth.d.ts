import { Lifecycle, Request, ResponseToolkit } from '@hapi/hapi';
import { Logger } from '../../logging';
import { OpenSearchDashboardsRequest, IOpenSearchDashboardsResponse, LifecycleResponseFactory, ResponseHeaders } from '../router';
/** @public */
export declare enum AuthResultType {
    authenticated = "authenticated",
    notHandled = "notHandled",
    redirected = "redirected"
}
/** @public */
export interface Authenticated extends AuthResultParams {
    type: AuthResultType.authenticated;
}
/** @public */
export interface AuthNotHandled {
    type: AuthResultType.notHandled;
}
/** @public */
export interface AuthRedirected extends AuthRedirectedParams {
    type: AuthResultType.redirected;
}
/** @public */
export declare type AuthResult = Authenticated | AuthNotHandled | AuthRedirected;
/**
 * Auth Headers map
 * @public
 */
export declare type AuthHeaders = Record<string, string | string[]>;
/**
 * Result of successful authentication.
 * @public
 */
export interface AuthResultParams {
    /**
     * Data to associate with an incoming request. Any downstream plugin may get access to the data.
     */
    state?: Record<string, any>;
    /**
     * Auth specific headers to attach to a request object.
     * Used to perform a request to  on behalf of an authenticated user.
     */
    requestHeaders?: AuthHeaders;
    /**
     * Auth specific headers to attach to a response object.
     * Used to send back authentication mechanism related headers to a client when needed.
     */
    responseHeaders?: AuthHeaders;
}
/**
 * Result of auth redirection.
 * @public
 */
export interface AuthRedirectedParams {
    /**
     * Headers to attach for auth redirect.
     * Must include "location" header
     */
    headers: {
        location: string;
    } & ResponseHeaders;
}
/**
 * @public
 * A tool set defining an outcome of Auth interceptor for incoming request.
 */
export interface AuthToolkit {
    /** Authentication is successful with given credentials, allow request to pass through */
    authenticated: (data?: AuthResultParams) => AuthResult;
    /**
     * User has no credentials.
     * Allows user to access a resource when authRequired: 'optional'
     * Rejects a request when authRequired: true
     * */
    notHandled: () => AuthResult;
    /**
     * Redirects user to another location to complete authentication when authRequired: true
     * Allows user to access a resource without redirection when authRequired: 'optional'
     * */
    redirected: (headers: {
        location: string;
    } & ResponseHeaders) => AuthResult;
}
/**
 * See {@link AuthToolkit}.
 * @public
 */
export declare type AuthenticationHandler = (request: OpenSearchDashboardsRequest, response: LifecycleResponseFactory, toolkit: AuthToolkit) => AuthResult | IOpenSearchDashboardsResponse | Promise<AuthResult | IOpenSearchDashboardsResponse>;
/** @public */
export declare function adoptToHapiAuthFormat(fn: AuthenticationHandler, log: Logger, onAuth?: (request: Request, data: AuthResultParams) => void): (request: Request, responseToolkit: ResponseToolkit) => Promise<Lifecycle.ReturnValue>;
//# sourceMappingURL=auth.d.ts.map