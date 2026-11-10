import { SavedObjectsType } from './types';
/**
 * See {@link SavedObjectTypeRegistry} for documentation.
 *
 * @public
 */
export declare type ISavedObjectTypeRegistry = Omit<SavedObjectTypeRegistry, 'registerType'>;
/**
 * Registry holding information about all the registered {@link SavedObjectsType | saved object types}.
 *
 * @public
 */
export declare class SavedObjectTypeRegistry {
    private readonly types;
    /**
     * Register a {@link SavedObjectsType | type} inside the registry.
     * A type can only be registered once. subsequent calls with the same type name will throw an error.
     */
    registerType(type: SavedObjectsType): void;
    /**
     * Return the {@link SavedObjectsType | type} definition for given type name.
     */
    getType(type: string): SavedObjectsType | undefined;
    /**
     * Returns all visible {@link SavedObjectsType | types}.
     *
     * A visible type is a type that doesn't explicitly define `hidden=true` during registration.
     */
    getVisibleTypes(): SavedObjectsType[];
    /**
     * Return all {@link SavedObjectsType | types} currently registered, including the hidden ones.
     *
     * To only get the visible types (which is the most common use case), use `getVisibleTypes` instead.
     */
    getAllTypes(): SavedObjectsType[];
    /**
     * Return all {@link SavedObjectsType | types} currently registered that are importable/exportable.
     */
    getImportableAndExportableTypes(): SavedObjectsType[];
    /**
     * Returns whether the type is namespace-agnostic (global);
     * resolves to `false` if the type is not registered
     */
    isNamespaceAgnostic(type: string): boolean;
    /**
     * Returns whether the type is single-namespace (isolated);
     * resolves to `true` if the type is not registered
     */
    isSingleNamespace(type: string): boolean;
    /**
     * Returns whether the type is multi-namespace (shareable);
     * resolves to `false` if the type is not registered
     */
    isMultiNamespace(type: string): boolean;
    /**
     * Returns the `hidden` property for given type, or `false` if
     * the type is not registered.
     */
    isHidden(type: string): boolean;
    /**
     * Returns the `indexPattern` property for given type, or `undefined` if
     * the type is not registered.
     */
    getIndex(type: string): string | undefined;
    /**
     * Returns the `management.importableAndExportable` property for given type, or
     * `false` if the type is not registered or does not define a management section.
     */
    isImportableAndExportable(type: string): boolean;
}
//# sourceMappingURL=saved_objects_type_registry.d.ts.map