import React, { PureComponent } from 'react';
import './index.scss';
/**
 * Return a memoized markdown rendering function that use the specified
 * whiteListedRules (deprecated) (use allowListedRules) and openLinksInNewTab configurations.
 * @param {Array of Strings} whiteListedRules - allow list of markdown rules
 * @param {Array of Strings} allowListedRules - allow list of markdown rules
 * list of rules can be found at https://github.com/markdown-it/markdown-it/issues/361
 * @param {Boolean} openLinksInNewTab
 * @return {Function} Returns an Object to use with dangerouslySetInnerHTML
 * with the rendered markdown HTML
 */
export declare const markdownFactory: ((whiteListedRules?: string[], allowListedRules?: string[], openLinksInNewTab?: boolean) => (markdown: string) => string) & import("lodash").MemoizedFunction;
export interface MarkdownProps extends React.HTMLAttributes<HTMLDivElement> {
    className?: string;
    markdown?: string;
    openLinksInNewTab?: boolean;
    /** @deprecated use allowListedRules: */
    whiteListedRules?: string[];
    allowListedRules?: string[];
}
export declare class Markdown extends PureComponent<MarkdownProps> {
    render(): React.JSX.Element;
}
export default Markdown;
//# sourceMappingURL=markdown.d.ts.map