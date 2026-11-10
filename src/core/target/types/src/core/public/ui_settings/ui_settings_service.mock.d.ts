/// <reference types="jest" />
import { UiSettingsService } from './';
import { IUiSettingsClient } from './types';
export declare const uiSettingsServiceMock: {
    create: () => jest.Mocked<Pick<UiSettingsService, "start" | "stop" | "setup">>;
    createSetupContract: () => jest.Mocked<IUiSettingsClient>;
    createStartContract: () => jest.Mocked<IUiSettingsClient>;
};
//# sourceMappingURL=ui_settings_service.mock.d.ts.map