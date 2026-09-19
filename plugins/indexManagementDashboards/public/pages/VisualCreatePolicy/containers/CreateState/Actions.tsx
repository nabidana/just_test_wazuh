/*
 * Copyright OpenSearch Contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { EuiSmallButton, EuiCompressedFormRow, EuiDragDropContext, EuiDroppable, EuiSpacer, EuiText, DropResult } from "@elastic/eui";
import DraggableItem from "../../components/DraggableItem";
import EuiFormCustomLabel from "../../components/EuiFormCustomLabel";
import { Action, UIAction } from "../../../../../models/interfaces";

interface ActionsProps {
  actions: UIAction<Action>[];
  onClickDeleteAction: (idx: number) => void;
  onClickEditAction: (action: UIAction<Action>) => void;
  onDragEndActions: (dropResult: DropResult) => void;
  onClickAddAction: () => void;
}

const Actions = ({ actions, onClickDeleteAction, onClickEditAction, onDragEndActions, onClickAddAction }: ActionsProps) => {
  return (
    <>
      <EuiFormCustomLabel title="작업" helpText="작업은 인덱스가 특정 상태에 있을 때 ISM이 수행하는 작업입니다." />

      {!!actions.length && (
        <EuiCompressedFormRow fullWidth isInvalid={false} error={null}>
          <EuiDragDropContext onDragEnd={onDragEndActions}>
            <EuiDroppable droppableId="STATE_ACTIONS_DROPPABLE_AREA">
              {actions.map((action, idx) => (
                <DraggableItem
                  key={action.id}
                  content={action.content()}
                  id={action.id}
                  idx={idx}
                  isLast={actions.length - 1 === idx}
                  onClickDelete={() => onClickDeleteAction(idx)}
                  onClickEdit={() => onClickEditAction(action)}
                  draggableType="action"
                />
              ))}
            </EuiDroppable>
          </EuiDragDropContext>
        </EuiCompressedFormRow>
      )}

      <EuiSpacer size="s" />

      {!actions.length && (
        <EuiText>
          <p style={{ backgroundColor: "#F5F7FA", padding: "5px" }}>
            <span style={{ color: "grey", fontWeight: 200, fontSize: "15px" }}>추가된 작업이 없습니다.</span>
          </p>
        </EuiText>
      )}

      <EuiSpacer />

      <EuiSmallButton onClick={onClickAddAction}>+ 작업 추가</EuiSmallButton>
    </>
  );
};

export default Actions;
