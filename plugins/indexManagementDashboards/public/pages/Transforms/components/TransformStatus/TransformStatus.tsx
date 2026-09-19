/*
 * Copyright OpenSearch Contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { Component } from "react";
import { EuiFlexGrid, EuiSpacer, EuiFlexItem, EuiText, EuiPanel, EuiHorizontalRule, EuiTitle } from "@elastic/eui";
import { TransformMetadata } from "../../../../../models/interfaces";
import { renderStatus } from "../../utils/metadataHelper";

interface TransformStatusProps {
  metadata: TransformMetadata | undefined;
}

export default class TransformStatus extends Component<TransformStatusProps> {
  constructor(props: TransformStatusProps) {
    super(props);
  }

  render() {
    const { metadata } = this.props;
    return (
      <EuiPanel>
        <EuiTitle size="s">
          <h2>트랜스폼 상태</h2>
        </EuiTitle>
        <EuiHorizontalRule margin="xs" />
        <div>
          <EuiSpacer size="s" />
          <EuiFlexGrid columns={4}>
            <EuiFlexItem>
              <EuiText size="xs">
                <dt>상태</dt>
                {renderStatus(metadata)}
              </EuiText>
            </EuiFlexItem>
            <EuiFlexItem>
              <EuiText size="xs">
                <dt>색인화된 문서</dt>
                <dd>
                  {metadata == null || metadata.transform_metadata == null ? "-" : metadata.transform_metadata.stats.documents_indexed}
                </dd>
              </EuiText>
            </EuiFlexItem>
            <EuiFlexItem>
              <EuiText size="xs">
                <dt>처리된 문서</dt>
                <dd>
                  {metadata == null || metadata.transform_metadata == null ? "-" : metadata.transform_metadata.stats.documents_processed}
                </dd>
              </EuiText>
            </EuiFlexItem>
            <EuiFlexItem>
              <EuiText size="xs">
                <dt>색인화 시간(ms)</dt>
                <dd>
                  {metadata == null || metadata.transform_metadata == null ? "-" : metadata.transform_metadata.stats.index_time_in_millis}
                </dd>
              </EuiText>
            </EuiFlexItem>
            <EuiFlexItem />
            <EuiFlexItem />
            <EuiFlexItem>
              <EuiText size="xs">
                <dt>처리된 페이지</dt>
                <dd>{metadata == null || metadata.transform_metadata == null ? "-" : metadata.transform_metadata.stats.pages_processed}</dd>
              </EuiText>
            </EuiFlexItem>
            <EuiFlexItem>
              <EuiText size="xs">
                <dt>검색 시간(ms)</dt>
                <dd>
                  {metadata == null || metadata.transform_metadata == null ? "-" : metadata.transform_metadata.stats.search_time_in_millis}
                </dd>
              </EuiText>
            </EuiFlexItem>
          </EuiFlexGrid>
          <EuiSpacer size="s" />
        </div>
      </EuiPanel>
    );
  }
}
