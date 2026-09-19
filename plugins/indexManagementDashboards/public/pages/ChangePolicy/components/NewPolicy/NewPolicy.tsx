/*
 * Copyright OpenSearch Contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import _ from "lodash";
import {
  EuiSpacer,
  EuiText,
  EuiCompressedRadioGroup,
  EuiCompressedFormRow,
  EuiCompressedSelect,
  EuiCompressedComboBox,
  EuiLink,
  EuiIcon,
  EuiPanel,
  EuiHorizontalRule,
  EuiTitle,
} from "@elastic/eui";
import { ContentPanel } from "../../../../components/ContentPanel";
import { IndexService } from "../../../../services";
import { Radio } from "../../containers/ChangePolicy/ChangePolicy";
import { DocumentPolicy, Policy } from "../../../../../models/interfaces";
import { PolicyOption } from "../../models/interfaces";
import { getErrorMessage } from "../../../../utils/helpers";
import { DOCUMENTATION_URL } from "../../../../utils/constants";
import { CoreServicesContext } from "../../../../components/core_services";

interface NewPolicyProps {
  indexService: IndexService;
  selectedPolicies: PolicyOption[];
  stateRadioIdSelected: string;
  stateSelected: string;
  selectedPoliciesError: string;
  onChangePolicy: (selectedPolicies: PolicyOption[]) => void;
  onChangeStateRadio: (optionId: string) => void;
  onStateSelectChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

interface NewPolicyState {
  stateOptions: { value: string; text: string }[];
  policiesIsLoading: boolean;
  policies: PolicyOption[];
}

export default class NewPolicy extends React.Component<NewPolicyProps, NewPolicyState> {
  static contextType = CoreServicesContext;
  state = {
    stateOptions: [],
    policiesIsLoading: false,
    policies: [],
  };

  async componentDidMount(): Promise<void> {
    await this.onPolicySearchChange("");
  }

  onPolicySearchChange = async (searchValue: string): Promise<void> => {
    const { indexService } = this.props;
    this.setState({ policiesIsLoading: true, policies: [] });
    try {
      const searchPoliciesResponse = await indexService.searchPolicies(searchValue, true);
      if (searchPoliciesResponse.ok) {
        const policies = searchPoliciesResponse.response.policies.map((p: DocumentPolicy) => ({
          label: p.id,
          value: p.policy,
        }));
        this.setState({ policies });
      } else {
        if (searchPoliciesResponse.error.startsWith("[index_not_found_exception]")) {
          this.context.notifications.toasts.addDanger("아직 정책을 생성하지 않았습니다");
        } else {
          this.context.notifications.toasts.addDanger(searchPoliciesResponse.error);
        }
      }
    } catch (err) {
      this.context.notifications.toasts.addDanger(getErrorMessage(err, "정책을 검색하는 중 문제가 발생했습니다"));
    }

    this.setState({ policiesIsLoading: false });
  };

  render() {
    const { selectedPolicies, stateRadioIdSelected, stateSelected, selectedPoliciesError, useUpdatedUX } = this.props;
    const { policies, policiesIsLoading } = this.state;

    const hasSelectedPolicy = !!selectedPolicies.length;
    const stateOptions = _.flatten(
      selectedPolicies.map((selectedPolicy: PolicyOption) =>
        selectedPolicy.value.states.map((state) => ({ value: state.name, text: state.name }))
      )
    );

    const currentRadio = {
      id: Radio.Current,
      label: (
        <EuiText size="xs">
          <p>정책이 적용된 후 인덱스를 현재 상태로 유지</p>
        </EuiText>
      ),
    };
    const stateRadio = {
      id: Radio.State,
      label: (
        <EuiText size="xs">
          <p>정책이 적용된 후 인덱스를 다음 상태로 전환</p>
        </EuiText>
      ),
      disabled: !hasSelectedPolicy || !stateOptions.length,
    };
    const radioOptions = [currentRadio, stateRadio];
    return (
      <EuiPanel>
        <EuiTitle size="s">
          <h2>새 정책 선택</h2>
        </EuiTitle>
        <EuiHorizontalRule margin="xs" />
        <div>
          <EuiText size="xs">
            <p>
              새 정책이 적용되는 시점은 인덱스의 현재 상태와 새 정책의 상태에 따라 달라집니다.{" "}
              <EuiLink href={DOCUMENTATION_URL} target="_blank" rel="noopener noreferrer">
                자세히 알아보기
              </EuiLink>
            </p>
          </EuiText>

          <EuiSpacer size="s" />

          <EuiCompressedFormRow
            label={
              <EuiText size="s">
                <h3>새 정책</h3>
              </EuiText>
            }
            isInvalid={!!selectedPoliciesError}
            error={selectedPoliciesError}
          >
            <EuiCompressedComboBox
              placeholder=""
              async
              options={policies}
              isInvalid={!!selectedPoliciesError}
              singleSelection={{ asPlainText: true }}
              selectedOptions={selectedPolicies}
              isLoading={policiesIsLoading}
              // @ts-ignore
              onChange={this.props.onChangePolicy}
              onSearchChange={this.onPolicySearchChange}
            />
          </EuiCompressedFormRow>

          <EuiSpacer size="m" />

          <EuiCompressedRadioGroup options={radioOptions} idSelected={stateRadioIdSelected} onChange={this.props.onChangeStateRadio} />

          <EuiSpacer size="s" />

          <EuiCompressedFormRow>
            <EuiCompressedSelect
              disabled={stateRadioIdSelected !== Radio.State}
              options={stateOptions}
              value={stateSelected}
              onChange={this.props.onStateSelectChange}
              aria-label="새 정책의 시작 상태"
            />
          </EuiCompressedFormRow>
        </div>
      </EuiPanel>
    );
  }
}
