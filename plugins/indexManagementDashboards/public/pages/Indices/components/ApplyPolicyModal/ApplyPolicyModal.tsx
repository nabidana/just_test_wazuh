/*
 * Copyright OpenSearch Contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { Component, Fragment } from "react";
import _ from "lodash";
import {
  EuiSmallButton,
  EuiSmallButtonEmpty,
  EuiModal,
  EuiModalBody,
  EuiModalFooter,
  EuiModalHeader,
  EuiModalHeaderTitle,
  EuiOverlayMask,
  EuiCompressedComboBox,
  EuiCompressedFormRow,
  EuiCompressedFieldText,
  EuiCallOut,
  EuiText,
  EuiSpacer,
  EuiCodeBlock,
  EuiLink,
  EuiIcon,
} from "@elastic/eui";
import { BrowserServices } from "../../../../models/interfaces";
import { PolicyOption } from "../../models/interfaces";
import { DocumentPolicy, State } from "../../../../../models/interfaces";
import { getErrorMessage } from "../../../../utils/helpers";
import { DOCUMENTATION_URL } from "../../../../utils/constants";
import { CoreServicesContext } from "../../../../components/core_services";

interface ApplyPolicyModalProps {
  onClose: () => void;
  services: BrowserServices;
  indices: string[];
}

interface ApplyPolicyModalState {
  isLoading: boolean;
  selectedPolicy: PolicyOption | null;
  selectedPolicyError: string;
  hasRolloverAction: boolean;
  policyOptions: PolicyOption[];
  rolloverAlias: string;
  rolloverAliasError: string;
  hasSubmitted: boolean;
}

export default class ApplyPolicyModal extends Component<ApplyPolicyModalProps, ApplyPolicyModalState> {
  static contextType = CoreServicesContext;
  state: ApplyPolicyModalState = {
    isLoading: false,
    selectedPolicy: null,
    selectedPolicyError: "",
    hasRolloverAction: false,
    policyOptions: [],
    rolloverAlias: "",
    rolloverAliasError: "",
    hasSubmitted: false,
  };

  async componentDidMount(): Promise<void> {
    await this.onPolicySearchChange("");
  }

  onApplyPolicy = async (selectedPolicy: PolicyOption, hasRolloverAction: boolean, rolloverAlias: string): Promise<void> => {
    try {
      const {
        onClose,
        indices,
        services: { indexService },
      } = this.props;
      const policyId = selectedPolicy.label;
      const applyPolicyResponse = await indexService.applyPolicy(indices, policyId);
      if (applyPolicyResponse.ok) {
        const { updatedIndices, failedIndices, failures } = applyPolicyResponse.response;
        if (updatedIndices) {
          this.context.notifications.toasts.addSuccess(`인덱스 ${updatedIndices}개에 정책을 적용했습니다`);
          if (hasRolloverAction && rolloverAlias && indices.length === 1) {
            await this.onEditRolloverAlias(indices[0], rolloverAlias);
          }
        }
        if (failures) {
          this.context.notifications.toasts.addDanger(
            `다음 인덱스에 정책 적용을 실패했습니다: ${failedIndices
              .map((failedIndex) => `[${failedIndex.indexName}, ${failedIndex.reason}]`)
              .join(", ")}`
          );
        }
        onClose();
      } else {
        this.context.notifications.toasts.addDanger(applyPolicyResponse.error);
      }
    } catch (err) {
      this.context.notifications.toasts.addDanger(getErrorMessage(err, "인덱스에 정책을 추가하는 중 문제가 발생했습니다"));
    }
  };

  onEditRolloverAlias = async (index: string, rolloverAlias: string): Promise<void> => {
    const {
      services: { indexService },
    } = this.props;
    try {
      const response = await indexService.editRolloverAlias(index, rolloverAlias);
      if (response.ok) {
        if (response.response.acknowledged) {
          this.context.notifications.toasts.addSuccess(`${index}의 롤오버 별칭을 수정했습니다`);
        } else {
          this.context.notifications.toasts.addDanger(`${index}의 롤오버 별칭 수정에 실패했습니다`);
        }
      } else {
        this.context.notifications.toasts.addDanger(response.error);
      }
    } catch (err) {
      this.context.notifications.toasts.addDanger(getErrorMessage(err, `${index}의 롤오버 별칭을 수정하는 중 문제가 발생했습니다`));
    }
  };

  onPolicySearchChange = async (searchValue: string): Promise<void> => {
    const {
      services: { indexService },
    } = this.props;
    this.setState({ isLoading: true, policyOptions: [] });
    try {
      const searchPoliciesResponse = await indexService.searchPolicies(searchValue, true);
      if (searchPoliciesResponse.ok) {
        const policies = searchPoliciesResponse.response.policies.map((p: DocumentPolicy) => ({
          label: p.id,
          policy: p.policy,
        }));
        this.setState({ policyOptions: policies });
      } else {
        if (searchPoliciesResponse.error.startsWith("[index_not_found_exception]")) {
          this.context.notifications.toasts.addDanger("아직 생성한 정책이 없습니다");
        } else {
          this.context.notifications.toasts.addDanger(searchPoliciesResponse.error);
        }
      }
    } catch (err) {
      if (this.context != null) this.context.notifications.toasts.addDanger(err.message);
    }

    this.setState({ isLoading: false });
  };

  onChangeSelectedPolicy = (selectedPolicies: PolicyOption[]): void => {
    const selectedPolicy = selectedPolicies.length ? selectedPolicies[0] : null;
    const hasRolloverAction = this.hasRolloverAction(selectedPolicy);
    this.setState({
      selectedPolicy,
      hasRolloverAction,
      selectedPolicyError: this.getSelectedPolicyError(selectedPolicy),
    });
  };

  onChangeRolloverAlias = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const rolloverAlias = e.target.value;
    this.setState({
      rolloverAlias,
      rolloverAliasError: this.getRolloverAliasError(rolloverAlias),
    });
  };

  onSubmit = async (): Promise<void> => {
    const { selectedPolicy, rolloverAlias } = this.state;
    const selectedPolicyError = this.getSelectedPolicyError(selectedPolicy);
    const rolloverAliasError = this.getRolloverAliasError(rolloverAlias);
    const hasSubmitError = !!selectedPolicyError || !!rolloverAliasError;
    if (hasSubmitError) {
      this.setState({ selectedPolicyError, rolloverAliasError, hasSubmitted: true });
    } else {
      // @ts-ignore
      await this.onApplyPolicy(selectedPolicy, this.hasRolloverAction(selectedPolicy), rolloverAlias);
    }
  };

  getRolloverAliasError = (rolloverAlias: string): string => {
    const { hasRolloverAction } = this.state;
    const { indices } = this.props;
    const isDataStream = indices[0].includes(".ds");
    const hasSingleIndexSelected = indices.length === 1;
    const requiresAlias = hasRolloverAction && hasSingleIndexSelected && !isDataStream;
    const hasAliasError = requiresAlias && !rolloverAlias;
    return hasAliasError ? "필수 항목입니다" : "";
  };

  getSelectedPolicyError = (selectedPolicy: PolicyOption | null): string => (selectedPolicy ? "" : "정책을 선택해야 합니다");

  hasRolloverAction = (selectedPolicy: PolicyOption | null): boolean =>
    _.get(selectedPolicy, "policy.states", []).some((state: State) => state.actions.some((action) => action.hasOwnProperty("rollover")));

  renderRollover = (): React.ReactNode | null => {
    const { rolloverAlias, hasRolloverAction, rolloverAliasError, hasSubmitted } = this.state;
    const { indices } = this.props;
    const hasSingleIndexSelected = indices.length === 1;

    if (!hasRolloverAction) return null;

    if (hasSingleIndexSelected) {
      return (
        <EuiCompressedFormRow
          label="롤오버 별칭"
          helpText={
            <EuiText size="xs" grow={false}>
              <p>
                이 정책에는 롤오버 작업이 포함되어 있습니다. 롤오버 별칭을 지정하세요.{" "}
                <EuiLink href={DOCUMENTATION_URL} target="_blank" rel="noopener noreferrer">
                  자세히 알아보기
                </EuiLink>
              </p>
            </EuiText>
          }
          isInvalid={hasSubmitted && !!rolloverAliasError}
          error={rolloverAliasError}
          fullWidth
        >
          <EuiCompressedFieldText
            isInvalid={hasSubmitted && !!rolloverAliasError}
            placeholder="롤오버 별칭"
            value={rolloverAlias}
            onChange={this.onChangeRolloverAlias}
            fullWidth
          />
        </EuiCompressedFormRow>
      );
    }

    return (
      <EuiCallOut
        style={{ width: "350px" }}
        title={
          <p>
            여러 인덱스에 롤오버가 포함된 정책을 적용하고 있습니다. 각 인덱스에 고유한 rollover_alias 설정을 추가해야 합니다.
          </p>
        }
        iconType="alert"
        size="s"
        color="warning"
      />
    );
  };

  renderPreview = (): React.ReactNode | null => {
    const { selectedPolicy } = this.state;
    if (!selectedPolicy) return null;

    let policyString = "";
    try {
      policyString = JSON.stringify({ policy: selectedPolicy.policy }, null, 4);
    } catch (err) {
      console.error(err);
    }

    if (!policyString) {
      return null;
    }

    return (
      <Fragment>
        <EuiSpacer />
        <EuiText size="s" grow={false}>
          <h4>미리보기</h4>
        </EuiText>
        <EuiSpacer size="s" />
        <EuiCodeBlock language="json" fontSize="s" style={{ height: "200px" }}>
          {policyString}
        </EuiCodeBlock>
        <EuiSpacer size="m" />
      </Fragment>
    );
  };

  render() {
    const { policyOptions, selectedPolicy, selectedPolicyError, isLoading, hasSubmitted } = this.state;
    const { onClose } = this.props;
    const selectedOptions = selectedPolicy ? [selectedPolicy] : [];
    return (
      <EuiOverlayMask>
        {/*
            // @ts-ignore */}
        <EuiModal onCancel={onClose} onClose={onClose}>
          <EuiModalHeader>
            <EuiModalHeaderTitle>
              {" "}
              <EuiText size="s">
                {" "}
                <h2>정책 적용</h2>{" "}
              </EuiText>{" "}
            </EuiModalHeaderTitle>
          </EuiModalHeader>

          <EuiModalBody>
            <EuiText size="s" grow={false}>
              <p>선택한 인덱스에 사용할 정책을 선택하세요. 정책의 복사본이 생성되어 인덱스에 적용됩니다.</p>
            </EuiText>
            <EuiSpacer size="m" />
            <EuiCompressedFormRow
              label={
                <EuiText size="s">
                  <h4>정책 ID</h4>
                </EuiText>
              }
              isInvalid={hasSubmitted && !!selectedPolicyError}
              error={selectedPolicyError}
              fullWidth
            >
              <EuiCompressedComboBox
                placeholder="정책 검색"
                async
                options={policyOptions}
                singleSelection={{ asPlainText: true }}
                selectedOptions={selectedOptions}
                isLoading={isLoading}
                isInvalid={hasSubmitted && !!selectedPolicyError}
                onChange={this.onChangeSelectedPolicy}
                onSearchChange={this.onPolicySearchChange}
                fullWidth
              />
            </EuiCompressedFormRow>
            {this.renderPreview()}
            {this.renderRollover()}
          </EuiModalBody>

          <EuiModalFooter>
            <EuiSmallButtonEmpty onClick={onClose} data-test-subj="applyPolicyModalCloseButton">
              취소
            </EuiSmallButtonEmpty>

            <EuiSmallButton onClick={this.onSubmit} fill data-test-subj="applyPolicyModalEditButton">
              적용
            </EuiSmallButton>
          </EuiModalFooter>
        </EuiModal>
      </EuiOverlayMask>
    );
  }
}
