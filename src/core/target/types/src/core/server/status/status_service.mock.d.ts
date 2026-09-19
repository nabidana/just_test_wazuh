/// <reference types="jest" />
import { StatusService } from './status_service';
import { InternalStatusServiceSetup, StatusServiceSetup } from './types';
export declare const statusServiceMock: {
    create: () => jest.Mocked<Pick<StatusService, "start" | "stop" | "setup">>;
    createSetupContract: () => jest.Mocked<StatusServiceSetup>;
    createInternalSetupContract: () => jest.Mocked<InternalStatusServiceSetup>;
};
//# sourceMappingURL=status_service.mock.d.ts.map