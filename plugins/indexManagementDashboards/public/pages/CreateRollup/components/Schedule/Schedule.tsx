/*
 * Copyright OpenSearch Contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { ChangeEvent, Component } from "react";
import moment from "moment-timezone";
import {
  EuiSpacer,
  EuiCompressedCheckbox,
  EuiCompressedRadioGroup,
  EuiCompressedFormRow,
  EuiCompressedSelect,
  EuiCompressedFieldNumber,
  EuiFlexGroup,
  EuiFlexItem,
  EuiTextArea,
  EuiFormHelpText,
  EuiText,
  EuiHorizontalRule,
  EuiPanel,
  EuiTitle,
} from "@elastic/eui";
import { DelayTimeunitOptions, ScheduleIntervalTimeunitOptions } from "../../utils/constants";
import { ContentPanel } from "../../../../components/ContentPanel";

interface ScheduleProps {
  isEdit: boolean;
  rollupId: string;
  rollupIdError: string;
  jobEnabledByDefault: boolean;
  continuousJob: string;
  continuousDefinition: string;
  interval: number;
  intervalTimeunit: string;
  intervalError: string;
  cronExpression: string;
  cronTimezone: string;
  pageSize: number;
  delayTime: number | string;
  delayTimeunit: string;
  onChangeJobEnabledByDefault: () => void;
  onChangeCron: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  onChangeCronTimezone: (e: ChangeEvent<HTMLSelectElement>) => void;
  onChangeDelayTime: (e: ChangeEvent<HTMLInputElement>) => void;
  onChangeIntervalTime: (e: ChangeEvent<HTMLInputElement>) => void;
  onChangePage: (e: ChangeEvent<HTMLInputElement>) => void;
  onChangeContinuousDefinition: (e: ChangeEvent<HTMLSelectElement>) => void;
  onChangeContinuousJob: (optionId: string) => void;
  onChangeDelayTimeunit: (e: ChangeEvent<HTMLSelectElement>) => void;
  onChangeIntervalTimeunit: (e: ChangeEvent<HTMLSelectElement>) => void;
}

const radios = [
  {
    id: "no",
    label: "아니요",
  },
  {
    id: "yes",
    label: "예",
  },
];

const selectInterval = (
  interval: number,
  intervalTimeunit: string,
  intervalError: string,
  onChangeInterval: (e: ChangeEvent<HTMLInputElement>) => void,
  onChangeTimeunit: (value: ChangeEvent<HTMLSelectElement>) => void
) => (
  <React.Fragment>
    <EuiText size="s">
      <h3>롤업 간격</h3>
    </EuiText>
    <EuiFlexGroup style={{ maxWidth: 400 }}>
      <EuiFlexItem grow={false} style={{ width: 200 }}>
        <EuiCompressedFormRow error={intervalError} isInvalid={intervalError != ""}>
          <EuiCompressedFieldNumber value={interval} onChange={onChangeInterval} isInvalid={intervalError != ""} />
        </EuiCompressedFormRow>
      </EuiFlexItem>
      <EuiFlexItem>
        <EuiCompressedFormRow>
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

const isContinuous = (continuousJob: string, onChangeContinuousJob: (optionId: string) => void) => (
  <React.Fragment>
    <EuiCompressedFormRow
      label={
        <EuiText size="s">
          <h3>연속형</h3>
        </EuiText>
      }
    >
      <EuiCompressedRadioGroup
        options={radios}
        idSelected={continuousJob}
        onChange={(id) => onChangeContinuousJob(id)}
        name="continuousJob"
      />
    </EuiCompressedFormRow>
    <EuiSpacer size="m" />
  </React.Fragment>
);

const timezones = moment.tz.names().map((tz) => ({ label: tz, text: tz }));

export default class Schedule extends Component<ScheduleProps> {
  constructor(props: ScheduleProps) {
    super(props);
  }

  render() {
    const {
      isEdit,
      jobEnabledByDefault,
      continuousJob,
      continuousDefinition,
      interval,
      intervalTimeunit,
      intervalError,
      cronExpression,
      cronTimezone,
      pageSize,
      delayTime,
      delayTimeunit,
      onChangeJobEnabledByDefault,
      onChangeCron,
      onChangeCronTimezone,
      onChangeDelayTime,
      onChangeIntervalTime,
      onChangePage,
      onChangeContinuousDefinition,
      onChangeContinuousJob,
      onChangeDelayTimeunit,
      onChangeIntervalTimeunit,
    } = this.props;
    return (
      <EuiPanel>
        <EuiFlexGroup gutterSize="xs" alignItems="center">
          <EuiTitle size="s">
            <h2>일정</h2>
          </EuiTitle>
        </EuiFlexGroup>
        <EuiHorizontalRule margin={"xs"} />
        {!isEdit && (
          <EuiCompressedCheckbox
            id="jobEnabledByDefault"
            label="기본적으로 작업 활성화"
            checked={jobEnabledByDefault}
            onChange={onChangeJobEnabledByDefault}
            data-test-subj="jobEnabledByDefault"
          />
        )}
        {!isEdit && isContinuous(continuousJob, onChangeContinuousJob)}

        <EuiCompressedFormRow
          label={
            <EuiText size="s">
              <h3>롤업 실행 빈도</h3>
            </EuiText>
          }
        >
          <EuiCompressedSelect
            id="continuousDefinition"
            options={[
              { value: "fixed", text: "고정 간격으로 정의" },
              { value: "cron", text: "cron 표현식으로 정의" },
            ]}
            value={continuousDefinition}
            onChange={onChangeContinuousDefinition}
          />
        </EuiCompressedFormRow>
        <EuiSpacer size="m" />

        {continuousDefinition == "fixed" ? (
          selectInterval(interval, intervalTimeunit, intervalError, onChangeIntervalTime, onChangeIntervalTimeunit)
        ) : (
          <React.Fragment>
            <EuiCompressedFormRow
              label={
                <EuiText size="s">
                  <h3>cron 표현식으로 정의</h3>
                </EuiText>
              }
            >
              <EuiTextArea value={cronExpression} onChange={onChangeCron} compressed={true} />
            </EuiCompressedFormRow>
            <EuiCompressedFormRow
              label={
                <EuiText size="s">
                  <h3>시간대</h3>
                </EuiText>
              }
              helpText="지정된 시간대의 00:00:00부터 하루가 시작됩니다."
            >
              <EuiCompressedSelect id="timezone" options={timezones} value={cronTimezone} onChange={onChangeCronTimezone} />
            </EuiCompressedFormRow>
          </React.Fragment>
        )}

        <EuiSpacer size="m" />

        <EuiCompressedFormRow
          label={
            <EuiText size="s">
              <h3>실행당 페이지 수</h3>
            </EuiText>
          }
          helpText="매 실행마다 처리할 페이지 수입니다. 값이 클수록 실행 속도는 빨라지지만 메모리 비용이 높아집니다."
        >
          <EuiCompressedFieldNumber min={1} placeholder="1000" value={pageSize} onChange={onChangePage} />
        </EuiCompressedFormRow>
        <EuiSpacer size="m" />
        <EuiText size="s">
          <h3>
            실행 지연<i> – 선택 사항</i>
          </h3>
        </EuiText>
        <EuiFlexGroup style={{ maxWidth: 400 }}>
          <EuiFlexItem grow={false} style={{ width: 200 }}>
            <EuiCompressedFormRow>
              <EuiCompressedFieldNumber value={delayTime} onChange={onChangeDelayTime} />
            </EuiCompressedFormRow>
          </EuiFlexItem>
          <EuiFlexItem>
            <EuiCompressedFormRow>
              <EuiCompressedSelect
                id="selectTimeunit"
                options={DelayTimeunitOptions}
                value={delayTimeunit}
                onChange={onChangeDelayTimeunit}
              />
            </EuiCompressedFormRow>
          </EuiFlexItem>
        </EuiFlexGroup>
        <EuiFormHelpText style={{ maxWidth: 400 }}>
          필요한 처리 시간을 확보하기 위해 작업이 데이터 수집을 기다리는 시간입니다.
        </EuiFormHelpText>
      </EuiPanel>
    );
  }
}
