import { ReactNode } from 'react';
/**
 * search input match with `@` will handled by saved objects search command
 * search input match with `>` will handled by plugin customized commands
 */
export declare const SAVED_OBJECTS_SYMBOL = "@";
export declare const COMMANDS_SYMBOL = ">";
export declare const SearchCommandTypes: {
    readonly PAGES: {
        readonly description: string;
        readonly alias: null;
    };
    readonly SAVED_OBJECTS: {
        readonly description: string;
        readonly alias: "@";
    };
};
export declare type SearchCommandKeyTypes = keyof typeof SearchCommandTypes;
/**
 * @experimental
 */
export interface GlobalSearchCommand {
    /**
     * unique id of this command
     */
    id: string;
    /**
     * search command type
     * @type {SearchCommandTypes}
     */
    type: SearchCommandKeyTypes;
    /**
     * do the search and return search result with a React element
     * @param value search query
     * @param callback callback function when search is done
     */
    run(value: string, callback?: () => void): Promise<ReactNode[]>;
}
export interface GlobalSearchServiceSetupContract {
    registerSearchCommand(searchCommand: GlobalSearchCommand): void;
}
export interface GlobalSearchServiceStartContract {
    getAllSearchCommands(): GlobalSearchCommand[];
}
/**
 * {@link GlobalSearchCommand | APIs} for registering new global search command when do search from header search bar .
 *
 * @example
 * Register a GlobalSearchCommand to search pages
 * ```jsx
 * chrome.globalSearch.registerSearchCommand({
 *   id: 'test',
 *   type: SearchObjectTypes.PAGES,
 *   run: async (query) => {
 *     return [];
 *   },
 * })
 * ```
 *
 * @experimental
 */
export declare class GlobalSearchService {
    private searchCommands;
    private registerSearchCommand;
    setup(): GlobalSearchServiceSetupContract;
    start(): GlobalSearchServiceStartContract;
}
//# sourceMappingURL=global_search_service.d.ts.map