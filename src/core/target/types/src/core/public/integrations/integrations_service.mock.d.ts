/// <reference types="jest" />
/// <reference types="@testing-library/jest-dom" />
import type { PublicMethodsOf } from '@osd/utility-types';
import { IntegrationsService } from './integrations_service';
declare type IntegrationsServiceContract = PublicMethodsOf<IntegrationsService>;
export declare const integrationsServiceMock: {
    create: () => jest.Mocked<IntegrationsServiceContract>;
};
export {};
//# sourceMappingURL=integrations_service.mock.d.ts.map