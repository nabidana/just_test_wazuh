import { SavedObjectsRawDoc, SavedObjectsSerializer } from '../../serialization';
import { TransformFn } from './document_migrator';
import { SavedObjectsMigrationLogger } from '.';
/**
 * Applies the specified migration function to every saved object document in the list
 * of raw docs. Any raw docs that are not valid saved objects will simply be passed through.
 *
 * @param {TransformFn} migrateDoc
 * @param {SavedObjectsRawDoc[]} rawDocs
 * @returns {SavedObjectsRawDoc[]}
 */
export declare function migrateRawDocs(serializer: SavedObjectsSerializer, migrateDoc: TransformFn, rawDocs: SavedObjectsRawDoc[], log: SavedObjectsMigrationLogger): Promise<SavedObjectsRawDoc[]>;
//# sourceMappingURL=migrate_raw_docs.d.ts.map