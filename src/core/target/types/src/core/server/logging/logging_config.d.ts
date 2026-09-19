import { TypeOf } from '@osd/config-schema';
import { AppenderConfigType } from './appenders/appenders';
/**
 * Config schema for validating the `loggers` key in {@link LoggerContextConfigType} or {@link LoggingConfigType}.
 *
 * @public
 */
export declare const loggerSchema: import("@osd/config-schema").ObjectType<{
    appenders: import("@osd/config-schema").Type<string[]>;
    context: import("@osd/config-schema").Type<string>;
    level: import("@osd/config-schema").Type<import("@osd/logging").LogLevelId>;
}>;
/** @public */
export declare type LoggerConfigType = TypeOf<typeof loggerSchema>;
export declare const config: {
    path: string;
    schema: import("@osd/config-schema").ObjectType<{
        appenders: import("@osd/config-schema").Type<Map<string, AppenderConfigType>>;
        loggers: import("@osd/config-schema").Type<Readonly<{} & {
            appenders: string[];
            context: string;
            level: import("@osd/logging").LogLevelId;
        }>[]>;
        root: import("@osd/config-schema").ObjectType<{
            appenders: import("@osd/config-schema").Type<string[]>;
            level: import("@osd/config-schema").Type<import("@osd/logging").LogLevelId>;
        }>;
    }>;
};
export declare type LoggingConfigType = Omit<TypeOf<typeof config.schema>, 'appenders'> & {
    appenders: Map<string, AppenderConfigType>;
};
/**
 * Config schema for validating the inputs to the {@link LoggingServiceStart.configure} API.
 * See {@link LoggerContextConfigType}.
 *
 * @public
 */
export declare const loggerContextConfigSchema: import("@osd/config-schema").ObjectType<{
    appenders: import("@osd/config-schema").Type<Map<string, AppenderConfigType>>;
    loggers: import("@osd/config-schema").Type<Readonly<{} & {
        appenders: string[];
        context: string;
        level: import("@osd/logging").LogLevelId;
    }>[]>;
}>;
/** @public */
export declare type LoggerContextConfigType = TypeOf<typeof loggerContextConfigSchema>;
/** @public */
export interface LoggerContextConfigInput {
    appenders?: Record<string, AppenderConfigType> | Map<string, AppenderConfigType>;
    loggers?: LoggerConfigType[];
}
/**
 * Describes the config used to fully setup logging subsystem.
 * @internal
 */
export declare class LoggingConfig {
    private readonly configType;
    /**
     * Helper method that joins separate string context parts into single context string.
     * In case joined context is an empty string, `root` context name is returned.
     * @param contextParts List of the context parts (e.g. ['parent', 'child'].
     * @returns {string} Joined context string (e.g. 'parent.child').
     */
    static getLoggerContext(contextParts: string[]): string;
    /**
     * Helper method that returns parent context for the specified one.
     * @param context Context to find parent for.
     * @returns Name of the parent context or `root` if the context is the top level one.
     */
    static getParentLoggerContext(context: string): string;
    /**
     * Map of the appender unique arbitrary key and its corresponding config.
     */
    readonly appenders: Map<string, AppenderConfigType>;
    /**
     * Map of the logger unique arbitrary key (context) and its corresponding config.
     */
    readonly loggers: Map<string, LoggerConfigType>;
    constructor(configType: LoggingConfigType);
    /**
     * Returns a new LoggingConfig that merges the existing config with the specified config.
     *
     * @remarks
     * Does not support merging the `root` config property.
     *
     * @param contextConfig
     */
    extend(contextConfig: LoggerContextConfigType): LoggingConfig;
    private fillAppendersConfig;
    private fillLoggersConfig;
}
//# sourceMappingURL=logging_config.d.ts.map