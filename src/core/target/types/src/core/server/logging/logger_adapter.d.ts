import { LogRecord, Logger, LogMeta } from '@osd/logging';
/** @internal */
export declare class LoggerAdapter implements Logger {
    private logger;
    constructor(logger: Logger);
    /**
     * The current logger can be updated "on the fly", e.g. when the log config
     * has changed.
     *
     * This is not intended for external use, only internally in OpenSearch Dashboards
     *
     * @internal
     */
    updateLogger(logger: Logger): void;
    trace(message: string, meta?: LogMeta): void;
    debug(message: string, meta?: LogMeta): void;
    info(message: string, meta?: LogMeta): void;
    warn(errorOrMessage: string | Error, meta?: LogMeta): void;
    error(errorOrMessage: string | Error, meta?: LogMeta): void;
    fatal(errorOrMessage: string | Error, meta?: LogMeta): void;
    log(record: LogRecord): void;
    get(...contextParts: string[]): Logger;
}
//# sourceMappingURL=logger_adapter.d.ts.map