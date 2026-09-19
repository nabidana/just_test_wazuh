import { SavedObjectsClientContract, IUiSettingsClient } from 'src/core/server';
import { TestOpenSearchDashboardsUtils } from '../../../../test_helpers/osd_server';
import { LegacyAPICaller } from '../../../opensearch/';
interface AllServices {
    osdServer: TestOpenSearchDashboardsUtils['osdServer'];
    savedObjectsClient: SavedObjectsClientContract;
    callCluster: LegacyAPICaller;
    uiSettings: IUiSettingsClient;
}
export declare function startServers(): Promise<void>;
export declare function getServices(): AllServices;
export declare function stopServers(): Promise<void>;
export {};
//# sourceMappingURL=servers.d.ts.map