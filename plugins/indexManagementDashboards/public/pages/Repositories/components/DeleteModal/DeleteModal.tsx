/*
 * Copyright OpenSearch Contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { ChangeEvent, Component } from "react";
import { EuiConfirmModal, EuiCompressedFieldText, EuiForm, EuiCompressedFormRow, EuiOverlayMask, EuiSpacer, EuiText } from "@elastic/eui";

interface DeleteModalProps {
  closeDeleteModal: (event?: any) => void;
  onClickDelete: (event?: any) => void;
  type: string;
  ids: string;
  addtionalWarning?: string;
  confirmation?: boolean;
}

interface DeleteModalState {
  confirmDeleteText: string;
}

const CONFIRM_WORD = "삭제";

const getTypeLabel = (type: string): string => {
  if (type === "snapshot") return "스냅샷";
  if (type === "repository") return "리포지토리";
  return type;
};

export default class DeleteModal extends Component<DeleteModalProps, DeleteModalState> {
  constructor(props: DeleteModalProps) {
    super(props);

    let confirmDeleteText = CONFIRM_WORD;
    if (props.confirmation) confirmDeleteText = "";
    this.state = {
      confirmDeleteText,
    };
  }

  onChange = (e: ChangeEvent<HTMLInputElement>): void => {
    this.setState({ confirmDeleteText: e.target.value });
  };

  render() {
    const { type, ids, closeDeleteModal, onClickDelete, addtionalWarning, confirmation } = this.props;
    const { confirmDeleteText } = this.state;
    const typeLabel = getTypeLabel(type);

    return (
      <EuiOverlayMask>
        <EuiConfirmModal
          title={
            <EuiText size="s">
              <h2>{typeLabel} 삭제</h2>
            </EuiText>
          }
          onCancel={closeDeleteModal}
          onConfirm={() => {
            onClickDelete();
            closeDeleteModal();
          }}
          cancelButtonText="취소"
          confirmButtonText={`${typeLabel} 삭제`}
          buttonColor="danger"
          defaultFocusedButton="confirm"
          confirmButtonDisabled={confirmDeleteText != CONFIRM_WORD}
        >
          <EuiForm>
            <p>
              "<strong>{ids}</strong>"을(를) 영구적으로 삭제하시겠습니까? {addtionalWarning}
            </p>
            <EuiSpacer size="s" />
            {!!confirmation && (
              <EuiCompressedFormRow helpText={`삭제를 확인하려면 "${CONFIRM_WORD}"를 입력하세요.`}>
                <EuiCompressedFieldText
                  value={confirmDeleteText}
                  placeholder={CONFIRM_WORD}
                  onChange={this.onChange}
                  data-test-subj="deleteTextField"
                />
              </EuiCompressedFormRow>
            )}
          </EuiForm>
        </EuiConfirmModal>
      </EuiOverlayMask>
    );
  }
}
