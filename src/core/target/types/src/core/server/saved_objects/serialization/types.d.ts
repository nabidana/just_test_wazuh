import { Permissions } from '../permission_control';
import { SavedObjectsMigrationVersion, SavedObjectReference, SavedObject } from '../types';
/**
 * A raw document as represented directly in the saved object index.
 *
 * @public
 */
export interface SavedObjectsRawDoc {
    _id: string;
    _source: SavedObjectsRawDocSource;
    _type?: string;
    _seq_no?: number;
    _primary_term?: number;
}
/** @public */
export interface SavedObjectsRawDocSource {
    type: string;
    namespace?: string;
    namespaces?: string[];
    migrationVersion?: SavedObjectsMigrationVersion;
    updated_at?: string;
    references?: SavedObjectReference[];
    originId?: string;
    workspaces?: SavedObject['workspaces'];
    [typeMapping: string]: any;
}
/**
 * Saved Object base document
 */
interface SavedObjectDoc<T = unknown> {
    attributes: T;
    id?: string;
    type: string;
    namespace?: string;
    namespaces?: string[];
    migrationVersion?: SavedObjectsMigrationVersion;
    version?: string;
    updated_at?: string;
    originId?: string;
    workspaces?: SavedObject['workspaces'];
    permissions?: Permissions;
}
interface Referencable {
    references: SavedObjectReference[];
}
/**
 * Describes Saved Object documents from OpenSearch Dashboards < 7.0.0 which don't have a
 * `references` root property defined. This type should only be used in
 * migrations.
 *
 * @public
 */
export declare type SavedObjectUnsanitizedDoc<T = unknown> = SavedObjectDoc<T> & Partial<Referencable>;
/**
 * Describes Saved Object documents that have passed through the migration
 * framework and are guaranteed to have a `references` root property.
 *
 * @public
 */
export declare type SavedObjectSanitizedDoc<T = unknown> = SavedObjectDoc<T> & Referencable;
export {};
//# sourceMappingURL=types.d.ts.map