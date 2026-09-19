/*
 * Copyright OpenSearch Contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import _ from "lodash";
import React, { ChangeEvent, useEffect, useState } from "react";
import {
  EuiCheckbox,
  EuiCompressedComboBox,
  EuiDatePicker,
  EuiCompressedFieldNumber,
  EuiCompressedFieldText,
  EuiFlexGroup,
  EuiFlexItem,
  EuiCompressedFormRow,
  EuiLink,
  EuiCompressedSelect,
  EuiSpacer,
  EuiText,
} from "@elastic/eui";
import CustomLabel from "../../../../components/CustomLabel";
import { WEEK_DAYS, CRON_SCHEDULE_FREQUENCY_TYPE, TIMEZONES } from "./constants";
import { buildCronExpression, parseCronExpression, startTime } from "./helper";
import moment from "moment-timezone";
import { CRON_EXPRESSION_DOCUMENTATION_URL } from "../../../../utils/constants";

interface CronScheduleProps {
  frequencyType: string;
  onChangeFrequencyType: (e: ChangeEvent<HTMLSelectElement>) => void;
  cronExpression: string;
  onCronExpressionChange: (expression: string) => void;
  showTimezone?: boolean;
  timezone?: string;
  onChangeTimezone?: (timezone: string) => void;
  timezoneError?: string;
  frequencyTitle?: string;
}

const CronSchedule = ({
  frequencyType,
  onChangeFrequencyType,
  cronExpression,
  onCronExpressionChange,
  showTimezone,
  timezone,
  onChangeTimezone,
  timezoneError,
  frequencyTitle = "일정 빈도",
}: CronScheduleProps) => {
  const { minute: initMin, hour: initHour, dayOfWeek: initWeek, dayOfMonth: initMonth } = parseCronExpression(cronExpression);

  const [minute, setMinute] = useState(initMin);
  const [hour, setHour] = useState(initHour);
  const [dayOfWeek, setWeek] = useState(initWeek);
  const [dayOfMonth, setMonth] = useState(initMonth);

  // When edit policy is clicked, during the initial render DEFAULT values get passed
  // As a result when the actual policy details are passed, the state does not get updated and we end up
  // showing incorrect values in schedule controls.
  if (initHour !== hour) {
    setHour(initHour);
  }

  if (initMin !== minute) {
    setMinute(initMin);
  }

  if (initWeek !== dayOfWeek) {
    setWeek(initWeek);
  }

  if (initMonth !== dayOfMonth) {
    setMonth(initMonth);
  }

  useEffect(() => {
    changeCron();
  }, [minute, hour, dayOfWeek, dayOfMonth]);

  const changeCron = (input?: any) => {
    let cronParts = { hour, minute, dayOfWeek, dayOfMonth, frequencyType };
    cronParts = { ...cronParts, ...input };
    const expression = buildCronExpression(cronParts, cronExpression);
    // console.log(`sm dev built expression ${expression}`);
    onCronExpressionChange(expression);
  };

  function onDayOfWeekChange(dayOfWeek: string) {
    setWeek(dayOfWeek);
    changeCron({ dayOfWeek });
  }

  function onDayOfMonthChange(dayOfMonth: number) {
    setMonth(dayOfMonth);
    changeCron({ dayOfMonth });
  }

  function onStartTimeChange(date: moment.Moment) {
    const minute = date.minute();
    const hour = date.hour();
    setMinute(minute);
    setHour(hour);
    changeCron({ minute, hour });
  }

  function onTypeChange(e: ChangeEvent<HTMLSelectElement>) {
    const frequencyType = e.target.value;
    onChangeFrequencyType(e);
    if (frequencyType === "hourly") setMinute(0);
    changeCron({ frequencyType });
  }

  const dayOfWeekCheckbox = (day: string, checkedDay: string) => (
    <EuiFlexItem key={day} grow={false} style={{ marginRight: "0px" }}>
      <EuiCheckbox id={day} label={day} checked={checkedDay === day} onChange={(e) => onDayOfWeekChange(day)} compressed />
    </EuiFlexItem>
  );

  let startTimeContent;
  startTimeContent = (
    <EuiDatePicker
      compressed={true}
      showTimeSelect
      showTimeSelectOnly
      selected={startTime(hour, minute)}
      onChange={onStartTimeChange}
      dateFormat="HH:mm"
      timeFormat="HH:mm"
    />
  );
  if (frequencyType === "hourly") {
    startTimeContent = <EuiText size="s">매시 정각에 시작합니다.</EuiText>;
  }

  let additionalContent;
  if (frequencyType === "weekly") {
    // TODO SM if use dayOfWeek not initWeek, somehow it would be SUN
    additionalContent = <EuiFlexGroup>{WEEK_DAYS.map((d) => dayOfWeekCheckbox(d, initWeek))}</EuiFlexGroup>;
  }
  if (frequencyType === "monthly") {
    additionalContent = (
      <>
        <CustomLabel title="매월" />
        <EuiFlexGroup gutterSize="m">
          <EuiFlexItem>
            <EuiCompressedSelect options={[{ value: "day", text: "일" }]} defaultValue="일" />
          </EuiFlexItem>
          <EuiFlexItem>
            <EuiCompressedFieldNumber
              value={dayOfMonth}
              onChange={(e) => {
                onDayOfMonthChange(parseInt(e.target.value));
              }}
              min={1}
              max={31}
            />
          </EuiFlexItem>
        </EuiFlexGroup>
      </>
    );
  }

  const cronExpressionHelpText = (
    <EuiText color="subdued" size="s" style={{ padding: "5px 0px" }}>
      <p style={{ fontWeight: 200, fontSize: "12px" }}>
        복잡한 일정을 정의하려면 Cron 표현식을 사용하세요.{" "}
        <EuiLink href={CRON_EXPRESSION_DOCUMENTATION_URL} target="_blank" rel="noopener noreferrer">
          자세히 알아보기
        </EuiLink>
      </p>
    </EuiText>
  );

  return (
    <>
      <CustomLabel title={frequencyTitle} />
      <EuiCompressedSelect
        id="creationCronScheduleType"
        options={CRON_SCHEDULE_FREQUENCY_TYPE}
        value={frequencyType}
        onChange={onTypeChange}
      />

      <EuiSpacer size="m" />

      <EuiFlexGroup justifyContent="flexStart" alignItems="flexStart">
        <EuiFlexItem style={{ maxWidth: 400 }}>
          {frequencyType === "custom" ? (
            <>
              <CustomLabel title="Cron 표현식" />
              <EuiCompressedFormRow helpText={cronExpressionHelpText}>
                <EuiCompressedFieldText
                  value={cronExpression}
                  onChange={(e) => {
                    onCronExpressionChange(e.target.value);
                  }}
                />
              </EuiCompressedFormRow>
            </>
          ) : (
            <>
              <CustomLabel title="시작 시간" />
              {startTimeContent}

              <EuiSpacer size="s" />

              {additionalContent}
            </>
          )}
        </EuiFlexItem>

        {showTimezone ? (
          <EuiFlexItem style={{ maxWidth: 250 }}>
            <CustomLabel title="시간대" />
            <EuiCompressedFormRow isInvalid={!!timezoneError} error={timezoneError}>
              <EuiCompressedComboBox
                placeholder="시간대 선택"
                singleSelection={{ asPlainText: true }}
                options={TIMEZONES}
                renderOption={({ label: tz }) => `${tz} (${moment.tz(tz).format("Z")})`}
                selectedOptions={[{ label: timezone ?? "" }]}
                onChange={(options) => {
                  if (onChangeTimezone) {
                    onChangeTimezone(_.first(options)?.label ?? "");
                  }
                }}
              />
            </EuiCompressedFormRow>
          </EuiFlexItem>
        ) : null}
      </EuiFlexGroup>
    </>
  );
};

export default CronSchedule;
