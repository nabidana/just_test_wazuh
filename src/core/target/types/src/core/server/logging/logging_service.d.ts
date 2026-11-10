import { Observable } from 'rxjs';
import { CoreService } from '../../types';
import { LoggerContextConfigInput } from './logging_config';
import { ILoggingSystem } from './logging_system';
import { CoreContext } from '../core_context';
/**
 * Provides APIs to plugins for customizing the plugin's logger.
 * @public
 */
export interface LoggingServiceSetup {
    /**
     * Customizes the logging config for the plugin's context.
     *
     * @remarks
     * Assumes that that the `context` property of the individual `logger` items emitted by `config$`
     * are relative to the plugin's logging context (defaults to `plugins.<plugin_id>`).
     *
     * @example
     * Customize the configuration for the plugins.data.search context.
     * ```ts
     * core.logging.configure(
     *   of({
     *     appenders: new Map(),
     *     loggers: [{ context: 'search', appenders: ['default'] }]
     *   })
     * )
     * ```
     *
     * @param config$
     */
    configure(config$: Observable<LoggerContextConfigInput>): void;
}
/** @internal */
export interface InternalLoggingServiceSetup {
    configure(contextParts: string[], config$: Observable<LoggerContextConfigInput>): void;
}
interface SetupDeps {
    loggingSystem: ILoggingSystem;
}
/** @internal */
export declare class LoggingService implements CoreService<InternalLoggingServiceSetup> {
    private readonly subscriptions;
    private readonly log;
    constructor(coreContext: CoreContext);
    setup({ loggingSystem }: SetupDeps): {
        configure: (contextParts: string[], config$: Observable<LoggerContextConfigInput>) => void;
    };
    start(): void;
    stop(): void;
}
export {};
//# sourceMappingURL=logging_service.d.ts.map