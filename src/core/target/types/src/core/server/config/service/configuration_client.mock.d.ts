/// <reference types="jest" />
import { ApiResponse } from '@opensearch-project/opensearch/.';
import { IInternalDynamicConfigurationClient } from '../types';
export interface InternalDynamicConfigurationClientMockProps {
    getConfig: Record<string, any>;
    bulkGetConfigs: Map<string, Record<string, any>>;
    listConfigs: Map<string, Record<string, any>>;
    createConfig?: Partial<ApiResponse>;
    bulkCreateConfigs?: Partial<ApiResponse>;
    deleteConfig?: Partial<ApiResponse>;
    bulkDeleteConfigs?: Partial<ApiResponse>;
}
export declare type DynamicConfigurationClientMockProps = Pick<InternalDynamicConfigurationClientMockProps, 'getConfig' | 'bulkGetConfigs' | 'listConfigs'>;
export declare const internalDynamicConfigurationClientMock: {
    create: (props?: InternalDynamicConfigurationClientMockProps) => jest.Mocked<IInternalDynamicConfigurationClient>;
    createApiResponse: <TResponse = Record<string, any>>(opts?: Partial<ApiResponse<Record<string, any>, unknown>>) => ApiResponse<TResponse, unknown>;
};
export declare const dynamicConfigurationClientMock: {
    create: (props?: DynamicConfigurationClientMockProps) => jest.Mocked<Pick<IInternalDynamicConfigurationClient, "getConfig" | "bulkGetConfigs" | "listConfigs">>;
    createApiResponse: <TResponse = Record<string, any>>(opts?: Partial<ApiResponse<Record<string, any>, unknown>>) => ApiResponse<TResponse, unknown>;
};
//# sourceMappingURL=configuration_client.mock.d.ts.map