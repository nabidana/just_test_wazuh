/// <reference types="jest" />
import { HttpService } from '../public/http';
import { fatalErrorsServiceMock } from '../public/fatal_errors/fatal_errors_service.mock';
import { injectedMetadataServiceMock } from '../public/injected_metadata/injected_metadata_service.mock';
export declare type SetupTap = (injectedMetadata: ReturnType<typeof injectedMetadataServiceMock.createSetupContract>, fatalErrors: ReturnType<typeof fatalErrorsServiceMock.createSetupContract>) => void;
export declare function setup(tap?: SetupTap): {
    httpService: HttpService;
    injectedMetadata: jest.Mocked<import("../public/injected_metadata").InjectedMetadataSetup>;
    fatalErrors: jest.Mocked<import("../public").FatalErrorsSetup>;
    http: import("../public/http").HttpSetup;
};
//# sourceMappingURL=http_test_setup.d.ts.map