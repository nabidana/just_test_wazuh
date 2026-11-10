import React, { Component } from 'react';
import * as Rx from 'rxjs';
import { ChromeBadge } from '../../chrome_service';
interface Props {
    badge$: Rx.Observable<ChromeBadge | undefined>;
}
interface State {
    badge: ChromeBadge | undefined;
}
export declare class HeaderBadge extends Component<Props, State> {
    private subscription?;
    constructor(props: Props);
    componentDidMount(): void;
    componentDidUpdate(prevProps: Props): void;
    componentWillUnmount(): void;
    render(): React.JSX.Element | null;
    private subscribe;
    private unsubscribe;
}
export {};
//# sourceMappingURL=header_badge.d.ts.map