import { OpsProcessMetrics, MetricsCollector } from './types';
export declare class ProcessMetricsCollector implements MetricsCollector<OpsProcessMetrics> {
    collect(): Promise<OpsProcessMetrics>;
    reset(): void;
}
//# sourceMappingURL=process.d.ts.map