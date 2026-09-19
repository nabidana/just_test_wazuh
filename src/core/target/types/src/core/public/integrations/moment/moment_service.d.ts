import { IUiSettingsClient } from '../../ui_settings';
import { CoreService } from '../../../types';
interface StartDeps {
    uiSettings: IUiSettingsClient;
}
/** @internal */
export declare class MomentService implements CoreService {
    private uiSettingsSubscription?;
    setup(): Promise<void>;
    start({ uiSettings }: StartDeps): Promise<void>;
    stop(): Promise<void>;
}
export {};
//# sourceMappingURL=moment_service.d.ts.map