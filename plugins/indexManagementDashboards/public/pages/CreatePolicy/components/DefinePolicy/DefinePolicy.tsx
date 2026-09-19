/*
 * Copyright OpenSearch Contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import {
  EuiSpacer,
  EuiSmallButton,
  // @ts-ignore
  EuiCodeEditor,
  EuiText,
  // @ts-ignore
  EuiCopy,
  EuiLink,
  EuiIcon,
  EuiPanel,
  EuiHorizontalRule,
  EuiFlexItem,
  EuiFlexGroup,
  EuiTitle,
} from "@elastic/eui";
import { ContentPanel } from "../../../../components/ContentPanel";
import "brace/theme/github";
import "brace/mode/json";
import { DarkModeConsumer } from "../../../../components/DarkMode";
import { DOCUMENTATION_URL } from "../../../../utils/constants";

interface DefinePolicyProps {
  jsonString: string;
  hasJSONError: boolean;
  onChange: (value: string) => void;
  onAutoIndent: () => void;
}

// TODO: Add custom autocomplete for Policy syntax
const DefinePolicy = ({ jsonString, onChange, onAutoIndent, hasJSONError }: DefinePolicyProps) => (
  <EuiPanel>
    <EuiFlexGroup justifyContent="spaceBetween" gutterSize="xs" alignItems="center">
      <EuiTitle size="s">
        <h2>{`정책 정의`}</h2>
      </EuiTitle>
      <EuiFlexItem grow={false}>
        <EuiFlexGroup justifyContent="spaceBetween" alignItems="center" gutterSize="s">
          <EuiFlexItem>
            <EuiCopy textToCopy={jsonString}>
              {(copy: () => void) => (
                <EuiSmallButton iconType="copyClipboard" onClick={copy}>
                  복사
                </EuiSmallButton>
              )}
            </EuiCopy>
          </EuiFlexItem>
          <EuiFlexItem>
            <EuiSmallButton iconType="editorAlignLeft" onClick={onAutoIndent} disabled={hasJSONError}>
              자동 들여쓰기
            </EuiSmallButton>
          </EuiFlexItem>
        </EuiFlexGroup>
      </EuiFlexItem>
    </EuiFlexGroup>
    <EuiHorizontalRule margin={"xs"} />
    <EuiText size="xs">
      <p>
        정책은 상태 머신(state machine)이라고 생각할 수 있습니다. "작업(Actions)"은 인덱스가 특정 상태에 있을 때 ISM이 수행하는 작업입니다.
        "전환(Transitions)"은 한 상태에서 다른 상태로 이동하는 시점을 정의합니다.{" "}
        <EuiLink href={DOCUMENTATION_URL} target="_blank" rel="noopener noreferrer">
          자세히 알아보기
        </EuiLink>
      </p>
    </EuiText>
    <EuiSpacer size="m" />
    <DarkModeConsumer>
      {(isDarkMode) => (
        <EuiCodeEditor
          mode="json"
          theme={isDarkMode ? "sense-dark" : "github"}
          width="100%"
          value={jsonString}
          onChange={onChange}
          setOptions={{ fontSize: "14px" }}
          aria-label="코드 편집기"
        />
      )}
    </DarkModeConsumer>
  </EuiPanel>
);

export default DefinePolicy;
