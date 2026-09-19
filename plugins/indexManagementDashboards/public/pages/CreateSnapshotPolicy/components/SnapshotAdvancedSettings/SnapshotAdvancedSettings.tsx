/*
 * Copyright OpenSearch Contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import { EuiCompressedCheckbox, EuiFlexGroup, EuiFlexItem, EuiSpacer, EuiText } from "@elastic/eui";
import CustomLabel from "../../../../components/CustomLabel";
import React, { ChangeEvent } from "react";
import { CheckBoxLabel } from "../../../Snapshots/helper";

interface SnapshotAdvancedSettingsProps {
  includeGlobalState: boolean;
  onIncludeGlobalStateToggle: (e: ChangeEvent<HTMLInputElement>) => void;
  ignoreUnavailable: boolean;
  onIgnoreUnavailableToggle: (e: ChangeEvent<HTMLInputElement>) => void;
  partial: boolean;
  onPartialToggle: (e: ChangeEvent<HTMLInputElement>) => void;
  width?: string;
}

const lableTitle = (titleText: string) => {
  return (
    <EuiFlexGroup gutterSize="xs" alignItems="center">
      <EuiFlexItem grow={false}>
        <EuiText size="s">
          <h4>{titleText}</h4>
        </EuiText>
      </EuiFlexItem>
    </EuiFlexGroup>
  );
};

const SnapshotAdvancedSettings = ({
  includeGlobalState,
  onIncludeGlobalStateToggle,
  ignoreUnavailable,
  onIgnoreUnavailableToggle,
  partial,
  onPartialToggle,
  width,
}: SnapshotAdvancedSettingsProps) => (
  <div>
    <EuiCompressedCheckbox
      id="include_global_state"
      label={<CheckBoxLabel title="스냅샷에 클러스터 상태 포함" />}
      checked={includeGlobalState}
      onChange={onIncludeGlobalStateToggle}
    />

    <EuiSpacer size="m" />

    <EuiCompressedCheckbox
      id="ignore_unavailable"
      label={
        <CheckBoxLabel
          title="사용할 수 없는 인덱스 무시"
          helpText="스냅샷을 실패시키는 대신 사용할 수 없거나 존재하지 않는 인덱스를 무시합니다."
        />
      }
      checked={ignoreUnavailable}
      onChange={onIgnoreUnavailableToggle}
    />

    <EuiSpacer size="m" />

    <EuiCompressedCheckbox
      id="partial"
      label={<CheckBoxLabel title="부분 스냅샷 허용" helpText="하나 이상의 샤드 저장에 실패한 경우 부분 스냅샷을 허용합니다." />}
      checked={partial}
      onChange={onPartialToggle}
    />
  </div>
);

export default SnapshotAdvancedSettings;
