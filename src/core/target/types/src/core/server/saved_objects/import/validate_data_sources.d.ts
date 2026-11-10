import { SavedObject, SavedObjectsBaseOptions, SavedObjectsClientContract } from '../types';
import { SavedObjectsImportError } from './types';
export declare function validateDataSources(savedObjects: Array<SavedObject<{
    title?: string;
}>>, savedObjectsClient: SavedObjectsClientContract, errorAccumulator: SavedObjectsImportError[], workspaces: SavedObjectsBaseOptions['workspaces']): Promise<SavedObjectsImportError[]>;
//# sourceMappingURL=validate_data_sources.d.ts.map