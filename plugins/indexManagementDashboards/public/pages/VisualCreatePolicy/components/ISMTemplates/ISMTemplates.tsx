/*
 * Copyright OpenSearch Contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import {
  EuiSmallButton,
  EuiSpacer,
  EuiFlexGroup,
  EuiEmptyPrompt,
  EuiFlexItem,
  EuiText,
  EuiLink,
  EuiPanel,
  EuiHorizontalRule,
  EuiTitle,
} from "@elastic/eui";
import { ContentPanel } from "../../../../components/ContentPanel";
import "brace/theme/github";
import "brace/mode/json";
import { ISMTemplate as ISMTemplateData, Policy } from "../../../../../models/interfaces";
import { DOCUMENTATION_URL } from "../../../../utils/constants";
import { ISM_TEMPLATE_INPUT_MAX_WIDTH } from "../../utils/constants";
import ISMTemplate from "../ISMTemplate";
import { convertTemplatesToArray } from "../../utils/helpers";
import { makeId } from "../../../../utils/helpers";

interface ISMTemplatesProps {
  policy: Policy;
  onChangePolicy: (policy: Policy) => void;
}

const ISMTemplates = ({ policy, onChangePolicy }: ISMTemplatesProps) => {
  const templates = convertTemplatesToArray(policy.ism_template);
  const addTemplateButton = (
    <EuiSmallButton
      onClick={() => {
        onChangePolicy({ ...policy, ism_template: [...templates, { index_patterns: [], priority: 1 }] });
      }}
      data-test-subj="ism-templates-add-template-button"
    >
      템플릿 추가
    </EuiSmallButton>
  );

  return (
    <EuiPanel>
      <EuiFlexGroup gutterSize="xs" alignItems="center">
        <EuiFlexItem grow={false}>
          <EuiTitle size="s">
            <h2>ISM 템플릿</h2>
          </EuiTitle>
        </EuiFlexItem>
        <EuiFlexItem>
          <EuiText color="subdued">
            <i> – 선택 사항</i>
          </EuiText>
        </EuiFlexItem>
      </EuiFlexGroup>

      <EuiText color="subdued" size="xs">
        <p style={{ fontWeight: 350 }}>
          정책을 적용할 인덱스와 일치하는 ISM 템플릿 패턴을 지정하세요.{" "}
          <EuiLink href={DOCUMENTATION_URL} target="_blank" rel="noopener noreferrer">
            자세히 알아보기
          </EuiLink>
        </p>
      </EuiText>
      <EuiHorizontalRule margin={"xs"} />
      <div style={{ padding: "10px 0px 0px 10px" }}>
        {!!templates.length && (
          <EuiFlexGroup gutterSize="l" alignItems="center">
            <EuiFlexItem style={{ maxWidth: ISM_TEMPLATE_INPUT_MAX_WIDTH }}>
              <EuiText>
                <h5>인덱스 패턴</h5>
              </EuiText>
            </EuiFlexItem>
            <EuiFlexItem grow={false}>
              <EuiText>
                <h5>우선순위</h5>
              </EuiText>
            </EuiFlexItem>
          </EuiFlexGroup>
        )}

        {templates.map((template, idx) => (
          <ISMTemplate
            key={makeId()}
            isFirst={!idx}
            template={template}
            onUpdateTemplate={(template: ISMTemplateData) => {
              onChangePolicy({
                ...policy,
                ism_template: templates
                  .slice(0, idx)
                  .concat(template)
                  .concat(templates.slice(idx + 1)),
              });
            }}
            onRemoveTemplate={() => {
              onChangePolicy({
                ...policy,
                ism_template: templates.slice(0, idx).concat(templates.slice(idx + 1)),
              });
            }}
          />
        ))}

        {!templates.length ? (
          <EuiEmptyPrompt
            title={
              <EuiText size="s">
                <h3>ISM 템플릿 없음</h3>
              </EuiText>
            }
            style={{ maxWidth: "37em" }}
            titleSize="s"
            body={
              <p>
                이 정책에는 현재 정의된 ISM 템플릿이 없습니다. 앞으로 생성될 인덱스에 정책을 자동으로 적용하려면 ISM 템플릿을
                추가하세요.
              </p>
            }
            actions={addTemplateButton}
          />
        ) : (
          <>
            <EuiSpacer />
            {addTemplateButton}
          </>
        )}
      </div>
    </EuiPanel>
  );
};

export default ISMTemplates;
