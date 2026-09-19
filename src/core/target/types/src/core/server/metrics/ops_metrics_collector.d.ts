import { Server as HapiServer } from '@hapi/hapi';
import { OpsMetricsCollectorOptions, MetricsCollector } from './collectors';
import { OpsMetrics } from './types';
export declare class OpsMetricsCollector implements MetricsCollector<OpsMetrics> {
    private readonly processCollector;
    private readonly osCollector;
    private readonly serverCollector;
    constructor(server: HapiServer, opsOptions: OpsMetricsCollectorOptions);
    collect(): Promise<OpsMetrics>;
    reset(): void;
}
//# sourceMappingURL=ops_metrics_collector.d.ts.map