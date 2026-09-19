/// <reference types="jest" />
import { EnvironmentService, InternalEnvironmentServiceSetup } from './environment_service';
export declare const environmentServiceMock: {
    create: () => jest.Mocked<Pick<EnvironmentService, "setup">>;
    createSetupContract: () => jest.Mocked<InternalEnvironmentServiceSetup>;
};
//# sourceMappingURL=environment_service.mock.d.ts.map