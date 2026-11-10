/// <reference types="jest" />
export declare const fatalErrorMock: jest.Mocked<import("./fatal_errors").FatalErrorsSetup>;
export declare const apmSystem: {
    setup: jest.Mock<any, any>;
    start: jest.Mock<any, any>;
};
export declare const ApmSystemConstructor: jest.Mock<any, any>;
export declare const i18nLoad: jest.Mock<any, any>;
export declare const i18nSetLocale: jest.Mock<any, any>;
export declare const coreSystemMock: {
    setup: jest.Mock<any, any>;
    start: jest.Mock<any, any>;
};
export declare const consoleWarnMock: jest.SpyInstance<void, [message?: any, ...optionalParams: any[]]>;
//# sourceMappingURL=osd_bootstrap.test.mocks.d.ts.map