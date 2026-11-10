import { SavedObjectsClientContract } from '../saved_objects/types';
import { Logger } from '../logging';
import { IUiSettingsClient, UiSettingsParams, UiSettingScope } from './types';
export interface UiSettingsServiceOptions {
    type: string;
    id: string;
    buildNum: number;
    savedObjectsClient: SavedObjectsClientContract;
    overrides?: Record<string, any>;
    defaults?: Record<string, UiSettingsParams>;
    log: Logger;
}
interface UserProvidedValue<T = unknown> {
    userValue?: T;
    isOverridden?: boolean;
}
declare type UserProvided<T = unknown> = Record<string, UserProvidedValue<T>>;
export declare class UiSettingsClient implements IUiSettingsClient {
    private readonly type;
    private readonly id;
    private readonly buildNum;
    private readonly savedObjectsClient;
    private readonly overrides;
    private readonly defaults;
    private readonly log;
    constructor(options: UiSettingsServiceOptions);
    getRegistered(): Record<string, Pick<UiSettingsParams<unknown>, "description" | "options" | "type" | "value" | "name" | "scope" | "category" | "optionLabels" | "requiresPageReload" | "readonly" | "deprecation" | "validation">>;
    getOverrideOrDefault(key: string): unknown;
    getDefault(key: string): unknown;
    get<T = any>(key: string, scope?: UiSettingScope): Promise<T>;
    getAll<T = any>(scope?: UiSettingScope): Promise<Record<string, T>>;
    getUserProvided<T = unknown>(scope?: UiSettingScope): Promise<UserProvided<T>>;
    setMany(changes: Record<string, any>, scope?: UiSettingScope): Promise<void>;
    set(key: string, value: any, scope?: UiSettingScope): Promise<void>;
    remove(key: string, scope?: UiSettingScope): Promise<void>;
    removeMany(keys: string[], scope?: UiSettingScope): Promise<void>;
    isOverridden(key: string): boolean;
    private assertUpdateAllowed;
    private getRaw;
    private validateKey;
    private validateScope;
    private onWriteHook;
    private onReadHook;
    /**
     * group change into different scopes
     * @param changes ui setting changes
     * @returns [global, user]
     */
    private groupChanges;
    private write;
    private read;
    private isIgnorableError;
    private translateChanges;
}
export {};
//# sourceMappingURL=ui_settings_client.d.ts.map