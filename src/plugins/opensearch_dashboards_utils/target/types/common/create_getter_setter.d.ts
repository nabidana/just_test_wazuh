export declare type Get<T> = () => T;
export declare type Set<T> = (value: T) => void;
export declare const createGetterSetter: <T extends object>(name: string) => [Get<T>, Set<T>];
//# sourceMappingURL=create_getter_setter.d.ts.map