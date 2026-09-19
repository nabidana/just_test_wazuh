/*
 * Copyright OpenSearch Contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useContext, useEffect, useMemo, useRef, useState } from "react";
import {
  EuiTabbedContent,
  EuiDescriptionList,
  EuiDescriptionListTitle,
  EuiDescriptionListDescription,
  EuiSpacer,
  EuiTitle,
  EuiCompressedFormRow,
  EuiLink,
  EuiTabbedContentTab,
  EuiText,
  EuiHorizontalRule,
  EuiPanel,
} from "@elastic/eui";
import { get, size } from "lodash";
import { RouteComponentProps } from "react-router-dom";
import { IndexItem } from "../../../../../models/interfaces";
import IndicesActions from "../../../Indices/containers/IndicesActions";
import { ManagedCatIndex } from "../../../../../server/models/interfaces";
import { BREADCRUMBS, IndicesUpdateMode, ROUTES } from "../../../../utils/constants";
import { ServicesContext } from "../../../../services";
import { BrowserServices } from "../../../../models/interfaces";
import IndexFormWrapper, { IndexForm } from "../../../CreateIndex/containers/IndexForm";
import { CoreServicesContext } from "../../../../components/core_services";
import { ContentPanel } from "../../../../components/ContentPanel";
import { Modal } from "../../../../components/Modal";
import { IFinalDetail } from "./interface";
import { OVERVIEW_DISPLAY_INFO } from "./constants";
import { EVENT_MAP, destroyListener, listenEvent } from "../../../../JobHandler";
import { useUpdateUrlWithDataSourceProperties } from "../../../../components/MDSEnabledComponent";
import { getApplication, getNavigationUI, getUISettings } from "../../../../services/Services";
import { TopNavControlButtonData, TopNavControlComponentData } from "src/plugins/navigation/public";

export interface IndexDetailModalProps extends RouteComponentProps<{ index: string }> {}

export default function IndexDetail(props: IndexDetailModalProps) {
  const { index } = props.match.params;
  const [record, setRecord] = useState<ManagedCatIndex | undefined>(undefined);
  const [detail, setDetail] = useState({} as IndexItem);
  const ref = useRef<IndexForm>(null);
  const coreService = useContext(CoreServicesContext);
  const finalDetail: IFinalDetail | undefined = useMemo(() => {
    if (!detail || !record) {
      return undefined;
    }

    return {
      ...record,
      ...detail,
    };
  }, [record, detail]);
  const services = useContext(ServicesContext) as BrowserServices;
  useUpdateUrlWithDataSourceProperties();

  const fetchIndicesDetail = () =>
    services.commonService
      .apiCaller<Record<string, IndexItem>>({
        endpoint: "indices.get",
        data: {
          index,
        },
      })
      .then((res) => {
        if (!res.ok) {
          return res;
        }

        return {
          ...res,
          response: res.response[index],
        };
      })
      .then((res) => {
        if (res && res.ok) {
          setDetail(res.response);
        } else {
          coreService?.notifications.toasts.addDanger(res.error || "인덱스 정보를 가져오는 중 오류가 발생했습니다.");
          props.history.replace(ROUTES.INDICES);
        }

        return res;
      });

  const fetchCatIndexDetail = async (params: { showDataStreams: "true" | "false" }) => {
    const result = await services.indexService.getIndices({
      terms: index,
      from: 0,
      size: 10,
      search: index,
      sortField: "index",
      sortDirection: "desc",
      expandWildcards: "all",
      ...params,
    });
    if (result.ok) {
      const findItem = result.response.indices.find((item) => item.index === index);
      if (findItem) {
        setRecord(findItem);
      } else {
        coreService?.notifications.toasts.addDanger(`[index_not_found_exception] 해당 인덱스를 찾을 수 없습니다 [${index}]`);
        props.history.replace(ROUTES.INDICES);
      }
    } else {
      coreService?.notifications.toasts.addDanger(result.error || "");
      props.history.replace(ROUTES.INDICES);
    }
  };

  const refreshDetails = async () => {
    const result = await fetchIndicesDetail();
    if (result.ok) {
      const { data_stream } = result.response;
      const payload: { showDataStreams: "true" | "false"; search?: string; dataStreams?: string; exactSearch?: string } = {
        showDataStreams: data_stream ? "true" : "false",
        exactSearch: index,
      };
      if (data_stream) {
        payload.search = `data_streams: (${result.response.data_stream})`;
        payload.dataStreams = data_stream;
      }

      fetchCatIndexDetail(payload);
    }
  };

  const indexFormCommonProps = {
    index,
    onSubmitSuccess: () => {
      refreshDetails();
    },
  };

  const indexFormReadonlyCommonProps = {
    ...indexFormCommonProps,
    hideButtons: true,
    ref,
  };

  const tabs = useMemo(
    () => [
      {
        id: "indexDetailModalSettings",
        name: "설정",
        mode: IndicesUpdateMode.settings,
        content: (
          <>
            <EuiSpacer size="m" />
            <EuiPanel>
              <EuiTitle size="s">
                <h2>인덱스 설정</h2>
              </EuiTitle>
              <EuiHorizontalRule margin="xs" />
              <EuiSpacer size="s" />
              <IndexFormWrapper {...indexFormReadonlyCommonProps} key={IndicesUpdateMode.settings} mode={IndicesUpdateMode.settings} />
            </EuiPanel>
          </>
        ),
      },
      {
        id: "indexDetailModalMappings",
        name: "매핑",
        mode: IndicesUpdateMode.mappings,
        content: (
          <>
            <EuiSpacer size="m" />
            <EuiPanel>
              <EuiTitle size="s">
                <h2>인덱스 매핑</h2>
              </EuiTitle>
              <EuiCompressedFormRow
                fullWidth
                helpText={
                  <>
                    <div>
                      문서와 필드가 저장되고 색인되는 방식을 정의합니다.{" "}
                      <EuiLink
                        target="_blank"
                        external
                        href={`https://opensearch.org/docs/${coreService?.docLinks.DOC_LINK_VERSION}/opensearch/mappings/`}
                      >
                        자세히 알아보기
                      </EuiLink>
                    </div>
                    <div>매핑과 필드 유형은 추가된 후에는 변경할 수 없습니다.</div>
                  </>
                }
              >
                <></>
              </EuiCompressedFormRow>
              <EuiHorizontalRule margin="xs" />
              <EuiSpacer size="s" />
              <IndexFormWrapper {...indexFormReadonlyCommonProps} key={IndicesUpdateMode.mappings} mode={IndicesUpdateMode.mappings} />
            </EuiPanel>
          </>
        ),
      },
      {
        id: `indexDetailModalAlias`,
        name: "별칭",
        mode: IndicesUpdateMode.alias,
        content: (
          <>
            <EuiSpacer size="m" />
            <EuiPanel>
              <EuiTitle size="s">
                <h2>인덱스 별칭</h2>
              </EuiTitle>
              <EuiHorizontalRule margin="xs" />
              <IndexFormWrapper {...indexFormReadonlyCommonProps} key={IndicesUpdateMode.alias} mode={IndicesUpdateMode.alias} />
            </EuiPanel>
          </>
        ),
      },
    ],
    []
  );

  const [selectedTab, setSelectedTab] = useState<EuiTabbedContentTab & { mode: IndicesUpdateMode }>(tabs[0]);

  const { HeaderControl } = getNavigationUI();
  const { setAppRightControls } = getApplication();
  const uiSettings = getUISettings();
  const useUpdatedUX = uiSettings.get("home:useNewHomePage");

  useEffect(() => {
    refreshDetails();
    const breadCrumbs = useUpdatedUX
      ? [
          BREADCRUMBS.INDICES,
          {
            text: index,
            href: `#${props.location.pathname}`,
          },
        ]
      : [
          BREADCRUMBS.INDEX_MANAGEMENT,
          BREADCRUMBS.INDICES,
          {
            text: index,
            href: `#${props.location.pathname}`,
          },
        ];
    coreService?.chrome.setBreadcrumbs(breadCrumbs);
  }, []);

  useEffect(() => {
    listenEvent(EVENT_MAP.OPEN_COMPLETE, refreshDetails);
    return () => {
      destroyListener(EVENT_MAP.OPEN_COMPLETE, refreshDetails);
    };
  }, [refreshDetails]);

  if (!record || !detail || !finalDetail) {
    return null;
  }

  const Common = () => {
    return (
      <>
        <EuiPanel>
          <EuiTitle size="s">
            <h2>개요</h2>
          </EuiTitle>
          <EuiHorizontalRule margin="xs" />
          <EuiDescriptionList compressed>
            <EuiSpacer size="s" />
            <div>
              {OVERVIEW_DISPLAY_INFO.map((item) => {
                let valueContent = null;
                if (typeof item.value === "string") {
                  valueContent = <span>{get(finalDetail, item.value)}</span>;
                } else {
                  const ValueComponent = item.value;
                  valueContent = <ValueComponent detail={finalDetail} />;
                }
                return (
                  <div
                    style={{ display: "inline-block", width: "33%", verticalAlign: "top", marginBottom: "20px" }}
                    key={item.label}
                    data-test-subj={`indexDetailOverviewItem-${item.label}`}
                  >
                    <EuiDescriptionListTitle>
                      <EuiText size="s">
                        {" "}
                        <h4>{item.label}</h4>{" "}
                      </EuiText>
                    </EuiDescriptionListTitle>
                    <EuiDescriptionListDescription style={{ wordBreak: item.label === "인덱스 이름" ? "break-word" : undefined }}>
                      {valueContent}
                    </EuiDescriptionListDescription>
                  </div>
                );
              })}
            </div>
          </EuiDescriptionList>
        </EuiPanel>
        <EuiSpacer />
        <EuiTabbedContent
          size="s"
          selectedTab={selectedTab}
          onTabClick={(tab) => {
            if (ref.current?.hasUnsavedChanges?.(selectedTab.mode)) {
              Modal.show({
                title: "저장되지 않은 변경 사항이 있습니다.",
                content: "이 탭을 나가시겠습니까?",
                type: "confirm",
                locale: {
                  confirm: "유지",
                  cancel: "변경 사항 저장하지 않고 나가기",
                },
                onCancel: () => {
                  setSelectedTab(tab as any);
                },
                footer: ["cancel", "confirm"],
              });
            } else {
              setSelectedTab(tab as any);
            }
          }}
          tabs={tabs}
        />
      </>
    );
  };

  return useUpdatedUX ? (
    <>
      <HeaderControl
        setMountPoint={setAppRightControls}
        controls={[
          {
            renderComponent: (
              <IndicesActions
                selectedItems={[record]}
                history={props.history}
                onDelete={() => props.history.replace(ROUTES.INDICES)}
                onClose={refreshDetails}
                onShrink={() => props.history.replace(ROUTES.INDICES)}
                getIndices={async () => {}}
              />
            ),
          } as TopNavControlComponentData,
        ]}
      />
      {Common()}
    </>
  ) : (
    <>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <EuiText size="s">
          <h1>{index}</h1>
        </EuiText>
        <IndicesActions
          selectedItems={[record]}
          history={props.history}
          onDelete={() => props.history.replace(ROUTES.INDICES)}
          onClose={refreshDetails}
          onShrink={() => props.history.replace(ROUTES.INDICES)}
          getIndices={async () => {}}
        />
      </div>
      <EuiSpacer />
      {Common()}
    </>
  );
}
