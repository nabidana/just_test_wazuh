/*
 * Copyright OpenSearch Contributors
 * SPDX-License-Identifier: Apache-2.0
 */
import React from "react";
import { EuiSteps } from "@elastic/eui";

interface CreateRollupStepsProps {
  step: number;
}

const setOfSteps = (step: number) => {
  return [
    {
      title: "인덱스 설정",
      children: <></>,
    },
    {
      title: "집계 및 지표 정의",
      children: <></>,
      status: step < 2 ? "disabled" : null,
    },
    {
      title: "일정 지정",
      children: <></>,
      status: step < 3 ? "disabled" : null,
    },
    {
      title: "검토 및 생성",
      children: <></>,
      status: step < 4 ? "disabled" : null,
    },
  ];
};
const CreateRollupSteps = ({ step }: CreateRollupStepsProps) => (
  <div style={{ paddingLeft: "10px" }}>
    <EuiSteps steps={setOfSteps(step)} headingElement="h6" titleSize="xs" />
  </div>
);

export default CreateRollupSteps;
