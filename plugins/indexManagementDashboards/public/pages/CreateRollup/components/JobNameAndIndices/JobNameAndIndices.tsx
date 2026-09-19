/*
 * Copyright OpenSearch Contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { Component } from "react";
import { EuiFlexGrid, EuiSpacer, EuiFlexItem, EuiText, EuiFlexGroup, EuiHorizontalRule, EuiPanel, EuiTitle } from "@elastic/eui";
import { ContentPanel, ContentPanelActions } from "../../../../components/ContentPanel";
import { ModalConsumer } from "../../../../components/Modal";
import { IndexItem } from "../../../../../models/interfaces";

interface JobNameAndIndicesProps {
  rollupId: string;
  description: string;
  sourceIndex: { label: string; value?: IndexItem }[];
  targetIndex: { label: string; value?: IndexItem }[];
  onChangeStep: (step: number) => void;
}

export default class JobNameAndIndices extends Component<JobNameAndIndicesProps> {
  constructor(props: JobNameAndIndicesProps) {
    super(props);
  }

  render() {
    const { rollupId, description, onChangeStep, sourceIndex, targetIndex } = this.props;

    return (
      <EuiPanel>
        <EuiFlexGroup gutterSize="xs">
          <EuiFlexItem>
            <EuiTitle size="s">
              <h2>작업 이름 및 인덱스</h2>
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
        <EuiHorizontalRule margin={"xs"} />
        <div>
          <EuiSpacer size="s" />
          <EuiFlexGrid columns={3}>
            <EuiFlexItem>
              <EuiText size="s">
                <dt>이름</dt>
                <dd>{rollupId}</dd>
              </EuiText>
            </EuiFlexItem>
            <EuiFlexItem>
              <EuiText size="s">
                <dt>원본 인덱스</dt>
                <dd>{sourceIndex[0].label}</dd>
              </EuiText>
            </EuiFlexItem>
            <EuiFlexItem>
              <EuiText size="s">
                <dt>대상 인덱스</dt>
                <dd>{targetIndex[0].label}</dd>
              </EuiText>
            </EuiFlexItem>
            <EuiFlexItem>
              <EuiText size="s">
                <dt>설명</dt>
                <dd>{description == "" ? "-" : description}</dd>
              </EuiText>
            </EuiFlexItem>
          </EuiFlexGrid>
          <EuiSpacer size="s" />
        </div>
      </EuiPanel>
    );
  }
}
