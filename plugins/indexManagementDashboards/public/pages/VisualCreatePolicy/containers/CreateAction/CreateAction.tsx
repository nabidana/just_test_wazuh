/*
 * Copyright OpenSearch Contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { Component, ChangeEvent } from "react";
import {
  EuiText,
  EuiLink,
  EuiFlyoutBody,
  EuiFlyoutFooter,
  EuiTitle,
  EuiCompressedFormRow,
  EuiCompressedSelect,
  EuiSpacer,
} from "@elastic/eui";
import { UIAction, Action } from "../../../../../models/interfaces";
import TimeoutRetrySettings from "../../components/TimeoutRetrySettings";
import { actionRepoSingleton, getActionOptions } from "../../utils/helpers";
import FlyoutFooter from "../../components/FlyoutFooter";
import EuiFormCustomLabel from "../../components/EuiFormCustomLabel";
import { ACTIONS_DOCUMENTATION_URL } from "../../../../utils/constants";

interface CreateActionProps {
  stateName: string;
  actions: UIAction<Action>[];
  editAction: UIAction<Action> | null;
  onClickCancelAction: () => void;
  onClickSaveAction: (action: UIAction<Action>) => void;
}

interface CreateActionState {
  action: UIAction<Action> | null;
}

export default class CreateAction extends Component<CreateActionProps, CreateActionState> {
  constructor(props: CreateActionProps) {
    super(props);

    this.state = {
      action: props.editAction,
    };
  }

  // We are selecting a new action from the drop down and constructing a new UIAction
  // This should be ephemeral and not change the actual list of actions yet as they might click cancel so we put it separate
  onChangeSelectedAction = (event: ChangeEvent<HTMLSelectElement>) => {
    const selectedAction = event.target.value;
    const uiAction = actionRepoSingleton.getUIAction(selectedAction);
    this.setState({ action: uiAction });
  };

  onChangeAction = (action: UIAction<Action>) => {
    this.setState({ action });
  };

  onClickSaveAction = () => {
    const { action } = this.state;
    if (!action) return;
    this.props.onClickSaveAction(action);
  };

  render() {
    const { action } = this.state;
    const { editAction } = this.props;

    const actionOptions = getActionOptions(actionRepoSingleton);

    let bodyTitle = "작업 추가";
    if (!!editAction) bodyTitle = "작업 편집";

    return (
      <>
        <EuiFlyoutBody>
          <EuiTitle size="s">
            <h3>{bodyTitle}</h3>
          </EuiTitle>

          <EuiText size="xs" style={{ fontWeight: 200 }}>
            작업은 인덱스가 특정 상태에 있을 때 ISM이 수행하는 작업입니다.{" "}
            <EuiLink href={ACTIONS_DOCUMENTATION_URL} target="_blank" rel="noopener noreferrer">
              자세히 알아보기
            </EuiLink>
          </EuiText>

          <EuiSpacer />

          <EuiFormCustomLabel title="작업 유형" helpText="이 상태에 추가할 작업을 선택하세요." />
          <EuiCompressedFormRow fullWidth isInvalid={false} error={null}>
            <EuiCompressedSelect
              fullWidth
              placeholder="작업 유형 선택"
              id="action-type"
              hasNoInitialSelection
              options={actionOptions}
              value={action?.type}
              style={{ textTransform: "capitalize" }}
              // This one below is for resetting to a new UIAction
              onChange={this.onChangeSelectedAction}
              data-test-subj="create-state-action-type"
            />
          </EuiCompressedFormRow>

          <EuiSpacer />

          {/*Below is for when the specific action renders have updated their config and want to update the UIAction*/}
          {/* So we should not be changing the id because it'll break the UI */}
          {action?.render(action, this.onChangeAction)}

          <EuiSpacer />

          {action && <TimeoutRetrySettings editAction={!!editAction} action={action} onChangeAction={this.onChangeAction} />}
        </EuiFlyoutBody>
        <EuiFlyoutFooter>
          <FlyoutFooter
            edit={!!editAction}
            action="action"
            disabledAction={!action || !action.isValid()}
            onClickCancel={this.props.onClickCancelAction}
            onClickAction={this.onClickSaveAction}
          />
        </EuiFlyoutFooter>
      </>
    );
  }
}
