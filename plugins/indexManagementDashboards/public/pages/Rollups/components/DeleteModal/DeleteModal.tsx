/*
 * Copyright OpenSearch Contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { ChangeEvent, Component, Fragment } from "react";
import { EuiConfirmModal, EuiForm, EuiCompressedFormRow, EuiCompressedFieldText, EuiOverlayMask, EuiSpacer, EuiText } from "@elastic/eui";

interface DeleteModalProps {
  rollupId: string;
  closeDeleteModal: (event?: any) => void;
  onClickDelete: (event?: any) => void;
}

interface DeleteModalState {
  confirmDeleteText: string;
}

export default class DeleteModal extends Component<DeleteModalProps, DeleteModalState> {
  state = { confirmDeleteText: "" };

  onChange = (e: ChangeEvent<HTMLInputElement>): void => {
    this.setState({ confirmDeleteText: e.target.value });
  };

  render() {
    const { rollupId, closeDeleteModal, onClickDelete } = this.props;
    const { confirmDeleteText } = this.state;

    return (
      <EuiOverlayMask>
        <EuiConfirmModal
          title={
            <EuiText size="s">
              <h2>작업 삭제</h2>
            </EuiText>
          }
          onCancel={closeDeleteModal}
          onConfirm={onClickDelete}
          cancelButtonText="취소"
          confirmButtonText="삭제"
          buttonColor="danger"
          defaultFocusedButton="confirm"
          confirmButtonDisabled={confirmDeleteText != "delete"}
        >
          <EuiForm>
            <Fragment>
              <EuiText size="s">
                "<strong>{rollupId}</strong>"을 삭제하면 앞으로 예정된 모든 롤업 실행이 취소됩니다. 단, 대상 인덱스는 그대로 유지됩니다.
              </EuiText>
            </Fragment>
            <EuiSpacer size="s" />
            <EuiCompressedFormRow helpText="삭제를 확인하려면 텍스트 필드에 delete를 입력하세요">
              <EuiCompressedFieldText
                value={confirmDeleteText}
                placeholder="delete"
                onChange={this.onChange}
                data-test-subj="deleteTextField"
              />
            </EuiCompressedFormRow>
          </EuiForm>
        </EuiConfirmModal>
      </EuiOverlayMask>
    );
  }
}
