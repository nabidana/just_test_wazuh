import React from 'react';
import { MountPoint } from '../../../types';
interface Props {
    extension?: MountPoint<HTMLDivElement>;
}
export declare class HeaderExtension extends React.Component<Props> {
    private readonly ref;
    private unrender?;
    componentDidMount(): void;
    componentDidUpdate(prevProps: Props): void;
    componentWillUnmount(): void;
    render(): React.JSX.Element;
    private renderExtension;
    private unrenderExtension;
}
export {};
//# sourceMappingURL=header_extension.d.ts.map