import { monaco } from '@osd/monaco';
import darkTheme from '@elastic/eui/dist/eui_theme_dark.json';
import lightTheme from '@elastic/eui/dist/eui_theme_light.json';
export declare function createTheme(euiTheme: typeof darkTheme | typeof lightTheme, selectionBackgroundColor: string): monaco.editor.IStandaloneThemeData;
declare const DARK_THEME: monaco.editor.IStandaloneThemeData;
declare const LIGHT_THEME: monaco.editor.IStandaloneThemeData;
export { DARK_THEME, LIGHT_THEME };
//# sourceMappingURL=editor_theme.d.ts.map