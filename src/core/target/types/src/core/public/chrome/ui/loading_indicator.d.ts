import React from 'react';
import { HttpStart } from '../../http';
export interface LoadingIndicatorProps {
    loadingCount$: ReturnType<HttpStart['getLoadingCount$']>;
    showAsBar?: boolean;
}
export declare class LoadingIndicator extends React.Component<LoadingIndicatorProps, {
    visible: boolean;
}> {
    static defaultProps: {
        showAsBar: boolean;
    };
    private loadingCountSubscription?;
    state: {
        visible: boolean;
    };
    componentDidMount(): void;
    componentWillUnmount(): void;
    render(): React.JSX.Element;
}
//# sourceMappingURL=loading_indicator.d.ts.map