/*
 * Copyright OpenSearch Contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { forwardRef, useContext, useEffect, useImperativeHandle, useRef, Ref, useState } from "react";
import {
  EuiSmallButton,
  EuiButtonEmpty,
  EuiButtonIcon,
  EuiCodeBlock,
  EuiFlexGroup,
  EuiFlexItem,
  EuiLink,
  EuiSpacer,
  EuiTab,
  EuiTabs,
  EuiText,
  EuiTitle,
  EuiPanel,
  EuiTextColor,
  EuiAccordion,
  htmlIdGenerator,
} from "@elastic/eui";
import queryString from "query-string";
import { TemplateItem, TemplateItemRemote } from "../../../../../models/interfaces";
import useField, { FieldInstance } from "../../../../lib/field";
import CustomFormRow from "../../../../components/CustomFormRow";
import { ServicesContext } from "../../../../services";
import { BrowserServices } from "../../../../models/interfaces";
import { CoreServicesContext } from "../../../../components/core_services";
import { CoreStart } from "opensearch-dashboards/public";
import { submitTemplate, getTemplate, simulateTemplate, formatTemplate, formatRemoteTemplateToEditTemplate } from "../../hooks";
import { Modal } from "../../../../components/Modal";
import { RouteComponentProps } from "react-router-dom";
import { ROUTES } from "../../../../utils/constants";
import DeleteTemplateModal from "../../../Templates/containers/DeleteTemplatesModal";
import DefineTemplate, { OverviewTemplate } from "../../components/DefineTemplate";
import IndexSettings from "../../components/IndexSettings";
import IndexAlias from "../IndexAlias";
import TemplateMappings from "../TemplateMappings";
import { merge } from "lodash";
import ComposableTemplate from "../ComposableTemplate";
import PreviewTemplate from "../PreviewTemplate";
import { ContentPanel } from "../../../../components/ContentPanel";
import { FLOW_ENUM, TemplateItemEdit } from "../../interface";
import BottomBar from "../../../../components/BottomBar";
import { diffJson } from "../../../../utils/helpers";
import UnsavedChangesBottomBar from "../../../../components/UnsavedChangesBottomBar";
import { IndexForm } from "../../../../containers/IndexForm";
import { TABS_ENUM, tabs } from "../../constant";
import { getApplication, getNavigationUI, getUISettings } from "../../../../services/Services";
import { TopNavControlDescriptionData, TopNavControlLinkData } from "src/plugins/navigation/public";

export interface TemplateDetailProps {
  templateName?: string;
  onCancel?: () => void;
  onSubmitSuccess?: (templateName: string) => void;
  history: RouteComponentProps["history"];
  location: RouteComponentProps["location"];
  dataSourceId: string;
  useUpdatedUX?: boolean;
}

const TemplateDetail = (props: TemplateDetailProps, ref: Ref<FieldInstance>) => {
  const { templateName, onCancel, onSubmitSuccess, history, useUpdatedUX } = props;
  const isEdit = !!templateName;
  const services = useContext(ServicesContext) as BrowserServices;
  const coreServices = useContext(CoreServicesContext) as CoreStart;
  const [selectedTabId, setSelectedTabId] = useState(TABS_ENUM.SUMMARY);
  const [visible, setVisible] = useState(false);
  const [previewFlyoutVisible, setPreviewFlyoutVisible] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const oldValue = useRef<TemplateItem | undefined>(undefined);
  const searchObject = queryString.parseUrl(props.location.search);
  /* istanbul ignore next */
  if (searchObject.query.values) {
    try {
      searchObject.query.values = JSON.parse((searchObject.query.values || "") as string);
    } catch (e) {
      // do nothing
    }
  }
  const defaultValues = merge(
    {},
    {
      priority: 0,
      template: {},
      _meta: {
        flow: FLOW_ENUM.SIMPLE,
      },
    } as Partial<TemplateItem>,
    searchObject.query.values as any
  );
  const field = useField({
    values: defaultValues,
    onChange(name, value) {
      if (name === "data_stream" && value === undefined) {
        field.deleteValue(name);
      }
    },
  });
  const simulateField = useField({
    values: {
      priority: 0,
      template: {},
      _meta: {
        flow: FLOW_ENUM.SIMPLE,
      },
    } as Partial<TemplateItem>,
  });
  const destroyRef = useRef<boolean>(false);
  const onSubmit = async () => {
    const { errors, values: templateDetail } = (await field.validatePromise()) || {};
    if (errors) {
      return;
    }
    setIsSubmitting(true);
    const result = await submitTemplate({
      value: templateDetail,
      commonService: services.commonService,
      isEdit,
    });
    /* istanbul ignore next */
    if (destroyRef.current) {
      return;
    }
    setIsSubmitting(false);
    if (result.ok) {
      return result;
    } else {
      return {
        ...result,
        error: result?.body?.error?.caused_by?.reason || result.error,
      };
    }
  };
  useImperativeHandle(ref, () => field);
  const refreshTemplate = () => {
    getTemplate({
      templateName: templateName || "",
      coreService: coreServices,
      commonService: services.commonService,
    })
      .then((template) => {
        oldValue.current = JSON.parse(JSON.stringify(template));
        field.resetValues(template);

        simulateTemplate({
          commonService: services.commonService,
          template: field.getValues(),
        }).then((simulateResult) => {
          if (simulateResult.ok) {
            simulateField.resetValues(simulateResult.response);
          } else {
            coreServices.notifications.toasts.addDanger(simulateResult.error);
          }
        });
      })
      .catch(() => {
        // do nothing
        props.history.replace(ROUTES.TEMPLATES);
      });
  };
  useEffect(() => {
    if (isEdit) {
      refreshTemplate();
    }
    return () => {
      destroyRef.current = true;
    };
  }, []);
  const values: TemplateItemEdit = field.getValues();
  const subCompontentProps = {
    ...props,
    isEdit,
    field,
    readonly: selectedTabId === TABS_ENUM.SUMMARY && isEdit,
  };

  const PreviewTemplateButton = () => (
    <EuiFlexItem grow={false}>
      <EuiSmallButton
        onClick={async () => {
          const result = await simulateTemplate({
            template: field.getValues(),
            commonService: services.commonService,
          });
          if (result.ok) {
            simulateField.resetValues(result.response);
            setPreviewFlyoutVisible(true);
          } else {
            coreServices.notifications.toasts.addDanger(result.error);
          }
        }}
        data-test-subj="CreateIndexTemplatePreviewButton"
        color="ghost"
      >
        템플릿 미리보기
      </EuiSmallButton>
    </EuiFlexItem>
  );
  const { HeaderControl } = getNavigationUI();
  const { setAppDescriptionControls, setAppRightControls } = getApplication();

  const descriptionData = [
    {
      description: "스냅샷 정책으로 자동화된 스냅샷 일정 및 보존 기간을 정의합니다.",
      links: {
        label: "자세히 알아보기",
        href: coreServices.docLinks.links.opensearch.indexTemplates.base,
        iconType: "popout",
        iconSide: "right",
        controlType: "link",
        target: "_blank",
        flush: "both",
      } as TopNavControlLinkData,
    } as TopNavControlDescriptionData,
  ];

  const HeaderRight = [
    {
      renderComponent: (
        <>
          <EuiButtonIcon display="base" iconType="trash" aria-label="삭제" color="danger" onClick={() => setVisible(true)} size="s" />
          <DeleteTemplateModal
            visible={visible}
            selectedItems={[templateName]}
            onClose={() => {
              setVisible(false);
            }}
            onDelete={() => {
              setVisible(false);
              history.replace(ROUTES.TEMPLATES);
            }}
          />
        </>
      ),
    },
    {
      renderComponent: (
        <EuiSmallButton
          fill
          onClick={() => {
            const showValue: TemplateItemRemote = {
              ...values,
              template: IndexForm.transformIndexDetailToRemote(values.template),
            };
            Modal.show({
              locale: {
                ok: "닫기",
              },
              style: {
                width: 800,
              },
              "data-test-subj": "templateJSONDetailModal",
              title: (
                <EuiText size="s">
                  <h2>{values.name}</h2>
                </EuiText>
              ),
              content: (
                <EuiCodeBlock language="json" isCopyable fontSize="s">
                  {JSON.stringify(showValue, null, 2)}
                </EuiCodeBlock>
              ),
            });
          }}
        >
          JSON 보기
        </EuiSmallButton>
      ),
    },
  ];

  const Title = () => {
    return !useUpdatedUX ? (
      <>
        <EuiFlexGroup alignItems="center">
          <EuiFlexItem>
            <EuiText size="s">
              {isEdit ? <h1 title={values.name}>{templateName}</h1> : <h1>{isEdit ? "템플릿 편집" : "템플릿 생성"}</h1>}
            </EuiText>
            {isEdit ? null : (
              <CustomFormRow
                fullWidth
                label=""
                helpText={
                  <div>
                    인덱스 템플릿을 사용하면 사전에 정의된 매핑 및 설정으로 새 인덱스를 초기화할 수 있습니다.{" "}
                    <EuiLink external target="_blank" href={coreServices.docLinks.links.opensearch.indexTemplates.base}>
                      자세히 알아보기
                    </EuiLink>
                  </div>
                }
              >
                <></>
              </CustomFormRow>
            )}
          </EuiFlexItem>
          {isEdit ? (
            <>
              <EuiFlexItem grow={false} style={{ flexDirection: "row" }}>
                <EuiSmallButton
                  style={{ marginRight: 20 }}
                  onClick={() => {
                    const showValue: TemplateItemRemote = {
                      ...values,
                      template: IndexForm.transformIndexDetailToRemote(values.template),
                    };
                    Modal.show({
                      locale: {
                        ok: "Close",
                      },
                      style: {
                        width: 800,
                      },
                      "data-test-subj": "templateJSONDetailModal",
                      title: (
                        <EuiText size="s">
                          <h2>{values.name}</h2>
                        </EuiText>
                      ),
                      content: (
                        <EuiCodeBlock language="json" isCopyable>
                          {JSON.stringify(showValue, null, 2)}
                        </EuiCodeBlock>
                      ),
                    });
                  }}
                >
                  JSON 보기
                </EuiSmallButton>
                <EuiSmallButton color="danger" onClick={() => setVisible(true)}>
                  삭제
                </EuiSmallButton>
                <DeleteTemplateModal
                  visible={visible}
                  selectedItems={[templateName]}
                  onClose={() => {
                    setVisible(false);
                  }}
                  onDelete={() => {
                    setVisible(false);
                    history.replace(ROUTES.TEMPLATES);
                  }}
                />
              </EuiFlexItem>
            </>
          ) : null}
        </EuiFlexGroup>
        <EuiSpacer />
      </>
    ) : (
      <>
        {isEdit ? (
          <HeaderControl controls={HeaderRight} setMountPoint={setAppRightControls} />
        ) : (
          <HeaderControl controls={descriptionData} setMountPoint={setAppDescriptionControls} />
        )}
      </>
    );
  };

  return (
    <>
      {Title()}
      {isEdit ? (
        <>
          <OverviewTemplate {...subCompontentProps} />
          <EuiSpacer />
        </>
      ) : null}
      {isEdit ? (
        <>
          <EuiTabs size="s">
            {tabs.map((item) => (
              <EuiTab
                onClick={() => {
                  setSelectedTabId(item.id);
                }}
                isSelected={selectedTabId === item.id}
                key={item.id}
                data-test-subj={`TemplateDetailTab-${item.id}`}
              >
                {item.name}
              </EuiTab>
            ))}
          </EuiTabs>
          <EuiSpacer size="m" />
        </>
      ) : null}
      {subCompontentProps.readonly ? null : (
        <>
          <DefineTemplate {...subCompontentProps} />
          <EuiSpacer />
        </>
      )}
      {values._meta?.flow === FLOW_ENUM.COMPONENTS && !subCompontentProps.readonly ? (
        <>
          <ComposableTemplate {...subCompontentProps} />
          <EuiSpacer />
        </>
      ) : null}
      <ContentPanel
        title={
          isEdit && selectedTabId === TABS_ENUM.SUMMARY ? (
            <EuiTitle size="s">
              <h2>템플릿 미리보기</h2>
            </EuiTitle>
          ) : values._meta?.flow === FLOW_ENUM.COMPONENTS ? (
            <EuiTitle size="s">
              <h2>템플릿 정의 재정의</h2>
            </EuiTitle>
          ) : (
            <EuiTitle size="s">
              <h2>템플릿 정의</h2>
            </EuiTitle>
          )
        }
        subTitleText={
          (!isEdit || selectedTabId !== TABS_ENUM.SUMMARY) && values._meta?.flow === FLOW_ENUM.COMPONENTS
            ? "인덱스 별칭, 설정, 매핑과 같은 추가 구성을 제공합니다. 이 섹션에 정의된 구성이 연결된 컴포넌트 템플릿과 중복되는 경우 이 구성이 우선 적용됩니다."
            : undefined
        }
        accordion={(!isEdit || selectedTabId !== TABS_ENUM.SUMMARY) && values._meta?.flow === FLOW_ENUM.COMPONENTS}
        noExtraPadding
        titleSize="s"
      >
        <EuiSpacer size="s" />
        <IndexAlias key={props.dataSourceId} {...subCompontentProps} field={subCompontentProps.readonly ? simulateField : field} />
        {/*{^ Passing dataSourceId as the key to force unmount and remount IndexAlias so as to refresh aliases in case of datasource changes }*/}
        <EuiSpacer />
        <IndexSettings {...subCompontentProps} field={subCompontentProps.readonly ? simulateField : field} />
        <EuiSpacer />
        <TemplateMappings {...subCompontentProps} field={subCompontentProps.readonly ? simulateField : field} />
        <EuiSpacer />
      </ContentPanel>
      {previewFlyoutVisible && simulateField.getValues() ? (
        <Modal.SimpleModal
          style={{
            width: 800,
          }}
          locale={{
            ok: "닫기",
          }}
          maxWidth={false}
          onClose={() => setPreviewFlyoutVisible(false)}
          title="템플릿 미리보기"
          content={<PreviewTemplate value={simulateField.getValues()} history={props.history} />}
        />
      ) : null}
      {isEdit ? null : (
        <>
          <BottomBar>
            <EuiFlexGroup alignItems="center" justifyContent="flexEnd">
              <EuiFlexItem grow={false}>
                <EuiButtonEmpty onClick={onCancel} color="ghost" iconType="cross" size="s" data-test-subj="CreateIndexTemplateCancelButton">
                  취소
                </EuiButtonEmpty>
              </EuiFlexItem>
              <PreviewTemplateButton />
              <EuiFlexItem grow={false}>
                <EuiSmallButton
                  fill
                  onClick={async () => {
                    const result = await onSubmit();
                    if (result) {
                      if (result.ok) {
                        coreServices.notifications.toasts.addSuccess(`${values.name}이(가) 성공적으로 생성되었습니다.`);
                        onSubmitSuccess && onSubmitSuccess(values.name);
                      } else {
                        coreServices.notifications.toasts.addDanger(result.error);
                      }
                    }
                  }}
                  isLoading={isSubmitting}
                  data-test-subj="CreateIndexTemplateCreateButton"
                >
                  템플릿 생성
                </EuiSmallButton>
              </EuiFlexItem>
            </EuiFlexGroup>
          </BottomBar>
        </>
      )}
      {isEdit && selectedTabId === TABS_ENUM.CONFIG && diffJson(formatTemplate(oldValue.current), formatTemplate(values)) ? (
        <UnsavedChangesBottomBar
          submitButtonDataTestSubj="updateTemplateButton"
          cancelButtonprops={{
            "data-test-subj": "CancelUpdateTemplateButton",
          }}
          unsavedCount={diffJson(formatTemplate(oldValue.current), formatTemplate(values))}
          onClickCancel={async () => {
            field.resetValues(
              formatRemoteTemplateToEditTemplate({
                templateDetail: {
                  ...oldValue.current,
                  template: IndexForm.transformIndexDetailToRemote(oldValue.current?.template),
                },
              })
            );
          }}
          onClickSubmit={async () => {
            const result = await onSubmit();
            if (result) {
              if (result.ok) {
                coreServices.notifications.toasts.addSuccess(`${values.name}이(가) 성공적으로 업데이트되었습니다.`);
                refreshTemplate();
              } else {
                coreServices.notifications.toasts.addDanger(result.error);
              }
            }
          }}
          renderProps={({ renderCancel, renderConfirm, renderUnsavedText }) => {
            return (
              <>
                {renderUnsavedText()}
                {renderCancel()}
                <PreviewTemplateButton />
                {renderConfirm()}
              </>
            );
          }}
        />
      ) : null}
    </>
  );
};

// @ts-ignore
export default forwardRef(TemplateDetail);
