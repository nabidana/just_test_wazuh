/// <reference types="jest" />
import { LoggerFactory } from '@osd/logging';
import { MockedLogger } from './logger.mock';
export declare const loggingSystemMock: {
    create: () => jest.Mocked<Pick<import("./logging_system").LoggingSystem, "stop" | "upgrade" | "get" | "asLoggerFactory" | "setContextConfig">>;
    collect: (loggerFactory: LoggerFactory) => {
        debug: [message: string, meta?: import("@osd/logging").LogMeta | undefined][];
        error: [errorOrMessage: string | Error, meta?: import("@osd/logging").LogMeta | undefined][];
        fatal: [errorOrMessage: string | Error, meta?: import("@osd/logging").LogMeta | undefined][];
        info: [message: string, meta?: import("@osd/logging").LogMeta | undefined][];
        log: [record: import("@osd/logging").LogRecord][];
        trace: [message: string, meta?: import("@osd/logging").LogMeta | undefined][];
        warn: [errorOrMessage: string | Error, meta?: import("@osd/logging").LogMeta | undefined][];
    };
    clear: (loggerFactory: LoggerFactory) => void;
    createLogger: (context?: string[] | undefined) => MockedLogger;
};
//# sourceMappingURL=logging_system.mock.d.ts.map