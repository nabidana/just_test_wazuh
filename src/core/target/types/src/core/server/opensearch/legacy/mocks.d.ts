/// <reference types="jest" />
/// <reference types="@testing-library/jest-dom" />
import { Client } from 'elasticsearch';
import { ILegacyScopedClusterClient } from './scoped_cluster_client';
import { ILegacyCustomClusterClient } from './cluster_client';
declare function createClusterClientMock(): jest.Mocked<Pick<import("./cluster_client").LegacyClusterClient, "callAsInternalUser" | "asScoped">>;
export declare const legacyClientMock: {
    createScopedClusterClient: () => jest.Mocked<ILegacyScopedClusterClient>;
    createCustomClusterClient: () => jest.Mocked<ILegacyCustomClusterClient>;
    createClusterClient: typeof createClusterClientMock;
    createOpenSearchClient: () => jest.Mocked<Client>;
};
export {};
//# sourceMappingURL=mocks.d.ts.map