/// <reference types="jest" />
export declare const momentMock: {
    locale: jest.Mock<string, []>;
    tz: {
        setDefault: jest.Mock<any, any>;
        zone: jest.Mock<{
            name: string;
        } | null, [z: any]>;
    };
    weekdays: jest.Mock<string[], []>;
    updateLocale: jest.Mock<any, any>;
};
//# sourceMappingURL=moment_service.test.mocks.d.ts.map