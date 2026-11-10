import { CoreService } from 'src/core/types';
import { SavedObjectsServiceStart } from 'src/core/server';
import { CoreContext } from '../core_context';
import { CoreUsageData, CoreUsageDataStart } from './types';
import { OpenSearchServiceStart } from '../opensearch';
import { MetricsServiceSetup } from '..';
export interface SetupDeps {
    metrics: MetricsServiceSetup;
}
export interface StartDeps {
    savedObjects: SavedObjectsServiceStart;
    opensearch: OpenSearchServiceStart;
}
export declare class CoreUsageDataService implements CoreService<void, CoreUsageDataStart> {
    private opensearchConfig?;
    private configService;
    private httpConfig?;
    private loggingConfig?;
    private soConfig?;
    private stop$;
    private opsMetrics?;
    private opensearchDashboardsConfig?;
    constructor(core: CoreContext);
    private getSavedObjectIndicesUsageData;
    private getCoreUsageData;
    setup({ metrics }: SetupDeps): void;
    start({ savedObjects, opensearch }: StartDeps): {
        getCoreUsageData: () => Promise<CoreUsageData>;
    };
    stop(): void;
}
//# sourceMappingURL=core_usage_data_service.d.ts.map