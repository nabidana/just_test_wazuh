/// <reference types="jest" />
/// <reference types="@testing-library/jest-dom" />
import type { PublicMethodsOf } from '@osd/utility-types';
import { LegacyService } from './legacy_service';
import { LegacyConfig, LegacyServiceSetupDeps } from './types';
declare type LegacyServiceMock = jest.Mocked<PublicMethodsOf<LegacyService> & {
    legacyId: symbol;
}>;
export declare const legacyServiceMock: {
    create: () => LegacyServiceMock;
    createSetupContract: (deps: LegacyServiceSetupDeps) => Promise<void>;
    createLegacyConfig: () => jest.Mocked<LegacyConfig>;
};
export {};
//# sourceMappingURL=legacy_service.mock.d.ts.map