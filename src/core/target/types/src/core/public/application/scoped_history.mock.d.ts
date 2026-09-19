/// <reference types="jest" />
import { Location } from 'history';
import { ScopedHistory } from './scoped_history';
export declare type ScopedHistoryMock = jest.Mocked<ScopedHistory>;
export declare const scopedHistoryMock: {
    create: ({ pathname, search, hash, key, state, }?: Partial<Location>) => jest.Mocked<ScopedHistory<unknown>>;
};
//# sourceMappingURL=scoped_history.mock.d.ts.map