/*
 * Copyright OpenSearch Contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useCallback, useContext, useEffect, useState } from "react";
import {
  EuiSmallButton,
  EuiSmallButtonEmpty,
  EuiCallOut,
  EuiCompressedFieldText,
  EuiModal,
  EuiModalBody,
  EuiModalFooter,
  EuiModalHeader,
  EuiModalHeaderTitle,
  EuiSpacer,
  EuiText,
} from "@elastic/eui";
import { CoreStart } from "opensearch-dashboards/public";
import { ServicesContext } from "../../../../services";
import { CoreServicesContext } from "../../../../components/core_services";
import { filterByMinimatch } from "../../../../../utils/helper";
import { SYSTEM_ALIAS } from "../../../../../utils/constants";
import { IAlias } from "../../interface";

interface DeleteAliasModalProps {
  selectedItems: IAlias[];
  visible: boolean;
  onClose: () => void;
  onDelete: () => void;
}

export default function DeleteAliasModal(props: DeleteAliasModalProps) {
  const [value, setValue] = useState("");
  const { onClose, visible, selectedItems, onDelete } = props;
  const services = useContext(ServicesContext);
  const coreServices = useContext(CoreServicesContext) as CoreStart;
  useEffect(() => {
    if (visible) {
      setValue("");
    }
  }, [visible]);

  const onConfirm = useCallback(async () => {
    if (services) {
      const result = await services.commonService.apiCaller({
        endpoint: "indices.deleteAlias",
        data: {
          index: selectedItems.reduce((total, current) => [...total, ...(current.indexArray || [])], [] as string[]),
          name: selectedItems.map((item) => item.alias),
        },
      });
      if (result && result.ok) {
        coreServices.notifications.toasts.addSuccess(`[${selectedItems.map((item) => item.alias).join(", ")}] 삭제 완료`);
        onDelete();
      } else {
        coreServices.notifications.toasts.addDanger(result?.error || "");
      }
    }
  }, [selectedItems, services, coreServices, onDelete]);

  if (!visible) {
    return null;
  }

  const hasSystemIndex = props.selectedItems.some((index) => filterByMinimatch(index.alias, SYSTEM_ALIAS));

  return (
    <EuiModal onClose={onClose}>
      <EuiModalHeader>
        <EuiModalHeaderTitle>
          <EuiText size="s">
            <h2>별칭 삭제</h2>
          </EuiText>
        </EuiModalHeaderTitle>
      </EuiModalHeader>

      <EuiModalBody>
        {hasSystemIndex ? (
          <>
            <EuiCallOut color="warning" size="s">
              이 별칭에는 중요한 시스템 데이터가 포함되어 있을 수 있습니다. 시스템 별칭을 삭제하면 OpenSearch가 손상될 수 있습니다.
            </EuiCallOut>
            <EuiSpacer />
          </>
        ) : null}
        <div style={{ lineHeight: 1.5 }}>
          <EuiText size="s">
            <p>다음 별칭이 영구적으로 삭제됩니다. 이 작업은 취소할 수 없습니다.</p>
          </EuiText>
          <EuiText size="s">
            <ul style={{ listStyleType: "disc", listStylePosition: "inside" }}>
              {selectedItems.map((item) => (
                <li key={item.alias}>{item.alias}</li>
              ))}
            </ul>
          </EuiText>
          <EuiSpacer />
          <EuiText color="subdued" size="s">
            작업을 확인하려면 <b style={{ color: "#000" }}>delete</b>를 입력하세요.
          </EuiText>
          <EuiCompressedFieldText
            data-test-subj="deleteInput"
            placeholder="delete"
            fullWidth
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
        </div>
      </EuiModalBody>

      <EuiModalFooter>
        <EuiSmallButtonEmpty onClick={onClose}>취소</EuiSmallButtonEmpty>
        <EuiSmallButton data-test-subj="deleteConfirmButton" onClick={onConfirm} fill color="danger" disabled={value !== "delete"}>
          삭제
        </EuiSmallButton>
      </EuiModalFooter>
    </EuiModal>
  );
}
