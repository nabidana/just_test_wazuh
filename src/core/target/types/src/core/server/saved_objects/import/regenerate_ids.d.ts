import { SavedObject } from '../types';
/**
 * Takes an array of saved objects and returns an importIdMap of randomly-generated new IDs.
 *
 * @param objects The saved objects to generate new IDs for.
 */
export declare const regenerateIds: (objects: SavedObject[], dataSourceId: string | undefined) => Map<string, {
    id: string;
    omitOriginId?: boolean | undefined;
}>;
//# sourceMappingURL=regenerate_ids.d.ts.map