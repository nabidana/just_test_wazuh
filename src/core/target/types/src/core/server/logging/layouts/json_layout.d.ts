import { LogRecord, Layout } from '@osd/logging';
/** @internal */
export interface JsonLayoutConfigType {
    kind: 'json';
}
/**
 * Layout that just converts `LogRecord` into JSON string.
 * @internal
 */
export declare class JsonLayout implements Layout {
    static configSchema: import("@osd/config-schema").ObjectType<{
        kind: import("@osd/config-schema").Type<"json">;
    }>;
    private static errorToSerializableObject;
    format(record: LogRecord): string;
}
//# sourceMappingURL=json_layout.d.ts.map