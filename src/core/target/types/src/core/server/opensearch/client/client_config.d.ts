import { ClientOptions } from '@opensearch-project/opensearch';
import { OpenSearchConfig } from '../opensearch_config';
/**
 * Configuration options to be used to create a {@link IClusterClient | cluster client} using the
 * {@link OpenSearchServiceStart.createClient | createClient API}
 *
 * @public
 */
export declare type OpenSearchClientConfig = Pick<OpenSearchConfig, 'customHeaders' | 'logQueries' | 'sniffOnStart' | 'sniffOnConnectionFault' | 'requestHeadersWhitelist' | 'sniffInterval' | 'hosts' | 'username' | 'password' | 'disablePrototypePoisoningProtection'> & {
    memoryCircuitBreaker?: OpenSearchConfig['memoryCircuitBreaker'] | ClientOptions['memoryCircuitBreaker'];
    pingTimeout?: OpenSearchConfig['pingTimeout'] | ClientOptions['pingTimeout'];
    requestTimeout?: OpenSearchConfig['requestTimeout'] | ClientOptions['requestTimeout'];
    ssl?: Partial<OpenSearchConfig['ssl']>;
    keepAlive?: boolean;
};
/**
 * Parse the client options from given client config and `scoped` flag.
 *
 * @param config The config to generate the client options from.
 * @param scoped if true, will adapt the configuration to be used by a scoped client
 *        (will remove basic auth and ssl certificates)
 */
export declare function parseClientOptions(config: OpenSearchClientConfig, scoped: boolean): ClientOptions;
//# sourceMappingURL=client_config.d.ts.map