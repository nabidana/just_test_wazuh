/*
 * Copyright OpenSearch Contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { EuiText } from "@elastic/eui";

// A helper function to generate a simple string explaining how many elements a user can add to a list.
export const inputLimitText = (currCount = 0, limit = 0, singularKeyword = "", pluralKeyword = "", styleProps = {}) => {
  const difference = limit - currCount;
  const remainingLimit = `${difference === 1 ? singularKeyword : pluralKeyword} ${difference}개를 추가할 수 있습니다.`;
  const reachedLimit = `${limit === 1 ? singularKeyword : pluralKeyword} ${limit}개의 한도에 도달했습니다.`;
  return (
    <EuiText color={"subdued"} size={"xs"} style={styleProps}>
      {difference > 0 ? remainingLimit : reachedLimit}
    </EuiText>
  );
};
