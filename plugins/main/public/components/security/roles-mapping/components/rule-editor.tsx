import React, { useState, useEffect, Fragment } from 'react';
import {
  EuiToolTip,
  EuiButtonIcon,
  EuiTitle,
  EuiFormRow,
  EuiFlexGroup,
  EuiFlexItem,
  EuiPanel,
  EuiText,
  EuiLink,
  EuiPopover,
  EuiButtonEmpty,
  EuiIcon,
  EuiSelect,
  EuiFieldText,
  EuiCodeEditor,
  EuiHorizontalRule,
  EuiComboBox,
  EuiComboBoxOptionOption,
  EuiSpacer,
} from '@elastic/eui';
import {
  getJsonFromRule,
  decodeJsonRule,
  getSelectedUsersFromRules,
} from '../helpers/rule-editor.helper';
import { WAZUH_SECURITY_PLUGIN_OPENSEARCH_DASHBOARDS_SECURITY } from '../../../../../common/constants';
import 'brace/mode/json';
import 'brace/snippets/json';
import 'brace/ext/language_tools';
import 'brace/ext/searchbox';
import _ from 'lodash';
import { webDocumentationLink } from '../../../../../common/services/web_documentation';
import { WzButtonPermissions } from '../../../common/permissions/button';

export const RuleEditor = ({
  save,
  initialRule,
  isLoading,
  isReserved,
  internalUsers,
  currentPlatform,
  onFormChange,
  saveButtonPermissions = [],
}) => {
  const [logicalOperator, setLogicalOperator] = useState('OR');
  const [isLogicalPopoverOpen, setIsLogicalPopoverOpen] = useState(false);
  const [isJsonEditor, setIsJsonEditor] = useState(false);
  const [ruleJson, setRuleJson] = useState('{\n\t\n}');
  const [hasWrongFormat, setHasWrongFormat] = useState(false);
  const [rules, setRules] = useState<any[]>([]);
  const [initialRules, setInitialRules] = useState<any[]>([]);
  const [initialInternalUserRules, setInitialInternalUserRules] = useState<
    any[]
  >([]);
  const [internalUserRules, setInternalUserRules] = useState<any[]>([]);
  const [internalUsersOptions, setInternalUsersOptions] = useState<
    EuiComboBoxOptionOption<any>[]
  >([]);
  const [selectedUsers, setSelectedUsers] = useState<
    EuiComboBoxOptionOption<any>[]
  >([]);
  const [initialSelectedUsers, setInitialSelectedUsers] = useState<
    EuiComboBoxOptionOption<any>[]
  >([]);
  const [initialLogicalOperator, setInitialLogicalOperator] = useState('OR');

  const searchOperationOptions = [
    { value: 'FIND', text: 'FIND' },
    { value: 'FIND$', text: 'FIND$' },
    { value: 'MATCH', text: 'MATCH' },
    { value: 'MATCH$', text: 'MATCH$' },
  ];
  const default_user_field =
    currentPlatform === WAZUH_SECURITY_PLUGIN_OPENSEARCH_DASHBOARDS_SECURITY
      ? 'user_name'
      : 'username';
  const default_rule = {
    user_field: default_user_field,
    searchOperation: 'FIND',
    value: 'zero',
  };

  useEffect(() => {
    if (initialRule) {
      setStateFromRule(JSON.stringify(initialRule));
      const rulesResult = getRulesFromJson(JSON.stringify(initialRule));
      const _selectedUsers = getSelectedUsersFromRules(
        rulesResult.internalUsersRules,
      );
      setInitialLogicalOperator(rulesResult.logicalOperator);
      setInitialRules(rulesResult.customRules);
      setInitialInternalUserRules(rulesResult.internalUsersRules);
      setInitialSelectedUsers(_selectedUsers);
    }
  }, []);

  useEffect(() => {
    if (internalUsers.length) {
      const users = internalUsers.map(user => ({
        label: user.user === 'wazuh' ? 'zero' : user.user,
        id: user.user,
      }));
      setInternalUsersOptions(users);
    }
  }, [internalUsers]);

  const setStateFromRule = jsonRule => {
    const rulesResult = getRulesFromJson(jsonRule);
    if (!rulesResult.wrongFormat) {
      setRules(rulesResult.customRules);
      setInternalUserRules(rulesResult.internalUsersRules);
      const _selectedUsers = getSelectedUsersFromRules(
        rulesResult.internalUsersRules,
      );
      setSelectedUsers(_selectedUsers);
      setIsJsonEditor(false);
    } else {
      setRuleJson(JSON.stringify(JSON.parse(jsonRule), undefined, 2));
      setIsJsonEditor(true);
    }
  };

  const onButtonClick = () =>
    setIsLogicalPopoverOpen(isLogicalPopoverOpen => !isLogicalPopoverOpen);
  const closeLogicalPopover = () => setIsLogicalPopoverOpen(false);

  const selectOperator = op => {
    setLogicalOperator(op);
    closeLogicalPopover();
  };

  const onSelectorChange = (e, idx) => {
    const rulesTmp = [...rules];
    rulesTmp[idx].searchOperation = e.target.value;
    setRules(rulesTmp);
  };

  const updateUserField = (e, idx) => {
    const rulesTmp = [...rules];
    rulesTmp[idx].user_field = e.target.value;
    setRules(rulesTmp);
  };

  const updateValueField = (e, idx) => {
    const rulesTmp = [...rules];
    rulesTmp[idx].value = e.target.value;
    setRules(rulesTmp);
  };

  const removeRule = id => {
    const rulesTmp = [...rules];
    rulesTmp.splice(id, 1);
    setRules(rulesTmp);
  };

  const getRulesFromJson = jsonRule => {
    if (jsonRule !== '{}' && jsonRule !== '') {
      // empty json is valid
      const { customRules, internalUsersRules, wrongFormat, logicalOperator } =
        decodeJsonRule(jsonRule, internalUsers);

      setLogicalOperator(logicalOperator);
      setHasWrongFormat(wrongFormat);

      return { customRules, internalUsersRules, wrongFormat, logicalOperator };
    } else {
      setLogicalOperator('');
      setHasWrongFormat(false);

      return {
        customRules: [],
        internalUsersRules: [],
        wrongFormat: false,
        logicalOperator: 'OR',
      };
    }
  };
  const printRules = () => {
    const rulesList = rules.map((item, idx) => {
      return (
        <Fragment key={`rule_${idx}`}>
          <EuiFlexGroup>
            <EuiFlexItem>
              <EuiFormRow label='사용자 필드'>
                <EuiFieldText
                  disabled={isLoading || isReserved}
                  placeholder=''
                  value={item.user_field}
                  onChange={e => updateUserField(e, idx)}
                  aria-label=''
                />
              </EuiFormRow>
            </EuiFlexItem>
            <EuiFlexItem grow={false}>
              <EuiFormRow label='검색 연산'>
                <EuiSelect
                  disabled={isLoading || isReserved}
                  id='selectDocExample'
                  options={searchOperationOptions}
                  value={item.searchOperation}
                  onChange={e => onSelectorChange(e, idx)}
                  aria-label='실제 레이블이 없을 때 사용하는 aria 레이블'
                />
              </EuiFormRow>
            </EuiFlexItem>
            <EuiFlexItem>
              <EuiFormRow label='값'>
                <EuiFieldText
                  disabled={isLoading || isReserved}
                  placeholder=''
                  value={item.value}
                  onChange={e => updateValueField(e, idx)}
                  aria-label=''
                />
              </EuiFormRow>
            </EuiFlexItem>
            <EuiFlexItem grow={false}>
              <EuiButtonIcon
                style={{ marginTop: 25 }}
                onClick={() => removeRule(idx)}
                iconType='trash'
                color='danger'
                aria-label='규칙 제거'
              />
            </EuiFlexItem>
          </EuiFlexGroup>
          <EuiFlexGroup>
            <EuiFlexItem>
              <EuiHorizontalRule margin='xs' />
            </EuiFlexItem>
          </EuiFlexGroup>
        </Fragment>
      );
    });

    return <div>{rulesList}</div>;
  };

  const addNewRule = () => {
    const rulesTmp = [...rules];
    rulesTmp.push(default_rule);
    setRules(rulesTmp);
  };

  const openJsonEditor = () => {
    const ruleObject = getJsonFromRule(
      internalUserRules,
      rules,
      logicalOperator,
    );

    setRuleJson(JSON.stringify(ruleObject, undefined, 2));
    setIsJsonEditor(true);
  };

  const openVisualEditor = () => {
    setStateFromRule(ruleJson);
  };

  const onChangeRuleJson = e => {
    setRuleJson(e);
    getRulesFromJson(e); // we test format to disable button if it's incorrect
  };

  const getSwitchVisualButton = () => {
    if (hasWrongFormat) {
      return (
        <EuiToolTip
          position='top'
          content="현재 규칙은 비주얼 편집기에서 편집할 수 없습니다"
        >
          <EuiButtonEmpty
            color='primary'
            isDisabled={hasWrongFormat}
            onClick={() => openVisualEditor()}
          >
            비주얼 편집기로 전환
          </EuiButtonEmpty>
        </EuiToolTip>
      );
    } else {
      return (
        <EuiButtonEmpty color='primary' onClick={() => openVisualEditor()}>
          비주얼 편집기로 전환
        </EuiButtonEmpty>
      );
    }
  };

  const saveRule = () => {
    if (isJsonEditor) {
      // if json editor is empty
      if (ruleJson === '') {
        setRuleJson('{}');
      }
      save(JSON.parse(ruleJson));
    } else {
      save(getJsonFromRule(internalUserRules, rules, logicalOperator));
    }
  };

  const onChangeSelectedUsers = selectedUsers => {
    setSelectedUsers(selectedUsers);
    const tmpInternalUsersRules = selectedUsers.map(user => {
      return {
        user_field: default_user_field,
        searchOperation: 'FIND',
        value: user.id,
      };
    });
    setInternalUserRules(tmpInternalUsersRules);
  };

  useEffect(() => {
    if (
      !_.isEqual(initialSelectedUsers, selectedUsers) ||
      !_.isEqual(initialRules, rules) ||
      !_.isEqual(initialInternalUserRules, internalUserRules) ||
      !_.isEqual(initialLogicalOperator, logicalOperator)
    ) {
      onFormChange(true);
    } else {
      onFormChange(false);
    }
  }, [selectedUsers, rules, internalUserRules, logicalOperator]);

  return (
    <>
      <EuiPanel>
        <EuiTitle>
          <h1>매핑 규칙</h1>
        </EuiTitle>
        <EuiFlexGroup>
          <EuiFlexItem>
            <EuiText>
              <span>이 규칙에 일치하는 사용자에게 역할을 할당합니다. </span>
              <EuiLink
                href={webDocumentationLink(
                  'user-manual/api/rbac/auth-context.html',
                )}
                external
                target='_blank'
                rel='noopener noreferrer'
              >
                자세히 알아보기
              </EuiLink>
            </EuiText>
          </EuiFlexItem>
        </EuiFlexGroup>
        <EuiFlexGroup>
          <EuiFlexItem>
            <EuiPanel>
              {(isJsonEditor && (
                <EuiCodeEditor
                  // theme="textmate"
                  readOnly={isLoading || isReserved}
                  width='100%'
                  height='250px'
                  value={ruleJson}
                  mode='json'
                  onChange={onChangeRuleJson}
                  wrapEnabled
                  aria-label='코드 편집기'
                />
              )) || (
                <Fragment>
                  <EuiTitle size='s'>
                    <h2>내부 사용자 매핑</h2>
                  </EuiTitle>
                  <EuiFormRow
                    label='내부 사용자'
                    helpText='선택한 역할 매핑에 내부 사용자를 할당하세요'
                  >
                    <EuiComboBox
                      placeholder='내부 사용자 선택'
                      options={internalUsersOptions}
                      selectedOptions={selectedUsers}
                      isLoading={isLoading}
                      onChange={onChangeSelectedUsers}
                      isClearable={true}
                      data-test-subj='demoComboBox'
                    />
                  </EuiFormRow>
                  <EuiSpacer />
                  <EuiTitle size='s'>
                    <h2>사용자 정의 규칙</h2>
                  </EuiTitle>
                  <EuiPopover
                    ownFocus
                    button={
                      <EuiButtonEmpty
                        disabled={isLoading || isReserved}
                        onClick={onButtonClick}
                        iconType='arrowDown'
                        iconSide='right'
                      >
                        {logicalOperator === 'AND'
                          ? '모두 참일 때'
                          : '하나라도 참일 때'}
                      </EuiButtonEmpty>
                    }
                    isOpen={isLogicalPopoverOpen}
                    closePopover={closeLogicalPopover}
                    anchorPosition='downCenter'
                  >
                    <div>
                      <EuiFlexGroup>
                        <EuiFlexItem>
                          <EuiButtonEmpty
                            disabled={isLoading || isReserved}
                            color='text'
                            onClick={() => selectOperator('AND')}
                          >
                            {logicalOperator === 'AND' && (
                              <EuiIcon type='check' />
                            )}
                            모두 참일 때
                          </EuiButtonEmpty>
                        </EuiFlexItem>
                      </EuiFlexGroup>
                      <EuiFlexGroup>
                        <EuiFlexItem>
                          <EuiButtonEmpty
                            disabled={isLoading || isReserved}
                            color='text'
                            onClick={() => selectOperator('OR')}
                          >
                            {logicalOperator === 'OR' && (
                              <EuiIcon type='check' />
                            )}
                            하나라도 참일 때
                          </EuiButtonEmpty>
                        </EuiFlexItem>
                      </EuiFlexGroup>
                    </div>
                  </EuiPopover>
                  {printRules()}

                  <EuiButtonEmpty
                    disabled={isLoading || isReserved}
                    color='primary'
                    onClick={() => addNewRule()}
                  >
                    새 규칙 추가
                  </EuiButtonEmpty>
                </Fragment>
              )}
            </EuiPanel>
          </EuiFlexItem>
        </EuiFlexGroup>
        <EuiFlexGroup>
          <EuiFlexItem grow={false}>
            {(isJsonEditor && getSwitchVisualButton()) || (
              <EuiButtonEmpty color='primary' onClick={() => openJsonEditor()}>
                JSON 편집기로 전환
              </EuiButtonEmpty>
            )}
          </EuiFlexItem>
        </EuiFlexGroup>
      </EuiPanel>
      <EuiFlexGroup style={{ marginTop: 6 }}>
        <EuiFlexItem></EuiFlexItem>
        <EuiFlexItem grow={false}>
          <WzButtonPermissions
            buttonType='default'
            permissions={saveButtonPermissions}
            disabled={isReserved}
            isLoading={isLoading}
            fill
            onClick={() => saveRule()}
          >
            역할 매핑 저장
          </WzButtonPermissions>
        </EuiFlexItem>
      </EuiFlexGroup>
    </>
  );
};
