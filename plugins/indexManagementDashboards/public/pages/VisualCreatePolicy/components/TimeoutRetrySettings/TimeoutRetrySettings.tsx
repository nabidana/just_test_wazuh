/*
 * Copyright OpenSearch Contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { ChangeEvent } from "react";
import {
  EuiAccordion,
  EuiText,
  EuiFlexGroup,
  EuiFlexItem,
  EuiCompressedFormRow,
  EuiCompressedFieldNumber,
  EuiCompressedFieldText,
  EuiCompressedSelect,
} from "@elastic/eui";
import "brace/theme/github";
import "brace/mode/json";
import { Action, UIAction } from "../../../../../models/interfaces";
import EuiFormCustomLabel from "../EuiFormCustomLabel";

interface TimeoutRetrySettingsProps {
  action: UIAction<Action>;
  editAction: boolean;
  onChangeAction: (action: UIAction<any>) => void;
}

const options = [
  { value: "exponential", text: "지수" },
  { value: "constant", text: "고정" },
  { value: "linear", text: "선형" },
];

const TimeoutRetrySettings = ({ action, editAction, onChangeAction }: TimeoutRetrySettingsProps) => (
  <EuiAccordion id="timeout-retry-settings" buttonContent="시간 제한 및 재시도 설정">
    <EuiFlexGroup style={{ padding: "5px 28px" }} direction="column">
      <EuiFlexItem>
        <EuiText>
          <p>
            <span style={{ color: "grey", fontWeight: 200, fontSize: "15px" }}>
              시간 제한 및 재시도 설정을 사용하여 작업 실패를 처리할 수 있습니다. 필요에 따라 매개변수를 지정할 수 있습니다.
            </span>
          </p>
        </EuiText>
      </EuiFlexItem>
      <EuiFlexItem>
        <EuiFormCustomLabel title="시간 제한" helpText={`작업의 시간 제한 기간입니다. "5h" 또는 "1d"와 같은 시간 단위를 사용할 수 있습니다.`} />
        <EuiCompressedFormRow fullWidth isInvalid={false} error={null}>
          <EuiFlexGroup>
            <EuiFlexItem>
              <EuiCompressedFieldText
                isInvalid={false}
                fullWidth
                value={action.action.timeout || ""}
                onChange={(e: ChangeEvent<HTMLInputElement>) => {
                  const timeout = e.target.value;
                  onChangeAction(action.clone({ ...action.action, timeout }));
                }}
              />
            </EuiFlexItem>
          </EuiFlexGroup>
        </EuiCompressedFormRow>
      </EuiFlexItem>
      <EuiFlexItem>
        <EuiFormCustomLabel
          title="재시도 횟수"
          helpText="작업이 실패할 경우 재시도할 횟수입니다. 0보다 커야 합니다."
        />
        <EuiCompressedFormRow fullWidth isInvalid={false} error={null}>
          <EuiFlexGroup>
            <EuiFlexItem>
              <EuiCompressedFieldNumber
                isInvalid={false}
                fullWidth
                min={0}
                value={typeof action.action.retry?.count === "undefined" ? "" : action.action.retry.count}
                onChange={(e: ChangeEvent<HTMLInputElement>) => {
                  const count = e.target.valueAsNumber;
                  const retry = { ...action.action.retry, count };
                  if (isNaN(count)) delete retry.count;
                  onChangeAction(action.clone({ ...action.action, retry }));
                }}
              />
            </EuiFlexItem>
          </EuiFlexGroup>
        </EuiCompressedFormRow>
      </EuiFlexItem>
      <EuiFlexItem>
        <EuiFormCustomLabel title="재시도 백오프" helpText="재시도 시 사용할 백오프 정책 유형입니다." />
        <EuiCompressedFormRow fullWidth isInvalid={false} error={null}>
          <EuiCompressedSelect
            id="retry-backoff-type"
            fullWidth
            options={options}
            value={action.action.retry?.backoff || ""}
            onChange={(e: ChangeEvent<HTMLSelectElement>) => {
              const backoff = e.target.value;
              onChangeAction(action.clone({ ...action.action, retry: { ...action.action.retry, backoff } }));
            }}
          />
        </EuiCompressedFormRow>
      </EuiFlexItem>
      <EuiFlexItem>
        <EuiFormCustomLabel title="재시도 지연" helpText={`재시도 간 대기 시간입니다. "2h" 또는 "1d"와 같은 시간 단위를 사용할 수 있습니다.`} />
        <EuiCompressedFormRow fullWidth isInvalid={false} error={null}>
          <EuiFlexGroup>
            <EuiFlexItem>
              <EuiCompressedFieldText
                isInvalid={false}
                fullWidth
                value={action.action.retry?.delay || ""}
                onChange={(e: ChangeEvent<HTMLInputElement>) => {
                  const delay = e.target.value;
                  onChangeAction(action.clone({ ...action.action, retry: { ...action.action.retry, delay } }));
                }}
              />
            </EuiFlexItem>
          </EuiFlexGroup>
        </EuiCompressedFormRow>
      </EuiFlexItem>
    </EuiFlexGroup>
  </EuiAccordion>
);

export default TimeoutRetrySettings;
