import { ReactElement } from 'react';
import { mount } from 'enzyme';
import { AppMountParameters } from '../types';
import { MockedMounterTuple, Mountable } from '../test_types';
declare type Dom = ReturnType<typeof mount> | null;
declare type Renderer = () => Dom | Promise<Dom>;
export declare const createRenderer: (element: ReactElement | null) => Renderer;
export declare const createAppMounter: ({ appId, html, appRoute, exactRoute, extraMountHook, }: {
    appId: string;
    html?: string | undefined;
    appRoute?: string | undefined;
    exactRoute?: boolean | undefined;
    extraMountHook?: ((params: AppMountParameters) => void) | undefined;
}) => MockedMounterTuple;
export declare function getUnmounter(app: Mountable): any;
export {};
//# sourceMappingURL=utils.d.ts.map