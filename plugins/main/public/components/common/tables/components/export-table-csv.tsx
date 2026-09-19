/*
 * Wazuh app - Table with search bar
 * Copyright (C) 2015-2022 Wazuh, Inc.
 *
 * This program is free software; you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation; either version 2 of the License, or
 * (at your option) any later version.
 *
 * Find more information about this on the LICENSE file.
 */

import React from 'react';
import { EuiFlexItem, EuiButtonEmpty, EuiIconTip } from '@elastic/eui';
import exportCsv from '../../../../react-services/wz-csv';
import { getToasts } from '../../../../kibana-services';
import { UI_ERROR_SEVERITIES } from '../../../../react-services/error-orchestrator/types';
import { UI_LOGGER_LEVELS } from '../../../../../common/constants';
import { getErrorOrchestrator } from '../../../../react-services/common-services';

export function ExportTableCsv({
  endpoint,
  totalItems,
  filters,
  title,
  maxRows,
}) {
  const showToast = (color, title, time) => {
    getToasts().add({
      color: color,
      title: title,
      toastLifeTimeMs: time,
    });
  };

  const downloadCsv = async () => {
    try {
      const formatedFilters = Object.entries(filters).map(([name, value]) => ({
        name,
        value,
      }));
      showToast('success', '다운로드가 곧 자동으로 시작됩니다...', 3000);
      await exportCsv(endpoint, [...formatedFilters], `${title.toLowerCase()}`);
    } catch (error) {
      const options = {
        context: `${ExportTableCsv.name}.downloadCsv`,
        level: UI_LOGGER_LEVELS.ERROR,
        severity: UI_ERROR_SEVERITIES.BUSINESS,
        error: {
          error: error,
          message: error.message || error,
          title: `${error.name}: CSV 다운로드 오류`,
        },
      };
      getErrorOrchestrator().handleError(options);
    }
  };

  return (
    <EuiFlexItem grow={false}>
      <EuiButtonEmpty
        isDisabled={totalItems == 0}
        iconType='importAction'
        onClick={() => downloadCsv()}
      >
        서식 내보내기
        {totalItems > maxRows && (
          <>
            {' '}
            <EuiIconTip
              content={`내보내는 CSV는 처음 ${maxRows}줄로 제한됩니다. 이 제한은 대시보드 관리 > 앱 설정에서 변경할 수 있습니다`}
              size='m'
              color='primary'
              type='iInCircle'
            />
          </>
        )}
      </EuiButtonEmpty>
    </EuiFlexItem>
  );
}

// Set default props
ExportTableCsv.defaultProps = {
  endpoint: '/',
  totalItems: 0,
  filters: [],
  title: '',
};
