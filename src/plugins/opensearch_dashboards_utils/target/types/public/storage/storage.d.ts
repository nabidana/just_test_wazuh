import { IStorage, IStorageWrapper } from './types';
export declare class Storage implements IStorageWrapper {
    store: IStorage;
    constructor(store: IStorage);
    get: (key: string) => any;
    set: (key: string, value: any) => false | void;
    remove: (key: string) => any;
    clear: () => void;
}
//# sourceMappingURL=storage.d.ts.map