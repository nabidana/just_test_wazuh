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
  EuiAccordion,
  EuiSmallButton,
  EuiCompressedComboBox,
  EuiFlexGroup,
  EuiFlexItem,
  EuiHorizontalRule,
  EuiCompressedSuperSelect,
  EuiCompressedTextArea,
} from '@elastic/eui';
import React, { Dispatch, Fragment, SetStateAction, useEffect } from 'react';
import { isEmpty } from 'lodash';
import { RoleIndexPermission } from '../../types';
import { ResourceType } from '../../../../../common';
import {
  appendElementToArray,
  removeElementFromArray,
  updateElementInArrayHandler,
} from '../../utils/array-state-utils';
import {
  appendOptionToComboBoxHandler,
  comboBoxOptionToString,
  stringToComboBoxOption,
} from '../../utils/combo-box-utils';
import { FormRow } from '../../utils/form-row';
import { PanelWithHeader } from '../../utils/panel-with-header';
import { RoleIndexPermissionStateClass } from './types';
import { FieldLevelSecurityMethod, ComboBoxOptions } from '../../types';
import { getFieldLevelSecurityMethod } from '../../utils/index-permission-utils';
import { LIMIT_WIDTH_INPUT_CLASS } from '../../constants';
import { buildHashUrl } from '../../utils/url-builder';
import { ExternalLinkButton } from '../../utils/display-utils';

export function getEmptyIndexPermission(): RoleIndexPermissionStateClass {
  return {
    indexPatterns: [],
    allowedActions: [],
    docLevelSecurity: '',
    fieldLevelSecurityMethod: 'exclude',
    fieldLevelSecurityFields: [],
    maskedFields: [],
  };
}

/**
 * Remove the leading ~ which indicates exclude and convert to combo box option.
 * @param fieldLevelSecurityRawFields fields fetched from backend
 * ["~field1", "~field2"] => ["field1", "field2"]
 * ["field1", "field2"] => ["field1", "field2"]
 */
function getFieldLevelSecurityFields(fieldLevelSecurityRawFields: string[]): ComboBoxOptions {
  return fieldLevelSecurityRawFields
    .map((s: string) => s.replace(/^~/, ''))
    .map(stringToComboBoxOption);
}

function packFieldLevelSecurity(method: FieldLevelSecurityMethod, fieldOptions: ComboBoxOptions) {
  const fields = fieldOptions.map(comboBoxOptionToString);
  if (method === 'include') {
    return fields;
  }
  return fields.map((field) => '~' + field);
}

export function buildIndexPermissionState(
  indexPerm: RoleIndexPermission[]
): RoleIndexPermissionStateClass[] {
  return indexPerm.map((perm) => ({
    indexPatterns: perm.index_patterns.map(stringToComboBoxOption),
    allowedActions: perm.allowed_actions.map(stringToComboBoxOption),
    docLevelSecurity: perm.dls,
    fieldLevelSecurityMethod: getFieldLevelSecurityMethod(perm.fls),
    fieldLevelSecurityFields: getFieldLevelSecurityFields(perm.fls),
    maskedFields: perm.masked_fields.map(stringToComboBoxOption),
  }));
}

export function unbuildIndexPermissionState(
  indexPerm: RoleIndexPermissionStateClass[]
): RoleIndexPermission[] {
  return indexPerm.map((perm) => ({
    index_patterns: perm.indexPatterns.map(comboBoxOptionToString),
    dls: perm.docLevelSecurity,
    fls: packFieldLevelSecurity(perm.fieldLevelSecurityMethod, perm.fieldLevelSecurityFields),
    masked_fields: perm.maskedFields.map(comboBoxOptionToString),
    allowed_actions: perm.allowedActions.map(comboBoxOptionToString),
  }));
}

const FIELD_LEVEL_SECURITY_PLACEHOLDER = `{
    "bool": {
        "must": {
            "match": {
                "genres": "Comedy"
            }
        }
    }
}`;

export function IndexPatternRow(props: {
  value: ComboBoxOptions;
  onChangeHandler: (s: ComboBoxOptions) => void;
  onCreateHandler: (s: string) => void;
}) {
  return (
    <FormRow headerText="인덱스" helpText="* 문자를 사용하여 인덱스 패턴을 지정하세요">
      <EuiFlexItem className={LIMIT_WIDTH_INPUT_CLASS}>
        <EuiCompressedComboBox
          noSuggestions
          placeholder="인덱스 이름 검색 또는 인덱스 패턴 직접 입력"
          selectedOptions={props.value}
          onChange={props.onChangeHandler}
          onCreateOption={props.onCreateHandler}
          id="index-input-box"
        />
      </EuiFlexItem>
    </FormRow>
  );
}

export function IndexPermissionRow(props: {
  value: ComboBoxOptions;
  permisionOptionsSet: ComboBoxOptions;
  onChangeHandler: (s: ComboBoxOptions) => void;
}) {
  return (
    <FormRow
      headerText="인덱스 권한"
      // Wazuh: description text hidden per request.
    >
      <EuiFlexGroup>
        <EuiFlexItem className={LIMIT_WIDTH_INPUT_CLASS}>
          <EuiCompressedComboBox
            placeholder="작업 그룹 이름 또는 권한 이름 검색"
            options={props.permisionOptionsSet}
            selectedOptions={props.value}
            onChange={props.onChangeHandler}
            id="roles-index-permission-box"
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
  );
}

export function DocLevelSecurityRow(props: {
  value: string;
  onChangeHandler: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}) {
  return (
    <FormRow
      headerText="문서 수준 보안"
      // Wazuh: description text and "Learn more" link hidden per request.
      optional
    >
      <EuiCompressedTextArea
        placeholder={FIELD_LEVEL_SECURITY_PLACEHOLDER}
        value={props.value}
        onChange={props.onChangeHandler}
      />
    </FormRow>
  );
}

export function FieldLevelSecurityRow(props: {
  method: FieldLevelSecurityMethod;
  fields: ComboBoxOptions;
  onMethodChangeHandler: (s: string) => void;
  onFieldChangeHandler: (s: ComboBoxOptions) => void;
  onFieldCreateHandler: (s: string) => void;
}) {
  return (
    <FormRow
      headerText="필드 수준 보안"
      // Wazuh: description text hidden per request.
      optional
    >
      <EuiFlexGroup>
        <EuiFlexItem grow={1}>
          <EuiCompressedSuperSelect
            valueOfSelected={props.method}
            options={[
              { inputDisplay: '포함', value: 'include' },
              { inputDisplay: '제외', value: 'exclude' },
            ]}
            onChange={props.onMethodChangeHandler}
          />
        </EuiFlexItem>
        <EuiFlexItem grow={9}>
          <EuiCompressedComboBox
            noSuggestions
            placeholder="필드 이름 입력"
            selectedOptions={props.fields}
            onChange={props.onFieldChangeHandler}
            onCreateOption={props.onFieldCreateHandler}
          />
        </EuiFlexItem>
      </EuiFlexGroup>
    </FormRow>
  );
}

export function AnonymizationRow(props: {
  value: ComboBoxOptions;
  onChangeHandler: (s: ComboBoxOptions) => void;
  onCreateHandler: (s: string) => void;
}) {
  return (
    <FormRow
      headerText="익명화"
      // Wazuh: description text hidden per request.
      optional
    >
      <EuiCompressedComboBox
        noSuggestions
        placeholder="필드 이름 입력"
        selectedOptions={props.value}
        onChange={props.onChangeHandler}
        onCreateOption={props.onCreateHandler}
      />
    </FormRow>
  );
}

export function generateIndexPermissionPanels(
  indexPermissions: RoleIndexPermissionStateClass[],
  permisionOptionsSet: ComboBoxOptions,
  setRoleIndexPermission: Dispatch<SetStateAction<RoleIndexPermissionStateClass[]>>
) {
  const panels = indexPermissions.map((permission, arrayIndex) => {
    const onValueChangeHandler = (attributeToUpdate: string) =>
      updateElementInArrayHandler(setRoleIndexPermission, [arrayIndex, attributeToUpdate]);

    const onCreateOptionHandler = (attributeToUpdate: string) =>
      appendOptionToComboBoxHandler(setRoleIndexPermission, [arrayIndex, attributeToUpdate]);

    return (
      <Fragment key={`index-permission-${arrayIndex}`}>
        <EuiAccordion
          id={`index-permission-${arrayIndex}`}
          initialIsOpen={arrayIndex === 0}
          buttonContent={
            permission.indexPatterns.map(comboBoxOptionToString).join(', ') ||
            '인덱스 권한 추가'
          }
          extraAction={
            <EuiSmallButton
              color="danger"
              onClick={() => removeElementFromArray(setRoleIndexPermission, [], arrayIndex)}
            >
              삭제
            </EuiSmallButton>
          }
        >
          <IndexPatternRow
            value={permission.indexPatterns}
            onChangeHandler={onValueChangeHandler('indexPatterns')}
            onCreateHandler={onCreateOptionHandler('indexPatterns')}
          />
          <IndexPermissionRow
            value={permission.allowedActions}
            permisionOptionsSet={permisionOptionsSet}
            onChangeHandler={onValueChangeHandler('allowedActions')}
          />
          <DocLevelSecurityRow
            value={permission.docLevelSecurity}
            onChangeHandler={(e) => onValueChangeHandler('docLevelSecurity')(e.target.value)}
          />
          <FieldLevelSecurityRow
            method={permission.fieldLevelSecurityMethod}
            fields={permission.fieldLevelSecurityFields}
            onMethodChangeHandler={onValueChangeHandler('fieldLevelSecurityMethod')}
            onFieldChangeHandler={onValueChangeHandler('fieldLevelSecurityFields')}
            onFieldCreateHandler={onCreateOptionHandler('fieldLevelSecurityFields')}
          />
          <AnonymizationRow
            value={permission.maskedFields}
            onChangeHandler={onValueChangeHandler('maskedFields')}
            onCreateHandler={onCreateOptionHandler('maskedFields')}
          />
        </EuiAccordion>
        <EuiHorizontalRule />
      </Fragment>
    );
  });
  return <>{panels}</>;
}

export function IndexPermissionPanel(props: {
  state: RoleIndexPermissionStateClass[];
  optionUniverse: ComboBoxOptions;
  setState: Dispatch<SetStateAction<RoleIndexPermissionStateClass[]>>;
}) {
  const { state, optionUniverse, setState } = props;
  // Show one empty row if there is no data.
  useEffect(() => {
    if (isEmpty(state)) {
      setState([getEmptyIndexPermission()]);
    }
  }, [state, setState]);
  return (
    <PanelWithHeader
      headerText="인덱스 권한"
      // Wazuh: description text and "Learn more" link hidden per request.
    >
      {generateIndexPermissionPanels(state, optionUniverse, setState)}
      <EuiSmallButton
        onClick={() => {
          appendElementToArray(setState, [], getEmptyIndexPermission());
        }}
      >
        인덱스 권한 추가
      </EuiSmallButton>
    </PanelWithHeader>
  );
}
