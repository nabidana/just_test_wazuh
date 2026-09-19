export declare function createStateHash(json: string, existingJsonProvider?: (hash: string) => string | null): string;
export declare function isStateHash(str: string): boolean;
export declare function retrieveState<State>(stateHash: string): State;
export declare function persistState<State>(state: State): string;
//# sourceMappingURL=state_hash.d.ts.map