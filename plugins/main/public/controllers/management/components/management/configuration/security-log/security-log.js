/*
 * Wazuh app - React component for security log (login/logout events) view.
 * (Zero 서버 커스텀 컴포넌트)
 *
 * This program is free software; you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation; either version 2 of the License, or
 * (at your option) any later version.
 */

import React, { Component } from 'react';
import { EuiBasicTable, EuiCallOut, EuiSpacer } from '@elastic/eui';

import WzConfigurationPath from '../util-components/configuration-path';
import { GenericRequest } from '../../../../../../react-services/generic-request';
import { formatUIDate } from '../../../../../../react-services/time-service';
import { UI_LOGGER_LEVELS } from '../../../../../../../common/constants';
import { UI_ERROR_SEVERITIES } from '../../../../../../react-services/error-orchestrator/types';
import { getErrorOrchestrator } from '../../../../../../react-services/common-services';

// GS 인증용: 대시보드 로그인 성공/실패, 로그아웃 이벤트 조회 화면.
// 데이터 출처: plugins-wazuh-security-dashboards-plugin의 basic auth 로그인/로그아웃
// 핸들러(server/auth/types/basic/routes.ts)가 기록하는 일별 인덱스
// wazuh-dashboard-security-log-YYYY.MM.DD (인덱스 패턴: wazuh-dashboard-security-log-*).
// 시도한 아이디는 로그인 실패 시에도 그대로 기록되어 남는다.
const SECURITY_LOG_INDEX_PATTERN = 'wazuh-dashboard-security-log-*';

const EVENT_TYPE_LABEL = {
  login_success: '로그인 성공',
  login_failure: '로그인 실패',
  logout: '로그아웃',
  // GS 인증용: 접속 허용 IP 제한 / 중복 로그인 차단 / 내부사용자 생성·수정·삭제 이벤트.
  // user_created/user_updated/user_deleted는 실제로는 아래 "결과" 컬럼 렌더링에서
  // result_detail(대상 계정명 + 처리 결과, 예: "secuwiz 아이디 생성 성공")로 대체
  // 표시되며, 여기 라벨은 result_detail이 없는 과거 기록에 대한 대비용 기본값이다.
  ip_blocked: 'IP 제한으로 접속 차단',
  duplicate_session_blocked: '중복 로그인 차단',
  user_created: '관리자 계정 생성',
  user_updated: '관리자 계정 정보 수정',
  user_deleted: '관리자 계정 삭제',
};

class WzConfigurationSecurityLog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      items: [],
      totalItems: 0,
      pageIndex: 0,
      pageSize: 25,
      error: false,
    };
  }

  componentDidMount() {
    this.fetchItems();
  }

  async fetchItems() {
    const { pageIndex, pageSize } = this.state;
    this.setState({ isLoading: true });
    try {
      const search = {
        index: SECURITY_LOG_INDEX_PATTERN,
        body: {
          query: { match_all: {} },
          sort: [{ '@timestamp': { order: 'desc' } }],
          from: pageIndex * pageSize,
          size: pageSize,
        },
      };
      const response = await GenericRequest.request(
        'POST',
        '/elastic/alerts',
        search,
      );
      const hits = ((response.data || {}).hits || {}).hits || [];
      const total = ((response.data || {}).hits || {}).total;
      this.setState({
        items: hits.map(hit => hit._source),
        totalItems: typeof total === 'object' ? total.value : total || 0,
        isLoading: false,
        error: false,
      });
    } catch (error) {
      this.setState({
        isLoading: false,
        error: true,
        items: [],
        totalItems: 0,
      });
      const options = {
        context: `${WzConfigurationSecurityLog.name}.fetchItems`,
        level: UI_LOGGER_LEVELS.ERROR,
        severity: UI_ERROR_SEVERITIES.BUSINESS,
        error: {
          error: error,
          message: error.message || error,
          title: `${error.name}: 보안로그 조회 중 오류가 발생했습니다`,
        },
      };
      getErrorOrchestrator().handleError(options);
    }
  }

  onTableChange = ({ page }) => {
    const { index, size } = page;
    this.setState({ pageIndex: index, pageSize: size }, () =>
      this.fetchItems(),
    );
  };

  render() {
    const { items, totalItems, pageIndex, pageSize, isLoading, error } =
      this.state;

    const columns = [
      {
        field: '@timestamp',
        name: '시간',
        width: '220px',
        render: value => (value ? formatUIDate(value) : '-'),
      },
      {
        field: 'username',
        name: '시도한 아이디',
      },
      {
        field: 'event_type',
        name: '결과',
        // GS 인증용: 계정 생성/수정/삭제 이벤트는 result_detail(대상 계정명 + 처리 결과,
        // 예: "secuwiz 아이디 생성 성공")을 우선 표시하고, 없으면(로그인/로그아웃 등
        // 기존 이벤트) 고정 라벨을 표시한다.
        render: (value, item) => item.result_detail || EVENT_TYPE_LABEL[value] || value,
      },
      {
        field: 'ip',
        name: 'IP 주소',
      },
    ];

    const pagination = {
      pageIndex,
      pageSize,
      totalItemCount: totalItems,
      pageSizeOptions: [25, 50, 100],
    };

    return (
      <div>
        <WzConfigurationPath
          title='보안로그'
          description='대시보드 로그인 성공/실패, 로그아웃 이벤트 기록'
          updateConfigurationSection={this.props.updateConfigurationSection}
        />
        <EuiSpacer size='m' />
        {error ? (
          <EuiCallOut
            color='danger'
            title='보안로그를 불러오는 중 오류가 발생했습니다.'
            iconType='alert'
          />
        ) : (
          <EuiBasicTable
            items={items}
            columns={columns}
            loading={isLoading}
            pagination={pagination}
            onChange={this.onTableChange}
          />
        )}
      </div>
    );
  }
}

export default WzConfigurationSecurityLog;
