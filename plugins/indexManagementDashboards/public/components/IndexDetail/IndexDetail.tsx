/*
 * Copyright OpenSearch Contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { Ref, forwardRef, useCallback, useEffect, useImperativeHandle, useMemo, useRef, useState } from "react";
import {
  EuiSpacer,
  EuiCompressedFormRow,
  EuiLink,
  EuiOverlayMask,
  EuiLoadingSpinner,
  EuiContextMenu,
  EuiSmallButton,
  EuiCallOut,
  EuiTitle,
  EuiText,
  EuiPanel,
  EuiHorizontalRule,
} from "@elastic/eui";
import { set, merge, omit, pick } from "lodash";
import flat from "flat";
import { ContentPanel } from "../ContentPanel";
import UnsavedChangesBottomBar from "../UnsavedChangesBottomBar";
import AliasSelect, { AliasSelectProps } from "../AliasSelect";
import IndexMapping from "../IndexMapping";
import { IndexItem, IndexItemRemote } from "../../../models/interfaces";
import { ServerResponse } from "../../../server/models/types";
import {
  INDEX_IMPORT_SETTINGS,
  INDEX_DYNAMIC_SETTINGS,
  IndicesUpdateMode,
  INDEX_NAMING_MESSAGE,
  REPLICA_NUMBER_MESSAGE,
  INDEX_SETTINGS_URL,
  INDEX_NAMING_PATTERN,
  ALIAS_SELECT_RULE,
} from "../../utils/constants";
import { Modal } from "../Modal";
import FormGenerator, { IField, IFormGeneratorRef } from "../FormGenerator";
import EuiToolTipWrapper from "../EuiToolTipWrapper";
import { IIndexMappingsRef, transformArrayToObject, transformObjectToArray } from "../IndexMapping";
import { IFieldComponentProps } from "../FormGenerator";
import SimplePopover from "../SimplePopover";
import { SimpleEuiToast } from "../Toast";
import { filterByMinimatch, getOrderedJson } from "../../../utils/helper";
import { SYSTEM_INDEX } from "../../../utils/constants";
import { diffJson } from "../../utils/helpers";
import { OptionalLabel } from "../CustomFormRow";

const WrappedAliasSelect = EuiToolTipWrapper(AliasSelect as any, {
  disabledKey: "isDisabled",
});

const formatMappings = (mappings: IndexItem["mappings"]): IndexItemRemote["mappings"] => {
  return {
    ...mappings,
    properties: transformArrayToObject(mappings?.properties || []),
  };
};

export const defaultIndexSettings = {
  index: "",
  settings: {
    "index.number_of_shards": 1,
    "index.number_of_replicas": 1,
    "index.refresh_interval": "1s",
  },
  mappings: {},
};

export interface IndexDetailProps {
  onChange: (value: IndexDetailProps["value"]) => void;
  docVersion: string;
  refreshOptions: AliasSelectProps["refreshOptions"];
  value?: Partial<IndexItem>;
  oldValue?: Partial<IndexItem>;
  isEdit?: boolean;
  readonly?: boolean;
  mode?: IndicesUpdateMode;
  onSimulateIndexTemplate?: (indexName: string) => Promise<ServerResponse<IndexItemRemote>>;
  onGetIndexDetail?: (indexName: string) => Promise<IndexItemRemote>;
  sourceIndices?: string[];
  onSubmit?: () => Promise<{ ok: boolean }>;
  refreshIndex?: () => void;
  withoutPanel?: boolean;
}

export interface IIndexDetailRef {
  validate: () => Promise<boolean>;
  hasUnsavedChanges: (mode: IndicesUpdateMode) => number;
  getMappingsJSONEditorValue: () => string;
  simulateFromTemplate: () => Promise<void>;
  importSettings: (args: { index: string }) => Promise<void>;
}

const TemplateInfoCallout = (props: { visible: boolean }) => {
  return props.visible ? (
    <EuiCallOut title="인덱스 이름이 하나 이상의 인덱스 템플릿과 일치합니다">
      인덱스 별칭, 설정, 매핑이 일치하는 인덱스 템플릿으로부터 자동으로 상속됩니다.
    </EuiCallOut>
  ) : null;
};

const IndexDetail = (
  {
    value,
    onChange,
    isEdit,
    readonly,
    oldValue,
    refreshOptions,
    mode,
    onSimulateIndexTemplate,
    sourceIndices = [],
    onGetIndexDetail,
    onSubmit,
    refreshIndex,
    docVersion,
    withoutPanel,
  }: IndexDetailProps,
  ref: Ref<IIndexDetailRef>
) => {
  const valueRef = useRef(value);
  valueRef.current = value;
  const hasEdit = useRef(false);
  const onValueChange = useCallback(
    (name: string | string[], val) => {
      let finalValue = valueRef.current || {};
      set(finalValue, name, val);
      onChange({ ...finalValue });
      if (name !== "index") {
        hasEdit.current = true;
      }
    },
    [onChange, value]
  );
  const destroyRef = useRef<boolean>(false);
  const [templateSimulateLoading, setTemplateSimulateLoading] = useState(false);
  const [isMatchingTemplate, setIsMatchingTemplate] = useState(false);
  const finalValue = value || {};
  const aliasesRef = useRef<IFormGeneratorRef>(null);
  const settingsRef = useRef<IFormGeneratorRef>(null);
  const mappingsRef = useRef<IIndexMappingsRef>(null);
  const onIndexInputBlur = useCallback(async () => {
    await new Promise((resolve) => setTimeout(resolve, 200));
    if (destroyRef.current) {
      return;
    }
    if (finalValue.index && onSimulateIndexTemplate) {
      setTemplateSimulateLoading(true);
      const result = await onSimulateIndexTemplate(finalValue.index);
      if (destroyRef.current) {
        return;
      }
      setTemplateSimulateLoading(false);
      if (result && result.ok) {
        let onChangePromise: Promise<IndexItemRemote>;
        if (hasEdit.current) {
          onChangePromise = new Promise((resolve) => {
            Modal.show({
              title: "변경 사항을 템플릿과 병합하시겠습니까?",
              content:
                "인덱스 이름이 하나 이상의 인덱스 템플릿과 일치합니다. 인덱스 별칭, 설정, 매핑이 일치하는 템플릿으로부터 상속됩니다. 변경 사항을 템플릿과 병합하시겠습니까?",
              locale: {
                confirm: "템플릿과 병합",
                cancel: "템플릿으로 덮어쓰기",
              },
              footer: ["cancel", "confirm"],
              type: "confirm",
              "data-test-subj": "simulate-confirm",
              onCancel: () => resolve(result.response),
              onOk: () => {
                const formatValue: IndexItemRemote = {
                  index: "",
                  ...finalValue,
                  mappings: {
                    properties: transformArrayToObject(finalValue.mappings?.properties || []),
                  },
                };
                const mergedValue: IndexItemRemote = {
                  index: finalValue.index || "",
                };
                merge(mergedValue, result.response, formatValue);
                resolve(mergedValue);
              },
            });
          });
        } else {
          onChangePromise = Promise.resolve(result.response);
        }
        onChangePromise.then((data) => {
          onChange({
            ...data,
            mappings: {
              properties: transformObjectToArray(data?.mappings?.properties || {}),
            },
          });
          hasEdit.current = false;
          setIsMatchingTemplate(true);
        });
      } else {
        setIsMatchingTemplate(false);
      }
    }
  }, [finalValue.index, onSimulateIndexTemplate]);
  const onImportSettings = async ({ index }: { index: string }) => {
    if (onGetIndexDetail) {
      const indexDetail: IndexItemRemote = await new Promise((resolve) => {
        if (hasEdit.current) {
          Modal.show({
            type: "confirm",
            title: "확인",
            content: "이 초안에 변경 사항이 있는 것을 발견했습니다. 어떤 작업을 수행하시겠습니까?",
            locale: {
              confirm: "덮어쓰기",
              cancel: "가져오지 않음",
            },
            onOk: async () => onGetIndexDetail(index).then(resolve),
          });
        } else {
          onGetIndexDetail(index).then(resolve);
        }
      });

      onChange({
        // omit alias
        ...omit(indexDetail, ["aliases", "data_stream"]),
        mappings: {
          ...indexDetail?.mappings,
          properties: transformObjectToArray(indexDetail?.mappings?.properties || {}),
        },
        // pick some metadata in index
        settings: pick(indexDetail?.settings || {}, INDEX_IMPORT_SETTINGS),
      });
      SimpleEuiToast.addSuccess(`[${index}]의 설정 및 매핑을 성공적으로 가져왔습니다.`);
      hasEdit.current = false;
    }
  };
  useImperativeHandle(ref, () => ({
    validate: async () => {
      const result = await Promise.all([
        aliasesRef.current?.validatePromise().then((result) => result.errors),
        mappingsRef.current?.validate(),
        settingsRef.current?.validatePromise().then((result) => result.errors),
      ]);
      return result.every((item) => !item);
    },
    hasUnsavedChanges: (mode: IndicesUpdateMode) => diffJson(oldValue?.[mode], finalValue[mode]),
    getMappingsJSONEditorValue: () => mappingsRef.current?.getJSONEditorValue() || "",
    simulateFromTemplate: onIndexInputBlur,
    importSettings: onImportSettings,
  }));
  const formFields: IField[] = useMemo(() => {
    return [
      {
        rowProps: {
          label: (
            <EuiText size="s">
              <h3>기본 샤드 수</h3>
            </EuiText>
          ),
          helpText: (
            <>
              <div>인덱스의 기본 샤드 수를 지정합니다. 기본값은 1입니다. </div>
              <div>기본 샤드 수는 인덱스가 생성된 후에는 변경할 수 없습니다.</div>
            </>
          ),
          direction: isEdit ? "hoz" : "ver",
        },
        name: "index.number_of_shards",
        type: readonly || (isEdit && !INDEX_DYNAMIC_SETTINGS.includes("index.number_of_shards")) ? "Text" : "Number",
        options: {
          rules: [
            {
              min: 1,
              message: "기본 샤드 수는 1보다 작을 수 없습니다.",
            },
            {
              validator(rule, value, values) {
                if (Number(value) !== parseInt(value)) {
                  return Promise.reject("기본 샤드 수는 정수여야 합니다.");
                }

                return Promise.resolve();
              },
            },
          ],
          props: {
            placeholder: "기본 샤드 수를 지정하세요.",
            removeWhenEmpty: true,
          },
        },
      },
      {
        rowProps: {
          label: (
            <EuiText size="s">
              <h3>복제본 수</h3>
            </EuiText>
          ),
          helpText: REPLICA_NUMBER_MESSAGE,
          direction: isEdit ? "hoz" : "ver",
        },
        name: "index.number_of_replicas",
        type: readonly || (isEdit && !INDEX_DYNAMIC_SETTINGS.includes("index.number_of_replicas")) ? "Text" : "Number",
        options: {
          rules: [
            {
              min: 0,
              message: "복제본 수는 0보다 작을 수 없습니다.",
            },
            {
              validator(rule, value, values) {
                if (Number(value) !== parseInt(value)) {
                  return Promise.reject("복제본 수는 정수여야 합니다.");
                }

                return Promise.resolve();
              },
            },
          ],
          props: {
            placeholder: "복제본 수를 지정하세요.",
            removeWhenEmpty: true,
          },
        },
      },
      {
        rowProps: {
          label: (
            <EuiText size="s">
              <h3>새로 고침 간격</h3>
            </EuiText>
          ),
          helpText:
            "인덱스를 새로 고칠 빈도를 지정합니다. 새로 고침 시 최신 변경 사항이 게시되어 검색할 수 있게 됩니다. 기본값은 1초입니다.",
          direction: isEdit ? "hoz" : "ver",
        },
        name: "index.refresh_interval",
        type: readonly ? "Text" : "Input",
        options: {
          props: {
            placeholder: "새로 고침을 비활성화하려면 -1로 설정할 수 있습니다.",
            removeWhenEmpty: true,
          },
        },
      },
    ] as IField[];
  }, [isEdit, finalValue.index, templateSimulateLoading]);
  useEffect(() => {
    return () => {
      destroyRef.current = true;
    };
  }, []);
  return (
    <>
      {isEdit && !readonly && filterByMinimatch(value?.index as string, SYSTEM_INDEX) ? (
        <>
          <EuiCallOut color="warning">
            이 인덱스에는 중요한 시스템 데이터가 포함되어 있을 수 있습니다. 시스템 인덱스를 변경하면 OpenSearch가 손상될 수 있습니다.
          </EuiCallOut>
          <EuiSpacer />
        </>
      ) : null}
      {isEdit && mode && mode !== IndicesUpdateMode.alias
        ? null
        : (() => {
            const content = (
              <FormGenerator
                ref={aliasesRef}
                formFields={[
                  {
                    name: "index",
                    rowProps: {
                      label: (
                        <EuiText size="s">
                          <h3>인덱스 이름</h3>
                        </EuiText>
                      ),
                      helpText: <div>{INDEX_NAMING_MESSAGE}</div>,
                      position: "bottom",
                      style: isEdit ? { display: "none" } : {},
                    },
                    type: readonly || isEdit ? "Text" : "Input",
                    options: {
                      props: {
                        placeholder: "새 인덱스의 이름을 지정하세요.",
                        onBlur: onIndexInputBlur,
                        isLoading: templateSimulateLoading,
                      },
                      rules: [
                        {
                          pattern: INDEX_NAMING_PATTERN,
                          message: "잘못된 인덱스 이름입니다.",
                        },
                      ],
                    },
                  },
                  {
                    name: "templateMessage",
                    rowProps: {
                      fullWidth: true,
                    },
                    component: () => <TemplateInfoCallout visible={!isEdit && isMatchingTemplate} />,
                  },
                  {
                    name: "aliases",
                    rowProps: {
                      label: (
                        <EuiText size="s">
                          <h3>
                            인덱스 별칭 <OptionalLabel />
                          </h3>
                        </EuiText>
                      ),
                      helpText: "이 인덱스가 기존 별칭으로 참조되도록 허용하거나 새 별칭을 지정하세요.",
                      direction: isEdit ? "hoz" : "ver",
                    },
                    options: {
                      props: {
                        refreshOptions: refreshOptions,
                      },
                      rules: [...ALIAS_SELECT_RULE],
                    },
                    component: WrappedAliasSelect as React.ComponentType<IFieldComponentProps>,
                  },
                ]}
                value={{
                  index: finalValue.index,
                  aliases: finalValue.aliases,
                }}
                onChange={(totalValue, name, val) => {
                  onValueChange(name as string, val);
                }}
              />
            );
            if (mode && mode === IndicesUpdateMode.alias) {
              return content;
            }

            const title = "인덱스 정의";

            if (withoutPanel) {
              return (
                <>
                  <EuiTitle size="s">
                    <span>{title}</span>
                  </EuiTitle>
                  <EuiSpacer size="s" />
                  {content}
                  <EuiSpacer />
                </>
              );
            }

            return (
              <>
                <EuiPanel>
                  <EuiTitle size="s">
                    <h2>{title}</h2>
                  </EuiTitle>
                  <EuiHorizontalRule margin="xs" />
                  {content}
                </EuiPanel>
                <EuiSpacer />
              </>
            );
          })()}
      {sourceIndices.length ? (
        <>
          <SimplePopover
            data-test-subj="moreAction"
            panelPaddingSize="none"
            button={
              <EuiSmallButton iconType="arrowDown" iconSide="right" data-test-subj="importSettingMappingBtn">
                설정 및 매핑 가져오기
              </EuiSmallButton>
            }
          >
            <EuiContextMenu
              initialPanelId={0}
              // The EuiContextMenu has bug when testing in jest
              // the props change won't make it rerender
              key={sourceIndices.join(",")}
              size="s"
              panels={[
                {
                  id: 0,
                  width: 400,
                  items: sourceIndices.map((sourceIndex) => ({
                    name: sourceIndex,
                    "data-test-subj": `import-settings-${sourceIndex}`,
                    onClick: () => onImportSettings({ index: sourceIndex }),
                  })),
                },
              ]}
            />
          </SimplePopover>
          <EuiSpacer />
        </>
      ) : null}
      {isEdit && mode && mode !== IndicesUpdateMode.settings
        ? null
        : (() => {
            const content = (
              <FormGenerator
                ref={settingsRef}
                value={{ ...finalValue.settings }}
                onChange={(totalValue, name, val) => {
                  if (name) {
                    onValueChange(["settings", name as string], val);
                  } else {
                    onValueChange("settings", val);
                  }
                }}
                formFields={formFields}
                hasAdvancedSettings
                resetValuesWhenPropsValueChange
                advancedSettingsProps={{
                  editorProps: {
                    mode: isEdit && !readonly ? "diff" : "json",
                    disabled: readonly,
                    original: JSON.stringify(getOrderedJson(oldValue?.settings || {}), null, 2),
                    width: "100%",
                    formatValue: flat,
                  },
                  accordionProps: {
                    initialIsOpen: false,
                    id: "accordionForCreateIndexSettings",
                    buttonContent: <h3>고급 설정</h3>,
                  },
                  rowProps: {
                    label: "고급 인덱스 설정 지정",
                    fullWidth: true,
                    helpText: (
                      <>
                        <p>
                          쉼표로 구분된 설정 목록을 지정하세요.{" "}
                          <EuiLink external href={INDEX_SETTINGS_URL} target="_blank">
                            인덱스 설정 보기.
                          </EuiLink>
                        </p>
                        <p>
                          모든 설정은 플랫(flat) 구조로 처리됩니다.{" "}
                          <EuiLink
                            href={`https://opensearch.org/docs/${docVersion}/api-reference/index-apis/get-index/#url-parameters`}
                            external
                            target="_blank"
                          >
                            자세히 알아보기
                          </EuiLink>
                          .
                        </p>
                      </>
                    ),
                  },
                }}
              />
            );
            if (mode && mode === IndicesUpdateMode.settings) {
              return content;
            }

            const title = "인덱스 설정";

            if (withoutPanel) {
              return (
                <>
                  <EuiTitle size="s">
                    <h2>{title}</h2>
                  </EuiTitle>
                  <EuiSpacer size="s" />
                  {content}
                  <EuiSpacer />
                </>
              );
            }

            return (
              <>
                <EuiPanel>
                  <EuiTitle size="s">
                    <h2>인덱스 설정</h2>
                  </EuiTitle>
                  <EuiHorizontalRule margin="xs" />
                  {content}
                </EuiPanel>
                <EuiSpacer />
              </>
            );
          })()}
      {isEdit && mode && mode !== IndicesUpdateMode.mappings
        ? null
        : (() => {
            const content = (
              <EuiCompressedFormRow fullWidth>
                <IndexMapping
                  isEdit={isEdit}
                  value={finalValue?.mappings}
                  oldValue={oldValue?.mappings}
                  onChange={(val) => onValueChange("mappings", val)}
                  ref={mappingsRef}
                  readonly={readonly}
                  docVersion={docVersion}
                />
              </EuiCompressedFormRow>
            );

            if (mode && mode === IndicesUpdateMode.mappings) {
              return content;
            }

            if (withoutPanel) {
              return (
                <>
                  <EuiTitle size="s">
                    <div>인덱스 매핑</div>
                  </EuiTitle>
                  <EuiSpacer size="s" />
                  {content}
                  <EuiSpacer />
                </>
              );
            }

            return (
              <EuiPanel>
                <EuiTitle size="s">
                  <h2>
                    인덱스 매핑
                    <OptionalLabel />
                  </h2>
                </EuiTitle>
                <EuiCompressedFormRow
                  fullWidth
                  helpText={
                    <>
                      <div>
                        문서와 필드가 저장되고 색인되는 방식을 정의합니다.{" "}
                        <EuiLink target="_blank" external href={`https://opensearch.org/docs/${docVersion}/opensearch/mappings/`}>
                          자세히 알아보기
                        </EuiLink>
                      </div>
                      <div>매핑과 필드 유형은 인덱스가 생성된 후에는 변경할 수 없습니다.</div>
                    </>
                  }
                >
                  <></>
                </EuiCompressedFormRow>
                <EuiHorizontalRule margin="xs" />
                {content}
              </EuiPanel>
            );
          })()}
      {templateSimulateLoading ? (
        <EuiOverlayMask headerZindexLocation="below">
          <EuiLoadingSpinner size="l" />
          기존 템플릿과 함께 템플릿을 시뮬레이션하는 중입니다. 잠시만 기다려 주세요.
        </EuiOverlayMask>
      ) : null}
      {isEdit && mode === IndicesUpdateMode.settings && diffJson(oldValue?.settings, finalValue.settings) ? (
        <UnsavedChangesBottomBar
          submitButtonDataTestSubj="createIndexCreateButton"
          unsavedCount={diffJson(oldValue?.settings, finalValue.settings)}
          onClickCancel={async () => {
            onValueChange("settings", JSON.parse(JSON.stringify(oldValue?.settings || {})));
          }}
          onClickSubmit={async () => {
            const result = (await onSubmit?.()) || { ok: false };
            if (result.ok) {
              refreshIndex?.();
            }
          }}
        />
      ) : null}
      {isEdit &&
      mode === IndicesUpdateMode.mappings &&
      diffJson(formatMappings(oldValue?.mappings), formatMappings(finalValue.mappings)) ? (
        <UnsavedChangesBottomBar
          submitButtonDataTestSubj="createIndexCreateButton"
          unsavedCount={diffJson(formatMappings(oldValue?.mappings), formatMappings(finalValue.mappings))}
          onClickCancel={async () => {
            onValueChange("mappings", JSON.parse(JSON.stringify(oldValue?.mappings || {})));
          }}
          onClickSubmit={async () => {
            const result = (await onSubmit?.()) || { ok: false };
            if (result.ok) {
              refreshIndex?.();
            }
          }}
        />
      ) : null}
      {isEdit && mode === IndicesUpdateMode.alias && diffJson(oldValue?.aliases, finalValue.aliases) ? (
        <UnsavedChangesBottomBar
          submitButtonDataTestSubj="createIndexCreateButton"
          unsavedCount={diffJson(oldValue?.aliases, finalValue.aliases)}
          onClickCancel={async () => {
            onValueChange("aliases", JSON.parse(JSON.stringify(oldValue?.aliases || {})));
          }}
          onClickSubmit={async () => {
            const result = (await onSubmit?.()) || { ok: false };
            if (result.ok) {
              refreshIndex?.();
            }
          }}
        />
      ) : null}
    </>
  );
};

// @ts-ignore
export default forwardRef(IndexDetail);
