/*
 * Copyright OpenSearch Contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { ChangeEvent } from "react";
import { EuiCompressedFormRow, EuiCompressedFieldNumber, EuiCompressedFieldText, EuiSpacer } from "@elastic/eui";
import { RolloverAction, UIAction } from "../../../../../models/interfaces";
import { makeId } from "../../../../utils/helpers";
import { ActionType } from "../../utils/constants";
import EuiFormCustomLabel from "../EuiFormCustomLabel";

export default class RolloverUIAction implements UIAction<RolloverAction> {
  customDisplayText = "롤오버";
  id: string;
  action: RolloverAction;
  type = ActionType.Rollover;

  constructor(action: RolloverAction, id: string = makeId()) {
    this.action = action;
    this.id = id;
  }

  content = () => `롤오버`;

  clone = (action: RolloverAction) => new RolloverUIAction(action, this.id);

  isValid = () => {
    const minIndexAge = this.action.rollover.min_index_age;
    const minDocCount = this.action.rollover.min_doc_count;
    const minSize = this.action.rollover.min_size;
    const minPrimaryShardSize = this.action.rollover.min_primary_shard_size;
    if (typeof minDocCount !== "undefined") {
      if (minDocCount <= 0) return false;
    }

    // for minIndexAge and minSize and minPrimaryShardSize just let them through and backend will fail the validation
    // TODO -> add validation for index age and size.. but involves replicating checks for byte strings and time strings
    return true;
  };

  render = (action: UIAction<RolloverAction>, onChangeAction: (action: UIAction<RolloverAction>) => void) => {
    const rollover = action.action.rollover;
    return (
      <>
        <EuiFormCustomLabel
          title="최소 인덱스 기간"
          helpText={`인덱스를 롤오버하는 데 필요한 최소 기간입니다. "5h" 또는 "1d"와 같은 시간 단위를 사용할 수 있습니다.`}
          isInvalid={!this.isValid()}
        />
        <EuiCompressedFormRow fullWidth isInvalid={!this.isValid()} error={null}>
          <EuiCompressedFieldText
            fullWidth
            value={rollover.min_index_age || ""}
            onChange={(e: ChangeEvent<HTMLInputElement>) => {
              const minIndexAge = e.target.value;
              const rollover = { ...action.action.rollover };
              if (minIndexAge) rollover.min_index_age = minIndexAge;
              else delete rollover.min_index_age;
              onChangeAction(this.clone({ rollover }));
            }}
            data-test-subj="action-render-rollover-min-index-age"
          />
        </EuiCompressedFormRow>
        <EuiSpacer size="s" />
        <EuiFormCustomLabel
          title="최소 문서 수"
          helpText="인덱스를 롤오버하는 데 필요한 최소 문서 수입니다."
          isInvalid={!this.isValid()}
        />
        <EuiCompressedFormRow fullWidth isInvalid={false} error={null}>
          <EuiCompressedFieldNumber
            fullWidth
            value={typeof rollover.min_doc_count === "undefined" ? "" : rollover.min_doc_count}
            onChange={(e: ChangeEvent<HTMLInputElement>) => {
              const minDocCount = e.target.valueAsNumber;
              const rollover = { ...action.action.rollover };
              if (!isNaN(minDocCount)) rollover.min_doc_count = minDocCount;
              else delete rollover.min_doc_count;
              onChangeAction(this.clone({ rollover }));
            }}
            data-test-subj="action-render-rollover-min-doc-count"
          />
        </EuiCompressedFormRow>
        <EuiSpacer size="s" />
        <EuiFormCustomLabel
          title="최소 인덱스 크기"
          helpText={`인덱스를 롤오버하는 데 필요한 프라이머리 샤드 전체 스토리지의 최소 크기입니다. "500mb" 또는 "50gb"와 같은 바이트 단위를 사용할 수 있습니다.`}
          isInvalid={!this.isValid()}
        />
        <EuiCompressedFormRow fullWidth isInvalid={false} error={null}>
          <EuiCompressedFieldText
            fullWidth
            value={rollover.min_size || ""}
            onChange={(e: ChangeEvent<HTMLInputElement>) => {
              const minSize = e.target.value;
              const rollover = { ...action.action.rollover };
              if (minSize) rollover.min_size = minSize;
              else delete rollover.min_size;
              onChangeAction(this.clone({ rollover }));
            }}
            data-test-subj="action-render-rollover-min-size"
          />
        </EuiCompressedFormRow>
        <EuiSpacer size="s" />
        <EuiFormCustomLabel
          title="최소 프라이머리 샤드 크기"
          helpText={`인덱스를 롤오버하는 데 필요한 단일 프라이머리 샤드의 최소 크기입니다. "500mb" 또는 "50gb"와 같은 바이트 단위를 사용할 수 있습니다.`}
          isInvalid={!this.isValid()}
        />
        <EuiCompressedFormRow fullWidth isInvalid={false} error={null}>
          <EuiCompressedFieldText
            fullWidth
            value={rollover.min_primary_shard_size || ""}
            onChange={(e: ChangeEvent<HTMLInputElement>) => {
              const minPrimaryShardSize = e.target.value;
              const rollover = { ...action.action.rollover };
              if (minPrimaryShardSize) rollover.min_primary_shard_size = minPrimaryShardSize;
              else delete rollover.min_primary_shard_size;
              onChangeAction(this.clone({ rollover }));
            }}
            data-test-subj="action-render-rollover-min-primary-shard-size"
          />
        </EuiCompressedFormRow>
      </>
    );
  };

  toAction = () => this.action;
}
