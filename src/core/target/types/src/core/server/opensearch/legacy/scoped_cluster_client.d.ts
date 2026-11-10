import { Auditor } from '../../audit_trail';
import { Headers } from '../../http/router';
import { LegacyAPICaller, LegacyCallAPIOptions } from './api_types';
/**
 * Serves the same purpose as "normal" `ClusterClient` but exposes additional
 * `callAsCurrentUser` method that doesn't use credentials of the OpenSearch Dashboards internal
 * user (as `callAsInternalUser` does) to request OpenSearch API, but rather
 * passes HTTP headers extracted from the current user request to the API.
 *
 * See {@link LegacyScopedClusterClient}.
 *
 * @deprecated Use {@link IScopedClusterClient}.
 * @public
 */
export declare type ILegacyScopedClusterClient = Pick<LegacyScopedClusterClient, 'callAsCurrentUser' | 'callAsInternalUser'>;
/**
 * {@inheritDoc IScopedClusterClient}
 * @deprecated Use {@link IScopedClusterClient | scoped cluster client}.
 * @public
 */
export declare class LegacyScopedClusterClient implements ILegacyScopedClusterClient {
    private readonly internalAPICaller;
    private readonly scopedAPICaller;
    private readonly headers?;
    private readonly auditor?;
    constructor(internalAPICaller: LegacyAPICaller, scopedAPICaller: LegacyAPICaller, headers?: Headers | undefined, auditor?: Auditor | undefined);
    /**
     * Calls specified `endpoint` with provided `clientParams` on behalf of the
     * OpenSearch Dashboards internal user.
     * See {@link LegacyAPICaller}.
     *
     * @param endpoint - String descriptor of the endpoint e.g. `cluster.getSettings` or `ping`.
     * @param clientParams - A dictionary of parameters that will be passed directly to the OpenSearch JS client.
     * @param options - Options that affect the way we call the API and process the result.
     */
    callAsInternalUser(endpoint: string, clientParams?: Record<string, any>, options?: LegacyCallAPIOptions): Promise<any>;
    /**
     * Calls specified `endpoint` with provided `clientParams` on behalf of the
     * user initiated request to the OpenSearch Dashboards server (via HTTP request headers).
     * See {@link LegacyAPICaller}.
     *
     * @param endpoint - String descriptor of the endpoint e.g. `cluster.getSettings` or `ping`.
     * @param clientParams - A dictionary of parameters that will be passed directly to the OpenSearch JS client.
     * @param options - Options that affect the way we call the API and process the result.
     */
    callAsCurrentUser(endpoint: string, clientParams?: Record<string, any>, options?: LegacyCallAPIOptions): Promise<any>;
}
//# sourceMappingURL=scoped_cluster_client.d.ts.map