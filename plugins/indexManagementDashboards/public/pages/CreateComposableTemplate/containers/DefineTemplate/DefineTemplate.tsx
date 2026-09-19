import React, { useCallback, useContext } from "react";
import { EuiFlexGroup, EuiHorizontalRule, EuiPanel, EuiSpacer, EuiText, EuiTitle } from "@elastic/eui";
import { SubDetailProps } from "../../interface";
import { ContentPanel } from "../../../../components/ContentPanel";
import CustomFormRow from "../../../../components/CustomFormRow";
import { AllBuiltInComponents } from "../../../../components/FormGenerator";
import { TEMPLATE_NAMING_MESSAGE, TEMPLATE_NAMING_PATTERN } from "../../../../utils/constants";
import { getCommonFormRowProps, getTemplate } from "../../hooks";
import { BrowserServices } from "../../../../models/interfaces";
import { ServicesContext } from "../../../../services";

function debouncePromise<T extends (...args: any) => any>(func: T, wait: number) {
  let timestamp: number;
  return function (...rest: any): ReturnType<T> {
    return new Promise((resolve, reject) => {
      timestamp = Date.now();
      const funcTimestamp = timestamp;
      setTimeout(() => {
        if (funcTimestamp === timestamp) {
          func.apply(null, rest).then(resolve, reject);
        }
      }, wait);
    }) as ReturnType<T>;
  };
}

export default function DefineTemplate(props: SubDetailProps) {
  const { field, isEdit, noPanel } = props;
  const services = useContext(ServicesContext) as BrowserServices;
  const Component = isEdit ? AllBuiltInComponents.Text : AllBuiltInComponents.Input;
  const validateRemoteComponentName = useCallback(
    debouncePromise(async (rule, value): Promise<string> => {
      if (!value || isEdit) {
        return Promise.resolve("");
      }
      try {
        const templateResult = await getTemplate({
          commonService: services.commonService,
          templateName: value,
        });
        if (templateResult) {
          return Promise.reject(`컴포넌트 템플릿 ${value}이(가) 이미 존재합니다. 이름을 변경해 주세요.`);
        }
      } catch (e) {
        return Promise.resolve("");
      }

      return Promise.resolve("");
    }, 500),
    []
  );
  const content = (
    <>
      {isEdit ? null : (
        <>
          <CustomFormRow
            {...getCommonFormRowProps("name", field)}
            label={
              <EuiText size="s">
                <h3>이름</h3>
              </EuiText>
            }
            helpText={<div>이름은 컴포넌트 템플릿 생성 후에는 변경할 수 없습니다.</div>}
          >
            <Component
              {...field.registerField({
                name: "name",
                rules: [
                  {
                    pattern: TEMPLATE_NAMING_PATTERN,
                    message: "유효하지 않은 템플릿 이름입니다.",
                  },
                  {
                    validator: validateRemoteComponentName,
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
        {...getCommonFormRowProps(["_meta", "description"], field)}
        label={
          <EuiText size="s">
            <h3>
              설명 - <i>선택 사항</i>
            </h3>
          </EuiText>
        }
        helpText="이 컴포넌트를 식별하는 데 도움이 되는 목적이나 내용을 설명합니다."
        direction={isEdit ? "hoz" : "ver"}
      >
        <AllBuiltInComponents.Input
          {...field.registerField({
            name: ["_meta", "description"],
          })}
        />
      </CustomFormRow>
    </>
  );
  if (noPanel) {
    return content;
  }

  return (
    <EuiPanel>
      <EuiFlexGroup gutterSize="xs" alignItems="center">
        <EuiTitle size="s">
          <h2>{`컴포넌트 템플릿 정의`}</h2>
        </EuiTitle>
      </EuiFlexGroup>
      <EuiHorizontalRule margin={"xs"} />
      {content}
    </EuiPanel>
  );
}
