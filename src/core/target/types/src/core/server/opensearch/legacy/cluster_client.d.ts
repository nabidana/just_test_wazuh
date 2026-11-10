import { GetAuthHeaders } from '../../http';
import { AuditorFactory } from '../../audit_trail';
import { Logger } from '../../logging';
import { ScopeableRequest } from '../types';
import { LegacyOpenSearchClientConfig } from './opensearch_client_config';
import { ILegacyScopedClusterClient } from './scoped_cluster_client';
import { LegacyAPICaller } from './api_types';
/**
 * Represents an OpenSearch cluster API client created by the platform.
 * It allows to call API on behalf of the internal OpenSearch Dashboards user and
 * the actual user that is derived from the request headers (via `asScoped(...)`).
 *
 * See {@link LegacyClusterClient}.
 *
 * @deprecated Use {@link IClusterClient}.
 * @public
 */
export declare type ILegacyClusterClient = Pick<LegacyClusterClient, 'callAsInternalUser' | 'asScoped'>;
/**
 * Represents an OpenSearch cluster API client created by a plugin.
 * It allows to call API on behalf of the internal OpenSearch Dashboards user and
 * the actual user that is derived from the request headers (via `asScoped(...)`).
 *
 * See {@link LegacyClusterClient}.
 * @deprecated Use {@link ICustomClusterClient}.
 * @public
 */
export declare type ILegacyCustomClusterClient = Pick<LegacyClusterClient, 'callAsInternalUser' | 'close' | 'asScoped'>;
/**
 * {@inheritDoc IClusterClient}
 * @deprecated Use {@link IClusterClient}.
 * @public
 */
export declare class LegacyClusterClient implements ILegacyClusterClient {
    private readonly config;
    private readonly log;
    private readonly getAuditorFactory;
    private readonly getAuthHeaders;
    /**
     * Raw OpenSearch JS client that acts on behalf of the OpenSearch Dashboards internal user.
     */
    private readonly client;
    /**
     * Optional raw OpenSearch JS client that is shared between all the scoped clients created
     * from this cluster client. Every API call is attributed by the wh
     */
    private scopedClient?;
    /**
     * Indicates whether this cluster client (and all internal raw OpenSearch JS clients) has been closed.
     */
    private isClosed;
    constructor(config: LegacyOpenSearchClientConfig, log: Logger, getAuditorFactory: () => AuditorFactory, getAuthHeaders?: GetAuthHeaders);
    /**
     * Calls specified endpoint with provided clientParams on behalf of the
     * OpenSearch Dashboards internal user.
     * See {@link LegacyAPICaller}.
     *
     * @param endpoint - String descriptor of the endpoint e.g. `cluster.getSettings` or `ping`.
     * @param clientParams - A dictionary of parameters that will be passed directly to the OpenSearch JS client.
     * @param options - Options that affect the way we call the API and process the result.
     */
    callAsInternalUser: LegacyAPICaller;
    /**
     * Closes the cluster client. After that client cannot be used and one should
     * create a new client instance to be able to interact with OpenSearch API.
     */
    close(): void;
    /**
     * Creates an instance of {@link ILegacyScopedClusterClient} based on the configuration the
     * current cluster client that exposes additional `callAsCurrentUser` method
     * scoped to the provided req. Consumers shouldn't worry about closing
     * scoped client instances, these will be automatically closed as soon as the
     * original cluster client isn't needed anymore and closed.
     *
     * @param request - Request the `IScopedClusterClient` instance will be scoped to.
     * Supports request optionality, Legacy.Request & FakeRequest for BWC with LegacyPlatform
     */
    asScoped(request?: ScopeableRequest): ILegacyScopedClusterClient;
    private getScopedAuditor;
    /**
     * Calls specified endpoint with provided clientParams on behalf of the
     * user initiated request to the OpenSearch Dashboards server (via HTTP request headers).
     * See {@link LegacyAPICaller}.
     *
     * @param endpoint - String descriptor of the endpoint e.g. `cluster.getSettings` or `ping`.
     * @param clientParams - A dictionary of parameters that will be passed directly to the OpenSearch JS client.
     * @param options - Options that affect the way we call the API and process the result.
     */
    private callAsCurrentUser;
    private assertIsNotClosed;
    private getHeaders;
}
//# sourceMappingURL=cluster_client.d.ts.map