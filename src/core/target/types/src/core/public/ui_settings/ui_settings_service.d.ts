import { HttpSetup } from '../http';
import { InjectedMetadataSetup } from '../injected_metadata';
import { IUiSettingsClient } from './types';
interface UiSettingsServiceDeps {
    http: HttpSetup;
    injectedMetadata: InjectedMetadataSetup;
}
/** @internal */
export declare class UiSettingsService {
    private uiSettingsApi?;
    private uiSettingsClient?;
    private done$;
    setup({ http, injectedMetadata }: UiSettingsServiceDeps): IUiSettingsClient;
    start(): IUiSettingsClient;
    stop(): void;
}
export {};
//# sourceMappingURL=ui_settings_service.d.ts.map