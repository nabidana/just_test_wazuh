import { Logger } from '../../logging';
/**
 * Retries the provided OpenSearch API call when a `NoLivingConnectionsError` error is
 * encountered. The API call will be retried once a second, indefinitely, until
 * a successful response or a different error is received.
 *
 * @example
 * ```ts
 * const response = await retryCallCluster(() => client.ping());
 * ```
 *
 * @internal
 */
export declare const retryCallCluster: <T extends Promise<unknown>>(apiCaller: () => T) => T;
/**
 * Retries the provided OpenSearch API call when an error such as
 * `AuthenticationException` `NoConnections`, `ConnectionFault`,
 * `ServiceUnavailable` or `RequestTimeout` are encountered. The API call will
 * be retried once a second, indefinitely, until a successful response or a
 * different error is received.
 *
 * @example
 * ```ts
 * const response = await migrationRetryCallCluster(() => client.ping(), logger);
 * ```
 *
 * @internal
 */
export declare const migrationRetryCallCluster: <T extends Promise<unknown>>(apiCaller: () => T, log: Logger, delay?: number) => T;
//# sourceMappingURL=retry_call_cluster.d.ts.map