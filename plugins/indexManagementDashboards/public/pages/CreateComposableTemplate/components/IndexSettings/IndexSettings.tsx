import React from "react";
import { EuiLink, EuiSpacer, EuiText, EuiTitle } from "@elastic/eui";
import flat from "flat";
import { ContentPanel } from "../../../../components/ContentPanel";
import CustomFormRow from "../../../../components/CustomFormRow";
import { AllBuiltInComponents, IFieldComponentProps } from "../../../../components/FormGenerator";
import AdvancedSettings from "../../../../components/AdvancedSettings";
import { INDEX_SETTINGS_URL, IndicesUpdateMode } from "../../../../utils/constants";
import { SubDetailProps } from "../../interface";
import { getCommonFormRowProps } from "../../hooks";

const WrappedNumber = ({ onChange, ...others }: IFieldComponentProps) => {
  return (
    <AllBuiltInComponents.Number
      {...others}
      onChange={(val) => {
        if (val === "") {
          onChange(undefined);
          return;
        }

        onChange(val);
      }}
    />
  );
};

export default function IndexSettings(props: SubDetailProps) {
  const { field, isEdit, noPanel } = props;
  const values = field.getValues();
  return (
    <ContentPanel
      color={noPanel ? "ghost" : undefined}
      title={
        <EuiTitle size="s">
          <h2>인덱스 설정</h2>
        </EuiTitle>
      }
      noExtraPadding
      actions={
        <div>
          <AllBuiltInComponents.Switch
            {...field.registerField({
              name: ["includes", IndicesUpdateMode.settings],
            })}
            label="설정 사용"
            showLabel
          />
        </div>
      }
      titleSize="s"
    >
      {values.includes?.[IndicesUpdateMode.settings] ? (
        <>
          <EuiSpacer size="s" />
          <CustomFormRow
            fullWidth
            label={
              <EuiText size="s">
                <h3>기본 샤드 수</h3>
              </EuiText>
            }
            helpText={<div>인덱스의 기본 샤드 수를 지정합니다. 기본값은 1입니다.</div>}
            direction={isEdit ? "hoz" : "ver"}
            {...getCommonFormRowProps(["template", "settings", "index.number_of_shards"], field)}
          >
            <WrappedNumber
              removeWhenEmpty
              {...field.registerField({
                name: ["template", "settings", "index.number_of_shards"],
                rules: [
                  {
                    min: 1,
                    message: "샤드 수는 1보다 작을 수 없습니다.",
                  },
                  {
                    validator(rule, value) {
                      if (!value) {
                        return Promise.resolve("");
                      }
                      if (Number(value) !== parseInt(value)) {
                        return Promise.reject("기본 샤드 수는 정수여야 합니다.");
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
            fullWidth
            label={
              <EuiText size="s">
                <h3>복제본 수</h3>
              </EuiText>
            }
            helpText={<div>각 기본 샤드가 가져야 하는 복제본 수를 지정합니다. 기본값은 1입니다.</div>}
            direction={isEdit ? "hoz" : "ver"}
            {...getCommonFormRowProps(["template", "settings", "index.number_of_replicas"], field)}
          >
            <WrappedNumber
              removeWhenEmpty
              {...field.registerField({
                name: ["template", "settings", "index.number_of_replicas"],
                rules: [
                  {
                    min: 0,
                    message: "복제본 수는 0보다 작을 수 없습니다.",
                  },
                  {
                    validator(rule, value) {
                      if (!value) {
                        return Promise.resolve("");
                      }
                      if (Number(value) !== parseInt(value)) {
                        return Promise.reject("복제본 수는 정수여야 합니다.");
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
            label={
              <EuiText size="s">
                <h3>새로 고침 간격</h3>
              </EuiText>
            }
            helpText={
              <div>
                인덱스가 최근 변경 사항을 게시하고 검색 가능하도록 하는 새로 고침 빈도를 지정합니다. 기본값은 1초입니다.
              </div>
            }
            direction={isEdit ? "hoz" : "ver"}
            {...getCommonFormRowProps(["template", "settings", "index.refresh_interval"], field)}
          >
            <AllBuiltInComponents.Input
              removeWhenEmpty
              {...field.registerField({
                name: ["template", "settings", "index.refresh_interval"],
              })}
            />
          </CustomFormRow>
          <EuiSpacer />
          <AdvancedSettings
            value={field.getValues().template.settings || {}}
            onChange={(totalValue) => {
              field.setValue(["template", "settings"], totalValue);
              field.validatePromise();
            }}
            accordionProps={{
              initialIsOpen: false,
              id: "accordionForCreateComposableTemplateSettings",
              buttonContent: <h4>고급 설정</h4>,
            }}
            editorProps={{
              width: "100%",
              formatValue: flat,
            }}
            rowProps={{
              fullWidth: true,
              label: "고급 인덱스 설정 지정",
              helpText: (
                <>
                  <p>
                    쉼표로 구분된 설정 목록을 지정합니다.{" "}
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
          <EuiSpacer />
        </>
      ) : null}
    </ContentPanel>
  );
}
