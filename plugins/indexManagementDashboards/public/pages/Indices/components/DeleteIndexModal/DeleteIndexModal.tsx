/*
 * Copyright OpenSearch Contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useState } from "react";
import {
  EuiSmallButton,
  EuiSmallButtonEmpty,
  EuiCallOut,
  EuiCompressedFieldText,
  EuiModal,
  EuiModalBody,
  EuiModalFooter,
  EuiModalHeader,
  EuiModalHeaderTitle,
  EuiSpacer,
  EuiText,
} from "@elastic/eui";
import { filterByMinimatch } from "../../../../../utils/helper";
import { SYSTEM_INDEX } from "../../../../../utils/constants";

interface DeleteIndexModalProps {
  selectedItems: string[];
  visible: boolean;
  onClose: () => void;
  onConfirm: () => void;
}

export default function DeleteIndexModal(props: DeleteIndexModalProps) {
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

  const hasSystemIndex = props.selectedItems.some((index) => filterByMinimatch(index, SYSTEM_INDEX));

  return (
    <EuiModal onClose={onClose}>
      <EuiModalHeader>
        <EuiModalHeaderTitle>
          {" "}
          <EuiText size="s">
            {" "}
            <h2>인덱스 삭제</h2>{" "}
          </EuiText>{" "}
        </EuiModalHeaderTitle>
      </EuiModalHeader>

      <EuiModalBody>
        {hasSystemIndex ? (
          <>
            <EuiCallOut color="warning" size="s">
              이 인덱스에는 중요한 시스템 데이터가 포함되어 있을 수 있습니다. 시스템 인덱스를 삭제하면 OpenSearch가 손상될 수 있습니다.
            </EuiCallOut>
            <EuiSpacer />
          </>
        ) : null}
        <div style={{ lineHeight: 1.5 }}>
          <EuiText size="s">
            <p>다음 인덱스가 영구적으로 삭제됩니다. 이 작업은 취소할 수 없습니다.</p>
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
            작업을 확인하려면 <b style={{ color: "#000" }}>delete</b>를 입력하세요.
          </EuiText>
          <EuiCompressedFieldText placeholder="delete" fullWidth value={value} onChange={(e) => setValue(e.target.value)} />
        </div>
      </EuiModalBody>

      <EuiModalFooter>
        <EuiSmallButtonEmpty onClick={onClose}>취소</EuiSmallButtonEmpty>
        <EuiSmallButton data-test-subj="Delete Confirm button" onClick={onConfirm} fill color="danger" disabled={value !== "delete"}>
          삭제
        </EuiSmallButton>
      </EuiModalFooter>
    </EuiModal>
  );
}
