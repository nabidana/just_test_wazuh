/*
 * Copyright OpenSearch Contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { ChangeEvent } from "react";
import { EuiCompressedFormRow, EuiCompressedFieldNumber } from "@elastic/eui";
import EuiFormCustomLabel from "../EuiFormCustomLabel";
import { ForceMergeAction, UIAction } from "../../../../../models/interfaces";
import { makeId } from "../../../../utils/helpers";
import { ActionType } from "../../utils/constants";

export default class ForceMergeUIAction implements UIAction<ForceMergeAction> {
  customDisplayText = "강제 병합";
  id: string;
  action: ForceMergeAction;
  type = ActionType.ForceMerge;

  constructor(action: ForceMergeAction, id: string = makeId()) {
    this.action = action;
    this.id = id;
  }

  content = () => `${this.action.force_merge.max_num_segments}개 세그먼트로 강제 병합`;

  clone = (action: ForceMergeAction) => new ForceMergeUIAction(action, this.id);

  isValid = () => {
    const segments = this.action.force_merge.max_num_segments;
    return !!segments && segments > 0;
  };

  render = (action: UIAction<ForceMergeAction>, onChangeAction: (action: UIAction<ForceMergeAction>) => void) => {
    const segments = action.action.force_merge.max_num_segments;
    return (
      <>
        <EuiFormCustomLabel title="최대 세그먼트 수" helpText="병합할 대상 세그먼트 수입니다." isInvalid={!this.isValid()} />
        <EuiCompressedFormRow fullWidth isInvalid={!this.isValid()} error={null}>
          <EuiCompressedFieldNumber
            fullWidth
            value={typeof segments === "undefined" ? "" : segments}
            onChange={(e: ChangeEvent<HTMLInputElement>) => {
              const maxNumSegments = e.target.valueAsNumber;
              const forceMerge = { max_num_segments: maxNumSegments };
              if (isNaN(maxNumSegments)) delete forceMerge.max_num_segments;
              onChangeAction(this.clone({ force_merge: forceMerge }));
            }}
            data-test-subj="action-render-force-merge"
          />
        </EuiCompressedFormRow>
      </>
    );
  };

  toAction = () => this.action;
}
