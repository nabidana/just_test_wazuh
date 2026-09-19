import { Client } from '@opensearch-project/opensearch';
import { Client as ClientNext } from '@opensearch-project/opensearch-next';
import { Logger } from '../../logging';
import { GetAuthHeaders } from '../../http';
import { ScopeableRequest } from '../types';
import { OpenSearchClient } from './types';
import { OpenSearchClientConfig } from './client_config';
import { ScopedClusterClient, IScopedClusterClient } from './scoped_cluster_client';
/**
 * Represents an OpenSearch cluster API client created by the platform.
 * It allows to call API on behalf of the internal OpenSearch Dashboards user and
 * the actual user that is derived from the request headers (via `asScoped(...)`).
 *
 * @public
 **/
export interface IClusterClient {
    /**
     * A {@link OpenSearchClient | client} to be used to query the OpenSearch cluster on behalf of the OpenSearch Dashboards internal user
     */
    readonly asInternalUser: OpenSearchClient;
    /**
     * Creates a {@link IScopedClusterClient | scoped cluster client} bound to given {@link ScopeableRequest | request}
     */
    asScoped: (request: ScopeableRequest) => IScopedClusterClient;
}
/**
 * See {@link IClusterClient}
 *
 * @public
 */
export interface ICustomClusterClient extends IClusterClient {
    /**
     * Closes the cluster client. After that client cannot be used and one should
     * create a new client instance to be able to interact with OpenSearch API.
     */
    close: () => Promise<void>;
}
/** @internal **/
export declare class ClusterClient implements ICustomClusterClient {
    private readonly config;
    private readonly getAuthHeaders;
    readonly asInternalUser: Client;
    private readonly rootScopedClient;
    readonly asInternalUserWithLongNumeralsSupport: ClientNext;
    private readonly rootScopedClientWithLongNumeralsSupport;
    private isClosed;
    constructor(config: OpenSearchClientConfig, logger: Logger, getAuthHeaders?: GetAuthHeaders);
    asScoped(request: ScopeableRequest): ScopedClusterClient;
    close(): Promise<void>;
    private getScopedHeaders;
}
//# sourceMappingURL=cluster_client.d.ts.map