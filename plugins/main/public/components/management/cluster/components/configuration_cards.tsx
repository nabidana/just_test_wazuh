import React from 'react';
import {
  EuiFlexItem,
  EuiButtonIcon,
  EuiCard,
  EuiDescriptionList,
  EuiSpacer,
  EuiToolTip,
  EuiFlexGroup,
  EuiTitle,
} from '@elastic/eui';
import { ViewMode } from '../../../../../../../src/plugins/embeddable/public';
import { getPlugins } from '../../../../kibana-services';
import { DiscoverNoResults } from '../../../common/no-results/no-results';
import { getDashboardConfigurationPanels } from '../dashboard/dashboard_configuration_panels';
import '../dashboard/cluster_dashboard.scss';
import { tFilter } from '../../../common/data-source';

interface ConfigurationCardsProps {
  goBack: () => void;
  configuration: any;
  searchBarProps: any;
  results: any;
  indexPatternId?: string;
  filters: tFilter[];
  lastReloadRequestTime: number;
}

const plugins = getPlugins();

const DashboardByRenderer = plugins.dashboard.DashboardContainerByValueRenderer;

export const ConfigurationCards = ({
  goBack,
  configuration,
  searchBarProps,
  results,
  indexPatternId,
  filters,
  lastReloadRequestTime,
}: ConfigurationCardsProps) => {
  const configurationItemsList = [
    {
      title: '비활성화',
      description: String(configuration?.disabled),
    },
    {
      title: '숨김',
      description: String(configuration?.hidden),
    },
    {
      title: '이름',
      description: configuration?.name,
    },
    {
      title: '노드 이름',
      description: configuration?.node_name,
    },
    {
      title: '노드 유형',
      description: configuration?.node_type,
    },
    {
      title: '바인드 주소',
      description: configuration?.bind_addr,
    },
    {
      title: 'IP',
      description: configuration?.nodes[0] || '-',
    },
    {
      title: '포트',
      description: configuration?.port,
    },
  ];

  return (
    <EuiFlexGroup direction='column' gutterSize='s'>
      <EuiFlexItem>
        <EuiFlexGroup responsive={false} alignItems='center' gutterSize='s'>
          <EuiFlexItem grow={false}>
            <EuiToolTip content='뒤로가기' position='bottom'>
              <EuiButtonIcon
                color='primary'
                size='m'
                display='empty'
                iconType='arrowLeft'
                aria-label='뒤로'
                onClick={goBack}
              />
            </EuiToolTip>
          </EuiFlexItem>
          <EuiFlexItem grow={false}>
            <EuiTitle>
              <h2>개요</h2>
            </EuiTitle>
          </EuiFlexItem>
        </EuiFlexGroup>
      </EuiFlexItem>
      <EuiFlexItem>
        <EuiFlexGroup responsive alignItems='flexStart' gutterSize='s'>
          <EuiFlexItem
            grow={false}
            style={{
              minWidth: '500px',
              overflow: 'hidden',
              height: '100%',
            }}
          >
            {results?.hits?.total > 0 ? (
              <DashboardByRenderer
                input={{
                  viewMode: ViewMode.VIEW,
                  panels: getDashboardConfigurationPanels(indexPatternId),
                  isFullScreenMode: false,
                  filters: filters,
                  useMargins: true,
                  id: 'ct-dashboard-configuration-tab',
                  timeRange: {
                    from: searchBarProps.dateRangeFrom,
                    to: searchBarProps.dateRangeTo,
                  },
                  title: 'Cluster configuration dashboard',
                  description: 'Dashboard of the Cluster configuration',
                  query: searchBarProps.query,
                  refreshConfig: {
                    pause: false,
                    value: 15,
                  },
                  hidePanelTitles: false,
                  lastReloadRequestTime,
                }}
              />
            ) : (
              <DiscoverNoResults
                message='선택한 기간에 대한 결과가 없습니다. 다른 기간을 선택해 보세요.'
              />
            )}
          </EuiFlexItem>
          <EuiFlexItem style={{ padding: '8px 0 0 0', height: '364px' }}>
            <EuiCard
              textAlign='left'
              title={
                <EuiTitle size='s'>
                  <h2>구성</h2>
                </EuiTitle>
              }
            >
              <EuiSpacer size='m' />
              <EuiDescriptionList
                type='column'
                compressed={true}
                align='left'
                listItems={configurationItemsList.map(item => ({
                  title: (
                    <span style={{ fontWeight: 400, fontSize: '1rem' }}>
                      {item.title}
                    </span>
                  ),
                  description: item.description,
                }))}
                titleProps={{
                  className: 'cluster-descriptionList-title',
                }}
                descriptionProps={{
                  className: 'color-grey cluster-descriptionList-description',
                }}
              />
            </EuiCard>
          </EuiFlexItem>
        </EuiFlexGroup>
      </EuiFlexItem>
    </EuiFlexGroup>
  );
};
