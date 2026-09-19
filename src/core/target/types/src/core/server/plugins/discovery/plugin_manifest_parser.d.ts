import { PackageInfo } from '../../config';
import { Logger } from '../../logging';
import { PluginManifest } from '../types';
/**
 * Tries to load and parse the plugin manifest file located at the provided plugin
 * directory path and produces an error result if it fails to do so or plugin manifest
 * isn't valid.
 * @param pluginPath Path to the plugin directory where manifest should be loaded from.
 * @param packageInfo OpenSearch Dashboards package info.
 * @internal
 */
export declare function parseManifest(pluginPath: string, packageInfo: PackageInfo, log: Logger): Promise<PluginManifest>;
/**
 * Checks whether specified folder contains OpenSearch Dashboards new platform plugin. It's only
 * intended to be used by the legacy systems when they need to check whether specific
 * plugin path is handled by the core plugin system or not.
 * @param pluginPath Path to the plugin.
 * @internal
 */
export declare function isNewPlatformPlugin(pluginPath: string): Promise<boolean>;
//# sourceMappingURL=plugin_manifest_parser.d.ts.map