import { IDynamicConfigStoreClientFactory, OpenSearchServiceStart } from 'opensearch-dashboards/server';
import { OpenSearchConfigStoreClient } from './opensearch_config_store_client';
export declare class OpenSearchDynamicConfigStoreFactory implements IDynamicConfigStoreClientFactory {
    #private;
    constructor(opensearch: OpenSearchServiceStart);
    /**
     * TODO Once the OpenSearch client is implemented, finish implementing factory method
     */
    create(): OpenSearchConfigStoreClient;
}
//# sourceMappingURL=opensearch_config_store_factory.d.ts.map