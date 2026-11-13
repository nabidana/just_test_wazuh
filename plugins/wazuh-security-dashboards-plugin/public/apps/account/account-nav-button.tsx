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

import {
  EuiAvatar,
  EuiButtonEmpty,
  EuiContextMenuPanel,
  EuiFlexGroup,
  EuiFlexItem,
  EuiHeaderSectionItemButton,
  EuiHorizontalRule,
  EuiListGroup,
  EuiListGroupItem,
  EuiPopover,
  EuiText,
} from '@elastic/eui';
import { CoreStart } from 'opensearch-dashboards/public';
import React, { useCallback } from 'react';
import { RoleInfoPanel } from './role-info-panel';
import { PasswordResetPanel } from './password-reset-panel';
import { TenantSwitchPanel } from './tenant-switch-panel';
import { ClientConfigType } from '../../types';
import { LogoutButton } from './log-out-button';
import { resolveTenantName } from '../configuration/utils/tenant-utils';
import { getShouldShowTenantPopup, setShouldShowTenantPopup } from '../../utils/storage-utils';
import { getDashboardsInfo } from '../../utils/dashboards-info-utils';
import './account-nav-button.scss';

export function AccountNavButton(props: {
  coreStart: CoreStart;
  isInternalUser: boolean;
  username: string;
  tenant?: string;
  config: ClientConfigType;
  currAuthType: string;
}) {
  const [isPopoverOpen, setPopoverOpen] = React.useState<boolean>(false);
  const [modal, setModal] = React.useState<React.ReactNode>(null);
  const horizontalRule = <EuiHorizontalRule margin="xs" />;
  const username = props.username;
  const [isMultiTenancyEnabled, setIsMultiTenancyEnabled] = React.useState<boolean>(true);

  const showTenantSwitchPanel = useCallback(
    () =>
      setModal(
        <TenantSwitchPanel
          coreStart={props.coreStart}
          config={props.config}
          handleClose={() => {
            setModal(null);
          }}
          handleSwitchAndClose={() => {
            setModal(null);
            reloadAfterTenantSwitch();
          }}
          tenant={props.tenant!}
        />
      ),
    [props.config, props.coreStart, props.tenant]
  );
  React.useEffect(() => {
    const fetchData = async () => {
      try {
        setIsMultiTenancyEnabled(
          Boolean((await getDashboardsInfo(props.coreStart.http)).multitenancy_enabled)
        );
      } catch (e) {
        // TODO: switch to better error display.
        console.error(e);
      }
    };

    fetchData();
  }, [props.coreStart.http]);

  // Check if the tenant modal should be shown on load
  if (getShouldShowTenantPopup()) {
    setShouldShowTenantPopup(false);
    showTenantSwitchPanel();
  }

  const contextMenuPanel = (
    <div style={{ maxWidth: '256px' }}>
      <EuiFlexGroup gutterSize="s">
        <EuiFlexItem grow={null}>
          <EuiAvatar name={username} />
        </EuiFlexItem>
        <EuiFlexItem>
          <EuiListGroup gutterSize="none">
            <EuiListGroupItem
              key="username"
              wrapText
              label={
                <EuiText size="s">
                  <h5>{username}</h5>
                </EuiText>
              }
            />
          </EuiListGroup>
          {isMultiTenancyEnabled && props.config.multitenancy.enabled && (
            <EuiListGroupItem
              color="subdued"
              key="tenant"
              label={
                <EuiText size="xs" id="tenantName">
                  {resolveTenantName(props.tenant || '', username)}
                </EuiText>
              }
            />
          )}
        </EuiFlexItem>
      </EuiFlexGroup>

      {/* GS 인증용: 로그인된 관리자 아이콘 드롭다운은 "로그아웃"만 남기고 나머지
          메뉴(역할 및 신원 정보 보기 / 테넌트 전환 / 비밀번호 재설정)는 삭제 요청에
          따라 주석 처리한다(삭제가 아니라 원본 보존). 아래 LogoutButton이 자체적으로
          구분선(divider)을 렌더링하므로, 이 블록 전체를 비활성화해도 구분선이 중복
          되거나 빠지지 않는다.
      {horizontalRule}
      <EuiButtonEmpty
        data-test-subj="view-roles-and-identities"
        size="xs"
        onClick={() => setModal(<RoleInfoPanel {...props} handleClose={() => setModal(null)} />)}
      >
        역할 및 신원 정보 보기
      </EuiButtonEmpty>
      {isMultiTenancyEnabled && props.config.multitenancy.enabled && (
        <>
          {horizontalRule}
          <EuiButtonEmpty data-test-subj="switch-tenants" size="xs" onClick={showTenantSwitchPanel}>
            테넌트 전환
          </EuiButtonEmpty>
        </>
      )}
      */}
      {props.isInternalUser && (
        <>
          {horizontalRule}
          <EuiButtonEmpty
            data-test-subj="reset-password"
            size="xs"
            onClick={() =>
              setModal(
                <PasswordResetPanel
                  coreStart={props.coreStart}
                  username={props.username}
                  handleClose={() => setModal(null)}
                  logoutUrl={props.config.auth.logout_url}
                />
              )
            }
          >
            비밀번호 재설정
          </EuiButtonEmpty>
        </>
      )}
      <LogoutButton
        authType={props.currAuthType}
        http={props.coreStart.http}
        divider={horizontalRule}
        logoutUrl={props.config.auth.logout_url}
      />
    </div>
  );

  const isPlacedInLeftNav = props.coreStart.uiSettings.get('home:useNewHomePage');

  // ToDo: Add aria-label and tooltip when isPlacedInLeftNav is true
  const innerElement = isPlacedInLeftNav ? (
    <EuiButtonEmpty
      size="xs"
      flush="both"
      className="accountNavButton"
      aria-expanded={isPopoverOpen}
      aria-haspopup="true"
    >
      <EuiAvatar name={username} size="s" />
    </EuiButtonEmpty>
  ) : (
    <EuiAvatar name={username} size="m" />
  );

  const popover = (
    <>
      <EuiPopover
        data-test-subj="account-popover"
        id="actionsMenu"
        anchorPosition={isPlacedInLeftNav ? 'rightDown' : undefined}
        button={innerElement}
        isOpen={isPopoverOpen}
        closePopover={() => {
          setPopoverOpen(false);
        }}
        panelPaddingSize="s"
        onClick={() => {
          setPopoverOpen((prevState) => !prevState);
        }}
      >
        <EuiContextMenuPanel>{contextMenuPanel}</EuiContextMenuPanel>
      </EuiPopover>
      {modal}
    </>
  );

  return isPlacedInLeftNav ? (
    popover
  ) : (
    <EuiHeaderSectionItemButton id="user-icon-btn" size="l">
      {popover}
    </EuiHeaderSectionItemButton>
  );
}

export function reloadAfterTenantSwitch(): void {
  // the below portion is to clear URLs starting with 'lastUrl'
  // when switching tenants, the last URLs will be from the old tenancy therefore we need to remove these from sessionStorage.
  const lastUrls = [];
  const { sessionStorage } = window;

  for (let i = 0; i < sessionStorage.length; i++) {
    const key = sessionStorage.key(i);
    if (key?.startsWith('lastUrl')) {
      lastUrls.push(key);
    }
  }
  for (let i = 0; i < lastUrls.length; i++) {
    sessionStorage.removeItem(lastUrls[i]);
  }

  // rather than just reload when we switch tenants, we set the URL to the pathname. i.e. the portion like: '/app/dashboards'
  // therefore, the copied URL will now allow tenancy changes.
  window.location.href = window.location.pathname;
}
