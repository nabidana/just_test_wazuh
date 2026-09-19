/*
 * Copyright OpenSearch Contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { Dispatch, SetStateAction, useContext, useState } from "react";
import { CoreStart } from "opensearch-dashboards/public";
import { ServicesContext } from "../../../../services";
import { CoreServicesContext } from "../../../../components/core_services";
import {
  EuiSmallButtonEmpty,
  EuiSmallButtonIcon,
  EuiFlyout,
  EuiFlyoutBody,
  EuiFlyoutHeader,
  EuiInMemoryTable,
  EuiLink,
  EuiTitle,
  EuiToolTip,
} from "@elastic/eui";
import { ROUTES } from "../../../../utils/constants";
import { ReactChild } from "react";
import { Modal } from "../../../../components/Modal";
import { submitTemplateChange, useComponentMapTemplate } from "../../utils/hooks";
import { BrowserServices } from "../../../../models/interfaces";

interface AssociatedTemplatesModalProps {
  componentTemplate: string;
  onUnlink?: (unlinkTemplate: string) => void;
  renderProps: (params: { setVisible: Dispatch<SetStateAction<boolean>> }) => ReactChild;
}

export default function AssociatedTemplatesModal(props: AssociatedTemplatesModalProps) {
  const { onUnlink, renderProps, componentTemplate } = props;
  const [visible, setVisible] = useState(false);
  const { loading, componentMapTemplate, reload } = useComponentMapTemplate();
  const services = useContext(ServicesContext) as BrowserServices;
  const coreServices = useContext(CoreServicesContext) as CoreStart;

  return (
    <>
      {renderProps({ setVisible })}
      {visible ? (
        <EuiFlyout onClose={() => setVisible(false)}>
          <EuiFlyoutHeader>
            <EuiTitle>
              <h2>연결된 인덱스 템플릿</h2>
            </EuiTitle>
          </EuiFlyoutHeader>
          <EuiFlyoutBody>
            <EuiInMemoryTable
              loading={loading}
              items={(componentMapTemplate[componentTemplate] || []).map((item) => ({
                name: item,
              }))}
              columns={[
                {
                  name: "템플릿",
                  field: "name",
                  sortable: true,
                  render: (value: string, record) => (
                    <EuiLink external={false} target="_blank" href={`#${ROUTES.CREATE_TEMPLATE}/${value}`}>
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
                              title: `${record.name}에서 연결을 해제하시겠습니까?`,
                              content: (
                                <p style={{ lineHeight: 1.5 }}>
                                  컴포넌트 {componentTemplate}이(가) 템플릿 {record.name}에서 제거됩니다. 이 작업은 이 템플릿으로 생성되는 새
                                  인덱스에 영향을 줍니다.
                                </p>
                              ),
                              footer: ["cancel", "confirm"],
                              locale: {
                                confirm: "연결 해제",
                              },
                              confirmButtonProps: {
                                color: "danger",
                              },
                              CancelButtonComponent: EuiSmallButtonEmpty,
                              async onOk() {
                                const updateResult = await submitTemplateChange({
                                  templateName: record.name,
                                  commonService: services.commonService,
                                  coreService: coreServices,
                                  transformTemplate(currentTemplate) {
                                    return {
                                      ...currentTemplate,
                                      composed_of: currentTemplate.composed_of?.filter((item) => item !== componentTemplate) || [],
                                    };
                                  },
                                });
                                if (updateResult.ok) {
                                  onUnlink?.(record.name);
                                  reload(true);
                                  coreServices.notifications.toasts.addSuccess(
                                    `${componentTemplate}이(가) ${record.name}에서 성공적으로 연결 해제되었습니다.`
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
              pagination
            />
          </EuiFlyoutBody>
        </EuiFlyout>
      ) : null}
    </>
  );
}
