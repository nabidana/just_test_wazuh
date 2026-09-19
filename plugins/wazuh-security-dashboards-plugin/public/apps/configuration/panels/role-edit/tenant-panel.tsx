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
  EuiSmallButton,
  EuiCompressedComboBox,
  EuiFlexGroup,
  EuiFlexItem,
  EuiCompressedSuperSelect,
} from '@elastic/eui';
import React, { Dispatch, Fragment, SetStateAction, useEffect } from 'react';
import { isEmpty } from 'lodash';
import { RoleTenantPermission, TenantPermissionType, ComboBoxOptions } from '../../types';
import {
  appendElementToArray,
  removeElementFromArray,
  updateElementInArrayHandler,
} from '../../utils/array-state-utils';
import {
  appendOptionToComboBoxHandler,
  stringToComboBoxOption,
  comboBoxOptionToString,
} from '../../utils/combo-box-utils';
import { FormRow } from '../../utils/form-row';
import { PanelWithHeader } from '../../utils/panel-with-header';
import { RoleTenantPermissionStateClass } from './types';
import { TENANT_READ_PERMISSION, TENANT_WRITE_PERMISSION } from '../../constants';
import { getTenantPermissionType } from '../../utils/tenant-utils';

export function buildTenantPermissionState(
  permissions: RoleTenantPermission[]
): RoleTenantPermissionStateClass[] {
  return permissions.map((permission) => {
    const permissionType = getTenantPermissionType(permission.allowed_actions);
    return {
      tenantPatterns: permission.tenant_patterns.map(stringToComboBoxOption),
      permissionType,
    };
  });
}

const TENANT_PERMISSION_TYPE_DICT: Record<string, string[]> = {
  [TenantPermissionType.ReadWrite]: [TENANT_WRITE_PERMISSION],
  [TenantPermissionType.Read]: [TENANT_READ_PERMISSION],
  [TenantPermissionType.None]: [],
};

export function unbuildTenantPermissionState(
  permissions: RoleTenantPermissionStateClass[]
): RoleTenantPermission[] {
  return permissions.map((permission) => {
    return {
      tenant_patterns: permission.tenantPatterns.map(comboBoxOptionToString),
      allowed_actions: TENANT_PERMISSION_TYPE_DICT[permission.permissionType],
    };
  });
}

function getEmptyTenantPermission(): RoleTenantPermissionStateClass {
  return {
    tenantPatterns: [],
    permissionType: TenantPermissionType.ReadWrite,
  };
}

function generateTenantPermissionPanels(
  tenantPermissions: RoleTenantPermissionStateClass[],
  permisionOptionsSet: ComboBoxOptions,
  setPermissions: Dispatch<SetStateAction<RoleTenantPermissionStateClass[]>>
) {
  const panels = tenantPermissions.map((tenantPermission, arrayIndex) => {
    const onValueChangeHandler = (attributeToUpdate: string) =>
      updateElementInArrayHandler(setPermissions, [arrayIndex, attributeToUpdate]);

    const onCreateOptionHandler = (attributeToUpdate: string) =>
      appendOptionToComboBoxHandler(setPermissions, [arrayIndex, attributeToUpdate]);

    return (
      <Fragment key={`tenant-permission-${arrayIndex}`}>
        <EuiFlexGroup>
          <EuiFlexItem style={{ maxWidth: '400px' }}>
            <EuiCompressedComboBox
              placeholder="테넌트 이름 검색 또는 테넌트 패턴 추가"
              selectedOptions={tenantPermission.tenantPatterns}
              onChange={onValueChangeHandler('tenantPatterns')}
              onCreateOption={onCreateOptionHandler('tenantPatterns')}
              options={permisionOptionsSet}
              id="roles-tenant-permission-box"
            />
          </EuiFlexItem>
          <EuiFlexItem style={{ maxWidth: '170px' }}>
            <EuiCompressedSuperSelect
              valueOfSelected={tenantPermission.permissionType}
              onChange={onValueChangeHandler('permissionType')}
              options={[
                { inputDisplay: TenantPermissionType.Read, value: TenantPermissionType.Read },
                {
                  inputDisplay: TenantPermissionType.ReadWrite,
                  value: TenantPermissionType.ReadWrite,
                },
              ]}
            />
          </EuiFlexItem>
          <EuiFlexItem grow={false}>
            <EuiSmallButton
              color="danger"
              onClick={() => removeElementFromArray(setPermissions, [], arrayIndex)}
            >
              삭제
            </EuiSmallButton>
          </EuiFlexItem>
        </EuiFlexGroup>
      </Fragment>
    );
  });
  return <>{panels}</>;
}

export function TenantPanel(props: {
  state: RoleTenantPermissionStateClass[];
  optionUniverse: ComboBoxOptions;
  setState: Dispatch<SetStateAction<RoleTenantPermissionStateClass[]>>;
}) {
  const { state, optionUniverse, setState } = props;
  // Show one empty row if there is no data.

  useEffect(() => {
    if (isEmpty(state)) {
      setState([getEmptyTenantPermission()]);
    }
  }, [state, setState]);
  return (
    <PanelWithHeader
      headerText="테넌트 권한"
      // Wazuh: description text and "Learn more" link hidden per request.
    >
      <FormRow headerText="테넌트">
        {generateTenantPermissionPanels(state, optionUniverse, setState)}
      </FormRow>

      <EuiSmallButton
        onClick={() => {
          appendElementToArray(setState, [], getEmptyTenantPermission());
        }}
      >
        테넌트 권한 추가
      </EuiSmallButton>
    </PanelWithHeader>
  );
}
