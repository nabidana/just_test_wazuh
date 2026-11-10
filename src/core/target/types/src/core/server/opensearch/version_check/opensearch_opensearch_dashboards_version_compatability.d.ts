/**
 * Checks for the compatibilitiy between OpenSearch and OpenSearchDashboards versions
 * 1. Major version differences will never work together.
 * 2. Older versions of OpenSearch won't work with newer versions of OpenSearch Dashboards.
 */
export declare function opensearchVersionCompatibleWithOpenSearchDashboards(opensearchVersion: string, opensearchDashboardsVersion: string): boolean;
export declare function opensearchVersionEqualsOpenSearchDashboards(nodeVersion: string, opensearchDashboardsVersion: string): boolean | null;
//# sourceMappingURL=opensearch_opensearch_dashboards_version_compatability.d.ts.map