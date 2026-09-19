import { OpenSearchDashboardsRequest, LegacyRequest } from './router';
/**
 * Status indicating an outcome of the authentication.
 * @public
 */
export declare enum AuthStatus {
    /**
     * `auth` interceptor successfully authenticated a user
     */
    authenticated = "authenticated",
    /**
     * `auth` interceptor failed user authentication
     */
    unauthenticated = "unauthenticated",
    /**
     * `auth` interceptor has not been registered
     */
    unknown = "unknown"
}
/**
 * Gets authentication state for a request. Returned by `auth` interceptor.
 * @param request {@link OpenSearchDashboardsRequest} - an incoming request.
 * @public
 */
export declare type GetAuthState = <T = unknown>(request: OpenSearchDashboardsRequest | LegacyRequest) => {
    status: AuthStatus;
    state: T;
};
/**
 * Returns authentication status for a request.
 * @param request {@link OpenSearchDashboardsRequest} - an incoming request.
 * @public
 */
export declare type IsAuthenticated = (request: OpenSearchDashboardsRequest | LegacyRequest) => boolean;
/** @internal */
export declare class AuthStateStorage {
    private readonly canBeAuthenticated;
    private readonly storage;
    constructor(canBeAuthenticated: () => boolean);
    set: (request: OpenSearchDashboardsRequest | LegacyRequest, state: unknown) => void;
    get: <T = unknown>(request: OpenSearchDashboardsRequest | LegacyRequest) => {
        status: AuthStatus;
        state: T;
    };
    isAuthenticated: IsAuthenticated;
}
//# sourceMappingURL=auth_state_storage.d.ts.map