import React from 'react';
import { ChromeNavLink, ChromeRecentlyAccessedHistoryItem, CoreStart } from '../../..';
import { HttpStart } from '../../../http';
import { InternalApplicationStart } from '../../../application/types';
export declare const isModifiedOrPrevented: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => boolean;
export declare const isActiveNavLink: (appId: string | undefined, linkId: string) => boolean;
interface Props {
    link: ChromeNavLink;
    appId?: string;
    basePath?: HttpStart['basePath'];
    dataTestSubj: string;
    onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
    navigateToApp: CoreStart['application']['navigateToApp'];
    externalLink?: boolean;
}
export declare function createEuiListItem({ link, appId, basePath, onClick, navigateToApp, dataTestSubj, externalLink, }: Props): {
    label: string;
    href: string;
    onClick(event: React.MouseEvent<HTMLButtonElement, MouseEvent>): void;
    isActive: boolean;
    isDisabled: boolean | undefined;
    'data-test-subj': string;
} | {
    iconType: "string" | "number" | "function" | "history" | "search" | "link" | "push" | "filter" | "color" | "copy" | "grab" | "help" | "grid" | "invert" | "dot" | "menu" | "scale" | "wordWrap" | "cross" | "image" | "polygon" | "stop" | "alert" | "document" | "list" | "email" | "accessibility" | "addDataApp" | "advancedSettingsApp" | "aggregate" | "analyzeEvent" | "annotation" | "anomalyDetection" | "apmApp" | "apmTrace" | "apps" | "appSearchApp" | "arrowDown" | "arrowLeft" | "arrowRight" | "arrowUp" | "asterisk" | "auditbeatApp" | "beaker" | "bell" | "bellSlash" | "bolt" | "bookOpen" | "boxesHorizontal" | "boxesVertical" | "branch" | "broom" | "brush" | "bug" | "bullseye" | "calendar" | "canvasApp" | "codeApp" | "chatLeft" | "chatRight" | "check" | "checkInCircleEmpty" | "checkInCircleFilled" | "cheer" | "classificationJob" | "clock" | "cloudDrizzle" | "cloudStormy" | "cloudSunny" | "compass" | "compute" | "console" | "consoleApp" | "continuityAbove" | "continuityAboveBelow" | "continuityBelow" | "continuityWithin" | "controlsHorizontal" | "controlsVertical" | "copyClipboard" | "createAdvancedJob" | "createMultiMetricJob" | "createPopulationJob" | "createSingleMetricJob" | "crossClusterReplicationApp" | "crosshairs" | "crossInACircleFilled" | "crossInCircleEmpty" | "crossInCircleFilled" | "currency" | "cut" | "dashboard" | "dashboardApp" | "database" | "dataVisualizer" | "devToolsApp" | "discoverApp" | "documentation" | "documentEdit" | "documents" | "download" | "dockedBottom" | "dockedDetached" | "dockedLeft" | "dockedRight" | "dockedTakeover" | "dockedTop" | "editorAlignCenter" | "editorAlignLeft" | "editorAlignRight" | "editorBold" | "editorCodeBlock" | "editorComment" | "editorDistributeHorizontal" | "editorDistributeVertical" | "editorHeading" | "editorItalic" | "editorItemAlignLeft" | "editorItemAlignBottom" | "editorItemAlignCenter" | "editorItemAlignMiddle" | "editorItemAlignRight" | "editorItemAlignTop" | "editorLink" | "editorOrderedList" | "editorPositionBottomLeft" | "editorPositionBottomRight" | "editorPositionTopLeft" | "editorPositionTopRight" | "editorRedo" | "editorStrike" | "editorTable" | "editorUnderline" | "editorUndo" | "editorUnorderedList" | "empty" | "emsApp" | "eql" | "eraser" | "exit" | "expand" | "expandMini" | "exportAction" | "eye" | "eyeClosed" | "faceHappy" | "faceNeutral" | "faceSad" | "filebeatApp" | "flag" | "fold" | "folderCheck" | "folderClosed" | "folderExclamation" | "folderOpen" | "frameNext" | "framePrevious" | "fullScreen" | "fullScreenExit" | "functionAdd" | "gear" | "gisApp" | "glasses" | "globe" | "grabHorizontal" | "graphApp" | "grokApp" | "heart" | "heartbeatApp" | "heatmap" | "home" | "iInCircle" | "importAction" | "indexClose" | "indexEdit" | "indexFlush" | "indexManagementApp" | "indexMapping" | "indexOpen" | "indexPatternApp" | "indexRollupApp" | "indexRuntime" | "indexSettings" | "inputOutput" | "inspect" | "integrationGeneral" | "integrationObservability" | "integrationSearch" | "integrationSecurity" | "ip" | "keyboardShortcut" | "kqlField" | "kqlFunction" | "kqlOperand" | "kqlSelector" | "kqlValue" | "layers" | "lensApp" | "lineChart" | "listAdd" | "lock" | "lockOpen" | "logsApp" | "logoAerospike" | "logoApache" | "logoAppSearch" | "logoAWS" | "logoAWSMono" | "logoAzure" | "logoAzureMono" | "logoBeats" | "logoBusinessAnalytics" | "logoCeph" | "logoCloud" | "logoCloudEnterprise" | "logoCode" | "logoCodesandbox" | "logoCouchbase" | "logoDocker" | "logoDropwizard" | "logoElastic" | "logoElasticsearch" | "logoElasticStack" | "logoEnterpriseSearch" | "logoEtcd" | "logoGCP" | "logoGCPMono" | "logoGithub" | "logoGmail" | "logoGolang" | "logoGoogleG" | "logoHAproxy" | "logoIBM" | "logoIBMMono" | "logoKafka" | "logoKibana" | "logoKubernetes" | "logoLogging" | "logoLogstash" | "logoMaps" | "logoMemcached" | "logoMetrics" | "logoMongodb" | "logoMySQL" | "logoNginx" | "logoObservability" | "logoOpenSearch" | "logoOsquery" | "logoPhp" | "logoPostgres" | "logoPrometheus" | "logoRabbitmq" | "logoRedis" | "logoSecurity" | "logoSiteSearch" | "logoSketch" | "logoSlack" | "logoUptime" | "logoWebhook" | "logoWindows" | "logoWorkplaceSearch" | "logstashFilter" | "logstashIf" | "logstashInput" | "logstashOutput" | "logstashQueue" | "machineLearningApp" | "magnet" | "magnifyWithMinus" | "magnifyWithPlus" | "managementApp" | "mapMarker" | "memory" | "menuDown" | "menuLeft" | "menuRight" | "menuUp" | "merge" | "metricbeatApp" | "metricsApp" | "minimize" | "minus" | "minusInCircle" | "minusInCircleFilled" | "mobile" | "monitoringApp" | "moon" | "nested" | "node" | "notebookApp" | "offline" | "online" | "outlierDetectionJob" | "package" | "packetbeatApp" | "pageSelect" | "pagesSelect" | "partial" | "paperClip" | "pause" | "pencil" | "percent" | "pin" | "pinFilled" | "pipelineApp" | "play" | "playFilled" | "plus" | "plusInCircle" | "plusInCircleFilled" | "popout" | "power" | "pulse" | "questionInCircle" | "quote" | "radar" | "radius" | "recent" | "recentlyViewedApp" | "redeploy" | "refresh" | "regressionJob" | "reporter" | "reportingApp" | "returnKey" | "rocket" | "save" | "savedObjectsApp" | "searchProfilerApp" | "securityAnalyticsApp" | "securityApp" | "securitySignal" | "securitySignalDetected" | "securitySignalResolved" | "shard" | "share" | "snowflake" | "sortable" | "sortDown" | "sortLeft" | "sortRight" | "sortUp" | "spacesApp" | "sparkleFilled" | "sqlApp" | "starEmpty" | "starEmptySpace" | "starFilled" | "starFilledSpace" | "starMinusEmpty" | "starMinusFilled" | "starPlusEmpty" | "starPlusFilled" | "stats" | "stopFilled" | "stopSlash" | "storage" | "submodule" | "swatchInput" | "symlink" | "tableOfContents" | "tableDensityExpanded" | "tableDensityCompact" | "tableDensityNormal" | "tag" | "tear" | "temperature" | "thumbsDown" | "thumbsUp" | "timeline" | "timelionApp" | "timeslider" | "training" | "trash" | "upgradeAssistantApp" | "uptimeApp" | "undeploy" | "unfold" | "unlink" | "user" | "users" | "usersRolesApp" | "vector" | "videoPlayer" | "visArea" | "visAreaStacked" | "visBarHorizontal" | "visBarHorizontalStacked" | "visBarVertical" | "visBarVerticalStacked" | "visBuilder" | "visBuilderSavedObject" | "visGauge" | "visGoal" | "visLine" | "visMapCoordinate" | "visMapRegion" | "visMetric" | "visPie" | "visQueryDQL" | "visQueryPPL" | "visQueryPromQL" | "visQuerySQL" | "visTable" | "visTagCloud" | "visText" | "visTimelion" | "visualizeApp" | "visVega" | "visVisualBuilder" | "watchesApp" | "wordWrapDisabled" | "workplaceSearchApp" | "wrench" | "tokenClass" | "tokenProperty" | "tokenEnum" | "tokenVariable" | "tokenMethod" | "tokenAnnotation" | "tokenException" | "tokenInterface" | "tokenParameter" | "tokenField" | "tokenElement" | "tokenFunction" | "tokenBoolean" | "tokenString" | "tokenArray" | "tokenNumber" | "tokenConstant" | "tokenObject" | "tokenEvent" | "tokenKey" | "tokenNull" | "tokenStruct" | "tokenPackage" | "tokenOperator" | "tokenEnumMember" | "tokenRepo" | "tokenSymbol" | "tokenFile" | "tokenModule" | "tokenNamespace" | "tokenDate" | "tokenIP" | "tokenNested" | "tokenAlias" | "tokenShape" | "tokenGeo" | "tokenRange" | "tokenBinary" | "tokenJoin" | "tokenPercolator" | "tokenFlattened" | "tokenRankFeature" | "tokenRankFeatures" | "tokenKeyword" | "tokenCompletionSuggester" | "tokenDenseVector" | "tokenText" | "tokenTokenCount" | "tokenSearchType" | "tokenHistogram" | "wsAnalytics" | "wsEssentials" | "wsObservability" | "wsSearch" | "wsSecurityAnalytics" | "wsSelector" | undefined;
    icon: React.JSX.Element | undefined;
    label: string;
    href: string;
    onClick(event: React.MouseEvent<HTMLButtonElement, MouseEvent>): void;
    isActive: boolean;
    isDisabled: boolean | undefined;
    'data-test-subj': string;
};
export interface RecentNavLink {
    href: string;
    label: string;
    title: string;
    'aria-label': string;
    iconType?: string;
    onClick: React.MouseEventHandler;
}
/**
 * Add saved object type info to recently links
 * TODO #64541 - set return type to EuiListGroupItemProps
 *
 * Recent nav links are similar to normal nav links but are missing some OpenSearch Dashboards Platform magic and
 * because of legacy reasons have slightly different properties.
 * @param recentLink
 * @param navLinks
 * @param basePath
 */
export declare function createRecentNavLink(recentLink: ChromeRecentlyAccessedHistoryItem, navLinks: ChromeNavLink[], basePath: HttpStart['basePath'], navigateToUrl: InternalApplicationStart['navigateToUrl'], workspaceEnabled?: boolean): RecentNavLink;
export {};
//# sourceMappingURL=nav_link.d.ts.map