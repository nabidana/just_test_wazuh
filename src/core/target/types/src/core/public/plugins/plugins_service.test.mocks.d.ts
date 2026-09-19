/// <reference types="jest" />
import { PluginName } from 'opensearch-dashboards/server';
import { Plugin } from './plugin';
export declare type MockedPluginInitializer = jest.Mock<Plugin<unknown, Record<string, unknown>>, any>;
export declare const mockPluginInitializerProvider: jest.Mock<MockedPluginInitializer, [
    PluginName
]>;
//# sourceMappingURL=plugins_service.test.mocks.d.ts.map