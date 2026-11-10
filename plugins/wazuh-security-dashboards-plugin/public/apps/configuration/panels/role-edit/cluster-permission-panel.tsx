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

import React, { Dispatch, SetStateAction } from 'react';
import { EuiForm, EuiFlexGroup, EuiFlexItem, EuiCompressedComboBox } from '@elastic/eui';
import { ComboBoxOptions } from '../../types';
import { ResourceType } from '../../../../../common';
import { PanelWithHeader } from '../../utils/panel-with-header';
import { FormRow } from '../../utils/form-row';
import { LIMIT_WIDTH_INPUT_CLASS } from '../../constants';
import { ExternalLinkButton } from '../../utils/display-utils';
import { buildHashUrl } from '../../utils/url-builder';

export function ClusterPermissionPanel(props: {
  state: ComboBoxOptions;
  optionUniverse: ComboBoxOptions;
  setState: Dispatch<SetStateAction<ComboBoxOptions>>;
}) {
  const { state, optionUniverse, setState } = props;
  return (
    <PanelWithHeader
      headerText="클러스터 권한"
      // Wazuh: description text and "Learn more" link hidden per request.
    >
      <EuiForm>
        <FormRow headerText="클러스터 권한">
          <EuiFlexGroup>
            <EuiFlexItem className={LIMIT_WIDTH_INPUT_CLASS}>
              <EuiCompressedComboBox
                placeholder="작업 그룹 이름 또는 권한 이름 검색"
                options={optionUniverse}
                selectedOptions={state}
                onChange={setState}
                id="roles-cluster-permission-box"
              />
            </EuiFlexItem>
            {/* TODO: 'Browse and select' button with a pop-up modal for selection */}
            <EuiFlexItem grow={false}>
              <ExternalLinkButton
                href={buildHashUrl(ResourceType.permissions)}
                text="새 권한 그룹 생성"
              />
            </EuiFlexItem>
          </EuiFlexGroup>
        </FormRow>
      </EuiForm>
    </PanelWithHeader>
  );
}
