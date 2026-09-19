import { OpenSearchDashboardsRequest, LegacyRequest } from './router';
/**
 * Access or manipulate the OpenSearch Dashboards base path
 *
 * @public
 */
export declare class BasePath {
    private readonly basePathCache;
    /**
     * returns the server's basePath
     *
     * See {@link BasePath.get} for getting the basePath value for a specific request
     */
    readonly serverBasePath: string;
    /** @internal */
    constructor(serverBasePath?: string);
    /**
     * returns `basePath` value, specific for an incoming request.
     */
    get: (request: OpenSearchDashboardsRequest | LegacyRequest) => string;
    /**
     * sets `basePath` value, specific for an incoming request.
     *
     * @privateRemarks should work only for OpenSearchDashboardsRequest as soon as spaces migrate to NP
     */
    set: (request: OpenSearchDashboardsRequest | LegacyRequest, requestSpecificBasePath: string) => void;
    /**
     * Prepends `path` with the basePath.
     */
    prepend: (path: string) => string;
    /**
     * Removes the prepended basePath from the `path`.
     */
    remove: (path: string) => string;
}
/**
 * Access or manipulate the OpenSearch Dashboards base path
 *
 * {@link BasePath}
 * @public
 */
export declare type IBasePath = Pick<BasePath, keyof BasePath>;
//# sourceMappingURL=base_path_service.d.ts.map