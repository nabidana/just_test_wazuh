import { SavedObject, SavedObjectReference, SavedObjectsClientContract } from '../types';
import { VisualizationObject } from './types';
/**
 * Given a Vega spec, the new datasource (by name), and spacing, update the Vega spec to add the new datasource name to each local cluster query
 *
 * @param {string} spec - the stringified Vega spec (HJSON or JSON)
 * @param {string} newDataSourceName - the datasource name to append
 * @param {number} [spacing=2] - how large the indenting should be after updating the spec (should be set to > 0 for a readable spec)
 */
export interface UpdateDataSourceNameInVegaSpecProps {
    spec: string;
    newDataSourceName: string;
    spacing?: number;
}
/**
 * Given a visualization saved object and datasource id, return the updated visState and references if the visualization was a TSVB visualization
 * @param {VisualizationObject} object
 * @param {string} dataSourceId
 * @returns {{visState: string, references: SavedObjectReference[]}} - the updated stringified visState and references
 */
export declare const getUpdatedTSVBVisState: (object: VisualizationObject, dataSourceId: string) => {
    visState: string;
    references: SavedObjectReference[];
};
export declare const updateDataSourceNameInVegaSpec: (props: UpdateDataSourceNameInVegaSpecProps) => string;
export declare const updateDataSourceNameInTimeline: (timelineExpression: string, dataSourceTitle: string) => string;
export declare const getDataSourceTitleFromId: (dataSourceId: string, savedObjectsClient: SavedObjectsClientContract) => Promise<any>;
export declare const extractVegaSpecFromSavedObject: (savedObject: SavedObject) => any;
export declare const extractTimelineExpression: (savedObject: SavedObject) => any;
export declare function findReferenceDataSourceForObject(savedObject: SavedObject, savedObjects: Map<string, SavedObject>, visited?: Set<string>): Set<string>;
//# sourceMappingURL=utils.d.ts.map