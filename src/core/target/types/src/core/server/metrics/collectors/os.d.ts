import { Logger } from '@osd/logging';
import { OpsOsMetrics, MetricsCollector } from './types';
export interface OpsMetricsCollectorOptions {
    logger: Logger;
    cpuPath?: string;
    cpuAcctPath?: string;
}
export declare class OsMetricsCollector implements MetricsCollector<OpsOsMetrics> {
    private readonly cgroupCollector;
    constructor(options: OpsMetricsCollectorOptions);
    collect(): Promise<OpsOsMetrics>;
    reset(): void;
    private getDistroStats;
}
//# sourceMappingURL=os.d.ts.map