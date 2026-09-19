/*
 * Copyright OpenSearch Contributors
 * SPDX-License-Identifier: Apache-2.0
 */
import React from "react";
import { EuiFlexGrid, EuiFlexItem, EuiLink, EuiSpacer, EuiText } from "@elastic/eui";
import flat from "flat";
import CustomFormRow from "../../../../components/CustomFormRow";
import { AllBuiltInComponents } from "../../../../components/FormGenerator";
import AdvancedSettings from "../../../../components/AdvancedSettings";
import DescriptionListHoz from "../../../../components/DescriptionListHoz";
import { INDEX_SETTINGS_URL } from "../../../../utils/constants";
import { SubDetailProps } from "../../interface";
import { getCommonFormRowProps } from "../../hooks";

export default function IndexSettings(props: SubDetailProps) {
  const { readonly, field } = props;
  const values = field.getValues();
  const listItems = [
    {
      title: "프라이머리 샤드 수",
      description: values.template?.settings?.["index.number_of_shards"] || "-",
    },
    {
      title: "복제본 수",
      description: values.template?.settings?.["index.number_of_replicas"] || "-",
    },
    {
      title: "새로 고침 간격",
      description: values.template?.settings?.["index.refresh_interval"] || "-",
    },
  ];

  return (
    <>
      <EuiText size="s">
        <h3>인덱스 설정</h3>
      </EuiText>
      <EuiSpacer size="s" />
      {readonly ? (
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
      ) : (
        <>
          <CustomFormRow
            fullWidth
            label={
              <EuiText size="s">
                {" "}
                <h4>프라이머리 샤드 수</h4>
              </EuiText>
            }
            helpText="인덱스의 프라이머리 샤드 수를 지정하세요. 기본값은 1입니다."
            {...getCommonFormRowProps(["template", "settings", "index.number_of_shards"], field)}
          >
            <AllBuiltInComponents.Text
              {...field.registerField({
                name: ["template", "settings", "index.number_of_shards"],
              })}
            />
          </CustomFormRow>
          <EuiSpacer />
          <CustomFormRow
            fullWidth
            label={
              <EuiText size="s">
                {" "}
                <h4>복제본 수</h4>
              </EuiText>
            }
            helpText="각 프라이머리 샤드가 가져야 하는 복제본 수를 지정하세요. 기본값은 1입니다."
            {...getCommonFormRowProps(["template", "settings", "index.number_of_replicas"], field)}
          >
            <AllBuiltInComponents.Text
              {...field.registerField({
                name: ["template", "settings", "index.number_of_replicas"],
              })}
            />
          </CustomFormRow>
          <EuiSpacer />
          <CustomFormRow
            label={
              <EuiText size="s">
                {" "}
                <h4>새로 고침 간격</h4>
              </EuiText>
            }
            helpText="인덱스가 새로 고침되는 빈도를 지정하세요. 새로 고침 시 최근 변경 사항이 게시되어 검색에서 사용할 수 있게 됩니다. 기본값은 1초입니다."
            {...getCommonFormRowProps(["template", "settings", "index.refresh_interval"], field)}
          >
            <AllBuiltInComponents.Text
              {...field.registerField({
                name: ["template", "settings", "index.refresh_interval"],
              })}
            />
          </CustomFormRow>
        </>
      )}
      <EuiSpacer />
      <AdvancedSettings
        value={field.getValues().template.settings || {}}
        onChange={(totalValue) => {
          field.setValue(["template", "settings"], totalValue);
          field.validatePromise();
        }}
        accordionProps={{
          initialIsOpen: false,
          id: "accordionForCreateDataStreamSettings",
          buttonContent: <h4>고급 설정</h4>,
        }}
        editorProps={{
          disabled: true,
          width: "100%",
          formatValue: flat,
        }}
        rowProps={{
          fullWidth: true,
          label: "고급 인덱스 설정 지정",
          helpText: (
            <>
              <p>
                쉼표로 구분된 설정 목록을 지정하세요.{" "}
                <EuiLink href={INDEX_SETTINGS_URL} target="_blank" external>
                  인덱스 설정 보기
                </EuiLink>
              </p>
              <p>
                모든 설정은 플랫 구조로 처리됩니다.{" "}
                <EuiLink
                  href="https://opensearch.org/docs/latest/api-reference/index-apis/get-index/#url-parameters"
                  external
                  target="_blank"
                >
                  자세히 알아보기
                </EuiLink>
              </p>
            </>
          ),
        }}
      />
    </>
  );
}
