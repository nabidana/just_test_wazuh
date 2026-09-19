/*
 * Copyright OpenSearch Contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { Component } from "react";
import { EuiFlexGrid, EuiSpacer, EuiFlexItem, EuiText, EuiFlexGroup, EuiPanel, EuiHorizontalRule, EuiTitle } from "@elastic/eui";
import { ContentPanelActions } from "../../../../components/ContentPanel";
import { ModalConsumer } from "../../../../components/Modal";
import { getUISettings } from "../../../../services/Services";

interface GeneralInformationProps {
  id: string;
  description: string;
  sourceIndex: string;
  targetIndex: string;
  sourceIndexFilter: string;
  scheduledText: string;
  pageSize: number;
  enabledAt: number;
  updatedAt: number;
  onEdit: () => void;
}

export default class GeneralInformation extends Component<GeneralInformationProps> {
  constructor(props: GeneralInformationProps) {
    super(props);
  }

  render() {
    const { id, description, sourceIndex, targetIndex, sourceIndexFilter, scheduledText, pageSize, updatedAt, onEdit } = this.props;

    const enableDate = new Date(updatedAt);

    const infoItems = [
      { term: "이름", value: id },
      { term: "상태", value: "활성화됨: " + enableDate.toLocaleString() }, // show disabled state, make a const
      { term: "원본 인덱스", value: sourceIndex },
      { term: "일정", value: scheduledText },
      { term: "설명", value: description || "-" },
      {},
      { term: "원본 인덱스 필터", value: sourceIndexFilter },
      { term: "실행당 페이지 수", value: pageSize },
      {},
      {},
      { term: "대상 인덱스", value: targetIndex },
    ];
    const uiSettings = getUISettings();
    const useUpdatedUX = uiSettings.get("home:useNewHomePage");
    const size = useUpdatedUX ? "s" : undefined;

    return (
      <>
        <EuiPanel>
          <EuiFlexGroup>
            <EuiFlexItem>
              <EuiTitle size="s">
                <h2>일반 정보</h2>
              </EuiTitle>
            </EuiFlexItem>
            <EuiFlexItem grow={false}>
              {!useUpdatedUX ? (
                <ModalConsumer>
                  {() => (
                    <ContentPanelActions
                      size={size}
                      actions={[
                        {
                          text: "편집",
                          buttonProps: {
                            onClick: () => onEdit(),
                          },
                        },
                      ]}
                    />
                  )}
                </ModalConsumer>
              ) : null}
            </EuiFlexItem>
          </EuiFlexGroup>
          <EuiHorizontalRule margin="xs" />
          <div>
            <EuiSpacer size="s" />
            <EuiFlexGrid columns={4}>
              {infoItems.map((item, index) => (
                <EuiFlexItem key={index}>
                  <EuiText size="xs">
                    <dt>{item.term}</dt>
                    <dd>{item.value}</dd>
                  </EuiText>
                </EuiFlexItem>
              ))}
            </EuiFlexGrid>
            <EuiSpacer size="s" />
          </div>
        </EuiPanel>
      </>
    );
  }
}
