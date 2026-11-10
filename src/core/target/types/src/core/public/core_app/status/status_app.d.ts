import React, { Component } from 'react';
import { HttpSetup } from '../../http';
import { NotificationsSetup } from '../../notifications';
import { ProcessedServerResponse } from './lib';
interface StatusAppProps {
    http: HttpSetup;
    notifications: NotificationsSetup;
}
interface StatusAppState {
    loading: boolean;
    fetchError: boolean;
    data: ProcessedServerResponse | null;
}
export declare class StatusApp extends Component<StatusAppProps, StatusAppState> {
    private _isMounted;
    constructor(props: StatusAppProps);
    componentDidMount(): Promise<void>;
    componentWillUnmount(): void;
    render(): React.JSX.Element;
}
export {};
//# sourceMappingURL=status_app.d.ts.map