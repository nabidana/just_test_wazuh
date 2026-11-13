/*
 * Wazuh app - React component for VirusTotal integration setting.
 * (Zero 서버 커스텀 컴포넌트)
 *
 * This program is free software; you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation; either version 2 of the License, or
 * (at your option) any later version.
 */

import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

import {
  EuiForm,
  EuiFormRow,
  EuiFieldText,
  EuiFieldPassword,
  EuiComboBox,
  EuiButton,
  EuiSpacer,
  EuiCallOut,
  EuiIcon,
  EuiFlexGroup,
  EuiFlexItem,
  EuiOverlayMask,
  EuiConfirmModal,
  EuiSwitch,
} from '@elastic/eui';

import withWzConfig from '../util-hocs/wz-config';
import {
  fetchFile,
  saveConfiguration,
  restartNodeSelected,
} from '../utils/wz-fetch';
import { WzButtonPermissions } from '../../../../../../components/common/permissions/button';
import GroupsHandler from '../../groups/utils/groups-handler';
import {
  escapeXml,
  parseFimDirectories,
  addFimDirectory,
  removeFimDirectory,
  diffFimDirectories,
  splitNewFimPaths,
} from '../utils/fim-directories';

import { getToasts } from '../../../../../../kibana-services';
import { UI_LOGGER_LEVELS } from '../../../../../../../common/constants';
import { UI_ERROR_SEVERITIES } from '../../../../../../react-services/error-orchestrator/types';
import { getErrorOrchestrator } from '../../../../../../react-services/common-services';

// 'syscheck' 그룹 전체(파일+레지스트리 변경)를 그대로 쓰면, 레지스트리 값
// 하나 바뀔 때마다 VirusTotal API를 호출하게 되어 Public API rate limit을
// 계속 소진시킨다(2026-08-06 SecuwayOS_V21에서 실제로 확인된 문제).
// 'syscheck_file' 그룹은 파일 추가/변경/삭제(rule 550,553,554)만 포함하고
// 레지스트리 변경(rule 594,597,598,750,751,752)은 제외하므로, 실제로 해시를
// 조회할 가치가 있는 이벤트만 VirusTotal로 보내게 된다.
const DEFAULT_GROUP = 'syscheck_file';
const DEFAULT_ALERT_FORMAT = 'json';

// "폴더 실시간 감시 추가/제거" 화면에서 다루는 에이전트 그룹.
// (2026-08-10 요청: 일단 "default" 그룹에만 반영. 다른 그룹이 필요해지면
// 이 상수를 그룹 선택 UI로 바꾸면 됨)
const FIM_TARGET_GROUP = 'default';

// 태그가 이미 있으면 값만 교체하고, 없으면 <name> 태그 바로 뒤에 새로 추가한다.
// (예전 코드는 "없으면 추가"만 하고 "있으면 교체"하는 경우가 빠져 있어서,
// 이미 저장된 <group>/<alert_format> 값이 있는 상태에서 화면에서 값을 바꿔
// 저장해도 실제로는 절대 갱신되지 않는 버그가 있었다 — 2026-08-06 186에서
// "syscheck_file로 고쳐서 저장해도 conf에는 여전히 syscheck로 나온다"로 확인됨.)
const upsertTag = (inner, tag, value) => {
  const tagRegex = new RegExp(`<${tag}>[\\s\\S]*?<\\/${tag}>`, 'i');
  return tagRegex.test(inner)
    ? inner.replace(tagRegex, `<${tag}>${value}</${tag}>`)
    : inner.replace(
        /(<name>\s*virustotal\s*<\/name>)/i,
        `$1\n    <${tag}>${value}</${tag}>`,
      );
};

/**
 * ossec.conf 원문(raw XML)에서 virustotal <integration> 블록을 찾아
 * api_key / group / alert_format 값을 갱신한다. 블록이 없으면
 * 마지막 </ossec_config> 태그 바로 앞에 새 블록을 추가한다.
 *
 * DOM 파서를 쓰지 않고 문자열 치환으로 처리하는 이유: ossec.conf는
 * 여러 개의 <ossec_config> 루트가 이어붙은 형태라 표준 단일 루트 XML이
 * 아닐 수 있음 (기존 raw 에디터(edit-configuration.js)도 동일하게
 * 문자열 그대로 저장하는 방식을 사용).
 */
export const upsertVirusTotalIntegration = (
  xml,
  apiKey,
  { group = DEFAULT_GROUP, alertFormat = DEFAULT_ALERT_FORMAT } = {},
) => {
  const safeApiKey = escapeXml(String(apiKey).trim());
  const safeGroup = escapeXml(group);
  const safeAlertFormat = escapeXml(alertFormat);

  const integrationBlockRegex = /<integration>([\s\S]*?)<\/integration>/gi;
  let found = false;

  let newXml = xml.replace(integrationBlockRegex, (match, inner) => {
    if (!/<name>\s*virustotal\s*<\/name>/i.test(inner)) {
      return match;
    }
    found = true;

    let updatedInner = upsertTag(inner, 'api_key', safeApiKey);
    updatedInner = upsertTag(updatedInner, 'group', safeGroup);
    updatedInner = upsertTag(updatedInner, 'alert_format', safeAlertFormat);

    return `<integration>${updatedInner}</integration>`;
  });

  if (!found) {
    const block = [
      '  <integration>',
      '    <name>virustotal</name>',
      `    <api_key>${safeApiKey}</api_key>`,
      `    <group>${safeGroup}</group>`,
      `    <alert_format>${safeAlertFormat}</alert_format>`,
      '  </integration>',
      '',
    ].join('\n');

    const lastCloseIdx = newXml.lastIndexOf('</ossec_config>');
    if (lastCloseIdx === -1) {
      throw new Error(
        '설정 파일에서 </ossec_config> 태그를 찾을 수 없어 자동으로 추가하지 못했습니다. 구성 편집 화면에서 직접 추가해주세요.',
      );
    }
    newXml =
      newXml.slice(0, lastCloseIdx) + block + newXml.slice(lastCloseIdx);
  }

  return newXml;
};

/**
 * ossec.conf 원문에서 virustotal <integration> 블록 전체를 제거한다.
 * ("사용 안함" 토글을 저장할 때 사용 — <integration>에는 <disabled> 같은
 * 켜고/끄는 태그가 없어서(Wazuh 공식 문서 기준), 끄는 유일한 방법은 블록
 * 자체를 지우는 것뿐이다.)
 */
export const removeVirusTotalIntegration = xml => {
  // 블록 뒤에 붙은 줄바꿈까지 같이 지워서 빈 줄이 남지 않게 한다.
  const integrationBlockRegex =
    /[ \t]*<integration>([\s\S]*?)<\/integration>\r?\n?/gi;
  return xml.replace(integrationBlockRegex, (match, inner) =>
    /<name>\s*virustotal\s*<\/name>/i.test(inner) ? '' : match,
  );
};

/**
 * ossec.conf 원문에서 virustotal <integration> 블록의 api_key/group/alert_format을
 * 직접 읽어온다. 구조화된 API는 보안상 api_key를 마스킹해서 줄 수도 있어서,
 * 화면 진입 시 입력란을 채워주는 용도로는 raw XML을 직접 읽는 쪽이 더 정확하다.
 */
export const extractVirusTotalConfig = xml => {
  const blocks = [...xml.matchAll(/<integration>([\s\S]*?)<\/integration>/gi)];
  for (const b of blocks) {
    const inner = b[1];
    if (/<name>\s*virustotal\s*<\/name>/i.test(inner)) {
      const apiKeyMatch = inner.match(/<api_key>([\s\S]*?)<\/api_key>/i);
      const groupMatch = inner.match(/<group>([\s\S]*?)<\/group>/i);
      const alertFormatMatch = inner.match(
        /<alert_format>([\s\S]*?)<\/alert_format>/i,
      );
      return {
        apiKey: apiKeyMatch ? apiKeyMatch[1].trim() : '',
        group: groupMatch ? groupMatch[1].trim() : '',
        alertFormat: alertFormatMatch ? alertFormatMatch[1].trim() : '',
      };
    }
  }
  return null;
};

/**
 * withWzConfig가 조회해 온 현재 integrator 설정에서 virustotal 항목을 찾는다.
 * (있는지 여부만 화면에 표시하기 위한 용도이며, 저장은 항상 raw XML로 처리한다)
 */
const findVirusTotalConfig = currentConfig => {
  const integrations =
    currentConfig &&
    currentConfig['integrator-integration'] &&
    currentConfig['integrator-integration'].integration;
  if (!Array.isArray(integrations)) {
    return null;
  }
  return (
    integrations.find(
      item => (item.name || '').toLowerCase() === 'virustotal',
    ) || null
  );
};

class WzConfigurationVirustotal extends Component {
  constructor(props) {
    super(props);
    const existing = findVirusTotalConfig(props.currentConfig);
    this.state = {
      enabled: !!existing,
      apiKey: '',
      group: (existing && existing.group) || DEFAULT_GROUP,
      alertFormat: (existing && existing.alert_format) || DEFAULT_ALERT_FORMAT,
      saving: false,
      savedOk: false,
      restart: false,
      restarting: false,
      // "폴더 실시간 감시 추가/제거" 관련 상태.
      // fimDirectories: 마지막으로 불러오거나 저장한, 실제 agent.conf 기준 목록.
      // fimSelectedOptions: 화면에서 태그를 추가/제거하며 편집 중인 목록
      // (저장 버튼을 눌러야 실제로 agent.conf에 반영됨).
      fimDirectories: [],
      fimSelectedOptions: [],
      fimLoading: false,
      fimSaving: false,
    };
  }

  componentDidMount() {
    this.loadExistingApiKey();
    this.loadFimDirectories();
  }

  // API Key는 구조화된 API가 보안상 마스킹해서 줄 수도 있어서, 화면 진입 시
  // raw ossec.conf를 직접 읽어 실제 값을 입력란에 채워준다(편의 기능이라
  // 실패해도 조용히 넘어가고 빈 입력란/기본값을 그대로 쓸 수 있게 둔다).
  // <integration> 블록이 raw XML에 있는지 여부로 enabled 상태도 함께 갱신한다
  // (구조화된 API보다 raw XML이 더 신뢰할 수 있는 최신 상태이기 때문).
  loadExistingApiKey = async () => {
    try {
      const xml = await fetchFile(this.props.clusterNodeSelected);
      const existing = extractVirusTotalConfig(xml);
      if (existing) {
        this.setState({
          enabled: true,
          apiKey: existing.apiKey || '',
          group: existing.group || this.state.group,
          alertFormat: existing.alertFormat || this.state.alertFormat,
        });
      } else {
        this.setState({ enabled: false });
      }
    } catch (error) {
      console.warn('VirusTotal 기존 설정을 불러오지 못했습니다.', error);
    }
  };

  // "폴더 실시간 감시 추가/제거" 화면 진입 시, FIM_TARGET_GROUP("default")
  // 그룹의 agent.conf에 이미 등록되어 있는 감시 폴더 목록을 불러와 태그로
  // 채워준다. 실패해도 조용히 넘어가고 빈 목록으로 시작할 수 있게 둔다.
  loadFimDirectories = async () => {
    this.setState({ fimLoading: true });
    try {
      const currentContent =
        (await GroupsHandler.getFileContent(
          `/groups/${FIM_TARGET_GROUP}/files/agent.conf?raw=true`,
        )) || '';
      const options = parseFimDirectories(currentContent).map(label => ({
        label,
      }));
      this.setState({
        fimLoading: false,
        fimDirectories: options,
        fimSelectedOptions: options,
      });
    } catch (error) {
      this.setState({ fimLoading: false });
      console.warn(
        `"${FIM_TARGET_GROUP}" 그룹의 기존 FIM 감시 폴더 목록을 불러오지 못했습니다.`,
        error,
      );
    }
  };

  addToast(toast) {
    getToasts().add(toast);
  }

  handleApiKeyChange = e => this.setState({ apiKey: e.target.value });
  handleGroupChange = e => this.setState({ group: e.target.value });
  handleAlertFormatChange = e =>
    this.setState({ alertFormat: e.target.value });
  handleEnabledChange = e => this.setState({ enabled: e.target.checked });

  toggleRestart = () => this.setState({ restart: !this.state.restart });

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

  // "감시 폴더 변경사항 저장" 버튼. 화면에서 편집한 태그 목록(fimSelectedOptions)을
  // 마지막으로 불러온/저장한 목록(fimDirectories)과 비교해서, 새로 추가된 경로는
  // addFimDirectory로, 빠진 경로는 removeFimDirectory로 실제 agent.conf에 반영한다.
  handleSaveFimDirectories = async () => {
    const { fimDirectories, fimSelectedOptions } = this.state;
    const selectedLabels = fimSelectedOptions.map(o => o.label);
    const { toAdd, toRemove } = diffFimDirectories(
      fimDirectories,
      fimSelectedOptions,
    );

    if (!toAdd.length && !toRemove.length) {
      this.addToast({ title: '변경된 감시 폴더가 없습니다.', color: 'warning' });
      return;
    }

    this.setState({ fimSaving: true });
    try {
      let currentContent =
        (await GroupsHandler.getFileContent(
          `/groups/${FIM_TARGET_GROUP}/files/agent.conf?raw=true`,
        )) || '';

      toRemove.forEach(label => {
        currentContent = removeFimDirectory(currentContent, label).xml;
      });
      toAdd.forEach(label => {
        currentContent = addFimDirectory(currentContent, label).xml;
      });

      await GroupsHandler.sendGroupConfiguration(
        'agent.conf',
        FIM_TARGET_GROUP,
        currentContent,
      );

      const newOptions = selectedLabels.map(label => ({ label }));
      this.setState({
        fimSaving: false,
        fimDirectories: newOptions,
        fimSelectedOptions: newOptions,
      });

      const parts = [];
      if (toAdd.length) parts.push(`추가 ${toAdd.length}개`);
      if (toRemove.length) parts.push(`제거 ${toRemove.length}개`);

      this.addToast({
        title: (
          <Fragment>
            <EuiIcon type='check' />
            &nbsp;
            <span>
              "{FIM_TARGET_GROUP}" 그룹의 실시간 감시(FIM) 폴더가
              반영되었습니다({parts.join(', ')}). 적용하려면 해당 그룹
              에이전트를 재시작해야 합니다.
            </span>
          </Fragment>
        ),
        color: 'success',
      });
    } catch (error) {
      this.setState({ fimSaving: false });
      const options = {
        context: `${WzConfigurationVirustotal.name}.handleSaveFimDirectories`,
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

  save = async () => {
    const { enabled, apiKey, group, alertFormat } = this.state;

    // "사용 안함"으로 저장하는 경우: <integration> 블록 자체를 지운다.
    // 이 경우엔 API Key 입력 여부를 따질 필요가 없다.
    if (!enabled) {
      this.setState({ saving: true, savedOk: false });
      try {
        const currentXml = await fetchFile(this.props.clusterNodeSelected);
        const newXml = removeVirusTotalIntegration(currentXml);
        await saveConfiguration(this.props.clusterNodeSelected, newXml);
        this.setState({ saving: false, savedOk: true });
        this.addToast({
          title: (
            <Fragment>
              <EuiIcon type='check' />
              &nbsp;
              <span>VirusTotal 연동이 사용 안함으로 저장되었습니다.</span>
            </Fragment>
          ),
          color: 'success',
        });
      } catch (error) {
        this.setState({ saving: false, savedOk: false });
        const options = {
          context: `${WzConfigurationVirustotal.name}.save`,
          level: UI_LOGGER_LEVELS.ERROR,
          severity: UI_ERROR_SEVERITIES.BUSINESS,
          error: {
            error,
            message: error.message || String(error),
            title: 'VirusTotal 설정 저장 중 오류가 발생했습니다.',
          },
        };
        getErrorOrchestrator().handleError(options);
      }
      return;
    }

    if (!apiKey || !apiKey.trim()) {
      this.addToast({
        title: 'VirusTotal API Key를 입력해주세요.',
        color: 'warning',
      });
      return;
    }
    this.setState({ saving: true, savedOk: false });
    try {
      const currentXml = await fetchFile(this.props.clusterNodeSelected);
      const newXml = upsertVirusTotalIntegration(currentXml, apiKey, {
        group,
        alertFormat,
      });
      await saveConfiguration(this.props.clusterNodeSelected, newXml);
      // 저장 성공 후에도 입력란은 그대로 둔다 (이제 이게 "기존 값"이므로 화면을
      // 다시 열었을 때 보여줄 값과 일치시키기 위함).
      this.setState({ saving: false, savedOk: true });
      this.addToast({
        title: (
          <Fragment>
            <EuiIcon type='check' />
            &nbsp;
            <span>VirusTotal 연동 설정이 저장되었습니다.</span>
          </Fragment>
        ),
        color: 'success',
      });
    } catch (error) {
      this.setState({ saving: false, savedOk: false });
      const options = {
        context: `${WzConfigurationVirustotal.name}.save`,
        level: UI_LOGGER_LEVELS.ERROR,
        severity: UI_ERROR_SEVERITIES.BUSINESS,
        error: {
          error,
          message: error.message || String(error),
          title: 'VirusTotal 설정 저장 중 오류가 발생했습니다.',
        },
      };
      getErrorOrchestrator().handleError(options);
    }
  };

  confirmRestart = async () => {
    try {
      this.setState({ restarting: true });
      await restartNodeSelected(
        this.props.clusterNodeSelected,
        this.props.updateWazuhNotReadyYet,
      );
      this.props.updateWazuhNotReadyYet('');
      this.setState({ restart: false, restarting: false });
      this.addToast({ title: '매니저가 재시작되었습니다.', color: 'success' });
    } catch (error) {
      this.props.updateWazuhNotReadyYet('');
      this.setState({ restart: false, restarting: false });
      const options = {
        context: `${WzConfigurationVirustotal.name}.confirmRestart`,
        level: UI_LOGGER_LEVELS.ERROR,
        severity: UI_ERROR_SEVERITIES.BUSINESS,
        error: {
          error,
          message: error.message || String(error),
          title: '재시작 중 오류가 발생했습니다.',
        },
      };
      getErrorOrchestrator().handleError(options);
    }
  };

  render() {
    const existing = findVirusTotalConfig(this.props.currentConfig);
    const {
      enabled,
      apiKey,
      group,
      alertFormat,
      saving,
      savedOk,
      restart,
      restarting,
      fimSelectedOptions,
      fimLoading,
      fimSaving,
    } = this.state;

    return (
      <Fragment>
        {existing ? (
          <EuiCallOut
            title='이미 VirusTotal 연동이 설정되어 있습니다.'
            iconType='check'
            color='success'
          >
            <p>
              새 API Key를 입력하고 저장하면 기존 설정을 덮어씁니다. 저장 후
              변경사항을 적용하려면 매니저를 재시작해야 합니다.
            </p>
          </EuiCallOut>
        ) : (
          <EuiCallOut
            title='VirusTotal 연동이 아직 설정되지 않았습니다.'
            iconType='iInCircle'
            color='primary'
          >
            <p>
              아래에 VirusTotal API Key를 입력하고 저장하면 ossec.conf에 자동으로
              연동 설정이 추가됩니다.
            </p>
          </EuiCallOut>
        )}
        <EuiSpacer size='m' />
        <EuiFormRow
          label='VirusTotal 연동 사용'
          helpText={
            enabled
              ? '연동을 끄면 저장 시 ossec.conf의 <integration> 설정이 완전히 제거됩니다.'
              : '지금 저장하면 VirusTotal 연동 설정이 ossec.conf에서 제거됩니다(아래 입력값은 화면에만 남아있고 저장되지 않습니다).'
          }
        >
          <EuiSwitch
            label={enabled ? '사용' : '사용 안함'}
            checked={enabled}
            onChange={this.handleEnabledChange}
          />
        </EuiFormRow>
        <EuiSpacer size='m' />
        <EuiForm>
          <EuiFormRow
            label='VirusTotal API Key'
            helpText='VirusTotal 계정의 API Key를 입력하세요. 저장 시 ossec.conf에 반영됩니다.'
          >
            <EuiFieldPassword
              type='dual'
              value={apiKey}
              onChange={this.handleApiKeyChange}
              disabled={!enabled}
              placeholder={
                existing
                  ? '기존 설정을 덮어쓰려면 새 API Key 입력'
                  : 'API Key 입력'
              }
            />
          </EuiFormRow>
          <EuiFormRow
            label='필터링 그룹 (group)'
            helpText='이 그룹에 속한 알림에 대해서만 파일 해시를 조회합니다. 기본값: syscheck_file (파일 추가/변경/삭제만 포함, 레지스트리 변경은 제외되어 VirusTotal API 요청이 낭비되지 않습니다). 콤마로 여러 그룹을 지정할 수 있습니다.'
          >
            <EuiFieldText
              value={group}
              onChange={this.handleGroupChange}
              disabled={!enabled}
            />
          </EuiFormRow>
          <EuiFormRow label='알림 형식 (alert_format)' helpText='기본값: json'>
            <EuiFieldText
              value={alertFormat}
              onChange={this.handleAlertFormatChange}
              disabled={!enabled}
            />
          </EuiFormRow>
          <EuiFormRow
            label='폴더 실시간 감시 추가/제거 (FIM)'
            helpText={`"${FIM_TARGET_GROUP}" 그룹의 agent.conf에 등록된 실시간 감시(FIM) 폴더 목록입니다. 경로를 입력하고 Enter로 추가(콤마나 줄바꿈으로 여러 개 한번에 입력 가능), 태그의 x로 제거 표시. 아래 "저장" 버튼을 눌러야 실제로 반영됩니다. 예: C:\\Users\\*\\Downloads`}
          >
            <Fragment>
              <EuiComboBox
                placeholder={
                  fimLoading
                    ? '불러오는 중...'
                    : 'C:\\Users\\*\\Downloads (입력 후 Enter)'
                }
                options={[]}
                selectedOptions={fimSelectedOptions}
                onChange={this.handleFimComboChange}
                onCreateOption={this.handleFimCreateOption}
                isDisabled={fimLoading}
                isLoading={fimLoading}
              />
              <EuiSpacer size='s' />
              <EuiButton
                size='s'
                iconType='save'
                isLoading={fimSaving}
                isDisabled={fimLoading}
                onClick={this.handleSaveFimDirectories}
              >
                감시 폴더 변경사항 저장
              </EuiButton>
            </Fragment>
          </EuiFormRow>
        </EuiForm>
        <EuiSpacer size='m' />
        <EuiFlexGroup>
          <EuiFlexItem grow={false}>
            <WzButtonPermissions
              permissions={[
                this.props.clusterNodeSelected
                  ? {
                      action: 'cluster:update_config',
                      resource: `node:id:${this.props.clusterNodeSelected}`,
                    }
                  : { action: 'manager:update_config', resource: '*:*:*' },
              ]}
              fill
              iconType='save'
              isLoading={saving}
              onClick={this.save}
            >
              저장
            </WzButtonPermissions>
          </EuiFlexItem>
          <EuiFlexItem grow={false}>
            <WzButtonPermissions
              permissions={[
                this.props.clusterNodeSelected
                  ? {
                      action: 'cluster:restart',
                      resource: `node:id:${this.props.clusterNodeSelected}`,
                    }
                  : { action: 'manager:restart', resource: '*:*:*' },
              ]}
              iconType='refresh'
              onClick={this.toggleRestart}
            >
              매니저 재시작
            </WzButtonPermissions>
          </EuiFlexItem>
        </EuiFlexGroup>
        {savedOk && (
          <Fragment>
            <EuiSpacer size='s' />
            <EuiCallOut
              iconType='iInCircle'
              title='변경사항은 매니저를 재시작해야 적용됩니다.'
            />
          </Fragment>
        )}
        {restart && !restarting && (
          <EuiOverlayMask>
            <EuiConfirmModal
              title='매니저를 재시작합니다'
              onCancel={this.toggleRestart}
              onConfirm={this.confirmRestart}
              cancelButtonText='취소'
              confirmButtonText='확인'
              defaultFocusedButton='cancel'
            />
          </EuiOverlayMask>
        )}
      </Fragment>
    );
  }
}

WzConfigurationVirustotal.propTypes = {
  agent: PropTypes.object,
  clusterNodeSelected: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  updateWazuhNotReadyYet: PropTypes.func,
  currentConfig: PropTypes.object,
};

const sections = [{ component: 'integrator', configuration: 'integration' }];

export default withWzConfig(sections)(WzConfigurationVirustotal);
