/*
 * Copyright OpenSearch Contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { ChangeEvent } from "react";
import { EuiCompressedFormRow, EuiCompressedFieldText, EuiSpacer } from "@elastic/eui";
import { SnapshotAction, UIAction } from "../../../../../models/interfaces";
import { makeId } from "../../../../utils/helpers";
import { ActionType } from "../../utils/constants";
import EuiFormCustomLabel from "../EuiFormCustomLabel";

export default class SnapshotUIAction implements UIAction<SnapshotAction> {
  customDisplayText = "스냅샷";
  id: string;
  action: SnapshotAction;
  type = ActionType.Snapshot;

  constructor(action: SnapshotAction, id: string = makeId()) {
    this.action = action;
    this.id = id;
  }

  content = () => `스냅샷`;

  clone = (action: SnapshotAction) => new SnapshotUIAction(action, this.id);

  isValid = () => {
    return !!this.action.snapshot.snapshot && !!this.action.snapshot.repository;
  };

  render = (action: UIAction<SnapshotAction>, onChangeAction: (action: UIAction<SnapshotAction>) => void) => {
    return (
      <>
        <EuiFormCustomLabel
          title="리포지토리"
          helpText="네이티브 스냅샷 API 작업을 통해 등록한 리포지토리 이름입니다."
          isInvalid={!this.isValid()}
        />
        <EuiCompressedFormRow fullWidth isInvalid={!this.isValid()} error={null}>
          <EuiCompressedFieldText
            fullWidth
            value={(action.action as SnapshotAction).snapshot.repository}
            onChange={(e: ChangeEvent<HTMLInputElement>) => {
              const repository = e.target.value;
              onChangeAction(
                this.clone({
                  snapshot: {
                    ...action.action.snapshot,
                    repository,
                  },
                })
              );
            }}
            data-test-subj="action-render-snapshot-repository"
          />
        </EuiCompressedFormRow>
        <EuiSpacer size="s" />
        <EuiFormCustomLabel title="스냅샷" helpText="스냅샷의 이름입니다." isInvalid={!this.isValid()} />
        <EuiCompressedFormRow fullWidth isInvalid={!this.isValid()} error={null}>
          <EuiCompressedFieldText
            fullWidth
            value={(action.action as SnapshotAction).snapshot.snapshot}
            onChange={(e: ChangeEvent<HTMLInputElement>) => {
              const snapshot = e.target.value;
              onChangeAction(
                this.clone({
                  snapshot: {
                    ...action.action.snapshot,
                    snapshot,
                  },
                })
              );
            }}
            data-test-subj="action-render-snapshot-snapshot"
          />
        </EuiCompressedFormRow>
      </>
    );
  };

  toAction = () => this.action;
}
