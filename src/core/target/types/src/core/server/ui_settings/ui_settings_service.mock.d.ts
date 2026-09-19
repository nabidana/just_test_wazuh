/// <reference types="jest" />
import { IUiSettingsClient, InternalUiSettingsServiceSetup } from './types';
import { UiSettingsService } from './ui_settings_service';
export declare const uiSettingsServiceMock: {
    createSetupContract: () => jest.Mocked<InternalUiSettingsServiceSetup>;
    createStartContract: () => jest.Mocked<import("./types").UiSettingsServiceStart>;
    createClient: () => jest.Mocked<IUiSettingsClient>;
    create: () => jest.Mocked<Pick<UiSettingsService, "start" | "stop" | "setup">>;
};
//# sourceMappingURL=ui_settings_service.mock.d.ts.map