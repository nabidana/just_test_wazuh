/// <reference types="jest" />
/// <reference types="@testing-library/jest-dom" />
import type { PublicMethodsOf } from '@osd/utility-types';
import { AuditTrailSetup, Auditor } from './types';
import { AuditTrailService } from './audit_trail_service';
export declare const auditTrailServiceMock: {
    create: () => jest.Mocked<PublicMethodsOf<AuditTrailService>>;
    createSetupContract: () => jest.Mocked<AuditTrailSetup>;
    createStartContract: () => jest.Mocked<import("./types").AuditorFactory>;
    createAuditorFactory: () => jest.Mocked<import("./types").AuditorFactory>;
    createAuditor: () => jest.Mocked<Auditor>;
};
//# sourceMappingURL=audit_trail_service.mock.d.ts.map