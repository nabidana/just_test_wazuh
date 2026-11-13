/*
 * Wazuh app - React component for email alert setting (level threshold -> recipient).
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
  EuiButton,
  EuiSpacer,
  EuiCallOut,
  EuiIcon,
  EuiFlexGroup,
  EuiFlexItem,
  EuiOverlayMask,
  EuiConfirmModal,
  EuiText,
} from '@elastic/eui';

import withWzConfig from '../util-hocs/wz-config';
import {
  fetchFile,
  saveConfiguration,
  restartNodeSelected,
} from '../utils/wz-fetch';
import { WzButtonPermissions } from '../../../../../../components/common/permissions/button';

import { getToasts } from '../../../../../../kibana-services';
import { UI_LOGGER_LEVELS } from '../../../../../../../common/constants';
import { UI_ERROR_SEVERITIES } from '../../../../../../react-services/error-orchestrator/types';
import { getErrorOrchestrator } from '../../../../../../react-services/common-services';

const DEFAULT_LEVEL = '12';
const DEFAULT_MAX_PER_HOUR = '12';
const MAX_RECIPIENTS = 5;

// 이 폼이 만든 <email_alerts> 규칙을 나중에 다시 찾아서 교체(또는 불러오기)하기 위한
// 식별 마커. <email_alerts> 블록 자체에는 고유 이름이 없어서, 주석으로 표시해 두고
// 다음 저장/로드 때 이 마커 뒤의 블록만 다룬다. 수동으로 추가된 다른 <email_alerts>
// 규칙은 절대 건드리지 않는다.
const MANAGED_MARKER = '<!-- ZERO_EMAIL_ALERT_MANAGED -->';

const escapeXml = value =>
  String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');

/**
 * ossec.conf 원문에서 <global> 블록 안의 이메일 관련 태그를 upsert한다.
 * (email_notification/smtp_server/email_from/email_maxperhour)
 */
export const upsertGlobalEmailSettings = (
  xml,
  { smtpServer, emailFrom, maxPerHour } = {},
) => {
  const globalBlockRegex = /<global>([\s\S]*?)<\/global>/i;
  const match = xml.match(globalBlockRegex);

  const upsertTag = (inner, tag, value) => {
    if (value === undefined || value === null || value === '') return inner;
    const safe = escapeXml(String(value).trim());
    const tagRegex = new RegExp(`<${tag}>[\\s\\S]*?<\\/${tag}>`, 'i');
    if (tagRegex.test(inner)) {
      return inner.replace(tagRegex, `<${tag}>${safe}</${tag}>`);
    }
    return `${inner}\n    <${tag}>${safe}</${tag}>`;
  };

  if (match) {
    let inner = match[1];
    // 이 폼으로 저장한다는 건 이메일 알림을 켠다는 뜻이므로 항상 yes로 맞춘다.
    inner = upsertTag(inner, 'email_notification', 'yes');
    inner = upsertTag(inner, 'smtp_server', smtpServer);
    inner = upsertTag(inner, 'email_from', emailFrom);
    inner = upsertTag(inner, 'email_maxperhour', maxPerHour);
    return xml.replace(globalBlockRegex, `<global>${inner}</global>`);
  }

  // <global> 블록이 전혀 없는 경우 (일반적이지 않지만) 새로 만들어 첫 <ossec_config> 바로 뒤에 삽입.
  const block = [
    '<global>',
    '    <email_notification>yes</email_notification>',
    smtpServer ? `    <smtp_server>${escapeXml(smtpServer)}</smtp_server>` : '',
    emailFrom ? `    <email_from>${escapeXml(emailFrom)}</email_from>` : '',
    maxPerHour
      ? `    <email_maxperhour>${escapeXml(maxPerHour)}</email_maxperhour>`
      : '',
    '  </global>',
    '',
  ]
    .filter(Boolean)
    .join('\n');

  const firstOpenIdx = xml.indexOf('<ossec_config>');
  if (firstOpenIdx === -1) {
    throw new Error(
      '설정 파일에서 <ossec_config> 태그를 찾을 수 없어 자동으로 추가하지 못했습니다.',
    );
  }
  const insertAt = firstOpenIdx + '<ossec_config>'.length;
  return xml.slice(0, insertAt) + '\n  ' + block + xml.slice(insertAt);
};

/**
 * 이 폼이 관리하는 이메일 알림 규칙 하나를 upsert한다 (마커 주석으로 식별).
 *
 * 주의: <email_alerts>는 여러 규칙을 담는 래퍼가 아니라 그 자체가 "규칙 하나"다.
 * 여러 규칙을 쓰려면 <email_alerts> 블록을 (<integration>이나 <localfile>처럼)
 * 여러 번 반복해서 나열해야 한다. 다른 방식(구성 편집 raw XML 등)으로 수동으로
 * 추가된 <email_alerts> 규칙은 그대로 둔다.
 */
export const upsertManagedEmailAlertRule = (
  xml,
  { emailTo = [], level, group, ruleId } = {},
) => {
  const emailToTags = emailTo
    .filter(Boolean)
    .map(addr => `    <email_to>${escapeXml(String(addr).trim())}</email_to>`)
    .join('\n');

  const ruleBody = [
    emailToTags,
    level ? `    <level>${escapeXml(level)}</level>` : '',
    group ? `    <group>${escapeXml(group)}</group>` : '',
    ruleId ? `    <rule_id>${escapeXml(ruleId)}</rule_id>` : '',
  ]
    .filter(Boolean)
    .join('\n');

  const newManagedBlock = `${MANAGED_MARKER}\n  <email_alerts>\n${ruleBody}\n  </email_alerts>`;

  const managedRuleRegex = new RegExp(
    `${MANAGED_MARKER}\\s*<email_alerts>[\\s\\S]*?<\\/email_alerts>`,
    'i',
  );

  if (managedRuleRegex.test(xml)) {
    return xml.replace(managedRuleRegex, newManagedBlock);
  }

  const lastCloseIdx = xml.lastIndexOf('</ossec_config>');
  if (lastCloseIdx === -1) {
    throw new Error(
      '설정 파일에서 </ossec_config> 태그를 찾을 수 없어 자동으로 추가하지 못했습니다.',
    );
  }
  return (
    xml.slice(0, lastCloseIdx) + '  ' + newManagedBlock + '\n' + xml.slice(lastCloseIdx)
  );
};

/**
 * ossec.conf 원문에서 이 폼이 관리하는 마커 뒤의 <email_alerts> 규칙을 읽어온다.
 * (화면 진입 시 기존 값을 입력란에 채워주기 위한 용도). 마커가 없으면(=이 폼으로
 * 저장한 적이 없으면) null을 반환한다 — 다른 방식으로 만들어진 email_alerts 규칙을
 * 우리 것으로 착각해서 불러오지 않기 위함.
 */
export const extractManagedEmailAlertRule = xml => {
  const regex = new RegExp(
    `${MANAGED_MARKER}\\s*<email_alerts>([\\s\\S]*?)<\\/email_alerts>`,
    'i',
  );
  const match = xml.match(regex);
  if (!match) return null;
  const inner = match[1];
  const emailTo = [...inner.matchAll(/<email_to>([\s\S]*?)<\/email_to>/gi)].map(
    m => m[1].trim(),
  );
  const levelMatch = inner.match(/<level>([\s\S]*?)<\/level>/i);
  return {
    emailTo,
    level: levelMatch ? levelMatch[1].trim() : '',
  };
};

/**
 * ossec.conf 원문에서 <global> 블록의 이메일 관련 값을 그대로 읽어온다.
 *
 * 왜 구조화된 API(mail/global) 대신 raw XML을 쓰는가: 매니저가 구조화된 API
 * 응답을 만들 때 smtp_server 같은 호스트명을 실제로 resolve해서 IP로 돌려주는
 * 경우가 있다 (예: ossec.conf에는 "localhost"라고 저장돼 있는데 API 응답은
 * "0000:0000:0000:0000:0000:0000:0000:0001"처럼 IPv6 루프백 주소로 나옴).
 * 그 값을 그대로 입력란에 다시 채워주면 사용자가 저장한 값과 화면에 보이는
 * 값이 달라져 혼란을 준다. raw XML은 파일에 실제로 적힌 문자열 그대로이므로
 * 이 폼에서는 이 값을 우선 사용한다.
 */
export const extractGlobalEmailSettings = xml => {
  const match = xml.match(/<global>([\s\S]*?)<\/global>/i);
  if (!match) return null;
  const inner = match[1];
  const grab = tag => {
    const tagMatch = inner.match(new RegExp(`<${tag}>([\\s\\S]*?)<\\/${tag}>`, 'i'));
    return tagMatch ? tagMatch[1].trim() : '';
  };
  return {
    emailNotification: grab('email_notification'),
    smtpServer: grab('smtp_server'),
    emailFrom: grab('email_from'),
    emailMaxperhour: grab('email_maxperhour'),
  };
};

// mail/global 구조화 API는 이 화면이 처음 그려질 때(raw XML을 아직 못 읽어왔을 때)
// 잠깐 보여줄 값으로만 쓴다. componentDidMount에서 raw XML을 읽어오면 위
// extractGlobalEmailSettings() 결과로 즉시 덮어써서, 매니저가 호스트명을 IP로
// resolve해버리는 문제(위 설명 참고)를 피한다.
const getMailGlobalStatus = currentConfig => {
  const mailGlobal = currentConfig && currentConfig['mail-global'];
  if (!mailGlobal || typeof mailGlobal === 'string' || !mailGlobal.global) {
    return null;
  }
  return mailGlobal.global;
};

const getExistingRuleCount = currentConfig => {
  const mailAlerts = currentConfig && currentConfig['mail-alerts'];
  if (
    !mailAlerts ||
    typeof mailAlerts === 'string' ||
    !Array.isArray(mailAlerts.email_alerts)
  ) {
    return 0;
  }
  return mailAlerts.email_alerts.length;
};

class WzConfigurationEmailAlert extends Component {
  constructor(props) {
    super(props);
    const mailGlobal = getMailGlobalStatus(props.currentConfig) || {};
    this.state = {
      // raw XML을 읽어오기 전까지만 쓰는 임시값 (아래 loadExistingManagedRule 참고)
      smtpServer: mailGlobal.smtp_server || '',
      emailFrom: mailGlobal.email_from || '',
      emailTo: ['', '', '', '', ''],
      level: DEFAULT_LEVEL,
      maxPerHour: mailGlobal.email_maxperhour || DEFAULT_MAX_PER_HOUR,
      notificationOn: mailGlobal.email_notification === 'yes',
      saving: false,
      savedOk: false,
      restart: false,
      restarting: false,
      loadingExisting: true,
    };
  }

  componentDidMount() {
    this.loadExistingManagedRule();
  }

  // 화면에 들어왔을 때, 이 폼으로 저장해둔 기존 수신자/레벨 값을 실제 ossec.conf에서
  // 읽어와 입력란에 채워준다. (구조화된 API로는 "이 규칙이 우리가 만든 것인지"를
  // 구분할 방법이 없어서, 마커 주석이 남아있는 raw XML을 직접 읽어야 정확하다)
  loadExistingManagedRule = async () => {
    try {
      const xml = await fetchFile(this.props.clusterNodeSelected);
      const patch = {};

      // smtp_server/email_from/email_maxperhour/email_notification은
      // 구조화 API 대신 raw XML에 실제로 적힌 값을 우선한다 (위
      // extractGlobalEmailSettings 주석 참고 — 호스트명이 IP로 resolve되는
      // 문제 회피).
      const globalSettings = extractGlobalEmailSettings(xml);
      if (globalSettings) {
        if (globalSettings.smtpServer) patch.smtpServer = globalSettings.smtpServer;
        if (globalSettings.emailFrom) patch.emailFrom = globalSettings.emailFrom;
        if (globalSettings.emailMaxperhour) patch.maxPerHour = globalSettings.emailMaxperhour;
        patch.notificationOn = globalSettings.emailNotification === 'yes';
      }

      const existing = extractManagedEmailAlertRule(xml);
      if (existing) {
        const emailTo = ['', '', '', '', ''];
        existing.emailTo.slice(0, MAX_RECIPIENTS).forEach((addr, i) => {
          emailTo[i] = addr;
        });
        patch.emailTo = emailTo;
        patch.level = existing.level || DEFAULT_LEVEL;
      }

      if (Object.keys(patch).length) {
        this.setState(patch);
      }
    } catch (error) {
      // 기존 값 불러오기는 편의 기능이라, 실패해도 폼은 빈 값/기본값으로 그대로 쓸 수 있게 조용히 넘어간다.
      console.warn('이메일 알림 기존 설정을 불러오지 못했습니다.', error);
    } finally {
      this.setState({ loadingExisting: false });
    }
  };

  addToast(toast) {
    getToasts().add(toast);
  }

  handleChange = field => e => this.setState({ [field]: e.target.value });

  handleEmailToChange = index => e => {
    const emailTo = [...this.state.emailTo];
    emailTo[index] = e.target.value;
    this.setState({ emailTo });
  };

  toggleRestart = () => this.setState({ restart: !this.state.restart });

  save = async () => {
    const { smtpServer, emailFrom, emailTo, level, maxPerHour } = this.state;
    const recipients = emailTo.map(addr => addr.trim()).filter(Boolean);

    if (!smtpServer.trim() || !emailFrom.trim() || !recipients.length) {
      this.addToast({
        title:
          'SMTP 서버, 발신자 이메일은 필수이고, 수신자 이메일도 최소 1개 이상 입력해야 합니다.',
        color: 'warning',
      });
      return;
    }
    this.setState({ saving: true, savedOk: false });
    try {
      const currentXml = await fetchFile(this.props.clusterNodeSelected);
      let newXml = upsertGlobalEmailSettings(currentXml, {
        smtpServer,
        emailFrom,
        maxPerHour,
      });
      newXml = upsertManagedEmailAlertRule(newXml, {
        emailTo: recipients,
        level,
      });
      await saveConfiguration(this.props.clusterNodeSelected, newXml);
      // upsertGlobalEmailSettings가 저장 시 email_notification을 항상 yes로
      // 맞추므로, 다음 새로고침을 기다리지 않고 화면에도 바로 반영한다.
      this.setState({ saving: false, savedOk: true, notificationOn: true });
      this.addToast({
        title: (
          <Fragment>
            <EuiIcon type='check' />
            &nbsp;
            <span>이메일 알림 설정이 저장되었습니다.</span>
          </Fragment>
        ),
        color: 'success',
      });
    } catch (error) {
      this.setState({ saving: false, savedOk: false });
      const options = {
        context: `${WzConfigurationEmailAlert.name}.save`,
        level: UI_LOGGER_LEVELS.ERROR,
        severity: UI_ERROR_SEVERITIES.BUSINESS,
        error: {
          error,
          message: error.message || String(error),
          title: '이메일 알림 설정 저장 중 오류가 발생했습니다.',
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
        context: `${WzConfigurationEmailAlert.name}.confirmRestart`,
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
    const ruleCount = getExistingRuleCount(this.props.currentConfig);
    const {
      smtpServer,
      emailFrom,
      emailTo,
      level,
      maxPerHour,
      notificationOn,
      saving,
      savedOk,
      restart,
      restarting,
    } = this.state;

    return (
      <Fragment>
        {notificationOn ? (
          <EuiCallOut
            title={`현재 이메일 알림이 켜져 있고, ${ruleCount}개의 규칙이 설정되어 있습니다.`}
            iconType='check'
            color='success'
          >
            <p>
              아래 입력란은 이 화면으로 만든 규칙의 현재 값을 불러온 것입니다.
              수정하고 저장하면 이 규칙만 덮어쓰고, 다른 방식(구성 편집 등)으로
              추가된 규칙은 그대로 유지됩니다.
            </p>
          </EuiCallOut>
        ) : (
          <EuiCallOut
            title='이메일 알림이 아직 설정되지 않았습니다.'
            iconType='iInCircle'
            color='primary'
          >
            <p>
              아래에 SMTP 서버와 수신자 정보를 입력하고 저장하면 ossec.conf에
              자동으로 이메일 알림 설정이 추가됩니다.
            </p>
          </EuiCallOut>
        )}
        <EuiSpacer size='m' />
        <EuiForm>
          <EuiFormRow
            label='SMTP 서버'
            helpText='이메일을 발송할 SMTP 서버 주소 (예: smtp.example.com, 같은 서버의 로컬 릴레이면 localhost)'
          >
            <EuiFieldText
              value={smtpServer}
              onChange={this.handleChange('smtpServer')}
              placeholder='smtp.example.com'
            />
          </EuiFormRow>
          <EuiFormRow label='발신자 이메일' helpText='알림 메일의 보내는 주소'>
            <EuiFieldText
              value={emailFrom}
              onChange={this.handleChange('emailFrom')}
              placeholder='alert@example.com'
            />
          </EuiFormRow>
          {emailTo.map((value, index) => (
            <EuiFormRow
              key={`email-to-${index}`}
              label={`수신자 이메일 ${index + 1}${index === 0 ? ' (필수)' : ' (선택)'}`}
              helpText={index === 0 ? '최소 1개는 입력해야 합니다. 최대 5개까지 추가 가능' : undefined}
            >
              <EuiFieldText
                value={value}
                onChange={this.handleEmailToChange(index)}
                placeholder='admin@example.com'
              />
            </EuiFormRow>
          ))}
          <EuiFormRow
            label='최소 심각도 레벨'
            helpText='이 레벨 이상의 알림만 메일로 발송됩니다. 기본값: 12'
          >
            <EuiFieldText value={level} onChange={this.handleChange('level')} />
          </EuiFormRow>
          <EuiFormRow
            label='시간당 최대 메일 수'
            helpText='메일이 너무 많이 발송되는 것을 막는 안전장치. 기본값: 12'
          >
            <EuiFieldText
              value={maxPerHour}
              onChange={this.handleChange('maxPerHour')}
            />
          </EuiFormRow>
        </EuiForm>
        <EuiSpacer size='s' />
        <EuiText size='xs' color='subdued'>
          <p>
            참고: SMTP 서버가 인증(ID/PW)이나 TLS가 필요한 경우(Gmail 등)는 이
            화면에서 지원하지 않습니다. 그런 경우엔 "구성 편집" 화면에서 직접
            추가 설정을 입력해주세요.
          </p>
        </EuiText>
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

WzConfigurationEmailAlert.propTypes = {
  agent: PropTypes.object,
  clusterNodeSelected: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  updateWazuhNotReadyYet: PropTypes.func,
  currentConfig: PropTypes.object,
};

const sections = [
  { component: 'mail', configuration: 'global' },
  { component: 'mail', configuration: 'alerts' },
];

export default withWzConfig(sections)(WzConfigurationEmailAlert);
