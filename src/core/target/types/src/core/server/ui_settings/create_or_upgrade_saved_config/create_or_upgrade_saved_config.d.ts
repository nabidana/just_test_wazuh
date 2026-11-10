import { SavedObjectsClientContract } from '../../saved_objects/types';
import { Logger } from '../../logging';
import { UiSettingScope } from '../types';
interface Options {
    savedObjectsClient: SavedObjectsClientContract;
    version: string;
    buildNum: number;
    log: Logger;
    handleWriteErrors: boolean;
    scope?: UiSettingScope;
}
export declare function createOrUpgradeSavedConfig(options: Options): Promise<Record<string, any> | undefined>;
export {};
//# sourceMappingURL=create_or_upgrade_saved_config.d.ts.map