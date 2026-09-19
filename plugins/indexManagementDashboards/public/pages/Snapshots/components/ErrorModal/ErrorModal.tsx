/*
 * Copyright OpenSearch Contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import { EuiModal, EuiText, EuiSmallButton, EuiModalHeader, EuiModalFooter, EuiModalBody, EuiModalHeaderTitle } from "@elastic/eui";
import React from "react";
import { RestoreError } from "../../../../models/interfaces";

interface ErrorModalProps {
  error: RestoreError;
  snapshotId: string;
  onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent> | React.KeyboardEvent<HTMLDivElement> | undefined) => void;
  onClose: (event: React.MouseEvent<HTMLButtonElement, MouseEvent> | React.KeyboardEvent<HTMLDivElement> | undefined) => void;
}

const ErrorModal = ({ onClick, error, snapshotId }: ErrorModalProps) => {
  return (
    <>
      <EuiModal onClose={onClick}>
        <EuiModalHeader color="danger" style={{ flexDirection: "column", alignItems: "flex-start" }}>
          <EuiModalHeaderTitle>
            <h1>{`스냅샷 ${snapshotId} 복원에 실패했습니다`}</h1>
          </EuiModalHeaderTitle>
        </EuiModalHeader>

        <EuiModalBody>
          <EuiText size="m" color="danger">
            {error.reason ?? error}.
          </EuiText>
        </EuiModalBody>

        <EuiModalFooter>
          <EuiSmallButton onClick={onClick} fill>
            닫기
          </EuiSmallButton>
        </EuiModalFooter>
      </EuiModal>
    </>
  );
};

export default ErrorModal;
