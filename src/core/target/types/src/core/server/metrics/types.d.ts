import { Observable } from 'rxjs';
import { OpsProcessMetrics, OpsOsMetrics, OpsServerMetrics } from './collectors';
/**
 * APIs to retrieves metrics gathered and exposed by the core platform.
 *
 * @public
 */
export interface MetricsServiceSetup {
    /** Interval metrics are collected in milliseconds */
    readonly collectionInterval: number;
    /**
     * Retrieve an observable emitting the {@link OpsMetrics} gathered.
     * The observable will emit an initial value during core's `start` phase, and a new value every fixed interval of time,
     * based on the `opts.interval` configuration property.
     *
     * @example
     * ```ts
     * core.metrics.getOpsMetrics$().subscribe(metrics => {
     *   // do something with the metrics
     * })
     * ```
     */
    getOpsMetrics$: () => Observable<OpsMetrics>;
}
/**
 * {@inheritdoc MetricsServiceSetup}
 *
 * @public
 */
export declare type MetricsServiceStart = MetricsServiceSetup;
export declare type InternalMetricsServiceSetup = MetricsServiceSetup;
export declare type InternalMetricsServiceStart = MetricsServiceStart;
/**
 * Regroups metrics gathered by all the collectors.
 * This contains metrics about the os/runtime, the OpenSearch Dashboards process and the http server.
 *
 * @public
 */
export interface OpsMetrics {
    /** Time metrics were recorded at. */
    collected_at: Date;
    /** Process related metrics */
    process: OpsProcessMetrics;
    /** OS related metrics */
    os: OpsOsMetrics;
    /** server response time stats */
    response_times: OpsServerMetrics['response_times'];
    /** server requests stats */
    requests: OpsServerMetrics['requests'];
    /** number of current concurrent connections to the server */
    concurrent_connections: OpsServerMetrics['concurrent_connections'];
}
//# sourceMappingURL=types.d.ts.map