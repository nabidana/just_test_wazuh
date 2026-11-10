import React, { Component, ReactNode } from 'react';
import { EuiFormRowDisplayKeys } from '@elastic/eui/src/components/form/form_row/form_row';
import { EuiDualRangeProps } from '@elastic/eui/src/components/form/range/dual_range';
export declare type Value = EuiDualRangeProps['value'];
export declare type ValueMember = EuiDualRangeProps['value'][0];
interface Props extends Omit<EuiDualRangeProps, 'value' | 'onChange' | 'min' | 'max'> {
    value?: Value;
    allowEmptyRange?: boolean;
    label?: string | ReactNode;
    formRowDisplay?: EuiFormRowDisplayKeys;
    onChange?: (val: [string, string]) => void;
    min?: number;
    max?: number;
}
interface State {
    isValid?: boolean;
    errorMessage?: string;
    value: [ValueMember, ValueMember];
    prevValue?: Value;
}
export declare class ValidatedDualRange extends Component<Props> {
    static defaultProps: {
        fullWidth: boolean;
        allowEmptyRange: boolean;
    };
    static getDerivedStateFromProps(nextProps: Props, prevState: State): {
        value: [React.ReactText, React.ReactText] | undefined;
        prevValue: [React.ReactText, React.ReactText] | undefined;
        isValid: boolean;
        errorMessage: string;
    } | null;
    state: State;
    _onChange: (value: [React.ReactText, React.ReactText]) => void;
    render(): React.JSX.Element;
}
export {};
//# sourceMappingURL=validated_dual_range.d.ts.map