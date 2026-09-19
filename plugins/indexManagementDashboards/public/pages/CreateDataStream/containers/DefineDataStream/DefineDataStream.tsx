/*
 * Copyright OpenSearch Contributors
 * SPDX-License-Identifier: Apache-2.0
 */
import React, { useRef, useMemo } from "react";
import {
  EuiLink,
  EuiSpacer,
  EuiFlexGroup,
  EuiFlexItem,
  EuiBadge,
  EuiToolTip,
  EuiHealth,
  EuiText,
  EuiPanel,
  EuiHorizontalRule,
  EuiFlexGrid,
  EuiTitle,
} from "@elastic/eui";
import { DataStreamInEdit, SubDetailProps, TemplateItem } from "../../interface";
import { ContentPanel } from "../../../../components/ContentPanel";
import CustomFormRow from "../../../../components/CustomFormRow";
import { AllBuiltInComponents } from "../../../../components/FormGenerator";
import DescriptionListHoz from "../../../../components/DescriptionListHoz";
import { INDEX_NAMING_PATTERN, ROUTES } from "../../../../utils/constants";
import { findPatternMatchesString, getCommonFormRowProps, getStringBeforeStar, setMatchedTemplate } from "../../hooks";
import { filterByMinimatch } from "../../../../../utils/helper";
import { HEALTH_TO_COLOR } from "../../../DataStreams/utils/constants";
import { healthExplanation } from "../../../DataStreams/containers/DataStreams/DataStreams";
import ComboBoxWithoutWarning from "../../../../components/ComboBoxWithoutWarning";

export default function DefineDataStream(
  props: SubDetailProps & {
    allDataStreamTemplates: TemplateItem[];
  }
) {
  const { field, isEdit, allDataStreamTemplates } = props;
  const comboBoxRef = useRef<ComboBoxWithoutWarning<any>>(null);
  const values: DataStreamInEdit = field.getValues();
  const searchValue = values.name || "";
  const Component = isEdit ? AllBuiltInComponents.Text : AllBuiltInComponents.ComboBoxSingle;
  const allDataStreamOrderedByPriority = useMemo(() => {
    const newDataStream = [...allDataStreamTemplates];
    newDataStream.sort((a, b) => (a.index_template.priority > b.index_template.priority ? -1 : 1));
    return newDataStream;
  }, [allDataStreamTemplates]);
  const matchedList = allDataStreamTemplates.filter((item) => {
    if (!searchValue) {
      return true;
    } else if (item.index_template.index_patterns.some((item) => item.match(new RegExp(searchValue, "i")))) {
      return true;
    }

    return filterByMinimatch(searchValue || "", item.index_template.index_patterns);
  });
  matchedList.sort((a, b) => (a.index_template.priority > b.index_template.priority ? -1 : 1));
  const suggestionRegister = field.registerField({
    name: "name",
    rules: [
      {
        pattern: INDEX_NAMING_PATTERN,
        message: "유효하지 않은 데이터 스트림 이름입니다.",
      },
      {
        validator: (rule, value) => {
          return new Promise((resolve, reject) => {
            setTimeout(() => {
              if (field.getValue("matchedTemplate")) {
                resolve("");
              } else {
                reject(`데이터 스트림 [${value || ""}]에 대해 일치하는 인덱스 템플릿을 찾을 수 없습니다.`);
              }
            }, 0);
          });
        },
      },
    ],
    props: {},
  });
  const onBlurCallback = () => {
    const nameValue = field.getValue("name") || "";
    // find the matched template
    const findMatchedTemplate = allDataStreamOrderedByPriority.find((item) => {
      const { findMatchesPattern, findStringPattern } = findPatternMatchesString(nameValue, item);
      return findMatchesPattern || findStringPattern;
    });
    suggestionRegister.onChange(nameValue);
    if (findMatchedTemplate) {
      setMatchedTemplate({
        matchedTemplate: findMatchedTemplate,
        field,
      });
    } else {
      field.setValues({
        matchedTemplate: "",
        template: {},
      });
    }
  };

  const listItems = [
    {
      title: "이름",
      description: values.name,
    },
    {
      title: "상태",
      description: ((health: string) => {
        const healthLowerCase = health?.toLowerCase() as "green" | "yellow" | "red";
        const color = health ? HEALTH_TO_COLOR[healthLowerCase] : "subdued";
        const text = (health || "").toLowerCase();
        return (
          <EuiToolTip content={healthExplanation[healthLowerCase] || ""}>
            <EuiHealth color={color} className="indices-health">
              {text}
            </EuiHealth>
          </EuiToolTip>
        );
      })(values.status),
    },
    {
      title: "템플릿 이름",
      description: <EuiLink href={`#${ROUTES.CREATE_TEMPLATE}/${values.template}`}>{values.template}</EuiLink>,
    },
    {
      title: "백업 인덱스",
      description: (values.indices || []).length,
    },
    {
      title: "시간 필드",
      description: values.timestamp_field?.name || "",
    },
  ];

  const createTitle = (
    <EuiText size="s">
      <h2>데이터 스트림 정의</h2>
    </EuiText>
  );

  return isEdit ? (
    <EuiPanel>
      <EuiFlexGroup gutterSize="xs" alignItems="center">
        <EuiTitle size="s">
          <h2>데이터 스트림 세부정보</h2>
        </EuiTitle>
      </EuiFlexGroup>
      <EuiHorizontalRule margin={"xs"} />
      <div>
        <EuiFlexGrid columns={4}>
          {listItems.map((item) => (
            <EuiFlexItem key={`${item.title}#${item.description}`}>
              <EuiText size="s">
                <dt>{item.title}</dt>
                <dd>{item.description}</dd>
              </EuiText>
            </EuiFlexItem>
          ))}
        </EuiFlexGrid>
      </div>
    </EuiPanel>
  ) : (
    <EuiPanel>
      <EuiFlexGroup gutterSize="xs" alignItems="center">
        <EuiTitle size="s">
          <h2>데이터 스트림 정의</h2>
        </EuiTitle>
      </EuiFlexGroup>
      <EuiHorizontalRule margin={"xs"} />
      <div>
        <CustomFormRow
          {...getCommonFormRowProps("name", field)}
          label={
            <EuiText size="s">
              <h3>데이터 스트림 이름</h3>
            </EuiText>
          }
          fullWidth
          helpText={
            <>
              데이터 스트림 이름을 입력하세요. 데이터 스트림 템플릿의 인덱스 패턴과 일치해야 합니다.{" "}
              <EuiLink href={`#${ROUTES.TEMPLATES}`} external target="_blank">
                템플릿 관리
              </EuiLink>
            </>
          }
        >
          <Component
            placeholder="데이터 스트림 이름을 입력하세요"
            options={matchedList.map((item) => ({
              label: item.name,
              value: item,
            }))}
            renderOption={(option: { value: TemplateItem; label: string }) => {
              return (
                <EuiFlexGroup style={{ overflowX: "auto" }} justifyContent="spaceBetween">
                  <EuiFlexItem grow={false}>{option.value.index_template.index_patterns.join(",")}</EuiFlexItem>
                  <EuiFlexItem grow={false}>
                    <EuiBadge color="hollow">{option.label}</EuiBadge>
                  </EuiFlexItem>
                </EuiFlexGroup>
              );
            }}
            async
            {...suggestionRegister}
            value={comboBoxRef.current?.state.hasFocus ? undefined : suggestionRegister.value}
            ref={comboBoxRef}
            onCreateOption={() => {}}
            customOptionText={
              searchValue
                ? `{searchValue}은(는) 템플릿의 인덱스 패턴과 일치하지 않습니다. 다른 이름을 입력하거나 데이터 스트림 템플릿을 생성하세요.`
                : `데이터 스트림 템플릿이 없습니다. 데이터 스트림 템플릿을 생성하세요.`
            }
            onSearchChange={(dataStreamName: string) => {
              if (!dataStreamName) {
                return;
              }
              field.setValue("name", dataStreamName);
            }}
            onFocus={() => {
              comboBoxRef.current?.setState({
                searchValue: field.getValue("name") || "",
              });
            }}
            onBlur={() => {
              onBlurCallback();
              comboBoxRef.current?.setState({
                searchValue: "",
              });
            }}
            onChange={(value: string, selectedOption: { value: TemplateItem }) => {
              if (!value) {
                field.resetValues({
                  name: "",
                });
              } else {
                const findItem = selectedOption.value;
                const { findMatchesPattern, findWordLikePattern } = findPatternMatchesString(searchValue, findItem);
                let finalSearchValue = searchValue;
                if (findMatchesPattern) {
                  // do nothing
                } else if (findWordLikePattern) {
                  const finalReplaceValue = getStringBeforeStar(findWordLikePattern);
                  finalSearchValue = finalReplaceValue;
                  field.setValue("name", finalReplaceValue);
                }
                setTimeout(() => {
                  comboBoxRef.current?.setState(
                    {
                      searchValue: finalSearchValue,
                      hasFocus: true,
                      isListOpen: true,
                    },
                    () => {
                      onBlurCallback();
                    }
                  );
                }, 100);
              }
            }}
          />
        </CustomFormRow>
        <EuiSpacer />
        <CustomFormRow
          label={
            <EuiText size="s">
              <h3>일치하는 템플릿</h3>
            </EuiText>
          }
        >
          {values.matchedTemplate ? (
            <EuiText size="s">
              <EuiLink href={`#${ROUTES.CREATE_TEMPLATE}/${values.matchedTemplate}`}>{values.matchedTemplate}</EuiLink>
            </EuiText>
          ) : (
            <EuiText size="s">
              <p>일치하는 인덱스 템플릿이 없습니다.</p>
            </EuiText>
          )}
        </CustomFormRow>
      </div>
    </EuiPanel>
  );
}
