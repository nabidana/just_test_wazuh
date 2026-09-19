import { SavedObjectsFindOptions } from '../../types';
import { SavedObjectsFindResponse } from '..';
export declare const DEFAULT_NAMESPACE_STRING = "default";
export declare const ALL_NAMESPACES_STRING = "*";
export declare const FIND_DEFAULT_PAGE = 1;
export declare const FIND_DEFAULT_PER_PAGE = 20;
/**
 * @public
 */
export declare class SavedObjectsUtils {
    /**
     * Converts a given saved object namespace ID to its string representation. All namespace IDs have an identical string representation, with
     * the exception of the `undefined` namespace ID (which has a namespace string of `'default'`).
     *
     * @param namespace The namespace ID, which must be either a non-empty string or `undefined`.
     */
    static namespaceIdToString: (namespace?: string | undefined) => string;
    /**
     * Converts a given saved object namespace string to its ID representation. All namespace strings have an identical ID representation, with
     * the exception of the `'default'` namespace string (which has a namespace ID of `undefined`).
     *
     * @param namespace The namespace string, which must be non-empty.
     */
    static namespaceStringToId: (namespace: string) => string | undefined;
    /**
     * Creates an empty response for a find operation. This is only intended to be used by saved objects client wrappers.
     */
    static createEmptyFindResponse: <T>({ page, perPage, }: SavedObjectsFindOptions) => SavedObjectsFindResponse<T>;
}
//# sourceMappingURL=utils.d.ts.map