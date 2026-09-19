import React, { PureComponent } from 'react';
import { Logos } from 'opensearch-dashboards/public';
export interface ExitFullScreenButtonProps {
    onExitFullScreenMode: () => void;
    logos: Logos;
}
import './index.scss';
declare class ExitFullScreenButtonUi extends PureComponent<ExitFullScreenButtonProps> {
    onKeyDown: (e: KeyboardEvent) => void;
    UNSAFE_componentWillMount(): void;
    componentWillUnmount(): void;
    render(): React.JSX.Element;
}
export declare const ExitFullScreenButton: typeof ExitFullScreenButtonUi;
export {};
//# sourceMappingURL=exit_full_screen_button.d.ts.map