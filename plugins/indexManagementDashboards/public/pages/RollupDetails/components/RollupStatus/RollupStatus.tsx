/*
 * Copyright OpenSearch Contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { EuiFlexGrid, EuiSpacer, EuiFlexItem, EuiText, EuiFlexGroup, EuiHorizontalRule, EuiPanel, EuiTitle } from "@elastic/eui";
import { ContentPanel } from "../../../../components/ContentPanel";
import { RollupMetadata } from "../../../../../models/interfaces";
import { renderTime } from "../../../Rollups/utils/helpers";
import { renderStatus } from "../../utils/helpers";

interface RollupStatusProps {
  metadata: RollupMetadata | undefined;
}

const RollupStatus = ({ metadata }: RollupStatusProps) => (
  <EuiPanel>
    <EuiFlexGroup gutterSize="xs">
      <EuiFlexItem>
        <EuiTitle size="s">
          <h2>롤업 상태</h2>
        </EuiTitle>
      </EuiFlexItem>
    </EuiFlexGroup>
    <EuiHorizontalRule margin={"xs"} />
    <div>
      <EuiFlexGrid columns={4}>
        <EuiFlexItem>
          <EuiText size="s">
            <dt>현재 롤업 기간</dt>
            <dd>
              {metadata == null || metadata.rollup_metadata == null || metadata.rollup_metadata.continuous == null
                ? "-"
                : renderTime(metadata.rollup_metadata.continuous.next_window_start_time) +
                  " - " +
                  renderTime(metadata.rollup_metadata.continuous.next_window_end_time)}
            </dd>
          </EuiText>
        </EuiFlexItem>
        <EuiFlexItem>
          <EuiText size="s">
            <dt>상태</dt>
            {renderStatus(metadata)}
          </EuiText>
        </EuiFlexItem>
        <EuiFlexItem>
          <EuiText size="s">
            <dt>롤업 인덱싱 수</dt>
            <dd>{metadata == null || metadata.rollup_metadata == null ? "-" : metadata.rollup_metadata.stats.rollups_indexed}</dd>
          </EuiText>
        </EuiFlexItem>
        <EuiFlexItem>
          <EuiText size="s">
            <dt>인덱싱 시간(ms)</dt>
            <dd>{metadata == null || metadata.rollup_metadata == null ? "-" : metadata.rollup_metadata.stats.index_time_in_millis}</dd>
          </EuiText>
        </EuiFlexItem>
        <EuiFlexItem>
          <EuiText size="s">
            <dt>처리된 문서 수</dt>
            <dd>{metadata == null || metadata.rollup_metadata == null ? "-" : metadata.rollup_metadata.stats.documents_processed}</dd>
          </EuiText>
        </EuiFlexItem>
        <EuiFlexItem>
          <EuiText size="s">
            <dt>검색 시간(ms)</dt>
            <dd>{metadata == null || metadata.rollup_metadata == null ? "-" : metadata.rollup_metadata.stats.search_time_in_millis}</dd>
          </EuiText>
        </EuiFlexItem>
        <EuiFlexItem>
          <EuiText size="s">
            <dt>처리된 페이지 수</dt>
            <dd>{metadata == null || metadata.rollup_metadata == null ? "-" : metadata.rollup_metadata.stats.pages_processed}</dd>
          </EuiText>
        </EuiFlexItem>
      </EuiFlexGrid>
      <EuiSpacer size="s" />
    </div>
  </EuiPanel>
);
export default RollupStatus;
