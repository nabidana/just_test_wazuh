import './collapsible_nav_group_enabled.scss';
import { EuiFlexGroupProps } from '@elastic/eui';
import React from 'react';
export interface CollapsibleNavGroupsLabelProps {
    collapsible: boolean;
    storageKey: string;
    storage?: Storage;
    label?: React.ReactNode;
    onToggle?: (isOpen: boolean) => void;
    'data-test-subj'?: EuiFlexGroupProps['data-test-subj'];
}
export declare function getIsCategoryOpen(storageKey: string, storage?: Storage): boolean;
export declare function CollapsibleNavGroupsLabel(props: CollapsibleNavGroupsLabelProps): React.JSX.Element;
//# sourceMappingURL=collapsible_nav_groups_label.d.ts.map