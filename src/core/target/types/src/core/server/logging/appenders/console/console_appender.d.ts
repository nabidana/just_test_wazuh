import { Layout, LogRecord, DisposableAppender } from '@osd/logging';
import { LayoutConfigType } from '../../layouts/layouts';
export interface ConsoleAppenderConfig {
    kind: 'console';
    layout: LayoutConfigType;
}
/**
 *
 * Appender that formats all the `LogRecord` instances it receives and logs them via built-in `console`.
 * @internal
 */
export declare class ConsoleAppender implements DisposableAppender {
    private readonly layout;
    static configSchema: import("@osd/config-schema").ObjectType<{
        kind: import("@osd/config-schema").Type<"console">;
        layout: import("@osd/config-schema").Type<Readonly<{} & {
            kind: "json";
        }> | Readonly<{
            pattern?: string | undefined;
            highlight?: boolean | undefined;
        } & {
            kind: "pattern";
        }>>;
    }>;
    /**
     * Creates ConsoleAppender instance.
     * @param layout Instance of `Layout` sub-class responsible for `LogRecord` formatting.
     */
    constructor(layout: Layout);
    /**
     * Formats specified `record` and logs it via built-in `console`.
     * @param record `LogRecord` instance to be logged.
     */
    append(record: LogRecord): void;
    /**
     * Disposes `ConsoleAppender`.
     */
    dispose(): void;
}
//# sourceMappingURL=console_appender.d.ts.map