import { CoreService } from '../../types';
import { CoreContext } from '../core_context';
import { InternalSavedObjectsServiceSetup } from '../saved_objects';
import { InternalHttpServiceSetup } from '../http';
import { InternalUiSettingsServiceSetup, InternalUiSettingsServiceStart } from './types';
export interface SetupDeps {
    http: InternalHttpServiceSetup;
    savedObjects: InternalSavedObjectsServiceSetup;
}
/** @internal */
export declare class UiSettingsService implements CoreService<InternalUiSettingsServiceSetup, InternalUiSettingsServiceStart> {
    private readonly coreContext;
    private readonly log;
    private readonly config$;
    private readonly uiSettingsDefaults;
    private overrides;
    constructor(coreContext: CoreContext);
    setup({ http, savedObjects }: SetupDeps): Promise<InternalUiSettingsServiceSetup>;
    start(): Promise<InternalUiSettingsServiceStart>;
    stop(): Promise<void>;
    private getScopedClientFactory;
    private register;
    private validatesDefinitions;
    private validatesOverrides;
    private validateAndUpdateConfiguredDefaults;
}
//# sourceMappingURL=ui_settings_service.d.ts.map