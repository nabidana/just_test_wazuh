/*
 * Copyright OpenSearch Contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import { TransformMetadata } from "../../../../models/interfaces";
import React, { ChangeEvent } from "react";
import moment from "moment-timezone";
import {
  EuiCompressedFieldNumber,
  EuiFlexGroup,
  EuiFlexItem,
  EuiIcon,
  EuiCompressedFormRow,
  EuiLink,
  EuiCompressedSelect,
  EuiTextArea,
  EuiText,
} from "@elastic/eui";
import { ScheduleIntervalTimeunitOptions } from "../../CreateTransform/utils/constants";
import ErrorModal from "../components/ErrorModal";
import { ModalConsumer } from "../../../components/Modal";

// TODO: merge with rollup helper to have a common helper
export const renderStatus = (metadata: TransformMetadata | undefined): JSX.Element => {
  if (metadata == null || metadata.transform_metadata == null) return <dd>-</dd>;

  // Notes regarding color options:
  //    'subdued' = a shade of black
  //    'success' = a shade of green
  //    'danger' = a shade of red
  //    '#DDDDDD' = a shade of grey
  let iconColor: "subdued" | "success" | "danger" | "#DDDDDD" | undefined;
  let text;

  switch (metadata.transform_metadata.status) {
    case "failed":
      iconColor = "danger";
      text = "오류";
      return (
        <EuiFlexGroup gutterSize="xs" alignItems="center">
          <EuiFlexItem grow={false}>
            <EuiIcon size={"s"} type={"dot"} color={iconColor} />
          </EuiFlexItem>
          <EuiFlexItem grow={false}>
            <EuiText size={"xs"}>
              <ModalConsumer>{({ onShow }) => <EuiLink onClick={() => onShow(ErrorModal, { metadata })}>{text}</EuiLink>}</ModalConsumer>
            </EuiText>
          </EuiFlexItem>
        </EuiFlexGroup>
      );
    case "finished":
      iconColor = "success";
      text = "완료";
      break;
    case "init":
      iconColor = "subdued";
      text = "초기화 중...";
      break;
    case "started":
      iconColor = "success";
      text = "시작됨";
      break;
    case "stopped":
      iconColor = "#DDDDDD";
      text = "중지됨";
      break;
    default:
      return <dd>-</dd>;
  }

  return (
    <EuiFlexGroup gutterSize="xs" alignItems="center">
      <EuiFlexItem grow={false}>
        <EuiIcon size={"s"} type={"dot"} color={iconColor} />
      </EuiFlexItem>
      <EuiFlexItem grow={false}>
        <EuiText size={"xs"}>{text}</EuiText>
      </EuiFlexItem>
    </EuiFlexGroup>
  );
};

export const renderEnabled = (isEnabled: boolean): string => {
  return isEnabled ? "활성화됨" : "비활성화됨";
};

export const selectInterval = (
  interval: number,
  intervalTimeunit: string,
  intervalError: string,
  onChangeInterval: (e: ChangeEvent<HTMLInputElement>) => void,
  onChangeTimeunit: (value: ChangeEvent<HTMLSelectElement>) => void,
  useUpdatedUX?: boolean
) => (
  <React.Fragment>
    <EuiFlexGroup style={{ maxWidth: 400 }}>
      <EuiFlexItem grow={false} style={{ width: 200 }}>
        <EuiCompressedFormRow label="트랜스폼 실행 간격" error={intervalError} isInvalid={intervalError != ""}>
          <EuiCompressedFieldNumber value={interval} onChange={onChangeInterval} isInvalid={intervalError != ""} />
        </EuiCompressedFormRow>
      </EuiFlexItem>
      <EuiFlexItem>
        <EuiCompressedFormRow hasEmptyLabelSpace={true}>
          <EuiCompressedSelect
            id="selectIntervalTimeunit"
            options={ScheduleIntervalTimeunitOptions}
            value={intervalTimeunit}
            onChange={onChangeTimeunit}
            isInvalid={interval == undefined || interval <= 0}
          />
        </EuiCompressedFormRow>
      </EuiFlexItem>
    </EuiFlexGroup>
  </React.Fragment>
);

export const selectCronExpression = (
  cronExpression: string,
  onCronExpressionChange: (e: ChangeEvent<HTMLTextAreaElement>) => void,
  cronTimeZone: string,
  onCronTimeZoneChange: (e: ChangeEvent<HTMLSelectElement>) => void
) => (
  <React.Fragment>
    <EuiCompressedFormRow label="cron 표현식으로 정의">
      <EuiTextArea value={cronExpression} onChange={onCronExpressionChange} compressed={true} />
    </EuiCompressedFormRow>
    <EuiCompressedFormRow label="시간대" helpText="지정된 시간대의 00:00:00부터 하루가 시작됩니다.">
      <EuiCompressedSelect id="timezone" options={timezones} value={cronTimeZone} onChange={onCronTimeZoneChange} />
    </EuiCompressedFormRow>
  </React.Fragment>
);

export const timezones = moment.tz.names().map((tz) => ({ label: tz, text: tz }));
