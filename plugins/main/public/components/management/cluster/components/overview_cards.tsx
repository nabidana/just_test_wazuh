import React from 'react';
import {
  EuiFlexItem,
  EuiButtonEmpty,
  EuiCard,
  EuiDescriptionList,
  EuiSpacer,
  EuiToolTip,
  EuiFlexGroup,
  EuiTitle,
} from '@elastic/eui';
import { getDashboardPanels } from '../dashboard/dashboard_panels';
import { ViewMode } from '../../../../../../../src/plugins/embeddable/public';
import '../dashboard/cluster_dashboard.scss';
import { getPlugins } from '../../../../kibana-services';
import { DiscoverNoResults } from '../../../common/no-results/no-results';
import { tFilter, tParsedIndexPattern } from '../../../common/data-source';
import { formatUINumber } from '../../../../react-services/format-number';

interface OverviewCardsProps {
  goAgents: () => void;
  goNodes: () => void;
  goConfiguration: () => void;
  configuration: any;
  status: any;
  version: any;
  nodesCount: number;
  nodeList: any[];
  agentsCount: number;
  searchBarProps: any;
  results: any;
  indexPattern: tParsedIndexPattern;
  clusterName?: string;
  filters: tFilter[];
  lastReloadRequestTime: number;
}

const plugins = getPlugins();

const DashboardByRenderer = plugins.dashboard.DashboardContainerByValueRenderer;

export const OverviewCards = ({
  goAgents,
  goNodes,
  goConfiguration,
  configuration,
  status,
  version,
  nodesCount,
  nodeList,
  agentsCount,
  searchBarProps,
  results,
  indexPattern,
  clusterName,
  filters,
  lastReloadRequestTime,
}: OverviewCardsProps) => {
  return (
    <>
      <EuiFlexGroup responsive gutterSize='s'>
        <EuiFlexItem>
          <EuiCard
            textAlign='left'
            title={
              <EuiFlexGroup
                alignItems='center'
                gutterSize='s'
                justifyContent='flexStart'
                responsive={false}
                wrap
              >
                <EuiFlexItem grow={false}>
                  <EuiTitle size='s'>
                    <h2>상세 정보</h2>
                  </EuiTitle>
                </EuiFlexItem>
                <EuiFlexItem grow={false}>
                  <EuiButtonEmpty
                    color='primary'
                    size='s'
                    onClick={goConfiguration}
                    iconType='visPie'
                  >
                    개요 보기
                  </EuiButtonEmpty>
                </EuiFlexItem>
              </EuiFlexGroup>
            }
          >
            <EuiSpacer size='m' />
            <EuiDescriptionList
              type='responsiveColumn'
              compressed
              listItems={[
                {
                  title: 'IP 주소',
                  description: configuration?.nodes[0] || '-',
                },
                {
                  title: '실행 상태',
                  description: status ?? 'no',
                },
                {
                  title: '버전',
                  description: version ?? '-',
                },
              ]}
              titleProps={{
                className: 'cluster-descriptionList-title',
              }}
              descriptionProps={{
                className: 'color-grey cluster-descriptionList-description',
              }}
            />
          </EuiCard>
        </EuiFlexItem>
        <EuiFlexItem>
          <EuiCard
            textAlign='left'
            title={
              <span className='euiTitle euiTitle--small euiCard__title'>
                정보
              </span>
            }
          >
            <EuiSpacer size='m' />
            <EuiDescriptionList
              type='column'
              compressed
              listItems={[
                {
                  title: (
                    <EuiToolTip
                      content='클릭하면 노드 목록이 열립니다'
                      position='left'
                    >
                      <EuiButtonEmpty
                        color='primary'
                        flush='left'
                        onClick={goNodes}
                        style={{ height: 'auto' }}
                      >
                        노드
                      </EuiButtonEmpty>
                    </EuiToolTip>
                  ),
                  description: (
                    <EuiToolTip
                      content='클릭하면 노드 목록이 열립니다'
                      position='right'
                    >
                      <EuiButtonEmpty
                        color='primary'
                        flush='left'
                        onClick={goNodes}
                        style={{ height: 'auto' }}
                      >
                        {formatUINumber(nodesCount)}
                      </EuiButtonEmpty>
                    </EuiToolTip>
                  ),
                },
                {
                  title: (
                    <EuiToolTip
                      content='클릭하면 에이전트 목록이 열립니다'
                      position='left'
                    >
                      <EuiButtonEmpty
                        color='primary'
                        flush='left'
                        onClick={goAgents}
                        style={{ height: 'auto' }}
                      >
                        에이전트
                      </EuiButtonEmpty>
                    </EuiToolTip>
                  ),
                  description: (
                    <EuiToolTip
                      content='클릭하면 에이전트 목록이 열립니다'
                      position='right'
                    >
                      <EuiButtonEmpty
                        color='primary'
                        flush='left'
                        onClick={goAgents}
                        style={{ height: 'auto' }}
                      >
                        {formatUINumber(agentsCount)}
                      </EuiButtonEmpty>
                    </EuiToolTip>
                  ),
                },
              ]}
              titleProps={{
                className: 'cluster-descriptionList-title',
              }}
              descriptionProps={{
                className: 'cluster-descriptionList-description',
              }}
            />
          </EuiCard>
        </EuiFlexItem>
      </EuiFlexGroup>
      {results?.hits?.total > 0 ? (
        <div className='ct-dashboard-responsive'>
          <DashboardByRenderer
            input={{
              viewMode: ViewMode.VIEW,
              panels: getDashboardPanels(indexPattern, nodeList, clusterName),
              isFullScreenMode: false,
              filters: filters,
              useMargins: true,
              id: 'ct-dashboard-tab',
              timeRange: {
                from: searchBarProps?.dateRangeFrom,
                to: searchBarProps?.dateRangeTo,
              },
              title: 'Cluster Timelions dashboard',
              description: 'Dashboard of the Cluster Timelions',
              query: searchBarProps.query,
              refreshConfig: {
                pause: false,
                value: 15,
              },
              hidePanelTitles: false,
              lastReloadRequestTime,
            }}
          />
        </div>
      ) : (
        <DiscoverNoResults
          message='선택한 기간에 대한 결과가 없습니다. 다른 기간을 선택해 보세요.'
        />
      )}
    </>
  );
};
