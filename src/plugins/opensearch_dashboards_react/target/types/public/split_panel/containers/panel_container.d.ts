import React, { ReactNode } from 'react';
export interface Props {
    children: ReactNode;
    className?: string;
    resizerClassName?: string;
    onPanelWidthChange?: (arrayOfPanelWidths: number[]) => any;
}
export declare function PanelsContainer({ children, className, onPanelWidthChange, resizerClassName, }: Props): React.JSX.Element;
//# sourceMappingURL=panel_container.d.ts.map