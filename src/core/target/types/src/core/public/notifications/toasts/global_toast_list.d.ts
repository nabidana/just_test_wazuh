import React from 'react';
import * as Rx from 'rxjs';
import { Toast } from './toasts_api';
interface Props {
    toasts$: Rx.Observable<Toast[]>;
    dismissToast: (toastId: string) => void;
}
interface State {
    toasts: Toast[];
}
export declare class GlobalToastList extends React.Component<Props, State> {
    state: State;
    private subscription?;
    componentDidMount(): void;
    componentWillUnmount(): void;
    render(): React.JSX.Element;
}
export {};
//# sourceMappingURL=global_toast_list.d.ts.map