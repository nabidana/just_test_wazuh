import React, { useContext } from "react";
import { EuiSpacer, EuiText, EuiTitle } from "@elastic/eui";
import { ContentPanel } from "../../../../components/ContentPanel";
import AliasSelect from "../../../../components/AliasSelect";
import CustomFormRow from "../../../../components/CustomFormRow";
import { ServicesContext } from "../../../../services";
import { BrowserServices } from "../../../../models/interfaces";
import { ALIAS_SELECT_RULE, IndicesUpdateMode } from "../../../../utils/constants";
import { getCommonFormRowProps } from "../../hooks";
import { SubDetailProps } from "../../interface";
import { AllBuiltInComponents } from "../../../../components/FormGenerator";

export default function IndexAlias(props: SubDetailProps) {
  const { field, isEdit, noPanel } = props;
  const values = field.getValues();
  const services = useContext(ServicesContext) as BrowserServices;
  return (
    <ContentPanel
      color={noPanel ? "ghost" : undefined}
      noExtraPadding
      title={
        <>
          <CustomFormRow
            fullWidth
            label={
              <EuiTitle size="s">
                <h2>인덱스 별칭</h2>
              </EuiTitle>
            }
            helpText="새 인덱스가 기존 별칭으로 참조되도록 허용하거나 새 별칭을 지정합니다."
          >
            <></>
          </CustomFormRow>
        </>
      }
      actions={
        <div>
          <AllBuiltInComponents.Switch
            {...field.registerField({
              name: ["includes", IndicesUpdateMode.alias],
            })}
            label="설정 사용"
            showLabel
          />
        </div>
      }
      titleSize="s"
    >
      {values.includes?.[IndicesUpdateMode.alias] ? (
        <>
          <EuiSpacer size="s" />
          <CustomFormRow
            fullWidth
            {...getCommonFormRowProps(["template", "aliases"], field)}
            direction={isEdit ? "hoz" : "ver"}
            label={
              <EuiText size="s">
                <h3>인덱스 별칭</h3>
              </EuiText>
            }
            helpText={<div>기존 별칭을 선택하거나 새 별칭을 지정합니다.</div>}
          >
            <AliasSelect
              {...field.registerField({
                name: ["template", "aliases"],
                rules: [...ALIAS_SELECT_RULE],
              })}
              refreshOptions={(aliasName) =>
                services?.commonService.apiCaller({
                  endpoint: "cat.aliases",
                  method: "GET",
                  data: {
                    format: "json",
                    name: `*${aliasName || ""}*`,
                    s: "alias:desc",
                  },
                })
              }
            />
          </CustomFormRow>
          <EuiSpacer size="s" />
        </>
      ) : null}
    </ContentPanel>
  );
}
