import { Observable } from 'rxjs';
import { UserProvidedValues, PublicUiSettingsParams } from 'src/core/server/types';
import { IUiSettingsClient, UiSettingsState } from './types';
import { UiSettingsApi } from './ui_settings_api';
interface UiSettingsClientParams {
    api: UiSettingsApi;
    defaults: Record<string, PublicUiSettingsParams>;
    initialSettings?: UiSettingsState;
    done$: Observable<unknown>;
}
export declare class UiSettingsClient implements IUiSettingsClient {
    private readonly update$;
    private readonly saved$;
    private readonly updateErrors$;
    private readonly api;
    private readonly defaults;
    private cache;
    constructor(params: UiSettingsClientParams);
    getAll(): Record<string, Pick<import("../../types/ui_settings").UiSettingsParams<unknown>, "description" | "options" | "type" | "value" | "name" | "scope" | "category" | "optionLabels" | "requiresPageReload" | "readonly" | "deprecation" | "validation"> & UserProvidedValues<any>>;
    getDefault<T = any>(key: string): T;
    get<T = any>(key: string, defaultOverride?: T): any;
    get$<T = any>(key: string, defaultOverride?: T): Observable<any>;
    set(key: string, value: any): Promise<boolean>;
    remove(key: string): Promise<boolean>;
    isDeclared(key: string): boolean;
    isDefault(key: string): boolean;
    isCustom(key: string): boolean;
    isOverridden(key: string): boolean;
    overrideLocalDefault(key: string, newDefault: any): void;
    getUpdate$(): Observable<{
        key: string;
        newValue: any;
        oldValue: any;
    }>;
    getSaved$(): Observable<{
        key: string;
        newValue: any;
        oldValue: any;
    }>;
    getUpdateErrors$(): Observable<Error>;
    private resolveValue;
    private assertUpdateAllowed;
    private update;
    private setLocally;
}
export {};
//# sourceMappingURL=ui_settings_client.d.ts.map