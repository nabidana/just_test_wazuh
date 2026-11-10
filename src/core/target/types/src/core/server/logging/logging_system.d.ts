import type { PublicMethodsOf } from '@osd/utility-types';
import { Logger, LoggerFactory } from '@osd/logging';
import { LoggingConfigType, LoggerContextConfigInput } from './logging_config';
export declare type ILoggingSystem = PublicMethodsOf<LoggingSystem>;
/**
 * System that is responsible for maintaining loggers and logger appenders.
 * @internal
 */
export declare class LoggingSystem implements LoggerFactory {
    /** The configuration set by the user. */
    private baseConfig?;
    /** The fully computed configuration extended by context-specific configurations set programmatically */
    private computedConfig?;
    private readonly appenders;
    private readonly bufferAppender;
    private readonly loggers;
    private readonly contextConfigs;
    get(...contextParts: string[]): Logger;
    /**
     * Safe wrapper that allows passing logging service as immutable LoggerFactory.
     */
    asLoggerFactory(): LoggerFactory;
    /**
     * Updates all current active loggers with the new config values.
     * @param rawConfig New config instance.
     */
    upgrade(rawConfig: LoggingConfigType): void;
    /**
     * Customizes the logging config for a specific context.
     *
     * @remarks
     * Assumes that that the `context` property of the individual items in `rawConfig.loggers`
     * are relative to the `baseContextParts`.
     *
     * @example
     * Customize the configuration for the plugins.data.search context.
     * ```ts
     * loggingSystem.setContextConfig(
     *   ['plugins', 'data'],
     *   {
     *     loggers: [{ context: 'search', appenders: ['default'] }]
     *   }
     * )
     * ```
     *
     * @param baseContextParts
     * @param rawConfig
     */
    setContextConfig(baseContextParts: string[], rawConfig: LoggerContextConfigInput): void;
    /**
     * Disposes all loggers (closes log files, clears buffers etc.). Service is not usable after
     * calling of this method until new config is provided via `upgrade` method.
     * @returns Promise that is resolved once all loggers are successfully disposed.
     */
    stop(): Promise<void>;
    private createLogger;
    private getLoggerConfigByContext;
    private applyBaseConfig;
}
//# sourceMappingURL=logging_system.d.ts.map