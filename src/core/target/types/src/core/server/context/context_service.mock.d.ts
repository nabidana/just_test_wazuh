/// <reference types="jest" />
import { ContextService, ContextSetup } from './context_service';
export declare const contextServiceMock: {
    create: () => jest.Mocked<Pick<ContextService, "setup">>;
    createSetupContract: (mockContext?: {}) => jest.Mocked<ContextSetup>;
};
//# sourceMappingURL=context_service.mock.d.ts.map