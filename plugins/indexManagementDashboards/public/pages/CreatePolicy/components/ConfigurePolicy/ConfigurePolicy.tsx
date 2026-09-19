/*
 * Copyright OpenSearch Contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { ChangeEvent } from "react";
import {
  EuiSpacer,
  EuiCompressedFormRow,
  EuiCompressedFieldText,
  EuiText,
  EuiPanel,
  EuiHorizontalRule,
  EuiFlexGroup,
  EuiTitle,
} from "@elastic/eui";

interface ConfigurePolicyProps {
  policyId: string;
  policyIdError: string;
  isEdit: boolean;
  onChange: (value: ChangeEvent<HTMLInputElement>) => void;
  useNewUx?: boolean;
}

const ConfigurePolicy = ({ isEdit, policyId, policyIdError, onChange, useNewUx }: ConfigurePolicyProps) => (
  <EuiPanel>
    <EuiFlexGroup gutterSize="xs" alignItems="center">
      <EuiTitle size="s">
        <h2>{`정책 이름 지정`}</h2>
      </EuiTitle>
    </EuiFlexGroup>
    <EuiHorizontalRule margin={"xs"} />
    {useNewUx ? (
      <></>
    ) : (
      <>
        <EuiText size="xs">
          <p>정책을 사용하면 인덱스에 대한 관리 작업을 자동으로 수행할 수 있습니다.</p>
        </EuiText>
        <EuiSpacer size="s" />
      </>
    )}
    <EuiCompressedFormRow
      label={
        <EuiText size="s">
          <h3>{"정책 ID"}</h3>
        </EuiText>
      }
      helpText="알아보기 쉽고 기억하기 쉬운 고유 ID를 지정하세요."
      isInvalid={!!policyIdError}
      error={policyIdError}
    >
      <EuiCompressedFieldText
        isInvalid={!!policyIdError}
        placeholder="example_policy"
        readOnly={isEdit}
        value={policyId}
        onChange={onChange}
      />
    </EuiCompressedFormRow>
  </EuiPanel>
);

// @ts-ignore
export default ConfigurePolicy;
