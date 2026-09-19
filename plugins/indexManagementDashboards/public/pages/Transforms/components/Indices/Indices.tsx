/*
 * Copyright OpenSearch Contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { Component } from "react";
import { EuiCodeEditor, EuiSpacer, EuiText, EuiPanel, EuiHorizontalRule, EuiTitle } from "@elastic/eui";

interface IndicesProps {
  sourceIndex: string;
  targetIndex: string;
  sourceIndexFilter: string;
  size: "s" | "m";
}

export default class Indices extends Component<IndicesProps> {
  constructor(props: IndicesProps) {
    super(props);
  }

  render() {
    const { sourceIndex, targetIndex, sourceIndexFilter } = this.props;

    return (
      <EuiPanel>
        <EuiTitle size="s">
          <h2>인덱스</h2>
        </EuiTitle>
        <EuiHorizontalRule margin="xs" />
        <div>
          <EuiText size="s">
            <h3>원본 인덱스</h3>
            <p>{sourceIndex}</p>
          </EuiText>
          <EuiSpacer size="m" />
          <EuiText size="s">
            <h3>원본 인덱스 필터</h3>
            <EuiCodeEditor mode="json" theme="github" width="400px" height="100px" value={sourceIndexFilter} readOnly />
          </EuiText>
          <EuiSpacer size="m" />
          <EuiText size="s">
            <h3>대상 인덱스</h3>
            <p>{targetIndex}</p>
          </EuiText>
        </div>
      </EuiPanel>
    );
  }
}
