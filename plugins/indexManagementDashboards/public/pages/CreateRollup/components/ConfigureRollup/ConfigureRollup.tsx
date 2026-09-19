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
  EuiText,
  EuiFlexGroup,
  EuiFlexItem,
  EuiHorizontalRule,
  EuiPanel,
  EuiTitle,
} from "@elastic/eui";

interface ConfigureRollupProps {
  isEdit: boolean;
  rollupId: string;
  rollupIdError: string;
  onChangeName: (value: ChangeEvent<HTMLInputElement>) => void;
  onChangeDescription: (value: ChangeEvent<HTMLTextAreaElement>) => void;
  description: string;
}

const ConfigureRollup = ({ isEdit, rollupId, rollupIdError, onChangeName, onChangeDescription, description }: ConfigureRollupProps) => (
  <EuiPanel>
    <EuiFlexGroup gutterSize="xs" alignItems="center">
      <EuiTitle size="s">
        <h2>작업 이름 및 설명</h2>
      </EuiTitle>
    </EuiFlexGroup>
    <EuiHorizontalRule margin={"xs"} />
    <EuiCompressedFormRow
      label={
        <EuiText size="s">
          <h3>이름</h3>
        </EuiText>
      }
      helpText="고유하고 명확한 이름을 지정하세요."
      isInvalid={!!rollupIdError}
      error={rollupIdError}
    >
      <EuiCompressedFieldText
        isInvalid={!!rollupIdError}
        placeholder="my-rollupjob1"
        value={rollupId}
        onChange={onChangeName}
        disabled={isEdit}
      />
    </EuiCompressedFormRow>
    <EuiSpacer />
    <EuiFlexGroup gutterSize="xs" alignItems="center">
      <EuiFlexItem grow={false}>
        <EuiText size="s">
          <h3>설명</h3>
        </EuiText>
      </EuiFlexItem>
      <EuiFlexItem>
        <EuiText color="subdued">
          <i> – 선택 사항</i>
        </EuiText>
      </EuiFlexItem>
    </EuiFlexGroup>
    <EuiSpacer size="xs" />
    <EuiCompressedFormRow>
      <EuiTextArea compressed={true} value={description} onChange={onChangeDescription} data-test-subj="description" />
    </EuiCompressedFormRow>
  </EuiPanel>
);
export default ConfigureRollup;
