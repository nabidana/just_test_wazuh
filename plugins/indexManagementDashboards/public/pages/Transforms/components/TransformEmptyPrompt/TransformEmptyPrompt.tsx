/*
 * Copyright OpenSearch Contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { EuiSmallButton, EuiEmptyPrompt, EuiText } from "@elastic/eui";
import { PLUGIN_NAME, ROUTES } from "../../../../utils/constants";
import { getUISettings } from "../../../../services/Services";

interface TransformEmptyPromptProps {
  filterIsApplied: boolean;
  loading: boolean;
  resetFilters: () => void;
}

export const TEXT = {
  RESET_FILTERS: "적용된 필터와 일치하는 트랜스폼 작업이 없습니다. 트랜스폼 작업을 보려면 필터를 재설정하십시오.",
  NO_TRANSFORMS: "트랜스폼 작업을 사용하면 기존 데이터를 기반으로 구체화된 뷰를 생성할 수 있습니다.",
  LOADING: "트랜스폼 작업을 로드하는 중...",
};

const getMessagePrompt = ({ filterIsApplied, loading }: TransformEmptyPromptProps) => {
  if (loading) return TEXT.LOADING;
  if (filterIsApplied) return TEXT.RESET_FILTERS;
  return TEXT.NO_TRANSFORMS;
};

const getActions: React.SFC<TransformEmptyPromptProps> = ({ filterIsApplied, loading, resetFilters, size }) => {
  if (loading) {
    return null;
  }

  const uiSettings = getUISettings();
  const useUpdatedUX = uiSettings.get("home:useNewHomePage");

  if (filterIsApplied) {
    return (
      <EuiSmallButton fill onClick={resetFilters} data-test-subj="transformEmptyPromptRestFilters">
        필터 재설정
      </EuiSmallButton>
    );
  }

  return (
    <EuiSmallButton
      href={`${PLUGIN_NAME}#${ROUTES.CREATE_TRANSFORM}`}
      data-test-subj="emptyPromptCreateTransformButton"
      iconType="plus"
      fill
    >
      트랜스폼 생성
    </EuiSmallButton>
  );
};

const TransformEmptyPrompt: React.SFC<TransformEmptyPromptProps> = (props) => (
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

export default TransformEmptyPrompt;
