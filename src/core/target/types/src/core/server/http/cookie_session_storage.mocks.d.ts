/// <reference types="jest" />
/// <reference types="@testing-library/jest-dom" />
import { SessionStorageFactory, SessionStorage } from './session_storage';
declare type ReturnMocked<T> = {
    [K in keyof T]: T[K] extends (...args: any[]) => infer U ? (...args: any[]) => jest.Mocked<U> : T[K];
};
export declare const sessionStorageMock: {
    create: <T>() => jest.Mocked<SessionStorage<T>>;
    createFactory: <T_1>() => jest.Mocked<ReturnMocked<SessionStorageFactory<T_1>>>;
};
export {};
//# sourceMappingURL=cookie_session_storage.mocks.d.ts.map