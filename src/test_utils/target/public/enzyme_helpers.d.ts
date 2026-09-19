/// <reference types="cheerio" />
/// <reference types="@osd/i18n/node_modules/@types/react-intl" />
/**
 * Components using the @osd/i18n module require access to the intl context.
 * This is not available when mounting single components in Enzyme.
 * These helper functions aim to address that and wrap a valid,
 * intl context around them.
 */
import { InjectedIntl } from '@osd/i18n/react';
import { ReactWrapper } from 'enzyme';
import React, { ReactElement, ValidationMap } from 'react';
/**
 * When using @osd/i18n `injectI18n` on components, props.intl is required.
 */
export declare function nodeWithIntlProp<T>(node: ReactElement<T>): ReactElement<T & {
    intl: InjectedIntl;
}>;
/**
 *  Creates the wrapped IntlProvider instance
 *
 *  @param node The React element or cheerio wrapper
 *  @return The wrapped IntlProvider instance
 */
export declare function wrapWithIntl<T>(node: ReactElement<T>): React.JSX.Element;
/**
 *  Creates the wrapper instance using shallow with provided intl object into context
 *
 *  @param node The React element or cheerio wrapper
 *  @param options properties to pass into shallow wrapper
 *  @return The wrapper instance around the rendered output with intl object in context
 */
export declare function shallowWithIntl<T>(node: ReactElement<T>, { context, childContextTypes, ...props }?: {
    context?: any;
    childContextTypes?: ValidationMap<any>;
}): import("enzyme").ShallowWrapper<T & {
    intl: ReactIntl.InjectedIntl;
}, Readonly<{}>, React.Component<{}, {}, any>>;
/**
 *  Creates the wrapper instance using mount with provided intl object into context
 *
 *  @param node The React element or cheerio wrapper
 *  @param options properties to pass into mount wrapper
 *  @return The wrapper instance around the rendered output with intl object in context
 */
export declare function mountWithIntl<T>(node: ReactElement<T>, { context, childContextTypes, ...props }?: {
    context?: any;
    childContextTypes?: ValidationMap<any>;
}): ReactWrapper<T & {
    intl: ReactIntl.InjectedIntl;
}, Readonly<{}>, React.Component<{}, {}, any>>;
/**
 *  Creates the wrapper instance using render with provided intl object into context
 *
 *  @param node The React element or cheerio wrapper
 *  @param options properties to pass into render wrapper
 *  @return The wrapper instance around the rendered output with intl object in context
 */
export declare function renderWithIntl<T>(node: ReactElement<T>, { context, childContextTypes, ...props }?: {
    context?: any;
    childContextTypes?: ValidationMap<any>;
}): cheerio.Cheerio;
export declare const nextTick: () => Promise<unknown>;
export declare function shallowWithI18nProvider<T>(child: ReactElement<T>): import("enzyme").ShallowWrapper<Readonly<{}> & Readonly<{
    children?: React.ReactNode;
}>, Readonly<{}>, React.Component<{}, {}, any>>;
export declare function mountWithI18nProvider<T>(child: ReactElement<T>): ReactWrapper<import("enzyme").HTMLAttributes, any, React.Component<{}, {}, any>>;
//# sourceMappingURL=enzyme_helpers.d.ts.map