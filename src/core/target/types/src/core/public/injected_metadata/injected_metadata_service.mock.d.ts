/// <reference types="jest" />
/// <reference types="@testing-library/jest-dom" />
import type { PublicMethodsOf } from '@osd/utility-types';
import { InjectedMetadataService, InjectedMetadataSetup } from './injected_metadata_service';
declare type InjectedMetadataServiceContract = PublicMethodsOf<InjectedMetadataService>;
export declare const injectedMetadataServiceMock: {
    create: () => jest.Mocked<InjectedMetadataServiceContract>;
    createSetupContract: () => jest.Mocked<InjectedMetadataSetup>;
    createStartContract: () => jest.Mocked<InjectedMetadataSetup>;
};
export {};
//# sourceMappingURL=injected_metadata_service.mock.d.ts.map