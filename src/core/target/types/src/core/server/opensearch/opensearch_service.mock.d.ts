/// <reference types="jest" />
/// <reference types="@testing-library/jest-dom" />
import { BehaviorSubject } from 'rxjs';
import { ILegacyClusterClient, ILegacyCustomClusterClient } from './legacy';
import { ClusterClientMock, CustomClusterClientMock } from './client/mocks';
import { OpenSearchClientConfig } from './client';
import { OpenSearchConfig } from './opensearch_config';
import { OpenSearchService } from './opensearch_service';
import { InternalOpenSearchServiceSetup } from './types';
export interface MockedOpenSearchServiceSetup {
    legacy: {
        config$: BehaviorSubject<OpenSearchConfig>;
        createClient: jest.Mock<ILegacyCustomClusterClient, any>;
        client: jest.Mocked<ILegacyClusterClient>;
    };
}
declare type MockedOpenSearchServiceStart = MockedOpenSearchServiceSetup & {
    client: ClusterClientMock;
    createClient: jest.MockedFunction<(name: string, config?: Partial<OpenSearchClientConfig>) => CustomClusterClientMock>;
};
export declare const opensearchServiceMock: {
    createClusterClient: () => ClusterClientMock;
    createCustomClusterClient: () => CustomClusterClientMock;
    createScopedClusterClient: () => import("./client/mocks").ScopedClusterClientMock;
    createOpenSearchClient: <T extends import("./client/mocks").IClientSelector>(opts?: T | undefined) => T extends {
        withLongNumeralsSupport: true;
    } ? DeeplyMockedKeys<import("./client").OpenSearchClientNext> : DeeplyMockedKeys<import("./client").OpenSearchClient>;
    createInternalClient: <T_1 extends import("./client/mocks").IClientSelector>(opts?: T_1 | undefined) => DeeplyMockedKeys<T_1 extends {
        withLongNumeralsSupport: true;
    } ? import("@opensearch-project/opensearch-next/api/new").Client : import("@opensearch-project/opensearch/api/new").Client>;
    createSuccessTransportRequestPromise: <T_2>(body: T_2, { statusCode }?: {
        statusCode?: number | undefined;
    }) => import("./client/mocks").MockedTransportRequestPromise<import("@opensearch-project/opensearch").ApiResponse<T_2, unknown>>;
    createErrorTransportRequestPromise: (err: any) => import("./client/mocks").MockedTransportRequestPromise<never>;
    createApiResponse: <TResponse = Record<string, any>>(opts?: Partial<import("@opensearch-project/opensearch").ApiResponse<Record<string, any>, unknown>>) => import("@opensearch-project/opensearch").ApiResponse<TResponse, unknown>;
    create: () => jest.Mocked<Pick<OpenSearchService, "start" | "stop" | "setup">>;
    createInternalSetup: () => jest.Mocked<InternalOpenSearchServiceSetup & {
        legacy: {
            client: jest.Mocked<ILegacyClusterClient>;
        };
    }>;
    createSetup: () => MockedOpenSearchServiceSetup;
    createInternalStart: () => MockedOpenSearchServiceStart;
    createStart: () => MockedOpenSearchServiceStart;
    createLegacyClusterClient: () => jest.Mocked<Pick<import("./legacy").LegacyClusterClient, "callAsInternalUser" | "asScoped">>;
    createLegacyCustomClusterClient: () => jest.Mocked<Pick<import("./legacy").LegacyClusterClient, "close" | "callAsInternalUser" | "asScoped">>;
    createLegacyScopedClusterClient: () => jest.Mocked<Pick<import("./legacy").LegacyScopedClusterClient, "callAsInternalUser" | "callAsCurrentUser">>;
    createLegacyOpenSearchClient: () => jest.Mocked<import("elasticsearch").Client>;
};
export {};
//# sourceMappingURL=opensearch_service.mock.d.ts.map