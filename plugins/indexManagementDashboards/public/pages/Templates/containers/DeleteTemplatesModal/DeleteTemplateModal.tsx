/*
 * Copyright OpenSearch Contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useCallback, useContext } from "react";
import { ServicesContext } from "../../../../services";
import { CoreServicesContext } from "../../../../components/core_services";
import { CoreStart } from "opensearch-dashboards/public";
import DeleteModal from "../../../../components/DeleteModal";

interface DeleteTemplateModalProps {
  selectedItems: string[];
  visible: boolean;
  onClose: () => void;
  onDelete: () => void;
}

export default function DeleteTemplateModal(props: DeleteTemplateModalProps) {
  const { onClose, visible, selectedItems, onDelete } = props;
  const services = useContext(ServicesContext);
  const coreServices = useContext(CoreServicesContext) as CoreStart;

  const onConfirm = useCallback(async () => {
    if (services) {
      const result = await services.commonService.apiCaller({
        endpoint: "transport.request",
        data: {
          path: `/_index_template/${selectedItems.join(",")}`,
          method: "DELETE",
        },
      });
      if (result && result.ok) {
        coreServices.notifications.toasts.addSuccess(`[${selectedItems.join(",")}] 삭제가 완료되었습니다.`);
        onDelete();
      } else {
        coreServices.notifications.toasts.addDanger(result?.error || "");
      }
    }
  }, [selectedItems, services, coreServices, onDelete]);

  return (
    <DeleteModal
      title="템플릿 삭제"
      tips="다음 템플릿이 영구적으로 삭제됩니다. 이 작업은 취소할 수 없습니다."
      onConfirm={onConfirm}
      onClose={onClose}
      visible={visible}
      selectedItems={selectedItems}
    />
  );
}
