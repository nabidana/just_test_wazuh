import React from 'react';
import {
  EuiPage,
  EuiPageBody,
  EuiEmptyPrompt,
  EuiProgress,
} from '@elastic/eui';
import { EndpointsSummary } from './endpoints-summary';
import { endpointSummary } from '../../utils/applications';
import {
  withErrorBoundary,
  withGlobalBreadcrumb,
  withRouteResolvers,
} from '../common/hocs';
import { compose } from 'redux';
import { WzButtonPermissions } from '../common/permissions/button';
import { UI_LOGGER_LEVELS } from '../../../common/constants';
import { UI_ERROR_SEVERITIES } from '../../react-services/error-orchestrator/types';
import { getErrorOrchestrator } from '../../react-services/common-services';
import { useGetTotalAgents } from './hooks';
import {
  enableMenu,
  ip,
  nestedResolve,
  savedSearch,
} from '../../services/resolves';
import NavigationService from '../../react-services/navigation-service';

export const MainEndpointsSummary = compose(
  withErrorBoundary,
  withRouteResolvers({ enableMenu, ip, nestedResolve, savedSearch }),
  withGlobalBreadcrumb([{ text: endpointSummary.breadcrumbLabel }]),
)(() => {
  const { isLoading, totalAgents, error } = useGetTotalAgents('id!=000');

  if (error) {
    const options = {
      context: `MainEndpointsSummary.getTotalAgents`,
      level: UI_LOGGER_LEVELS.ERROR,
      severity: UI_ERROR_SEVERITIES.CRITICAL,
      store: true,
      error: {
        error,
        message: error.message || error,
        title: `Could not get agents summary`,
      },
    };
    getErrorOrchestrator().handleError(options);
  }

  if (isLoading) {
    return (
      <EuiPage paddingSize='m'>
        <EuiPageBody>
          <EuiProgress size='xs' color='primary' />
        </EuiPageBody>
      </EuiPage>
    );
  }

  if (totalAgents === 0) {
    return (
      <EuiEmptyPrompt
        iconType='watchesApp'
        title={<h2>매니저에 추가된 에이전트가 없습니다</h2>}
        body={<p>모니터링을 시작하려면 에이전트를 추가하세요</p>}
      />
    );
  }

  return (
    <EuiPage paddingSize='m'>
      <EuiPageBody>
        <EndpointsSummary />
      </EuiPageBody>
    </EuiPage>
  );
});
