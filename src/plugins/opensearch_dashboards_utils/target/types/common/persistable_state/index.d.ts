import { SavedObjectReference } from '../../../../core/types';
export declare type SerializableValue = string | number | boolean | null | undefined | SerializableState;
export declare type Serializable = SerializableValue | SerializableValue[];
export declare type SerializableState = {
    [key: string]: Serializable;
};
export interface PersistableState<P extends SerializableState = SerializableState> {
    /**
     *  function to extract telemetry information
     * @param state
     * @param collector
     */
    telemetry: (state: P, collector: Record<string, any>) => Record<string, any>;
    /**
     * inject function receives state and a list of references and should return state with references injected
     * default is identity function
     * @param state
     * @param references
     */
    inject: (state: P, references: SavedObjectReference[]) => P;
    /**
     * extract function receives state and should return state with references extracted and array of references
     * default returns same state with empty reference array
     * @param state
     */
    extract: (state: P) => {
        state: P;
        references: SavedObjectReference[];
    };
}
export declare type PersistableStateDefinition<P extends SerializableState = SerializableState> = Partial<PersistableState<P>>;
//# sourceMappingURL=index.d.ts.map