import { OpenSearchClient } from '../../../opensearch/';
declare const methods: readonly ["bulk", "create", "delete", "get", "index", "mget", "search", "update", "updateByQuery"];
declare type MethodName = typeof methods[number];
export declare type RepositoryOpenSearchClient = Pick<OpenSearchClient, MethodName>;
export declare function createRepositoryOpenSearchClient(client: OpenSearchClient): RepositoryOpenSearchClient;
export {};
//# sourceMappingURL=repository_opensearch_client.d.ts.map