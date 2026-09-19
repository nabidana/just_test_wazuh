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
  EuiSuperSelect,
  EuiInMemoryTable,
  EuiConfirmModal,
  EuiOverlayMask,
  EuiFieldText,
  EuiText,
} from '@elastic/eui';
import { WzRequest } from '../../../react-services/wz-request';
import { ErrorHandler } from '../../../react-services/error-handler';
import { UI_LOGGER_LEVELS } from '../../../../common/constants';
import { UI_ERROR_SEVERITIES } from '../../../react-services/error-orchestrator/types';
import { getErrorOrchestrator } from '../../../react-services/common-services';
import { WzFlyout } from '../../common/flyouts';
import { WzButtonPermissions } from '../../common/permissions/button';

export const CreatePolicyFlyout = ({ closeFlyout }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [resources, setResources] = useState([]);
  const [resourceValue, setResourceValue] = useState('');
  const [resourceIdentifierValue, setResourceIdentifierValue] = useState('');
  const [availableResources, setAvailableResources] = useState([]);
  const [addedActions, setAddedActions] = useState([]);
  const [availableActions, setAvailableActions] = useState([]);
  const [addedResources, setAddedResources] = useState([]);
  const [actions, setActions] = useState([]);
  const [actionValue, setActionValue] = useState('');
  const [policyName, setPolicyName] = useState('');
  const [effectValue, setEffectValue] = useState();
  const [hasChanges, setHasChanges] = useState(false);

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
          icon: 'trash',
          onClick: resource => removeResource(resource),
        },
      ],
    },
  ];

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
      .sort((a, b) => a.value.localeCompare(b.value));
    setActions(actions);
  }

  const loadResources = () => {
    let allResources = [];
    addedActions.forEach(x => {
      const res = (availableActions[x.action] || {})['resources'];
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
                  {availableResources[x].description}
                </p>
              </EuiText>
            </>
          ),
        };
      })
      .sort((a, b) => a.value.localeCompare(b.value));
    setResources(resources);
  };

  const removeAction = action => {
    setAddedActions(addedActions.filter(x => x !== action));
  };

  const createPolicy = async () => {
    try {
      const result = await WzRequest.apiReq('POST', '/security/policies', {
        name: policyName,
        policy: {
          actions: addedActions.map(x => x.action),
          resources: addedResources.map(x => x.resource),
          effect: effectValue,
        },
      });
      const resultData = result?.data?.data;
      if (resultData?.failed_items && resultData?.failed_items?.length) {
        return;
      }
      ErrorHandler.info('정책이 성공적으로 생성되었습니다', '');
      setPolicyName('');
      setAddedActions([]);
      setAddedResources([]);
      setEffectValue(null);
    } catch (error) {
      const options = {
        context: `${CreatePolicyFlyout.name}.createPolicy`,
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
    closeFlyout(true);
  };

  const getIdentifier = () => {
    const keys = Object.keys(availableResources) || [];
    return (keys[resourceValue] || ':').split(':')[1];
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

  const addAction = () => {
    if (!addedActions.filter(x => x.action === actionValue).length) {
      setAddedActions(addedActions => [
        ...addedActions,
        { action: actionValue },
      ]);
    }
    setActionValue('');
  };

  const removeResource = resource => {
    setAddedResources(addedResources.filter(x => x !== resource));
  };

  const onChangePolicyName = e => {
    setPolicyName(e.target.value);
  };

  const onChangeResourceValue = async value => {
    setResourceValue(value);
    setResourceIdentifierValue('');
  };

  const onChangeActionValue = async value => {
    setActionValue(value);
  };

  const onEffectValueChange = value => {
    setEffectValue(value);
  };

  const onChangeResourceIdentifierValue = async e => {
    setResourceIdentifierValue(e.target.value);
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
            setHasChanges(false);
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
    getData();
  }, []);

  useEffect(() => {
    loadResources();
  }, [addedActions]);

  useEffect(() => {
    if (
      policyName.length ||
      actionValue.length ||
      addedActions.length ||
      addedResources.length ||
      effectValue
    ) {
      setHasChanges(true);
    } else {
      setHasChanges(false);
    }
  }, [policyName, actionValue, addedActions, addedResources, effectValue]);

  const onClose = () => {
    hasChanges ? setIsModalVisible(true) : closeFlyout(false);
  };

  return (
    <>
      <WzFlyout flyoutProps={{ className: 'wzApp' }} onClose={onClose}>
        <EuiFlyoutHeader hasBorder={false}>
          <EuiTitle size='m'>
            <h2>새 정책</h2>
          </EuiTitle>
        </EuiFlyoutHeader>
        <EuiFlyoutBody>
          <EuiForm component='form' style={{ padding: 24 }}>
            <EuiFormRow
              label='정책 이름'
              helpText='이 새 정책의 이름을 입력하세요.'
            >
              <EuiFieldText
                data-test-subj='createPolicyName'
                placeholder=''
                value={policyName}
                onChange={e => onChangePolicyName(e)}
                aria-label=''
              />
            </EuiFormRow>
            <EuiSpacer></EuiSpacer>
            <EuiFlexGroup>
              <EuiFlexItem>
                <EuiFormRow
                  data-test-subj='createPolicyActionRow'
                  label='작업'
                  helpText='정책이 수행될 작업을 설정합니다.'
                >
                  <EuiSuperSelect
                    options={actions}
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
                    data-test-subj='createPolicyAddAction'
                    onClick={() => addAction()}
                    iconType='plusInCircle'
                    disabled={!actionValue}
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
                  data-test-subj='createPolicyResourceRow'
                >
                  <EuiSuperSelect
                    options={resources}
                    valueOfSelected={resourceValue}
                    onChange={value => onChangeResourceValue(value)}
                    itemLayoutAlign='top'
                    hasDividers
                    disabled={!addedActions.length}
                  />
                </EuiFormRow>
              </EuiFlexItem>
              <EuiFlexItem>
                <EuiFormRow
                  label='리소스 식별자'
                  helpText='리소스 식별자를 입력하세요. 전체를 지정하려면 *를 입력하세요.'
                >
                  <EuiFieldText
                    data-test-subj='createPolicyResourceIdentifier'
                    placeholder={getIdentifier()}
                    value={resourceIdentifierValue}
                    onChange={e => onChangeResourceIdentifierValue(e)}
                    disabled={!resourceValue}
                  />
                </EuiFormRow>
              </EuiFlexItem>
              <EuiFlexItem grow={false}>
                <EuiFormRow hasEmptyLabelSpace>
                  <EuiButton
                    data-test-subj='createPolicyAddResource'
                    onClick={() => addResource()}
                    iconType='plusInCircle'
                    disabled={!resourceIdentifierValue}
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
            <EuiFormRow
              label='효과 선택'
              helpText='효과를 선택하세요.'
              data-test-subj='createPolicyEffectRow'
            >
              <EuiSuperSelect
                options={effectOptions}
                valueOfSelected={effectValue}
                onChange={value => onEffectValueChange(value)}
              />
            </EuiFormRow>
            <EuiSpacer />
            <WzButtonPermissions
              buttonType='default'
              permissions={[{ action: 'security:create', resource: '*:*:*' }]}
              data-test-subj='createPolicyButton'
              disabled={
                !policyName ||
                !addedActions.length ||
                !addedResources.length ||
                !effectValue
              }
              onClick={() => {
                createPolicy();
              }}
              fill
            >
              정책 생성
            </WzButtonPermissions>
          </EuiForm>
        </EuiFlyoutBody>
      </WzFlyout>
      {modal}
    </>
  );
};
