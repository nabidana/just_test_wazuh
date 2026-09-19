/*
 * Copyright OpenSearch Contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useCallback, useContext } from "react";
import { CoreStart } from "opensearch-dashboards/public";
import { ServicesContext } from "../../../../services";
import { CoreServicesContext } from "../../../../components/core_services";
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
          path: `/_data_stream/${selectedItems.join(",")}`,
          method: "DELETE",
        },
      });
      if (result && result.ok) {
        coreServices.notifications.toasts.addSuccess(`[${selectedItems.join(",")}] 삭제 완료`);
        onDelete();
      } else {
        coreServices.notifications.toasts.addDanger(result?.error || "");
      }
    }
  }, [selectedItems, services, coreServices, onDelete]);

  return (
    <DeleteModal
      title="데이터 스트림 삭제"
      tips="다음 데이터 스트림이 영구적으로 삭제됩니다. 데이터 스트림에 속한 백업 인덱스도 함께 삭제됩니다."
      onConfirm={onConfirm}
      onClose={onClose}
      visible={visible}
      selectedItems={selectedItems}
    />
  );
}
