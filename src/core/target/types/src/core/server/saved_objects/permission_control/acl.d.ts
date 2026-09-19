export declare enum PrincipalType {
    Users = "users",
    Groups = "groups"
}
export interface Principals {
    users?: string[];
    groups?: string[];
}
export declare type Permissions = Record<string, Principals>;
export interface TransformedPermission {
    type: string;
    name: string;
    permissions: string[];
}
export declare class ACL {
    private permissions?;
    constructor(initialPermissions?: Permissions);
    /**
     * A function that parses the permissions object to check whether the specific principal has the specific permission types or not
     *
     * @param {Array} permissionTypes permission types
     * @param {Object} principals the users or groups
     * @returns true if the principal has the specified permission types, false if the principal has no permission
     *
     * @public
     */
    hasPermission(permissionTypes: string[], principals: Principals): boolean;
    /**
     * A permissions object build function that adds principal with specific permission to the object
     *
     * This function is used to contruct a new permissions object or add principals with specified permissions to
     * the existing permissions object. The usage is:
     *
     * const permissionObject = new ACL()
     *  .addPermission(['write', 'library_write'], {
     *     users: ['user2'],
     *   })
     *   .addPermission(['write', 'library_write'], {
     *     groups: ['group1'],
     *   })
     *   .getPermissions();
     *
     * @param {Array} permissionTypes the permission types
     * @param {Object} principals the users or groups
     * @returns the permissions object
     *
     * @public
     */
    addPermission(permissionTypes: string[], principals: Principals): this;
    /**
     * A permissions object build function that removes specific permission of specific principal from the object
     *
     * This function is used to remove principals with specified permissions to
     * the existing permissions object. The usage is:
     *
     * const newPermissionObject = new ACL()
     *  .removePermission(['write', 'library_write'], {
     *     users: ['user2'],
     *   })
     *   .removePermission(['write', 'library_write'], {
     *     groups: ['group1'],
     *   })
     *   .getPermissions();
     *
     * @param {Array} permissionTypes the permission types
     * @param {Object} principals the users or groups
     * @returns the permissions object
     *
     * @public
     */
    removePermission(permissionTypes: string[], principals: Principals): this;
    /**
     * A function that transforms permissions format, change the format from permissionType->principals to principal->permissionTypes,
     * which is used to clearyly dispaly user/group list and their granted permissions in the UI
     *
     * for example:
     * the original permissions object is:   {
     *     read: {
     *         users:['user1']
     *     },
     *     write:{
     *         groups:['group1']
     *     }
     * }
     *
     * the transformed permissions object will be: [
     *     {type:'users', name:'user1', permissions:['read']},
     *     {type:'groups', name:'group1', permissions:['write']},
     * ]
     *
     * @returns the flat list of the permissions object
     *
     * @public
     */
    toFlatList(): TransformedPermission[];
    /**
     * A permissions object build function that resets the permissions object
     *
     * @public
     */
    resetPermissions(): void;
    /**
     * A function that gets the premissions object
     *
     * @public
     */
    getPermissions(): Record<string, Principals> | undefined;
    /**
     * A function that generates query DSL by the specific conditions, used for fetching saved objects from the saved objects index
     *
     * @param {Array} permissionTypes the permission types
     * @param {Object} principals the users or groups
     * @param {String | Array} savedObjectType saved object type, such as workspace, index-pattern etc.
     * @returns the generated query DSL
     *
     * @public
     * @static
     */
    static generateGetPermittedSavedObjectsQueryDSL(permissionTypes: string[], principals: Principals, savedObjectType?: string | string[]): {
        query: {
            match_none: {};
            bool?: undefined;
        };
    } | {
        query: {
            bool: any;
            match_none?: undefined;
        };
    };
}
//# sourceMappingURL=acl.d.ts.map