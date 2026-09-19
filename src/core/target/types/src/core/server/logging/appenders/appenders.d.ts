import { DisposableAppender } from '@osd/logging';
import { LegacyAppenderConfig } from '../../legacy/logging/appenders/legacy_appender';
import { ConsoleAppenderConfig } from './console/console_appender';
import { FileAppenderConfig } from './file/file_appender';
/**
 * Config schema for validting the shape of the `appenders` key in in {@link LoggerContextConfigType} or
 * {@link LoggingConfigType}.
 *
 * @public
 */
export declare const appendersSchema: import("@osd/config-schema").Type<Readonly<{} & {
    layout: Readonly<{} & {
        kind: "json";
    }> | Readonly<{
        pattern?: string | undefined;
        highlight?: boolean | undefined;
    } & {
        kind: "pattern";
    }>;
    kind: "console";
}> | Readonly<{} & {
    layout: Readonly<{} & {
        kind: "json";
    }> | Readonly<{
        pattern?: string | undefined;
        highlight?: boolean | undefined;
    } & {
        kind: "pattern";
    }>;
    path: string;
    kind: "file";
}> | Readonly<{
    legacyLoggingConfig?: any;
} & {
    kind: "legacy-appender";
}>>;
/** @public */
export declare type AppenderConfigType = ConsoleAppenderConfig | FileAppenderConfig | LegacyAppenderConfig;
/** @internal */
export declare class Appenders {
    static configSchema: import("@osd/config-schema").Type<Readonly<{} & {
        layout: Readonly<{} & {
            kind: "json";
        }> | Readonly<{
            pattern?: string | undefined;
            highlight?: boolean | undefined;
        } & {
            kind: "pattern";
        }>;
        kind: "console";
    }> | Readonly<{} & {
        layout: Readonly<{} & {
            kind: "json";
        }> | Readonly<{
            pattern?: string | undefined;
            highlight?: boolean | undefined;
        } & {
            kind: "pattern";
        }>;
        path: string;
        kind: "file";
    }> | Readonly<{
        legacyLoggingConfig?: any;
    } & {
        kind: "legacy-appender";
    }>>;
    /**
     * Factory method that creates specific `Appender` instances based on the passed `config` parameter.
     * @param config Configuration specific to a particular `Appender` implementation.
     * @returns Fully constructed `Appender` instance.
     */
    static create(config: AppenderConfigType): DisposableAppender;
}
//# sourceMappingURL=appenders.d.ts.map