import { Observable } from 'rxjs';
import { CoreService } from '../../types';
import { CoreContext } from '../core_context';
import { DiscoveredPlugin, PluginName, InternalPluginInfo } from './types';
import { InternalCoreSetup, InternalCoreStart } from '../internal_types';
import { InternalEnvironmentServiceSetup } from '../environment';
/** @internal */
export interface PluginsServiceSetup {
    /** Indicates whether or not plugins were initialized. */
    initialized: boolean;
    /** Setup contracts returned by plugins. */
    contracts: Map<PluginName, unknown>;
}
/** @internal */
export interface UiPlugins {
    /**
     * Paths to all discovered ui plugin entrypoints on the filesystem, even if
     * disabled.
     */
    internal: Map<PluginName, InternalPluginInfo>;
    /**
     * Information needed by client-side to load plugins and wire dependencies.
     */
    public: Map<PluginName, DiscoveredPlugin>;
    /**
     * Configuration for plugins to be exposed to the client-side.
     */
    browserConfigs: Map<PluginName, Observable<unknown>>;
}
/** @internal */
export interface PluginsServiceStart {
    /** Start contracts returned by plugins. */
    contracts: Map<PluginName, unknown>;
}
/** @internal */
export declare type PluginsServiceSetupDeps = InternalCoreSetup;
/** @internal */
export declare type PluginsServiceStartDeps = InternalCoreStart;
/** @internal */
export interface PluginsServiceDiscoverDeps {
    environment: InternalEnvironmentServiceSetup;
}
/** @internal */
export declare class PluginsService implements CoreService<PluginsServiceSetup, PluginsServiceStart> {
    private readonly coreContext;
    private readonly log;
    private readonly pluginsSystem;
    private readonly configService;
    private readonly config$;
    private readonly pluginConfigDescriptors;
    private readonly uiPluginInternalInfo;
    private readonly openSearchPluginInfo;
    constructor(coreContext: CoreContext);
    discover({ environment }: PluginsServiceDiscoverDeps): Promise<{
        pluginTree: import("./types").PluginDependencies;
        uiPlugins: {
            internal: Map<string, InternalPluginInfo>;
            public: Map<string, DiscoveredPlugin>;
            browserConfigs: Map<string, Observable<unknown>>;
        };
        requiredEnginePlugins: Map<string, Record<string, string>>;
    }>;
    setup(deps: PluginsServiceSetupDeps): Promise<{
        initialized: boolean;
        contracts: Map<string, unknown>;
    }>;
    start(deps: PluginsServiceStartDeps): Promise<{
        contracts: Map<string, unknown>;
    }>;
    stop(): Promise<void>;
    private generateUiPluginsConfigs;
    private handleDiscoveryErrors;
    private handleDiscoveredPlugins;
    private shouldEnablePlugin;
    private registerPluginStaticDirs;
}
//# sourceMappingURL=plugins_service.d.ts.map