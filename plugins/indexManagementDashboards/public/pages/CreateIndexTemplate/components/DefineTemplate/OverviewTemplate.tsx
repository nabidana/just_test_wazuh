/*
 * Copyright OpenSearch Contributors
 * SPDX-License-Identifier: Apache-2.0
 */
import React from "react";
import { EuiLink, EuiPanel, EuiSpacer, EuiText, EuiHorizontalRule, EuiTitle } from "@elastic/eui";
import { SubDetailProps } from "../../interface";
import DescriptionListHoz from "../../../../components/DescriptionListHoz";
import { ROUTES } from "../../../../utils/constants";
import { TemplateConvert } from "../TemplateType";
import { TemplateItem } from "../../../../../models/interfaces";

export default function OverviewTemplate(props: SubDetailProps) {
  const { field, withoutPanel, columns } = props;
  const values: TemplateItem = field.getValues();
  const content = (
    <>
      <EuiSpacer size="s" />
      <DescriptionListHoz
        compressed
        columns={columns}
        listItems={[
          {
            title: (
              <EuiText size="s">
                <h4>템플릿 유형</h4>
              </EuiText>
            ),
            description: TemplateConvert({
              value: values.data_stream,
            }),
          },
          {
            title: (
              <EuiText size="s">
                <h4>인덱스 패턴</h4>
              </EuiText>
            ),
            description: values.index_patterns?.join(", "),
          },
          {
            title: (
              <EuiText size="s">
                <h4>우선순위</h4>
              </EuiText>
            ),
            description: values.priority,
          },
          {
            title: (
              <EuiText size="s">
                <h4>연결된 컴포넌트 템플릿</h4>
              </EuiText>
            ),
            description: (values.composed_of || []).length
              ? (values.composed_of || []).map((item) => (
                  <div key={item}>
                    <EuiLink external={false} target="_blank" href={`#${ROUTES.CREATE_COMPOSABLE_TEMPLATE}/${item}`}>
                      {item}
                    </EuiLink>
                  </div>
                ))
              : "-",
          },
        ]}
      />
    </>
  );

  return withoutPanel ? (
    content
  ) : (
    <EuiPanel>
      <EuiTitle size="s">
        <h2>개요</h2>
      </EuiTitle>
      <EuiHorizontalRule margin="xs" />
      {content}
    </EuiPanel>
  );
}
