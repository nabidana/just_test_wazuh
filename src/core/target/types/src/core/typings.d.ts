/// <reference types="jest" />
declare type DeeplyMockedKeys<T> = {
    [P in keyof T]: T[P] extends (...args: any[]) => any ? jest.MockInstance<ReturnType<T[P]>, Parameters<T[P]>> : DeeplyMockedKeys<T[P]>;
} & T;
declare type MockedKeys<T> = {
    [P in keyof T]: jest.Mocked<T[P]>;
};
//# sourceMappingURL=typings.d.ts.map