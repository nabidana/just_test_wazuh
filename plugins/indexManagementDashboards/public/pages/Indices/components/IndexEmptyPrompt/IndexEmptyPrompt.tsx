/*
 * Copyright OpenSearch Contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { EuiSmallButton, EuiEmptyPrompt, EuiText } from "@elastic/eui";

export const TEXT = {
  RESET_FILTERS: "적용된 필터와 일치하는 인덱스가 없습니다. 인덱스를 보려면 필터를 재설정하세요.",
  NO_INDICES: "기존 인덱스가 없습니다. 인덱스를 생성하면 여기에 표시됩니다.",
  LOADING: "인덱스를 불러오는 중...",
};

const getMessagePrompt = ({ filterIsApplied, loading }: IndexEmptyPromptProps): string => {
  if (loading) return TEXT.LOADING;
  if (filterIsApplied) return TEXT.RESET_FILTERS;
  return TEXT.NO_INDICES;
};

const getActions: React.SFC<IndexEmptyPromptProps> = ({ filterIsApplied, loading, resetFilters }) => {
  if (loading) {
    return null;
  }

  if (filterIsApplied) {
    return (
      <EuiSmallButton fill onClick={resetFilters} data-test-subj="indexEmptyPromptResetFilters">
        필터 재설정
      </EuiSmallButton>
    );
  }

  return null;
};

interface IndexEmptyPromptProps {
  filterIsApplied: boolean;
  loading: boolean;
  resetFilters: () => void;
}

const IndexEmptyPrompt: React.SFC<IndexEmptyPromptProps> = (props) => (
  <EuiEmptyPrompt
    style={{ maxWidth: "45em" }}
    body={
      <EuiText size="s">
        <p>{getMessagePrompt(props)}</p>
      </EuiText>
    }
    actions={getActions(props)}
  />
);

export default IndexEmptyPrompt;
