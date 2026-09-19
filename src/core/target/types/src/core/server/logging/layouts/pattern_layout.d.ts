import { LogRecord, Layout } from '@osd/logging';
export declare const patternSchema: import("@osd/config-schema").Type<string>;
/** @internal */
export interface PatternLayoutConfigType {
    kind: 'pattern';
    highlight?: boolean;
    pattern?: string;
}
/**
 * Layout that formats `LogRecord` using the `pattern` string with optional
 * color highlighting (eg. to make log messages easier to read in the terminal).
 * @internal
 */
export declare class PatternLayout implements Layout {
    private readonly pattern;
    private readonly highlight;
    static configSchema: import("@osd/config-schema").ObjectType<{
        highlight: import("@osd/config-schema").Type<boolean | undefined>;
        kind: import("@osd/config-schema").Type<"pattern">;
        pattern: import("@osd/config-schema").Type<string | undefined>;
    }>;
    constructor(pattern?: string, highlight?: boolean);
    /**
     * Formats `LogRecord` into a string based on the specified `pattern` and `highlighting` options.
     * @param record Instance of `LogRecord` to format into string.
     */
    format(record: LogRecord): string;
}
//# sourceMappingURL=pattern_layout.d.ts.map