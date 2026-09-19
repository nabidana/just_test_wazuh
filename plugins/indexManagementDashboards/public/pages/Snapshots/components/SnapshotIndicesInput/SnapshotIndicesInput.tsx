/*
 * Copyright OpenSearch Contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import { EuiCompressedComboBox, EuiComboBoxOptionOption, EuiSpacer, EuiCompressedFormRow } from "@elastic/eui";
import React from "react";
import { IndexItem } from "../../../../../models/interfaces";

interface SnapshotIndicesInputProps {
  indexOptions: EuiComboBoxOptionOption<IndexItem>[];
  selectedIndexOptions: EuiComboBoxOptionOption<IndexItem>[];
  onIndicesSelectionChange: (selectedOptions: EuiComboBoxOptionOption<IndexItem>[]) => void;
  getIndexOptions: (searchValue: string) => void;
  onCreateOption: (searchValue: string, options: Array<EuiComboBoxOptionOption<IndexItem>>) => void;
  selectedRepoValue: string;
  showError: boolean;
  isClearable: boolean;
}

const SnapshotIndicesInput = ({
  indexOptions,
  selectedIndexOptions,
  onIndicesSelectionChange,
  getIndexOptions,
  onCreateOption,
  showError,
}: SnapshotIndicesInputProps) => {
  const selectionError = "복원할 인덱스를 하나 이상 선택해야 합니다.";

  return (
    <>
      <EuiCompressedFormRow label="복원할 인덱스를 선택하거나 인덱스 패턴을 입력하세요" error={selectionError} isInvalid={showError}>
        <EuiCompressedComboBox
          isInvalid={showError}
          placeholder="인덱스를 선택하거나 인덱스 패턴을 입력하세요."
          options={indexOptions}
          selectedOptions={selectedIndexOptions}
          onChange={onIndicesSelectionChange}
          onSearchChange={getIndexOptions}
          onCreateOption={onCreateOption}
          isClearable={true}
        />
      </EuiCompressedFormRow>

      <EuiSpacer size="m" />
    </>
  );
};

export default SnapshotIndicesInput;
