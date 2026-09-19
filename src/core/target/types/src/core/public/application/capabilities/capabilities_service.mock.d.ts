/// <reference types="jest" />
/// <reference types="@testing-library/jest-dom" />
import type { PublicMethodsOf } from '@osd/utility-types';
import { CapabilitiesService, CapabilitiesStart } from './capabilities_service';
export declare const capabilitiesServiceMock: {
    create: () => jest.Mocked<PublicMethodsOf<CapabilitiesService>>;
    createStartContract: () => jest.Mocked<CapabilitiesStart>;
};
//# sourceMappingURL=capabilities_service.mock.d.ts.map