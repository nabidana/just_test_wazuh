/*
 * Copyright OpenSearch Contributors
 * SPDX-License-Identifier: Apache-2.0
 */
import React, { useContext, useEffect, useRef } from "react";
import {
  EuiSmallButton,
  EuiCallOut,
  EuiModal,
  EuiModalHeader,
  EuiModalBody,
  EuiModalFooter,
  EuiSpacer,
  EuiModalHeaderTitle,
  EuiText,
} from "@elastic/eui";
import FormGenerator, { IFormGeneratorRef } from "../../../../components/FormGenerator";
import RemoteSelect from "../../../../components/RemoteSelect";
import { ServicesContext } from "../../../../services";
import { BrowserServices } from "../../../../models/interfaces";
import { CoreServicesContext } from "../../../../components/core_services";
import { IAlias } from "../../interface";
import { getAliasActionsByDiffArray } from "../../../CreateIndex/containers/IndexForm";
import { filterByMinimatch } from "../../../../../utils/helper";
import { SYSTEM_ALIAS, SYSTEM_INDEX } from "../../../../../utils/constants";
import { DataStream } from "../../../../../server/models/interfaces";
import { INDEX_NAMING_MESSAGE, INDEX_NAMING_PATTERN } from "../../../../utils/constants";

export interface ICreateAliasProps {
  visible: boolean;
  onSuccess: () => void;
  onClose: () => void;
  alias?: IAlias;
}

export function IndexSelect({ value, onChange }: { value?: string[]; onChange: (val: string[]) => void }) {
  const services = useContext(ServicesContext) as BrowserServices;
  return (
    <RemoteSelect
      placeholder="인덱스 선택"
      onSearchChange={undefined}
      value={value}
      onChange={onChange}
      customOptionText="{searchValue}을(를) 인덱스 패턴으로 추가"
      refreshOptions={async ({ searchValue }) => {
        const payload: { index?: string; format: string } = {
          format: "json",
        };
        if (searchValue) {
          payload.index = `${searchValue}*`;
        }
        const [aliasResult, dataStreamList] = await Promise.all([
          services.commonService
            .apiCaller<{ index: string }[]>({
              endpoint: "cat.indices",
              data: payload,
            })
            .then((res) => {
              if (res.ok) {
                return {
                  ...res,
                  response: res.response
                    .map((item) => ({ label: item.index }))
                    .filter((item) => !filterByMinimatch(item.label, SYSTEM_INDEX)),
                };
              } else {
                return res;
              }
            }),
          services.commonService
            .apiCaller<{ data_streams?: DataStream[] }>({
              endpoint: "transport.request",
              data: {
                path: "/_data_stream",
                method: "GET",
              },
            })
            .then((res): string[] => {
              if (res.ok) {
                return (
                  res.response.data_streams?.reduce(
                    (total, current) => [...total, current.name, ...current.indices.map((item) => item.index_name)],
                    [] as string[]
                  ) || []
                );
              }

              return [];
            }),
        ]);

        if (aliasResult.ok) {
          return {
            ...aliasResult,
            response: aliasResult.response.filter((item) => !dataStreamList.includes(item.label)),
          };
        }

        return aliasResult;
      }}
    />
  );
}

export default function CreateAlias(props: ICreateAliasProps) {
  const formGenerateRef = useRef<IFormGeneratorRef>(null);
  const services = useContext(ServicesContext) as BrowserServices;
  const coreServices = useContext(CoreServicesContext);
  const isEdit = !!props.alias;

  useEffect(() => {
    if (props.visible) {
      formGenerateRef.current?.setValues(props.alias);
    }
  }, [props.visible]);

  if (!props.visible) {
    return null;
  }

  return (
    <EuiModal onClose={props.onClose}>
      <EuiModalHeader>
        <EuiModalHeaderTitle>
          <EuiText size="s">
            <h2>별칭 {isEdit ? "업데이트" : "생성"}</h2>
          </EuiText>
        </EuiModalHeaderTitle>
      </EuiModalHeader>
      <EuiModalBody>
        {isEdit && filterByMinimatch(props.alias?.alias || "", SYSTEM_ALIAS) ? (
          <>
            <EuiCallOut color="warning" size="s">
              이 별칭에는 중요한 시스템 데이터가 포함되어 있을 수 있습니다. 시스템 별칭을 변경하면 OpenSearch가 손상될 수 있습니다.
            </EuiCallOut>
            <EuiSpacer />
          </>
        ) : null}
        <FormGenerator
          ref={formGenerateRef}
          value={{ ...props.alias }}
          formFields={[
            {
              name: "alias",
              type: "Input",
              rowProps: {
                label: (
                  <EuiText size="s">
                    <h3>별칭 이름</h3>
                  </EuiText>
                ),
                position: "bottom",
                helpText: INDEX_NAMING_MESSAGE,
              },
              options: {
                props: {
                  placeholder: "별칭 이름 지정",
                  disabled: isEdit,
                },
                rules: [
                  {
                    pattern: INDEX_NAMING_PATTERN,
                    message: "유효하지 않은 별칭 이름입니다.",
                  },
                ],
              },
            },
            {
              name: "indexArray",
              component: IndexSelect,
              rowProps: {
                label: (
                  <EuiText size="s">
                    <h3>인덱스 또는 인덱스 패턴</h3>
                  </EuiText>
                ),
                helpText: "별칭에 포함할 인덱스 또는 인덱스 패턴을 하나 이상 지정하세요.",
              },
              options: {
                props: {
                  placeholder: "인덱스를 선택하거나 인덱스 패턴을 입력하세요.",
                },
                rules: [
                  {
                    validator: (rule, value?: string[]) => {
                      if (!value || !value.length) {
                        return Promise.reject("하나 이상의 인덱스를 선택해야 합니다.");
                      }

                      return Promise.resolve();
                    },
                  },
                ],
              },
            },
          ]}
        />
        <EuiSpacer />
      </EuiModalBody>
      <EuiModalFooter>
        <div>
          <EuiSmallButton data-test-subj="cancelCreateAliasButton" style={{ marginRight: 20 }} onClick={props.onClose}>
            취소
          </EuiSmallButton>
          <EuiSmallButton
            fill
            color="primary"
            data-test-subj="createAliasButton"
            onClick={async () => {
              const { errors, values } = (await formGenerateRef.current?.validatePromise()) || {};
              if (errors) {
                return;
              }

              let result: { ok: boolean; error?: string };

              if (isEdit) {
                const actions = getAliasActionsByDiffArray(props.alias?.indexArray || [], values.indexArray || [], (index) => ({
                  alias: values.alias,
                  index,
                }));
                if (actions.length === 0) {
                  result = {
                    ok: true,
                  };
                } else {
                  result = await services?.commonService.apiCaller({
                    endpoint: "indices.updateAliases",
                    data: {
                      body: {
                        actions,
                      },
                    },
                  });
                }
              } else {
                result = await services?.commonService.apiCaller({
                  endpoint: "indices.putAlias",
                  data: {
                    index: values.indexArray,
                    name: values.alias,
                  },
                });
              }

              if (result?.ok) {
                coreServices?.notifications.toasts.addSuccess(`${values.alias}이(가) 성공적으로 ${isEdit ? "업데이트" : "생성"}되었습니다`);
                props.onSuccess();
              } else {
                coreServices?.notifications.toasts.addDanger(result?.error || "");
              }
            }}
          >
            {isEdit ? "변경 사항 저장" : "별칭 생성"}
          </EuiSmallButton>
        </div>
      </EuiModalFooter>
    </EuiModal>
  );
}
