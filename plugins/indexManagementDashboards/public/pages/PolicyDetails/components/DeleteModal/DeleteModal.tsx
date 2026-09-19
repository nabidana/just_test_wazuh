/*
 * Copyright OpenSearch Contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { ChangeEvent, Component, Fragment } from "react";
import { EuiConfirmModal, EuiForm, EuiCompressedFormRow, EuiCompressedFieldText, EuiOverlayMask, EuiSpacer, EuiText } from "@elastic/eui";

interface DeleteModalProps {
  policyId: string;
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
    const { policyId, closeDeleteModal, onClickDelete } = this.props;
    const { confirmDeleteText } = this.state;

    return (
      <EuiOverlayMask>
        <EuiConfirmModal
          title={
            <EuiText size="s">
              <h2>정책 삭제</h2>
            </EuiText>
          }
          onCancel={closeDeleteModal}
          onConfirm={onClickDelete}
          cancelButtonText="취소"
          confirmButtonText="정책 삭제"
          buttonColor="danger"
          defaultFocusedButton="confirm"
          confirmButtonDisabled={confirmDeleteText != "delete"}
        >
          <EuiForm>
            <Fragment>
              "<strong>{policyId}</strong>"을(를) 영구적으로 삭제하시겠습니까? 인덱스가 더 이상 이 정책으로 관리되지 않습니다.
            </Fragment>
            <EuiSpacer size="s" />
            <EuiCompressedFormRow helpText={`삭제를 확인하려면 "delete"를 입력하세요.`}>
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
