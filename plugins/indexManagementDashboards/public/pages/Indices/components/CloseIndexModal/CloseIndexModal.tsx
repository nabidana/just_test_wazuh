/*
 * Copyright OpenSearch Contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useState } from "react";
import {
  EuiSmallButton,
  EuiSmallButtonEmpty,
  EuiCompressedFieldText,
  EuiModal,
  EuiModalBody,
  EuiModalFooter,
  EuiModalHeader,
  EuiModalHeaderTitle,
  EuiSpacer,
  EuiCallOut,
  EuiText,
} from "@elastic/eui";
import { filterByMinimatch } from "../../../../../utils/helper";
import { SYSTEM_INDEX } from "../../../../../utils/constants";

interface CloseIndexModalProps {
  selectedItems: string[];
  visible: boolean;
  onClose: () => void;
  onConfirm: () => void;
}

export default function CloseIndexModal(props: CloseIndexModalProps) {
  const [value, setValue] = useState("");
  const { onClose, onConfirm, visible, selectedItems } = props;
  useEffect(() => {
    if (visible) {
      setValue("");
    }
  }, [visible]);
  if (!visible) {
    return null;
  }

  const showWarning = selectedItems.filter((item) => filterByMinimatch(item as string, SYSTEM_INDEX)).length > 0;

  return (
    <EuiModal onClose={onClose}>
      <EuiModalHeader>
        <EuiModalHeaderTitle>
          <EuiText size="s">
            <h2>인덱스 닫기</h2>
          </EuiText>
        </EuiModalHeaderTitle>
      </EuiModalHeader>

      <EuiModalBody>
        <>
          <EuiCallOut color="warning" size="s" hidden={!showWarning}>
            이 인덱스에는 중요한 시스템 데이터가 포함되어 있을 수 있습니다. 시스템 인덱스를 닫으면 OpenSearch가 손상될 수 있습니다.
            <EuiSpacer />
          </EuiCallOut>
        </>
        <div style={{ lineHeight: 1.5 }}>
          <EuiText size="s">
            <p>다음 인덱스가 닫힙니다. 닫힌 인덱스에는 문서를 색인하거나 검색할 수 없습니다.</p>
          </EuiText>
          <EuiText size="s">
            <ul style={{ listStyleType: "disc", listStylePosition: "inside" }}>
              {selectedItems.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </EuiText>
          <EuiSpacer />
          <EuiText color="subdued" size="s">
            작업을 확인하려면 <b style={{ color: "#000" }}>close</b>를 입력하세요.
          </EuiText>
          <EuiCompressedFieldText placeholder="close" fullWidth value={value} onChange={(e) => setValue(e.target.value)} />
        </div>
      </EuiModalBody>

      <EuiModalFooter>
        <EuiSmallButtonEmpty data-test-subj="Close Cancel button" onClick={onClose}>
          취소
        </EuiSmallButtonEmpty>
        <EuiSmallButton data-test-subj="Close Confirm button" onClick={onConfirm} fill disabled={value !== "close"}>
          닫기
        </EuiSmallButton>
      </EuiModalFooter>
    </EuiModal>
  );
}
