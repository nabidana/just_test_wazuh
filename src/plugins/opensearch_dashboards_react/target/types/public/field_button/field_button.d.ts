import './field_button.scss';
import React, { ReactNode, HTMLAttributes, ButtonHTMLAttributes } from 'react';
import { CommonProps } from '@elastic/eui';
export interface FieldButtonProps extends HTMLAttributes<HTMLDivElement> {
    /**
     * Label for the button
     */
    fieldName: ReactNode;
    /**
     * Icon representing the field type.
     * Recommend using FieldIcon
     */
    fieldIcon?: ReactNode;
    /**
     * An optional node to place inside and at the end of the <button>
     */
    fieldInfoIcon?: ReactNode;
    /**
     * An optional node to place outside of and to the right of the <button>
     */
    fieldAction?: ReactNode;
    /**
     * Adds a forced focus ring to the whole component
     */
    isActive?: boolean;
    /**
     * Styles the component differently to indicate it is draggable
     */
    isDraggable?: boolean;
    /**
     * Use the small size in condensed areas
     */
    size?: ButtonSize;
    className?: string;
    /**
     * The component will render a `<button>` when provided an `onClick`
     */
    onClick?: () => void;
    /**
     * Applies to the inner `<button>`  or `<div>`
     */
    dataTestSubj?: string;
    /**
     * Pass more button props to the `<button>` element
     */
    buttonProps?: ButtonHTMLAttributes<HTMLButtonElement> & CommonProps;
}
declare const sizeToClassNameMap: {
    readonly s: "osdFieldButton--small";
    readonly m: null;
};
export declare type ButtonSize = keyof typeof sizeToClassNameMap;
export declare const SIZES: ("m" | "s")[];
export declare function FieldButton({ size, isActive, fieldIcon, fieldName, fieldInfoIcon, fieldAction, className, isDraggable, onClick, dataTestSubj, buttonProps, ...rest }: FieldButtonProps): React.JSX.Element;
export {};
//# sourceMappingURL=field_button.d.ts.map