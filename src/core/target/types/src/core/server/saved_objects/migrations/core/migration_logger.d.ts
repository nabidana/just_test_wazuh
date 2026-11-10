import { Logger, LogMeta } from '../../../logging';
export declare type LogFn = (path: string[], message: string) => void;
/** @public */
export interface SavedObjectsMigrationLogger {
    debug: (msg: string) => void;
    info: (msg: string) => void;
    /**
     * @deprecated Use `warn` instead.
     */
    warning: (msg: string) => void;
    warn: (msg: string) => void;
    error: (msg: string, meta: LogMeta) => void;
}
export declare class MigrationLogger implements SavedObjectsMigrationLogger {
    private logger;
    constructor(log: Logger);
    info: (msg: string) => void;
    debug: (msg: string) => void;
    warning: (msg: string) => void;
    warn: (msg: string) => void;
    error: (msg: string, meta: LogMeta) => void;
}
//# sourceMappingURL=migration_logger.d.ts.map