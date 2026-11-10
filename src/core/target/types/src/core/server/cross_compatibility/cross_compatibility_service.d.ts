import { CatPluginsResponse } from '@opensearch-project/opensearch/api/types';
import { CrossCompatibilityResult, CrossCompatibilityServiceStart } from './types';
import { CoreContext } from '../core_context';
import { OpenSearchServiceStart } from '../opensearch';
import { CompatibleEnginePluginVersions, PluginName } from '../plugins/types';
export interface StartDeps {
    opensearch: OpenSearchServiceStart;
    plugins: Map<PluginName, CompatibleEnginePluginVersions>;
}
export declare class CrossCompatibilityService {
    private readonly log;
    constructor(coreContext: CoreContext);
    start({ opensearch, plugins }: StartDeps): CrossCompatibilityServiceStart;
    getOpenSearchPlugins(opensearch: OpenSearchServiceStart): Promise<CatPluginsResponse>;
    checkPluginVersionCompatibility(pluginOpenSearchDeps: CompatibleEnginePluginVersions, opensearchInstalledPlugins: CatPluginsResponse, dashboardsPluginName: string): CrossCompatibilityResult[];
    private verifyOpenSearchPluginsState;
    private isVersionCompatibleOSPluginInstalled;
}
//# sourceMappingURL=cross_compatibility_service.d.ts.map