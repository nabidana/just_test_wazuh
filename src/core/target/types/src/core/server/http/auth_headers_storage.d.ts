import { OpenSearchDashboardsRequest, LegacyRequest } from './router';
import { AuthHeaders } from './lifecycle/auth';
/**
 * Get headers to authenticate a user against OpenSearch.
 * @param request {@link OpenSearchDashboardsRequest} - an incoming request.
 * @return authentication headers {@link AuthHeaders} for - an incoming request.
 * @public
 * */
export declare type GetAuthHeaders = (request: OpenSearchDashboardsRequest | LegacyRequest) => AuthHeaders | undefined;
/** @internal */
export declare class AuthHeadersStorage {
    private authHeadersCache;
    set: (request: OpenSearchDashboardsRequest | LegacyRequest, headers: AuthHeaders) => void;
    get: GetAuthHeaders;
}
//# sourceMappingURL=auth_headers_storage.d.ts.map