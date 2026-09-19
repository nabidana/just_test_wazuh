/*
 * Copyright OpenSearch Contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { EuiSmallButton, EuiCompressedFormRow, EuiDragDropContext, EuiDroppable, EuiSpacer, EuiText, DropResult } from "@elastic/eui";
import EuiFormCustomLabel from "../../components/EuiFormCustomLabel";
import DraggableItem from "../../components/DraggableItem";
import { UITransition } from "../../../../../models/interfaces";
import { getConditionContent } from "../../utils/helpers";

interface TransitionsProps {
  transitions: UITransition[];
  onClickDeleteTransition: (idx: number) => void;
  onClickEditTransition: (transition: UITransition) => void;
  onDragEndTransitions: (dropResult: DropResult) => void;
  onClickAddTransition: () => void;
}

const Transitions = ({
  transitions,
  onClickDeleteTransition,
  onClickEditTransition,
  onDragEndTransitions,
  onClickAddTransition,
}: TransitionsProps) => {
  return (
    <>
      <EuiFormCustomLabel
        title="전환"
        helpText="전환은 상태가 변경되기 위해 충족되어야 하는 조건을 정의합니다. 현재 상태의 모든 작업이 완료되면 정책은 전환 조건을 확인하기 시작합니다."
      />
      {!!transitions.length && (
        <EuiCompressedFormRow fullWidth isInvalid={false} error={null}>
          <EuiDragDropContext onDragEnd={onDragEndTransitions}>
            <EuiDroppable droppableId="STATE_TRANSITIONS_DROPPABLE_AREA">
              {transitions.map((transition, idx) => (
                <DraggableItem
                  key={transition.id}
                  id={transition.id}
                  content={getConditionContent(transition.transition)}
                  idx={idx}
                  isLast={transitions.length - 1 === idx}
                  onClickDelete={() => onClickDeleteTransition(idx)}
                  onClickEdit={() => onClickEditTransition(transition)}
                  draggableType="transition"
                />
              ))}
            </EuiDroppable>
          </EuiDragDropContext>
        </EuiCompressedFormRow>
      )}

      <EuiSpacer size="s" />

      {!transitions.length && (
        <EuiText>
          <p style={{ backgroundColor: "#F5F7FA", padding: "5px" }}>
            <span style={{ color: "grey", fontWeight: 200, fontSize: "15px" }}>추가된 전환이 없습니다.</span>
          </p>
        </EuiText>
      )}

      <EuiSpacer />

      <EuiSmallButton onClick={onClickAddTransition}>+ 전환 추가</EuiSmallButton>
    </>
  );
};

export default Transitions;
