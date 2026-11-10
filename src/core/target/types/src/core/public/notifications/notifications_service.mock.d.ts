/// <reference types="jest" />
import { NotificationsService, NotificationsSetup, NotificationsStart } from './notifications_service';
export declare const notificationServiceMock: {
    create: () => jest.Mocked<Pick<NotificationsService, "start" | "stop" | "setup">>;
    createSetupContract: () => MockedKeys<NotificationsSetup>;
    createStartContract: () => MockedKeys<NotificationsStart>;
};
//# sourceMappingURL=notifications_service.mock.d.ts.map