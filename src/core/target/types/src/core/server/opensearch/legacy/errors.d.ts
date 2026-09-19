import Boom from '@hapi/boom';
declare const code: unique symbol;
/**
 * @deprecated. The new opensearch client doesn't wrap errors anymore.
 * @public
 * */
export interface LegacyOpenSearchError extends Boom.Boom {
    [code]?: string;
}
/**
 * Helpers for working with errors returned from the OpenSearch service.Since the internal data of
 * errors are subject to change, consumers of the OpenSearch service should always use these helpers
 * to classify errors instead of checking error internals such as `body.error.header[WWW-Authenticate]`
 * @public
 *
 * @example
 * Handle errors
 * ```js
 * try {
 *   await client.asScoped(request).callAsCurrentUser(...);
 * } catch (err) {
 *   if (OpenSearchErrorHelpers.isNotAuthorizedError(err)) {
 *     const authHeader = err.output.headers['WWW-Authenticate'];
 *   }
 * ```
 */
export declare class LegacyOpenSearchErrorHelpers {
    static isNotAuthorizedError(error: any): error is LegacyOpenSearchError;
    static decorateNotAuthorizedError(error: Error, reason?: string): LegacyOpenSearchError;
}
export {};
//# sourceMappingURL=errors.d.ts.map