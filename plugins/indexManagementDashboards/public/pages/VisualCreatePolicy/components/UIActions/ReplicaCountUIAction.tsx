/*
 * Copyright OpenSearch Contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { ChangeEvent } from "react";
import { EuiCompressedFormRow, EuiCompressedFieldNumber } from "@elastic/eui";
import { ReplicaCountAction, UIAction } from "../../../../../models/interfaces";
import { makeId } from "../../../../utils/helpers";
import { ActionType } from "../../utils/constants";
import EuiFormCustomLabel from "../EuiFormCustomLabel";

export default class ReplicaCountUIAction implements UIAction<ReplicaCountAction> {
  customDisplayText = "복제본 수";
  id: string;
  action: ReplicaCountAction;
  type = ActionType.ReplicaCount;

  constructor(action: ReplicaCountAction, id: string = makeId()) {
    this.action = action;
    this.id = id;
  }

  content = () => `복제본 수를 ${this.action.replica_count.number_of_replicas}(으)로 설정`;

  clone = (action: ReplicaCountAction) => new ReplicaCountUIAction(action, this.id);

  isValid = () => {
    const numberOfReplicas = this.action.replica_count.number_of_replicas;
    return typeof numberOfReplicas !== "undefined" && numberOfReplicas >= 0;
  };

  render = (action: UIAction<ReplicaCountAction>, onChangeAction: (action: UIAction<ReplicaCountAction>) => void) => {
    const replicas = action.action.replica_count.number_of_replicas;
    return (
      <>
        <EuiFormCustomLabel
          title="복제본 수"
          helpText="인덱스에 설정할 복제본 수입니다."
          isInvalid={!this.isValid()}
        />
        <EuiCompressedFormRow fullWidth isInvalid={!this.isValid()} error={null}>
          <EuiCompressedFieldNumber
            fullWidth
            value={typeof replicas === "undefined" ? "" : replicas}
            onChange={(e: ChangeEvent<HTMLInputElement>) => {
              const numberOfReplicas = e.target.valueAsNumber;
              const replicaCount = { number_of_replicas: numberOfReplicas };
              if (isNaN(numberOfReplicas)) delete replicaCount.number_of_replicas;
              onChangeAction(this.clone({ replica_count: replicaCount }));
            }}
            data-test-subj="action-render-replica-count"
          />
        </EuiCompressedFormRow>
      </>
    );
  };

  toAction = () => this.action;
}
