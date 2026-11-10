export declare class PriorityCollection<T> {
    private readonly array;
    add(priority: number, value: T): void;
    has(predicate: (value: T) => boolean): boolean;
    toPrioritizedArray(): T[];
}
//# sourceMappingURL=priority_collection.d.ts.map