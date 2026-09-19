/// <reference types="jest" />
import type { PublicMethodsOf } from '@osd/utility-types';
import { AppUnmount, Mounter } from './types';
import { ApplicationService } from './application_service';
/** @internal */
export declare type ApplicationServiceContract = PublicMethodsOf<ApplicationService>;
/** @internal */
export declare type MockedUnmount = jest.Mocked<AppUnmount>;
/** @internal */
export interface Mountable {
    mounter: MockedMounter;
    unmount: MockedUnmount;
}
/** @internal */
export declare type MockedMounter = jest.Mocked<Mounter>;
/** @internal */
export declare type MockedMounterTuple = [string, Mountable];
/** @internal */
export declare type MockedMounterMap = Map<string, Mountable>;
/** @internal */
export declare type MockLifecycle<T extends keyof ApplicationService, U = Parameters<ApplicationService[T]>[0]> = {
    [P in keyof U]: jest.Mocked<U[P]>;
};
//# sourceMappingURL=test_types.d.ts.map