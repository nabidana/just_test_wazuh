import { InjectedMetadataSetup } from '../injected_metadata';
interface StartDeps {
    injectedMetadata: InjectedMetadataSetup;
}
/** @internal */
export declare class DocLinksService {
    setup(): void;
    start({ injectedMetadata }: StartDeps): DocLinksStart;
}
/** @public */
export interface DocLinksStart {
    readonly DOC_LINK_VERSION: string;
    readonly OPENSEARCH_WEBSITE_URL: string;
    readonly WAZUH_DOC_VERSION: string;
    readonly links: {
        readonly wazuh: {
            readonly index: string;
        };
        readonly opensearch: {
            readonly introduction: string;
            readonly installation: {
                readonly base: string;
                readonly compatibility: string;
                readonly docker: string;
                readonly dockerSecurity: string;
                readonly helm: string;
                readonly tar: string;
                readonly ansible: string;
                readonly settings: string;
                readonly plugins: string;
            };
            readonly configuration: string;
            readonly cluster: {
                readonly base: string;
                readonly naming: string;
                readonly set_attribute: string;
                readonly build_cluster: string;
                readonly config_host: string;
                readonly start: string;
                readonly config_shard: string;
                readonly setup_hot_arch: string;
            };
            readonly indexData: {
                readonly base: string;
                readonly naming: string;
                readonly read_data: string;
                readonly update_data: string;
                readonly delete_data: string;
            };
            readonly indexAlias: {
                readonly base: string;
                readonly create_alias: string;
                readonly add_remove_index: string;
                readonly manage_alias: string;
                readonly filtered_alias: string;
                readonly alias_option: string;
            };
            readonly dataStreams: string;
            readonly aggregations: {
                readonly base: string;
                readonly metric: {
                    readonly base: string;
                    readonly types: string;
                    readonly sum: string;
                    readonly cardinality: string;
                    readonly value_count: string;
                    readonly stats: string;
                    readonly percentile: string;
                    readonly geo_bound: string;
                    readonly top_hits: string;
                    readonly scripted_metric: string;
                };
                readonly bucket: {
                    readonly base: string;
                    readonly terms: string;
                    readonly smapler: string;
                    readonly significant_terms: string;
                    readonly missing: string;
                    readonly histogram: string;
                    readonly range: string;
                    readonly filter: string;
                    readonly global: string;
                    readonly geo: string;
                    readonly adjacency_matrix: string;
                    readonly nested: string;
                };
                readonly pipeline: {
                    readonly base: string;
                    readonly syntax: string;
                    readonly types: string;
                    readonly avg_bucket: string;
                    readonly stats_bucket: string;
                    readonly bucket_script: string;
                    readonly bucket_sort: string;
                    readonly cumulative_sum: string;
                    readonly derivative: string;
                    readonly moving_avg: string;
                    readonly serial_diff: string;
                };
            };
            readonly indexTemplates: {
                readonly base: string;
                readonly composable: string;
                readonly options: string;
            };
            readonly reindexData: {
                readonly base: string;
                readonly all: string;
                readonly remote: string;
                readonly subset: string;
                readonly combine: string;
                readonly unique: string;
                readonly transform: string;
                readonly update: string;
                readonly source: string;
                readonly destination: string;
            };
            readonly queryDSL: {
                readonly base: string;
                readonly term: {
                    readonly base: string;
                    readonly terms: string;
                    readonly ids: string;
                    readonly range: string;
                    readonly prefix: string;
                    readonly exists: string;
                    readonly wildcards: string;
                    readonly regex: string;
                };
                readonly fullText: {
                    readonly base: string;
                    readonly match: string;
                    readonly multi_match: string;
                    readonly match_phrase: string;
                    readonly common_terms: string;
                    readonly query_string: string;
                    readonly options: string;
                };
                readonly boolQuery: string;
            };
            readonly searchTemplate: {
                readonly base: string;
                readonly create: string;
                readonly execute: string;
                readonly advanced_operation: string;
                readonly multiple_search: string;
                readonly manage: string;
            };
            readonly searchExperience: {
                readonly base: string;
                readonly autocomplete: string;
                readonly paginate: string;
                readonly scroll: string;
                readonly sort: string;
                readonly highlight_match: string;
            };
            readonly logs: {
                readonly base: string;
                readonly application_log: string;
                readonly slow_log: string;
                readonly deprecation_log: string;
            };
            readonly snapshotRestore: {
                readonly base: string;
                readonly register: string;
                readonly take_snapshot: string;
                readonly restore_snapshot: string;
                readonly security_plugin: string;
            };
            readonly supportedUnits: string;
            readonly commonParameters: string;
            readonly popularAPI: string;
            readonly restAPI: {
                readonly base: string;
                readonly indexAPI: {
                    readonly base: string;
                    readonly create: string;
                    readonly exists: string;
                    readonly delete: string;
                    readonly get: string;
                    readonly close: string;
                };
            };
            readonly dateMath: string;
            readonly openSearchForum: string;
        };
        readonly opensearchDashboards: {
            readonly introduction: string;
            readonly installation: {
                readonly base: string;
                readonly docker: string;
                readonly tar: string;
                readonly helm: string;
                readonly tls: string;
                readonly plugins: string;
            };
            readonly mapTiles: string;
            readonly ganttCharts: string;
            readonly reporting: string;
            readonly notebooks: {
                readonly base: string;
                readonly notebook_tutorial: string;
                readonly paragraph_tutorial: string;
                readonly sample_notebook: string;
                readonly create_report: string;
            };
            readonly dql: {
                readonly base: string;
                readonly terms_query: string;
                readonly boolean_query: string;
                readonly date_query: string;
                readonly nested_query: string;
            };
            readonly browser: string;
            readonly dataSource: {
                readonly guide: string;
                readonly s3DataSource: string;
            };
            readonly visualize: Record<string, string>;
            readonly dashboards: Record<string, string>;
            readonly management: Record<string, string>;
            readonly workspace: Record<string, string>;
        };
        readonly noDocumentation: {
            readonly auditbeat: string;
            readonly filebeat: string;
            readonly metricbeat: string;
            readonly heartbeat: string;
            readonly logstash: string;
            readonly functionbeat: string;
            readonly winlogbeat: string;
            readonly siem: string;
            readonly indexPatterns: {
                readonly loadingData: string;
                readonly introduction: string;
            };
            readonly scriptedFields: {
                readonly scriptFields: string;
                readonly scriptAggs: string;
                readonly painless: string;
                readonly painlessApi: string;
                readonly painlessSyntax: string;
                readonly luceneExpressions: string;
            };
            readonly management: Record<string, string>;
            readonly addData: string;
            readonly vega: string;
            readonly savedObject: {
                readonly manageSavedObject: string;
            };
            readonly clusterAPI: {
                readonly clusterRoute: string;
                readonly clusterState: string;
                readonly clusterStats: string;
                readonly clusterPending: string;
            };
            readonly mappingTypes: string;
            readonly moduleScripting: string;
            readonly ingest: {
                readonly appendProcessor: string;
                readonly bytesProcessor: string;
                readonly ingestCircleProcessor: string;
                readonly csvProcessor: string;
                readonly convertProcessor: string;
                readonly dataProcessor: string;
                readonly dataIndexNamProcessor: string;
                readonly dissectProcessor: string;
                readonly dotExpandProcessor: string;
                readonly dropProcessor: string;
                readonly failProcessor: string;
                readonly foreachProcessor: string;
                readonly geoIPProcessor: string;
                readonly grokProcessor: string;
                readonly gusbProcessor: string;
                readonly htmlstripProcessor: string;
                readonly inferenceProcessor: string;
                readonly joinProcessor: string;
                readonly jsonProcessor: string;
                readonly kvProcessor: string;
                readonly lowecaseProcessor: string;
                readonly pipelineProcessor: string;
                readonly removeProcessor: string;
                readonly renameProcessor: string;
                readonly scriptProcessor: string;
                readonly setProcessor: string;
                readonly securityUserProcessor: string;
                readonly splitProcessor: string;
                readonly sortProcessor: string;
                readonly trimProcessor: string;
                readonly uppercaseProcessor: string;
                readonly urldecodeProcessor: string;
                readonly userAgentProcessor: string;
            };
            readonly indexAPI: {
                readonly indexAnalyze: string;
                readonly indexClearCache: string;
                readonly indexClone: string;
                readonly indexSynced: string;
                readonly indexFlush: string;
                readonly indexForceMerge: string;
                readonly indexSetting: string;
                readonly indexUpgrade: string;
                readonly indexUpdateSetting: string;
                readonly indexRecovery: string;
                readonly indexRefresh: string;
                readonly indexRollover: string;
                readonly indexSegment: string;
                readonly indexShardStore: string;
                readonly indexShrink: string;
                readonly indexSplit: string;
                readonly indexStats: string;
            };
            readonly nodes: {
                readonly info: string;
                readonly hotThreads: string;
                readonly reloadSecuritySetting: string;
                readonly nodeStats: string;
                readonly usage: string;
            };
            readonly reIndex: {
                readonly rethrottle: string;
            };
            readonly apmServer: string;
            readonly tutorial: {
                readonly loadDataTutorial: string;
                readonly visualizeTutorial: string;
            };
            readonly scroll: {
                readonly clear_scroll: string;
            };
            readonly documentAPI: {
                readonly delete_by_query: string;
                readonly multiTermVector: string;
                readonly termVector: string;
                readonly update_by_query_rethrottle: string;
            };
            readonly filed_caps: string;
            readonly painless_execute: string;
            readonly search: {
                readonly search: string;
                readonly searchRankEval: string;
                readonly searchShards: string;
                readonly searchFieldCap: string;
            };
            readonly snapshot: {
                readonly deleteSnapshot: string;
                readonly deleteRepository: string;
                readonly cleanup: string;
                readonly veirfyRepository: string;
            };
            readonly lucene: {
                readonly base: string;
            };
            readonly sql: {
                readonly base: string;
            };
            readonly ppl: {
                readonly base: string;
            };
            readonly sqlPplLimitation: {
                readonly base: string;
            };
        };
    };
}
export {};
//# sourceMappingURL=doc_links_service.d.ts.map