/*
 * Wazuh app - Simple description for each App tabs
 * Copyright (C) 2015-2022 Wazuh, Inc.
 *
 * This program is free software; you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation; either version 2 of the License, or
 * (at your option) any later version.
 *
 * Find more information about this on the LICENSE file.
 */
export const WAZUH_MODULES = {
  general: {
    title: '위협탐지',
    appId: 'threat-hunting',
    description: '환경 내 보안 알림을 살펴보며 문제와 위협을 식별합니다.',
  },
  fim: {
    title: '파일 무결성 모니터링',
    appId: 'file-integrity-monitoring',
    description:
      '권한, 콘텐츠, 소유권, 속성 등 파일 변경과 관련된 경고입니다.',
  },
  pm: {
    title: '악성코드 탐지',
    appId: 'malware-detection',
    description:
      '악성코드 감염이나 사이버 공격으로 발생한 침해 지표(IoC)를 확인합니다.',
  },
  vuls: {
    title: '취약점 탐지',
    appId: 'vulnerability-detection',
    description:
      '환경 내에서 알려진 취약점에 영향을 받는 애플리케이션을 확인합니다.',
  },
  oscap: {
    title: 'OpenSCAP',
    appId: 'openscap',
    description:
      'SCAP 점검을 이용한 구성 평가 및 컴플라이언스 모니터링 자동화입니다.',
  },
  audit: {
    title: '시스템 감사',
    appId: 'system-auditing',
    description:
      '사용자 행동을 감사하고 명령 실행을 모니터링하며 중요 파일 접근 시 알립니다.',
  },
  pci: {
    title: 'PCI DSS',
    appId: 'pci-dss',
    description:
      '결제 카드 소유자 데이터를 처리, 저장, 전송하는 기관을 위한 글로벌 보안 표준입니다.',
  },
  gdpr: {
    title: 'GDPR',
    appId: 'gdpr',
    description:
      'GDPR(일반 개인정보 보호법)은 개인정보 처리에 관한 가이드라인을 규정합니다.',
  },
  hipaa: {
    title: 'HIPAA',
    appId: 'hipaa',
    description:
      'Health Insurance Portability and Accountability Act of 1996 (HIPAA) provides data privacy and security provisions for safeguarding medical information.',
  },
  nist: {
    title: 'NIST 800-53',
    appId: 'nist-800-53',
    description:
      'National Institute of Standards and Technology Special Publication 800-53 (NIST 800-53) sets guidelines for federal information systems.',
  },
  tsc: {
    title: 'TSC',
    appId: 'tsc',
    description:
      'Trust Services Criteria for Security, Availability, Processing Integrity, Confidentiality, and Privacy',
  },
  ciscat: {
    title: 'CIS-CAT',
    appId: 'ciscat',
    description:
      'CIS(Center for Internet Security) 스캐너와 SCAP 점검을 이용한 구성 평가입니다.',
  },
  microsoftGraphAPI: {
    title: 'Microsoft Graph API',
    appId: 'microsoft-graph-api',
    description:
      'Security events related to your Microsoft Graph services, collected directly via Microsoft Graph API.',
  },
  aws: {
    title: 'AWS',
    appId: 'amazon-web-services',
    description:
      'Security events related to your Amazon AWS services, collected directly via AWS API.',
  },
  office: {
    title: 'Office 365',
    appId: 'office365',
    description: 'Security events related to your Office 365 services.',
  },
  gcp: {
    title: 'Google Cloud',
    appId: 'google-cloud',
    description:
      'Security events related to your Google Cloud Platform services, collected directly via GCP API.', // TODO GCP
  },
  mitre: {
    title: 'MITRE ATT&CK',
    appId: 'mitre-attack',
    description:
      '공격자의 전술 및 기법에 매핑된 보안 알림을 살펴보며 위협에 대한 이해를 높입니다.',
  },
  'system-inventory': {
    title: '시스템 인벤토리',
    // This appId is not used, for consistency was added.
    appId: 'system-inventory',
    description:
      '모니터링 중인 엔드포인트의 네트워크, 인터페이스, 프로토콜, 프로세스, 포트, 패키지, 핫픽스, 시스템 및 하드웨어 정보입니다.',
  },
  stats: {
    title: '통계',
    // This appId is not used, for consistency was added.
    appId: 'endpoint-summary',
    description: '에이전트 및 로그수집기 통계입니다.',
  },
  configuration: {
    title: '구성',
    // This appId is not used, for consistency was added.
    appId: 'endpoint-summary',
    description:
      '그룹에서 원격으로 적용된 현재 에이전트 설정을 확인합니다.',
  },
  osquery: {
    title: 'Osquery',
    appId: 'osquery',
    description:
      'Osquery를 사용하면 운영체제를 고성능 관계형 데이터베이스처럼 조회할 수 있습니다.',
  },
  sca: {
    title: '구성 평가',
    appId: 'configuration-assessment',
    description: '자산을 스캔하여 구성 평가 감사를 수행합니다.',
  },
  docker: {
    title: 'Docker',
    appId: 'docker',
    description:
      'Monitor and collect the activity from Docker containers such as creation, running, starting, stopping or pausing events.',
  },
  github: {
    title: 'GitHub',
    appId: 'github',
    description:
      'Monitoring events from audit logs of your GitHub organizations.',
  },
  'it-hygiene': {
    title: 'IT Hygiene',
    appId: 'it-hygiene',
    description:
      '시스템, 소프트웨어, 프로세스, 네트워크 계층을 평가하여 잘못된 설정, 무단 변경, 이상 징후를 탐지합니다.',
  },
  devTools: {
    title: 'API 콘솔',
    appId: 'api-console',
    description: 'API 엔드포인트를 테스트합니다.',
  },
  logtest: {
    title: '로그 테스트',
    appId: 'ruleset-test',
    description: '룰셋 테스트 로그를 확인합니다.',
  },

  // TODO - Research the uses of this code.
  testConfiguration: {
    title: '설정 테스트',
    appId: '',
    description: '적용하기 전에 설정을 확인합니다.',
  },
};
