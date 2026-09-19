import { SavedObject, SavedObjectsClientContract } from '../types';
import { SavedObjectsImportError, SavedObjectsImportRetry } from './types';
export declare function getNonExistingReferenceAsKeys(savedObjects: SavedObject[], savedObjectsClient: SavedObjectsClientContract, namespace?: string, retries?: SavedObjectsImportRetry[]): Promise<any[]>;
export declare function validateReferences(savedObjects: Array<SavedObject<{
    title?: string;
}>>, savedObjectsClient: SavedObjectsClientContract, namespace?: string, retries?: SavedObjectsImportRetry[]): Promise<SavedObjectsImportError[]>;
//# sourceMappingURL=validate_references.d.ts.map