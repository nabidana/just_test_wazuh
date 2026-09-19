/*
 * Copyright OpenSearch Contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useContext, useEffect, useMemo, useRef, useState } from "react";
import { RouteComponentProps } from "react-router-dom";
import { merge } from "lodash";
import { BREADCRUMBS, ROUTES } from "../../../../utils/constants";
import { ServicesContext } from "../../../../services";
import { BrowserServices } from "../../../../models/interfaces";
import { CoreServicesContext } from "../../../../components/core_services";
import IndexFormWrapper, { IndexForm } from "../../../../containers/IndexForm";
import {
  EuiSmallButton,
  EuiSmallButtonEmpty,
  EuiCallOut,
  EuiFlexGroup,
  EuiFlexItem,
  EuiSpacer,
  EuiTitle,
  EuiLink,
  EuiText,
  EuiHorizontalRule,
  EuiPanel,
} from "@elastic/eui";
import CustomFormRow from "../../../../components/CustomFormRow";
import { ContentPanel } from "../../../../components/ContentPanel";
import FormGenerator, { AllBuiltInComponents, IFormGeneratorRef } from "../../../../components/FormGenerator";
import { Alias } from "../../../../../server/models/interfaces";
import useField from "../../../../lib/field";
import { getIndexDetail, getOptions, getRolloveredIndex, onSubmit, submitWriteIndex } from "../../hooks";
import { IRolloverRequestBody } from "../../interface";
import { filterByMinimatch } from "../../../../../utils/helper";
import { SYSTEM_ALIAS } from "../../../../../utils/constants";
import { useUpdateUrlWithDataSourceProperties } from "../../../../components/MDSEnabledComponent";
import { getApplication, getNavigationUI, getUISettings } from "../../../../services/Services";

export interface RolloverProps extends RouteComponentProps<{ source?: string }> {}

export default function Rollover(props: RolloverProps) {
  const [options, setOptions] = useState<{
    alias: { label: string; aliases: Alias[] }[];
    dataStreams: { label: string }[];
  }>({
    alias: [],
    dataStreams: [],
  });
  const coreService = useContext(CoreServicesContext);
  const services = useContext(ServicesContext) as BrowserServices;
  const sourceRef = useRef<IFormGeneratorRef>(null);
  const indexFormRef = useRef<IndexForm>(null);
  const [tempValue, setValue] = useState<IRolloverRequestBody>({
    source: props.match.params.source,
  });
  const [loading, setIsLoading] = useState(false);
  const uiSettings = getUISettings();
  const useNewUx = uiSettings.get("home:useNewHomePage");
  const [useNewUX, setUseNewUX] = useState(useNewUx);
  const [writeIndexValue, setWriteIndexValue] = useState<string>("");
  const field = useField({
    values: {
      targetIndex: {
        settings: {
          "index.number_of_shards": 1,
          "index.number_of_replicas": 1,
          "index.refresh_interval": "1s",
        },
      },
    },
  });

  useUpdateUrlWithDataSourceProperties();

  const onChange = (val?: Record<string, any>) => {
    const finalResult = merge({}, tempValue, val);
    setValue(finalResult);
  };

  const refreshOptions = async () => {
    const result = await getOptions({
      services,
    });
    if (result.ok) {
      setOptions(
        result.response || {
          alias: [],
          dataStreams: [],
        }
      );
    } else {
      coreService?.notifications.toasts.addDanger(result.error || "");
    }
  };

  useEffect(() => {
    let breadCrumbs = useNewUX
      ? [
          BREADCRUMBS.INDICES,
          {
            ...BREADCRUMBS.ROLLOVER,
            href: `#${props.location.pathname}`,
          },
        ]
      : [
          BREADCRUMBS.INDEX_MANAGEMENT,
          {
            ...BREADCRUMBS.ROLLOVER,
            href: `#${props.location.pathname}`,
          },
        ];
    coreService?.chrome.setBreadcrumbs(breadCrumbs);
    refreshOptions();
  }, []);

  const sourceOptions = useMemo(() => {
    return [
      {
        label: "별칭",
        options: options.alias,
      },
      {
        label: "데이터 스트림",
        options: options.dataStreams,
      },
    ];
  }, [options]);

  const initialValue = useMemo(() => {
    return {
      source: props.match.params.source,
    };
  }, [props.match.params.source]);

  const sourceType: "dataStreams" | "alias" | undefined = useMemo(() => {
    const sourceValue = sourceRef.current?.getValue("source");
    if (options.alias.find((item) => item.label === sourceValue)) {
      return "alias";
    }

    if (options.dataStreams.find((item) => item.label === sourceValue)) {
      return "dataStreams";
    }

    return;
  }, [sourceRef.current?.getValue("source")]);

  const writingIndex = (() => {
    const findItem = options.alias.find((item) => item.label === sourceRef.current?.getValue("source"));
    let writeIndex = "";
    if (findItem) {
      if (findItem.aliases.length > 1) {
        // has to check if it has write_index
        if (findItem.aliases.some((item) => item.is_write_index === "true")) {
          const indexItem = findItem.aliases.find((item) => item.is_write_index === "true");
          writeIndex = indexItem?.index || "";
        }
      } else {
        writeIndex = findItem.aliases[0].index;
      }
    }

    return writeIndex;
  })();

  useEffect(() => {
    if (writingIndex && tempValue.source) {
      // do a dry run to get the rollovered writing index
      getRolloveredIndex({
        alias: tempValue.source,
        services,
      }).then((result) => {
        if (result && result.ok) {
          field.setValue(["targetIndex", "index"], result.response);
        } else {
          field.setValue(["targetIndex", "index"], "");
        }
      });
      indexFormRef.current?.simulateFromTemplate();
    }
  }, [writingIndex]);

  const reasons = useMemo(() => {
    let result: React.ReactChild[] = [];
    if (sourceType === "alias") {
      const findItem = options.alias.find((item) => item.label === sourceRef.current?.getValue("source"));
      if (!writingIndex) {
        result.push(
          <>
            <EuiFlexGroup alignItems="flexEnd">
              <EuiFlexItem grow={false}>
                롤오버를 수행하기 전에 이 별칭에서 쓰기 인덱스를 선택하세요.
                <EuiSpacer size="s" />
                <CustomFormRow label="이 별칭에서 인덱스 선택">
                  <AllBuiltInComponents.ComboBoxSingle
                    placeholder="인덱스 선택"
                    value={writeIndexValue ? writeIndexValue : undefined}
                    onChange={(val) => setWriteIndexValue(val)}
                    options={findItem?.aliases?.map((item) => ({ label: item.index }))}
                  />
                </CustomFormRow>
              </EuiFlexItem>
              <EuiFlexItem grow={false}>
                <EuiSmallButton
                  disabled={!writeIndexValue}
                  fill
                  color="primary"
                  onClick={async () => {
                    const result = await submitWriteIndex({
                      services,
                      writeIndexValue: writeIndexValue,
                      sourceRef,
                    });
                    if (result.ok) {
                      coreService?.notifications.toasts.addSuccess(`${writeIndexValue}이(가) 쓰기 인덱스로 설정되었습니다.`);
                      refreshOptions();
                    } else {
                      coreService?.notifications.toasts.addDanger(result.error);
                    }
                  }}
                >
                  쓰기 인덱스로 지정
                </EuiSmallButton>
              </EuiFlexItem>
            </EuiFlexGroup>
          </>
        );
      }
    }

    return result;
  }, [sourceType, options, writeIndexValue]);

  const { HeaderControl } = getNavigationUI();
  const { setAppDescriptionControls } = getApplication();

  const padding_style = useNewUX ? { padding: "0px 0px" } : { padding: "0px 50px" };

  const descriptionData = [
    {
      renderComponent: (
        <EuiText size="s" color="subdued">
          롤오버는 데이터 스트림 또는 인덱스 별칭에 대한 새 쓰기 인덱스를 생성합니다.
        </EuiText>
      ),
    },
  ];

  return (
    <div style={padding_style}>
      {useNewUX && <HeaderControl setMountPoint={setAppDescriptionControls} controls={descriptionData} />}
      {!useNewUX && (
        <>
          <EuiText size="s">
            <h1>롤오버</h1>
          </EuiText>
          <CustomFormRow
            helpText="롤오버는 데이터 스트림 또는 인덱스 별칭에 대한 새 쓰기 인덱스를 생성합니다."
            style={{
              marginBottom: 20,
            }}
          >
            <></>
          </CustomFormRow>
        </>
      )}
      <EuiPanel>
        <EuiFlexGroup gutterSize="xs" alignItems="center">
          <EuiTitle size="s">
            <h2>소스 구성</h2>
          </EuiTitle>
        </EuiFlexGroup>
        <EuiHorizontalRule margin={"xs"} />
        {sourceType === "alias" && filterByMinimatch(tempValue.source || "", SYSTEM_ALIAS) ? (
          <>
            <EuiCallOut color="warning">
              이 별칭에는 중요한 시스템 데이터가 포함되어 있을 수 있습니다. 시스템 별칭을 롤오버하면 OpenSearch가 손상될 수 있습니다.
            </EuiCallOut>
            <EuiSpacer />
          </>
        ) : null}
        <FormGenerator
          value={initialValue}
          onChange={onChange}
          formFields={[
            {
              name: "source",
              rowProps: {
                label: (
                  <EuiText size="s">
                    <h3>별칭 또는 데이터 스트림 선택</h3>
                  </EuiText>
                ),
                helpText: "롤오버할 별칭 또는 데이터 스트림을 선택하세요.",
              },
              options: {
                rules: [
                  {
                    required: true,
                    message: "별칭 또는 데이터 스트림을 하나 지정해야 합니다.",
                  },
                ],
                props: {
                  options: sourceOptions,
                  placeholder: "별칭 또는 데이터 스트림을 선택하세요.",
                },
              },
              type: "ComboBoxSingle",
            },
          ]}
          ref={sourceRef}
        />
        {reasons.length ? (
          <>
            <EuiSpacer />
            <EuiCallOut color="danger" title="이 별칭에는 쓰기 인덱스가 없습니다.">
              {reasons.map((item, index) => (
                <div key={index}>{item}</div>
              ))}
            </EuiCallOut>
          </>
        ) : null}
        {(() => {
          if (sourceType === "alias" && writingIndex) {
            return (
              <>
                <EuiSpacer />
                <CustomFormRow
                  label={
                    <EuiText size="s">
                      <h3>지정된 쓰기 인덱스</h3>
                    </EuiText>
                  }
                >
                  <EuiText size="s">
                    <span>{writingIndex}</span>
                  </EuiText>
                </CustomFormRow>
              </>
            );
          }

          return null;
        })()}
      </EuiPanel>
      <EuiSpacer />
      {sourceType === "alias" && writingIndex ? (
        <>
          <EuiPanel>
            <EuiFlexGroup gutterSize="xs" alignItems="center">
              <EuiFlexItem>
                <EuiText size="s">
                  <h2>새 롤오버 인덱스 구성</h2>
                </EuiText>
              </EuiFlexItem>
              <EuiFlexItem grow={false}>
                <EuiSmallButton
                  onClick={() => {
                    indexFormRef.current?.importSettings({
                      index: writingIndex,
                    });
                  }}
                >
                  이전 쓰기 인덱스에서 가져오기
                </EuiSmallButton>
              </EuiFlexItem>
            </EuiFlexGroup>
            <EuiHorizontalRule margin={"xs"} />
            <IndexFormWrapper
              {...field.registerField({
                name: "targetIndex",
              })}
              onGetIndexDetail={async (indexName) => {
                try {
                  return await getIndexDetail({
                    services,
                    indexName,
                    newIndexName: indexFormRef.current?.getValue()?.index || "",
                  });
                } catch (e) {
                  coreService?.notifications.toasts.addDanger(e as string);
                  throw e;
                }
              }}
              ref={indexFormRef}
              withoutPanel
            />
          </EuiPanel>
          <EuiSpacer />
        </>
      ) : null}
      <EuiFlexGroup alignItems="center" justifyContent="flexEnd" gutterSize="s">
        <EuiFlexItem grow={false}>
          <EuiSmallButtonEmpty
            onClick={() => {
              if (sourceType === "alias") {
                props.history.push(ROUTES.ALIASES);
              } else {
                props.history.push(ROUTES.DATA_STREAMS);
              }
            }}
            data-test-subj="rolloverCancelButton"
          >
            취소
          </EuiSmallButtonEmpty>
        </EuiFlexItem>
        <EuiFlexItem grow={false}>
          <EuiSmallButton
            disabled={loading || (sourceType === "alias" && !writingIndex)}
            fill
            onClick={async () => {
              setIsLoading(true);
              const result = await onSubmit({
                services,
                sourceRef,
                sourceType,
                writingIndex,
                indexFormRef,
                tempValue,
              });
              setIsLoading(false);
              if (result.ok) {
                coreService?.notifications.toasts.addSuccess({
                  title: ((
                    <>
                      <div>{tempValue.source}이(가) 롤오버되었습니다.</div>
                      {result.response?.new_index ? (
                        <div>
                          <EuiLink href={`#${ROUTES.INDEX_DETAIL}/${result.response.new_index}`}>{result.response?.new_index}</EuiLink>이(가)
                          이제 최신 쓰기 인덱스입니다.
                        </div>
                      ) : null}
                    </>
                  ) as unknown) as string,
                });
                props.history.replace(sourceType === "alias" ? ROUTES.ALIASES : ROUTES.DATA_STREAMS);
              } else {
                coreService?.notifications.toasts.addDanger(result.error);
              }
            }}
            isLoading={loading}
            data-test-subj="rolloverSubmitButton"
          >
            롤오버
          </EuiSmallButton>
        </EuiFlexItem>
      </EuiFlexGroup>
    </div>
  );
}
