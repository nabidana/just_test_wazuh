/// <reference types="jest" />
import { FatalErrorsService, FatalErrorsSetup } from './fatal_errors_service';
export declare const fatalErrorsServiceMock: {
    create: () => jest.Mocked<Pick<FatalErrorsService, "start" | "setup">>;
    createSetupContract: () => jest.Mocked<FatalErrorsSetup>;
    createStartContract: () => jest.Mocked<FatalErrorsSetup>;
};
//# sourceMappingURL=fatal_errors_service.mock.d.ts.map