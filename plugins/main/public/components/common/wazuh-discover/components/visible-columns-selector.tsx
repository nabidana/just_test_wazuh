import React, { useState, ChangeEvent } from 'react';
import { FormattedMessage } from '@osd/i18n/react';
import classNames from 'classnames';
import {
  EuiPopover,
  EuiPopoverTitle,
  EuiButtonEmpty,
  EuiFieldText,
  EuiFlexGroup,
  EuiFlexItem,
  EuiSwitch,
  EuiDataGridColumn,
  EuiDataGridColumnVisibility,
  EuiToolTip,
  EuiIcon,
} from '@elastic/eui';

// Based on https://github.com/opensearch-project/oui/blob/1.8.1/src/components/datagrid/column_selector.tsx
// Only select visibility funcitonality
// Replace OuiI18n by FormattedMessage
export const DataGridVisibleColumnsSelector = ({
  availableColumns,
  columnVisibility,
}: {
  availableColumns: EuiDataGridColumn[];
  columnVisibility: EuiDataGridColumnVisibility;
}) => {
  const [searchValue, setSearchValue] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  const maxAvailableColumns = 500;

  const { visibleColumns, setVisibleColumns } = columnVisibility;

  const searchValueLowerCase = searchValue.toLowerCase();

  const filteredColumns = (
    searchValue
      ? availableColumns.filter(({ name }) =>
          name.toLowerCase().includes(searchValueLowerCase),
        )
      : availableColumns
  ).slice(0, maxAvailableColumns);

  const controlBtnClasses = classNames('euiDataGrid__controlBtn', {
    // TODO: research if this is required
    // 'euiDataGrid__controlBtn--active':
    //   availableColumns.length - visibleColumns.length > 0,
  });

  return (
    <EuiPopover
      data-test-subj='dataGridColumnSelectorPopover'
      isOpen={isOpen}
      closePopover={() => setIsOpen(false)}
      anchorPosition='downLeft'
      panelPaddingSize='s'
      panelClassName='euiDataGridColumnSelectorPopover'
      button={
        <EuiButtonEmpty
          iconType='listAdd'
          iconSide='left'
          size='xs'
          color='text'
          className={controlBtnClasses}
          data-test-subj='dataGridColumnSelectorButton'
          onClick={() => setIsOpen(!isOpen)}
        >
          <FormattedMessage
            id='wz.discover.availableFields'
            defaultMessage='사용 가능한 필드 {availableColumns}개'
            values={{ availableColumns: availableColumns?.length ?? 0 }}
          />
          {availableColumns.length > maxAvailableColumns && (
            <EuiToolTip
              position='top'
              content={
                <FormattedMessage
                  id='wz.discover.availableFields.warningTooltip'
                  defaultMessage='열 개수가 제한({maxAvailableColumns}개)을 초과했습니다. 처음 {maxAvailableColumns}개 열만 표시되지만 모든 열에서 검색은 가능합니다.'
                  values={{ maxAvailableColumns }}
                />
              }
            >
              <EuiIcon
                className='wz-margin-left-4'
                type='iInCircle'
                aria-label='정보'
              />
            </EuiToolTip>
          )}
        </EuiButtonEmpty>
      }
    >
      <EuiPopoverTitle>
        <EuiFieldText
          fullWidth
          compressed
          placeholder='검색'
          aria-label='열 검색'
          value={searchValue}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setSearchValue(e.currentTarget.value)
          }
        />
      </EuiPopoverTitle>
      <div className='euiDataGrid__controlScroll'>
        {filteredColumns.map(({ name, id }) => {
          return (
            <div key={id} className='euiDataGridColumnSelector__item'>
              <EuiFlexGroup
                responsive={false}
                gutterSize='m'
                alignItems='center'
              >
                <EuiFlexItem>
                  <EuiSwitch
                    name={id}
                    label={name}
                    checked={visibleColumns.includes(id)}
                    compressed
                    className='euiSwitch--mini'
                    onChange={event => {
                      const {
                        target: { checked },
                      } = event;

                      let nextVisibleColumns;

                      if (checked) {
                        if (!visibleColumns.includes(id)) {
                          nextVisibleColumns = [...visibleColumns, id];
                        }
                      } else {
                        if (visibleColumns.includes(id)) {
                          nextVisibleColumns = visibleColumns.filter(
                            (visibleColumnId: string) => visibleColumnId !== id,
                          );
                        }
                      }
                      if (nextVisibleColumns) {
                        setVisibleColumns(nextVisibleColumns);
                      }
                    }}
                  />
                </EuiFlexItem>
              </EuiFlexGroup>
            </div>
          );
        })}
      </div>
    </EuiPopover>
  );
};
