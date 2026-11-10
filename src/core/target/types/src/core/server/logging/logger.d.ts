import { Appender, LogLevel, LogRecord, LoggerFactory, LogMeta, Logger } from '@osd/logging';
/** @internal */
export declare class BaseLogger implements Logger {
    private readonly context;
    private readonly level;
    private readonly appenders;
    private readonly factory;
    constructor(context: string, level: LogLevel, appenders: Appender[], factory: LoggerFactory);
    trace(message: string, meta?: LogMeta): void;
    debug(message: string, meta?: LogMeta): void;
    info(message: string, meta?: LogMeta): void;
    warn(errorOrMessage: string | Error, meta?: LogMeta): void;
    error(errorOrMessage: string | Error, meta?: LogMeta): void;
    fatal(errorOrMessage: string | Error, meta?: LogMeta): void;
    log(record: LogRecord): void;
    get(...childContextPaths: string[]): Logger;
    private createLogRecord;
}
//# sourceMappingURL=logger.d.ts.map