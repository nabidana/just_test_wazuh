import React, { CSSProperties, ReactNode } from 'react';
export interface Props {
    children: ReactNode[] | ReactNode;
    className?: string;
    /**
     * initial width of the panel in percents
     */
    initialWidth?: number;
    style?: CSSProperties;
}
export declare function Panel({ children, className, initialWidth, style }: Props): React.JSX.Element;
//# sourceMappingURL=panel.d.ts.map