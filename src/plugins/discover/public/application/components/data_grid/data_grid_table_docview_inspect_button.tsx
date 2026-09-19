/*
 * Copyright OpenSearch Contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { i18n } from '@osd/i18n';
import { EuiToolTip, EuiSmallButtonIcon, EuiDataGridCellValueElementProps } from '@elastic/eui';
import { useDataGridContext } from './data_grid_table_context';

export const DocViewInspectButton = ({ rowIndex }: EuiDataGridCellValueElementProps) => {
  const { inspectedHit, setInspectedHit, rows } = useDataGridContext();
  const currentInspected = rows[rowIndex];
  const isCurrentInspected = currentInspected === inspectedHit;
  const inspectHintMsg = i18n.translate('discover.docViews.table.inspectAriaLabel', {
    defaultMessage: '문서 상세 정보',
  });

  return (
    <EuiToolTip content={inspectHintMsg}>
      <EuiSmallButtonIcon
        onClick={() => setInspectedHit(isCurrentInspected ? undefined : currentInspected)}
        iconType={isCurrentInspected ? 'minimize' : 'inspect'}
        aria-label={inspectHintMsg}
        data-test-subj={`docTableExpandToggleColumn-${rowIndex}`}
      />
    </EuiToolTip>
  );
};
