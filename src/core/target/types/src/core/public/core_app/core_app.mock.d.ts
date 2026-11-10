/// <reference types="jest" />
/// <reference types="@testing-library/jest-dom" />
import type { PublicMethodsOf } from '@osd/utility-types';
import { CoreApp } from './core_app';
declare type CoreAppContract = PublicMethodsOf<CoreApp>;
export declare const coreAppMock: {
    create: () => jest.Mocked<CoreAppContract>;
};
export {};
//# sourceMappingURL=core_app.mock.d.ts.map