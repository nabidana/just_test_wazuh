import { ISavedObjectTypeRegistry } from '../saved_objects_type_registry';
import { SavedObjectsRawDoc, SavedObjectSanitizedDoc } from './types';
/**
 * A serializer that can be used to manually convert {@link SavedObjectsRawDoc | raw} or
 * {@link SavedObjectSanitizedDoc | sanitized} documents to the other kind.
 *
 * @remarks Serializer instances should only be created and accessed by calling {@link SavedObjectsServiceStart.createSerializer}
 *
 * @public
 */
export declare class SavedObjectsSerializer {
    private readonly registry;
    /**
     * @internal
     */
    constructor(registry: ISavedObjectTypeRegistry);
    /**
     * Determines whether or not the raw document can be converted to a saved object.
     *
     * @param {SavedObjectsRawDoc} rawDoc - The raw OpenSearch document to be tested
     */
    isRawSavedObject(rawDoc: SavedObjectsRawDoc): boolean;
    /**
     * Converts a document from the format that is stored in opensearch to the saved object client format.
     *
     *  @param {SavedObjectsRawDoc} doc - The raw OpenSearch document to be converted to saved object format.
     */
    rawToSavedObject(doc: SavedObjectsRawDoc): SavedObjectSanitizedDoc;
    /**
     * Converts a document from the saved object client format to the format that is stored in opensearch.
     *
     * @param {SavedObjectSanitizedDoc} savedObj - The saved object to be converted to raw OpenSearch format.
     */
    savedObjectToRaw(savedObj: SavedObjectSanitizedDoc): SavedObjectsRawDoc;
    /**
     * Given a saved object type and id, generates the compound id that is stored in the raw document.
     *
     * @param {string} namespace - The namespace of the saved object
     * @param {string} type - The saved object type
     * @param {string} id - The id of the saved object
     */
    generateRawId(namespace: string | undefined, type: string, id?: string): string;
    private trimIdPrefix;
}
//# sourceMappingURL=serializer.d.ts.map