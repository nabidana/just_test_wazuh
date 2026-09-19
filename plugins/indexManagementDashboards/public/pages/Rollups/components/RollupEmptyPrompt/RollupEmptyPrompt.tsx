/*
 * Copyright OpenSearch Contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { EuiSmallButton, EuiEmptyPrompt, EuiText } from "@elastic/eui";
import { PLUGIN_NAME, ROUTES } from "../../../../utils/constants";

export const TEXT = {
  RESET_FILTERS: "적용된 필터와 일치하는 롤업 작업이 없습니다. 롤업 작업을 보려면 필터를 재설정하세요.",
  NO_ROLLUPS: "롤업 작업을 사용하면 필요한 특정 정보를 유지하면서 과거 시계열 데이터의 저장 공간을 절약할 수 있습니다.",
  LOADING: "롤업 작업을 로드하는 중...",
};

const getMessagePrompt = ({ filterIsApplied, loading }: RollupEmptyPromptProps) => {
  if (loading) return TEXT.LOADING;
  if (filterIsApplied) return TEXT.RESET_FILTERS;
  return TEXT.NO_ROLLUPS;
};

const getActions: React.SFC<RollupEmptyPromptProps> = ({ filterIsApplied, loading, resetFilters }) => {
  if (loading) {
    return null;
  }
  if (filterIsApplied) {
    return (
      <EuiSmallButton fill onClick={resetFilters} data-test-subj="rollupEmptyPromptRestFilters">
        필터 재설정
      </EuiSmallButton>
    );
  }

  return (
    <EuiSmallButton
      href={`${PLUGIN_NAME}#${ROUTES.CREATE_ROLLUP}`}
      data-test-subj="emptyPromptCreateRollupButton"
      iconType={"plus"}
      fill={true}
    >
      롤업 작업 생성
    </EuiSmallButton>
  );
};

interface RollupEmptyPromptProps {
  filterIsApplied: boolean;
  loading: boolean;
  resetFilters: () => void;
}

const RollupEmptyPrompt: React.SFC<RollupEmptyPromptProps> = (props) => (
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

export default RollupEmptyPrompt;
