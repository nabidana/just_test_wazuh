import { TypeOf } from '@osd/config-schema';
import { Duration } from 'moment';
import { ServiceConfigDescriptor } from '../internal_types';
export declare const DEFAULT_API_VERSION = "7.x";
export declare type OpenSearchConfigType = TypeOf<typeof configSchema>;
declare type SslConfigSchema = OpenSearchConfigType['ssl'];
/**
 * Validation schema for opensearch service config. It can be reused when plugins allow users
 * to specify a local opensearch config.
 * @public
 */
export declare const configSchema: import("@osd/config-schema").ObjectType<{
    sniffOnStart: import("@osd/config-schema").Type<boolean>;
    sniffInterval: import("@osd/config-schema").Type<false | Duration>;
    sniffOnConnectionFault: import("@osd/config-schema").Type<boolean>;
    hosts: import("@osd/config-schema").Type<string | string[]>;
    username: import("@osd/config-schema").Type<string | undefined>;
    password: import("@osd/config-schema").Type<string | undefined>;
    requestHeadersWhitelist: import("@osd/config-schema").Type<string | string[]>;
    memoryCircuitBreaker: import("@osd/config-schema").ObjectType<{
        enabled: import("@osd/config-schema").Type<boolean>;
        maxPercentage: import("@osd/config-schema").Type<number>;
    }>;
    customHeaders: import("@osd/config-schema").Type<Record<string, string>>;
    shardTimeout: import("@osd/config-schema").Type<Duration>;
    requestTimeout: import("@osd/config-schema").Type<Duration>;
    pingTimeout: import("@osd/config-schema").Type<Duration>;
    logQueries: import("@osd/config-schema").Type<boolean>;
    optimizedHealthcheck: import("@osd/config-schema").Type<Readonly<{
        filters?: Record<string, string> | undefined;
    } & {
        id: string;
    }> | undefined>;
    ssl: import("@osd/config-schema").ObjectType<{
        verificationMode: import("@osd/config-schema").Type<"none" | "certificate" | "full">;
        certificateAuthorities: import("@osd/config-schema").Type<string | string[] | undefined>;
        certificate: import("@osd/config-schema").Type<string | undefined>;
        key: import("@osd/config-schema").Type<string | undefined>;
        keyPassphrase: import("@osd/config-schema").Type<string | undefined>;
        keystore: import("@osd/config-schema").ObjectType<{
            path: import("@osd/config-schema").Type<string | undefined>;
            password: import("@osd/config-schema").Type<string | undefined>;
        }>;
        truststore: import("@osd/config-schema").ObjectType<{
            path: import("@osd/config-schema").Type<string | undefined>;
            password: import("@osd/config-schema").Type<string | undefined>;
        }>;
        alwaysPresentCertificate: import("@osd/config-schema").Type<boolean>;
    }>;
    apiVersion: import("@osd/config-schema").Type<string>;
    healthCheck: import("@osd/config-schema").ObjectType<{
        delay: import("@osd/config-schema").Type<Duration>;
    }>;
    ignoreVersionMismatch: import("@osd/config-schema").Type<boolean>;
    disablePrototypePoisoningProtection: import("@osd/config-schema").Type<boolean | undefined>;
}>;
export declare const config: ServiceConfigDescriptor<OpenSearchConfigType>;
/**
 * Wrapper of config schema.
 * @public
 */
export declare class OpenSearchConfig {
    /**
     * The interval between health check requests OpenSearch Dashboards sends to the OpenSearch.
     */
    readonly healthCheckDelay: Duration;
    /**
     * Whether to allow opensearch-dashboards to connect to an opensearch node of a different version.
     */
    readonly ignoreVersionMismatch: boolean;
    /**
     * Version of the OpenSearch (1.1, 2.1 or `main`) client will be connecting to.
     */
    readonly apiVersion: string;
    /**
     * Specifies whether all queries to the client should be logged (status code,
     * method, query etc.).
     */
    readonly logQueries: boolean;
    /**
     * Specifies whether Dashboards should only query the local OpenSearch node when
     * all nodes in the cluster have the same node attribute value
     */
    readonly optimizedHealthcheck?: OpenSearchConfigType['optimizedHealthcheck'];
    /**
     * Hosts that the client will connect to. If sniffing is enabled, this list will
     * be used as seeds to discover the rest of your cluster.
     */
    readonly hosts: string[];
    /**
     * List of OpenSearch Dashboards client-side headers to send to OpenSearch when request
     * scoped cluster client is used. If this is an empty array then *no* client-side
     * will be sent.
     */
    readonly requestHeadersWhitelist: string[];
    /**
     * Timeout after which PING HTTP request will be aborted and retried.
     */
    readonly pingTimeout: Duration;
    /**
     * Timeout after which HTTP request will be aborted and retried.
     */
    readonly requestTimeout: Duration;
    /**
     * Timeout for OpenSearch to wait for responses from shards. Set to 0 to disable.
     */
    readonly shardTimeout: Duration;
    /**
     * Set of options to configure memory circuit breaker for query response.
     * The `maxPercentage` field is to determine the threshold for maximum heap size for memory circuit breaker. By default the value is `1.0`.
     * The `enabled` field specifies whether the client should protect large response that can't fit into memory.
     */
    readonly memoryCircuitBreaker: OpenSearchConfigType['memoryCircuitBreaker'];
    /**
     * Specifies whether the client should attempt to detect the rest of the cluster
     * when it is first instantiated.
     */
    readonly sniffOnStart: boolean;
    /**
     * Interval to perform a sniff operation and make sure the list of nodes is complete.
     * If `false` then sniffing is disabled.
     */
    readonly sniffInterval: false | Duration;
    /**
     * Specifies whether the client should immediately sniff for a more current list
     * of nodes when a connection dies.
     */
    readonly sniffOnConnectionFault: boolean;
    /**
     * If OpenSearch is protected with basic authentication, this setting provides
     * the username that the OpenSearch Dashboards server uses to perform its administrative functions.
     */
    readonly username?: string;
    /**
     * If OpenSearch is protected with basic authentication, this setting provides
     * the password that the OpenSearch Dashboards server uses to perform its administrative functions.
     */
    readonly password?: string;
    /**
     * Set of settings configure SSL connection between OpenSearch Dashboards and OpenSearch that
     * are required when `xpack.ssl.verification_mode` in OpenSearch is set to
     * either `certificate` or `full`.
     */
    readonly ssl: Pick<SslConfigSchema, Exclude<keyof SslConfigSchema, 'certificateAuthorities' | 'keystore' | 'truststore'>> & {
        certificateAuthorities?: string[];
    };
    /**
     * Header names and values to send to OpenSearch with every request. These
     * headers cannot be overwritten by client-side headers and aren't affected by
     * `requestHeadersWhitelist` configuration.
     */
    readonly customHeaders: OpenSearchConfigType['customHeaders'];
    /**
     * Specifies whether the client should attempt to protect against reserved words
     * or not.
     */
    readonly disablePrototypePoisoningProtection?: boolean;
    constructor(rawConfig: OpenSearchConfigType);
}
export {};
//# sourceMappingURL=opensearch_config.d.ts.map