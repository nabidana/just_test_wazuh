/*
 * Copyright OpenSearch Contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { ChangeEvent } from "react";
import {
  EuiSmallButton,
  EuiText,
  EuiHorizontalRule,
  EuiFlexGroup,
  EuiFlexItem,
  EuiSpacer,
  EuiLink,
  EuiIcon,
  EuiEmptyPrompt,
  EuiCompressedFormRow,
  EuiSelect,
  EuiPanel,
  EuiTitle,
} from "@elastic/eui";
import { ContentPanel } from "../../../../components/ContentPanel";
import "brace/theme/github";
import "brace/mode/json";
import { Policy, State as StateData } from "../../../../../models/interfaces";
import { STATES_DOCUMENTATION_URL } from "../../../../utils/constants";
import State from "./State";

interface StatesProps {
  onOpenFlyout: () => void;
  policy: Policy;
  onClickEditState: (state: StateData) => void;
  onClickDeleteState: (idx: number) => void;
  onChangeDefaultState: (event: ChangeEvent<HTMLSelectElement>) => void;
  isReadOnly: boolean;
}

const States = ({ onOpenFlyout, policy, onClickEditState, onClickDeleteState, onChangeDefaultState, isReadOnly = false }: StatesProps) => {
  return (
    <EuiPanel>
      <EuiFlexGroup gutterSize="xs" alignItems="center">
        <EuiTitle size="s">
          <h2>{`상태 (${policy.states.length})`}</h2>
        </EuiTitle>
      </EuiFlexGroup>

      <EuiText color="subdued" size="xs">
        <p style={{ fontWeight: 350 }}>
          정책은 상태 머신으로 생각할 수 있습니다. "작업"은 인덱스가 특정 상태에 있을 때 ISM이 수행하는 작업입니다.
          <br />
          "전환"은 한 상태에서 다른 상태로 이동하는 시점을 정의합니다.{" "}
          <EuiLink href={STATES_DOCUMENTATION_URL} target="_blank" rel="noopener noreferrer">
            자세히 알아보기
          </EuiLink>
        </p>
      </EuiText>
      <EuiHorizontalRule margin={"xs"} />

      <div>
        {!isReadOnly && (
          <>
            <EuiCompressedFormRow style={{ maxWidth: "300px" }} isInvalid={false} error={null}>
              <EuiSelect
                compressed
                prepend="초기 상태"
                options={policy.states.map((state) => ({ text: state.name, value: state.name }))}
                value={policy.default_state}
                onChange={onChangeDefaultState}
              />
            </EuiCompressedFormRow>
            <EuiHorizontalRule margin={"xs"} />
          </>
        )}

        <EuiFlexGroup gutterSize="none" direction="column">
          {policy.states.map((state, idx) => (
            <EuiFlexItem key={state.name}>
              <State
                idx={idx}
                state={state}
                isInitialState={state.name === policy.default_state}
                onClickEditState={onClickEditState}
                onClickDeleteState={onClickDeleteState}
                isReadOnly={isReadOnly}
              />
              <EuiHorizontalRule margin="none" />
            </EuiFlexItem>
          ))}
        </EuiFlexGroup>

        {!isReadOnly &&
          (!!policy.states.length ? (
            <>
              <EuiSpacer />
              <EuiSmallButton onClick={onOpenFlyout} data-test-subj="states-add-state-button">
                상태 추가
              </EuiSmallButton>
            </>
          ) : (
            <EuiEmptyPrompt
              title={
                <EuiText>
                  <h3>상태 없음</h3>
                </EuiText>
              }
              titleSize="s"
              body={<p>이 정책에는 현재 정의된 상태가 없습니다. 인덱스 라이프사이클을 관리하려면 상태를 추가하세요.</p>}
              actions={
                <EuiSmallButton color="primary" onClick={onOpenFlyout} data-test-subj="states-add-state-button">
                  상태 추가
                </EuiSmallButton>
              }
            />
          ))}
      </div>
    </EuiPanel>
  );
};

export default States;
