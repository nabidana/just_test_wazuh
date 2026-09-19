/// <reference types="jest" />
import { Client, ApiResponse } from '@opensearch-project/opensearch';
import { Client as ClientNext } from '@opensearch-project/opensearch-next';
import { TransportRequestPromise } from '@opensearch-project/opensearch/lib/Transport';
import { OpenSearchClient, OpenSearchClientNext } from './types';
import { ICustomClusterClient } from './cluster_client';
export interface IClientSelector {
    withLongNumeralsSupport?: boolean;
}
declare type ClientType<T> = T extends {
    withLongNumeralsSupport: true;
} ? ClientNext : Client;
declare type OpenSearchClientMockType<T> = T extends {
    withLongNumeralsSupport: true;
} ? DeeplyMockedKeys<OpenSearchClientNext> : DeeplyMockedKeys<OpenSearchClient>;
export declare type OpenSearchClientMock = DeeplyMockedKeys<OpenSearchClient>;
export declare type OpenSearchClientNextMock = DeeplyMockedKeys<OpenSearchClientNext>;
export interface ScopedClusterClientMock {
    asInternalUser: OpenSearchClientMock;
    asCurrentUser: OpenSearchClientMock;
    asInternalUserWithLongNumeralsSupport: OpenSearchClientNextMock;
    asCurrentUserWithLongNumeralsSupport: OpenSearchClientNextMock;
}
export interface ClusterClientMock {
    asInternalUser: OpenSearchClientMock;
    asInternalUserWithLongNumeralsSupport: OpenSearchClientNextMock;
    asScoped: jest.MockedFunction<() => ScopedClusterClientMock>;
}
export declare type CustomClusterClientMock = jest.Mocked<ICustomClusterClient> & ClusterClientMock;
export declare type MockedTransportRequestPromise<T> = TransportRequestPromise<T> & {
    abort: jest.MockedFunction<() => undefined>;
};
declare function createApiResponse<TResponse = Record<string, any>>(opts?: Partial<ApiResponse>): ApiResponse<TResponse>;
export declare const opensearchClientMock: {
    createClusterClient: () => ClusterClientMock;
    createCustomClusterClient: () => CustomClusterClientMock;
    createScopedClusterClient: () => ScopedClusterClientMock;
    createOpenSearchClient: <T extends IClientSelector>(opts?: T | undefined) => OpenSearchClientMockType<T>;
    createInternalClient: <T_1 extends IClientSelector>(opts?: T_1 | undefined) => DeeplyMockedKeys<ClientType<T_1>>;
    createSuccessTransportRequestPromise: <T_2>(body: T_2, { statusCode }?: {
        statusCode?: number | undefined;
    }) => MockedTransportRequestPromise<ApiResponse<T_2, unknown>>;
    createErrorTransportRequestPromise: (err: any) => MockedTransportRequestPromise<never>;
    createApiResponse: typeof createApiResponse;
};
export {};
//# sourceMappingURL=mocks.d.ts.map