/*
 * Copyright OpenSearch Contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { EuiText } from "@elastic/eui";
import { Transition } from "../../../../../models/interfaces";
import { getConditionContent } from "../../utils/helpers";

interface TransitionContentProps {
  transition: Transition;
}

const TransitionContent = ({ transition }: TransitionContentProps) => (
  <EuiText size="s">
    <dl>
      <dt>대상 상태</dt>
      <dd>{transition.state_name}</dd>
      <dt>전환 트리거 로직</dt>
      <dd>{getConditionContent(transition)}</dd>
    </dl>
  </EuiText>
);

export default TransitionContent;
