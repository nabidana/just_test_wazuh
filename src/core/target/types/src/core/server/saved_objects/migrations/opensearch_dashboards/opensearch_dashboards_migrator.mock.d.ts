/// <reference types="jest" />
import { OpenSearchDashboardsMigrator } from './opensearch_dashboards_migrator';
import { SavedObjectsType } from '../../types';
export declare const mockOpenSearchDashboardsMigrator: {
    create: ({ types, }?: {
        types: SavedObjectsType[];
    }) => jest.Mocked<Pick<OpenSearchDashboardsMigrator, "runMigrations" | "getStatus$" | "getActiveMappings" | "migrateDocument">>;
};
//# sourceMappingURL=opensearch_dashboards_migrator.mock.d.ts.map