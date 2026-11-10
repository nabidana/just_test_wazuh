import { DisposableAppender, LogRecord } from '../../../logging';
import { LegacyVars } from '../../types';
export interface LegacyAppenderConfig {
    kind: 'legacy-appender';
    legacyLoggingConfig?: any;
}
/**
 * Simple appender that just forwards `LogRecord` to the legacy OsdServer log.
 * @internal
 */
export declare class LegacyAppender implements DisposableAppender {
    static configSchema: import("@osd/config-schema").ObjectType<{
        kind: import("@osd/config-schema").Type<"legacy-appender">;
        legacyLoggingConfig: import("@osd/config-schema/target/types/types").AnyType;
    }>;
    /**
     * Sets {@link Appender.receiveAllLevels} because legacy does its own filtering based on the legacy logging
     * configuration.
     */
    readonly receiveAllLevels = true;
    private readonly loggingServer;
    constructor(legacyLoggingConfig: Readonly<LegacyVars>);
    /**
     * Forwards `LogRecord` to the legacy platform that will layout and
     * write record to the configured destination.
     * @param record `LogRecord` instance to forward to.
     */
    append(record: LogRecord): void;
    dispose(): void;
}
//# sourceMappingURL=legacy_appender.d.ts.map