import React, { ComponentType } from 'react';
import { Store } from 'redux';
import { ReactWrapper } from 'enzyme';
import { MemoryRouterConfig } from './types';
interface Config {
    Component: ComponentType;
    memoryRouter: MemoryRouterConfig;
    store: Store | null;
    props: any;
    onRouter: (router: any) => void;
}
export declare const mountComponentSync: (config: Config) => ReactWrapper;
export declare const mountComponentAsync: (config: Config) => Promise<ReactWrapper>;
export declare const getJSXComponentWithProps: (Component: ComponentType, props: any) => React.JSX.Element;
export {};
//# sourceMappingURL=mount_component.d.ts.map