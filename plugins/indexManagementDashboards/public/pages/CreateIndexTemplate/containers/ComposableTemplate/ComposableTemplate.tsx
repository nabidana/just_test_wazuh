/*
 * Copyright OpenSearch Contributors
 * SPDX-License-Identifier: Apache-2.0
 */
import React, { useContext, useRef, useState, useEffect, useMemo } from "react";
import {
  EuiSmallButton,
  EuiSmallButtonIcon,
  EuiDragDropContext,
  EuiDraggable,
  EuiDroppable,
  EuiFlexGroup,
  EuiFlexItem,
  EuiHighlight,
  EuiIcon,
  EuiLink,
  EuiPanel,
  EuiSelectable,
  EuiSpacer,
  EuiText,
  EuiTitle,
  euiDragDropReorder,
} from "@elastic/eui";
import { ContentPanel } from "../../../../components/ContentPanel";
import CustomFormRow from "../../../../components/CustomFormRow";
import { ServicesContext } from "../../../../services";
import { BrowserServices } from "../../../../models/interfaces";
import { SubDetailProps } from "../../interface";
import { TemplateItem } from "../../../../../models/interfaces";
import { Modal } from "../../../../components/Modal";
import { ICatComposableTemplate } from "../../../ComposableTemplates/interface";
import { IndicesUpdateMode, ROUTES } from "../../../../utils/constants";
import ComponentTemplateBadge from "../../../../components/ComponentTemplateBadge";
import ComponentTemplateDetail, { IComponentTemplateDetailInstance } from "../../../CreateComposableTemplate/containers/TemplateDetail";
import { CoreServicesContext } from "../../../../components/core_services";
import { CoreStart } from "opensearch-dashboards/public";
import FilterGroup from "../../../../components/FilterGroup";

export default function ComposableTemplate(props: SubDetailProps) {
  const { field, readonly, history } = props;
  const [dialogVisible, setDialogVisible] = useState(false);
  const [selectedTypes, setSelectedTypes] = useState<string[]>([]);
  const [selectedComposableTemplates, setSelectedComposableTemplates] = useState<string[]>([]);
  const [allComposableTemplates, setAllComposableTemplates] = useState<ICatComposableTemplate[]>([]);
  const [createComponentVisible, setCreateComponentVisible] = useState(false);
  const values: TemplateItem = field.getValues();
  const services = useContext(ServicesContext) as BrowserServices;
  const coreServices = useContext(CoreServicesContext) as CoreStart;
  const componentCreateRef = useRef<IComponentTemplateDetailInstance>(null);
  const reloadAllComposableTemplates = () =>
    services.commonService
      .apiCaller<{
        component_templates?: ICatComposableTemplate[];
      }>({
        endpoint: "transport.request",
        data: {
          method: "GET",
          path: `/_component_template/*`,
        },
        hideLog: true,
      })
      .then((res) => {
        if (res && res.ok) {
          setAllComposableTemplates(res.response.component_templates || []);
        }
      });
  useEffect(() => {
    reloadAllComposableTemplates();
  }, []);
  const finalOptions = useMemo(
    () =>
      allComposableTemplates.filter((item) => {
        if (!selectedTypes.length) {
          return true;
        }

        return selectedTypes.every((type) => !!item.component_template.template[type as IndicesUpdateMode]);
      }),
    [selectedTypes, allComposableTemplates]
  );

  if (readonly) {
    return null;
  }

  return (
    <ContentPanel
      title={
        <>
          <CustomFormRow
            fullWidth
            label={
              <EuiTitle size="s">
                <div>컴포넌트 템플릿</div>
              </EuiTitle>
            }
            helpText={
              <>
                인덱스 구성이 포함된 컴포넌트 템플릿을 결합하여 인덱스 템플릿을 정의합니다. 기존 컴포넌트 템플릿을 연결하거나 새로 생성할 수
                있습니다. 드래그하여 컴포넌트 템플릿의 우선순위를 조정할 수 있습니다. 맨 아래에 위치한 컴포넌트 템플릿이 가장 높은
                우선순위를 갖습니다.{" "}
                <EuiLink target="_blank" external href={coreServices.docLinks.links.opensearch.indexTemplates.composable}>
                  자세히 알아보기
                </EuiLink>
              </>
            }
          >
            <></>
          </CustomFormRow>
        </>
      }
      titleSize="s"
    >
      {values.composed_of && values.composed_of.length && allComposableTemplates.length ? (
        <EuiDragDropContext
          onDragEnd={({ source, destination }) => {
            if (source && destination) {
              const items = euiDragDropReorder(values.composed_of || [], source.index, destination.index);
              field.setValue("composed_of", items);
            }
          }}
        >
          <EuiDroppable droppableId="composableTemplatesDropArea" spacing="none">
            {values.composed_of.map((item, index) => {
              const findItem = allComposableTemplates.find((template) => template.name === item);
              if (!findItem) {
                return <div key={item} />;
              }

              return (
                <EuiFlexGroup key={item} alignItems="center">
                  <EuiFlexItem>
                    <EuiDraggable
                      isDragDisabled={readonly}
                      index={index}
                      customDragHandle
                      draggableId={item}
                      key={item}
                      style={{ paddingLeft: 0, paddingRight: 0 }}
                      spacing="m"
                    >
                      {(provided) => (
                        <EuiPanel paddingSize="m">
                          <div style={{ display: "flex", justifyContent: "space-between" }}>
                            <div style={{ display: "flex", alignItems: "center" }}>
                              <div {...provided.dragHandleProps} aria-label="드래그 핸들">
                                <EuiIcon type="grab" />
                              </div>
                              <span style={{ marginLeft: 12 }}>{findItem.name}</span>
                              <div style={{ marginLeft: 12 }}>
                                <ComponentTemplateBadge template={findItem.component_template.template} />
                              </div>
                            </div>
                            <div>
                              {readonly ? null : (
                                <EuiSmallButtonIcon
                                  onClick={() => {
                                    const newValue = [...(values.composed_of || [])];
                                    newValue.splice(index, 1);
                                    field.setValue("composed_of", newValue);
                                  }}
                                  iconType="trash"
                                  color="danger"
                                  aria-label="삭제"
                                />
                              )}
                              <EuiSmallButtonIcon
                                onClick={() => window.open(`#${ROUTES.CREATE_COMPOSABLE_TEMPLATE}/${item}`)}
                                style={{ marginLeft: 12 }}
                                iconType="inspect"
                                color="primary"
                                aria-label="세부 정보 보기"
                              />
                            </div>
                          </div>
                        </EuiPanel>
                      )}
                    </EuiDraggable>
                  </EuiFlexItem>
                </EuiFlexGroup>
              );
            })}
          </EuiDroppable>
        </EuiDragDropContext>
      ) : (
        <EuiText>연결된 컴포넌트 템플릿이 없습니다</EuiText>
      )}
      <EuiSpacer />
      {readonly ? null : (
        <div>
          <EuiSmallButton onClick={() => setDialogVisible(true)}>컴포넌트 템플릿 연결</EuiSmallButton>
          <EuiSmallButton style={{ marginLeft: 20 }} onClick={() => setCreateComponentVisible(true)}>
            컴포넌트 템플릿 생성
          </EuiSmallButton>
        </div>
      )}
      <Modal.SimpleModal
        type="confirm"
        visible={dialogVisible}
        locale={{
          confirm: `연결 (${selectedComposableTemplates.length})`,
        }}
        footer={["cancel", "confirm"]}
        style={{
          width: 860,
        }}
        title="컴포넌트 템플릿 연결"
        onOk={() => {
          field.setValue("composed_of", [...(field.getValue("composed_of") || []), ...selectedComposableTemplates]);
          setSelectedComposableTemplates([]);
        }}
        onClose={() => setDialogVisible(false)}
        content={
          <EuiSelectable
            searchable
            options={finalOptions.map((item) => ({
              value: item,
              label: item.name,
              checked: [...(values.composed_of || []), ...selectedComposableTemplates].includes(item.name) ? "on" : undefined,
              disabled: (values.composed_of || []).includes(item.name),
            }))}
            onChange={(val) => {
              setSelectedComposableTemplates(val.filter((item) => item.checked === "on" && !item.disabled).map((item) => item.label));
            }}
            searchProps={{
              placeholder: "검색",
            }}
            listProps={{
              rowHeight: 40,
              bordered: true,
            }}
            renderOption={(option, searchValue) => (
              <EuiFlexGroup>
                <EuiFlexItem>
                  <EuiHighlight search={searchValue}>{option.label}</EuiHighlight>
                </EuiFlexItem>
                <EuiFlexItem grow={false} style={{ flexDirection: "row" }}>
                  <ComponentTemplateBadge template={option.value.component_template.template} />
                </EuiFlexItem>
              </EuiFlexGroup>
            )}
            height={480}
          >
            {(list, search) => (
              <>
                <EuiFlexGroup>
                  <EuiFlexItem>{search}</EuiFlexItem>
                  <EuiFlexItem style={{ flexBasis: "100px" }} grow={false}>
                    <FilterGroup
                      filterButtonProps={{
                        children: "유형",
                      }}
                      onChange={(val) => setSelectedTypes(val || [])}
                      value={selectedTypes}
                      options={[
                        {
                          label: IndicesUpdateMode.alias,
                        },
                        {
                          label: IndicesUpdateMode.mappings,
                        },
                        {
                          label: IndicesUpdateMode.settings,
                        },
                      ]}
                    />
                  </EuiFlexItem>
                </EuiFlexGroup>
                {list}
              </>
            )}
          </EuiSelectable>
        }
      />
      {createComponentVisible ? (
        <Modal.SimpleModal
          maxWidth={false}
          style={{
            width: "70vw",
          }}
          type="confirm"
          title="컴포넌트 템플릿 생성"
          visible={createComponentVisible}
          onCancel={() => setCreateComponentVisible(false)}
          locale={{
            confirm: "생성",
          }}
          footer={["cancel", "confirm"]}
          onOk={() => {
            componentCreateRef.current?.submit();
            // return a reject promise to keep it from closing
            return Promise.reject("no error");
          }}
          onClose={() => setCreateComponentVisible(false)}
          content={
            <ComponentTemplateDetail
              hideTitle
              hideButton
              noPanel
              onSubmitSuccess={(name) => {
                reloadAllComposableTemplates();
                field.setValue("composed_of", [...(field.getValue("composed_of") || []), name]);
                setCreateComponentVisible(false);
              }}
              ref={componentCreateRef}
              history={history}
            />
          }
        />
      ) : null}
    </ContentPanel>
  );
}
