/*
 * Wazuh app - Definitions of configuration sections.
 * Copyright (C) 2015-2022 Wazuh, Inc.
 *
 * This program is free software; you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation; either version 2 of the License, or
 * (at your option) any later version.
 *
 * Find more information about this on the LICENSE file.
 */

import { hasAgentSupportModule } from '../../../../../react-services/wz-agents';
import { WAZUH_MODULES_ID } from '../../../../../../common/constants';
import { docker as dockerApp } from '../../../../../utils/applications';

export default [
  {
    title: '기본 구성',
    description: '',
    settings: [
      {
        name: '전역 구성',
        description: '전역 및 원격 설정',
        goto: 'global-configuration',
        when: 'manager',
      },
      {
        name: 'Cluster',
        description: '마스터 노드 구성',
        goto: 'cluster',
        when: 'manager',
      },
      {
        name: '등록 서비스',
        description: '자동 에이전트 등록 서비스',
        goto: 'registration-service',
        when: 'manager',
      },
      {
        name: '전역 구성',
        description: '에이전트에 적용되는 로깅 설정',
        goto: 'global-configuration-agent',
        when: 'agent',
      },
      {
        name: '통신',
        description: '매니저와의 연결 관련 설정',
        goto: 'client',
        when: 'agent',
      },
      {
        name: '플러딩 방지 설정',
        description: '이벤트 폭주를 방지하기 위한 에이전트 버킷 파라미터',
        goto: 'client-buffer',
        when: 'agent',
      },
      {
        name: '레이블',
        description:
          '알림에 포함되는 에이전트 관련 사용자 정의 정보',
        goto: 'alerts-agent',
        when: 'agent',
      },
      // ,
      // { //TODO: Uncomment this to activate Log Settings
      //   name: 'Log settings',
      //   description: 'Alerts, archives and internal settings',
      //   goto: 'log-settings'
      // }
    ],
  },
  {
    title: '알림 및 출력 관리',
    description: '',
    settings: [
      {
        name: '알림',
        description: '알림 및 알림 형식 관련 설정',
        goto: 'alerts',
        when: 'manager',
      },
      {
        name: '통합',
        description:
          'Slack, VirusTotal, PagerDuty 등 외부 API 통합',
        goto: 'integrations',
        when: 'manager',
      },
    ],
  },
  {
    title: '감사 및 정책 모니터링',
    description: '',
    settings: [
      {
        name: '정책 모니터링',
        description:
          '보안 정책, 표준, 하드닝 가이드 준수를 보장하기 위한 구성',
        goto: 'policy-monitoring',
      },
      {
        name: 'OpenSCAP',
        description:
          'SCAP 점검을 이용한 구성 평가 및 규정 준수 모니터링 자동화',
        goto: 'open-scap',
        when: agent => hasAgentSupportModule(agent, WAZUH_MODULES_ID.OPEN_SCAP),
      },
      {
        name: 'CIS-CAT',
        description:
          'CIS 스캐너와 SCAP 점검을 이용한 구성 평가',
        goto: 'cis-cat',
      },
    ],
  },
  {
    title: '시스템 위협 및 사고 대응',
    description: '',
    settings: [
      {
        name: '취약점',
        description:
          '알려진 취약점의 영향을 받는 애플리케이션을 확인',
        goto: 'vulnerabilities',
        when: 'manager',
      },
      {
        name: 'Osquery',
        description:
          '운영체제를 고성능 관계형 데이터베이스로 노출',
        goto: 'osquery',
      },
      {
        name: '인벤토리 데이터',
        description:
          '시스템 운영체제, 하드웨어, 네트워크, 패키지 관련 정보를 수집',
        goto: 'inventory',
      },
      {
        name: '능동 대응',
        description: '즉각적인 대응을 통한 능동적 위협 처리',
        goto: 'active-response',
        when: 'manager',
      },
      {
        name: '능동 대응',
        description: '즉각적인 대응을 통한 능동적 위협 처리',
        goto: 'active-response-agent',
        when: 'agent',
      },
      {
        name: '명령',
        description: 'Command wodle 구성 옵션',
        goto: 'commands',
      },
      {
        name: 'Docker listener',
        description:
          'Docker 컨테이너의 생성, 실행, 시작, 중지, 일시정지 등 활동을 모니터링하고 수집',
        goto: 'docker-listener',
        when: agent => hasAgentSupportModule(agent, dockerApp.id),
      },
    ],
  },
  {
    title: '로그 데이터 분석',
    description: '',
    settings: [
      {
        name: '로그 수집',
        description:
          '텍스트 파일, Windows 이벤트, syslog 출력에 대한 로그 분석',
        goto: 'log-collection',
      },
      {
        name: '무결성 모니터링',
        description:
          '파일의 내용, 권한, 소유권, 속성 변경을 식별',
        goto: 'integrity-monitoring',
      },
      {
        name: '에이전트리스',
        description:
          '라우터, 방화벽, 스위치 등 장비에 대한 무결성 점검 수행',
        goto: 'agentless',
        when: 'manager',
      },
    ],
  },
];
