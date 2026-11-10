/// <reference types="jest" />
import { CapabilitiesService, CapabilitiesSetup, CapabilitiesStart } from './capabilities_service';
import { Capabilities } from './types';
export declare const capabilitiesServiceMock: {
    create: () => jest.Mocked<Pick<CapabilitiesService, "start" | "setup">>;
    createSetupContract: () => jest.Mocked<CapabilitiesSetup>;
    createStartContract: () => jest.Mocked<CapabilitiesStart>;
    createCapabilities: () => Capabilities;
};
//# sourceMappingURL=capabilities_service.mock.d.ts.map