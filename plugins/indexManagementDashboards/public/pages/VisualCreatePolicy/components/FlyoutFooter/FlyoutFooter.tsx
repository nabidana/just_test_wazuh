/*
 * Copyright OpenSearch Contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { EuiFlexGroup, EuiFlexItem, EuiSmallButtonEmpty, EuiSmallButton } from "@elastic/eui";

interface FlyoutFooterProps {
  edit: boolean;
  action: string;
  disabledAction?: boolean;
  onClickCancel: () => void;
  onClickAction: () => void;
  save?: boolean;
  restore?: boolean;
  text?: string;
}

const FlyoutFooter = ({ edit, action, disabledAction = false, onClickCancel, onClickAction, save, restore, text }: FlyoutFooterProps) => (
  <EuiFlexGroup justifyContent="flexEnd" gutterSize="s">
    <EuiFlexItem grow={false}>
      <EuiSmallButtonEmpty onClick={onClickCancel} flush="left" data-test-subj="flyout-footer-cancel-button">
        취소
      </EuiSmallButtonEmpty>
    </EuiFlexItem>
    <EuiFlexItem grow={false}>
      <EuiSmallButton disabled={disabledAction} onClick={onClickAction} fill data-test-subj="flyout-footer-action-button">
        {text
          ? text
          : restore
          ? "스냅샷 복원"
          : !save
          ? `${action === "action" ? "작업" : action === "transition" ? "전환" : action} ${edit ? "편집" : "추가"}`
          : save
          ? "저장"
          : "생성"}
      </EuiSmallButton>
    </EuiFlexItem>
  </EuiFlexGroup>
);

export default FlyoutFooter;
