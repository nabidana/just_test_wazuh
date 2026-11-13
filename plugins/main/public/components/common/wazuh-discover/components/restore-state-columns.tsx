import React from 'react';
import { EuiButtonEmpty, EuiToolTip } from '@elastic/eui';
import { FormattedMessage } from '@osd/i18n/react';
import useDataGridStatePersistenceManager from '../../data-grid/data-grid-state-persistence-manager/use-data-grid-state-persistence-manager';

interface RestoreStateColumnsButtonProps {
  dataGridStatePersistenceManager: ReturnType<
    typeof useDataGridStatePersistenceManager
  >;
}

const RestoreStateColumnsButton = (props: RestoreStateColumnsButtonProps) => {
  return (
    <EuiToolTip
      position='top'
      content={
        <FormattedMessage
          id='wz.discover.restoreState.tooltip'
          defaultMessage='이 작업은 데이터 그리드의 열 너비와 필드 커스터마이징을 모두 제거합니다.'
        />
      }
    >
      <EuiButtonEmpty
        iconType='refresh'
        size='xs'
        color='text'
        className='euiDataGrid__controlBtn'
        data-test-subj='dataGridColumnRestoreStateButton'
        onClick={props.dataGridStatePersistenceManager.clearState}
        disabled={props.dataGridStatePersistenceManager.isStateMatchingDefaults}
      >
        <FormattedMessage
          id='wz.discover.restoreState'
          defaultMessage='보기 초기화'
        />
      </EuiButtonEmpty>
    </EuiToolTip>
  );
};

export default RestoreStateColumnsButton;
