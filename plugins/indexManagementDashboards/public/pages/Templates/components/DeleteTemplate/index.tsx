/*
 * Copyright OpenSearch Contributors
 * SPDX-License-Identifier: Apache-2.0
 */
import React, { useState } from "react";
import { EuiSmallButtonIcon, EuiToolTip } from "@elastic/eui";
import DeleteIndexModal from "../../containers/DeleteTemplatesModal";
import { ITemplate } from "../../interface";

export interface DeleteTemplateProps {
  selectedItems: ITemplate[];
  onDelete: () => void;
}

export default function DeleteTemplate(props: DeleteTemplateProps) {
  const { selectedItems, onDelete } = props;
  const [deleteIndexModalVisible, setDeleteIndexModalVisible] = useState(false);

  const onDeleteIndexModalClose = () => {
    setDeleteIndexModalVisible(false);
  };

  return (
    <>
      <EuiToolTip content="템플릿 삭제">
        <EuiSmallButtonIcon
          aria-label="템플릿 삭제"
          color="danger"
          iconType="trash"
          onClick={() => setDeleteIndexModalVisible(true)}
          className="icon-hover-danger"
        />
      </EuiToolTip>
      <DeleteIndexModal
        selectedItems={selectedItems.map((item) => item.name)}
        visible={deleteIndexModalVisible}
        onClose={onDeleteIndexModalClose}
        onDelete={() => {
          onDeleteIndexModalClose();
          onDelete();
        }}
      />
    </>
  );
}
