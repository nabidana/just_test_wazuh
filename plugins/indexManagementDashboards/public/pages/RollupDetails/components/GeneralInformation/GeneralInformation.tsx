/*
 * Copyright OpenSearch Contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { Component } from "react";
import { EuiFlexGrid, EuiSpacer, EuiFlexItem, EuiText, EuiFlexGroup, EuiHorizontalRule, EuiPanel, EuiTitle } from "@elastic/eui";
import { ContentPanel, ContentPanelActions } from "../../../../components/ContentPanel";
import { ModalConsumer } from "../../../../components/Modal";

interface GeneralInformationProps {
  rollupId: string;
  description: string;
  sourceIndex: string;
  targetIndex: string;
  scheduleText: string;
  pageSize: number;
  lastUpdated: string;
  onEdit: () => void;
  useNewUX: boolean;
}

export default class GeneralInformation extends Component<GeneralInformationProps> {
  constructor(props: GeneralInformationProps) {
    super(props);
  }

  render() {
    const { rollupId, description, onEdit, sourceIndex, targetIndex, scheduleText, pageSize, lastUpdated, useNewUX } = this.props;
    const infoItems = [
      { term: "이름", value: rollupId },
      { term: "원본 인덱스", value: sourceIndex },
      { term: "대상 인덱스", value: targetIndex },
      { term: "일정", value: scheduleText },
      { term: "설명", value: description || "-" },
      { term: "마지막 업데이트", value: lastUpdated },
      { term: "실행당 페이지 수", value: pageSize },
    ];
    const useActions = useNewUX
      ? []
      : [
          {
            text: "편집",
            buttonProps: {
              onClick: () => onEdit(),
            },
          },
        ];
    return (
      <EuiPanel>
        <EuiFlexGroup gutterSize="xs">
          <EuiFlexItem>
            <EuiTitle size="s">
              <h2>일반 정보</h2>
            </EuiTitle>
          </EuiFlexItem>
          <EuiFlexItem grow={false}>
            <ModalConsumer>{() => <ContentPanelActions actions={useActions} />}</ModalConsumer>
          </EuiFlexItem>
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
          <EuiSpacer size="s" />
        </div>
      </EuiPanel>
    );
  }
}
