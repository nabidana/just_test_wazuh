/*
 * Wazuh app - React component for restricted "내부사용자" (internal users) view.
 * (Zero 서버 커스텀 컴포넌트)
 *
 * This program is free software; you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation; either version 2 of the License, or
 * (at your option) any later version.
 */

// GS 인증용: "인덱서관리 > 보안설정 > 내부사용자" 화면과 동일한 OpenSearch Security
// internalusers API를 사용하지만, "Zero 서버 관리 > Zero 서버 설정" 안에서 축소된 형태로
// 노출한다.
// - 목록: backend_roles에 "admin"이 포함된 계정(기본 admin 계정 + 이 화면으로 새로
//   생성한 계정)만 표시하고, 그 외 내장/서비스 계정(kibanaserver, logstash, readall 등)은
//   숨긴다.
// - 생성: backend_roles를 항상 ["admin"]으로 고정(편집 불가)해서 생성.
// - 생성 성공 시, Wazuh 자체 RBAC(매니저 API)의 "administrator" 역할에도 자동으로
//   매핑되도록 규칙(rule)을 만들어 연결한다(Zero 서버 관리 > 보안설정 > 역할 매핑 화면에
//   나타나는 것과 동일한 매커니즘 — 규칙 생성 후 해당 역할에 연결).
import React, { Component } from 'react';
import {
  EuiBasicTable,
  EuiButton,
  EuiButtonEmpty,
  EuiButtonIcon,
  EuiCallOut,
  EuiConfirmModal,
  EuiFieldPassword,
  EuiFieldText,
  EuiFlexGroup,
  EuiFlexItem,
  EuiForm,
  EuiFormRow,
  EuiModal,
  EuiModalBody,
  EuiModalFooter,
  EuiModalHeader,
  EuiModalHeaderTitle,
  EuiOverlayMask,
  EuiSpacer,
  EuiToolTip,
} from '@elastic/eui';

import WzConfigurationPath from '../util-components/configuration-path';
import { GenericRequest } from '../../../../../../react-services/generic-request';
import { WzRequest } from '../../../../../../react-services/wz-request';
import { getToasts } from '../../../../../../kibana-services';

// GS 인증용: 이 화면으로 생성한 계정에 항상 고정으로 부여하는 OpenSearch Security 백엔드 롤
const FORCED_BACKEND_ROLE = 'admin';
// GS 인증용: 생성 직후 자동으로 연결할 Wazuh 자체 RBAC 역할 이름
const WAZUH_ADMIN_ROLE_NAME = 'administrator';
// GS 인증용: 계정당 등록 가능한 접속 허용 IP 최대 개수
const MAX_ALLOWED_IPS = 10;
// 아주 단순한 IPv4 형식 검증(정확한 대역 검증까지는 하지 않음)
const IPV4_PATTERN = /^(\d{1,3}\.){3}\d{1,3}$/;
// GS 인증용: 기본 admin 계정은 이 화면에서 삭제할 수 없도록 고정
const RESERVED_USERNAME = 'admin';

class WzConfigurationInternalUsers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      users: [],
      error: false,
      isCreateModalVisible: false,
      newUsername: '',
      newPassword: '',
      newPasswordConfirm: '',
      newAllowedIps: [''],
      isCreating: false,
      createError: '',
      // GS 인증용: 편집(수정) 모달 상태
      isEditModalVisible: false,
      editUsername: '',
      editPassword: '',
      editPasswordConfirm: '',
      editAllowedIps: [''],
      isEditing: false,
      isEditLoading: false,
      editError: '',
      // GS 인증용: 삭제 확인 모달 상태
      isDeleteModalVisible: false,
      deleteUsername: '',
      isDeleting: false,
    };
  }

  componentDidMount() {
    this.fetchUsers();
  }

  addToast(toast) {
    getToasts().add(toast);
  }

  async fetchUsers() {
    this.setState({ isLoading: true });
    try {
      const response = await GenericRequest.request('GET', '/api/v1/configuration/internalusers');
      const data = (response.data || {}).data || {};
      const users = Object.keys(data)
        .filter(username => (data[username].backend_roles || []).includes(FORCED_BACKEND_ROLE))
        .map(username => ({
          username,
          description: data[username].description || '',
        }))
        .sort((a, b) => (a.username === 'admin' ? -1 : a.username.localeCompare(b.username)));
      this.setState({ users, isLoading: false, error: false });
    } catch (error) {
      this.setState({ isLoading: false, error: true, users: [] });
    }
  }

  openCreateModal = () => {
    this.setState({
      isCreateModalVisible: true,
      newUsername: '',
      newPassword: '',
      newPasswordConfirm: '',
      newAllowedIps: [''],
      createError: '',
    });
  };

  closeCreateModal = () => {
    this.setState({ isCreateModalVisible: false });
  };

  // GS 인증용: 접속 허용 IP 입력 필드(최대 10개) 관리
  handleAllowedIpChange = (index, value) => {
    const newAllowedIps = [...this.state.newAllowedIps];
    newAllowedIps[index] = value;
    this.setState({ newAllowedIps });
  };

  addAllowedIpField = () => {
    if (this.state.newAllowedIps.length >= MAX_ALLOWED_IPS) {
      return;
    }
    this.setState({ newAllowedIps: [...this.state.newAllowedIps, ''] });
  };

  removeAllowedIpField = index => {
    const newAllowedIps = this.state.newAllowedIps.filter((_, i) => i !== index);
    this.setState({ newAllowedIps: newAllowedIps.length ? newAllowedIps : [''] });
  };

  // GS 인증용: 편집 모달의 접속 허용 IP 입력 필드(최대 10개) 관리 — 생성 모달과 동일한
  // 로직이지만 별도 state(editAllowedIps)를 다루기 위해 분리
  handleEditAllowedIpChange = (index, value) => {
    const editAllowedIps = [...this.state.editAllowedIps];
    editAllowedIps[index] = value;
    this.setState({ editAllowedIps });
  };

  addEditAllowedIpField = () => {
    if (this.state.editAllowedIps.length >= MAX_ALLOWED_IPS) {
      return;
    }
    this.setState({ editAllowedIps: [...this.state.editAllowedIps, ''] });
  };

  removeEditAllowedIpField = index => {
    const editAllowedIps = this.state.editAllowedIps.filter((_, i) => i !== index);
    this.setState({ editAllowedIps: editAllowedIps.length ? editAllowedIps : [''] });
  };

  // GS 인증용: 편집 모달 열기 — 기존 계정 정보(특히 attributes.allowed_ips)를 조회해서
  // 입력 필드에 미리 채워준다. 사용자 이름/백엔드 역할은 이 화면에서 변경하지 않는다.
  openEditModal = async username => {
    this.setState({
      isEditModalVisible: true,
      isEditLoading: true,
      editUsername: username,
      editPassword: '',
      editPasswordConfirm: '',
      editAllowedIps: [''],
      editError: '',
    });
    try {
      // GS 인증용: 단건 조회 라우트(`GET .../internalusers/{id}`)는 목록 조회와 달리
      // `{total, data:{...}}`로 감싸지 않고 사용자 객체를 그대로 응답 본문으로 반환한다
      // (server/routes/index.ts의 `response.ok({ body: esResp[request.params.id] })` 참고).
      const response = await GenericRequest.request(
        'GET',
        `/api/v1/configuration/internalusers/${encodeURIComponent(username)}`,
      );
      const userDetail = response.data || {};
      const allowedIpsRaw = (userDetail.attributes || {}).allowed_ips || '';
      const allowedIps = allowedIpsRaw
        .split(',')
        .map(ip => ip.trim())
        .filter(Boolean);
      this.setState({
        editAllowedIps: allowedIps.length ? allowedIps : [''],
        isEditLoading: false,
      });
    } catch (error) {
      this.setState({
        isEditLoading: false,
        editError: (error && error.message) || '사용자 정보를 불러오지 못했습니다.',
      });
    }
  };

  closeEditModal = () => {
    this.setState({ isEditModalVisible: false });
  };

  handleUpdate = async () => {
    const { editUsername, editPassword, editPasswordConfirm, editAllowedIps } = this.state;

    if (editPassword && editPassword !== editPasswordConfirm) {
      this.setState({ editError: '비밀번호가 일치하지 않습니다.' });
      return;
    }

    const allowedIps = editAllowedIps.map(ip => ip.trim()).filter(Boolean);
    if (allowedIps.length > MAX_ALLOWED_IPS) {
      this.setState({ editError: `접속 허용 IP는 최대 ${MAX_ALLOWED_IPS}개까지 입력할 수 있습니다.` });
      return;
    }
    const invalidIp = allowedIps.find(ip => !IPV4_PATTERN.test(ip));
    if (invalidIp) {
      this.setState({ editError: `"${invalidIp}"은(는) 올바른 IP 형식이 아닙니다.` });
      return;
    }

    this.setState({ isEditing: true, editError: '' });
    try {
      const body = {
        backend_roles: [FORCED_BACKEND_ROLE],
        // GS 인증용: 접속 허용 IP 제한(콤마로 구분, 비어있으면 제한 없음)
        attributes: { allowed_ips: allowedIps.join(',') },
      };
      // 비밀번호는 입력했을 때만 변경(비워두면 기존 비밀번호 유지)
      if (editPassword) {
        body.password = editPassword;
      }
      await GenericRequest.request(
        'POST',
        `/api/v1/configuration/internalusers/${encodeURIComponent(editUsername)}`,
        body,
      );
    } catch (error) {
      this.setState({
        isEditing: false,
        editError: (error && error.message) || '내부 사용자 수정에 실패했습니다.',
      });
      return;
    }

    // GS 인증용: 보안로그에 계정 정보 수정 이벤트 기록(베스트 에포트)
    this.logSecurityEvent(editUsername, 'user_updated');

    this.addToast({
      title: `"${editUsername}" 계정 정보를 수정했습니다.`,
      color: 'success',
    });
    this.setState({ isEditing: false, isEditModalVisible: false });
    this.fetchUsers();
  };

  openDeleteModal = username => {
    this.setState({ isDeleteModalVisible: true, deleteUsername: username });
  };

  closeDeleteModal = () => {
    this.setState({ isDeleteModalVisible: false });
  };

  // GS 인증용: 계정 생성 시 자동으로 만들어둔 Wazuh RBAC 규칙("{username}_administrator")이
  // 있으면 함께 정리한다. 못 찾거나 실패해도 계정 삭제 자체는 진행한다(베스트 에포트).
  async cleanupWazuhAdministratorRule(username) {
    try {
      const rolesResponse = await WzRequest.apiReq('GET', '/security/rules?sort=name', {});
      const rules = ((rolesResponse.data || {}).data || {}).affected_items || [];
      const matchedRule = rules.find(rule => rule.name === `${username}_administrator`);
      if (matchedRule && matchedRule.id) {
        await WzRequest.apiReq('DELETE', `/security/rules?rule_ids=${matchedRule.id}`, {});
      }
    } catch (error) {
      // 규칙 정리 실패는 계정 삭제 결과에 영향을 주지 않음
    }
  }

  handleDelete = async () => {
    const { deleteUsername } = this.state;
    if (deleteUsername === RESERVED_USERNAME) {
      this.closeDeleteModal();
      return;
    }
    this.setState({ isDeleting: true });
    try {
      await GenericRequest.request(
        'DELETE',
        `/api/v1/configuration/internalusers/${encodeURIComponent(deleteUsername)}`,
      );
    } catch (error) {
      this.addToast({
        title: `"${deleteUsername}" 계정 삭제에 실패했습니다.`,
        text: (error && error.message) || '',
        color: 'danger',
      });
      this.setState({ isDeleting: false, isDeleteModalVisible: false });
      return;
    }

    // 계정과 함께 생성됐던 Wazuh RBAC 규칙도 정리(베스트 에포트)
    await this.cleanupWazuhAdministratorRule(deleteUsername);

    // GS 인증용: 보안로그에 계정 삭제 이벤트 기록(베스트 에포트)
    this.logSecurityEvent(deleteUsername, 'user_deleted');

    this.addToast({
      title: `"${deleteUsername}" 계정을 삭제했습니다.`,
      color: 'success',
    });
    this.setState({ isDeleting: false, isDeleteModalVisible: false });
    this.fetchUsers();
  };

  // GS 인증용: 보안로그에 이벤트 기록(관리자 계정 생성/수정/삭제 등, plugins-main 쪽에서
  // 발생하는 이벤트 전용 — 로그인/로그아웃은 다른 플러그인의 basic auth 라우트에서 이미
  // 기록함). 여기서는 "대상 계정"만 넘기고, 실제 로그에 남는 "시도한 아이디"(행위자)와
  // IP는 서버(wazuh-elastic.ts의 securityLogEvent)가 이 요청 자체의 인증 헤더/접속
  // 정보에서 직접 뽑아서 기록한다 — 클라이언트가 행위자를 자칭하도록 두지 않기 위함.
  async logSecurityEvent(targetUsername, eventType) {
    try {
      await GenericRequest.request('POST', '/elastic/security-log-event', {
        target_username: targetUsername,
        event_type: eventType,
      });
    } catch (error) {
      // 이벤트 기록 실패는 계정 생성/수정/삭제 자체에 영향을 주지 않음
    }
  }

  // GS 인증용: 새로 생성된 계정을 Wazuh 자체 RBAC의 "administrator" 역할에 자동으로
  // 매핑한다. "Zero 서버 관리 > 보안설정 > 역할 매핑" 화면에서 수동으로 "새 역할 매핑
  // 생성"을 할 때와 동일하게: (1) 이 계정명을 매칭하는 규칙(rule)을 새로 만들고,
  // (2) 그 규칙을 administrator 역할에 연결한다.
  async mapToWazuhAdministratorRole(username) {
    const rolesResponse = await WzRequest.apiReq('GET', '/security/roles?sort=name', {});
    const roles = ((rolesResponse.data || {}).data || {}).affected_items || [];
    const administratorRole = roles.find(role => role.name === WAZUH_ADMIN_ROLE_NAME);
    if (!administratorRole) {
      throw new Error(
        `Wazuh 역할 목록에서 "${WAZUH_ADMIN_ROLE_NAME}" 역할을 찾을 수 없습니다.`,
      );
    }

    const ruleResponse = await WzRequest.apiReq('POST', '/security/rules', {
      name: `${username}_administrator`,
      rule: { FIND: { user_name: username } },
    });
    const createdRules = ((ruleResponse.data || {}).data || {}).affected_items || [];
    const createdRule = createdRules[0];
    if (!createdRule || !createdRule.id) {
      throw new Error('규칙 생성 응답에서 규칙 ID를 확인할 수 없습니다.');
    }

    await WzRequest.apiReq(
      'POST',
      `/security/roles/${administratorRole.id}/rules?rule_ids=${createdRule.id}`,
      {},
    );
  }

  handleCreate = async () => {
    const { newUsername, newPassword, newPasswordConfirm, newAllowedIps } = this.state;
    const username = newUsername.trim();

    if (!username) {
      this.setState({ createError: '사용자 이름을 입력하세요.' });
      return;
    }
    if (!newPassword) {
      this.setState({ createError: '비밀번호를 입력하세요.' });
      return;
    }
    if (newPassword !== newPasswordConfirm) {
      this.setState({ createError: '비밀번호가 일치하지 않습니다.' });
      return;
    }

    const allowedIps = newAllowedIps.map(ip => ip.trim()).filter(Boolean);
    if (allowedIps.length > MAX_ALLOWED_IPS) {
      this.setState({ createError: `접속 허용 IP는 최대 ${MAX_ALLOWED_IPS}개까지 입력할 수 있습니다.` });
      return;
    }
    const invalidIp = allowedIps.find(ip => !IPV4_PATTERN.test(ip));
    if (invalidIp) {
      this.setState({ createError: `"${invalidIp}"은(는) 올바른 IP 형식이 아닙니다.` });
      return;
    }

    this.setState({ isCreating: true, createError: '' });
    try {
      await GenericRequest.request(
        'POST',
        `/api/v1/configuration/internalusers/${encodeURIComponent(username)}`,
        {
          password: newPassword,
          backend_roles: [FORCED_BACKEND_ROLE],
          // GS 인증용: 접속 허용 IP 제한(콤마로 구분, 비어있으면 제한 없음).
          // basic auth 로그인 라우트(login-security.ts의 isIpAllowed)가 이 값을 읽는다.
          attributes: { allowed_ips: allowedIps.join(',') },
        },
      );
    } catch (error) {
      this.setState({
        isCreating: false,
        createError: (error && error.message) || '내부 사용자 생성에 실패했습니다.',
      });
      return;
    }

    // GS 인증용: 보안로그에 관리자 계정 생성 이벤트 기록(생성 자체 성공 여부와 무관하게
    // 베스트 에포트 — 실패해도 계정 생성 결과에는 영향 없음)
    this.logSecurityEvent(username, 'user_created');

    // 계정 생성은 성공했으므로, Wazuh RBAC 역할 매핑은 별도로 처리하고 실패해도
    // 계정 생성 자체는 성공으로 안내한다(수동으로 역할 매핑만 추가하면 됨).
    try {
      await this.mapToWazuhAdministratorRole(username);
      this.addToast({
        title: `"${username}" 계정을 생성하고 "${WAZUH_ADMIN_ROLE_NAME}" 역할에 매핑했습니다.`,
        color: 'success',
      });
    } catch (error) {
      this.addToast({
        title: `"${username}" 계정은 생성됐지만 Wazuh 역할 자동 매핑에 실패했습니다.`,
        text: (error && error.message) || '',
        color: 'warning',
      });
    }

    this.setState({ isCreating: false, isCreateModalVisible: false });
    this.fetchUsers();
  };

  renderCreateModal() {
    const {
      newUsername,
      newPassword,
      newPasswordConfirm,
      newAllowedIps,
      isCreating,
      createError,
    } = this.state;
    return (
      <EuiOverlayMask>
        <EuiModal onClose={this.closeCreateModal}>
          <EuiModalHeader>
            <EuiModalHeaderTitle>내부 사용자 생성</EuiModalHeaderTitle>
          </EuiModalHeader>
          <EuiModalBody>
            <EuiForm>
              <EuiFormRow label="사용자 이름">
                <EuiFieldText
                  value={newUsername}
                  onChange={e => this.setState({ newUsername: e.target.value })}
                />
              </EuiFormRow>
              <EuiFormRow label="비밀번호">
                <EuiFieldPassword
                  type="dual"
                  value={newPassword}
                  onChange={e => this.setState({ newPassword: e.target.value })}
                />
              </EuiFormRow>
              <EuiFormRow label="비밀번호 확인">
                <EuiFieldPassword
                  type="dual"
                  value={newPasswordConfirm}
                  onChange={e => this.setState({ newPasswordConfirm: e.target.value })}
                />
              </EuiFormRow>
              <EuiFormRow
                label="백엔드 역할"
                helpText={`이 화면에서 생성하는 계정은 백엔드 역할이 항상 "${FORCED_BACKEND_ROLE}"로 고정되며, 생성 시 Wazuh "${WAZUH_ADMIN_ROLE_NAME}" 역할에도 자동으로 매핑됩니다.`}
              >
                <EuiFieldText value={FORCED_BACKEND_ROLE} disabled />
              </EuiFormRow>
              <EuiFormRow
                label="접속 허용 IP"
                helpText={`이 계정은 여기에 입력한 IP에서만 로그인할 수 있습니다(최대 ${MAX_ALLOWED_IPS}개). 하나도 입력하지 않으면 제한 없음.`}
              >
                <>
                  {newAllowedIps.map((ip, index) => (
                    <EuiFlexGroup key={index} gutterSize="s" alignItems="center">
                      <EuiFlexItem>
                        <EuiFieldText
                          placeholder="예: 192.168.0.10"
                          value={ip}
                          onChange={e => this.handleAllowedIpChange(index, e.target.value)}
                        />
                      </EuiFlexItem>
                      <EuiFlexItem grow={false}>
                        <EuiButtonEmpty
                          iconType="cross"
                          color="danger"
                          onClick={() => this.removeAllowedIpField(index)}
                          aria-label="이 IP 삭제"
                        />
                      </EuiFlexItem>
                    </EuiFlexGroup>
                  ))}
                  <EuiButtonEmpty
                    iconType="plusInCircle"
                    onClick={this.addAllowedIpField}
                    isDisabled={newAllowedIps.length >= MAX_ALLOWED_IPS}
                  >
                    IP 추가
                  </EuiButtonEmpty>
                </>
              </EuiFormRow>
              {createError && (
                <>
                  <EuiSpacer size="s" />
                  <EuiCallOut color="danger" iconType="alert">
                    {createError}
                  </EuiCallOut>
                </>
              )}
            </EuiForm>
          </EuiModalBody>
          <EuiModalFooter>
            <EuiButtonEmpty onClick={this.closeCreateModal}>취소</EuiButtonEmpty>
            <EuiButton fill isLoading={isCreating} onClick={this.handleCreate}>
              생성
            </EuiButton>
          </EuiModalFooter>
        </EuiModal>
      </EuiOverlayMask>
    );
  }

  // GS 인증용: 내부 사용자 편집 모달 — 비밀번호(선택)와 접속 허용 IP 목록을 수정할 수
  // 있다. 사용자 이름/백엔드 역할은 이 화면에서 변경하지 않는다.
  renderEditModal() {
    const {
      editUsername,
      editPassword,
      editPasswordConfirm,
      editAllowedIps,
      isEditing,
      isEditLoading,
      editError,
    } = this.state;
    return (
      <EuiOverlayMask>
        <EuiModal onClose={this.closeEditModal}>
          <EuiModalHeader>
            <EuiModalHeaderTitle>내부 사용자 편집</EuiModalHeaderTitle>
          </EuiModalHeader>
          <EuiModalBody>
            <EuiForm>
              <EuiFormRow label="사용자 이름">
                <EuiFieldText value={editUsername} disabled />
              </EuiFormRow>
              <EuiFormRow
                label="새 비밀번호"
                helpText="비워두면 기존 비밀번호가 유지됩니다."
              >
                <EuiFieldPassword
                  type="dual"
                  value={editPassword}
                  onChange={e => this.setState({ editPassword: e.target.value })}
                  disabled={isEditLoading}
                />
              </EuiFormRow>
              <EuiFormRow label="새 비밀번호 확인">
                <EuiFieldPassword
                  type="dual"
                  value={editPasswordConfirm}
                  onChange={e => this.setState({ editPasswordConfirm: e.target.value })}
                  disabled={isEditLoading}
                />
              </EuiFormRow>
              <EuiFormRow
                label="백엔드 역할"
                helpText={`이 화면에서 관리하는 계정은 백엔드 역할이 항상 "${FORCED_BACKEND_ROLE}"로 고정됩니다.`}
              >
                <EuiFieldText value={FORCED_BACKEND_ROLE} disabled />
              </EuiFormRow>
              <EuiFormRow
                label="접속 허용 IP"
                helpText={`이 계정은 여기에 입력한 IP에서만 로그인할 수 있습니다(최대 ${MAX_ALLOWED_IPS}개). 하나도 입력하지 않으면 제한 없음.`}
              >
                <>
                  {editAllowedIps.map((ip, index) => (
                    <EuiFlexGroup key={index} gutterSize="s" alignItems="center">
                      <EuiFlexItem>
                        <EuiFieldText
                          placeholder="예: 192.168.0.10"
                          value={ip}
                          onChange={e => this.handleEditAllowedIpChange(index, e.target.value)}
                          disabled={isEditLoading}
                        />
                      </EuiFlexItem>
                      <EuiFlexItem grow={false}>
                        <EuiButtonEmpty
                          iconType="cross"
                          color="danger"
                          onClick={() => this.removeEditAllowedIpField(index)}
                          aria-label="이 IP 삭제"
                          isDisabled={isEditLoading}
                        />
                      </EuiFlexItem>
                    </EuiFlexGroup>
                  ))}
                  <EuiButtonEmpty
                    iconType="plusInCircle"
                    onClick={this.addEditAllowedIpField}
                    isDisabled={isEditLoading || editAllowedIps.length >= MAX_ALLOWED_IPS}
                  >
                    IP 추가
                  </EuiButtonEmpty>
                </>
              </EuiFormRow>
              {editError && (
                <>
                  <EuiSpacer size="s" />
                  <EuiCallOut color="danger" iconType="alert">
                    {editError}
                  </EuiCallOut>
                </>
              )}
            </EuiForm>
          </EuiModalBody>
          <EuiModalFooter>
            <EuiButtonEmpty onClick={this.closeEditModal}>취소</EuiButtonEmpty>
            <EuiButton
              fill
              isLoading={isEditing}
              isDisabled={isEditLoading}
              onClick={this.handleUpdate}
            >
              수정
            </EuiButton>
          </EuiModalFooter>
        </EuiModal>
      </EuiOverlayMask>
    );
  }

  renderDeleteConfirmModal() {
    const { deleteUsername, isDeleting } = this.state;
    return (
      <EuiConfirmModal
        title="내부 사용자 삭제"
        onCancel={this.closeDeleteModal}
        onConfirm={this.handleDelete}
        cancelButtonText="취소"
        confirmButtonText="삭제"
        buttonColor="danger"
        isLoading={isDeleting}
      >
        {`"${deleteUsername}" 계정을 삭제하시겠습니까? 이 작업은 되돌릴 수 없습니다.`}
      </EuiConfirmModal>
    );
  }

  render() {
    const {
      users,
      isLoading,
      error,
      isCreateModalVisible,
      isEditModalVisible,
      isDeleteModalVisible,
    } = this.state;

    const columns = [
      { field: 'username', name: '사용자 이름' },
      { field: 'description', name: '설명' },
      {
        name: '작업',
        width: '120px',
        render: item => (
          <EuiFlexGroup gutterSize="xs" responsive={false}>
            <EuiFlexItem grow={false}>
              <EuiButtonIcon
                iconType="pencil"
                color="primary"
                aria-label="수정"
                onClick={() => this.openEditModal(item.username)}
              />
            </EuiFlexItem>
            <EuiFlexItem grow={false}>
              {item.username === RESERVED_USERNAME ? (
                <EuiToolTip content="기본 admin 계정은 삭제할 수 없습니다.">
                  <EuiButtonIcon iconType="trash" color="danger" aria-label="삭제" isDisabled />
                </EuiToolTip>
              ) : (
                <EuiButtonIcon
                  iconType="trash"
                  color="danger"
                  aria-label="삭제"
                  onClick={() => this.openDeleteModal(item.username)}
                />
              )}
            </EuiFlexItem>
          </EuiFlexGroup>
        ),
      },
    ];

    return (
      <div>
        <WzConfigurationPath
          title="내부사용자"
          description="대시보드 내부 사용자 계정 조회 및 생성"
          updateConfigurationSection={this.props.updateConfigurationSection}
        />
        <EuiSpacer size="m" />
        <EuiFlexGroup justifyContent="flexEnd">
          <EuiFlexItem grow={false}>
            <EuiButton fill onClick={this.openCreateModal}>
              내부 사용자 생성
            </EuiButton>
          </EuiFlexItem>
        </EuiFlexGroup>
        <EuiSpacer size="s" />
        {error ? (
          <EuiCallOut
            color="danger"
            title="내부 사용자 목록을 불러오는 중 오류가 발생했습니다."
            iconType="alert"
          />
        ) : (
          <EuiBasicTable items={users} columns={columns} loading={isLoading} />
        )}
        {isCreateModalVisible && this.renderCreateModal()}
        {isEditModalVisible && this.renderEditModal()}
        {isDeleteModalVisible && this.renderDeleteConfirmModal()}
      </div>
    );
  }
}

export default WzConfigurationInternalUsers;
