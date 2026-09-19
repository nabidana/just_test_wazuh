/*
 * Copyright OpenSearch Contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { ChangeEvent } from "react";
import { EuiSpacer, EuiCompressedFormRow, EuiTextArea, EuiCompressedSelect, EuiSmallButton, EuiFlexGroup, EuiFlexItem } from "@elastic/eui";
import "brace/theme/github";
import "brace/mode/json";
import { FeatureChannelList } from "../../../server/models/interfaces";
import CustomFormRow from "../CustomFormRow";

interface ChannelNotificationProps {
  channelId: string;
  channels: FeatureChannelList[];
  loadingChannels: boolean;
  message?: string;
  onChangeChannelId: (value: ChangeEvent<HTMLSelectElement>) => void;
  onChangeMessage?: (value: ChangeEvent<HTMLTextAreaElement>) => void;
  getChannels: () => void;
  actionNotification?: boolean; // to tell if this is rendering in actions or in error notification as they both show up on page together
}

const ChannelNotification = ({
  channelId,
  channels,
  loadingChannels,
  message,
  onChangeChannelId,
  onChangeMessage,
  getChannels,
  actionNotification = false,
}: ChannelNotificationProps) => {
  return (
    <>
      <CustomFormRow label="채널 ID">
        <EuiFlexGroup gutterSize="s" style={{ maxWidth: 600, width: 600 }}>
          <EuiFlexItem>
            <EuiCompressedSelect
              id={actionNotification ? "action-channel-id" : "channel-id"}
              placeholder="채널 ID 선택"
              hasNoInitialSelection
              isLoading={loadingChannels}
              options={channels.map((channel) => ({ value: channel.config_id, text: channel.name }))}
              value={channelId}
              onChange={onChangeChannelId}
              data-test-subj={actionNotification ? "create-policy-notification-action-channel-id" : "create-policy-notification-channel-id"}
            />
          </EuiFlexItem>
          <EuiFlexItem grow={false}>
            <EuiSmallButton
              iconType="refresh"
              onClick={getChannels}
              disabled={loadingChannels}
              className="refresh-button"
              data-test-subj="channel-notification-refresh"
            />
          </EuiFlexItem>
          <EuiFlexItem grow={false}>
            <EuiSmallButton iconType="popout" href="notifications-dashboards#/channels" target="_blank" iconSide="right">
              채널 관리
            </EuiSmallButton>
          </EuiFlexItem>
        </EuiFlexGroup>
      </CustomFormRow>

      {!!channelId && (
        <>
          <EuiSpacer size="m" />

          <EuiCompressedFormRow title="알림 메시지" helpText="Mustache 템플릿을 사용하여 메시지에 변수를 삽입하세요.">
            <EuiTextArea
              placeholder="인덱스 {{ctx.index}}에서 정책 실행이 실패했습니다."
              style={{ minHeight: "150px" }}
              compressed={true}
              value={message}
              onChange={onChangeMessage}
              data-test-subj={actionNotification ? "create-policy-notification-action-message" : "create-policy-notification-message"}
            />
          </EuiCompressedFormRow>
        </>
      )}
    </>
  );
};

export default ChannelNotification;
