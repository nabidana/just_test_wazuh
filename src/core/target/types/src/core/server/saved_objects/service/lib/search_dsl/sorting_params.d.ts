import { IndexMapping } from '../../../mappings';
export declare function getSortingParams(mappings: IndexMapping, type: string | string[], sortField?: string, sortOrder?: string): {
    sort?: undefined;
} | {
    sort: {
        [x: string]: {
            order: string | undefined;
        };
    }[];
} | {
    sort: {
        [x: string]: {
            order: string | undefined;
            unmapped_type: string | undefined;
        };
    }[];
};
//# sourceMappingURL=sorting_params.d.ts.map