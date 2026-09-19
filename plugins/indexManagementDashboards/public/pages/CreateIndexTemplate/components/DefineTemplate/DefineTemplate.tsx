/*
 * Copyright OpenSearch Contributors
 * SPDX-License-Identifier: Apache-2.0
 */
import React from "react";
import {
  EuiCallOut,
  EuiCheckableCard,
  EuiFlexGroup,
  EuiFlexItem,
  EuiPanel,
  EuiSpacer,
  EuiText,
  EuiTextColor,
  EuiHorizontalRule,
  EuiTitle,
} from "@elastic/eui";
import { FLOW_ENUM, SubDetailProps } from "../../interface";
import CustomFormRow from "../../../../components/CustomFormRow";
import { AllBuiltInComponents } from "../../../../components/FormGenerator";
import RemoteSelect from "../../../../components/RemoteSelect";
import { TEMPLATE_NAMING_MESSAGE, TEMPLATE_NAMING_PATTERN } from "../../../../utils/constants";
import TemplateType from "../TemplateType";
import { getCommonFormRowProps } from "../../hooks";
import { filterByMinimatch } from "../../../../../utils/helper";
import { TemplateItem } from "../../../../../models/interfaces";

export default function DefineTemplate(props: SubDetailProps) {
  const { readonly, field, isEdit } = props;
  const values: TemplateItem = field.getValues();
  const Component = isEdit ? AllBuiltInComponents.Text : AllBuiltInComponents.Input;
  const matchSystemIndex = filterByMinimatch(".kibana", values.index_patterns || []);
  const registeredFlowField = field.registerField({
    name: ["_meta", "flow"],
  });
  return readonly ? null : (
    <EuiPanel>
      <EuiTitle size="s">
        <h2>템플릿 설정</h2>
      </EuiTitle>
      <EuiHorizontalRule margin="xs" />
      <EuiSpacer size="s" />
      {isEdit ? null : (
        <>
          <CustomFormRow
            {...getCommonFormRowProps("name", field)}
            label={
              <EuiText size="s">
                <h3>템플릿 이름</h3>
              </EuiText>
            }
            direction="ver"
            helpText={<div>템플릿 이름은 템플릿 생성 후에는 변경할 수 없습니다.</div>}
          >
            <Component
              {...field.registerField({
                name: "name",
                rules: [
                  {
                    pattern: TEMPLATE_NAMING_PATTERN,
                    message: "유효하지 않은 템플릿 이름입니다.",
                  },
                ],
              })}
            />
          </CustomFormRow>
          <CustomFormRow helpText={<div>{TEMPLATE_NAMING_MESSAGE}</div>}>
            <></>
          </CustomFormRow>
          <EuiSpacer />
        </>
      )}
      <CustomFormRow
        direction={isEdit ? "hoz" : "ver"}
        {...getCommonFormRowProps("data_stream", field)}
        label={
          <EuiText size="s">
            <h3>템플릿 유형</h3>
          </EuiText>
        }
      >
        <TemplateType
          {...field.registerField({
            name: "data_stream",
          })}
        />
      </CustomFormRow>
      <EuiSpacer />
      <CustomFormRow
        {...getCommonFormRowProps("index_patterns", field)}
        label={
          <EuiText size="s">
            <h3>인덱스 패턴</h3>
          </EuiText>
        }
        direction={isEdit ? "hoz" : "ver"}
        helpText="인덱스 패턴 또는 와일드카드를 지정합니다. 각 값은 쉼표로 구분합니다. 이 템플릿의 설정은 인덱스 패턴 또는 와일드카드와 이름이 일치하는 인덱스에 적용됩니다."
      >
        <RemoteSelect
          {...field.registerField({
            name: "index_patterns",
            rules: [
              {
                validator(rule, value) {
                  if (!value || !value.length) {
                    return Promise.reject("인덱스 패턴을 지정해야 합니다");
                  }

                  return Promise.resolve("");
                },
              },
            ],
          })}
          delimiter=","
          noSuggestions
          async={false}
          refreshOptions={() =>
            Promise.resolve({
              ok: true,
              response: [],
            })
          }
          placeholder="인덱스 패턴 선택 또는 와일드카드 입력"
        />
      </CustomFormRow>
      <EuiSpacer />
      {matchSystemIndex ? (
        <>
          <CustomFormRow>
            <EuiCallOut color="warning" title="인덱스 패턴에 시스템 인덱스가 포함될 수 있습니다">
              이 템플릿은 새 시스템 인덱스에도 적용될 수 있으며 OpenSearch에 접근하는 데 영향을 줄 수 있습니다. 인덱스 패턴을 더 좁게
              지정하는 것을 권장합니다.
            </EuiCallOut>
          </CustomFormRow>
          <EuiSpacer />
        </>
      ) : null}
      <CustomFormRow
        direction={isEdit ? "hoz" : "ver"}
        {...getCommonFormRowProps("priority", field)}
        label={
          <EuiText size="s">
            <h3>우선순위</h3>
          </EuiText>
        }
        helpText="이 템플릿의 우선순위를 지정합니다. 인덱스 이름이 둘 이상의 템플릿과 일치하는 경우 우선순위가 가장 높은 템플릿이 인덱스에 적용됩니다."
      >
        <AllBuiltInComponents.Number
          {...field.registerField({
            name: "priority",
            rules: [
              {
                min: 0,
                message: "우선순위는 0보다 작을 수 없습니다.",
              },
              {
                validator(rule, value) {
                  if (Number(value) !== parseInt(value)) {
                    return Promise.reject("우선순위는 정수여야 합니다.");
                  }

                  return Promise.resolve("");
                },
              },
            ],
          })}
        />
      </CustomFormRow>
      <EuiSpacer />
      <CustomFormRow
        {...getCommonFormRowProps(["_meta", "flow"], field)}
        fullWidth
        label={
          <EuiText size="s">
            <h3>템플릿을 정의할 방법 선택</h3>
          </EuiText>
        }
      >
        <EuiFlexGroup>
          <EuiFlexItem style={{ width: 350 }} grow={false}>
            <EuiCheckableCard
              className="eui-fullHeight"
              label={
                <>
                  <div className="euiCheckableCard__label" style={{ paddingRight: 0 }}>
                    <EuiText size="s">
                      <h4>단순 템플릿</h4>
                    </EuiText>
                  </div>
                  <EuiText size="xs" className="euiCheckableCard__children">
                    <EuiTextColor color="subdued">인덱스 별칭, 설정, 매핑으로 인덱스 템플릿을 정의합니다.</EuiTextColor>
                  </EuiText>
                </>
              }
              id="checkboxForIndexTemplateFlowSimple"
              onChange={() => {
                registeredFlowField.onChange(FLOW_ENUM.SIMPLE);
              }}
              checked={registeredFlowField.value === FLOW_ENUM.SIMPLE}
            />
          </EuiFlexItem>
          <EuiFlexItem style={{ width: 350 }} grow={false}>
            <EuiCheckableCard
              className="eui-fullHeight"
              label={
                <>
                  <div className="euiCheckableCard__label" style={{ paddingRight: 0 }}>
                    <EuiText size="s">
                      <h4>컴포넌트 템플릿</h4>
                    </EuiText>
                  </div>
                  <EuiText size="xs" className="euiCheckableCard__children">
                    <EuiTextColor color="subdued">
                      인덱스 구성이 포함된 컴포넌트 템플릿을 연결하여 인덱스 템플릿을 정의합니다.
                    </EuiTextColor>
                  </EuiText>
                </>
              }
              id="checkboxForIndexTemplateFlowComponents"
              onChange={() => registeredFlowField.onChange(FLOW_ENUM.COMPONENTS)}
              checked={registeredFlowField.value === FLOW_ENUM.COMPONENTS}
            />
          </EuiFlexItem>
        </EuiFlexGroup>
      </CustomFormRow>
    </EuiPanel>
  );
}
