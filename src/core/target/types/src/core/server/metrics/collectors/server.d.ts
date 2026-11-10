import { Server as HapiServer } from '@hapi/hapi';
import { OpsServerMetrics, MetricsCollector } from './types';
export declare class ServerMetricsCollector implements MetricsCollector<OpsServerMetrics> {
    private readonly server;
    private requests;
    private responseTimes;
    constructor(server: HapiServer);
    collect(): Promise<OpsServerMetrics>;
    reset(): void;
}
//# sourceMappingURL=server.d.ts.map