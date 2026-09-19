import React from 'react';
export declare type ResizerMouseEvent = React.MouseEvent<HTMLButtonElement, MouseEvent>;
export declare type ResizerKeyDownEvent = React.KeyboardEvent<HTMLButtonElement>;
export interface Props {
    onKeyDown: (eve: ResizerKeyDownEvent) => void;
    onMouseDown: (eve: ResizerMouseEvent) => void;
    className?: string;
}
export declare function Resizer(props: Props): React.JSX.Element;
//# sourceMappingURL=resizer.d.ts.map