/// <reference types="react" />
import { ReactWrapper } from 'enzyme';
declare type Matcher = '=' | '~=' | '|=' | '^=' | '$=' | '*=';
/**
 * Find node which matches a specific test subject selector. Returns ReactWrappers around DOM element,
 * https://github.com/airbnb/enzyme/tree/master/docs/api/ReactWrapper.
 * Common use cases include calling simulate or getDOMNode on the returned ReactWrapper.
 *
 * The ~= matcher looks for the value in space-separated list, allowing support for multiple data-test-subj
 * values on a single element. See https://www.w3.org/TR/selectors-3/#attribute-selectors for more
 * info on the other possible matchers.
 *
 * @param reactWrapper The React wrapper to search in
 * @param testSubjectSelector The data test subject selector
 * @param matcher optional matcher
 */
export declare const findTestSubject: <T = string, U = unknown>(reactWrapper: ReactWrapper<U, {}, import("react").Component<{}, {}, any>>, testSubjectSelector: T, matcher?: Matcher) => ReactWrapper<import("enzyme").HTMLAttributes, {}, import("react").Component<{}, {}, any>>;
export {};
//# sourceMappingURL=find_test_subject.d.ts.map