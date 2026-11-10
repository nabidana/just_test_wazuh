export declare enum ThemeColorSchemes {
    LIGHT = "light",
    DARK = "dark"
}
export declare const THEME_SOURCES: {
    [key: string]: {
        [key in ThemeColorSchemes]: string;
    };
};
export declare const getThemeDefinitionSource: (theme: string, colorScheme?: ThemeColorSchemes) => string;
export declare const getThemeDefinition: (theme: string, colorScheme?: ThemeColorSchemes) => any;
//# sourceMappingURL=theme.d.ts.map