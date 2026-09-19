import { CoreContext } from '../core_context';
import { RenderingSetupDeps, InternalRenderingServiceSetup } from './types';
/** @internal */
export declare class RenderingService {
    private readonly coreContext;
    constructor(coreContext: CoreContext);
    private logger;
    private httpsAgent?;
    setup({ http, status, uiPlugins, dynamicConfig, }: RenderingSetupDeps): Promise<InternalRenderingServiceSetup>;
    stop(): Promise<void>;
    /**
     * Setups HTTP Agent if SSL is enabled to pass SSL config
     * values to Axios to make requests in while validating
     * resources.
     *
     * @param {Readonly<HttpConfigType>} httpConfig
     */
    private setupHttpAgent;
    /**
     * Assign values for branding related configurations based on branding validation
     * by calling checkBrandingValid(). For dark mode URLs, add additional validation
     * to see if there is a valid default mode URL exist first. If URL is valid, pass in
     * the actual URL; if not, pass in undefined.
     *
     * @param {boolean} darkMode
     * @param {Readonly<OpenSearchDashboardsConfigType>} opensearchDashboardsConfig
     * @returns {BrandingAssignment} valid URLs or undefined assigned for each branding configs
     */
    private assignBrandingConfig;
    /**
     * Assign boolean values for branding related configurations to indicate if
     * user inputs valid or invalid URLs by calling isUrlValid() function. Also
     * check if title is valid by calling isTitleValid() function.
     *
     * @param {boolean} darkMode
     * @param {Readonly<OpenSearchDashboardsConfigType>} opensearchDashboardsConfig
     * @returns {BrandingValidation} indicate valid/invalid URL for each branding config
     */
    private checkBrandingValid;
    private getUiConfig;
    /**
     * Validation function for URLs. Use Axios to call URL and check validity.
     * Also needs to be ended with png, svg, gif, PNG, SVG and GIF.
     *
     * @param {string} url
     * @param {string} configName
     * @returns {boolean} indicate if the URL is valid/invalid
     */
    isUrlValid: (url: string, configName?: string | undefined) => Promise<boolean>;
    /**
     * Validation function for applicationTitle config.
     * Title length needs to be between 1 to 36 letters.
     *
     * @param {string} title
     * @param {string} configName
     * @returns {boolean} indicate if user input title is valid/invalid
     */
    isTitleValid: (title: string, configName?: string | undefined) => boolean;
    /**
     * Determines the color-scheme mode and version of the theme to be applied.
     *
     * The theme values are selected in the following order of precedence:
     *   1. A configured override from the YAML config file.
     *   2. A requested override from the `themeTag` parameter in the URL.
     *   3. A value configured by the user.
     *   4. The default value specified in the YAML file or the schema.
     *
     *   If `themeTag` is invalid, it is ignored.
     *   If any other extracted detail is invalid, the system default is used.
     */
    private getThemeDetails;
}
//# sourceMappingURL=rendering_service.d.ts.map