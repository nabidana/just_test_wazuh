import { InternalApplicationSetup, InternalApplicationStart } from '../application';
import type { HttpSetup, HttpStart } from '../http';
import type { CoreContext } from '../core_system';
import type { NotificationsSetup, NotificationsStart } from '../notifications';
import type { IUiSettingsClient } from '../ui_settings';
import type { InjectedMetadataSetup } from '../injected_metadata';
interface SetupDeps {
    application: InternalApplicationSetup;
    http: HttpSetup;
    injectedMetadata: InjectedMetadataSetup;
    notifications: NotificationsSetup;
}
interface StartDeps {
    application: InternalApplicationStart;
    http: HttpStart;
    notifications: NotificationsStart;
    uiSettings: IUiSettingsClient;
}
export declare class CoreApp {
    private readonly coreContext;
    private stopHistoryListening?;
    constructor(coreContext: CoreContext);
    setup({ http, application, injectedMetadata, notifications }: SetupDeps): void;
    start({ application, http, notifications, uiSettings }: StartDeps): void;
    stop(): void;
}
export {};
//# sourceMappingURL=core_app.d.ts.map