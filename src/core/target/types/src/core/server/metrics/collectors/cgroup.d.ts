import { Logger } from '@osd/logging';
import { MetricsCollector, OpsOsMetrics } from './types';
declare type OsCgroupMetrics = Pick<OpsOsMetrics, 'cpu' | 'cpuacct'>;
interface OsCgroupMetricsCollectorOptions {
    logger: Logger;
    cpuPath?: string;
    cpuAcctPath?: string;
}
export declare class OsCgroupMetricsCollector implements MetricsCollector<OsCgroupMetrics> {
    private readonly options;
    /**  Used to prevent unnecessary file reads on systems not using cgroups. */
    private noCgroupPresent;
    private cpuPath?;
    private cpuAcctPath?;
    constructor(options: OsCgroupMetricsCollectorOptions);
    collect(): Promise<OsCgroupMetrics>;
    reset(): void;
    private initializePaths;
}
export {};
//# sourceMappingURL=cgroup.d.ts.map