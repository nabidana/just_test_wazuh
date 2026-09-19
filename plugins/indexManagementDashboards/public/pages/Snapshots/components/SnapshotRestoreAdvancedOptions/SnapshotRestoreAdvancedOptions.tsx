/*
 * Copyright OpenSearch Contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { ChangeEvent } from "react";
import { EuiCompressedCheckbox, EuiSpacer, EuiText } from "@elastic/eui";
import { CheckBoxLabel } from "../../helper";
import IndexSettingsInput from "../../components/IndexSettingsInput";
import { RESTORE_OPTIONS } from "../../../../models/interfaces";

interface SnapshotAdvancedOptionsProps {
  getIndexSettings: (indexSettings: string, ignore: boolean) => void;
  restoreAliases: boolean;
  onRestoreAliasesToggle: (e: ChangeEvent<HTMLInputElement>) => void;
  restoreClusterState: boolean;
  onRestoreClusterStateToggle: (e: ChangeEvent<HTMLInputElement>) => void;
  ignoreUnavailable: boolean;
  onIgnoreUnavailableToggle: (e: ChangeEvent<HTMLInputElement>) => void;
  customizeIndexSettings: boolean;
  onCustomizeIndexSettingsToggle: (e: ChangeEvent<HTMLInputElement>) => void;
  ignoreIndexSettings: boolean;
  onIgnoreIndexSettingsToggle: (e: ChangeEvent<HTMLInputElement>) => void;
  width?: string;
  badJSONInput: boolean;
  badIgnoreInput: boolean;
}

const SnapshotRestoreAdvancedOptions = ({
  getIndexSettings,
  restoreAliases,
  onRestoreAliasesToggle,
  ignoreUnavailable,
  onIgnoreUnavailableToggle,
  restoreClusterState,
  onRestoreClusterStateToggle,
  customizeIndexSettings,
  onCustomizeIndexSettingsToggle,
  ignoreIndexSettings,
  onIgnoreIndexSettingsToggle,
  width,
  badJSONInput,
  badIgnoreInput,
}: SnapshotAdvancedOptionsProps) => {
  const { restore_aliases, include_global_state, ignore_unavailable, customize_index_settings, ignore_index_settings } = RESTORE_OPTIONS;
  const JSONerror = "중괄호 사이에 유효한 JSON을 입력하세요.";
  const ignoreListError = "무시할 유효한 설정 목록을 쉼표로 구분하여 입력하세요.";

  return (
    <div style={{ padding: "10px 10px", width: width }}>
      <EuiCompressedCheckbox
        id={restore_aliases}
        label={<CheckBoxLabel title="별칭 복원" helpText="연결된 인덱스와 함께 인덱스 별칭을 복원합니다." />}
        checked={restoreAliases}
        onChange={onRestoreAliasesToggle}
      />

      <EuiSpacer size="s" />

      <EuiCompressedCheckbox
        id={include_global_state}
        label={<EuiText size="s">스냅샷에서 클러스터 상태 복원</EuiText>}
        checked={restoreClusterState}
        onChange={onRestoreClusterStateToggle}
      />

      <EuiSpacer size="m" />

      <EuiCompressedCheckbox
        id={ignore_unavailable}
        label={
          <CheckBoxLabel
            title="사용할 수 없는 인덱스 무시"
            helpText="복원 작업을 실패시키지 않고 사용할 수 없거나 존재하지 않는 인덱스를 무시합니다."
          />
        }
        checked={ignoreUnavailable}
        onChange={onIgnoreUnavailableToggle}
      />

      <EuiSpacer size="l" />

      <EuiText size="s">
        <h5>사용자 지정 인덱스 설정</h5>
      </EuiText>
      <EuiText size="xs" style={{ padding: "5px 0px" }}>
        <p style={{ fontWeight: 200 }}>
          기본적으로 인덱스 설정은 스냅샷의 인덱스에서 복원됩니다. 복원 시 인덱스 설정을
          <br />
          사용자 지정할 수 있습니다.
        </p>
      </EuiText>

      <EuiSpacer size="m" />

      <EuiCompressedCheckbox
        id={customize_index_settings}
        label={<CheckBoxLabel title="인덱스 설정 사용자 지정" helpText="복원되는 모든 인덱스에서 인덱스 설정을 재정의합니다." />}
        checked={customizeIndexSettings}
        onChange={onCustomizeIndexSettingsToggle}
      />

      {customizeIndexSettings && (
        <IndexSettingsInput getIndexSettings={getIndexSettings} ignore={false} showError={badJSONInput} inputError={JSONerror} />
      )}

      <EuiSpacer size="s" />

      <EuiCompressedCheckbox
        id={ignore_index_settings}
        label={
          <CheckBoxLabel title="인덱스 설정 무시" helpText="스냅샷에서 복원하지 않으려는 인덱스 설정을 제외합니다." />
        }
        checked={ignoreIndexSettings}
        onChange={onIgnoreIndexSettingsToggle}
      />

      {ignoreIndexSettings && (
        <IndexSettingsInput getIndexSettings={getIndexSettings} ignore={true} showError={badIgnoreInput} inputError={ignoreListError} />
      )}
    </div>
  );
};

export default SnapshotRestoreAdvancedOptions;
