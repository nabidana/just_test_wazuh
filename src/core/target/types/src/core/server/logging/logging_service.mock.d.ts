/// <reference types="jest" />
/// <reference types="@testing-library/jest-dom" />
import type { PublicMethodsOf } from '@osd/utility-types';
import { LoggingService, LoggingServiceSetup, InternalLoggingServiceSetup } from './logging_service';
declare type LoggingServiceContract = PublicMethodsOf<LoggingService>;
export declare const loggingServiceMock: {
    create: () => jest.Mocked<LoggingServiceContract>;
    createSetupContract: () => jest.Mocked<LoggingServiceSetup>;
    createInternalSetupContract: () => jest.Mocked<InternalLoggingServiceSetup>;
};
export {};
//# sourceMappingURL=logging_service.mock.d.ts.map