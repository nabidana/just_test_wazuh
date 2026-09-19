/// <reference types="node" />
import { ConfigOptions } from 'elasticsearch';
import { checkServerIdentity } from 'tls';
import { Logger } from '../../logging';
import { OpenSearchConfig } from '../opensearch_config';
/**
 * @privateRemarks Config that consumers can pass to the OpenSearch JS client is complex and includes
 * not only entries from standard `opensearch.*` yaml config, but also some OpenSearch JS
 * client specific options like `keepAlive` or `plugins` (that eventually will be deprecated).
 *
 * @deprecated
 * @public
 */
export declare type LegacyOpenSearchClientConfig = Pick<ConfigOptions, 'keepAlive' | 'log' | 'plugins'> & Pick<OpenSearchConfig, 'apiVersion' | 'customHeaders' | 'logQueries' | 'requestHeadersWhitelist' | 'sniffOnStart' | 'sniffOnConnectionFault' | 'hosts' | 'username' | 'password'> & {
    pingTimeout?: OpenSearchConfig['pingTimeout'] | ConfigOptions['pingTimeout'];
    requestTimeout?: OpenSearchConfig['requestTimeout'] | ConfigOptions['requestTimeout'];
    sniffInterval?: OpenSearchConfig['sniffInterval'] | ConfigOptions['sniffInterval'];
    ssl?: Partial<OpenSearchConfig['ssl']>;
};
/** @internal */
interface LegacyOpenSearchClientConfigOverrides {
    /**
     * If set to `true`, username and password from the config won't be used
     * to access OpenSearch API even if these are specified.
     */
    auth?: boolean;
    /**
     * If set to `true`, `ssl.key` and `ssl.certificate` provided through config won't
     * be used to connect to OpenSearch.
     */
    ignoreCertAndKey?: boolean;
}
/** @internal */
declare type ExtendedConfigOptions = ConfigOptions & Partial<{
    ssl: Partial<{
        rejectUnauthorized: boolean;
        checkServerIdentity: typeof checkServerIdentity;
        ca: string[];
        cert: string;
        key: string;
        passphrase: string;
    }>;
}>;
/** @internal */
export declare function parseOpenSearchClientConfig(config: LegacyOpenSearchClientConfig, log: Logger, { ignoreCertAndKey, auth }?: LegacyOpenSearchClientConfigOverrides): ExtendedConfigOptions;
export {};
//# sourceMappingURL=opensearch_client_config.d.ts.map