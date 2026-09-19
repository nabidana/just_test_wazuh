import React from 'react';
import * as Rx from 'rxjs';
import { FatalErrorInfo } from './get_error_info';
interface Props {
    opensearchDashboardsVersion: string;
    buildNumber: number;
    errorInfo$: Rx.Observable<FatalErrorInfo>;
}
interface State {
    errors: FatalErrorInfo[];
}
export declare class FatalErrorsScreen extends React.Component<Props, State> {
    state: State;
    private subscription?;
    componentDidMount(): void;
    componentWillUnmount(): void;
    render(): React.JSX.Element;
    private onClickGoBack;
    private onClickClearSession;
}
export {};
//# sourceMappingURL=fatal_errors_screen.d.ts.map