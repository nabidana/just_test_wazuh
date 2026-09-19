/*
 * Copyright OpenSearch Contributors
 * SPDX-License-Identifier: Apache-2.0
 */
import { EuiSpacer, EuiText } from "@elastic/eui";
import React from "react";
import CustomFormRow from "../../../../components/CustomFormRow";
import { AllBuiltInComponents } from "../../../../components/FormGenerator";
import { FieldInstance } from "../../../../lib/field";
import SwitchNumber from "../SwitchNumber";

export interface ForceMergeOptionsProps {
  field: FieldInstance;
}

const ForceMergeAdvancedOptions = (props: ForceMergeOptionsProps) => {
  const { field } = props;

  return (
    <div>
      <CustomFormRow
        isInvalid={!!field.getError("max_num_segments")}
        error={field.getError("max_num_segments")}
        label={
          <EuiText size="s">
            <h3>인덱스 세그먼트</h3>
          </EuiText>
        }
        helpText="병합할 세그먼트 수를 정의합니다."
      >
        <SwitchNumber
          {...field.registerField({
            name: "max_num_segments",
            rules: [
              {
                validator(rule, value) {
                  const formatValue = new Number(value);
                  if (Number.isNaN(formatValue.valueOf())) {
                    return Promise.resolve("");
                  } else if (formatValue.valueOf() % 1 !== 0 || formatValue.valueOf() < 1) {
                    return Promise.reject("1 이상의 정수여야 합니다.");
                  }

                  return Promise.resolve("");
                },
              },
            ],
          })}
        />
      </CustomFormRow>
      <EuiSpacer />
      <CustomFormRow
        label={
          <EuiText size="s">
            <h3>인덱스 플러시</h3>
          </EuiText>
        }
        helpText="OpenSearch는 강제 병합 후 인덱스에 대해 플러시를 수행합니다."
      >
        <AllBuiltInComponents.CheckBox
          {...field.registerField({
            name: "flush",
          })}
          label="인덱스 플러시"
        />
      </CustomFormRow>
      <EuiSpacer />
      <CustomFormRow
        label={
          <EuiText size="s">
            <h3>삭제된 문서 제거</h3>
          </EuiText>
        }
        fullWidth
        helpText="삭제된 문서가 10% 이상 포함된 모든 세그먼트를 제거합니다. 이 비율은 index.merge.policy.expunge_deletes_allowed 설정에서 구성할 수 있습니다."
      >
        <AllBuiltInComponents.CheckBox
          {...field.registerField({
            name: "only_expunge_deletes",
          })}
          label="삭제된 문서 완전히 제거"
        />
      </CustomFormRow>
    </div>
  );
};

export default ForceMergeAdvancedOptions;
