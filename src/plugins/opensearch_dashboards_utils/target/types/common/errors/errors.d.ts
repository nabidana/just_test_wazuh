export declare class OsdError extends Error {
    constructor(message: string);
}
/**
 * when a mapping already exists for a field the user is attempting to add
 * @param {String} name - the field name
 */
export declare class DuplicateField extends OsdError {
    constructor(name: string);
}
/**
 * A saved object was not found
 */
export declare class SavedObjectNotFound extends OsdError {
    savedObjectType: string;
    savedObjectId?: string;
    constructor(type: string, id?: string, link?: string);
}
/**
 * This error is for scenarios where a saved object is detected that has invalid JSON properties.
 * There was a scenario where we were importing objects with double-encoded JSON, and the system
 * was silently failing. This error is now thrown in those scenarios.
 */
export declare class InvalidJSONProperty extends OsdError {
    constructor(message: string);
}
//# sourceMappingURL=errors.d.ts.map