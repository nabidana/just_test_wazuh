/*
 * Copyright OpenSearch Contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import * as H from "history";
import { EuiSmallButton, EuiEmptyPrompt, EuiText } from "@elastic/eui";
import { ModalConsumer } from "../../../../components/Modal";
import CreatePolicyModal from "../../../../components/CreatePolicyModal";
import { ROUTES } from "../../../../utils/constants";

export const TEXT = {
  RESET_FILTERS: "적용된 필터와 일치하는 관리 대상 인덱스가 없습니다. 관리 대상 인덱스를 보려면 필터를 재설정하세요.",
  NO_MANAGED_INDICES: "기존 관리 대상 인덱스가 없습니다. 인덱스에 추가할 정책을 생성하세요.",
  LOADING: "관리 대상 인덱스를 불러오는 중...",
};

const getMessagePrompt = ({ filterIsApplied, loading }: ManagedIndexEmptyPromptProps): string => {
  if (loading) return TEXT.LOADING;
  if (filterIsApplied) return TEXT.RESET_FILTERS;
  return TEXT.NO_MANAGED_INDICES;
};

const getActions: React.SFC<ManagedIndexEmptyPromptProps> = ({ history, filterIsApplied, loading, resetFilters }) => {
  if (loading) return null;

  if (filterIsApplied) {
    return (
      <EuiSmallButton fill onClick={resetFilters} data-test-subj="managedIndexEmptyPromptResetFilters">
        필터 재설정
      </EuiSmallButton>
    );
  }

  const onClickCreate = (visual: boolean): void => {
    history.push(`${ROUTES.CREATE_POLICY}${visual ? "?type=visual" : ""}`);
  };

  return (
    <ModalConsumer>
      {({ onShow }) => (
        <EuiSmallButton fill onClick={() => onShow(CreatePolicyModal, { history, onClickContinue: onClickCreate })} iconType={"plus"}>
          정책 생성
        </EuiSmallButton>
      )}
    </ModalConsumer>
  );
};

interface ManagedIndexEmptyPromptProps {
  filterIsApplied: boolean;
  loading: boolean;
  resetFilters: () => void;
  history: H.History;
}

const ManagedIndexEmptyPrompt: React.SFC<ManagedIndexEmptyPromptProps> = (props) => (
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

export default ManagedIndexEmptyPrompt;
