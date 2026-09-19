/*
 * Copyright OpenSearch Contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { ChangeEvent, useContext, useEffect, useState } from "react";
import CustomFormRow, { OptionalLabel } from "../../../../components/CustomFormRow";
import {
  EuiCompressedCheckbox,
  EuiCompressedComboBox,
  EuiComboBoxOptionOption,
  EuiCompressedFieldNumber,
  EuiLink,
  EuiCompressedRadioGroup,
  EuiSpacer,
  EuiText,
} from "@elastic/eui";
import { CoreServicesContext } from "../../../../components/core_services";
import { CoreStart } from "opensearch-dashboards/public";

interface ReindexOptionsProps {
  slices?: string;
  onSlicesChange: (val?: string) => void;
  sliceErr?: string;
  selectedPipelines?: EuiComboBoxOptionOption[];
  onSelectedPipelinesChange: (options: EuiComboBoxOptionOption[]) => void;
  getAllPipelines: () => Promise<EuiComboBoxOptionOption[]>;
  ignoreConflicts: boolean;
  onIgnoreConflictsChange: (val: ChangeEvent<HTMLInputElement>) => void;
  reindexUniqueDocuments: boolean;
  onReindexUniqueDocumentsChange: (val: ChangeEvent<HTMLInputElement>) => void;
}

const ReindexAdvancedOptions = (props: ReindexOptionsProps) => {
  let pipelinesInit: EuiComboBoxOptionOption[] = [];
  const [pipelines, SetPipelines] = useState(pipelinesInit);
  const coreServices = useContext(CoreServicesContext) as CoreStart;

  const {
    slices,
    sliceErr,
    onSlicesChange,
    selectedPipelines,
    onSelectedPipelinesChange,
    getAllPipelines,
    ignoreConflicts,
    onIgnoreConflictsChange,
    reindexUniqueDocuments,
    onReindexUniqueDocumentsChange,
  } = props;

  const sliceEnabled = slices !== undefined;
  const sliceOption = slices === "auto" ? "auto" : "manual";
  const showSliceInput = sliceEnabled && sliceOption === "manual";

  useEffect(() => {
    getAllPipelines()
      .then((pipelines) => {
        SetPipelines(pipelines);
      })
      .catch((err) => {
        coreServices.notifications.toasts.addDanger(`파이프라인을 가져오는 중 오류가 발생했습니다 ${err}`);
      });
  }, [coreServices, getAllPipelines]);

  return (
    <div>
      <CustomFormRow
        label={
          <EuiText size="s">
            <h3>고유 문서만 재색인</h3>
          </EuiText>
        }
        helpText={
          <>
            대상 인덱스에 존재하지 않는 문서만 복사하도록 선택할 수 있습니다. 기본적으로 OpenSearch는 원본 인덱스의 모든
            문서를 복사합니다.{" "}
            <EuiLink href={coreServices.docLinks.links.opensearch.reindexData.unique} target="_blank">
              자세히 알아보기
            </EuiLink>
          </>
        }
      >
        <EuiCompressedCheckbox
          id="uniqueCheckbox"
          label="고유 문서만 재색인"
          checked={reindexUniqueDocuments}
          onChange={onReindexUniqueDocumentsChange}
        />
      </CustomFormRow>
      <EuiSpacer />

      <CustomFormRow
        label={
          <EuiText size="s">
            <h3>버전 충돌</h3>
          </EuiText>
        }
        helpText={
          <>
            재색인 작업을 실패시키는 대신 재색인 중 발생하는 버전 충돌을 무시합니다.{" "}
            <EuiLink href={coreServices.docLinks.links.opensearch.reindexData.unique} target="_blank">
              자세히 알아보기
            </EuiLink>
          </>
        }
      >
        <EuiCompressedCheckbox
          id="ConflictsOptionCheckbox"
          label="재색인 중 충돌 무시"
          checked={ignoreConflicts}
          onChange={onIgnoreConflictsChange}
        />
      </CustomFormRow>
      <EuiSpacer />

      <CustomFormRow
        label={
          <EuiText size="s">
            <h3>재색인 작업 분할</h3>
          </EuiText>
        }
        helpText="이 재색인 작업을 더 작은 하위 작업으로 나누어 병렬로 실행합니다."
      >
        <>
          <EuiCompressedCheckbox
            id="sliceEnabledCheckBox"
            data-test-subj="sliceEnabled"
            label="이 재색인 작업 분할"
            checked={sliceEnabled}
            onChange={(e) => {
              onSlicesChange(e.target.checked ? "auto" : undefined);
            }}
          />

          {sliceEnabled ? (
            <>
              <EuiSpacer />
              <EuiCompressedRadioGroup
                options={[
                  {
                    id: "auto",
                    label: "자동",
                  },
                  {
                    id: "manual",
                    label: "하위 작업으로 수동 분할",
                  },
                ]}
                idSelected={sliceOption}
                onChange={(id) => {
                  onSlicesChange(id === "auto" ? "auto" : "");
                }}
                name="sliceOption"
                data-test-subj="sliceOption"
              />
            </>
          ) : null}
        </>
      </CustomFormRow>

      {showSliceInput ? (
        <>
          <EuiSpacer />
          <CustomFormRow
            isInvalid={!!sliceErr}
            error={sliceErr}
            label={
              <EuiText size="s">
                <h3>하위 작업 수</h3>
              </EuiText>
            }
            helpText="이 작업을 나눌 하위 작업 수를 지정합니다."
          >
            <EuiCompressedFieldNumber
              data-test-subj="slices"
              value={slices}
              placeholder="숫자 지정"
              type="number"
              min={2}
              onChange={(e) => onSlicesChange(e.target.value)}
            />
          </CustomFormRow>
        </>
      ) : null}

      <EuiSpacer />
      <CustomFormRow
        label={
          <>
            <EuiText size="s">
              <h3>
                수집 파이프라인으로 변환 <OptionalLabel />
              </h3>
            </EuiText>
          </>
        }
        helpText={
          <>
            대상에 데이터를 쓰기 전에 문서를 변환할 수집 파이프라인을 선택합니다.{" "}
            <EuiLink href={coreServices.docLinks.links.opensearch.reindexData.transform} target="_blank">
              자세히 알아보기
            </EuiLink>
          </>
        }
      >
        <EuiCompressedComboBox
          aria-label="수집 파이프라인"
          placeholder="수집 파이프라인 선택"
          data-test-subj="pipelineCombobox"
          singleSelection={{ asPlainText: true }}
          options={pipelines}
          selectedOptions={selectedPipelines}
          onChange={onSelectedPipelinesChange}
        />
      </CustomFormRow>
    </div>
  );
};

export default ReindexAdvancedOptions;
