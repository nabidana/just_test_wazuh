/*
 * Copyright OpenSearch Contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { forwardRef, useState, useEffect, useImperativeHandle, useRef } from "react";
import { EuiCompressedFormRow } from "@elastic/eui";
import type { MonacoDiffEditorProps } from "react-monaco-editor";
import { IJSONEditorRef } from "../JSONEditor";
import CustomFormRow from "../CustomFormRow";

export interface JSONDiffEditorProps extends Partial<MonacoDiffEditorProps> {
  value: string;
  onChange?: (value: JSONDiffEditorProps["value"]) => void;
  "data-test-subj"?: string;
  disabled?: boolean;
}

const JSONDiffEditor = forwardRef(({ value, onChange, ...others }: JSONDiffEditorProps, ref: React.Ref<IJSONEditorRef>) => {
  const [confirmModalVisible, setConfirmModalVisible] = useState(false);
  const [editorValue, setEditorValue] = useState(value);
  const valueRef = useRef(editorValue);
  valueRef.current = editorValue;

  useEffect(() => {
    setEditorValue(value);
  }, [value]);

  useImperativeHandle(ref, () => ({
    validate: () =>
      new Promise((resolve, reject) => {
        try {
          JSON.parse(valueRef.current || "{}");
          resolve("");
        } catch (e) {
          setConfirmModalVisible(true);
          reject("Format validate error");
        }
      }),
    getValue: () => valueRef.current,
    setValue: (val: string) => setEditorValue(val),
  }));

  return (
    <div>
      <textarea
        style={{ display: "none" }}
        value={editorValue}
        onChange={(e) => {
          setEditorValue(e.target.value);
        }}
        onBlur={(e) => {
          try {
            JSON.parse(e.target.value);
            onChange && onChange(e.target.value);
          } catch (e) {
            // do nothing
            setConfirmModalVisible(true);
          }
        }}
        title={`editor-is-ready-true`}
        data-test-subj={`${others["data-test-subj"] || "jsonEditor"}-valueDisplay`}
      />
      <div style={{ display: "flex", marginBottom: 12 }}>
        <div style={{ flexGrow: 1 }}>
          <CustomFormRow label="원본" helpText="원본 값">
            <></>
          </CustomFormRow>
        </div>
        <div style={{ flexGrow: 1 }}>
          <CustomFormRow label="수정됨" helpText="수정한 값">
            <></>
          </CustomFormRow>
        </div>
      </div>
      {confirmModalVisible && (
        <EuiCompressedFormRow
          fullWidth
          isInvalid={confirmModalVisible}
          error="입력하신 내용이 JSON 형식 유효성 검사를 통과하지 못했습니다. 오류가 표시된 줄을 수정해 주세요."
        >
          <></>
        </EuiCompressedFormRow>
      )}
    </div>
  );
});

export default JSONDiffEditor;
