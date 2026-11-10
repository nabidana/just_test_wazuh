import React from 'react';
import { GlobalSearchCommand } from '../../global_search';
interface Props {
    globalSearchCommands: GlobalSearchCommand[];
    panel?: boolean;
    onSearchResultClick?: () => void;
}
export declare const HeaderSearchBarIcon: ({ globalSearchCommands }: Props) => React.JSX.Element;
export declare const HeaderSearchBar: ({ globalSearchCommands, panel, onSearchResultClick }: Props) => React.JSX.Element;
export {};
//# sourceMappingURL=header_search_bar.d.ts.map