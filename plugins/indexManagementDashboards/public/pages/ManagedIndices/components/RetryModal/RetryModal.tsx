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
  EuiCompressedRadioGroup,
  EuiCompressedSelect,
  EuiSpacer,
  EuiCompressedFormRow,
  EuiText,
} from "@elastic/eui";
import { ManagedIndexItem, State } from "../../../../../models/interfaces";
import { BrowserServices } from "../../../../models/interfaces";
import { getErrorMessage } from "../../../../utils/helpers";
import { CoreServicesContext } from "../../../../components/core_services";

interface RetryModalProps {
  services: BrowserServices;
  retryItems: ManagedIndexItem[];
  onClose: () => void;
}

interface RetryModalState {
  radioIdSelected: string;
  stateSelected: string;
  stateOptions: { value: string; text: string }[];
}

enum Radio {
  Current = "current",
  State = "state",
}

export default class RetryModal extends Component<RetryModalProps, RetryModalState> {
  static contextType = CoreServicesContext;
  state = {
    radioIdSelected: Radio.Current,
    stateSelected: "",
    stateOptions: [],
  };

  componentDidMount(): void {
    this.initOptions();
  }

  initOptions = (): void => {
    const { retryItems } = this.props;
    if (!retryItems.length) return;

    // we will use this first item as the base set of states
    // if we ever encounter an item with no policy, then simply return early
    // otherwise take the intersections of all next retry item states
    // until we have a final list of common states

    const firstRetryItem = retryItems[0];
    if (!firstRetryItem.policy || !firstRetryItem.policy.states) return;
    let states = new Set(firstRetryItem.policy.states.map((state: State) => state.name));

    for (let i = 1; i < retryItems.length; i++) {
      // if we ever end up with no states just return early
      if (!states.size) return;

      const retryItem = retryItems[i];
      if (!retryItem.policy || !retryItem.policy.states) return;
      const tempStates = new Set(retryItem.policy.states.map((state: State) => state.name));

      // take intersection of two state sets
      states = new Set([...states].filter((state) => tempStates.has(state)));
    }

    const stateOptions = [...states].map((state: string) => ({ value: state, text: state }));
    this.setState({ stateOptions });
  };

  onRetry = async (): Promise<void> => {
    const { radioIdSelected, stateSelected } = this.state;
    const {
      retryItems,
      onClose,
      services: { managedIndexService },
    } = this.props;
    try {
      const indices = retryItems.map((item) => item.index);
      const state = radioIdSelected == Radio.State ? stateSelected : null;
      const response = await managedIndexService.retryManagedIndexPolicy(indices, state);
      if (response.ok) {
        const {
          response: { updatedIndices, failedIndices, failures },
        } = response;
        if (failures) {
          this.context.notifications.toasts.addDanger(
            `재시도에 실패했습니다: ${failedIndices.map((failedIndex) => `[${failedIndex.indexName}, ${failedIndex.reason}]`).join(", ")}`
          );
        }

        if (updatedIndices) {
          this.context.notifications.toasts.addSuccess(`관리 대상 인덱스 ${updatedIndices}개를 재시도했습니다`);
        }
      } else {
        this.context.notifications.toasts.addDanger(response.error);
      }
      onClose();
    } catch (err) {
      this.context.notifications.toasts.addDanger(getErrorMessage(err, "관리 대상 인덱스를 재시도하는 중 문제가 발생했습니다"));
    }
  };

  onChange = (optionId: string): void => {
    this.setState({ radioIdSelected: optionId });
  };

  onSelectChange = (e: React.ChangeEvent<HTMLSelectElement>): void => {
    this.setState({ stateSelected: e.target.value });
  };

  render() {
    const { radioIdSelected, stateSelected, stateOptions } = this.state;
    const { onClose, retryItems } = this.props;

    const currentRadio = { id: Radio.Current, label: "현재 작업부터 정책 재시도" };
    const stateRadio = { id: Radio.State, label: "선택한 상태부터 정책 재시도", disabled: !stateOptions.length };
    const radioOptions = [currentRadio, stateRadio];
    return (
      <EuiOverlayMask>
        {/*
            // @ts-ignore */}
        <EuiModal onCancel={onClose} onClose={onClose}>
          <EuiModalHeader>
            <EuiModalHeaderTitle>
              <EuiText size="s">
                <h2>정책 재시도</h2>
              </EuiText>
            </EuiModalHeaderTitle>
          </EuiModalHeader>

          <EuiModalBody>
            <EuiCompressedRadioGroup options={radioOptions} idSelected={radioIdSelected} onChange={this.onChange} />

            <EuiSpacer size="s" />
            <EuiCompressedFormRow
              label={
                <EuiText size="s">
                  <h3>시작 상태</h3>
                </EuiText>
              }
              helpText="선택한 모든 인덱스에 공통으로 있는 상태만 사용할 수 있습니다"
            >
              <EuiCompressedSelect
                disabled={radioIdSelected !== Radio.State}
                options={stateOptions}
                value={stateSelected}
                onChange={this.onSelectChange}
                aria-label="실패한 정책을 재시도할 상태 선택"
              />
            </EuiCompressedFormRow>
          </EuiModalBody>

          <EuiModalFooter>
            <EuiSmallButtonEmpty onClick={onClose} data-test-subj="retryModalCloseButton">
              닫기
            </EuiSmallButtonEmpty>

            <EuiSmallButton onClick={this.onRetry} disabled={!retryItems.length} fill data-test-subj="retryModalRetryButton">
              재시도
            </EuiSmallButton>
          </EuiModalFooter>
        </EuiModal>
      </EuiOverlayMask>
    );
  }
}
