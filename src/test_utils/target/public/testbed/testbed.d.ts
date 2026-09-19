import { ComponentType } from 'enzyme';
import { TestBedConfig, SetupFunc } from './types';
/**
 * Register a new Testbed to test a React Component.
 *
 * @param Component The component under test
 * @param config An optional configuration object for the Testbed
 *
 * @example
  ```typescript
  import { registerTestBed } from '../../../../test_utils';
  import { RemoteClusterList } from '../../app/sections/remote_cluster_list';
  import { remoteClustersStore } from '../../app/store';

  const setup = registerTestBed(RemoteClusterList, { store: remoteClustersStore });

  describe('<RemoteClusterList />, () > {
    test('it should have a table', () => {
      const { exists } = setup();
      expect(exists('remoteClustersTable')).toBe(true);
    });
  });
  ```
 */
export declare const registerTestBed: <T extends string = string>(Component: ComponentType<any>, config?: TestBedConfig | undefined) => SetupFunc<T>;
//# sourceMappingURL=testbed.d.ts.map