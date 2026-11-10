import React from 'react';
import { Observable } from 'rxjs';
import { ISidecarConfig } from '../overlays';
export declare const AppWrapper: React.FunctionComponent<{
    chromeVisible$: Observable<boolean>;
    sidecarConfig$: Observable<ISidecarConfig | undefined>;
}>;
export declare const AppContainer: React.FunctionComponent<{
    classes$: Observable<string[]>;
}>;
//# sourceMappingURL=app_containers.d.ts.map