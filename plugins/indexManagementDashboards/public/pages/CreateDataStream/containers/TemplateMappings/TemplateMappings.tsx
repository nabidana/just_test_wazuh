/*
 * Copyright OpenSearch Contributors
 * SPDX-License-Identifier: Apache-2.0
 */
import React, { useContext, useRef } from "react";
import { EuiCompressedFormRow, EuiLink, EuiSpacer, EuiTitle, EuiText } from "@elastic/eui";
import { CoreStart } from "opensearch-dashboards/public";
import { SubDetailProps } from "../../interface";
import IndexMapping, { IIndexMappingsRef } from "../../../../components/IndexMapping";
import { CoreServicesContext } from "../../../../components/core_services";

export default function TemplateMappings(props: SubDetailProps) {
  const { field, isEdit } = props;
  const mappingsRef = useRef<IIndexMappingsRef>(null);
  const coreServices = useContext(CoreServicesContext) as CoreStart;
  return (
    <>
      <EuiCompressedFormRow
        fullWidth
        label={
          <EuiText size="s">
            <h3>인덱스 매핑</h3>
          </EuiText>
        }
        helpText={
          <div>
            문서와 해당 필드가 저장 및 색인되는 방식을 정의합니다.{" "}
            <EuiLink
              target="_blank"
              external
              href={`https://opensearch.org/docs/${coreServices.docLinks.DOC_LINK_VERSION}/opensearch/mappings/`}
            >
              자세히 알아보기
            </EuiLink>
          </div>
        }
      >
        <></>
      </EuiCompressedFormRow>
      <EuiSpacer size="s" />
      <EuiCompressedFormRow fullWidth>
        <IndexMapping
          {...field.registerField({
            name: ["template", "mappings"],
          })}
          readonly
          isEdit={isEdit}
          ref={mappingsRef}
          docVersion={coreServices.docLinks.DOC_LINK_VERSION}
        />
      </EuiCompressedFormRow>
    </>
  );
}
