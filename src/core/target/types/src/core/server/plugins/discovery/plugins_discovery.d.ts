import { Observable } from 'rxjs';
import { CoreContext } from '../../core_context';
import { PluginWrapper } from '../plugin';
import { InstanceInfo } from '../plugin_context';
import { PluginsConfig } from '../plugins_config';
import { PluginDiscoveryError } from './plugin_discovery_error';
/**
 * Tries to discover all possible plugins based on the provided plugin config.
 * Discovery result consists of two separate streams, the one (`plugin$`) is
 * for the successfully discovered plugins and the other one (`error$`) is for
 * all the errors that occurred during discovery process.
 *
 * @param config Plugin config instance.
 * @param coreContext OpenSearch Dashboards core values.
 * @internal
 */
export declare function discover(config: PluginsConfig, coreContext: CoreContext, instanceInfo: InstanceInfo): {
    plugin$: Observable<PluginWrapper<unknown, unknown, object, object>>;
    error$: Observable<PluginDiscoveryError>;
};
//# sourceMappingURL=plugins_discovery.d.ts.map