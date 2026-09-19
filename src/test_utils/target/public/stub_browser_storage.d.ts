export declare class StubBrowserStorage implements Storage {
    private keys;
    private values;
    private size;
    private sizeLimit;
    get length(): number;
    key(i: number): string;
    getItem(key: string): string | null;
    setItem(key: string, value: string): void;
    removeItem(key: string): void;
    clear(): void;
    setStubbedSizeLimit(sizeLimit: number): void;
    getStubbedSizeLimit(): number;
    getStubbedSize(): number;
    private getSizeOfAddition;
    private getSizeOfRemoval;
    private updateSize;
}
//# sourceMappingURL=stub_browser_storage.d.ts.map