/*
 * Wazuh app - React component for showing agent fields such as IP, ID, name,
 * version, OS, registration date, last keep alive.
 *
 * Copyright (C) 2015-2022 Wazuh, Inc.
 *
 * This program is free software; you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation; either version 2 of the License, or
 * (at your option) any later version.
 *
 * Find more information about this on the LICENSE file.
 */
import React, { Component } from 'react';
import { WzRequest } from '../../../../react-services/wz-request';
import { formatUIDate } from '../../../../react-services/time-service';
import { Agent } from '../../../endpoints-summary/types';
import { RibbonItemLabel, type IRibbonItem } from '../../ribbon/ribbon-item';
import WzRibbon from '../../ribbon/ribbon';
import { getOsName, getPlatformIcon } from '../../platform';
import { EuiFlexGroup, EuiFlexItem } from '@elastic/eui';
interface AgentInfoProps {
  agent: Agent;
  goGroups?: (agent: Agent, key: number) => void;
  isCondensed?: boolean;
}

export class AgentInfo extends Component<AgentInfoProps> {
  constructor(props: AgentInfoProps) {
    super(props);
  }

  async componentDidMount() {
    const managerVersion = await WzRequest.apiReq('GET', '/', {});
    this.setState({
      managerVersion: managerVersion?.data?.data?.api_version || {},
    });
  }

  isIPv6(ip: string) {
    return ip.includes(':');
  }

  render() {
    const { agent } = this.props;
    let arrayStats: IRibbonItem[];

    if (this.props.isCondensed) {
      arrayStats = [
        {
          key: 'id',
          value: agent.id,
          label: 'ID',
          style: { maxWidth: 100 },
          condensed: true,
        },
        {
          key: RibbonItemLabel.AGENT_STATUS,
          value: agent,
          label: '상태',
          style: { maxWidth: 150 },
          condensed: true,
        },
        {
          key: 'version',
          // GS 인증용: Wazuh 코어 버전 대신 자체 제품 버전 고정 문자열 표시
          value: 'V1.0.0.0',
          label: '버전',
          style: { maxWidth: 150 },
          condensed: true,
        },
        {
          key: RibbonItemLabel.OPERATING_SYSTEM,
          value: agent,
          label: '운영체제',
          style: { maxWidth: 200 },
        },
      ];
    } else {
      arrayStats = [
        {
          key: 'id',
          value: agent.id,
          label: 'ID',
          condensed: true,
        },
        {
          key: RibbonItemLabel.AGENT_STATUS,
          value: agent,
          label: '상태',
          condensed: true,
        },
        {
          key: 'ip',
          value: agent.ip,
          label: 'IP 주소',
          style: {
            // IPv4: maxWidth: 100
            // IPv6: maxWidth: 150
            maxWidth: this.isIPv6(agent.ip) ? 150 : 100,
          },
          condensed: true,
        },
        {
          key: 'version',
          // GS 인증용: Wazuh 코어 버전 대신 자체 제품 버전 고정 문자열 표시
          value: 'V1.0.0.0',
          label: '버전',
          condensed: true,
        },
        {
          key: RibbonItemLabel.GROUPS,
          value: agent.group,
          label: '그룹',
          condensed: true,
        },
        {
          key: RibbonItemLabel.OPERATING_SYSTEM,
          value: agent,
          label: '운영체제',
          render: (value: Agent, forceTheme?: 'dark') => (
            <EuiFlexGroup
              responsive={false}
              alignItems='center'
              gutterSize='none'
              style={{ gap: 5 }}
            >
              <EuiFlexItem grow={false}>
                {getPlatformIcon(value, forceTheme)}
              </EuiFlexItem>
              <EuiFlexItem grow={false}>{getOsName(value)}</EuiFlexItem>
            </EuiFlexGroup>
          ),
        },
        {
          key: 'cluster-node',
          value:
            agent.node_name && agent.node_name !== 'unknown'
              ? agent.node_name
              : '-',
          label: '클러스터 노드',
          style: { maxWidth: 100 },
        },
        {
          key: 'registration-date',
          value: formatUIDate(agent.dateAdd),
          label: '등록일',
          style: { minWidth: 165 },
        },
        {
          key: 'last-keep-alive',
          value: formatUIDate(agent.lastKeepAlive),
          label: '마지막 응답',
          style: { minWidth: 165 },
        },
      ];
    }

    return <WzRibbon data-test-subj='agent-info' items={arrayStats} />;
  }
}
