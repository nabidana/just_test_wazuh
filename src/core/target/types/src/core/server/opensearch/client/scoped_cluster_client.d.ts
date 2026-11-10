import { OpenSearchClient, OpenSearchClientNext } from './types';
/**
 * Serves the same purpose as the normal {@link IClusterClient | cluster client} but exposes
 * an additional `asCurrentUser` method that doesn't use credentials of the OpenSearch Dashboards internal
 * user (as `asInternalUser` does) to request OpenSearch API, but rather passes HTTP headers
 * extracted from the current user request to the API instead.
 *
 * @public
 **/
export interface IScopedClusterClient {
    /**
     * A {@link OpenSearchClient | client} to be used to query the opensearch cluster
     * on behalf of the internal OpenSearch Dashboards user.
     */
    readonly asInternalUser: OpenSearchClient;
    /**
     * A {@link OpenSearchClient | client} to be used to query the opensearch cluster
     * on behalf of the user that initiated the request to the OpenSearch Dashboards server.
     */
    readonly asCurrentUser: OpenSearchClient;
    /**
     * A {@link OpenSearchClient | client}, with support for long numerals, to be used to
     * query the opensearch cluster on behalf of the internal OpenSearch Dashboards user.
     */
    readonly asInternalUserWithLongNumeralsSupport: OpenSearchClientNext;
    /**
     * A {@link OpenSearchClient | client}, with support for long numerals, to be used to
     * query the opensearch cluster on behalf of the user that initiated the request to
     * the OpenSearch Dashboards server.
     */
    readonly asCurrentUserWithLongNumeralsSupport: OpenSearchClientNext;
}
/** @internal **/
export declare class ScopedClusterClient implements IScopedClusterClient {
    readonly asInternalUser: OpenSearchClient;
    readonly asCurrentUser: OpenSearchClient;
    readonly asInternalUserWithLongNumeralsSupport: OpenSearchClientNext;
    readonly asCurrentUserWithLongNumeralsSupport: OpenSearchClientNext;
    constructor(asInternalUser: OpenSearchClient, asCurrentUser: OpenSearchClient, asInternalUserWithLongNumeralsSupport: OpenSearchClientNext, asCurrentUserWithLongNumeralsSupport: OpenSearchClientNext);
}
//# sourceMappingURL=scoped_cluster_client.d.ts.map