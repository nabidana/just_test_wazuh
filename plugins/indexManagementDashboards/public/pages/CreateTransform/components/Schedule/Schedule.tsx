/*
 * Copyright OpenSearch Contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { ChangeEvent, Component } from "react";
import {
  EuiSpacer,
  EuiCompressedCheckbox,
  EuiCompressedRadioGroup,
  EuiCompressedFormRow,
  EuiCompressedFieldNumber,
  EuiAccordion,
  EuiHorizontalRule,
  EuiText,
  EuiTitle,
  EuiPanel,
} from "@elastic/eui";
import { selectInterval } from "../../../Transforms/utils/metadataHelper";

interface ScheduleProps {
  isEdit: boolean;
  transformId: string;
  transformIdError: string;
  jobEnabledByDefault: boolean;
  continuousJob: string;
  pageSize: number;
  onChangeJobEnabledByDefault: () => void;
  interval: number;
  intervalTimeunit: string;
  intervalError: string;
  onChangeContinuousJob: (optionId: string) => void;
  onChangeIntervalTime: (e: ChangeEvent<HTMLInputElement>) => void;
  onChangeIntervalTimeunit: (e: ChangeEvent<HTMLSelectElement>) => void;
  onChangePage: (e: ChangeEvent<HTMLInputElement>) => void;
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

const isContinuous = (continuousJob: string, onChangeContinuousJob: (optionId: string) => void) => (
  <React.Fragment>
    <EuiCompressedFormRow
      label={
        <EuiText size="s">
          <h4>연속형</h4>
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

export default class Schedule extends Component<ScheduleProps> {
  constructor(props: ScheduleProps) {
    super(props);
  }

  render() {
    const {
      isEdit,
      jobEnabledByDefault,
      continuousJob,
      interval,
      intervalTimeunit,
      intervalError,
      pageSize,
      onChangeJobEnabledByDefault,
      onChangeContinuousJob,
      onChangeIntervalTime,
      onChangeIntervalTimeunit,
      onChangePage,
    } = this.props;
    return (
      <EuiPanel>
        <EuiTitle size="s">
          <h2>일정</h2>
        </EuiTitle>
        <EuiHorizontalRule margin="xs" />
        <div>
          {!isEdit && (
            <EuiCompressedCheckbox
              id="jobEnabledByDefault"
              label="기본적으로 작업 활성화"
              checked={jobEnabledByDefault}
              onChange={onChangeJobEnabledByDefault}
              data-test-subj="jobEnabledByDefault"
            />
          )}
          <EuiSpacer size="m" />

          {!isEdit && isContinuous(continuousJob, onChangeContinuousJob)}

          {/* TODO: Replace with switch block when define by cron expressions is supported. */}
          {selectInterval(interval, intervalTimeunit, intervalError, onChangeIntervalTime, onChangeIntervalTimeunit)}
          <EuiSpacer size="m" />
          <EuiHorizontalRule margin="xs" />
          <EuiSpacer size="m" />
          <EuiAccordion id="pagePerExecution" buttonContent="고급">
            <EuiSpacer size="m" />
            <EuiCompressedFormRow
              label="실행당 페이지 수"
              helpText={`한 번에 계산 및 색인되는 변환된 버킷의 수를 결정합니다.
                        값이 클수록 각 검색 요청의 처리량이 향상되지만
                        더 많은 메모리를 사용하고 지연 시간이 늘어납니다.
                        메모리 제한을 초과하면 예외가 발생합니다.
                        기본값으로 시작한 후 사용 사례와 샤드 크기에 따라
                        조정하는 것을 권장합니다.`}
            >
              <EuiCompressedFieldNumber min={1} placeholder="1000" value={pageSize} onChange={onChangePage} />
            </EuiCompressedFormRow>
          </EuiAccordion>
        </div>
      </EuiPanel>
    );
  }
}
