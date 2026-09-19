/*
 * Copyright OpenSearch Contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { EuiSmallButton, EuiEmptyPrompt, EuiText } from "@elastic/eui";
import { ROUTES } from "../../../../utils/constants";
import { ModalConsumer } from "../../../../components/Modal";
import CreatePolicyModal from "../../../../components/CreatePolicyModal";

export const TEXT = {
  RESET_FILTERS: "적용한 필터와 일치하는 정책이 없습니다. 필터를 재설정하여 정책을 확인하세요.",
  NO_POLICIES: "기존 정책이 없습니다. 인덱스에 적용할 정책을 생성하세요.",
  LOADING: "정책을 불러오는 중...",
};

const getMessagePrompt = ({ filterIsApplied, loading }: PolicyEmptyPromptProps) => {
  if (loading) return TEXT.LOADING;
  if (filterIsApplied) return TEXT.RESET_FILTERS;
  return TEXT.NO_POLICIES;
};

const getActions: React.SFC<PolicyEmptyPromptProps> = ({ history, filterIsApplied, loading, resetFilters }) => {
  if (loading) {
    return null;
  }
  if (filterIsApplied) {
    return (
      <EuiSmallButton fill onClick={resetFilters} data-test-subj="policyEmptyPromptRestFilters">
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
        <EuiSmallButton iconType="plus" fill onClick={() => onShow(CreatePolicyModal, { history, onClickContinue: onClickCreate })}>
          정책 생성
        </EuiSmallButton>
      )}
    </ModalConsumer>
  );
};

interface PolicyEmptyPromptProps {
  filterIsApplied: boolean;
  loading: boolean;
  resetFilters: () => void;
  history: any;
}

const PolicyEmptyPrompt: React.SFC<PolicyEmptyPromptProps> = (props) => (
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

export default PolicyEmptyPrompt;
