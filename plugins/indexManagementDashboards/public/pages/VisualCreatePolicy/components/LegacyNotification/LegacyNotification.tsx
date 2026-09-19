/*
 * Copyright OpenSearch Contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { EuiCompressedFormRow, EuiCodeEditor, EuiCallOut, EuiSmallButton, EuiSpacer } from "@elastic/eui";
import "brace/theme/github";
import "brace/mode/json";
import { DarkModeConsumer } from "../../../../components/DarkMode";

interface LegacyNotificationProps {
  notificationJsonString: string;
  onChangeNotificationJsonString: (str: string) => void;
  onSwitchToChannels: () => void;
  actionNotification?: boolean;
  isInvalid?: boolean;
}

const LegacyNotification = ({
  notificationJsonString,
  onChangeNotificationJsonString,
  onSwitchToChannels,
  actionNotification = false,
  isInvalid = false, // TODO: default to false for error notification for now, but add validation logic for it
}: LegacyNotificationProps) => {
  return (
    <>
      <EuiCallOut title="채널 ID를 사용하도록 알림을 업데이트하세요" iconType="iInCircle" size="s">
        <p>
          채널 ID를 사용하면 OpenSearch Dashboards 전반에서 알림을 더 세밀하게 관리할 수 있습니다. 전환하기로 결정하면 현재 오류
          알림 설정을 잃게 됩니다.
        </p>
        <EuiSmallButton onClick={onSwitchToChannels}>채널 ID 사용으로 전환</EuiSmallButton>
      </EuiCallOut>
      <EuiSpacer size="m" />
      <EuiCompressedFormRow fullWidth isInvalid={isInvalid} error={null} style={{ maxWidth: "100%" }}>
        <DarkModeConsumer>
          {(isDarkMode) => (
            <EuiCodeEditor
              mode="json"
              theme={isDarkMode ? "sense-dark" : "github"}
              width="100%"
              value={notificationJsonString}
              onChange={onChangeNotificationJsonString}
              setOptions={{ fontSize: "14px" }}
              aria-label="코드 편집기"
              height="300px"
              data-test-subj={actionNotification ? "create-policy-action-legacy-notification" : "create-policy-legacy-notification"}
            />
          )}
        </DarkModeConsumer>
      </EuiCompressedFormRow>
    </>
  );
};

export default LegacyNotification;
