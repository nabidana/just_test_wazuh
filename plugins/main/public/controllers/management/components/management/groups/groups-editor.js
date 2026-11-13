/*
 * Wazuh app - React component for registering agents.
 * Copyright (C) 2015-2022 Wazuh, Inc.
 *
 * This program is free software; you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation; either version 2 of the License, or
 * (at your option) any later version.
 *
 * Find more information about this on the LICENSE file.
 */
import React, { Component, Fragment } from 'react';

import { connect } from 'react-redux';
import { cleanFileContent } from '../../../../../redux/actions/groupsActions';
import validateConfigAfterSent from './utils/valid-configuration';

// Eui components
import {
  EuiPage,
  EuiSpacer,
  EuiFlexGroup,
  EuiFlexItem,
  EuiTitle,
  EuiToolTip,
  EuiButtonIcon,
  EuiButton,
  EuiComboBox,
  EuiFormRow,
  EuiCodeEditor,
  EuiConfirmModal,
  EuiPanel,
  EuiCodeBlock,
  EuiOverlayMask,
} from '@elastic/eui';

import GroupsHandler from './utils/groups-handler';
import {
  parseFimDirectories,
  addFimDirectory,
  removeFimDirectory,
  diffFimDirectories,
  splitNewFimPaths,
} from '../configuration/utils/fim-directories';

import { getToasts } from '../../../../../kibana-services';
import { validateXML } from '../configuration/utils/xml';
import { WzButtonPermissions } from '../../../../../components/common/permissions/button';
import { WzOverlayMask } from '../../../../../components/common/util';
import WazuhXmlMode from '../configuration/utils/wz-xml-mode';
import 'brace/theme/textmate';
import 'brace/mode/xml';
import 'brace/snippets/xml';
import 'brace/ext/language_tools';
import 'brace/ext/searchbox';
import { UI_LOGGER_LEVELS } from '../../../../../../common/constants';
import { UI_ERROR_SEVERITIES } from '../../../../../react-services/error-orchestrator/types';
import { getErrorOrchestrator } from '../../../../../react-services/common-services';

// "폴더 실시간 감시 추가/제거" 입력창 + 저장 버튼이 차지하는 대략적인 높이(px).
// 아래 코드 에디터의 height를 계산할 때 이만큼을 추가로 빼서 공간을 확보한다.
// (이 화면은 agent.conf 편집 화면이므로 fimDirectories/agent.conf가 대상이며,
// FIM_TARGET_GROUP처럼 그룹을 고정하지 않고 지금 열려 있는 그룹(groupName)을
// 그대로 사용한다 — VirusTotal 설정 화면의 "default" 고정 버전과 다른 점.)
const FIM_SECTION_HEIGHT_PX = 130;

class WzGroupsEditor extends Component {
  _isMounted = false;
  constructor(props) {
    super(props);
    this.codeEditorOptions = {
      fontSize: '14px',
      enableBasicAutocompletion: true,
      enableSnippets: true,
      enableLiveAutocompletion: true,
    };
    this.groupsHandler = GroupsHandler;
    const { fileContent } = this.props.state;

    const { name, content, isEditable, groupName } = fileContent;

    // agent.conf 파일을 열었을 때만 폴더 실시간 감시 추가/제거 UI를 보여준다
    // (다른 그룹 파일, 예: rules/decoders 오버라이드 파일 등에는 의미가 없음).
    const isAgentConf = (name || '').toLowerCase() === 'agent.conf';
    const initialFimOptions = isAgentConf
      ? parseFimDirectories(content).map(label => ({ label }))
      : [];

    this.state = {
      error: false,
      isSaving: false,
      content,
      name,
      isModalVisible: false,
      hasChanges: false,
      isEditable,
      initContent: content,
      groupName: groupName,
      // "폴더 실시간 감시 추가/제거" 관련 상태 (agent.conf 편집 시에만 사용).
      // fimDirectories: 마지막으로 불러오거나 저장한, 실제 agent.conf 기준 목록.
      // fimSelectedOptions: 화면에서 태그를 추가/제거하며 편집 중인 목록
      // (저장 버튼을 눌러야 실제로 agent.conf에 반영됨).
      isAgentConf,
      fimDirectories: initialFimOptions,
      fimSelectedOptions: initialFimOptions,
      fimSaving: false,
    };
  }

  updateHeight = () => {
    this.height = window.innerHeight - 275; //eslint-disable-line
    this.forceUpdate();
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.content !== this.state.content) {
      this.setState({
        hasChanges: this.state.content !== this.state.initContent,
      });
    }
  }

  componentWillUnmount() {
    // When the component is going to be unmounted its info is clear
    this._isMounted = false;
    window.removeEventListener('resize', this.updateHeight); //eslint-disable-line
  }

  componentDidMount() {
    this._isMounted = true;
    this.height = window.innerHeight - 275; //eslint-disable-line
    window.addEventListener('resize', this.updateHeight); //eslint-disable-line
    this.forceUpdate();
  }

  /**
   * Save the new content
   * @param {String} name
   */
  async save(name) {
    if (!this._isMounted) {
      return;
    }
    try {
      const { content, groupName } = this.state;
      this.setState({ isSaving: true, error: false });
      let saver = this.groupsHandler.sendGroupConfiguration;
      await saver(name, groupName, content);
      await validateConfigAfterSent();
      this.setState({ isSaving: false, hasChanges: false });
      const textSuccess = 'File successfully edited';
      this.showToast('success', 'Success', textSuccess, 3000);
    } catch (error) {
      const options = {
        context: `${WzGroupsEditor.name}.save`,
        level: UI_LOGGER_LEVELS.ERROR,
        severity: UI_ERROR_SEVERITIES.BUSINESS,
        error: {
          error: error,
          message: error.message || error,
          title: 'Error found saving the file.',
        },
      };
      getErrorOrchestrator().handleError(options);
      this.setState({ error, isSaving: false });
    }
  }

  showToast = (color, title, text, time) => {
    getToasts().add({
      color: color,
      title: title,
      text: text,
      toastLifeTimeMs: time,
    });
  };

  // 태그 제거(x) / EuiComboBox 자체 clear 등 선택 목록이 바뀔 때. 아직
  // agent.conf에는 반영하지 않고 화면 상태만 바꾼다("저장" 버튼을 눌러야
  // 실제로 적용됨 — 뺐다가 다시 추가하는 것도 저장 전까지는 자유롭게 가능).
  handleFimComboChange = selectedOptions => {
    this.setState({ fimSelectedOptions: selectedOptions || [] });
  };

  // 새 경로 입력 후 Enter. 콤마(,)나 줄바꿈으로 여러 경로를 한 번에 붙여넣은
  // 경우도 각각 별도 태그로 나눠서 추가한다 (복수 개 입력 지원).
  handleFimCreateOption = searchValue => {
    const current = this.state.fimSelectedOptions;
    const newOptions = splitNewFimPaths(searchValue, current);
    if (!newOptions.length) {
      return;
    }
    this.setState({ fimSelectedOptions: [...current, ...newOptions] });
  };

  // "감시 폴더 변경사항 저장" 버튼 (아래 raw 에디터의 "Save" 버튼과는 분리된
  // 별도 버튼). 화면에서 편집한 태그 목록(fimSelectedOptions)을 마지막으로
  // 불러온/저장한 목록(fimDirectories)과 비교해서, 서버의 최신 agent.conf를
  // 다시 받아온 뒤 그 위에 추가/제거를 적용하고 저장한다. 저장이 끝나면
  // 아래 raw 에디터(content/initContent)도 방금 저장한 최신 내용으로
  // 다시 채워서, 편집기 화면이 저장된 내용을 그대로 다시 읽어오게 한다.
  handleSaveFimDirectories = async () => {
    const { fimDirectories, fimSelectedOptions, groupName, name } =
      this.state;
    const selectedLabels = fimSelectedOptions.map(o => o.label);
    const { toAdd, toRemove } = diffFimDirectories(
      fimDirectories,
      fimSelectedOptions,
    );

    if (!toAdd.length && !toRemove.length) {
      this.showToast('warning', 'Warning', '변경된 감시 폴더가 없습니다.', 3000);
      return;
    }

    this.setState({ fimSaving: true });
    try {
      let currentContent =
        (await GroupsHandler.getFileContent(
          `/groups/${groupName}/files/${name}?raw=true`,
        )) || '';

      toRemove.forEach(label => {
        currentContent = removeFimDirectory(currentContent, label).xml;
      });
      toAdd.forEach(label => {
        currentContent = addFimDirectory(currentContent, label).xml;
      });

      await GroupsHandler.sendGroupConfiguration(
        name,
        groupName,
        currentContent,
      );
      await validateConfigAfterSent();

      const newOptions = selectedLabels.map(label => ({ label }));
      this.setState({
        fimSaving: false,
        fimDirectories: newOptions,
        fimSelectedOptions: newOptions,
        // 아래 raw 에디터도 방금 저장한 최신 내용으로 다시 읽어온다.
        content: currentContent,
        initContent: currentContent,
        hasChanges: false,
      });

      const parts = [];
      if (toAdd.length) parts.push(`추가 ${toAdd.length}개`);
      if (toRemove.length) parts.push(`제거 ${toRemove.length}개`);
      this.showToast(
        'success',
        'Success',
        `"${groupName}" 그룹의 실시간 감시(FIM) 폴더가 반영되었습니다(${parts.join(
          ', ',
        )}). 적용하려면 해당 그룹 에이전트를 재시작해야 합니다.`,
        4000,
      );
    } catch (error) {
      this.setState({ fimSaving: false });
      const options = {
        context: `${WzGroupsEditor.name}.handleSaveFimDirectories`,
        level: UI_LOGGER_LEVELS.ERROR,
        severity: UI_ERROR_SEVERITIES.BUSINESS,
        error: {
          error,
          message: error.message || String(error),
          title: '감시 폴더 변경사항 저장 중 오류가 발생했습니다.',
        },
      };
      getErrorOrchestrator().handleError(options);
    }
  };

  render() {
    const {
      name,
      content,
      isEditable,
      groupName,
      isAgentConf,
      fimSelectedOptions,
      fimSaving,
    } = this.state;

    const xmlError = validateXML(content);
    const saveButton = (
      <WzButtonPermissions
        permissions={[
          { action: 'group:update_config', resource: `group:id:${groupName}` },
          { action: 'cluster:status', resource: '*:*:*' },
        ]}
        fill
        iconType={isEditable && xmlError ? 'alert' : 'save'}
        isLoading={this.state.isSaving}
        isDisabled={name.length <= 4 || (isEditable && xmlError ? true : false)}
        onClick={() => this.save(name)}
      >
        {/* GS 인증용: 한글화 */}
        {isEditable && xmlError ? 'XML 형식 오류' : '저장'}
      </WzButtonPermissions>
    );

    const closeModal = () => this.setState({ isModalVisible: false });
    const showModal = () => this.setState({ isModalVisible: true });

    let modal;
    if (this.state.isModalVisible) {
      modal = (
        <EuiOverlayMask>
          <EuiConfirmModal
            // GS 인증용: 한글화
            title='저장되지 않은 변경사항'
            onConfirm={() => {
              closeModal;
              this.props.cleanFileContent();
            }}
            onCancel={closeModal}
            cancelButtonText='아니요'
            confirmButtonText='예, 진행합니다'
          >
            <p style={{ textAlign: 'center' }}>
              저장되지 않은 변경사항이 있습니다. 계속 진행하시겠습니까?
            </p>
          </EuiConfirmModal>
        </EuiOverlayMask>
      );
    }

    // agent.conf를 편집 중일 때만 "폴더 실시간 감시 추가/제거" 입력창을
    // 코드 에디터 위쪽에 보여준다. 그만큼 아래 코드 에디터의 height를 줄인다.
    const extraHeightForFim = isAgentConf && isEditable ? FIM_SECTION_HEIGHT_PX : 0;

    return (
      <>
        <EuiPage style={{ background: 'transparent' }}>
          <EuiPanel>
            <EuiFlexGroup>
              <EuiFlexItem>
                {/* File name and back button */}
                <EuiFlexGroup>
                  <EuiFlexItem>
                    <EuiTitle>
                      <span style={{ fontSize: '22px' }}>
                        {/* GS 인증용: 한글화 */}
                        <EuiToolTip position='right' content={`그룹 목록으로 돌아가기`}>
                          <EuiButtonIcon
                            aria-label='뒤로'
                            color='primary'
                            iconSize='l'
                            iconType='arrowLeft'
                            onClick={() => {
                              if (this.state.hasChanges) {
                                showModal();
                              } else {
                                this.props.cleanFileContent();
                              }
                            }}
                          />
                        </EuiToolTip>
                        {groupName} <span style={{ color: 'grey' }}>그룹의</span>{' '}
                        {name}
                      </span>
                    </EuiTitle>
                  </EuiFlexItem>
                  <EuiFlexItem />
                  {isEditable && (
                    <EuiFlexItem grow={false}>{saveButton}</EuiFlexItem>
                  )}
                </EuiFlexGroup>
                <EuiSpacer size='m' />
                {isAgentConf && isEditable && (
                  <Fragment>
                    <EuiFormRow
                      label='폴더 실시간 감시 추가/제거 (FIM)'
                      helpText={`"${groupName}" 그룹의 agent.conf에 등록된 실시간 감시(FIM) 폴더 목록입니다. 경로를 입력하고 Enter로 추가(콤마나 줄바꿈으로 여러 개 한번에 입력 가능), 태그의 x로 제거 표시. 아래 코드 에디터와는 별도로 이 버튼을 눌러야 반영되며, 저장 후 아래 에디터 내용도 새로 반영된 내용으로 다시 불러옵니다. 예: C:\\Users\\*\\Downloads`}
                      fullWidth
                    >
                      <EuiFlexGroup alignItems='center' gutterSize='s'>
                        <EuiFlexItem>
                          <EuiComboBox
                            placeholder='C:\Users\*\Downloads (입력 후 Enter)'
                            options={[]}
                            selectedOptions={fimSelectedOptions}
                            onChange={this.handleFimComboChange}
                            onCreateOption={this.handleFimCreateOption}
                            fullWidth
                          />
                        </EuiFlexItem>
                        <EuiFlexItem grow={false}>
                          <EuiButton
                            size='s'
                            iconType='save'
                            isLoading={fimSaving}
                            onClick={this.handleSaveFimDirectories}
                          >
                            감시 폴더 변경사항 저장
                          </EuiButton>
                        </EuiFlexItem>
                      </EuiFlexGroup>
                    </EuiFormRow>
                    <EuiSpacer size='m' />
                  </Fragment>
                )}
                {xmlError && (
                  <Fragment>
                    <span style={{ color: 'red' }}> {xmlError}</span>
                    <EuiSpacer size='s' />
                  </Fragment>
                )}
                <EuiFlexGroup>
                  <EuiFlexItem>
                    <EuiFlexGroup>
                      <EuiFlexItem className='codeEditorWrapper'>
                        {(isEditable && (
                          <EuiCodeEditor
                            theme='textmate'
                            width='100%'
                            height={`calc(100vh - ${
                              (xmlError ? 250 : 230) + extraHeightForFim
                            }px)`}
                            value={content}
                            onChange={newContent =>
                              this.setState({ content: newContent })
                            }
                            mode='xml'
                            wrapEnabled
                            setOptions={this.codeEditorOptions}
                            aria-label='Code Editor'
                            onLoad={editor => {
                              editor.getSession().setMode(new WazuhXmlMode());
                            }}
                          />
                        )) || (
                          <EuiCodeBlock
                            language='json'
                            fontSize='m'
                            paddingSize='m'
                            overflowHeight={this.height}
                          >
                            {content}
                          </EuiCodeBlock>
                        )}
                      </EuiFlexItem>
                    </EuiFlexGroup>
                  </EuiFlexItem>
                </EuiFlexGroup>
              </EuiFlexItem>
            </EuiFlexGroup>
          </EuiPanel>
        </EuiPage>
        {modal}
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    state: state.groupsReducers,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    cleanFileContent: () => dispatch(cleanFileContent()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(WzGroupsEditor);
