/*
 * Copyright OpenSearch Contributors
 * SPDX-License-Identifier: Apache-2.0
 */
import React, { Component } from "react";
import {
  EuiSpacer,
  EuiLink,
  EuiFlexItem,
  EuiFlexGroup,
  EuiSmallButton,
  EuiSmallButtonEmpty,
  EuiText,
  EuiPanel,
  EuiHorizontalRule,
  EuiTitle,
} from "@elastic/eui";
import FormGenerator, { IField, IFormGeneratorRef, IFieldComponentProps } from "../../../../components/FormGenerator";
import { IndexItem } from "../../../../../models/interfaces";
import IndexDetail from "../../../../containers/IndexDetail";
import AliasSelect, { AliasSelectProps } from "../../../../components/AliasSelect";
import EuiToolTipWrapper from "../../../../components/EuiToolTipWrapper";
import {
  INDEX_NAMING_PATTERN,
  INDEX_NAMING_MESSAGE,
  INDEX_SETTINGS_URL,
  REPLICA_NUMBER_MESSAGE,
  ALIAS_SELECT_RULE,
} from "../../../../utils/constants";
import NotificationConfig, { NotificationConfigRef } from "../../../../containers/NotificationConfig";
import { ServerResponse } from "../../../../../server/models/types";
import { ActionType, OperationType } from "../../../Notifications/constant";
import { OptionalLabel } from "../../../../components/CustomFormRow";

const WrappedAliasSelect = EuiToolTipWrapper(AliasSelect, {
  disabledKey: "isDisabled",
});

interface SplitIndexComponentProps {
  sourceIndex: string;
  reasons: React.ReactChild[];
  sourceShards: string;
  shardsSelectOptions: { label: string }[];
  onSplitIndex: (targetIndex: string, settingsPayload: Required<IndexItem>["settings"]) => Promise<ServerResponse<{ task: string }>>;
  onCancel: () => void;
  getAlias: AliasSelectProps["refreshOptions"];
  loading: boolean;
}

export default class SplitIndexForm extends Component<SplitIndexComponentProps> {
  state = {
    settings: {} as Required<IndexItem>["settings"],
    sourceIndexSettings: {} as IndexItem,
  };

  formRef: IFormGeneratorRef | null = null;
  notificationRef: NotificationConfigRef | null = null;
  onSubmit = async () => {
    // trigger the validation manually here
    const validateResult = await this.formRef?.validatePromise();
    const notificationResult = await this.notificationRef?.validatePromise();
    const { targetIndex, ...others } = this.state.settings;
    const { errors } = validateResult || {};
    if (errors) {
      return;
    }
    if (notificationResult?.errors) {
      return;
    }
    try {
      const result = await this.props.onSplitIndex(targetIndex, others);
      if (result && result.ok) {
        this.notificationRef?.associateWithTask({
          taskId: result.response.task,
        });
      }
      this.props.onCancel();
    } catch (err) {
      // no need to log anything since getIndexSettings will log the error
    }
  };

  render() {
    const { sourceIndex, sourceShards, reasons, getAlias } = this.props;
    const blockNameList = ["targetIndex"];

    let shardMessage = "이 숫자는 원본 인덱스의 기본 샤드 수의 2배여야 합니다.";
    if (sourceShards === "1") {
      shardMessage = "이 숫자는 1보다 크고 1024 이하인 정수여야 합니다.";
    }

    const formFields: IField[] = [
      {
        rowProps: {
          label: (
            <EuiText size="s">
              <h3>대상 인덱스 이름</h3>
            </EuiText>
          ),
          helpText: INDEX_NAMING_MESSAGE,
          position: "bottom",
        },
        name: "targetIndex",
        type: "Input",
        options: {
          rules: [
            {
              trigger: "onBlur",
              validator: (rule, value) => {
                if (!value || value === "") {
                  // do not pass the validation
                  // return a rejected promise with error message
                  return Promise.reject("대상 인덱스 이름은 필수입니다.");
                } else if (!INDEX_NAMING_PATTERN.test(value)) {
                  return Promise.reject(`대상 인덱스 이름 ${value}이(가) 올바르지 않습니다.`);
                }
                // pass the validation, return a resolved promise
                return Promise.resolve();
              },
            },
          ],
          props: {
            "data-test-subj": "targetIndexNameInput",
            placeholder: "새로 분할된 인덱스의 이름을 지정합니다.",
          },
        },
      },
      {
        rowProps: {
          label: (
            <EuiText size="s">
              <h3>기본 샤드 수</h3>
            </EuiText>
          ),
          helpText: (
            <>
              <p>새로 분할된 인덱스의 기본 샤드 수를 지정합니다.</p>
              <p>{shardMessage}</p>
            </>
          ),
        },
        name: "index.number_of_shards",
        type: "ComboBoxSingle",
        options: {
          rules: [
            {
              trigger: "onBlur",
              validator: (rule, value) => {
                if (!value || value === "") {
                  // do not pass the validation
                  // return a rejected promise with error message
                  return Promise.reject("샤드 수는 필수입니다.");
                } else if (!this.props.shardsSelectOptions.find((item) => "" + item.label === "" + value)) {
                  return Promise.reject(`샤드 수 ${value}이(가) 올바르지 않습니다.`);
                }
                // pass the validation, return a resolved promise
                return Promise.resolve();
              },
            },
          ],
          props: {
            "data-test-subj": "numberOfShardsInput",
            options: this.props.shardsSelectOptions,
            placeholder: "기본 샤드 수 지정",
            onCreateOption: undefined,
          },
        },
      },
      {
        rowProps: {
          label: (
            <EuiText size="s">
              <h3>복제본 수</h3>
            </EuiText>
          ),
          helpText: REPLICA_NUMBER_MESSAGE,
        },
        name: "index.number_of_replicas",
        type: "Number",
        options: {
          props: {
            "data-test-subj": "numberOfReplicasInput",
            placeholder: "복제본 수 지정",
            min: 0,
          },
        },
      },
      {
        name: "aliases",
        rowProps: {
          label: (
            <EuiText size="s">
              <h3>
                인덱스 별칭 <OptionalLabel />
              </h3>
            </EuiText>
          ),
          helpText: "이 인덱스를 기존 별칭으로 참조하도록 허용하거나 새 별칭을 지정합니다.",
        },
        options: {
          props: {
            refreshOptions: getAlias,
          },
          rules: ALIAS_SELECT_RULE,
        },
        component: WrappedAliasSelect as React.ComponentType<IFieldComponentProps>,
      },
    ];

    const readyForSplit = reasons.length === 0;
    return (
      <div>
        <IndexDetail indices={[sourceIndex]}>
          <ul>
            {reasons.map((reason, reasonIndex) => (
              <li key={reasonIndex}>{reason}</li>
            ))}
          </ul>
        </IndexDetail>
        {readyForSplit && (
          <>
            <EuiSpacer />
            <EuiPanel>
              <EuiText size="s">
                <h2>대상 인덱스 구성</h2>
              </EuiText>
              <EuiHorizontalRule margin="xs" />
              <FormGenerator
                value={{ "index.number_of_replicas": "1", ...this.state.settings }}
                onChange={(totalValue) =>
                  this.setState({
                    settings: totalValue,
                  })
                }
                formFields={formFields}
                ref={(ref) => (this.formRef = ref)}
                hasAdvancedSettings={true}
                advancedSettingsProps={{
                  accordionProps: {
                    initialIsOpen: false,
                    id: "accordionForCreateIndexSettings",
                    buttonContent: <h4>고급 설정</h4>,
                  },
                  blockedNameList: blockNameList,
                  rowProps: {
                    label: "고급 인덱스 설정 지정",
                    helpText: (
                      <>
                        쉼표로 구분된 설정 목록을 지정합니다.&nbsp;
                        <EuiLink href={INDEX_SETTINGS_URL} target="_blank">
                          인덱스 설정 보기
                        </EuiLink>
                      </>
                    ),
                  },
                }}
              />
            </EuiPanel>
          </>
        )}
        <NotificationConfig
          withPanel
          panelProps={{
            title: (
              <EuiTitle size="s">
                <h2>고급 설정</h2>
              </EuiTitle>
            ),
            titleSize: "s",
          }}
          ref={(ref) => (this.notificationRef = ref)}
          actionType={ActionType.RESIZE}
          operationType={OperationType.SHRINK}
        />

        <EuiSpacer />
        <EuiFlexGroup alignItems="center" justifyContent="flexEnd" gutterSize="s">
          <EuiFlexItem grow={false}>
            <EuiSmallButtonEmpty onClick={this.props.onCancel} data-test-subj="splitCancelButton">
              취소
            </EuiSmallButtonEmpty>
          </EuiFlexItem>
          <EuiFlexItem grow={false}>
            <EuiSmallButton
              fill
              onClick={this.onSubmit}
              isLoading={this.props.loading}
              disabled={this.props.loading}
              data-test-subj="splitButton"
              isDisabled={!readyForSplit}
            >
              분할
            </EuiSmallButton>
          </EuiFlexItem>
        </EuiFlexGroup>
      </div>
    );
  }
}
