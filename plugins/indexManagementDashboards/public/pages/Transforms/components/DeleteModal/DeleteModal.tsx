/*
 * Copyright OpenSearch Contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { ChangeEvent, Component, Fragment } from "react";
import { EuiConfirmModal, EuiForm, EuiCompressedFormRow, EuiCompressedFieldText, EuiOverlayMask, EuiSpacer, EuiText } from "@elastic/eui";

// TODO: Merge with Rollup to create generic component
interface DeleteModalProps {
  item: string;
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
    const { item, closeDeleteModal, onClickDelete } = this.props;
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
                <p>
                  <strong>{item}</strong>을(를) 삭제하면 이후 예정된 모든 실행이 취소됩니다. 그러나 대상 인덱스와 그 안의 데이터는 그대로
                  유지됩니다.
                </p>
              </EuiText>
            </Fragment>
            <EuiSpacer size="s" />
            <EuiCompressedFormRow helpText="삭제를 확인하려면 텍스트 필드에 delete를 입력하십시오">
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
