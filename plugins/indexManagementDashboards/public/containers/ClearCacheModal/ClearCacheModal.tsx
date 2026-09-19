/*
 * Copyright OpenSearch Contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useCallback, useContext, useEffect, useState } from "react";
import { CoreStart } from "opensearch-dashboards/public";
import { CatIndex, DataStream } from "../../../server/models/interfaces";
import { IAlias } from "../../pages/Aliases/interface";
import { ServicesContext } from "../../services";
import { CoreServicesContext } from "../../components/core_services";
import { INDEX_OP_BLOCKS_TYPE, INDEX_OP_TARGET_TYPE } from "../../utils/constants";
import { getErrorMessage, filterBlockedItems } from "../../utils/helpers";
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

export interface ClearCacheModalProps {
  selectedItems: CatIndex[] | DataStream[] | IAlias[];
  visible: boolean;
  onClose: () => void;
  type: string;
}

const targetTypeKoreanMap: Record<string, string> = {
  [INDEX_OP_TARGET_TYPE.INDEX]: "인덱스",
  [INDEX_OP_TARGET_TYPE.ALIAS]: "별칭",
  [INDEX_OP_TARGET_TYPE.DATA_STREAM]: "데이터 스트림",
};

export default function ClearCacheModal(props: ClearCacheModalProps) {
  const { onClose, visible, selectedItems, type } = props;
  const typeKorean = targetTypeKoreanMap[type] || type;
  const [hint, setHint] = useState("");
  const [blockHint, setBlockHint] = useState("");
  const [unBlockedItems, setUnBlockedItems] = useState([] as string[]);
  const [blockedItems, setBlockedItems] = useState([] as string[]);
  const [loading, setLoading] = useState(true);

  const services = useContext(ServicesContext);
  const coreServices = useContext(CoreServicesContext) as CoreStart;

  useEffect(() => {
    const indexBlocksTypes = [
      INDEX_OP_BLOCKS_TYPE.CLOSED,
      INDEX_OP_BLOCKS_TYPE.META_DATA,
      INDEX_OP_BLOCKS_TYPE.READ_ONLY,
      INDEX_OP_BLOCKS_TYPE.READ_ONLY_ALLOW_DELETE,
    ];
    if (!!services && visible) {
      switch (type) {
        case INDEX_OP_TARGET_TYPE.DATA_STREAM:
          setHint("다음 데이터 스트림에 대해 캐시가 지워집니다.");
          setBlockHint(
            "하나 이상의 백업 인덱스가 닫혀 있거나 차단되어 있어 다음 데이터 스트림에 대한 캐시는 지워지지 않습니다."
          );
          filterBlockedItems(services, selectedItems, indexBlocksTypes, INDEX_OP_TARGET_TYPE.DATA_STREAM, false)
            .then((filteredDataStreamsResult) => {
              setUnBlockedItems(filteredDataStreamsResult.unBlockedItems);
              setBlockedItems(filteredDataStreamsResult.blockedItems);
            })
            .catch(() => {
              // set unBlockedItems to all when filter is failed
              setUnBlockedItems((selectedItems as DataStream[]).map((item) => item.name));
            })
            .finally(() => {
              setLoading(false);
            });
          break;
        case INDEX_OP_TARGET_TYPE.ALIAS:
          setHint("다음 별칭에 대해 캐시가 지워집니다.");
          setBlockHint("하나 이상의 인덱스가 닫혀 있거나 차단되어 있어 다음 별칭에 대한 캐시는 지워지지 않습니다.");
          filterBlockedItems(services, selectedItems as IAlias[], indexBlocksTypes, INDEX_OP_TARGET_TYPE.ALIAS, false)
            .then((filteredAliasesResult) => {
              setUnBlockedItems(filteredAliasesResult.unBlockedItems);
              setBlockedItems(filteredAliasesResult.blockedItems);
            })
            .catch(() => {
              // set unBlockedItems to all when filter is failed
              setUnBlockedItems((selectedItems as IAlias[]).map((item) => item.alias));
            })
            .finally(() => {
              setLoading(false);
            });
          break;
        default:
          setHint("다음 인덱스에 대해 캐시가 지워집니다.");
          setBlockHint("닫혀 있거나 차단되어 있을 수 있어 다음 인덱스에 대한 캐시는 지워지지 않습니다.");
          filterBlockedItems(services, selectedItems as CatIndex[], indexBlocksTypes, INDEX_OP_TARGET_TYPE.INDEX, false)
            .then((filteredIndexesResult) => {
              setUnBlockedItems(filteredIndexesResult.unBlockedItems);
              setBlockedItems(filteredIndexesResult.blockedItems);
            })
            .catch(() => {
              // set unBlockedItems to all when filter is failed
              setUnBlockedItems((selectedItems as CatIndex[]).map((item) => item.index));
            })
            .finally(() => {
              setLoading(false);
            });
      }
    } else if (!visible) {
      setUnBlockedItems([] as string[]);
      setBlockedItems([] as string[]);
      setLoading(true);
    }
  }, [services, visible, type, selectedItems]);

  const onConfirm = useCallback(async () => {
    if (!!services) {
      try {
        const result = await services.commonService.apiCaller({
          endpoint: "indices.clearCache",
          data: {
            index: unBlockedItems.join(",") || "_all",
          },
        });
        if (result && result.ok) {
          onClose();
          let toast = "";
          if (unBlockedItems.length > 1) {
            toast = `${typeKorean} ${unBlockedItems.length}개 [${unBlockedItems.join(", ")}]에 대한 캐시가 지워졌습니다.`;
          } else if (unBlockedItems.length == 1) {
            toast = `${unBlockedItems[0]}에 대한 캐시가 지워졌습니다.`;
          }

          if (!selectedItems || selectedItems.length == 0) {
            toast = "열려 있는 모든 인덱스에 대한 캐시가 지워졌습니다.";
          }
          coreServices.notifications.toasts.addSuccess(toast);
        } else {
          if (result.error.includes("cluster_block_exception")) {
            coreServices.notifications.toasts.addError(new Error(result.error), {
              title: "캐시 지우기에 실패했습니다.",
              toastMessage: "하나 이상의 인덱스가 차단되어 있습니다.",
            });
          } else {
            coreServices.notifications.toasts.addError(new Error(result.error), {
              title: "캐시 지우기에 실패했습니다.",
            });
          }
        }
      } catch (err) {
        coreServices.notifications.toasts.addDanger({
          title: "캐시를 지울 수 없습니다",
          text: getErrorMessage(err, "캐시를 지우는 중 문제가 발생했습니다."),
        });
      }
    }
  }, [services, coreServices, onClose, unBlockedItems, selectedItems, type]);

  useEffect(() => {
    if (visible && selectedItems.length > 0 && selectedItems.length == blockedItems.length) {
      if (selectedItems.length == 1) {
        coreServices.notifications.toasts.addDanger({
          title: "캐시를 지울 수 없습니다",
          text: `${blockedItems[0]}이(가) 닫혀 있거나 차단되어 있어 캐시를 지울 수 없습니다.`,
        });
      } else {
        coreServices.notifications.toasts.addDanger({
          title: "캐시를 지울 수 없습니다",
          text: `선택한 ${typeKorean}이(가) 닫혀 있거나 차단되어 있어 캐시를 지울 수 없습니다.`,
        });
      }
      onClose();
    }
  }, [visible, unBlockedItems, blockedItems, coreServices, onClose, type]);

  if (!visible || loading) {
    return null;
  }

  const specificIndexesChildren: React.ReactChild = (
    <>
      <div style={{ lineHeight: 1.5 }}>
        {unBlockedItems.length > 0 && (
          <>
            <EuiText size="s">
              <p>{hint}</p>
            </EuiText>
            <EuiText size="s">
              <ul style={{ listStyleType: "disc", listStylePosition: "inside" }}>
                {unBlockedItems.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </EuiText>
            <EuiSpacer />
          </>
        )}
      </div>
      <EuiCallOut color="warning" iconType="warning" hidden={blockedItems.length == 0} size="s">
        <EuiText size="s">
          <p>{blockHint}</p>
        </EuiText>
        <ul style={{ listStyleType: "disc", listStylePosition: "inside" }}>
          {blockedItems.map((item) => (
            <EuiText size="s">
              <li key={item}>{item}</li>
            </EuiText>
          ))}
        </ul>
      </EuiCallOut>
    </>
  );

  const noSpecificIndexesChildren: React.ReactChild = (
    <>
      <div style={{ lineHeight: 1.5 }}>
        <EuiText size="s">
          <p>열려 있는 모든 인덱스에 대해 캐시가 지워집니다.</p>
        </EuiText>
        <EuiSpacer />
      </div>
    </>
  );

  return (
    <EuiModal onClose={onClose}>
      <EuiModalHeader>
        <EuiModalHeaderTitle>
          <EuiText size="s">
            <h2>{typeKorean} 캐시 지우기</h2>
          </EuiText>
        </EuiModalHeaderTitle>
      </EuiModalHeader>

      <EuiModalBody>{!!selectedItems && selectedItems.length > 0 ? specificIndexesChildren : noSpecificIndexesChildren}</EuiModalBody>

      <EuiModalFooter>
        <EuiSmallButtonEmpty data-test-subj="ClearCacheCancelButton" onClick={onClose}>
          취소
        </EuiSmallButtonEmpty>
        <EuiSmallButton
          data-test-subj="ClearCacheConfirmButton"
          onClick={onConfirm}
          fill
          isDisabled={selectedItems.length > 0 && unBlockedItems.length == 0}
        >
          캐시 지우기
        </EuiSmallButton>
      </EuiModalFooter>
    </EuiModal>
  );
}
