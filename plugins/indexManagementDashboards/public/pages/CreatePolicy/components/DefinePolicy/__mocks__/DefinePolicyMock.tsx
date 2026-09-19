/*
 * Copyright OpenSearch Contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { ChangeEvent } from "react";
import {
  EuiSpacer,
  EuiSmallButton,
  EuiCompressedTextArea,
  EuiText,
  // @ts-ignore
  EuiCopy,
} from "@elastic/eui";
import { ContentPanel } from "../../../../../components/ContentPanel";

interface DefinePolicyProps {
  jsonString: string;
  hasJSONError: boolean;
  onChange: (value: string) => void;
  onAutoIndent: () => void;
}

/*
 * Attempting to test EuiCodeEditor which uses react-ace was a lot more effort than seemed worthwhile
 * at the moment, so in the meantime we will mock DefinePolicy as a EuiCompressedTextArea so that we can still test
 * the functionality of CreatePolicy (minus the JSON code editor).
 * */
const DefinePolicy = ({ jsonString, onChange, onAutoIndent, hasJSONError }: DefinePolicyProps) => (
  <ContentPanel
    bodyStyles={{ padding: "initial" }}
    title="정책 정의"
    titleSize="s"
    actions={[
      <EuiCopy textToCopy={jsonString}>
        {(copy: () => void) => (
          <EuiSmallButton iconType="copyClipboard" onClick={copy}>
            복사
          </EuiSmallButton>
        )}
      </EuiCopy>,
      <EuiSmallButton iconType="editorAlignLeft" onClick={onAutoIndent} disabled={hasJSONError}>
        자동 들여쓰기
      </EuiSmallButton>,
    ]}
  >
    <div style={{ paddingLeft: "10px" }}>
      <EuiText size="xs">
        <p>JSON 구성 파일로 정책을 생성하세요. 아래 코드 편집기에서 직접 추가할 수 있습니다.</p>
      </EuiText>
    </div>
    <EuiSpacer size="s" />
    <EuiCompressedTextArea
      value={jsonString}
      onChange={(e: ChangeEvent<HTMLTextAreaElement>) => onChange(e.target.value)}
      aria-label="코드 편집기"
    />
  </ContentPanel>
);

export default DefinePolicy;
