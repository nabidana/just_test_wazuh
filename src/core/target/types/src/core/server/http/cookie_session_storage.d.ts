import { Server } from '@hapi/hapi';
import { SessionStorageFactory } from './session_storage';
import { Logger } from '..';
/**
 * Configuration used to create HTTP session storage based on top of cookie mechanism.
 * @public
 */
export interface SessionStorageCookieOptions<T> {
    /**
     * Name of the session cookie.
     */
    name: string;
    /**
     * A key used to encrypt a cookie's value. Should be at least 32 characters long.
     */
    encryptionKey: string;
    /**
     * Function called to validate a cookie's decrypted value.
     */
    validate: (sessionValue: T | T[]) => SessionCookieValidationResult;
    /**
     * Flag indicating whether the cookie should be sent only via a secure connection.
     */
    isSecure: boolean;
    /**
     * Defines SameSite attribute of the Set-Cookie Header.
     * https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Set-Cookie/SameSite
     */
    sameSite?: 'Strict' | 'Lax' | 'None';
}
/**
 * Return type from a function to validate cookie contents.
 * @public
 */
export interface SessionCookieValidationResult {
    /**
     * Whether the cookie is valid or not.
     */
    isValid: boolean;
    /**
     * The "Path" attribute of the cookie; if the cookie is invalid, this is used to clear it.
     */
    path?: string;
}
/**
 * Creates SessionStorage factory, which abstract the way of
 * session storage implementation and scoping to the incoming requests.
 *
 * @param server - hapi server to create SessionStorage for
 * @param cookieOptions - cookies configuration
 */
export declare function createCookieSessionStorageFactory<T>(log: Logger, server: Server, cookieOptions: SessionStorageCookieOptions<T>, basePath?: string): Promise<SessionStorageFactory<T>>;
//# sourceMappingURL=cookie_session_storage.d.ts.map