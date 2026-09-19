import { errors as opensearchErrors } from '@opensearch-project/opensearch';
declare type OpenSearchErrors = opensearchErrors.ConnectionError | opensearchErrors.NoLivingConnectionsError | opensearchErrors.TimeoutError | opensearchErrors.ResponseError;
export declare function decorateOpenSearchError(error: OpenSearchErrors): import("./errors").DecoratedError;
export {};
//# sourceMappingURL=decorate_opensearch_error.d.ts.map