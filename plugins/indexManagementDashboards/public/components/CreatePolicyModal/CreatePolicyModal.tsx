/*
 * Copyright OpenSearch Contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import {
  EuiSmallButton,
  EuiModal,
  EuiModalBody,
  EuiModalFooter,
  EuiModalHeader,
  EuiModalHeaderTitle,
  EuiOverlayMask,
  EuiSmallButtonEmpty,
  EuiFlexGroup,
  EuiFlexItem,
  EuiText,
  EuiCompressedFormRow,
  EuiCompressedRadio,
  EuiPanel,
} from "@elastic/eui";

interface CreatePolicyModalProps {
  isEdit?: boolean;
  onClose: () => void;
  onClickContinue: (visual: boolean) => void;
}

const CreatePolicyModal: React.SFC<CreatePolicyModalProps> = ({ isEdit = false, onClose, onClickContinue }) => {
  const [visual, setVisual] = useState(true);
  return (
    <EuiOverlayMask>
      {/*
      // @ts-ignore */}
      <EuiModal onCancel={onClose} onClose={onClose} maxWidth={600}>
        <EuiModalHeader>
          <EuiModalHeaderTitle>
            <EuiText size="s">
              <h2>구성 방법</h2>
            </EuiText>
          </EuiModalHeaderTitle>
        </EuiModalHeader>

        <EuiModalBody>
          <EuiFlexGroup gutterSize="m" direction="column" style={{ margin: "-4px" }}>
            <EuiFlexItem grow={false}>
              <EuiText size="s" style={{ marginTop: 0 }}>
                <p>
                  시각적 편집기를 사용하거나 JSON을 작성하여 정책을 {isEdit ? "수정" : "정의"}할 방법을 선택하세요.
                </p>
              </EuiText>
            </EuiFlexItem>
            <EuiFlexItem grow={false}>
              <EuiFlexGroup>
                <EuiFlexItem>
                  <EuiPanel className={visual ? "selected-radio-panel" : ""}>
                    <EuiCompressedFormRow
                      helpText={
                        isEdit
                          ? "시각적 편집기를 사용하여 정책을 업데이트합니다."
                          : "사전 정의된 옵션을 사용하는 시각적 편집기로 정책을 생성합니다."
                      }
                    >
                      <EuiCompressedRadio
                        id="create-policy-visual"
                        label="시각적 편집기"
                        checked={visual}
                        onChange={(e) => setVisual(e.target.checked)}
                        data-test-subj="createPolicyModalVisualRadio"
                      />
                    </EuiCompressedFormRow>
                  </EuiPanel>
                </EuiFlexItem>
                <EuiFlexItem>
                  <EuiPanel className={visual ? "" : "selected-radio-panel"}>
                    <EuiCompressedFormRow
                      helpText={isEdit ? "JSON 편집기를 사용하여 정책을 업데이트합니다." : "JSON 편집기를 사용하여 정책을 생성하거나 가져옵니다."}
                    >
                      <EuiCompressedRadio
                        id="create-policy-json"
                        label="JSON 편집기"
                        checked={!visual}
                        onChange={(e) => setVisual(!e.target.checked)}
                        data-test-subj="createPolicyModalJsonRadio"
                      />
                    </EuiCompressedFormRow>
                  </EuiPanel>
                </EuiFlexItem>
              </EuiFlexGroup>
            </EuiFlexItem>
          </EuiFlexGroup>
        </EuiModalBody>

        <EuiModalFooter>
          <EuiFlexGroup justifyContent="flexEnd">
            <EuiFlexItem grow={false}>
              <EuiSmallButtonEmpty onClick={onClose} data-test-subj="createPolicyModalCancelButton">
                취소
              </EuiSmallButtonEmpty>
            </EuiFlexItem>
            <EuiFlexItem grow={false}>
              <EuiSmallButton
                onClick={() => {
                  onClose();
                  onClickContinue(visual);
                }}
                fill
                data-test-subj="createPolicyModalContinueButton"
              >
                계속
              </EuiSmallButton>
            </EuiFlexItem>
          </EuiFlexGroup>
        </EuiModalFooter>
      </EuiModal>
    </EuiOverlayMask>
  );
};

export default CreatePolicyModal;
