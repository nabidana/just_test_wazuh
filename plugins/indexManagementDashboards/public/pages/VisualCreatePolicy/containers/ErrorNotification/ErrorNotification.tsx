/*
 * Copyright OpenSearch Contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { ChangeEvent, Component } from "react";
import { EuiLink, EuiIcon, EuiFlexGroup, EuiFlexItem, EuiText, EuiPanel, EuiSpacer, EuiHorizontalRule, EuiTitle } from "@elastic/eui";
import { ContentPanel } from "../../../../components/ContentPanel";
import "brace/theme/github";
import "brace/mode/json";
import { FeatureChannelList } from "../../../../../server/models/interfaces";
import { NotificationService } from "../../../../services";
import { ErrorNotification as IErrorNotification } from "../../../../../models/interfaces";
import { getErrorMessage } from "../../../../utils/helpers";
import { CoreServicesContext } from "../../../../components/core_services";
import ChannelNotification from "../../components/ChannelNotification";
import LegacyNotification from "../../components/LegacyNotification";
import { ERROR_NOTIFICATION_DOCUMENTATION_URL } from "../../../../utils/constants";

export interface ErrorNotificationProps {
  errorNotification: IErrorNotification | undefined;
  errorNotificationJsonString: string;
  onChangeChannelId: (value: ChangeEvent<HTMLSelectElement>) => void;
  onChangeMessage: (value: ChangeEvent<HTMLTextAreaElement>) => void;
  onChangeErrorNotificationJsonString: (str: string) => void;
  onSwitchToChannels: () => void;
  notificationService: NotificationService;
}

interface ErrorNotificationState {
  channels: FeatureChannelList[];
  loadingChannels: boolean;
}

export default class ErrorNotification extends Component<ErrorNotificationProps, ErrorNotificationState> {
  static contextType = CoreServicesContext;
  constructor(props: ErrorNotificationProps) {
    super(props);

    this.state = {
      channels: [],
      loadingChannels: true,
    };
  }

  componentDidMount = async (): Promise<void> => {
    await this.getChannels();
  };

  getChannels = async (): Promise<void> => {
    this.setState({ loadingChannels: true });
    try {
      const { notificationService } = this.props;
      const response = await notificationService.getChannels();
      if (response.ok) {
        this.setState({ channels: response.response.channel_list });
      } else {
        this.context.notifications.toasts.addDanger(`알림 채널을 불러올 수 없습니다: ${response.error}`);
      }
    } catch (err) {
      this.context.notifications.toasts.addDanger(getErrorMessage(err, "알림 채널을 불러올 수 없습니다"));
    }
    this.setState({ loadingChannels: false });
  };

  render() {
    const {
      errorNotification,
      errorNotificationJsonString,
      onChangeChannelId,
      onChangeMessage,
      onChangeErrorNotificationJsonString,
      onSwitchToChannels,
    } = this.props;
    const { channels, loadingChannels } = this.state;
    const hasDestination = !!errorNotification?.destination;

    let content = (
      <ChannelNotification
        channelId={errorNotification?.channel?.id || ""}
        channels={channels}
        loadingChannels={loadingChannels}
        message={errorNotification?.message_template?.source || ""}
        onChangeChannelId={onChangeChannelId}
        onChangeMessage={onChangeMessage}
        getChannels={this.getChannels}
      />
    );

    // If we have a destination in the error notification then it's either an older policy or they created through the API
    if (hasDestination) {
      content = (
        <LegacyNotification
          notificationJsonString={errorNotificationJsonString}
          onChangeNotificationJsonString={onChangeErrorNotificationJsonString}
          onSwitchToChannels={onSwitchToChannels}
        />
      );
    }
    return (
      <EuiPanel>
        <EuiFlexGroup gutterSize="xs" alignItems="center">
          <EuiFlexItem grow={false}>
            <EuiTitle size="s">
              <h2>오류 알림</h2>
            </EuiTitle>
          </EuiFlexItem>
          <EuiFlexItem>
            <EuiTitle size="s">
              <EuiText color="subdued">
                {" "}
                <i> – 선택 사항</i>{" "}
              </EuiText>
            </EuiTitle>
          </EuiFlexItem>
        </EuiFlexGroup>

        <EuiText color="subdued" size="xs">
          <p style={{ fontWeight: 350 }}>
            정책 실행이 실패했을 때를 위한 오류 알림을 설정할 수 있습니다.{" "}
            <EuiLink href={ERROR_NOTIFICATION_DOCUMENTATION_URL} target="_blank" rel="noopener noreferrer">
              자세히 알아보기
            </EuiLink>
          </p>
        </EuiText>
        <EuiHorizontalRule margin={"xs"} />
        <div>{content}</div>
      </EuiPanel>
    );
  }
}
