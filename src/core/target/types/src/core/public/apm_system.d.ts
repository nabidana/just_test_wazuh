import type { InternalApplicationStart } from './application';
/**
 * This is the entry point used to boot the frontend when serving a application
 * that lives in the OpenSearch Dashboards Platform.
 */
interface ApmConfig {
    active?: boolean;
    globalLabels?: Record<string, string>;
}
interface StartDeps {
    application: InternalApplicationStart;
}
export declare class ApmSystem {
    private readonly apmConfig?;
    private readonly basePath;
    private readonly enabled;
    /**
     * `apmConfig` would be populated with relevant APM RUM agent
     * configuration if server is started with elastic.apm.* config.
     */
    constructor(apmConfig?: ApmConfig | undefined, basePath?: string);
    setup(): Promise<void>;
    start(start?: StartDeps): Promise<void>;
    /**
     * Adds an observer to the APM configuration for normalizing transactions of the 'http-request' type to remove the
     * hostname, protocol, port, and base path. Allows for coorelating data cross different deployments.
     */
    private addHttpRequestNormalization;
}
export {};
//# sourceMappingURL=apm_system.d.ts.map