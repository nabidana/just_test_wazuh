import { SavedObject } from '../types';
import { SavedObjectsImportRetry } from './types';
export declare function splitOverwrites<T>(savedObjects: Array<SavedObject<T>>, retries: SavedObjectsImportRetry[]): {
    objectsToOverwrite: SavedObject<T>[];
    objectsToNotOverwrite: SavedObject<T>[];
};
//# sourceMappingURL=split_overwrites.d.ts.map