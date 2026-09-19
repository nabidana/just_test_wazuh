/*
 * Copyright OpenSearch Contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { ChangeEvent, Component, useContext } from "react";
import { EuiLink, EuiIcon, EuiFlexGroup, EuiFlexItem, EuiText } from "@elastic/eui";
import { ContentPanel } from "../../components/ContentPanel";
import "brace/theme/github";
import "brace/mode/json";
import { FeatureChannelList } from "../../../server/models/interfaces";
import { BrowserServices } from "../../models/interfaces";
import { ErrorNotification as IErrorNotification } from "../../../models/interfaces";
import { ServicesContext } from "../../services";
import { getErrorMessage } from "../../utils/helpers";
import { CoreServicesContext } from "../../components/core_services";
import ChannelNotification from "../../components/ChannelNotification";
import LegacyNotification from "../../components/LegacyNotification";
import { ERROR_NOTIFICATION_DOCUMENTATION_URL } from "../../utils/constants";

export interface ErrorNotificationProps {
  value?: IErrorNotification;
  onChange: (val: Required<ErrorNotificationProps>["value"]) => void;
  onChangeChannelId?: (value: string) => void;
  onChangeMessage?: (value: string) => void;
  browserServices: BrowserServices;
}

interface ErrorNotificationState {
  channels: FeatureChannelList[];
  loadingChannels: boolean;
}

class ErrorNotification extends Component<ErrorNotificationProps, ErrorNotificationState> {
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
      const { notificationService } = this.props.browserServices;
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

  onChangeChannelId = (e: ChangeEvent<HTMLSelectElement>) => {
    const { onChange, value, onChangeChannelId } = this.props;
    const id = e.target.value;
    onChangeChannelId && onChangeChannelId(id);
    onChange({
      ...value,
      channel: {
        id,
      },
    });
  };

  onChangeMessage = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const { onChange, value, onChangeMessage } = this.props;
    const message = e.target.value;
    onChangeMessage && onChangeMessage(message);
    onChange({
      ...value,
      message_template: {
        source: message,
      },
    });
  };

  onSwitchToChannels = () => {
    const { onChange } = this.props;
    onChange({
      channel: {
        id: "",
      },
      message_template: {
        source: "",
      },
    });
  };

  render() {
    const { value: errorNotification, onChange } = this.props;
    const { channels, loadingChannels } = this.state;
    const hasDestination = !!errorNotification?.destination;

    let content = (
      <ChannelNotification
        channelId={errorNotification?.channel?.id || ""}
        channels={channels}
        loadingChannels={loadingChannels}
        message={errorNotification?.message_template?.source || ""}
        onChangeChannelId={this.onChangeChannelId}
        onChangeMessage={this.onChangeMessage}
        getChannels={this.getChannels}
      />
    );

    // If we have a destination in the error notification then it's either an older policy or they created through the API
    if (hasDestination) {
      content = <LegacyNotification value={errorNotification} onChange={onChange} onSwitchToChannels={this.onSwitchToChannels} />;
    }

    return (
      <ContentPanel
        bodyStyles={{ padding: "initial" }}
        title={
          <EuiFlexGroup gutterSize="xs" alignItems="center">
            <EuiFlexItem grow={false}>
              <EuiText>
                <h3>오류 알림</h3>
              </EuiText>
            </EuiFlexItem>
            <EuiFlexItem>
              <EuiText color="subdued">
                <i> – 선택 사항</i>
              </EuiText>
            </EuiFlexItem>
          </EuiFlexGroup>
        }
        titleSize="s"
        subTitleText={
          <EuiText color="subdued" size="s" style={{ padding: "5px 0px" }}>
            <p style={{ fontWeight: 200 }}>
              정책 실행이 실패했을 때 오류 알림을 설정할 수 있습니다.{" "}
              <EuiLink href={ERROR_NOTIFICATION_DOCUMENTATION_URL} target="_blank" rel="noopener noreferrer">
                자세히 알아보기
              </EuiLink>
            </p>
          </EuiText>
        }
      >
        <div style={{ padding: "10px 0px 0px 10px" }}>{content}</div>
      </ContentPanel>
    );
  }
}

export default function ErrorNotificationContainer(props: Omit<ErrorNotificationProps, "browserServices">) {
  const browserServices = useContext(ServicesContext) as BrowserServices;
  return <ErrorNotification {...props} browserServices={browserServices} />;
}
