import React from 'react';
export interface VisualizationItem {
    typeTitle: string;
    id?: string;
    version?: number;
    overlays?: any;
}
interface EditActionDropdownProps {
    item: VisualizationItem;
    editItem?(item: VisualizationItem): void;
    visbuilderEditItem?(item: VisualizationItem): void;
}
export declare const EditActionDropdown: React.FC<EditActionDropdownProps>;
export {};
//# sourceMappingURL=edit_action_dropdown.d.ts.map