import { Observable } from 'rxjs';
import { PluginName } from '../plugins';
import { ServiceStatus, CoreStatus } from './types';
interface Deps {
    core$: Observable<CoreStatus>;
    pluginDependencies: ReadonlyMap<PluginName, PluginName[]>;
}
export declare class PluginsStatusService {
    private readonly deps;
    private readonly pluginStatuses;
    private readonly update$;
    private readonly defaultInheritedStatus$;
    constructor(deps: Deps);
    set(plugin: PluginName, status$: Observable<ServiceStatus>): void;
    getAll$(): Observable<Record<PluginName, ServiceStatus>>;
    getDependenciesStatus$(plugin: PluginName): Observable<Record<PluginName, ServiceStatus>>;
    getDerivedStatus$(plugin: PluginName): Observable<ServiceStatus>;
    private getPluginStatuses$;
    /**
     * Determines whether or not this plugin or any plugin in it's dependency tree have a custom status registered.
     */
    private anyCustomStatuses;
}
export {};
//# sourceMappingURL=plugins_status.d.ts.map