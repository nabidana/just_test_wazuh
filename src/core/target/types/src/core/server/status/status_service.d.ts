import { Observable } from 'rxjs';
import { CoreService } from '../../types';
import { CoreContext } from '../core_context';
import { InternalOpenSearchServiceSetup } from '../opensearch';
import { InternalHttpServiceSetup } from '../http';
import { InternalSavedObjectsServiceSetup } from '../saved_objects';
import { PluginName } from '../plugins';
import { InternalMetricsServiceSetup } from '../metrics';
import { InternalEnvironmentServiceSetup } from '../environment';
import { ServiceStatus, CoreStatus, InternalStatusServiceSetup } from './types';
interface SetupDeps {
    opensearch: Pick<InternalOpenSearchServiceSetup, 'status$'>;
    environment: InternalEnvironmentServiceSetup;
    pluginDependencies: ReadonlyMap<PluginName, PluginName[]>;
    http: InternalHttpServiceSetup;
    metrics: InternalMetricsServiceSetup;
    savedObjects: Pick<InternalSavedObjectsServiceSetup, 'status$'>;
}
export declare class StatusService implements CoreService<InternalStatusServiceSetup> {
    private readonly coreContext;
    private readonly logger;
    private readonly config$;
    private pluginsStatus?;
    private overallSubscription?;
    constructor(coreContext: CoreContext);
    setup({ opensearch, pluginDependencies, http, metrics, savedObjects, environment, }: SetupDeps): Promise<{
        core$: Observable<CoreStatus>;
        overall$: Observable<ServiceStatus<unknown>>;
        plugins: {
            set: (plugin: string, status$: Observable<ServiceStatus<unknown>>) => void;
            getDependenciesStatus$: (plugin: string) => Observable<Record<string, ServiceStatus<unknown>>>;
            getDerivedStatus$: (plugin: string) => Observable<ServiceStatus<unknown>>;
        };
        isStatusPageAnonymous: () => boolean;
    }>;
    start(): void;
    stop(): void;
    private setupCoreStatus;
}
export {};
//# sourceMappingURL=status_service.d.ts.map