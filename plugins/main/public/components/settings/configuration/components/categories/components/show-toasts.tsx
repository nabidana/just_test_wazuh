import React from 'react';
import { EuiButton, EuiFlexGroup, EuiFlexItem } from '@elastic/eui';
import { PLUGIN_PLATFORM_NAME } from '../../../../../../../common/constants';
import { getToasts } from '../../../../../../kibana-services';
import NavigationService from '../../../../../../react-services/navigation-service';

export const toastRequiresReloadingBrowserTab = () => {
  getToasts().add({
    color: 'success',
    title: '변경사항을 적용하려면 페이지를 새로고침하세요',
    text: (
      <EuiFlexGroup justifyContent='flexEnd' gutterSize='s'>
        <EuiFlexItem grow={false}>
          <EuiButton
            onClick={() => NavigationService.getInstance().reload()}
            size='s'
          >
            페이지 새로고침
          </EuiButton>
        </EuiFlexItem>
      </EuiFlexGroup>
    ),
  });
};

export const toastRequiresRunningHealthcheck = () => {
  const navigationService = NavigationService.getInstance();
  const location = navigationService.getLocation();
  const toast = getToasts().add({
    color: 'warning',
    title: '변경사항을 적용하려면 헬스 체크를 실행하세요.',
    toastLifeTimeMs: 5000,
    text: (
      <EuiFlexGroup alignItems='center' gutterSize='s'>
        <EuiFlexItem grow={false}>
          <EuiButton
            onClick={() => {
              getToasts().remove(toast);
              navigationService.navigate({
                pathname: '/health-check',
                state: { prevLocation: location },
              });
            }}
            size='s'
          >
            헬스 체크 실행
          </EuiButton>
        </EuiFlexItem>
      </EuiFlexGroup>
    ),
  });
};

export const toastRequiresRestartingPluginPlatform = () => {
  getToasts().add({
    color: 'warning',
    title: `변경사항을 적용하려면 ${PLUGIN_PLATFORM_NAME}을(를) 재시작하세요`,
  });
};

export const toastSuccessUpdateConfiguration = () => {
  getToasts().add({
    color: 'success',
    title: '설정이 성공적으로 업데이트되었습니다',
  });
};
