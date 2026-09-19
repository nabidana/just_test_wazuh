/*
 * Copyright OpenSearch Contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { ChangeEvent } from "react";
import {
  EuiSpacer,
  EuiCompressedFormRow,
  EuiCompressedFieldText,
  EuiTextArea,
  EuiPanel,
  EuiFlexGroup,
  EuiText,
  EuiHorizontalRule,
  EuiTitle,
} from "@elastic/eui";
import "brace/theme/github";
import "brace/mode/json";
import EuiFormCustomLabel from "../EuiFormCustomLabel";

interface PolicyInfoProps {
  isEdit: boolean;
  policyId: string;
  policyIdError: string;
  description: string;
  onChangePolicyId: (value: ChangeEvent<HTMLInputElement>) => void;
  onChangeDescription: (value: ChangeEvent<HTMLTextAreaElement>) => void;
}

const PolicyInfo = ({ isEdit, policyId, policyIdError, description, onChangePolicyId, onChangeDescription }: PolicyInfoProps) => (
  <EuiPanel>
    <EuiFlexGroup gutterSize="xs" alignItems="center">
      <EuiTitle size="s">
        <h2>{`정책 정보`}</h2>
      </EuiTitle>
    </EuiFlexGroup>
    <EuiHorizontalRule margin={"xs"} />
    <EuiFormCustomLabel title="정책 ID" helpText="알아보기 쉽고 기억하기 쉬운 고유한 설명적 ID를 지정하세요." />

    <EuiCompressedFormRow isInvalid={!!policyIdError} error={policyIdError}>
      <EuiCompressedFieldText
        disabled={isEdit}
        isInvalid={!!policyIdError}
        placeholder="hot_cold_workflow"
        readOnly={false}
        value={policyId}
        onChange={onChangePolicyId}
        data-test-subj="create-policy-policy-id"
      />
    </EuiCompressedFormRow>

    <EuiSpacer size="m" />

    <EuiFormCustomLabel title="설명" helpText="정책에 대해 설명하세요." />

    <EuiCompressedFormRow isInvalid={false} error={null}>
      <EuiTextArea
        style={{ minHeight: "150px" }}
        compressed={true}
        value={description}
        onChange={onChangeDescription}
        data-test-subj="create-policy-description"
      />
    </EuiCompressedFormRow>
  </EuiPanel>
);

export default PolicyInfo;
