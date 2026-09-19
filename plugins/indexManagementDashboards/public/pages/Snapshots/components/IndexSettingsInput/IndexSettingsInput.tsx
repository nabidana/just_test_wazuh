/*
 * Copyright OpenSearch Contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import { EuiCompressedFormRow, EuiText, EuiCompressedTextArea, EuiSpacer, EuiLink } from "@elastic/eui";
import React, { useState, ChangeEvent } from "react";
import { INDEX_SETTINGS_URL } from "../../../../utils/constants";

interface IndexSettingsInputProps {
  getIndexSettings: (indexSettings: string, ignore: boolean) => void;
  showError: boolean;
  inputError: string;
  ignore: boolean;
}

const IndexSettingsInput = ({ getIndexSettings, ignore, showError, inputError }: IndexSettingsInputProps) => {
  const [indexSettings, setIndexSettings] = useState("");

  const onSettingsChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setIndexSettings(e.target.value);
    getIndexSettings(e.target.value, ignore);
  };

  const title = ignore ? "무시할 인덱스 설정 지정" : "사용자 지정 인덱스 설정 지정";
  const helperText = ignore
    ? "스냅샷에서 제외할 설정을 쉼표로 구분하여 지정하세요."
    : "복원되는 모든 인덱스에 재정의할 설정을 쉼표로 구분하여 지정하세요.";
  const placeholderText = ignore
    ? `예: \nindex.refresh_interval,\nindex.max_script_fields `
    : `예: \n {\n\"index.number_of_replicas\": 0,\n\"index.auto_expand_replicas\": true\n}`;

  const indexSettingsLabel = (
    <>
      <EuiText size="xs">
        <h4>{title}</h4>
      </EuiText>
      <EuiText size="xs" style={{ padding: "0px 0px 5px 0px" }}>
        <p style={{ fontWeight: 200 }}>
          {`${helperText} `}
          <EuiLink href={INDEX_SETTINGS_URL} target="_blank" external={true} rel="noopener noreferrer">
            자세히 알아보기
          </EuiLink>
        </p>
      </EuiText>
    </>
  );

  return (
    <>
      <EuiSpacer size="m" />

      <EuiCompressedFormRow
        isInvalid={showError}
        error={inputError}
        label={indexSettingsLabel}
        id={ignore ? "ignore_index_settings" : "customize_index_settings"}
      >
        <EuiCompressedTextArea value={indexSettings} onChange={onSettingsChange} placeholder={placeholderText} isInvalid={showError} />
      </EuiCompressedFormRow>

      <EuiSpacer size="m" />
    </>
  );
};

export default IndexSettingsInput;
