/*
 * Copyright OpenSearch Contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { Component } from "react";
import { EuiLink, EuiFlexGrid, EuiSpacer, EuiFlexItem, EuiText, EuiPanel, EuiFlexGroup, EuiHorizontalRule, EuiTitle } from "@elastic/eui";
import { ContentPanel } from "../../../../components/ContentPanel";
import { ModalConsumer } from "../../../../components/Modal";
import { ErrorNotification, ISMTemplate } from "../../../../../models/interfaces";
import JSONModal from "../../../../components/JSONModal";

interface PolicySettingsProps {
  policyId: string;
  errorNotification: ErrorNotification | null | undefined;
  primaryTerm: number;
  lastUpdated: number | undefined;
  description: string;
  sequenceNumber: number;
  ismTemplates: ISMTemplate[] | ISMTemplate | null;
}

interface PolicySettingsState {}

export default class PolicySettings extends Component<PolicySettingsProps, PolicySettingsState> {
  render() {
    const { policyId, errorNotification, primaryTerm, lastUpdated, description, sequenceNumber } = this.props;

    const updatedDate = lastUpdated ? new Date(lastUpdated).toLocaleString() : "-";

    let errorNotificationValue: string | JSX.Element = "-";

    if (errorNotification) {
      errorNotificationValue = (
        <ModalConsumer>
          {({ onShow }) => (
            <EuiLink onClick={() => onShow(JSONModal, { title: "오류 알림", json: errorNotification })}>코드 보기</EuiLink>
          )}
        </ModalConsumer>
      );
    }

    const infoItems = [
      { term: "정책 이름", value: policyId },
      { term: "오류 알림", value: errorNotificationValue },
      { term: "프라이머리 텀", value: primaryTerm },
      { term: "마지막 업데이트", value: updatedDate },
      { term: "정책 설명", value: description || "-" },
      { term: "시퀀스 번호", value: sequenceNumber },
    ];

    return (
      <EuiPanel>
        <EuiFlexGroup gutterSize="xs" alignItems="center">
          <EuiTitle size="s">
            <h2>{`정책 설정`}</h2>
          </EuiTitle>
        </EuiFlexGroup>
        <EuiHorizontalRule margin={"xs"} />
        <div>
          <EuiFlexGrid columns={4}>
            {infoItems.map((item) => (
              <EuiFlexItem key={`${item.term}#${item.value}`}>
                <EuiText size="s">
                  <dt>{item.term}</dt>
                  <dd>{item.value}</dd>
                </EuiText>
              </EuiFlexItem>
            ))}
          </EuiFlexGrid>
        </div>
      </EuiPanel>
    );
  }
}
