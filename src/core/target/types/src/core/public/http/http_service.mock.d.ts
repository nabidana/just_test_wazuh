/// <reference types="jest" />
import { HttpService } from './http_service';
import { HttpSetup } from './types';
import { BasePath } from './base_path';
export declare type HttpSetupMock = jest.Mocked<HttpSetup> & {
    basePath: BasePath;
    anonymousPaths: jest.Mocked<HttpSetup['anonymousPaths']>;
};
export declare const httpServiceMock: {
    create: ({ basePath, clientBasePath }?: {
        basePath?: string | undefined;
        clientBasePath?: string | undefined;
    }) => jest.Mocked<Pick<HttpService, "start" | "stop" | "setup">>;
    createSetupContract: ({ basePath, clientBasePath }?: {
        basePath?: string | undefined;
        clientBasePath?: string | undefined;
    }) => HttpSetupMock;
    createStartContract: ({ basePath, clientBasePath }?: {
        basePath?: string | undefined;
        clientBasePath?: string | undefined;
    }) => HttpSetupMock;
};
//# sourceMappingURL=http_service.mock.d.ts.map