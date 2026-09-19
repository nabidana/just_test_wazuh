/*
 * Copyright OpenSearch Contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { EuiAccordion, EuiText, EuiPanel, EuiFlexGroup, EuiFlexItem, EuiSmallButtonIcon, EuiToolTip } from "@elastic/eui";
import "brace/theme/github";
import "brace/mode/json";
import { State as StateData } from "../../../../../models/interfaces";
import { ModalConsumer } from "../../../../components/Modal";
import ConfirmationModal from "../../../../components/ConfirmationModal";
import Badge from "../Badge";
import TransitionContent from "../Transition/TransitionContent";
import { makeId } from "../../../../utils/helpers";
import { actionRepoSingleton } from "../../utils/helpers";

interface StateProps {
  state: StateData;
  isInitialState: boolean;
  idx: number;
  onClickEditState: (state: StateData) => void;
  onClickDeleteState: (idx: number) => void;
  isReadOnly: boolean;
}

const State = ({ state, isInitialState, idx, onClickEditState, onClickDeleteState, isReadOnly = false }: StateProps) => (
  <EuiAccordion
    style={{ padding: "15px" }}
    id={state.name}
    buttonClassName="state-accordion"
    buttonContent={
      <EuiFlexGroup justifyContent="center" alignItems="center">
        <EuiFlexItem grow={false}>
          <EuiText size="s">
            <strong>{state.name}</strong>
          </EuiText>
        </EuiFlexItem>
        {isInitialState && (
          <EuiFlexItem grow={false}>
            <EuiPanel paddingSize="none">
              <EuiText size="xs" style={{ padding: "0px 10px" }}>
                초기 상태
              </EuiText>
            </EuiPanel>
          </EuiFlexItem>
        )}
        {!!state.actions?.length && (
          <EuiFlexItem grow={false}>
            <Badge text="작업" number={state.actions.length} />
          </EuiFlexItem>
        )}
        {!!state.transitions?.length && (
          <EuiFlexItem grow={false}>
            <Badge text="전환" number={state.transitions.length} />
          </EuiFlexItem>
        )}
      </EuiFlexGroup>
    }
    extraAction={
      !isReadOnly && (
        <EuiFlexGroup gutterSize="m">
          <EuiFlexItem grow={false}>
            <ModalConsumer>
              {({ onShow, onClose }) => (
                <EuiToolTip position="top" content={<p>상태 삭제</p>}>
                  <EuiSmallButtonIcon
                    iconType="trash"
                    aria-label="삭제"
                    color="danger"
                    onClick={() =>
                      onShow(ConfirmationModal, {
                        title: "상태 삭제",
                        bodyMessage: (
                          <EuiText>
                            <span>
                              "<strong>{state.name}</strong>"을(를) 영구적으로 삭제하시겠습니까? 상태를 삭제하면 모든 전환도 함께
                              삭제됩니다.
                            </span>
                          </EuiText>
                        ),
                        actionMessage: "상태 삭제",
                        actionProps: { color: "danger" },
                        modalProps: { maxWidth: 600 },
                        onAction: () => onClickDeleteState(idx),
                        onClose,
                      })
                    }
                    data-test-subj="state-delete-button"
                  />
                </EuiToolTip>
              )}
            </ModalConsumer>
          </EuiFlexItem>
          <EuiFlexItem grow={false}>
            <EuiToolTip position="top" content={<p>상태 편집</p>}>
              <EuiSmallButtonIcon iconType="pencil" aria-label="편집" color="primary" onClick={() => onClickEditState(state)} />
            </EuiToolTip>
          </EuiFlexItem>
        </EuiFlexGroup>
      )
    }
    paddingSize="l"
  >
    <EuiFlexGroup direction="column" gutterSize="l">
      <EuiFlexItem grow={false}>
        <EuiText>
          <h5>작업</h5>
        </EuiText>
      </EuiFlexItem>
      <EuiFlexItem>
        {!state.actions?.length ? (
          <EuiText size="s">작업이 없습니다. 상태를 편집하여 작업을 추가하세요.</EuiText>
        ) : (
          <EuiFlexGroup wrap>
            {state.actions.map((action, index) => (
              <EuiFlexItem grow={false} key={`${makeId()}-${index}`}>
                <EuiPanel paddingSize="s">
                  <EuiText size="s">{actionRepoSingleton.getUIActionFromData(action).content()}</EuiText>
                </EuiPanel>
              </EuiFlexItem>
            ))}
          </EuiFlexGroup>
        )}
      </EuiFlexItem>
      <EuiFlexItem grow={false}>
        <EuiText>
          <h5>전환</h5>
        </EuiText>
      </EuiFlexItem>
      <EuiFlexItem>
        {!state.transitions?.length ? (
          <EuiText size="s">전환이 없습니다. 상태를 편집하여 전환을 추가하세요.</EuiText>
        ) : (
          <EuiFlexGroup wrap>
            {state.transitions.map((transition, index) => (
              <EuiFlexItem grow={false} key={`${makeId()}-${index}`}>
                <EuiPanel paddingSize="s">
                  <TransitionContent transition={transition} />
                </EuiPanel>
              </EuiFlexItem>
            ))}
          </EuiFlexGroup>
        )}
      </EuiFlexItem>
    </EuiFlexGroup>
  </EuiAccordion>
);

export default State;
