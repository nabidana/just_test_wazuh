import { LogRecord } from '@osd/logging';
export interface Conversion {
    pattern: RegExp;
    convert: (record: LogRecord, highlight: boolean) => string;
    validate?: (input: string) => void;
}
//# sourceMappingURL=type.d.ts.map