import React from 'react';
import { PanelRegistry } from './registry';
interface ContextProps {
    children: any;
    registry: PanelRegistry;
}
export declare function PanelContextProvider({ children, registry }: ContextProps): React.JSX.Element;
export declare const usePanelContext: () => {
    registry: PanelRegistry;
};
export {};
//# sourceMappingURL=context.d.ts.map