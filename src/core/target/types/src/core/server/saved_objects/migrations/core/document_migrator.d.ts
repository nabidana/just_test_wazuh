import { Logger } from '../../../logging';
import { SavedObjectUnsanitizedDoc } from '../../serialization';
import { SavedObjectsMigrationVersion } from '../../types';
import { ISavedObjectTypeRegistry } from '../../saved_objects_type_registry';
export declare type TransformFn = (doc: SavedObjectUnsanitizedDoc) => SavedObjectUnsanitizedDoc;
interface DocumentMigratorOptions {
    opensearchDashboardsVersion: string;
    typeRegistry: ISavedObjectTypeRegistry;
    log: Logger;
}
/**
 * Manages migration of individual documents.
 */
export interface VersionedTransformer {
    migrationVersion: SavedObjectsMigrationVersion;
    migrate: TransformFn;
}
/**
 * A concrete implementation of the VersionedTransformer interface.
 */
export declare class DocumentMigrator implements VersionedTransformer {
    private migrations;
    private transformDoc;
    /**
     * Creates an instance of DocumentMigrator.
     *
     * @param {DocumentMigratorOptions} opts
     * @prop {string} opensearchDashboardsVersion - The current version of OpenSearchDashboards
     * @prop {SavedObjectTypeRegistry} typeRegistry - The type registry to get type migrations from
     * @prop {Logger} log - The migration logger
     * @memberof DocumentMigrator
     */
    constructor({ typeRegistry, opensearchDashboardsVersion, log }: DocumentMigratorOptions);
    /**
     * Gets the latest version of each migratable property.
     *
     * @readonly
     * @type {SavedObjectsMigrationVersion}
     * @memberof DocumentMigrator
     */
    get migrationVersion(): SavedObjectsMigrationVersion;
    /**
     * Migrates a document to the latest version.
     *
     * @param {SavedObjectUnsanitizedDoc} doc
     * @returns {SavedObjectUnsanitizedDoc}
     * @memberof DocumentMigrator
     */
    migrate: (doc: SavedObjectUnsanitizedDoc) => SavedObjectUnsanitizedDoc;
}
export {};
//# sourceMappingURL=document_migrator.d.ts.map