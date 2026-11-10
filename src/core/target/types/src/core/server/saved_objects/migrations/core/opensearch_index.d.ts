import { opensearchtypes } from '@opensearch-project/opensearch';
import { MigrationOpenSearchClient } from './migration_opensearch_client';
import { IndexMapping } from '../../mappings';
import { SavedObjectsMigrationVersion } from '../../types';
import { AliasAction, RawDoc } from './call_cluster';
import { SavedObjectsRawDocSource } from '../../serialization';
export interface FullIndexInfo {
    aliases: {
        [name: string]: object;
    };
    exists: boolean;
    indexName: string;
    mappings: IndexMapping;
}
/**
 * A slight enhancement to indices.get, that adds indexName, and validates that the
 * index mappings are somewhat what we expect.
 */
export declare function fetchInfo(client: MigrationOpenSearchClient, index: string): Promise<FullIndexInfo>;
/**
 * Creates a reader function that serves up batches of documents from the index. We aren't using
 * an async generator, as that feature currently breaks OpenSearchDashboards's tooling.
 *
 * @param {CallCluster} callCluster - The elastic search connection
 * @param {string} - The index to be read from
 * @param {opts}
 * @prop {number} batchSize - The number of documents to read at a time
 * @prop {string} scrollDuration - The scroll duration used for scrolling through the index
 */
export declare function reader(client: MigrationOpenSearchClient, index: string, { batchSize, scrollDuration }: {
    batchSize: number;
    scrollDuration: string;
}): () => Promise<opensearchtypes.SearchHit<SavedObjectsRawDocSource>[]>;
/**
 * Writes the specified documents to the index, throws an exception
 * if any of the documents fail to save.
 *
 * @param {CallCluster} callCluster
 * @param {string} index
 * @param {RawDoc[]} docs
 */
export declare function write(client: MigrationOpenSearchClient, index: string, docs: RawDoc[]): Promise<void>;
/**
 * Checks to see if the specified index is up to date. It does this by checking
 * that the index has the expected mappings and by counting
 * the number of documents that have a property which has migrations defined for it,
 * but which has not had those migrations applied. We don't want to cache the
 * results of this function (e.g. in context or somewhere), as it is important that
 * it performs the check *each* time it is called, rather than memoizing itself,
 * as this is used to determine if migrations are complete.
 *
 * @param {CallCluster} callCluster
 * @param {string} index
 * @param {SavedObjectsMigrationVersion} migrationVersion - The latest versions of the migrations
 */
export declare function migrationsUpToDate(client: MigrationOpenSearchClient, index: string, migrationVersion: SavedObjectsMigrationVersion, retryCount?: number): Promise<boolean>;
export declare function createIndex(client: MigrationOpenSearchClient, index: string, mappings?: IndexMapping): Promise<void>;
export declare function deleteIndex(client: MigrationOpenSearchClient, index: string): Promise<void>;
/**
 * Converts an index to an alias. The `alias` parameter is the desired alias name which currently
 * is a concrete index. This function will reindex `alias` into a new index, delete the `alias`
 * index, and then create an alias `alias` that points to the new index.
 *
 * @param {CallCluster} callCluster - The connection to OpenSearch
 * @param {FullIndexInfo} info - Information about the mappings and name of the new index
 * @param {string} alias - The name of the index being converted to an alias
 */
export declare function convertToAlias(client: MigrationOpenSearchClient, info: FullIndexInfo, alias: string, batchSize: number, script?: string): Promise<void>;
/**
 * Points the specified alias to the specified index. This is an exclusive
 * alias, meaning that it will only point to one index at a time, so we
 * remove any other indices from the alias.
 *
 * @param {CallCluster} callCluster
 * @param {string} index
 * @param {string} alias
 * @param {AliasAction[]} aliasActions - Optional actions to be added to the updateAliases call
 */
export declare function claimAlias(client: MigrationOpenSearchClient, index: string, alias: string, aliasActions?: AliasAction[]): Promise<void>;
//# sourceMappingURL=opensearch_index.d.ts.map