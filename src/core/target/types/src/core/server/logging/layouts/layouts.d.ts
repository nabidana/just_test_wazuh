import { Layout } from '@osd/logging';
import { JsonLayoutConfigType } from './json_layout';
import { PatternLayoutConfigType } from './pattern_layout';
export declare type LayoutConfigType = PatternLayoutConfigType | JsonLayoutConfigType;
/** @internal */
export declare class Layouts {
    static configSchema: import("@osd/config-schema").Type<Readonly<{} & {
        kind: "json";
    }> | Readonly<{
        pattern?: string | undefined;
        highlight?: boolean | undefined;
    } & {
        kind: "pattern";
    }>>;
    /**
     * Factory method that creates specific `Layout` instances based on the passed `config` parameter.
     * @param config Configuration specific to a particular `Layout` implementation.
     * @returns Fully constructed `Layout` instance.
     */
    static create(config: LayoutConfigType): Layout;
}
//# sourceMappingURL=layouts.d.ts.map