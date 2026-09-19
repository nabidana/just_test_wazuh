import { Env, RawConfigurationProvider } from '../config';
import { LoggerFactory } from '../logging';
/**
 * Top-level entry point to kick off the app and start the OpenSearch Dashboards server.
 */
export declare class Root {
    private readonly onShutdown?;
    readonly logger: LoggerFactory;
    private readonly log;
    private readonly loggingSystem;
    private readonly server;
    private loggingConfigSubscription?;
    constructor(rawConfigProvider: RawConfigurationProvider, env: Env, onShutdown?: ((reason?: string | Error | undefined) => void) | undefined);
    setup(): Promise<import("../internal_types").InternalCoreSetup>;
    start(): Promise<import("../internal_types").InternalCoreStart>;
    shutdown(reason?: any): Promise<void>;
    private setupLogging;
}
//# sourceMappingURL=index.d.ts.map