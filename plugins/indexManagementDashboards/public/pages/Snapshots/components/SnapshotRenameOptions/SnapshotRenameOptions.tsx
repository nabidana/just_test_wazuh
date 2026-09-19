/*
 * Copyright OpenSearch Contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { ChangeEvent } from "react";
import { EuiCompressedRadio, EuiSpacer } from "@elastic/eui";
import CustomLabel from "../../../../components/CustomLabel";
import { RESTORE_OPTIONS } from "../../../../models/interfaces";
interface SnapshotRenameOptionsProps {
  doNotRename: boolean;
  onDoNotRenameToggle: (e: ChangeEvent<HTMLInputElement>) => void;
  addPrefix: boolean;
  onAddPrefixToggle: (e: ChangeEvent<HTMLInputElement>) => void;
  renameIndices: boolean;
  onRenameIndicesToggle: (e: ChangeEvent<HTMLInputElement>) => void;
  width: string;
}

const SnapshotRenameOptions = ({
  doNotRename,
  onDoNotRenameToggle,
  addPrefix,
  onAddPrefixToggle,
  renameIndices,
  onRenameIndicesToggle,
  width,
}: SnapshotRenameOptionsProps) => {
  const { do_not_rename, add_prefix, rename_indices } = RESTORE_OPTIONS;

  return (
    <div>
      <CustomLabel title={"복원된 인덱스 이름 변경"} />
      <EuiCompressedRadio
        id={do_not_rename}
        name="rename_option"
        label="이름을 변경하지 않음"
        checked={doNotRename}
        onChange={onDoNotRenameToggle}
      />

      <EuiSpacer size="s" />

      <EuiCompressedRadio
        id={add_prefix}
        name="rename_option"
        label="복원된 인덱스 이름에 접두사 추가"
        checked={addPrefix}
        onChange={onAddPrefixToggle}
      />

      <EuiSpacer size="s" />

      <EuiCompressedRadio
        id={rename_indices}
        name="rename_option"
        label="정규식을 사용하여 이름 변경 (고급)"
        checked={renameIndices}
        onChange={onRenameIndicesToggle}
      />
    </div>
  );
};

export default SnapshotRenameOptions;
