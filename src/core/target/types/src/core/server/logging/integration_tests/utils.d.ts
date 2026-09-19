/// <reference types="jest" />
/// <reference types="node" />
export declare function getPlatformLogsFromMock(logMock: jest.SpyInstance<string, string[]>): string[];
export declare function getLegacyPlatformLogsFromMock(stdoutMock: jest.SpyInstance<string, Buffer[]>): string[];
export declare function getPlatformLogsFromFile(path: string): Promise<string>;
export declare function getLegacyPlatformLogsFromFile(path: string): Promise<string>;
//# sourceMappingURL=utils.d.ts.map