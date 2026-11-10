import { ResponseError } from '@opensearch-project/opensearch/lib/errors';
export declare type UnauthorizedError = ResponseError & {
    statusCode: 401;
};
export declare function isResponseError(error: any): error is ResponseError;
export declare function isUnauthorizedError(error: any): error is UnauthorizedError;
//# sourceMappingURL=errors.d.ts.map