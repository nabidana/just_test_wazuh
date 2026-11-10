/// <reference types="jest" />
/// <reference types="@testing-library/jest-dom" />
import { SavedObjectMigrationContext } from './types';
import { SavedObjectsMigrationLogger } from './core';
export declare const createSavedObjectsMigrationLoggerMock: () => jest.Mocked<SavedObjectsMigrationLogger>;
export declare const migrationMocks: {
    createContext: () => jest.Mocked<SavedObjectMigrationContext>;
};
//# sourceMappingURL=mocks.d.ts.map