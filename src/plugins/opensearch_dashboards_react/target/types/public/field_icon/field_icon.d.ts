import React from 'react';
import { EuiTokenProps } from '@elastic/eui';
export interface FieldIconProps extends Omit<EuiTokenProps, 'iconType'> {
    type: 'boolean' | 'conflict' | 'date' | 'geo_point' | 'geo_shape' | 'ip' | 'murmur3' | 'number' | '_source' | 'string' | string | 'nested';
    label?: string;
    scripted?: boolean;
}
export declare const typeToEuiIconMap: Partial<Record<string, EuiTokenProps>>;
/**
 * Field token icon used across the app
 */
export declare function FieldIcon({ type, label, size, scripted, className, ...rest }: FieldIconProps): React.JSX.Element;
//# sourceMappingURL=field_icon.d.ts.map