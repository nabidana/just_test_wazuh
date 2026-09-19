import { OpenSearchClient } from '../../../opensearch';
import { Logger } from '../../../logging';
export interface MigrationOpenSearchClient {
    bulk: OpenSearchClient['bulk'];
    cat: {
        templates: OpenSearchClient['cat']['templates'];
    };
    clearScroll: OpenSearchClient['clearScroll'];
    count: OpenSearchClient['count'];
    indices: {
        create: OpenSearchClient['indices']['create'];
        delete: OpenSearchClient['indices']['delete'];
        deleteTemplate: OpenSearchClient['indices']['deleteTemplate'];
        get: OpenSearchClient['indices']['get'];
        getAlias: OpenSearchClient['indices']['getAlias'];
        refresh: OpenSearchClient['indices']['refresh'];
        updateAliases: OpenSearchClient['indices']['updateAliases'];
    };
    reindex: OpenSearchClient['reindex'];
    search: OpenSearchClient['search'];
    scroll: OpenSearchClient['scroll'];
    tasks: {
        get: OpenSearchClient['tasks']['get'];
    };
    deleteByQuery: OpenSearchClient['deleteByQuery'];
}
export declare function createMigrationOpenSearchClient(client: OpenSearchClient, log: Logger, delay?: number): MigrationOpenSearchClient;
//# sourceMappingURL=migration_opensearch_client.d.ts.map