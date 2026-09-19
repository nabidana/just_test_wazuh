export declare type Serializable = string | number | boolean | null | SerializableArray | SerializableRecord;
export interface SerializableArray extends Array<Serializable> {
}
export interface SerializableRecord extends Record<string, Serializable> {
}
//# sourceMappingURL=serializable.d.ts.map