import { CrossCompatibilityResult } from '../../types/cross_compatibility';
/**
 * API to check if the OpenSearch Dashboards plugin version is compatible with the installed OpenSearch plugin.
 *
 * @public
 */
export interface CrossCompatibilityServiceStart {
    /**
     * Checks if the OpenSearch Dashboards plugin version is compatible with the installed OpenSearch plugin.
     *
     * @returns {Promise<CrossCompatibilityResult[]>}
     */
    verifyOpenSearchPluginsState: (pluginName: string) => Promise<CrossCompatibilityResult[]>;
}
export { CrossCompatibilityResult };
//# sourceMappingURL=types.d.ts.map