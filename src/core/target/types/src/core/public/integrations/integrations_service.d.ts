import { IUiSettingsClient } from '../ui_settings';
import { CoreService } from '../../types';
interface Deps {
    uiSettings: IUiSettingsClient;
}
/** @internal */
export declare class IntegrationsService implements CoreService {
    private readonly styles;
    private readonly moment;
    setup(): Promise<void>;
    start({ uiSettings }: Deps): Promise<void>;
    stop(): Promise<void>;
}
export {};
//# sourceMappingURL=integrations_service.d.ts.map