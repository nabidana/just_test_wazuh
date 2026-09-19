/// <reference types="jest" />
import type { PublicMethodsOf } from '@osd/utility-types';
import { RenderingService as Service } from '../rendering_service';
import { InternalRenderingServiceSetup } from '../types';
declare type IRenderingService = PublicMethodsOf<Service>;
export declare const setupMock: jest.Mocked<InternalRenderingServiceSetup>;
export declare const mockSetup: jest.Mock<any, any>;
export declare const mockStop: jest.Mock<any, any>;
export declare const mockIsUrlValid: jest.Mock<any, any>;
export declare const mockIsTitleValid: jest.Mock<any, any>;
export declare const mockRenderingService: jest.Mocked<IRenderingService>;
export declare const RenderingService: jest.Mock<Pick<Service, "stop" | "setup" | "isUrlValid" | "isTitleValid">, [DeeplyMockedKeys<import("../../core_context").CoreContext>]>;
export {};
//# sourceMappingURL=rendering_service.d.ts.map