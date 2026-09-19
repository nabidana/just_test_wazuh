/*
 * Copyright OpenSearch Contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import { EuiEmptyPrompt, EuiPanel, EuiText, EuiIcon } from "@elastic/eui";
import React from "react";

interface PreviewEmptyPromptProps {
  isReadOnly: boolean;
}

export default function PreviewEmptyPrompt({ isReadOnly }: PreviewEmptyPromptProps) {
  return (
    <EuiPanel>
      {isReadOnly ? (
        <EuiEmptyPrompt
          title={
            <EuiText size="m">
              <h4> 미리보기를 사용할 수 없습니다 </h4>
            </EuiText>
          }
        />
      ) : (
        <EuiEmptyPrompt
          title={
            <EuiText size="s">
              <h4> 선택된 필드가 없습니다 </h4>
            </EuiText>
          }
          body={
            <EuiText size="s">
              <p>
                {" "}
                위 표에서 필드 이름 옆에 있는 <EuiIcon type="plusInCircleFilled" />를 클릭하여 변환할 필드를 선택하세요.
              </p>
            </EuiText>
          }
        />
      )}
    </EuiPanel>
  );
}
