import { SavedObjectsMigrationLogger } from './migration_logger';
export declare type MigrationStatus = 'waiting' | 'running' | 'completed';
export declare type MigrationResult = {
    status: 'skipped';
} | {
    status: 'patched';
} | {
    status: 'migrated';
    destIndex: string;
    sourceIndex: string;
    elapsedMs: number;
};
interface Opts {
    runMigration: () => Promise<MigrationResult>;
    isMigrated: () => Promise<boolean>;
    log: SavedObjectsMigrationLogger;
    pollInterval?: number;
}
/**
 * Runs the migration specified by opts. If the migration fails due to an index
 * creation conflict, this falls into a polling loop, checking every pollInterval
 * milliseconds if the index is migrated.
 *
 * @export
 * @param {Opts} opts
 * @prop {Migration} runMigration - A function that runs the index migration
 * @prop {IsMigrated} isMigrated - A function which checks if the index is already migrated
 * @prop {Logger} log - The migration logger
 * @prop {number} pollInterval - How often, in ms, to check that the index is migrated
 * @returns
 */
export declare function coordinateMigration(opts: Opts): Promise<MigrationResult>;
export {};
//# sourceMappingURL=migration_coordinator.d.ts.map