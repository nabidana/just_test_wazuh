/// <reference types="jest" />
export declare const logger: jest.Mocked<Pick<import("../logging").LoggingSystem, "stop" | "upgrade" | "get" | "asLoggerFactory" | "setContextConfig">>;
export declare const configService: jest.Mocked<Pick<import("@osd/config").ConfigService, "validate" | "getConfig$" | "setSchema" | "addDeprecationProvider" | "atPath" | "optionalAtPath" | "isEnabledAtPath" | "getUnusedPaths" | "getUsedPaths">>;
export declare const rawConfigService: jest.Mocked<Pick<import("@osd/config").RawConfigService, import("@osd/utility-types").MethodKeysOf<import("@osd/config").RawConfigService>>>;
export declare const mockServer: {
    setupCoreConfig: jest.Mock<any, any>;
    setup: jest.Mock<any, any>;
    stop: jest.Mock<any, any>;
    configService: jest.Mocked<Pick<import("@osd/config").ConfigService, "validate" | "getConfig$" | "setSchema" | "addDeprecationProvider" | "atPath" | "optionalAtPath" | "isEnabledAtPath" | "getUnusedPaths" | "getUsedPaths">>;
};
//# sourceMappingURL=index.test.mocks.d.ts.map