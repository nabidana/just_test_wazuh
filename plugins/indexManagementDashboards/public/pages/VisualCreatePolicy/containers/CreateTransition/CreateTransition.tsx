/*
 * Copyright OpenSearch Contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { Component } from "react";
import {
  EuiText,
  EuiLink,
  EuiIcon,
  EuiFlyoutBody,
  EuiFlyoutFooter,
  EuiTitle,
  EuiCompressedFormRow,
  EuiSpacer,
  EuiCompressedComboBox,
} from "@elastic/eui";
import { Transition as ITransition, UITransition } from "../../../../../models/interfaces";
import FlyoutFooter from "../../components/FlyoutFooter";
import EuiFormCustomLabel from "../../components/EuiFormCustomLabel";
import { makeId } from "../../../../utils/helpers";
import Transition from "../../components/Transition";
import { TRANSITION_DOCUMENTATION_URL } from "../../../../utils/constants";

interface CreateTransitionProps {
  editTransition: UITransition | null;
  onCloseCreateTransition: () => void;
  onClickSaveTransition: (uiTransition: UITransition) => void;
  stateOptions: string[];
}

interface CreateTransitionState {
  uiTransition: UITransition | null;
}

export default class CreateTransition extends Component<CreateTransitionProps, CreateTransitionState> {
  constructor(props: CreateTransitionProps) {
    super(props);

    let uiTransition = props.editTransition;

    if (!uiTransition) {
      uiTransition = {
        transition: {
          state_name: "",
        },
        id: makeId(),
      };
    }

    this.state = { uiTransition };
  }

  onChange = (selectedOptions: { label: string }[]) => {
    // We should only get back either 0 or 1 options.
    const destinationState = selectedOptions.pop()?.label || "";
    const { uiTransition } = this.state;
    if (uiTransition == null) return;
    const newTransition: ITransition = { ...uiTransition.transition, state_name: destinationState };
    const newUiTransition = { ...uiTransition, transition: newTransition };
    this.setState({ uiTransition: newUiTransition });
  };

  onCreateOption = (searchValue: string) => {
    const normalizedSearchValue = searchValue.trim().toLowerCase();

    if (!normalizedSearchValue) {
      return;
    }

    const { uiTransition } = this.state;
    if (uiTransition == null) return;
    const newTransition: ITransition = { ...uiTransition.transition, state_name: normalizedSearchValue };
    const newUiTransition = { ...uiTransition, transition: newTransition };
    this.setState({ uiTransition: newUiTransition });
  };

  onChangeTransition = (uiTransition: UITransition) => {
    this.setState({ uiTransition });
  };

  onClickSaveTransition = () => {
    const { uiTransition } = this.state;
    if (!uiTransition) return;
    this.props.onClickSaveTransition(uiTransition);
  };

  render() {
    const { editTransition, onCloseCreateTransition, stateOptions } = this.props;
    const { uiTransition } = this.state;
    let title = "전환 추가";
    if (!!editTransition) title = "전환 편집";
    return (
      <>
        <EuiFlyoutBody>
          <EuiTitle size="s">
            <h3>{title}</h3>
          </EuiTitle>

          <EuiText size="xs" style={{ fontWeight: 200 }}>
            전환은 상태가 변경되기 위해 충족되어야 하는 조건을 정의합니다. 현재 상태의 모든 작업이 완료되면 정책은 전환 조건을 확인하기
            시작합니다.{" "}
            <EuiLink href={TRANSITION_DOCUMENTATION_URL} target="_blank" rel="noopener noreferrer">
              자세히 알아보기
            </EuiLink>
          </EuiText>

          <EuiSpacer />

          <EuiFormCustomLabel
            title="대상 상태"
            helpText="아직 존재하지 않는 상태를 입력하는 경우 정책을 생성하기 전에 해당 상태를 먼저 생성해야 합니다."
          />

          <EuiCompressedFormRow fullWidth isInvalid={false} error={null}>
            <EuiCompressedComboBox
              fullWidth
              isClearable={false}
              placeholder="옵션 하나를 선택하세요"
              singleSelection={{ asPlainText: true }}
              options={stateOptions.map((state) => ({ label: state }))}
              selectedOptions={[{ label: uiTransition?.transition.state_name || "" }]}
              onChange={this.onChange}
              onCreateOption={this.onCreateOption}
              customOptionText="{searchValue} 상태 추가"
            />
          </EuiCompressedFormRow>

          <EuiSpacer />

          {!!uiTransition && <Transition uiTransition={uiTransition} onChangeTransition={this.onChangeTransition} />}
        </EuiFlyoutBody>
        <EuiFlyoutFooter>
          <FlyoutFooter
            edit={!!editTransition}
            action="transition"
            onClickCancel={onCloseCreateTransition}
            onClickAction={this.onClickSaveTransition}
          />
        </EuiFlyoutFooter>
      </>
    );
  }
}
