/*
 * Copyright OpenSearch Contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import { RollupMetadata } from "../../../../models/interfaces";
import React from "react";
import { EuiFlexGroup, EuiFlexItem, EuiIcon, EuiText } from "@elastic/eui";

export const renderStatus = (metadata: RollupMetadata | undefined): JSX.Element => {
  if (metadata == null || metadata == undefined || metadata.rollup_metadata == null) return <dd>-</dd>;
  let icon;
  let iconColor;
  let textColor: "default" | "subdued" | "secondary" | "ghost" | "accent" | "warning" | "danger" | undefined;
  let text;
  switch (metadata.rollup_metadata.status) {
    case "failed":
      icon = "alert";
      iconColor = "danger";
      textColor = "danger";
      text = "실패: " + metadata.rollup_metadata.failure_reason;
      break;
    case "finished":
      icon = "check";
      iconColor = "success";
      textColor = "secondary";
      text = "완료";
      break;
    case "init":
      return (
        <EuiFlexGroup gutterSize="xs">
          <EuiFlexItem grow={false}>
            <EuiIcon size="s" type="clock" color="primary" />
          </EuiFlexItem>
          <EuiFlexItem grow={false}>
            <EuiText size="xs" style={{ color: "#006BB4" }}>
              초기화 중
            </EuiText>
          </EuiFlexItem>
        </EuiFlexGroup>
      );
    case "started":
      icon = "play";
      iconColor = "success";
      textColor = "secondary";
      text = "시작됨";
      break;
    case "stopped":
      icon = "stop";
      iconColor = "subdued";
      textColor = "subdued";
      text = "중지됨";
      break;
    default:
      return <dd>-</dd>;
  }

  return (
    <EuiFlexGroup gutterSize="xs">
      <EuiFlexItem grow={false}>
        <EuiIcon size="s" type={icon} color={iconColor} />
      </EuiFlexItem>
      <EuiFlexItem grow={false}>
        <EuiText size="xs" color={textColor}>
          {text}
        </EuiText>
      </EuiFlexItem>
    </EuiFlexGroup>
  );
};
