import { MigrationOpts } from './migration_context';
import { MigrationResult } from './migration_coordinator';
export declare class IndexMigrator {
    private opts;
    /**
     * Creates an instance of IndexMigrator.
     *
     * @param {MigrationOpts} opts
     */
    constructor(opts: MigrationOpts);
    /**
     * Migrates the index, or, if another OpenSearch Dashboards instance appears to be running the migration,
     * waits for the migration to complete.
     *
     * @returns {Promise<MigrationResult>}
     */
    migrate(): Promise<MigrationResult>;
}
//# sourceMappingURL=index_migrator.d.ts.map