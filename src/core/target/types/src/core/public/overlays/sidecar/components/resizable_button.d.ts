import React from 'react';
import './resizable_button.scss';
import { ISidecarConfig } from '../sidecar_service';
interface Props {
    onResize: (size: number) => void;
    flyoutSize: number;
    dockedMode: ISidecarConfig['dockedMode'] | undefined;
}
export declare const MIN_SIDECAR_SIZE = 350;
export declare const ResizableButton: ({ dockedMode, onResize, flyoutSize }: Props) => React.JSX.Element;
export {};
//# sourceMappingURL=resizable_button.d.ts.map