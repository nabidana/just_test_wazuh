import { IAnonymousPaths, IBasePath } from 'src/core/public';
import { CoreService } from '../../types';
interface Deps {
    basePath: IBasePath;
}
export declare class AnonymousPathsService implements CoreService<IAnonymousPaths, IAnonymousPaths> {
    private readonly paths;
    setup({ basePath }: Deps): {
        isAnonymous: (path: string) => boolean;
        register: (path: string) => void;
        normalizePath: (path: string) => string;
    };
    start(deps: Deps): {
        isAnonymous: (path: string) => boolean;
        register: (path: string) => void;
        normalizePath: (path: string) => string;
    };
    stop(): void;
}
export {};
//# sourceMappingURL=anonymous_paths_service.d.ts.map