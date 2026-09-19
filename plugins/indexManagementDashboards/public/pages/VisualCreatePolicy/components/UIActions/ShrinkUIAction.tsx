/*
 * Copyright OpenSearch Contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { ChangeEvent } from "react";
import { EuiCompressedFormRow, EuiCodeEditor, EuiCompressedFieldText, EuiSpacer, EuiCompressedRadioGroup, EuiCallOut } from "@elastic/eui";
import { ShrinkAction, UIAction } from "../../../../../models/interfaces";
import { makeId } from "../../../../utils/helpers";
import { ActionType } from "../../utils/constants";
import { DarkModeConsumer } from "../../../../components/DarkMode";
import EuiFormCustomLabel from "../EuiFormCustomLabel";

const radios = [
  {
    id: "no",
    label: "아니오",
  },
  {
    id: "yes",
    label: "예",
  },
];

export default class ShrinkUIAction implements UIAction<ShrinkAction> {
  customDisplayText = "축소";
  id: string;
  action: ShrinkAction;
  type = ActionType.Shrink;

  constructor(action: ShrinkAction, id: string = makeId(), useJsons: boolean = false) {
    this.action = { ...action };
    this.id = id;
    // When the jsons are edited by the user, don't overwrite the json. When cloned elsewhere, take the actual object as source of truth
    if (!useJsons) {
      this.action.target_index_name_template_json = JSON.stringify(this.action.shrink.target_index_name_template, null, 4);
      this.action.aliases_json = JSON.stringify(this.action.shrink.aliases, null, 4);
      this.action.force_unsafe_input = this.action.shrink.force_unsafe ? "yes" : "no";
    }
  }

  content = () => `축소`;

  clone = (action: ShrinkAction = this.action) => new ShrinkUIAction(action, this.id);

  cloneUsingString = (action: ShrinkAction) => new ShrinkUIAction(action, this.id, true);

  isValid = () => {
    return this.isValidNumShards() && this.isValidAliasesJson() && this.isValidIndexNameTemplateJson();
  };

  isValidNumShards = () => {
    const shrink = this.action.shrink;
    const numSet = [shrink.num_new_shards != null, shrink.percentage_of_source_shards != null, shrink.max_shard_size != null].filter(
      (it) => it
    ).length;
    return numSet == 1;
  };

  isValidAliasesJson = () => {
    if (this.action.aliases_json && this.action.aliases_json?.length > 0) {
      try {
        JSON.parse(this.getAliasesJsonString(this.action) as string);
        return true;
      } catch (err) {
        return false;
      }
    }
    return true;
  };

  getAliasesJsonString = (action: ShrinkAction) => {
    const shrink = action.shrink;
    return action.hasOwnProperty("aliases_json") ? action.aliases_json : JSON.stringify(shrink.aliases, null, 4);
  };

  isValidIndexNameTemplateJson = () => {
    if (this.action.target_index_name_template_json && this.action.target_index_name_template_json?.length > 0) {
      try {
        JSON.parse(this.getIndexNameTemplateJsonString(this.action) as string);
        return true;
      } catch (err) {
        return false;
      }
    }
    return true;
  };

  getIndexNameTemplateJsonString = (action: ShrinkAction) => {
    if (action.hasOwnProperty("target_index_name_template_json")) {
      return action.target_index_name_template_json;
    } else {
      return JSON.stringify(action.shrink.target_index_name_template, null, 4);
    }
  };

  render = (action: UIAction<ShrinkAction>, onChangeAction: (action: UIAction<ShrinkAction>) => void) => {
    const shrink = action.action.shrink;
    return (
      <>
        <EuiCallOut color="warning" hidden={this.isValidNumShards()}>
          <p>축소할 프라이머리 샤드 수를 지정하는 설정은 정확히 하나만 사용해야 합니다.</p>
        </EuiCallOut>
        <EuiFormCustomLabel
          title="새 샤드 수"
          helpText={
            "인덱스를 축소하려는 프라이머리 샤드 수입니다. 이 값은 원본 인덱스 프라이머리 샤드 수의 인수여야 하며, " +
            "그렇지 않으면 요청한 대상 프라이머리 샤드 수보다 작은 가장 큰 인수가 사용됩니다."
          }
          isInvalid={!this.isValidNumShards()}
        />
        <EuiCompressedFormRow fullWidth isInvalid={!this.isValidNumShards()} error={null}>
          <EuiCompressedFieldText
            fullWidth
            value={typeof shrink.num_new_shards === "undefined" ? "" : shrink.num_new_shards}
            onChange={(e: ChangeEvent<HTMLInputElement>) => {
              const numNewShards = e.target.value;
              const shrinkObject = { ...action.action };
              if (numNewShards) shrinkObject.shrink.num_new_shards = numNewShards;
              else delete shrinkObject.shrink.num_new_shards;
              onChangeAction(this.cloneUsingString(shrinkObject));
            }}
            data-test-subj="action-render-shrink-num-new-shards"
          />
        </EuiCompressedFormRow>
        <EuiSpacer size="s" />
        <EuiFormCustomLabel
          title="최대 샤드 크기"
          helpText={
            "축소 후 각 프라이머리 샤드의 최대 크기입니다. 이 값은 최대 샤드 크기 요구 사항을 만족하는 " +
            '원본 인덱스 프라이머리 샤드 수의 가장 작은 인수를 계산하는 데 사용됩니다. "500mb" 또는 "50gb"와 같은 ' +
            "바이트 단위를 사용할 수 있습니다."
          }
          isInvalid={!this.isValidNumShards()}
        />
        <EuiCompressedFormRow fullWidth isInvalid={!this.isValidNumShards()} error={null}>
          <EuiCompressedFieldText
            fullWidth
            value={shrink.max_shard_size || ""}
            onChange={(e: ChangeEvent<HTMLInputElement>) => {
              const maxShardSize = e.target.value;
              const shrinkObject = { ...action.action };
              if (maxShardSize) shrinkObject.shrink.max_shard_size = maxShardSize;
              else delete shrinkObject.shrink.max_shard_size;
              onChangeAction(this.cloneUsingString(shrinkObject));
            }}
            data-test-subj="action-render-shrink-max-shard-size"
          />
        </EuiCompressedFormRow>
        <EuiSpacer size="s" />
        <EuiFormCustomLabel
          title="원본 샤드 비율"
          helpText={
            "축소할 원본 샤드의 비율입니다. 이 값은 원본 샤드 수에 축소 비율을 곱한 값보다 작은 " +
            "원본 인덱스 프라이머리 샤드 수의 가장 큰 인수를 계산하는 데 사용됩니다. " +
            "0.5와 같이 소수 형태의 백분율을 사용할 수 있습니다."
          }
          isInvalid={!this.isValidNumShards()}
        />
        <EuiCompressedFormRow fullWidth isInvalid={!this.isValidNumShards()} error={null}>
          <EuiCompressedFieldText
            fullWidth
            value={typeof shrink.percentage_of_source_shards === "undefined" ? "" : shrink.percentage_of_source_shards}
            onChange={(e: ChangeEvent<HTMLInputElement>) => {
              const percentageOfSourceShards = e.target.value;
              const shrinkObject = { ...action.action };
              if (percentageOfSourceShards) shrinkObject.shrink.percentage_of_source_shards = percentageOfSourceShards;
              else delete shrinkObject.shrink.percentage_of_source_shards;
              onChangeAction(this.cloneUsingString(shrinkObject));
            }}
            data-test-subj="action-render-shrink-percentage-of-source-shards"
          />
        </EuiCompressedFormRow>
        <EuiSpacer size="s" />
        <EuiFormCustomLabel
          title="대상 인덱스 이름 템플릿"
          helpText={`축소된 출력 인덱스의 이름을 만드는 데 사용할 mustache 템플릿입니다.
          지정하지 않으면 기본 접미사인 "_shrunken"이 추가됩니다.`}
          isInvalid={!this.isValidIndexNameTemplateJson()}
          isOptional={true}
        />
        <EuiCompressedFormRow fullWidth isInvalid={!this.isValidIndexNameTemplateJson()} error={null} style={{ maxWidth: "100%" }}>
          <DarkModeConsumer>
            {(isDarkMode) => (
              <EuiCodeEditor
                mode="json"
                theme={isDarkMode ? "sense-dark" : "github"}
                width="100%"
                value={action.action.target_index_name_template_json}
                onChange={(str) => {
                  const indexNameTemplateJSON = str;
                  const shrinkObject = { ...action.action };
                  if (indexNameTemplateJSON) shrinkObject.target_index_name_template_json = indexNameTemplateJSON;
                  else delete shrinkObject.target_index_name_template_json;
                  onChangeAction(this.cloneUsingString(shrinkObject));
                }}
                setOptions={{ fontSize: "14px" }}
                aria-label="코드 편집기"
                height="100px"
              />
            )}
          </DarkModeConsumer>
        </EuiCompressedFormRow>
        <EuiSpacer size="s" />
        <EuiCallOut color="warning" hidden={!this.action.shrink.force_unsafe}>
          <p>
            경고: 복제본 없이 축소하면 모든 프라이머리가 하나의 노드에 할당되며, 해당 노드가 손상될 경우 인덱스가
            완전히 손실될 수 있습니다.
          </p>
        </EuiCallOut>
        <EuiFormCustomLabel
          title="강제 위험 허용"
          helpText={`이 값을 '아니오'로 설정하면 복제본 샤드가 없는 인덱스에 대해 축소 작업이 실패합니다.`}
          isInvalid={false}
        />
        <EuiCompressedFormRow fullWidth isInvalid={false} error={null} style={{ maxWidth: "100%" }}>
          <EuiCompressedRadioGroup
            options={radios}
            idSelected={this.action.force_unsafe_input}
            onChange={(id) => {
              const forceUnsafe = id === "yes";
              const shrinkObject = { ...action.action };
              if (forceUnsafe) {
                shrinkObject.shrink.force_unsafe = forceUnsafe;
                shrinkObject.force_unsafe_input = id;
              } else {
                shrinkObject.shrink.force_unsafe = false;
                shrinkObject.force_unsafe_input = "no";
              }
              onChangeAction(this.cloneUsingString(shrinkObject));
            }}
            name="forceUnsafe"
          />
        </EuiCompressedFormRow>
        <EuiSpacer size="s" />
        <EuiFormCustomLabel
          title="별칭"
          helpText={`축소된 출력 인덱스에 적용할 별칭입니다.`}
          isInvalid={!this.isValidAliasesJson()}
          isOptional={true}
        />
        <EuiCompressedFormRow fullWidth isInvalid={!this.isValidAliasesJson()} error={null} style={{ maxWidth: "100%" }}>
          <DarkModeConsumer>
            {(isDarkMode) => (
              <EuiCodeEditor
                mode="json"
                theme={isDarkMode ? "sense-dark" : "github"}
                width="100%"
                value={action.action.aliases_json}
                onChange={(str) => {
                  const aliasesJSON = str;
                  const shrinkObject: ShrinkAction = { ...action.action };
                  // const shrink = { ...action.action.shrink };
                  if (aliasesJSON) shrinkObject.aliases_json = aliasesJSON;
                  else delete shrinkObject.aliases_json;
                  onChangeAction(this.cloneUsingString(shrinkObject));
                }}
                setOptions={{ fontSize: "14px" }}
                aria-label="코드 편집기"
                height="100px"
              />
            )}
          </DarkModeConsumer>
        </EuiCompressedFormRow>
      </>
    );
  };

  toAction = () => {
    // Use the spread operator to copy the action
    const shrink = { ...this.action };
    if (shrink.aliases_json != null) {
      shrink.shrink.aliases = JSON.parse(shrink.aliases_json as string);
    }
    if (shrink.target_index_name_template_json != null) {
      shrink.shrink.target_index_name_template = JSON.parse(shrink.target_index_name_template_json as string);
    }
    delete shrink.aliases_json;
    delete shrink.force_unsafe_input;
    delete shrink.target_index_name_template_json;
    return shrink;
  };
}
