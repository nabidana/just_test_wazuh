import { Logger } from '@osd/logging';
import { Request } from 'hapi__hapi';
import { ApiResponse } from '@opensearch-project/opensearch/.';
import { ConfigIdentifier } from '../types';
import { OpenSearchDashboardsRequest } from '../../http';
/**
 * Given a configIdentifier:
 *  - if name is provided, convert it from camelCase to snake_case
 *  - if pluginConfigPath is provided (for plugin configs ONLY), convert the ["config", "path"] to config.path
 *
 * @param configIdentifier
 */
export declare const pathToString: (configIdentifier: ConfigIdentifier) => string;
export declare const createApiResponse: <TResponse = Record<string, any>>(opts?: Partial<ApiResponse>) => ApiResponse<TResponse, unknown>;
/**
 * Given the config from the config file and the config store, merge the two configs.
 *
 * @param defaultConfigs
 * @param configStoreConfigs
 */
export declare const mergeConfigs: (defaultConfigs: Record<string, unknown>, configStoreConfigs: Record<string, unknown>) => Record<string, unknown>;
export declare const createLocalStore: (logger: Logger, request: Request, headers: string[]) => Map<string, string | undefined>;
export declare const getDynamicConfigIndexName: (n: number) => string;
/**
 * Basic check to ensure the index matches the pattern (will pass for ${DYNAMIC_APP_CONFIG_INDEX_PREFIX}_0)
 *
 * @param index
 * @returns
 */
export declare const isDynamicConfigIndex: (index: string) => boolean;
export declare const extractVersionFromDynamicConfigIndex: (index: string) => number;
export declare const createLocalStoreFromOsdRequest: (logger: Logger, request: OpenSearchDashboardsRequest, headers: string[]) => Map<string, string | string[] | undefined> | undefined;
//# sourceMappingURL=utils.d.ts.map