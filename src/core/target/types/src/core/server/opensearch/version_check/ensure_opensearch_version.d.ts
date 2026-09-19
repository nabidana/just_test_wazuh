/**
 * OpenSearch and OpenSearch Dashboards versions are locked, so OpenSearch Dashboards should require that OpenSearch has the same version as
 * that defined in OpenSearch Dashboards's package.json.
 */
import { Observable } from 'rxjs';
import { Logger } from '../../logging';
import type { OpenSearchClient } from '../client';
/**
 * Checks if all nodes in the cluster have the same cluster id node attribute
 * that is supplied through the healthcheck param. This node attribute is configurable
 * in opensearch_dashboards.yml. It can also filter attributes out by key-value pair.
 * If all nodes have the same cluster id then we do not fan out the healthcheck and use '_local' node
 * If there are multiple cluster ids then we return an array of node ids to check.
 * If the supplied node attribute is missing then we return null and use default fan out behavior
 * @param {OpenSearchClient} internalClient
 * @param {OptimizedHealthcheck} healthcheck
 * @returns {string|string[]|null} '_local' if all nodes have the same cluster_id, array of node ids if different cluster_id, null if no cluster_id or nodes returned
 */
export declare const getNodeId: (internalClient: OpenSearchClient, healthcheck: OptimizedHealthcheck) => Promise<'_local' | string[] | null>;
export interface PollOpenSearchNodesVersionOptions {
    internalClient: OpenSearchClient;
    optimizedHealthcheck?: OptimizedHealthcheck;
    log: Logger;
    opensearchDashboardsVersion: string;
    ignoreVersionMismatch: boolean;
    opensearchVersionCheckInterval: number;
}
interface NodeInfo {
    version: string;
    ip: string;
    http?: {
        publish_address: string;
    };
    name: string;
}
export interface NodesInfo {
    nodes: {
        [key: string]: NodeInfo;
    };
}
export interface NodesVersionCompatibility {
    isCompatible: boolean;
    message?: string;
    incompatibleNodes: NodeInfo[];
    warningNodes: NodeInfo[];
    opensearchDashboardsVersion: string;
    nodesInfoRequestError?: Error;
}
export interface OptimizedHealthcheck {
    id?: string;
    filters?: {
        [key: string]: string;
    };
}
export declare function mapNodesVersionCompatibility(nodesInfo: NodesInfo, opensearchDashboardsVersion: string, ignoreVersionMismatch: boolean): NodesVersionCompatibility;
export declare const pollOpenSearchNodesVersion: ({ internalClient, optimizedHealthcheck, log, opensearchDashboardsVersion, ignoreVersionMismatch, opensearchVersionCheckInterval: healthCheckInterval, }: PollOpenSearchNodesVersionOptions) => Observable<NodesVersionCompatibility>;
export {};
//# sourceMappingURL=ensure_opensearch_version.d.ts.map