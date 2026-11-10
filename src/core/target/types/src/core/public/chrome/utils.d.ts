import { AppCategory } from 'opensearch-dashboards/public';
import { ChromeNavLink } from './nav_links';
import { ChromeRegistrationNavLink, NavGroupItemInMap } from './nav_group';
declare type KeyOf<T> = keyof T;
export declare const sortBy: <T>(key: keyof T) => (a: T, b: T) => number;
export declare const LinkItemType: {
    readonly LINK: "link";
    readonly CATEGORY: "category";
    readonly PARENT_LINK: "parentLink";
};
export declare type LinkItem = {
    order?: number;
} & ({
    itemType: 'link';
    link: ChromeNavLink & ChromeRegistrationNavLink;
} | {
    itemType: 'parentLink';
    link?: ChromeNavLink & ChromeRegistrationNavLink;
    links: LinkItem[];
} | {
    itemType: 'category';
    category?: AppCategory;
    links?: LinkItem[];
});
export declare function getAllCategories(allCategorizedLinks: Record<string, Array<ChromeNavLink & ChromeRegistrationNavLink>>): Record<string, AppCategory | undefined>;
/**
 * This function accept an array of ChromeRegistrationNavLink and an array of ChromeNavLink
 * return an fulfilled array of items which are the merged result of the registerNavLinks and navLinks.
 * @param registerNavLinks ChromeRegistrationNavLink[]
 * @param navLinks ChromeNavLink[]
 * @returns Array<ChromeNavLink & ChromeRegistrationNavLink>
 */
export declare function fulfillRegistrationLinksToChromeNavLinks(registerNavLinks: ChromeRegistrationNavLink[], navLinks: ChromeNavLink[]): Array<ChromeNavLink & ChromeRegistrationNavLink>;
export declare const getOrderedLinks: (navLinks: ChromeNavLink[]) => ChromeNavLink[];
export declare const generateItemTypeByLink: (navLink: ChromeNavLink & ChromeRegistrationNavLink, navLinksGroupedByParentNavLink: Record<string, ChromeNavLink[]>) => LinkItem;
/**
 * This function accept navLinks and gives a grouped result for category / parent nav link
 * @param navLinks
 * @returns LinkItem[]
 */
export declare function getOrderedLinksOrCategories(navLinks: Array<ChromeNavLink & ChromeRegistrationNavLink>): LinkItem[];
export declare const getSortedNavLinks: (navLinks: ChromeNavLink[], enricher?: ((currentItem: LinkItem, parentItem?: ({
    order?: number | undefined;
} & {
    itemType: 'link';
    link: ChromeNavLink & ChromeRegistrationNavLink;
}) | ({
    order?: number | undefined;
} & {
    itemType: 'parentLink';
    link?: (ChromeNavLink & ChromeRegistrationNavLink) | undefined;
    links: LinkItem[];
}) | ({
    order?: number | undefined;
} & {
    itemType: 'category';
    category?: AppCategory | undefined;
    links?: LinkItem[] | undefined;
}) | undefined) => LinkItem) | undefined) => ChromeNavLink[];
export declare const getVisibleUseCases: (navGroupMap: Record<string, NavGroupItemInMap>) => NavGroupItemInMap[];
export declare function getIsCategoryOpen(id: string, storage: Storage): boolean;
export declare function setIsCategoryOpen(id: string, isOpen: boolean, storage: Storage): void;
export {};
//# sourceMappingURL=utils.d.ts.map