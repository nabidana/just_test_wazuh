import Boom from '@hapi/boom';
declare const code: unique symbol;
export interface DecoratedError extends Boom.Boom {
    [code]?: string;
}
/**
 * @public
 */
export declare class SavedObjectsErrorHelpers {
    static isSavedObjectsClientError(error: any): error is DecoratedError;
    static decorateBadRequestError(error: Error, reason?: string): DecoratedError;
    static createBadRequestError(reason?: string): DecoratedError;
    static createUnsupportedTypeError(type: string): DecoratedError;
    static isBadRequestError(error: Error | DecoratedError): boolean;
    static createInvalidVersionError(versionInput?: string): DecoratedError;
    static isInvalidVersionError(error: Error | DecoratedError): boolean;
    static decorateNotAuthorizedError(error: Error, reason?: string): DecoratedError;
    static isNotAuthorizedError(error: Error | DecoratedError): boolean;
    static decorateForbiddenError(error: Error, reason?: string): DecoratedError;
    static isForbiddenError(error: Error | DecoratedError): boolean;
    static decorateRequestEntityTooLargeError(error: Error, reason?: string): DecoratedError;
    static isRequestEntityTooLargeError(error: Error | DecoratedError): boolean;
    static createGenericNotFoundError(type?: string | null, id?: string | null): DecoratedError;
    static isNotFoundError(error: Error | DecoratedError): boolean;
    static decorateConflictError(error: Error, reason?: string): DecoratedError;
    static createConflictError(type: string, id: string): DecoratedError;
    static isConflictError(error: Error | DecoratedError): boolean;
    static decorateTooManyRequestsError(error: Error, reason?: string): DecoratedError;
    static createTooManyRequestsError(type: string, id: string): DecoratedError;
    static isTooManyRequestsError(error: Error | DecoratedError): boolean;
    static decorateOpenSearchCannotExecuteScriptError(error: Error, reason?: string): DecoratedError;
    static isOpenSearchCannotExecuteScriptError(error: Error | DecoratedError): boolean;
    static decorateOpenSearchUnavailableError(error: Error, reason?: string): DecoratedError;
    static isOpenSearchUnavailableError(error: Error | DecoratedError): boolean;
    static decorateGeneralError(error: Error, reason?: string): DecoratedError;
}
export {};
//# sourceMappingURL=errors.d.ts.map