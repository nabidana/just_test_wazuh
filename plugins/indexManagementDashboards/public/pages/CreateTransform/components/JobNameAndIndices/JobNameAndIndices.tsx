/*
 * Copyright OpenSearch Contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { Component } from "react";
import { EuiFlexGrid, EuiSpacer, EuiFlexItem, EuiText, EuiPanel, EuiFlexGroup, EuiHorizontalRule, EuiTitle } from "@elastic/eui";
import { ContentPanelActions } from "../../../../components/ContentPanel";
import { ModalConsumer } from "../../../../components/Modal";
import { IndexItem } from "../../../../../models/interfaces";

interface JobNameAndIndicesProps {
  transformId: string;
  description: string;
  sourceIndex: { label: string; value?: IndexItem }[];
  targetIndex: { label: string; value?: IndexItem }[];
  sourceIndexFilter: string;
  onChangeStep: (step: number) => void;
}

export default class JobNameAndIndices extends Component<JobNameAndIndicesProps> {
  constructor(props: JobNameAndIndicesProps) {
    super(props);
  }

  render() {
    const { transformId, description, onChangeStep, sourceIndex, targetIndex, sourceIndexFilter } = this.props;

    return (
      <EuiPanel>
        <EuiFlexGroup>
          <EuiFlexItem>
            <EuiTitle size="s">
              <h2>인덱스 설정</h2>
            </EuiTitle>
          </EuiFlexItem>
          <EuiFlexItem grow={false}>
            <ModalConsumer>
              {() => (
                <ContentPanelActions
                  actions={[
                    {
                      text: "편집",
                      buttonProps: {
                        onClick: () => onChangeStep(1),
                      },
                    },
                  ]}
                />
              )}
            </ModalConsumer>
          </EuiFlexItem>
        </EuiFlexGroup>
        <EuiHorizontalRule margin="xs" />
        <div>
          <EuiFlexGrid columns={3}>
            <EuiFlexItem>
              <EuiText size="xs">
                <dt>이름</dt>
                <dd>{transformId}</dd>
              </EuiText>
            </EuiFlexItem>
            <EuiFlexItem>
              <EuiText size="xs">
                <dt>원본 인덱스</dt>
                <dd>{sourceIndex[0].label}</dd>
              </EuiText>
            </EuiFlexItem>
            <EuiFlexItem>
              <EuiText size="xs">
                <dt>대상 인덱스</dt>
                <dd>{targetIndex[0].label}</dd>
              </EuiText>
            </EuiFlexItem>
            <EuiFlexItem>
              <EuiText size="xs">
                <dt>설명</dt>
                <dd>{description == "" ? "-" : description}</dd>
              </EuiText>
            </EuiFlexItem>
            <EuiFlexItem>
              <EuiText size="xs">
                <dt>원본 인덱스 필터</dt>
                <dd>{sourceIndexFilter == "" ? "-" : sourceIndexFilter}</dd>
              </EuiText>
            </EuiFlexItem>
          </EuiFlexGrid>
          <EuiSpacer size="s" />
        </div>
      </EuiPanel>
    );
  }
}
