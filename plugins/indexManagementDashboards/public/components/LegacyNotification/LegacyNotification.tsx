/*
 * Copyright OpenSearch Contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { EuiCompressedFormRow, EuiCallOut, EuiSmallButton, EuiSpacer } from "@elastic/eui";
import "brace/theme/github";
import "brace/mode/json";
import { DarkModeConsumer } from "../../components/DarkMode";
import JSONEditor from "../../components/JSONEditor";

interface LegacyNotificationProps {
  value: Record<string, any>;
  onChange: (val: LegacyNotificationProps["value"]) => void;
  onSwitchToChannels: () => void;
  actionNotification?: boolean;
}

const LegacyNotification = ({ value, onChange, onSwitchToChannels }: LegacyNotificationProps) => {
  return (
    <>
      <EuiCallOut title="채널 ID를 사용하도록 알림을 업데이트하세요" iconType="iInCircle" size="s">
        <p>
          채널 ID를 사용하면 OpenSearch 대시보드 전체에서 알림을 더 세밀하게 관리할 수 있습니다. 전환할 경우 현재 설정된 오류 알림 설정은
          사라집니다.
        </p>
        <EuiSmallButton onClick={onSwitchToChannels}>채널 ID 사용으로 전환</EuiSmallButton>
      </EuiCallOut>
      <EuiSpacer size="m" />
      <EuiCompressedFormRow fullWidth style={{ maxWidth: "100%" }}>
        <DarkModeConsumer>
          {(isDarkMode) => (
            <JSONEditor
              theme={isDarkMode ? "sense-dark" : "github"}
              width="100%"
              value={JSON.stringify(value, null, 2)}
              onChange={(val) => onChange(JSON.parse(val))}
              setOptions={{ fontSize: "14px" }}
              aria-label="코드 편집기"
              height="300px"
            />
          )}
        </DarkModeConsumer>
      </EuiCompressedFormRow>
    </>
  );
};

export default LegacyNotification;
