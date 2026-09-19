/*
 * Copyright OpenSearch Contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import { EuiCompressedFormRow, EuiCompressedFieldText, EuiSpacer } from "@elastic/eui";
import React, { useState, ChangeEvent } from "react";
import CustomLabel from "../../../../components/CustomLabel";

interface AddPrefixesInputProps {
  getPrefix: (prefix: string) => void;
}

const AddPrefixesInput = ({ getPrefix }: AddPrefixesInputProps) => {
  const [prefix, setPrefix] = useState("restored_");

  const onPrefixChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPrefix(e.target.value);
    getPrefix(e.target.value);
  };

  return (
    <>
      <EuiSpacer size="l" />

      <CustomLabel title="복원된 인덱스 이름의 접두사 지정" helpText="복원된 모든 인덱스 이름에 접두사가 추가됩니다." />
      <EuiCompressedFormRow>
        <EuiCompressedFieldText value={prefix} onChange={onPrefixChange} data-test-subj="prefixInput" />
      </EuiCompressedFormRow>

      <EuiSpacer size="m" />
    </>
  );
};

export default AddPrefixesInput;
