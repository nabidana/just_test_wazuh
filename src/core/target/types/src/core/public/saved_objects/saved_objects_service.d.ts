import { CoreService } from 'src/core/types';
import { CoreStart } from 'src/core/public';
import { SavedObjectsClientContract } from './saved_objects_client';
/**
 * @public
 */
export interface SavedObjectsStart {
    /** {@link SavedObjectsClient} */
    client: SavedObjectsClientContract;
}
export declare class SavedObjectsService implements CoreService<void, SavedObjectsStart> {
    setup(): Promise<void>;
    start({ http }: {
        http: CoreStart['http'];
    }): Promise<SavedObjectsStart>;
    stop(): Promise<void>;
}
//# sourceMappingURL=saved_objects_service.d.ts.map