import React from 'react';
import { EuiPageProps } from '@elastic/eui';
import { HttpFetchError, ToastsStart } from 'opensearch-dashboards/public';
import { VisualizationItem } from './edit_action_dropdown';
interface Column {
    name: string;
    width?: string;
    actions?: object[];
}
export interface TableListViewProps {
    createButton?: JSX.Element;
    createItem?(): void;
    deleteItems?(items: object[]): Promise<void>;
    editItem?(item: object): void;
    visbuilderEditItem?(item: object): void;
    entityName: string;
    entityNamePlural: string;
    findItems(query: string): Promise<{
        total: number;
        hits: VisualizationItem[];
    }>;
    listingLimit: number;
    initialFilter: string;
    initialPageSize: number;
    noItemsFragment: JSX.Element;
    tableColumns: Column[];
    tableListTitle: string;
    toastNotifications: ToastsStart;
    /**
     * Id of the heading element describing the table. This id will be used as `aria-labelledby` of the wrapper element.
     * If the table is not empty, this component renders its own h1 element using the same id.
     */
    headingId?: string;
    restrictWidth?: boolean;
    paddingSize?: EuiPageProps['paddingSize'];
    showUpdatedUx?: boolean;
}
export interface TableListViewState {
    items: VisualizationItem[];
    hasInitialFetchReturned: boolean;
    isFetchingItems: boolean;
    isDeletingItems: boolean;
    showDeleteModal: boolean;
    showLimitError: boolean;
    fetchError?: HttpFetchError;
    filter: string;
    selectedIds: string[];
    totalItems: number;
    isCreatePopoverOpen: boolean;
}
declare class TableListView extends React.Component<TableListViewProps, TableListViewState> {
    private pagination;
    private _isMounted;
    constructor(props: TableListViewProps);
    UNSAFE_componentWillMount(): void;
    componentWillUnmount(): void;
    componentDidMount(): void;
    debouncedFetch: import("lodash").DebouncedFunc<(filter: string) => Promise<void>>;
    fetchItems: () => void;
    deleteSelectedItems: () => Promise<void>;
    closeDeleteModal: () => void;
    openDeleteModal: () => void;
    setFilter({ queryText }: {
        queryText: string;
    }): void;
    hasNoItems(): boolean;
    renderConfirmDeleteModal(): React.JSX.Element;
    renderListingLimitWarning(): React.JSX.Element | undefined;
    renderFetchError(): React.JSX.Element | undefined;
    renderNoItemsMessage(): React.JSX.Element;
    renderToolsLeft(): React.JSX.Element | undefined;
    renderTable(): React.JSX.Element;
    renderListingOrEmptyState(): React.JSX.Element;
    renderListing(): React.JSX.Element;
    renderPageContent(): React.JSX.Element | undefined;
    render(): React.JSX.Element;
}
export { TableListView };
export default TableListView;
//# sourceMappingURL=table_list_view.d.ts.map