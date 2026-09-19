/*
 * Copyright OpenSearch Contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { Component } from "react";
import {
  EuiSmallButton,
  EuiSmallButtonEmpty,
  EuiModal,
  EuiModalBody,
  EuiModalFooter,
  EuiModalHeader,
  EuiModalHeaderTitle,
  EuiOverlayMask,
  EuiCompressedFormRow,
  EuiCompressedFieldText,
  EuiText,
} from "@elastic/eui";
import { BrowserServices } from "../../../../models/interfaces";
import { getErrorMessage } from "../../../../utils/helpers";
import { CoreServicesContext } from "../../../../components/core_services";

interface RolloverAliasModalProps {
  onClose: () => void;
  services: BrowserServices;
  index: string;
}

interface RolloverAliasModalState {
  rolloverAlias: string;
}

export default class RolloverAliasModal extends Component<RolloverAliasModalProps, RolloverAliasModalState> {
  static contextType = CoreServicesContext;
  state: RolloverAliasModalState = {
    rolloverAlias: "",
  };

  onEditRolloverAlias = async (): Promise<void> => {
    const {
      onClose,
      index,
      services: { indexService },
    } = this.props;
    const { rolloverAlias } = this.state;
    try {
      const response = await indexService.editRolloverAlias(index, rolloverAlias);
      if (response.ok) {
        if (response.response.acknowledged) {
          this.context.notifications.toasts.addSuccess(`${index}의 롤오버 별칭을 수정했습니다`);
        } else {
          this.context.notifications.toasts.addDanger(`${index}의 롤오버 별칭 수정에 실패했습니다`);
        }
      } else {
        this.context.notifications.toasts.addDanger(response.error);
      }
      onClose();
    } catch (err) {
      this.context.notifications.toasts.addDanger(getErrorMessage(err, `${index}의 롤오버 별칭을 수정하는 중 문제가 발생했습니다`));
    }
  };

  onChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    this.setState({ rolloverAlias: e.target.value });
  };

  render() {
    const { rolloverAlias } = this.state;
    const { onClose } = this.props;
    return (
      <EuiOverlayMask>
        {/*
            // @ts-ignore */}
        <EuiModal onCancel={onClose} onClose={onClose}>
          <EuiModalHeader>
            <EuiModalHeaderTitle>
              <EuiText size="s">
                <h2>롤오버 별칭 수정</h2>
              </EuiText>
            </EuiModalHeaderTitle>
          </EuiModalHeader>

          <EuiModalBody>
            <EuiCompressedFormRow
              label={
                <EuiText size="s">
                  <h3>롤오버 별칭</h3>
                </EuiText>
              }
              helpText="롤오버 작업을 사용할 때는 롤오버 별칭이 필요합니다."
            >
              <EuiCompressedFieldText placeholder="롤오버 별칭" value={rolloverAlias} onChange={this.onChange} />
            </EuiCompressedFormRow>
          </EuiModalBody>

          <EuiModalFooter>
            <EuiSmallButtonEmpty onClick={onClose} data-test-subj="editRolloverAliasModalCloseButton">
              닫기
            </EuiSmallButtonEmpty>

            <EuiSmallButton
              onClick={this.onEditRolloverAlias}
              disabled={!rolloverAlias}
              fill
              data-test-subj="editRolloverAliasModalAddButton"
            >
              수정
            </EuiSmallButton>
          </EuiModalFooter>
        </EuiModal>
      </EuiOverlayMask>
    );
  }
}
