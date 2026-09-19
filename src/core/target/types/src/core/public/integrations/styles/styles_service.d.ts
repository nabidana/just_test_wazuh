import { IUiSettingsClient } from '../../ui_settings';
import { CoreService } from '../../../types';
interface StartDeps {
    uiSettings: IUiSettingsClient;
}
/** @internal */
export declare class StylesService implements CoreService {
    private uiSettingsSubscription?;
    setup(): Promise<void>;
    start({ uiSettings }: StartDeps): Promise<void>;
    stop(): Promise<void>;
}
export {};
//# sourceMappingURL=styles_service.d.ts.map