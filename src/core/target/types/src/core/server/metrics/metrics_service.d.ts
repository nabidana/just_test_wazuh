import { CoreService } from '../../types';
import { CoreContext } from '../core_context';
import { InternalHttpServiceSetup } from '../http';
import { InternalMetricsServiceSetup, InternalMetricsServiceStart } from './types';
interface MetricsServiceSetupDeps {
    http: InternalHttpServiceSetup;
}
/** @internal */
export declare class MetricsService implements CoreService<InternalMetricsServiceSetup, InternalMetricsServiceStart> {
    private readonly coreContext;
    private readonly logger;
    private metricsCollector?;
    private collectInterval?;
    private metrics$;
    private service?;
    constructor(coreContext: CoreContext);
    setup({ http }: MetricsServiceSetupDeps): Promise<InternalMetricsServiceSetup>;
    start(): Promise<InternalMetricsServiceStart>;
    private refreshMetrics;
    stop(): Promise<void>;
}
export {};
//# sourceMappingURL=metrics_service.d.ts.map