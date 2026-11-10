import { Permissions } from '../server/saved_objects';
export declare enum PermissionModeId {
    Read = "read",
    ReadAndWrite = "read+write",
    Owner = "owner"
}
export interface WorkspaceAttribute {
    id: string;
    name: string;
    description?: string;
    features?: string[];
    color?: string;
    icon?: string;
    reserved?: boolean;
    uiSettings?: Record<string, any>;
    lastUpdatedTime?: string;
}
export interface WorkspaceAttributeWithPermission extends WorkspaceAttribute {
    permissions?: Permissions;
    permissionMode?: PermissionModeId;
}
export declare enum WorkspacePermissionMode {
    Read = "read",
    Write = "write",
    LibraryRead = "library_read",
    LibraryWrite = "library_write"
}
export interface WorkspaceFindOptions {
    page?: number;
    perPage?: number;
    search?: string;
    searchFields?: string[];
    sortField?: string;
    sortOrder?: string;
    permissionModes?: WorkspacePermissionMode[];
}
//# sourceMappingURL=workspace.d.ts.map