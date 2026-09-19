/// <reference types="jest" />
import { IRouter } from './router';
export declare type RouterMock = jest.Mocked<IRouter>;
declare function create({ routerPath }?: {
    routerPath?: string;
}): RouterMock;
export declare const mockRouter: {
    create: typeof create;
};
export {};
//# sourceMappingURL=router.mock.d.ts.map