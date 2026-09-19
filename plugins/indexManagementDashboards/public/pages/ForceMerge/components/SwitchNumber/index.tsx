/*
 * Copyright OpenSearch Contributors
 * SPDX-License-Identifier: Apache-2.0
 */
import React, { useState } from "react";
import { EuiCompressedRadioGroup, EuiSpacer } from "@elastic/eui";
import CustomFormRow from "../../../../components/CustomFormRow";
import { AllBuiltInComponents } from "../../../../components/FormGenerator";

interface SwitchNumberProps {
  value?: number;
  onChange: (val: SwitchNumberProps["value"]) => void;
}

export default function SwitchNumber(props: SwitchNumberProps) {
  const [id, setId] = useState(props.value && props.value > 0 ? "1" : "0");
  return (
    <>
      <EuiCompressedRadioGroup
        options={[
          {
            id: "0",
            label: "자동",
          },
          {
            id: "1",
            label: "세그먼트 수 수동 설정",
          },
        ]}
        idSelected={id}
        onChange={(id) => {
          setId(id);
          if (id === "0") {
            props.onChange(undefined);
          } else {
            props.onChange(1);
          }
        }}
      />
      {id === "1" ? (
        <>
          <EuiSpacer size="s" />
          <CustomFormRow
            label="세그먼트 수"
            helpText="병합할 세그먼트 수를 지정합니다. 인덱스를 완전히 병합하려면 세그먼트 수를 1로 설정합니다."
          >
            <AllBuiltInComponents.Number {...props} placeholder="숫자 지정" />
          </CustomFormRow>
        </>
      ) : null}
    </>
  );
}
