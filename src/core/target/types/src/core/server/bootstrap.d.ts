import { CliArgs } from './config';
interface OpenSearchDashboardsFeatures {
    isClusterModeSupported: boolean;
    isReplModeSupported: boolean;
}
interface BootstrapArgs {
    configs: string[];
    cliArgs: CliArgs;
    applyConfigOverrides: (config: Record<string, any>) => Record<string, any>;
    features: OpenSearchDashboardsFeatures;
}
/**
 *
 * @internal
 * @param param0 - options
 */
export declare function bootstrap({ configs, cliArgs, applyConfigOverrides, features, }: BootstrapArgs): Promise<void>;
export {};
//# sourceMappingURL=bootstrap.d.ts.map