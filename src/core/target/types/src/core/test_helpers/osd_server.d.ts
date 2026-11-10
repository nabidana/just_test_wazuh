import { Client } from 'elasticsearch';
import supertest from 'supertest';
import { CoreStart } from 'src/core/server';
import { LegacyAPICaller } from '../server/opensearch';
import { CliArgs } from '../server/config';
import { Root } from '../server/root';
import OsdServer from '../../legacy/server/osd_server';
export declare type HttpMethod = 'delete' | 'get' | 'head' | 'post' | 'put';
export declare function createRootWithSettings(settings: Record<string, any>, cliArgs?: Partial<CliArgs>): Root;
/**
 * Returns supertest request attached to the core's internal native Node server.
 * @param root
 * @param method
 * @param path
 */
export declare function getSupertest(root: Root, method: HttpMethod, path: string): supertest.Test;
/**
 * Creates an instance of Root with default configuration
 * tailored for unit tests.
 *
 * @param {Object} [settings={}] Any config overrides for this instance.
 * @returns {Root}
 */
export declare function createRoot(settings?: {}, cliArgs?: Partial<CliArgs>): Root;
/**
 *  Creates an instance of Root, including all of the core plugins,
 *  with default configuration tailored for unit tests.
 *
 *  @param {Object} [settings={}] Any config overrides for this instance.
 *  @returns {Root}
 */
export declare function createRootWithCorePlugins(settings?: {}): Root;
/**
 * Returns `osdServer` instance used in the "legacy" OpenSearch Dashboards.
 * @param root
 */
export declare function getOsdServer(root: Root): OsdServer;
export declare const request: Record<HttpMethod, (root: Root, path: string) => ReturnType<typeof getSupertest>>;
export interface TestOpenSearchServer {
    getStartTimeout: () => number;
    start: (opensearchArgs: string[], opensearchEnvVars: Record<string, string>) => Promise<void>;
    stop: () => Promise<void>;
    cleanup: () => Promise<void>;
    getClient: () => Client;
    getCallCluster: () => LegacyAPICaller;
    getUrl: () => string;
}
export interface TestOpenSearchUtils {
    stop: () => Promise<void>;
    opensearch: TestOpenSearchServer;
    hosts: string[];
    username: string;
    password: string;
}
export interface TestOpenSearchDashboardsUtils {
    root: Root;
    coreStart: CoreStart;
    osdServer: OsdServer;
    stop: () => Promise<void>;
}
export interface TestUtils {
    startOpenSearch: () => Promise<TestOpenSearchUtils>;
    startOpenSearchDashboards: () => Promise<TestOpenSearchDashboardsUtils>;
}
/**
 * Creates an instance of the Root, including all of the core "legacy" plugins,
 * with default configuration tailored for unit tests, and starts opensearch.
 *
 * @param options
 * @prop settings Any config overrides for this instance.
 * @prop adjustTimeout A function(t) => this.timeout(t) that adjust the timeout of a
 * test, ensuring the test properly waits for the server to boot without timing out.
 */
export declare function createTestServers({ adjustTimeout, settings, }: {
    adjustTimeout: (timeout: number) => void;
    settings?: {
        opensearch?: {
            license: 'oss' | 'basic' | 'gold' | 'trial';
            [key: string]: any;
        };
        osd?: {
            /**
             * An array of directories paths, passed in via absolute path strings
             */
            plugins?: {
                paths: string[];
                [key: string]: any;
            };
            [key: string]: any;
        };
        /**
         * Users passed in via this prop are created in OpenSearch in adition to the standard opensearch and opensearchDashboards users.
         * Note, this prop is ignored when using an oss, or basic license
         */
        users?: Array<{
            username: string;
            password: string;
            roles: string[];
        }>;
    };
}): TestUtils;
//# sourceMappingURL=osd_server.d.ts.map