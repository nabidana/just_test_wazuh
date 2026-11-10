/// <reference types="jest" />
/// <reference types="@testing-library/jest-dom" />
import { ISavedObjectTypeRegistry, SavedObjectTypeRegistry } from './saved_objects_type_registry';
export declare const typeRegistryMock: {
    create: () => jest.Mocked<ISavedObjectTypeRegistry & Pick<SavedObjectTypeRegistry, 'registerType'>>;
};
//# sourceMappingURL=saved_objects_type_registry.mock.d.ts.map