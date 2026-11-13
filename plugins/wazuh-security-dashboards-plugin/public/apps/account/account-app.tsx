/*
 *   Copyright OpenSearch Contributors
 *
 *   Licensed under the Apache License, Version 2.0 (the "License").
 *   You may not use this file except in compliance with the License.
 *   A copy of the License is located at
 *
 *       http://www.apache.org/licenses/LICENSE-2.0
 *
 *   or in the "license" file accompanying this file. This file is distributed
 *   on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either
 *   express or implied. See the License for the specific language governing
 *   permissions and limitations under the License.
 */

import React from 'react';
import ReactDOM from 'react-dom';
import { CoreStart } from 'opensearch-dashboards/public';
import { AccountNavButton } from './account-nav-button';
import { fetchAccountInfoSafe, fetchAdminPasswordStatus } from './utils';
// GS 인증용: admin 계정 최초 비밀번호 변경 강제 모달
import { ForceAdminPasswordChangeModal } from './force-admin-password-change-modal';
import { ClientConfigType } from '../../types';
import { AuthType, CUSTOM_ERROR_PAGE_URI, ERROR_MISSING_ROLE_PATH } from '../../../common';
import { fetchCurrentTenant, selectTenant } from '../configuration/utils/tenant-utils';
import {
  getSavedTenant,
  getShouldShowTenantPopup,
  setShouldShowTenantPopup,
} from '../../utils/storage-utils';
import { constructErrorMessageAndLog } from '../error-utils';
import { fetchCurrentAuthType } from '../../utils/logout-utils';
import { getDashboardsInfoSafe } from '../../utils/dashboards-info-utils';

function tenantSpecifiedInUrl() {
  return (
    window.location.search.includes('security_tenant') ||
    window.location.search.includes('securitytenant')
  );
}

export async function setupTopNavButton(coreStart: CoreStart, config: ClientConfigType) {
  const authType = config.auth?.type;
  let currAuthType = '';
  if (typeof authType === 'string') {
    currAuthType = authType;
  } else if (Array.isArray(authType) && authType.length === 1) {
    currAuthType = authType[0];
  } else {
    try {
      currAuthType = (await fetchCurrentAuthType(coreStart.http))?.currentAuthType;
    } catch (e) {
      currAuthType = AuthType.BASIC;
    }
  }

  const accountInfo = (await fetchAccountInfoSafe(coreStart.http))?.data;
  if (accountInfo) {
    // GS 인증용: admin 계정이 최초 비밀번호를 아직 변경하지 않았으면 로그인 직후
    // 닫을 수 없는 강제 변경 모달을 띄운다(admin 계정 전용, 다른 계정은 대상 아님).
    let mustForceAdminPasswordChange = false;
    if (accountInfo.user_name === 'admin') {
      try {
        const status = await fetchAdminPasswordStatus(coreStart.http);
        mustForceAdminPasswordChange = !status?.passwordChanged;
      } catch (e) {
        console.error(e);
      }
    }

    // Missing role error
    if (accountInfo.roles.length === 0 && !window.location.href.includes(CUSTOM_ERROR_PAGE_URI)) {
      window.location.href =
        coreStart.http.basePath.serverBasePath + CUSTOM_ERROR_PAGE_URI + ERROR_MISSING_ROLE_PATH;
    }

    let tenant: string | undefined;
    if (config.multitenancy.enabled) {
      try {
        tenant = await fetchCurrentTenant(coreStart.http);
      } catch (e) {
        tenant = undefined;
        console.log(e);
      }
    }

    let shouldShowTenantPopup = true;

    const dashboardsInfo = await getDashboardsInfoSafe(coreStart.http);
    const multitenancyEnabled = dashboardsInfo?.multitenancy_enabled && config.multitenancy.enabled;
    const defaultTenantSet = dashboardsInfo?.default_tenant !== '';
    if (
      tenantSpecifiedInUrl() ||
      getShouldShowTenantPopup() === false ||
      !multitenancyEnabled ||
      defaultTenantSet
    ) {
      shouldShowTenantPopup = false;
    } else {
      // Switch to previous tenant based on localStorage, it may fail due to
      // 1) Localstorage is disabled; 2) Request failed
      try {
        const savedTenant = getSavedTenant();
        if (savedTenant !== null) {
          if (savedTenant === tenant) {
            shouldShowTenantPopup = false;
          } else {
            await selectTenant(coreStart.http, {
              username: accountInfo.user_name,
              tenant: savedTenant,
            });
            tenant = savedTenant;
            shouldShowTenantPopup = false;
            window.location.reload();
          }
        }
      } catch (e: any) {
        constructErrorMessageAndLog(e, `Failed to switch to ${tenant} tenant.`);
      }
    }

    setShouldShowTenantPopup(false);

    const isPlacedInLeftNav = coreStart.uiSettings.get('home:useNewHomePage');

    coreStart.chrome.navControls[isPlacedInLeftNav ? 'registerLeftBottom' : 'registerRight']({
      order: isPlacedInLeftNav ? 10000 : 2000,
      mount: (element: HTMLElement) => {
        // Use core's combined I18n/EuiContext provider (instead of rendering with no i18n
        // context at all, as before) so that EUI's own built-in strings (e.g. the password
        // field's show/hide tooltip in the password reset panel) also pick up the Korean
        // overrides registered in src/core/public/i18n/i18n_eui_mapping.tsx.
        const I18nContext = coreStart.i18n.Context;
        ReactDOM.render(
          <I18nContext>
            <>
              <AccountNavButton
                coreStart={coreStart}
                isInternalUser={accountInfo.is_internal_user}
                username={accountInfo.user_name}
                tenant={tenant}
                config={config}
                currAuthType={currAuthType.toLowerCase()}
              />
              {/* GS 인증용: admin 최초 비밀번호 강제 변경 모달 (EuiOverlayMask가 포탈로
                  렌더링되므로 이 컨테이너 위치와 무관하게 전체 화면에 표시됨) */}
              {mustForceAdminPasswordChange && (
                <ForceAdminPasswordChangeModal
                  coreStart={coreStart}
                  username={accountInfo.user_name}
                  logoutUrl={config.auth.logout_url}
                />
              )}
            </>
          </I18nContext>,
          element
        );
        return () => ReactDOM.unmountComponentAtNode(element);
      },
    });
  }
}
