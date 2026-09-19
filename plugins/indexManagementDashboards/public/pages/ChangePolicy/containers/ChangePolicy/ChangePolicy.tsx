/*
 * Copyright OpenSearch Contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { Component, useContext } from "react";
import { RouteComponentProps } from "react-router-dom";
import { EuiSpacer, EuiTitle, EuiSmallButton, EuiFlexGroup, EuiFlexItem, EuiSmallButtonEmpty, EuiText } from "@elastic/eui";
import { IndexService, ManagedIndexService } from "../../../../services";
import ChangeManagedIndices from "../../components/ChangeManagedIndices";
import NewPolicy from "../../components/NewPolicy";
import { BREADCRUMBS } from "../../../../utils/constants";
import { ManagedIndexItem } from "../../../../../models/interfaces";
import { getErrorMessage } from "../../../../utils/helpers";
import { PolicyOption } from "../../models/interfaces";
import { CoreServicesContext } from "../../../../components/core_services";
import { DataSourceMenuContext, DataSourceMenuProperties } from "../../../../services/DataSourceMenuContext";
import { useUpdateUrlWithDataSourceProperties } from "../../../../components/MDSEnabledComponent";
import { getUISettings } from "../../../../services/Services";

interface ChangePolicyProps extends RouteComponentProps, DataSourceMenuProperties {
  managedIndexService: ManagedIndexService;
  indexService: IndexService;
  useUpdatedUX?: boolean;
}

interface ChangePolicyState {
  selectedPolicies: PolicyOption[];
  selectedManagedIndices: { label: string; value?: ManagedIndexItem }[];
  selectedStateFilters: { label: string }[];
  stateSelected: string;
  stateRadioIdSelected: string;
  managedIndicesError: string;
  selectedPoliciesError: string;
  hasSubmitted: boolean;
}

export enum Radio {
  Current = "current",
  State = "state",
}

export class ChangePolicy extends Component<ChangePolicyProps, ChangePolicyState> {
  static contextType = CoreServicesContext;
  static emptyState = {
    selectedPolicies: [],
    selectedManagedIndices: [],
    selectedStateFilters: [],
    stateRadioIdSelected: Radio.Current,
    stateSelected: "",
    managedIndicesError: "",
    selectedPoliciesError: "",
    hasSubmitted: false,
  };
  state: ChangePolicyState = ChangePolicy.emptyState;

  async componentDidMount(): Promise<void> {
    const breadCrumbs = this.props.useUpdatedUX
      ? [BREADCRUMBS.MANAGED_INDICES, BREADCRUMBS.CHANGE_POLICY]
      : [BREADCRUMBS.INDEX_MANAGEMENT, BREADCRUMBS.MANAGED_INDICES, BREADCRUMBS.CHANGE_POLICY];
    this.context.chrome.setBreadcrumbs(breadCrumbs);
  }

  componentDidUpdate(prevProps: ChangePolicyProps, prevState: Readonly<ChangePolicyState>) {
    if (prevProps.dataSourceId !== this.props.dataSourceId) {
      // reset the state, if dataSourceId changes, i.e., clear state
      this.setState({
        ...ChangePolicy.emptyState,
      });
    }
  }

  onChangeSelectedPolicy = (selectedPolicies: PolicyOption[]): void => {
    // reset the selected state and radio whenever we select a new policy
    const selectedPoliciesError = selectedPolicies.length ? "" : "필수 항목입니다";
    this.setState({ selectedPolicies, selectedPoliciesError, stateSelected: "", stateRadioIdSelected: Radio.Current });
  };

  onChangeManagedIndices = (selectedManagedIndices: { label: string; value?: ManagedIndexItem }[]): void => {
    const managedIndicesError = selectedManagedIndices.length ? "" : "필수 항목입니다";
    if (!selectedManagedIndices.length) {
      this.onChangeStateFilters([]);
    }
    this.setState({ selectedManagedIndices, managedIndicesError });
  };

  onChangeStateFilters = (selectedStateFilters: { label: string }[]): void => {
    this.setState({ selectedStateFilters });
  };

  onChangeStateRadio = (optionId: string): void => {
    this.setState({ stateRadioIdSelected: optionId });
  };

  onStateSelectChange = (e: React.ChangeEvent<HTMLSelectElement>): void => {
    this.setState({ stateSelected: e.target.value });
  };

  onChangePolicy = async () => {
    try {
      const { managedIndexService } = this.props;
      const { selectedPolicies, selectedManagedIndices, selectedStateFilters, stateRadioIdSelected, stateSelected } = this.state;

      if (!selectedManagedIndices.length || !selectedPolicies.length) return;

      const indices = selectedManagedIndices.map(
        (selectedManagedIndex: { label: string; value?: ManagedIndexItem }) => selectedManagedIndex.label
      );
      const policyId = selectedPolicies[0].label;
      const state = stateRadioIdSelected === Radio.State ? stateSelected : null;
      const include = selectedStateFilters.map((selectedStateFilter: { label: string }) => ({ state: selectedStateFilter.label }));

      const changePolicyResponse = await managedIndexService.changePolicy(indices, policyId, state, include);

      if (changePolicyResponse.ok) {
        const { updatedIndices, failedIndices, failures } = changePolicyResponse.response;
        if (updatedIndices) {
          this.context.notifications.toasts.addSuccess(`인덱스 ${updatedIndices}개의 정책이 변경되었습니다`);
        }
        if (failures) {
          this.context.notifications.toasts.addDanger(
            `다음 인덱스의 정책 변경에 실패했습니다: ${failedIndices
              .map((failedIndex) => `[${failedIndex.indexName}, ${failedIndex.reason}]`)
              .join(", ")}`
          );
        }
      } else {
        this.context.notifications.toasts.addDanger(changePolicyResponse.error);
      }
    } catch (err) {
      this.context.notifications.toasts.addDanger(getErrorMessage(err, "정책을 변경하는 중 문제가 발생했습니다"));
    }
  };

  onCancel = () => this.props.history.goBack();

  onSubmit = async () => {
    const { selectedPolicies, selectedManagedIndices } = this.state;

    const managedIndicesError = selectedManagedIndices.length ? "" : "필수 항목입니다";
    const selectedPoliciesError = selectedPolicies.length ? "" : "필수 항목입니다";

    this.setState({ managedIndicesError, selectedPoliciesError, hasSubmitted: true });
    if (selectedManagedIndices.length && selectedPolicies.length) {
      await this.onChangePolicy();
    }
  };

  render() {
    const { indexService, managedIndexService, useUpdatedUX } = this.props;
    const {
      selectedPolicies,
      selectedManagedIndices,
      selectedStateFilters,
      stateRadioIdSelected,
      stateSelected,
      managedIndicesError,
      selectedPoliciesError,
      hasSubmitted,
    } = this.state;

    const Common = () => {
      return (
        <>
          <ChangeManagedIndices
            key={`changeManagedIndices-${this.props.dataSourceId}`} // force re-mount on dataSourceId change
            {...this.props}
            managedIndexService={managedIndexService}
            selectedManagedIndices={selectedManagedIndices}
            selectedStateFilters={selectedStateFilters}
            onChangeManagedIndices={this.onChangeManagedIndices}
            onChangeStateFilters={this.onChangeStateFilters}
            managedIndicesError={hasSubmitted ? managedIndicesError : ""}
          />

          <EuiSpacer />

          <NewPolicy
            key={`newPolicy-${this.props.dataSourceId}`} // force re-mount on dataSourceId change
            {...this.props}
            indexService={indexService}
            selectedPolicies={selectedPolicies}
            stateRadioIdSelected={stateRadioIdSelected}
            stateSelected={stateSelected}
            onChangePolicy={this.onChangeSelectedPolicy}
            onChangeStateRadio={this.onChangeStateRadio}
            onStateSelectChange={this.onStateSelectChange}
            selectedPoliciesError={hasSubmitted ? selectedPoliciesError : ""}
          />

          <EuiSpacer />

          <EuiFlexGroup alignItems="center" justifyContent="flexEnd" gutterSize="s">
            <EuiFlexItem grow={false}>
              <EuiSmallButtonEmpty onClick={this.onCancel} data-test-subj="changePolicyCancelButton">
                취소
              </EuiSmallButtonEmpty>
            </EuiFlexItem>
            <EuiFlexItem grow={false}>
              <EuiSmallButton fill onClick={this.onSubmit} data-test-subj="changePolicyChangeButton">
                변경
              </EuiSmallButton>
            </EuiFlexItem>
          </EuiFlexGroup>
        </>
      );
    };

    return !useUpdatedUX ? (
      <div style={{ padding: "0px 25px" }}>
        <EuiText size="s">
          <h1>정책 변경</h1>
        </EuiText>

        <EuiSpacer />

        {Common()}
      </div>
    ) : (
      <div style={{ padding: "0px 0px" }}>{Common()}</div>
    );
  }
}

export default function (props: Omit<ChangePolicyProps, keyof DataSourceMenuProperties>) {
  const dataSourceMenuProperties = useContext(DataSourceMenuContext);
  useUpdateUrlWithDataSourceProperties();
  const uiSettings = getUISettings();
  const useUpdatedUX = uiSettings.get("home:useNewHomePage");
  return <ChangePolicy {...props} {...dataSourceMenuProperties} useUpdatedUX={useUpdatedUX} />;
}
