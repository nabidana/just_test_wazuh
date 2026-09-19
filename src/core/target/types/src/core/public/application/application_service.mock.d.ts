/// <reference types="jest" />
/// <reference types="@testing-library/jest-dom" />
import { ApplicationSetup, InternalApplicationStart, ApplicationStart, InternalApplicationSetup } from './types';
import { ApplicationServiceContract } from './test_types';
export declare const applicationServiceMock: {
    create: () => jest.Mocked<ApplicationServiceContract>;
    createSetupContract: () => jest.Mocked<ApplicationSetup>;
    createStartContract: () => jest.Mocked<ApplicationStart>;
    createInternalSetupContract: () => jest.Mocked<InternalApplicationSetup>;
    createInternalStartContract: () => jest.Mocked<InternalApplicationStart>;
};
//# sourceMappingURL=application_service.mock.d.ts.map