/// <reference types="node" />
import { Readable } from 'stream';
import { SavedObject } from '../types';
import { SavedObjectsImportError } from './types';
interface CollectSavedObjectsOptions {
    readStream: Readable;
    objectLimit: number;
    filter?: (obj: SavedObject) => boolean;
    supportedTypes: string[];
    dataSourceId?: string;
}
export declare function collectSavedObjects({ readStream, objectLimit, filter, supportedTypes, dataSourceId, }: CollectSavedObjectsOptions): Promise<{
    errors: SavedObjectsImportError[];
    collectedObjects: SavedObject<{
        title?: string | undefined;
    }>[];
    importIdMap: Map<string, {
        id?: string | undefined;
        omitOriginId?: boolean | undefined;
    }>;
}>;
export {};
//# sourceMappingURL=collect_saved_objects.d.ts.map