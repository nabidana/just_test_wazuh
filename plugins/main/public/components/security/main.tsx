import React, { useState, useEffect } from 'react';
import {
  EuiPage,
  EuiFlexGroup,
  EuiFlexItem,
  EuiTabs,
  EuiTab,
  EuiCallOut,
  EuiSpacer,
} from '@elastic/eui';
import { Users } from './users/users';
import { Roles } from './roles/roles';
import { Policies } from './policies/policies';
import { GenericRequest } from '../../react-services/generic-request';
import { AppState } from '../../react-services/app-state';
import { RolesMapping } from './roles-mapping/roles-mapping';
import {
  withGlobalBreadcrumb,
  withErrorBoundary,
  withRouteResolvers,
} from '../common/hocs';
import { compose } from 'redux';
import {
  PLUGIN_PLATFORM_NAME,
  UI_LOGGER_LEVELS,
} from '../../../common/constants';

import { UI_ERROR_SEVERITIES } from '../../react-services/error-orchestrator/types';
import { getErrorOrchestrator } from '../../react-services/common-services';
import { security } from '../../utils/applications';
import { getWazuhCorePlugin } from '../../kibana-services';
import {
  enableMenu,
  ip,
  nestedResolve,
  savedSearch,
} from '../../services/resolves';
import { Redirect, Route, Switch } from '../router-search';
import { useRouterSearch } from '../common/hooks';
import NavigationService from '../../react-services/navigation-service';

const tabs = [
  {
    id: 'users',
    name: '사용자',
    disabled: false,
  },
  {
    id: 'roles',
    name: '역할',
    disabled: false,
  },
  {
    id: 'policies',
    name: '정책',
    disabled: false,
  },
  {
    id: 'roleMapping',
    name: '역할 매핑',
    disabled: false,
  },
];

export const WzSecurity = compose(
  withErrorBoundary,
  withRouteResolvers({ enableMenu, ip, nestedResolve, savedSearch }),
  withGlobalBreadcrumb([{ text: security.breadcrumbLabel }]),
)(() => {
  const navigationService = NavigationService.getInstance();
  const { tab: selectedTabId } = useRouterSearch();

  const checkRunAsUser = async () => {
    const currentApi = AppState.getCurrentAPI();
    try {
      const ApiCheck = await GenericRequest.request(
        'POST',
        '/api/check-api',
        currentApi,
      );
      return ApiCheck.data.allow_run_as;
    } catch (error) {
      throw new Error(error);
    }
  };

  const [allowRunAs, setAllowRunAs] = useState();
  useEffect(() => {
    try {
      const fetchAllowRunAs = async () => {
        setAllowRunAs(await checkRunAsUser());
      };
      fetchAllowRunAs();
    } catch (error) {
      const options = {
        context: `${WzSecurity.name}.fetchAllowRunAs`,
        level: UI_LOGGER_LEVELS.ERROR,
        severity: UI_ERROR_SEVERITIES.BUSINESS,
        store: true,
        error: {
          error: error,
          message: error.message || error,
          title: error.name || error,
        },
      };
      getErrorOrchestrator().handleError(options);
    }
  }, []);

  const renderTabs = () => {
    return tabs.map((tab, index) => (
      <EuiTab
        {...(tab.href && { href: tab.href, target: '_blank' })}
        onClick={() => navigationService.navigate(`/security?tab=${tab.id}`)}
        isSelected={tab.id === selectedTabId}
        disabled={tab.disabled}
        key={index}
      >
        {tab.name}
      </EuiTab>
    ));
  };

  const isNotRunAs = allowRunAs => {
    let runAsWarningTxt = '';
    switch (allowRunAs) {
      case getWazuhCorePlugin().API_USER_STATUS_RUN_AS.HOST_DISABLED:
        runAsWarningTxt = `역할 매핑이 적용되려면 API 호스트 설정에서 run_as를 활성화하고, ${PLUGIN_PLATFORM_NAME} 서비스를 재시작한 뒤 브라우저 캐시와 쿠키를 삭제하세요.`;
        break;
      case getWazuhCorePlugin().API_USER_STATUS_RUN_AS.USER_NOT_ALLOWED:
        runAsWarningTxt =
          '현재 API 사용자가 allow_run_as를 비활성화하고 있어 역할 매핑이 적용되지 않습니다.';
        break;
      case getWazuhCorePlugin().API_USER_STATUS_RUN_AS.ALL_DISABLED:
        runAsWarningTxt = `역할 매핑이 적용되려면 API 호스트 설정에서 run_as를 활성화하고 현재 API 사용자의 allow_run_as를 true로 설정하세요. ${PLUGIN_PLATFORM_NAME} 서비스를 재시작한 뒤 브라우저 캐시와 쿠키를 삭제하세요.`;
        break;
      default:
        runAsWarningTxt =
          '현재 API 사용자가 run_as를 비활성화하고 있어 역할 매핑이 적용되지 않습니다.';
        break;
    }

    return (
      <EuiFlexGroup>
        <EuiFlexItem>
          <EuiCallOut
            title={runAsWarningTxt}
            color='warning'
            iconType='alert'
          ></EuiCallOut>
          <EuiSpacer></EuiSpacer>
        </EuiFlexItem>
      </EuiFlexGroup>
    );
  };

  return (
    <EuiPage>
      <EuiFlexGroup>
        <EuiFlexItem>
          <EuiTabs>{renderTabs()}</EuiTabs>
          <EuiSpacer size='m'></EuiSpacer>
          <Switch>
            <Route path='?tab=users'>
              <Users></Users>
            </Route>
            <Route path='?tab=roles'>
              <Roles></Roles>
            </Route>
            <Route path='?tab=policies'>
              <Policies></Policies>
            </Route>
            <Route path='?tab=roleMapping'>
              <>
                {allowRunAs !== undefined &&
                  allowRunAs !==
                    getWazuhCorePlugin().API_USER_STATUS_RUN_AS.ENABLED &&
                  isNotRunAs(allowRunAs)}
                <RolesMapping></RolesMapping>
              </>
            </Route>
            <Redirect to='?tab=users'></Redirect>
          </Switch>
        </EuiFlexItem>
      </EuiFlexGroup>
    </EuiPage>
  );
});
