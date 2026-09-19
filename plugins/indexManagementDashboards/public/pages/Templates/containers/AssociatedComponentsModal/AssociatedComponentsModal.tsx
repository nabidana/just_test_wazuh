/*
 * Copyright OpenSearch Contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { Dispatch, SetStateAction, useContext, useState } from "react";
import { CoreStart } from "opensearch-dashboards/public";
import { ServicesContext } from "../../../../services";
import { CoreServicesContext } from "../../../../components/core_services";
import {
  EuiSmallButtonIcon,
  EuiFlyout,
  EuiFlyoutBody,
  EuiFlyoutHeader,
  EuiInMemoryTable,
  EuiLink,
  EuiTitle,
  EuiToolTip,
  EuiText,
} from "@elastic/eui";
import { ROUTES } from "../../../../utils/constants";
import { ReactChild } from "react";
import { Modal } from "../../../../components/Modal";
import { BrowserServices } from "../../../../models/interfaces";
import { TemplateItemRemote } from "../../../../../models/interfaces";
import { ITemplate } from "../../interface";
import { getTemplate } from "../../../ComposableTemplates/utils/hooks";

export interface AssociatedComponentsModalProps {
  template: ITemplate;
  onUnlink?: (unlinkTemplate: string) => void;
  renderProps: (params: { setVisible: Dispatch<SetStateAction<boolean>> }) => ReactChild;
}

export default function AssociatedComponentsModal(props: AssociatedComponentsModalProps) {
  const { onUnlink, renderProps, template } = props;
  const [visible, setVisible] = useState(false);
  const services = useContext(ServicesContext) as BrowserServices;
  const coreServices = useContext(CoreServicesContext) as CoreStart;

  return (
    <>
      {renderProps({ setVisible })}
      {visible ? (
        <EuiFlyout onClose={() => setVisible(false)}>
          <EuiFlyoutHeader>
            <EuiText size="s">
              <h2>연결된 컴포넌트 템플릿</h2>
            </EuiText>
          </EuiFlyoutHeader>
          <EuiFlyoutBody>
            <EuiInMemoryTable
              pagination
              items={(template.templateDetail?.composed_of || []).map((item) => ({
                name: item,
              }))}
              columns={[
                {
                  name: "컴포넌트 템플릿",
                  field: "name",
                  sortable: true,
                  render: (value: string, record) => (
                    <EuiLink external={false} target="_blank" href={`#${ROUTES.CREATE_COMPOSABLE_TEMPLATE}/${value}`}>
                      {value}
                    </EuiLink>
                  ),
                },
                {
                  name: "작업",
                  field: "actions",
                  align: "right",
                  render: (value: string, record) => {
                    return (
                      <EuiToolTip content="연결 해제">
                        <EuiSmallButtonIcon
                          aria-label={`${record.name} 연결을 해제하시겠습니까?`}
                          iconType="unlink"
                          onClick={() => {
                            Modal.show({
                              type: "confirm",
                              title: `${template.name}에서 연결을 해제하시겠습니까?`,
                              content: (
                                <p style={{ lineHeight: 1.5 }}>
                                  컴포넌트 {record.name}이(가) 템플릿 {template.name}에서 제거됩니다. 이 작업은 이 템플릿으로 생성되는 새 인덱스에
                                  영향을 줍니다.
                                </p>
                              ),
                              footer: ["cancel", "confirm"],
                              locale: {
                                confirm: "연결 해제",
                              },
                              confirmButtonProps: {
                                color: "danger",
                              },
                              async onOk() {
                                const currentTemplate = await getTemplate({
                                  templateName: template.name,
                                  commonService: services.commonService,
                                  coreService: coreServices,
                                });
                                const updateResult = await services.commonService.apiCaller({
                                  endpoint: "transport.request",
                                  data: {
                                    method: "POST",
                                    path: `/_index_template/${template.name}`,
                                    body: {
                                      ...currentTemplate,
                                      composed_of: currentTemplate?.composed_of?.filter((item) => item !== record.name) || [],
                                    } as TemplateItemRemote,
                                  },
                                });
                                if (updateResult.ok) {
                                  onUnlink?.(record.name);
                                  coreServices.notifications.toasts.addSuccess(
                                    `${record.name}이(가) ${template.name}에서 성공적으로 연결 해제되었습니다.`
                                  );
                                } else {
                                  coreServices.notifications.toasts.addDanger(updateResult.error);
                                  return Promise.reject(updateResult.error);
                                }
                              },
                            });
                          }}
                        />
                      </EuiToolTip>
                    );
                  },
                },
              ]}
            />
          </EuiFlyoutBody>
        </EuiFlyout>
      ) : null}
    </>
  );
}
