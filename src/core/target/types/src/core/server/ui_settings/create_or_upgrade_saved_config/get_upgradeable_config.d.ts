import { SavedObjectsClientContract } from '../../saved_objects/types';
/**
 *  Find the most recent SavedConfig that is upgradeable to the specified version
 *  @param {Object} options
 *  @property {SavedObjectsClient} savedObjectsClient
 *  @property {string} version
 *  @return {Promise<SavedConfig|undefined>}
 */
export declare function getUpgradeableConfig({ savedObjectsClient, version, }: {
    savedObjectsClient: SavedObjectsClientContract;
    version: string;
}): Promise<import("../..").SavedObjectsFindResult<unknown> | undefined>;
//# sourceMappingURL=get_upgradeable_config.d.ts.map