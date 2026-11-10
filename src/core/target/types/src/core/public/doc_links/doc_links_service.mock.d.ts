/// <reference types="jest" />
/// <reference types="@testing-library/jest-dom" />
import type { PublicMethodsOf } from '@osd/utility-types';
import { DocLinksService, DocLinksStart } from './doc_links_service';
declare type DocLinksServiceContract = PublicMethodsOf<DocLinksService>;
export declare const docLinksServiceMock: {
    create: () => jest.Mocked<DocLinksServiceContract>;
    createSetupContract: () => jest.Mock<any, any>;
    createStartContract: () => DocLinksStart;
};
export {};
//# sourceMappingURL=doc_links_service.mock.d.ts.map