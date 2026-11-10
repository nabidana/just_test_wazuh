import React, { useState, useEffect } from 'react';
import {
  EuiButton,
  EuiTitle,
  EuiFlyoutHeader,
  EuiFlyoutBody,
  EuiForm,
  EuiFormRow,
  EuiSpacer,
  EuiFlexGroup,
  EuiFlexItem,
  EuiBadge,
  EuiSuperSelect,
  EuiText,
  EuiInMemoryTable,
  EuiFieldText,
  EuiConfirmModal,
  EuiOverlayMask,
} from '@elastic/eui';
import { WzRequest } from '../../../react-services/wz-request';
import { ErrorHandler } from '../../../react-services/error-handler';
import { WzAPIUtils } from '../../../react-services/wz-api-utils';
import { UI_LOGGER_LEVELS } from '../../../../common/constants';
import { UI_ERROR_SEVERITIES } from '../../../react-services/error-orchestrator/types';
import { getErrorOrchestrator } from '../../../react-services/common-services';
import _ from 'lodash';
import { WzFlyout } from '../../common/flyouts';
import { WzButtonPermissions } from '../../common/permissions/button';

export const EditPolicyFlyout = ({ policy, closeFlyout }) => {
  const isReserved = WzAPIUtils.isReservedID(policy.id);
  const [actionValue, setActionValue] = useState('');
  const [initialActionValue] = useState('');
  const [addedActions, setAddedActions] = useState([]);
  const [initialAddedActions, setInitialAddedActions] = useState([]);
  const [availableResources, setAvailableResources] = useState([]);
  const [availableActions, setAvailableActions] = useState([]);
  const [actions, setActions] = useState([]);
  const [addedResources, setAddedResources] = useState([]);
  const [initialAddedResources, setInitialAddedResources] = useState([]);
  const [resources, setResources] = useState([]);
  const [resourceValue, setResourceValue] = useState('');
  const [initialResourceValue] = useState('');
  const [resourceIdentifierValue, setResourceIdentifierValue] = useState('');
  const [effectValue, setEffectValue] = useState();
  const [initialEffectValue, setInitialEffectValue] = useState();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [hasChanges, setHasChanges] = useState(false);

  useEffect(() => {
    getData();
    initData();
  }, []);

  useEffect(() => {
    loadResources();
  }, [addedActions, availableActions]);

  const updatePolicy = async () => {
    try {
      const actions = addedActions.map(item => item.action);
      const resources = addedResources.map(item => item.resource);
      const response = await WzRequest.apiReq(
        'PUT',
        `/security/policies/${policy.id}`,
        {
          policy: {
            actions: actions,
            resources: resources,
            effect: effectValue,
          },
        },
      );

      const data = response?.data?.data;
      if (data?.failed_items && data?.failed_items?.length) {
        return;
      }
      ErrorHandler.info(
        '정책이 성공적으로 업데이트되었습니다',
      );
      closeFlyout(true);
    } catch (error) {
      const options = {
        context: `${EditPolicyFlyout.name}.updatePolicy`,
        level: UI_LOGGER_LEVELS.ERROR,
        severity: UI_ERROR_SEVERITIES.BUSINESS,
        store: true,
        error: {
          error: error,
          message: error.message || error,
          title: error.name || error,
        },
      };
      getErrorOrchestrator().handleError(options);
    }
  };

  async function getData() {
    const resourcesRequest = await WzRequest.apiReq(
      'GET',
      '/security/resources',
      {},
    );
    const actionsRequest = await WzRequest.apiReq(
      'GET',
      '/security/actions',
      {},
    );
    const resourcesData = resourcesRequest?.data?.data || {};
    setAvailableResources(resourcesData);

    const actionsData = actionsRequest?.data?.data || {};
    setAvailableActions(actionsData);
    const actions = Object.keys(actionsData)
      .map((x, idx) => {
        return {
          id: idx,
          value: x,
          inputDisplay: x,
          dropdownDisplay: (
            <>
              <strong>{x}</strong>
              <EuiText size='s' color='subdued'>
                <p className='euiTextColor--subdued'>
                  {actionsData[x].description}
                </p>
              </EuiText>
            </>
          ),
        };
      })
      .sort((a, b) => a.value?.localeCompare(b.value));
    setActions(actions);
  }

  const loadResources = () => {
    let allResources = [];
    addedActions
      .filter(x => !!availableActions?.[x.action]) // Remove configured actions no longer available on the API
      .forEach(x => {
        const res = availableActions[x.action]?.['resources'];
        allResources = allResources.concat(res);
      });
    const allResourcesSet = new Set(allResources);
    const resources = Array.from(allResourcesSet)
      .map((x, idx) => {
        return {
          id: idx,
          value: x,
          inputDisplay: x,
          dropdownDisplay: (
            <>
              <strong>{x}</strong>
              <EuiText size='s' color='subdued'>
                <p className='euiTextColor--subdued'>
                  {(availableResources[x] || {}).description}
                </p>
              </EuiText>
            </>
          ),
        };
      })
      .sort((a, b) => a.value?.localeCompare(b.value));
    setResources(resources);
  };

  const initData = () => {
    const policies = ((policy || {}).policy || {}).actions || [];
    const initPolicies = policies.map(item => {
      return { action: item };
    });
    setAddedActions(initPolicies);
    setInitialAddedActions(initPolicies);

    const resources = ((policy || {}).policy || {}).resources || [];
    const initResources = resources.map(item => {
      return { resource: item };
    });
    setAddedResources(initResources);
    setInitialAddedResources(initResources);

    setEffectValue(policy.policy.effect);
    setInitialEffectValue(policy.policy.effect);
  };

  const onEffectValueChange = value => {
    setEffectValue(value);
  };

  const effectOptions = [
    {
      value: 'allow',
      inputDisplay: '허용',
    },
    {
      value: 'deny',
      inputDisplay: '거부',
    },
  ];

  const onChangeActionValue = async value => {
    setActionValue(value);
  };

  const addAction = () => {
    if (!addedActions.filter(x => x.action === actionValue).length) {
      setAddedActions(addedActions => [
        ...addedActions,
        { action: actionValue },
      ]);
    }
    setActionValue('');
  };

  const removeAction = action => {
    setAddedActions(addedActions.filter(x => x !== action));
  };

  const actionsColumns = [
    {
      field: 'action',
      name: '작업',
      sortable: true,
      truncateText: true,
    },
    {
      name: '',
      actions: [
        {
          name: '제거',
          description: '이 작업 제거',
          type: 'icon',
          enabled: () => !isReserved,
          color: 'danger',
          icon: 'trash',
          onClick: action => removeAction(action),
        },
      ],
    },
  ];

  const resourcesColumns = [
    {
      field: 'resource',
      name: '리소스',
      sortable: true,
      truncateText: true,
    },
    {
      name: '',
      actions: [
        {
          name: '제거',
          description: '이 리소스 제거',
          type: 'icon',
          color: 'danger',
          enabled: () => !isReserved,
          icon: 'trash',
          onClick: resource => removeResource(resource),
        },
      ],
    },
  ];

  const onChangeResourceValue = async value => {
    setResourceValue(value);
    setResourceIdentifierValue('');
  };

  const getIdentifier = () => {
    const keys = Object.keys(availableResources) || [];
    return (keys[resourceValue] || ':').split(':')[1];
  };

  const onChangeResourceIdentifierValue = async e => {
    setResourceIdentifierValue(e.target.value);
  };

  const removeResource = resource => {
    setAddedResources(addedResources.filter(x => x !== resource));
  };

  const addResource = () => {
    if (
      !addedResources.filter(
        x => x.resource === `${resourceValue}:${resourceIdentifierValue}`,
      ).length
    ) {
      setAddedResources(addedResources => [
        ...addedResources,
        { resource: `${resourceValue}:${resourceIdentifierValue}` },
      ]);
    }
    setResourceIdentifierValue('');
  };

  let modal;
  if (isModalVisible) {
    modal = (
      <EuiOverlayMask>
        <EuiConfirmModal
          title='제출되지 않은 변경사항'
          onConfirm={() => {
            setIsModalVisible(false);
            closeFlyout(false);
          }}
          onCancel={() => setIsModalVisible(false)}
          cancelButtonText="아니요"
          confirmButtonText='예'
        >
          <p style={{ textAlign: 'center' }}>
            저장되지 않은 변경사항이 있습니다. 계속하시겠습니까?
          </p>
        </EuiConfirmModal>
      </EuiOverlayMask>
    );
  }
  useEffect(() => {
    if (
      initialActionValue != actionValue ||
      !_.isEqual(addedResources, initialAddedResources) ||
      !_.isEqual(addedActions, initialAddedActions) ||
      initialResourceValue != resourceValue ||
      initialEffectValue != effectValue
    ) {
      setHasChanges(true);
    } else {
      setHasChanges(false);
    }
  }, [actionValue, addedResources, addedActions, resourceValue, effectValue]);

  const onClose = () => {
    hasChanges ? setIsModalVisible(true) : closeFlyout(false);
  };

  return (
    <>
      <WzFlyout flyoutProps={{ className: 'wzApp' }} onClose={onClose}>
        <EuiFlyoutHeader hasBorder={false}>
          <EuiTitle size='m'>
            <h2>
              {policy.name} 정책 편집&nbsp;&nbsp;
              {isReserved && <EuiBadge color='primary'>예약됨</EuiBadge>}
            </h2>
          </EuiTitle>
        </EuiFlyoutHeader>
        <EuiFlyoutBody>
          <EuiForm component='form' style={{ padding: 24 }}>
            <EuiFormRow
              label='정책 이름'
              helpText='이 새 정책의 이름을 입력하세요.'
            >
              <EuiFieldText
                placeholder=''
                disabled={isReserved}
                value={policy.name}
                readOnly={true}
                onChange={() => {}}
                aria-label=''
              />
            </EuiFormRow>
            <EuiSpacer></EuiSpacer>
            <EuiFlexGroup>
              <EuiFlexItem>
                <EuiFormRow
                  label='작업'
                  helpText='정책이 수행될 작업을 설정합니다.'
                >
                  <EuiSuperSelect
                    options={actions}
                    disabled={isReserved}
                    valueOfSelected={actionValue}
                    onChange={value => onChangeActionValue(value)}
                    itemLayoutAlign='top'
                    hasDividers
                  />
                </EuiFormRow>
              </EuiFlexItem>
              <EuiFlexItem></EuiFlexItem>
              <EuiFlexItem grow={false}>
                <EuiFormRow hasEmptyLabelSpace>
                  <EuiButton
                    onClick={() => addAction()}
                    iconType='plusInCircle'
                    disabled={!actionValue || isReserved}
                  >
                    추가
                  </EuiButton>
                </EuiFormRow>
              </EuiFlexItem>
            </EuiFlexGroup>
            {!!addedActions.length && (
              <>
                <EuiSpacer size='s'></EuiSpacer>
                <EuiFlexGroup>
                  <EuiFlexItem>
                    <EuiInMemoryTable
                      items={addedActions}
                      columns={actionsColumns}
                    />
                  </EuiFlexItem>
                </EuiFlexGroup>
              </>
            )}
            <EuiSpacer></EuiSpacer>
            <EuiFlexGroup>
              <EuiFlexItem>
                <EuiFormRow
                  label='리소스'
                  helpText='이 정책이 적용될 리소스를 선택하세요.'
                >
                  <EuiSuperSelect
                    options={resources}
                    valueOfSelected={resourceValue}
                    onChange={value => onChangeResourceValue(value)}
                    itemLayoutAlign='top'
                    hasDividers
                    disabled={!addedActions.length || isReserved}
                  />
                </EuiFormRow>
              </EuiFlexItem>
              <EuiFlexItem>
                <EuiFormRow
                  label='리소스 식별자'
                  helpText='리소스 식별자를 입력하세요. 전체를 지정하려면 *를 입력하세요.'
                >
                  <EuiFieldText
                    placeholder={getIdentifier()}
                    value={resourceIdentifierValue}
                    onChange={e => onChangeResourceIdentifierValue(e)}
                    disabled={!resourceValue || isReserved}
                  />
                </EuiFormRow>
              </EuiFlexItem>
              <EuiFlexItem grow={false}>
                <EuiFormRow hasEmptyLabelSpace>
                  <EuiButton
                    onClick={() => addResource()}
                    iconType='plusInCircle'
                    disabled={!resourceIdentifierValue || isReserved}
                  >
                    추가
                  </EuiButton>
                </EuiFormRow>
              </EuiFlexItem>
            </EuiFlexGroup>
            {!!addedResources.length && (
              <>
                <EuiSpacer size='s'></EuiSpacer>
                <EuiFlexGroup>
                  <EuiFlexItem>
                    <EuiInMemoryTable
                      items={addedResources}
                      columns={resourcesColumns}
                    />
                  </EuiFlexItem>
                </EuiFlexGroup>
              </>
            )}
            <EuiSpacer></EuiSpacer>
            <EuiFormRow label='효과 선택' helpText='효과를 선택하세요.'>
              <EuiSuperSelect
                options={effectOptions}
                valueOfSelected={effectValue}
                onChange={value => onEffectValueChange(value)}
              />
            </EuiFormRow>
            <EuiSpacer />
            <WzButtonPermissions
              buttonType='default'
              permissions={[
                {
                  action: 'security:update',
                  resource: `policy:id:${policy.id}`,
                },
              ]}
              disabled={isReserved}
              onClick={updatePolicy}
              fill
            >
              적용
            </WzButtonPermissions>
          </EuiForm>
        </EuiFlyoutBody>
      </WzFlyout>
      {modal}
    </>
  );
};
