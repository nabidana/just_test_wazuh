import { OpenSearchDashboardsRequest } from './router';
/**
 * Provides an interface to store and retrieve data across requests.
 * @public
 */
export interface SessionStorage<T> {
    /**
     * Retrieves session value from the session storage.
     */
    get(): Promise<T | null>;
    /**
     * Puts current session value into the session storage.
     * @param sessionValue - value to put
     */
    set(sessionValue: T): void;
    /**
     * Clears current session.
     */
    clear(): void;
}
/**
 * SessionStorage factory to bind one to an incoming request
 * @public */
export interface SessionStorageFactory<T> {
    asScoped: (request: OpenSearchDashboardsRequest) => SessionStorage<T>;
}
//# sourceMappingURL=session_storage.d.ts.map