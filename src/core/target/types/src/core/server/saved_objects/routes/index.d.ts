import { InternalHttpServiceSetup } from '../../http';
import { Logger } from '../../logging';
import { SavedObjectConfig } from '../saved_objects_config';
import { IOpenSearchDashboardsMigrator } from '../migrations';
export declare function registerRoutes({ http, logger, config, migratorPromise, }: {
    http: InternalHttpServiceSetup;
    logger: Logger;
    config: SavedObjectConfig;
    migratorPromise: Promise<IOpenSearchDashboardsMigrator>;
}): void;
//# sourceMappingURL=index.d.ts.map