/*
 * Copyright OpenSearch Contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { ChangeEvent, Component } from "react";
import {
  EuiSpacer,
  EuiCompressedCheckbox,
  EuiAccordion,
  EuiCompressedFormRow,
  EuiCompressedFieldNumber,
  EuiText,
  EuiPanel,
  EuiHorizontalRule,
  EuiTitle,
} from "@elastic/eui";
// @ts-ignore
import { htmlIdGenerator } from "@elastic/eui/lib/services";
import { selectInterval } from "../../utils/metadataHelper";

interface ScheduleProps {
  transformId: string;
  error: string;
  enabled: boolean;
  pageSize: number;
  onEnabledChange: () => void;
  schedule: string;
  interval: number;
  intervalTimeUnit: string;
  intervalError: string;
  cronExpression: string;
  cronTimeZone: string;
  onPageChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onScheduleChange: (e: ChangeEvent<HTMLSelectElement>) => void;
  onCronExpressionChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  onCronTimeZoneChange: (e: ChangeEvent<HTMLSelectElement>) => void;
  onIntervalChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onIntervalTimeUnitChange: (e: ChangeEvent<HTMLSelectElement>) => void;
  size: "s" | "m";
}

export default class Schedule extends Component<ScheduleProps> {
  constructor(props: ScheduleProps) {
    super(props);
  }

  render() {
    const {
      enabled,
      pageSize,
      onEnabledChange,
      onPageChange,
      interval,
      intervalError,
      intervalTimeUnit,
      onIntervalChange,
      onIntervalTimeUnitChange,
    } = this.props;
    return (
      <EuiPanel>
        <EuiTitle size="s">
          <h2>일정</h2>
        </EuiTitle>
        <EuiHorizontalRule margin="xs" />
        <div>
          <EuiCompressedCheckbox
            id="jobEnabled"
            label={
              <EuiText size="s">
                <p>기본적으로 작업 활성화</p>
              </EuiText>
            }
            checked={enabled}
            onChange={onEnabledChange}
            data-test-subj="jobEnabled"
          />
          <EuiSpacer size="m" />

          {/* TODO: Replace with switch block when define by cron expressions is supported. */}
          {selectInterval(interval, intervalTimeUnit, intervalError, onIntervalChange, onIntervalTimeUnitChange)}
          {/*{schedule == "fixed"*/}
          {/*  ? selectInterval(interval, intervalTimeUnit, intervalError, onIntervalChange, onIntervalTimeUnitChange)*/}
          {/*  : selectCronExpression(cronExpression, onCronExpressionChange, cronTimeZone, onCronTimeZoneChange)}*/}

          <EuiSpacer size="m" />

          <EuiAccordion
            id={htmlIdGenerator()()}
            buttonContent={
              <EuiText size="s">
                <h3>고급</h3>
              </EuiText>
            }
          >
            <EuiSpacer size="m" />
            <EuiCompressedFormRow
              label={"실행당 페이지 수"}
              helpText={
                "한 번에 계산되고 색인화되는 변환된 버킷 수를 결정합니다. 값이 클수록 실행 속도는 빨라지지만 더 많은 메모리가 필요합니다. 메모리 한도를 초과하면 예외가 발생합니다. 기본값으로 시작하여 사용 사례에 따라 조정하는 것을 권장합니다."
              }
            >
              <EuiCompressedFieldNumber min={1} placeholder="1000" value={pageSize} onChange={onPageChange} />
            </EuiCompressedFormRow>
          </EuiAccordion>
        </div>
      </EuiPanel>
    );
  }
}
