import { SavedObject as SavedObjectType } from '../../server';
import { SavedObjectsClientContract } from './saved_objects_client';
/**
 * This class is a very simple wrapper for SavedObjects loaded from the server
 * with the {@link SavedObjectsClient}.
 *
 * It provides basic functionality for creating/saving/deleting saved objects,
 * but doesn't include any type-specific implementations.
 *
 * @public
 */
export declare class SimpleSavedObject<T = unknown> {
    private client;
    attributes: T;
    _version?: SavedObjectType<T>['version'];
    id: SavedObjectType<T>['id'];
    type: SavedObjectType<T>['type'];
    migrationVersion: SavedObjectType<T>['migrationVersion'];
    error: SavedObjectType<T>['error'];
    references: SavedObjectType<T>['references'];
    updated_at: SavedObjectType<T>['updated_at'];
    workspaces: SavedObjectType<T>['workspaces'];
    constructor(client: SavedObjectsClientContract, { id, type, version, attributes, error, references, migrationVersion, updated_at: updateAt, workspaces, }: SavedObjectType<T>);
    get(key: string): any;
    set(key: string, value: any): T;
    has(key: string): boolean;
    save(): Promise<SimpleSavedObject<T>>;
    delete(): Promise<{}>;
}
//# sourceMappingURL=simple_saved_object.d.ts.map