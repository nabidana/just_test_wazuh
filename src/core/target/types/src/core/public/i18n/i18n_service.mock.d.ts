/// <reference types="jest" />
import { I18nService, I18nStart } from './i18n_service';
export declare const i18nServiceMock: {
    create: () => jest.Mocked<Pick<I18nService, "start" | "stop" | "getContext">>;
    createStartContract: () => jest.Mocked<I18nStart>;
};
//# sourceMappingURL=i18n_service.mock.d.ts.map