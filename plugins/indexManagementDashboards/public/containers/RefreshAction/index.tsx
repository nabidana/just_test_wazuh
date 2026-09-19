/*
 * Copyright OpenSearch Contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useCallback, useContext, useEffect, useState } from "react";
import {
  EuiSmallButton,
  EuiSmallButtonEmpty,
  EuiCallOut,
  EuiModal,
  EuiModalBody,
  EuiModalFooter,
  EuiModalHeader,
  EuiModalHeaderTitle,
  EuiSpacer,
  EuiText,
} from "@elastic/eui";
import { CoreStart } from "opensearch-dashboards/public";
import { ServicesContext } from "../../services";
import { CoreServicesContext } from "../../components/core_services";
import { filterBlockedItems } from "../../utils/helpers";
import { INDEX_OP_BLOCKS_TYPE, INDEX_OP_TARGET_TYPE } from "../../utils/constants";
import { CatIndex, DataStream } from "../../../server/models/interfaces";
import { IAlias } from "../../pages/Aliases/interface";

interface RefreshActionModalProps {
  selectedItems: IAlias[] | DataStream[] | CatIndex[];
  visible: boolean;
  onClose: () => void;
  type: INDEX_OP_TARGET_TYPE;
}

const wordingMap = {
  [INDEX_OP_TARGET_TYPE.ALIAS]: "별칭",
  [INDEX_OP_TARGET_TYPE.DATA_STREAM]: "데이터 스트림",
  [INDEX_OP_TARGET_TYPE.INDEX]: "인덱스",
};

const getClosedTypeWording = (props: { type: INDEX_OP_TARGET_TYPE }) => {
  return props.type === INDEX_OP_TARGET_TYPE.INDEX ? "해당 인덱스가" : `각 ${wordingMap[props.type]}에 포함된 하나 이상의 인덱스가`;
};

export default function RefreshActionModal<T>(props: RefreshActionModalProps) {
  const { onClose, visible, selectedItems, type } = props;
  const services = useContext(ServicesContext);
  const coreServices = useContext(CoreServicesContext) as CoreStart;
  const [unBlockedItems, setUnBlockedItems] = useState([] as string[]);
  const [blockedItems, setBlockedItems] = useState([] as string[]);
  const [loading, setLoading] = useState(true);

  /**
   * generate wordings here
   */
  let unblockedWording = "";
  let blockedWording = "";
  let toastWording = "";
  if (unBlockedItems.length === 1) {
    unblockedWording = `다음 ${wordingMap[type]}`;
    toastWording = `${wordingMap[type]} [${unBlockedItems.join(", ")}]이(가) 새로고침되었습니다.`;
  } else if (unBlockedItems.length > 1) {
    unblockedWording = `다음 ${wordingMap[type]}`;
    toastWording = `${wordingMap[type]} ${unBlockedItems.length}개 [${unBlockedItems.join(", ")}]가 새로고침되었습니다.`;
  }

  if (blockedItems.length === 1) {
    blockedWording = `다음 ${wordingMap[type]}은(는) ${getClosedTypeWording({
      type,
    })} 닫혀 있거나 적색 상태이므로 새로고침할 수 없습니다.`;
  } else {
    blockedWording = `다음 ${wordingMap[type]}은(는) ${getClosedTypeWording({
      type,
    })} 닫혀 있거나 적색 상태이므로 새로고침할 수 없습니다.`;
  }

  if (!selectedItems.length && !blockedItems.length) {
    toastWording = `열려 있는 모든 인덱스가 새로고침되었습니다.`;
  }

  useEffect(() => {
    if (!!services && visible) {
      const filterRedStatus = true;
      filterBlockedItems(services, selectedItems, INDEX_OP_BLOCKS_TYPE.CLOSED, type, filterRedStatus)
        .then((filteredStreamsResult) => {
          const { blockedItems, unBlockedItems } = filteredStreamsResult;
          setBlockedItems(blockedItems);
          setUnBlockedItems(unBlockedItems);

          if (!selectedItems.length) {
            if (!blockedItems.length) {
              setLoading(false);
            } else if (blockedItems.length === 1) {
              coreServices.notifications.toasts.addDanger({
                title: `인덱스를 새로고침할 수 없습니다.`,
                text: `[${blockedItems.join(", ")}]이(가) 적색 상태이므로 열려 있는 모든 인덱스를 새로고침할 수 없습니다.`,
              });
              onClose();
            } else {
              coreServices.notifications.toasts.addDanger({
                title: `인덱스를 새로고침할 수 없습니다.`,
                text: `[${blockedItems.join(", ")}]이(가) 적색 상태이므로 열려 있는 모든 인덱스를 새로고침할 수 없습니다.`,
              });
              onClose();
            }
          } else if (selectedItems.length != 0 && unBlockedItems.length == 0) {
            coreServices.notifications.toasts.addDanger({
              title: `${wordingMap[type]}을(를) 새로고침할 수 없습니다.`,
              text: `선택한 ${wordingMap[type]}은(는) ${getClosedTypeWording({
                type,
              })} 닫혀 있거나 적색 상태이므로 새로고침할 수 없습니다.`,
            });
            onClose();
          } else {
            setLoading(false);
          }
        })
        .catch(() => {
          /**
           * It's not a critical error although if it fails unlikely other call will succeed,
           * set unblocked items to all, so we won't filter any of the selected items.
           * */
          if (selectedItems.length > 0) {
            let unBlocked;
            switch (type) {
              case INDEX_OP_TARGET_TYPE.ALIAS:
                unBlocked = (selectedItems as IAlias[]).map((item) => item.alias);
                break;
              case INDEX_OP_TARGET_TYPE.DATA_STREAM:
                unBlocked = (selectedItems as DataStream[]).map((item) => item.name);
                break;
              default:
                unBlocked = (selectedItems as CatIndex[]).map((item) => item.index);
                break;
            }
            setBlockedItems([]);
            setUnBlockedItems(unBlocked);
          }
          setLoading(false);
        });
    } else {
      setUnBlockedItems([]);
      setBlockedItems([]);
      setLoading(true);
    }
  }, [visible, services, type, selectedItems, onClose]);

  const onConfirm = useCallback(async () => {
    if (!!services) {
      const result = await services.commonService.apiCaller({
        endpoint: "indices.refresh",
        data: {
          index: unBlockedItems.join(","),
        },
      });
      if (result && result.ok) {
        coreServices.notifications.toasts.addSuccess(toastWording);
        onClose();
      } else {
        coreServices.notifications.toasts.addDanger(result?.error || "");
      }
    }
  }, [unBlockedItems, toastWording, services, coreServices, onClose]);

  if (!visible || loading) {
    return null;
  }

  return (
    <EuiModal onClose={onClose}>
      <EuiModalHeader>
        <EuiModalHeaderTitle>
          <EuiText size="s">
            <h2>{wordingMap[type]} 새로고침</h2>
          </EuiText>
        </EuiModalHeaderTitle>
      </EuiModalHeader>

      <EuiModalBody>
        <div style={{ lineHeight: 1.5 }}>
          {selectedItems.length === 0 && blockedItems.length === 0 && (
            <>
              <EuiText size="s">
                <p>열려 있는 모든 인덱스가 새로고침됩니다.</p>
              </EuiText>
            </>
          )}
          {!!unBlockedItems.length && (
            <>
              <EuiText size="s">
                <p>{unblockedWording}이(가) 새로고침됩니다.</p>
              </EuiText>
              <EuiText size="s">
                <ul style={{ listStyleType: "disc", listStylePosition: "inside" }}>
                  {unBlockedItems.map((item) => (
                    <li key={item} data-test-subj={`UnblockedItem-${item}`}>
                      {item}
                    </li>
                  ))}
                </ul>
              </EuiText>
            </>
          )}
          <EuiSpacer />
          {!!blockedItems.length && (
            <>
              <EuiCallOut color="warning" iconType="alert" size="s" title={`${blockedWording}`}>
                <p />
                <ul style={{ listStyleType: "disc", listStylePosition: "inside" }}>
                  {blockedItems.map((item) => (
                    <li key={item} data-test-subj={`BlockedItem-${item}`}>
                      {item}
                    </li>
                  ))}
                </ul>
              </EuiCallOut>
            </>
          )}
        </div>
      </EuiModalBody>

      <EuiModalFooter>
        <EuiSmallButtonEmpty onClick={onClose}>취소</EuiSmallButtonEmpty>
        <EuiSmallButton data-test-subj="refreshConfirmButton" onClick={onConfirm} fill>
          새로고침
        </EuiSmallButton>
      </EuiModalFooter>
    </EuiModal>
  );
}
