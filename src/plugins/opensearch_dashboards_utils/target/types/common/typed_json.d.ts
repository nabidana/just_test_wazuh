export declare type JsonValue = null | boolean | number | string | JsonObject | JsonArray;
export interface JsonObject {
    [key: string]: JsonValue;
}
export interface JsonArray extends Array<JsonValue> {
}
//# sourceMappingURL=typed_json.d.ts.map