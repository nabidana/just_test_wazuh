/*
 * Copyright OpenSearch Contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { ChangeEvent } from "react";
import {
  EuiLink,
  EuiIcon,
  EuiCompressedFormRow,
  EuiCompressedSelect,
  EuiSpacer,
  EuiCompressedFieldText,
  EuiCompressedFieldNumber,
} from "@elastic/eui";
import moment from "moment-timezone";
import EuiFormCustomLabel from "../EuiFormCustomLabel";
import { UITransition } from "../../../../../models/interfaces";
import { TRANSITION_DOCUMENTATION_URL } from "../../../../utils/constants";

const timezones = moment.tz.names().map((tz) => ({ label: tz, text: tz }));

const conditionTypeOptions = [
  { value: "none", text: "조건 없음" },
  { value: "min_index_age", text: "최소 인덱스 기간" },
  { value: "min_doc_count", text: "최소 문서 수" },
  { value: "min_size", text: "최소 크기" },
  { value: "min_rollover_age", text: "최소 롤오버 기간" },
  { value: "cron", text: "Cron 표현식" },
];

interface TransitionProps {
  uiTransition: UITransition;
  onChangeTransition: (transition: UITransition) => void;
}

const Transition = ({ uiTransition, onChangeTransition }: TransitionProps) => {
  // We currently only support one transition condition
  const conditionType = Object.keys(uiTransition.transition.conditions || []).pop() || "none";
  const conditions = uiTransition.transition.conditions;
  return (
    <>
      <EuiFormCustomLabel title="조건" helpText="대상 상태로 전환하기 위해 충족되어야 하는 조건을 지정하세요." />
      <EuiCompressedFormRow fullWidth isInvalid={false} error={null}>
        <EuiCompressedSelect
          fullWidth
          id="condition-type"
          options={conditionTypeOptions}
          value={conditionType}
          style={{ textTransform: "capitalize" }}
          onChange={(e) => {
            const selectedConditionType = e.target.value;
            const transition = { ...uiTransition.transition };
            if (selectedConditionType === "none") delete transition.conditions;
            if (selectedConditionType === "min_index_age") transition.conditions = { min_index_age: "30d" };
            if (selectedConditionType === "min_doc_count") transition.conditions = { min_doc_count: 1000000 };
            if (selectedConditionType === "min_size") transition.conditions = { min_size: "50gb" };
            if (selectedConditionType === "min_rollover_age") transition.conditions = { min_rollover_age: "7d" };
            if (selectedConditionType === "cron")
              transition.conditions = { cron: { cron: { expression: "* 17 * * SAT", timezone: "America/Los_Angeles" } } };
            onChangeTransition({
              ...uiTransition,
              transition,
            });
          }}
          data-test-subj="create-state-action-type"
        />
      </EuiCompressedFormRow>

      <EuiSpacer />

      {conditionType === "min_index_age" && (
        <>
          <EuiFormCustomLabel title="최소 인덱스 기간" helpText="다음 상태로 전환하는 데 필요한 최소 기간입니다." />
          <EuiCompressedFormRow fullWidth isInvalid={false} error={null}>
            <EuiCompressedFieldText
              fullWidth
              value={conditions?.min_index_age}
              onChange={(e: ChangeEvent<HTMLInputElement>) => {
                const minIndexAge = e.target.value;
                onChangeTransition({
                  ...uiTransition,
                  transition: {
                    ...uiTransition.transition,
                    conditions: {
                      min_index_age: minIndexAge,
                    },
                  },
                });
              }}
              data-test-subj="transition-render-conditions-min-index-age"
            />
          </EuiCompressedFormRow>
        </>
      )}

      {conditionType === "min_doc_count" && (
        <>
          <EuiFormCustomLabel
            title="최소 문서 수"
            helpText="다음 상태로 전환하는 데 필요한 최소 문서 수입니다."
          />
          <EuiCompressedFormRow fullWidth isInvalid={false} error={null}>
            <EuiCompressedFieldNumber
              fullWidth
              value={typeof conditions?.min_doc_count === "undefined" ? "" : conditions?.min_doc_count}
              onChange={(e: ChangeEvent<HTMLInputElement>) => {
                const minDocCount = e.target.valueAsNumber;
                const conditions = { min_doc_count: minDocCount };
                // TODO: clean this up..
                // set it to undefined instead of deleting... as we use the presence of the key itself for the type of transition
                if (isNaN(minDocCount)) conditions.min_doc_count = undefined;
                onChangeTransition({
                  ...uiTransition,
                  transition: {
                    ...uiTransition.transition,
                    conditions,
                  },
                });
              }}
              data-test-subj="transition-render-conditions-min-doc-count"
            />
          </EuiCompressedFormRow>
        </>
      )}

      {conditionType === "min_size" && (
        <>
          <EuiFormCustomLabel
            title="최소 인덱스 크기"
            helpText="다음 상태로 전환하는 데 필요한 프라이머리 샤드 전체 스토리지의 최소 크기입니다."
          />
          <EuiCompressedFormRow fullWidth isInvalid={false} error={null}>
            <EuiCompressedFieldText
              fullWidth
              value={conditions?.min_size}
              onChange={(e: ChangeEvent<HTMLInputElement>) => {
                const minSize = e.target.value;
                onChangeTransition({
                  ...uiTransition,
                  transition: {
                    ...uiTransition.transition,
                    conditions: {
                      min_size: minSize,
                    },
                  },
                });
              }}
              data-test-subj="transition-render-conditions-min-size"
            />
          </EuiCompressedFormRow>
        </>
      )}

      {conditionType === "min_rollover_age" && (
        <>
          <EuiFormCustomLabel
            title="최소 롤오버 기간"
            helpText="롤오버가 발생한 후 다음 상태로 전환하는 데 필요한 최소 기간입니다."
          />
          <EuiCompressedFormRow fullWidth isInvalid={false} error={null}>
            <EuiCompressedFieldText
              fullWidth
              value={conditions?.min_rollover_age}
              onChange={(e: ChangeEvent<HTMLInputElement>) => {
                const minRolloverAge = e.target.value;
                onChangeTransition({
                  ...uiTransition,
                  transition: {
                    ...uiTransition.transition,
                    conditions: {
                      min_rollover_age: minRolloverAge,
                    },
                  },
                });
              }}
              data-test-subj="transition-render-conditions-min-rollover-age"
            />
          </EuiCompressedFormRow>
        </>
      )}

      {conditionType === "cron" && (
        <>
          <EuiFormCustomLabel
            title="Cron 표현식"
            helpText="다음 상태로 전환하기 위해 일치해야 하는 cron 표현식입니다."
            learnMore={
              <EuiLink href={TRANSITION_DOCUMENTATION_URL} target="_blank" rel="noopener noreferrer">
                자세히 알아보기
              </EuiLink>
            }
          />
          <EuiCompressedFormRow fullWidth isInvalid={false} error={null}>
            <EuiCompressedFieldText
              fullWidth
              value={conditions?.cron?.cron.expression}
              onChange={(e: ChangeEvent<HTMLInputElement>) => {
                const expression = e.target.value;
                onChangeTransition({
                  ...uiTransition,
                  transition: {
                    ...uiTransition.transition,
                    conditions: {
                      cron: {
                        cron: {
                          expression,
                          timezone: uiTransition.transition.conditions?.cron?.cron.timezone || "",
                        },
                      },
                    },
                  },
                });
              }}
              data-test-subj="transition-render-conditions-min-size"
            />
          </EuiCompressedFormRow>

          <EuiSpacer />

          <EuiFormCustomLabel title="시간대" helpText="지정된 시간대의 00:00:00부터 하루가 시작됩니다." />
          <EuiCompressedFormRow fullWidth isInvalid={false} error={null}>
            <EuiCompressedSelect
              fullWidth
              id="timezone"
              options={timezones}
              value={conditions?.cron?.cron.timezone}
              onChange={(e: ChangeEvent<HTMLSelectElement>) => {
                const timezone = e.target.value;
                onChangeTransition({
                  ...uiTransition,
                  transition: {
                    ...uiTransition.transition,
                    conditions: {
                      cron: {
                        cron: {
                          expression: uiTransition.transition.conditions?.cron?.cron.expression || "",
                          timezone,
                        },
                      },
                    },
                  },
                });
              }}
            />
          </EuiCompressedFormRow>
        </>
      )}
    </>
  );
};

export default Transition;
