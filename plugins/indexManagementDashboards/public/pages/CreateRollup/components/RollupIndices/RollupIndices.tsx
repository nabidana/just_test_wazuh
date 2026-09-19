/*
 * Copyright OpenSearch Contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { Component, Fragment } from "react";
import {
  EuiSpacer,
  EuiCompressedFormRow,
  EuiCallOut,
  EuiText,
  EuiLink,
  EuiFlexGroup,
  EuiHorizontalRule,
  EuiPanel,
  EuiTitle,
} from "@elastic/eui";
import { EuiComboBoxOptionOption } from "@elastic/eui/src/components/combo_box/types";
import _ from "lodash";
import EuiCompressedComboBox from "../../../../components/ComboBoxWithoutWarning";
import { IndexItem } from "../../../../../models/interfaces";
import IndexService from "../../../../services/IndexService";
import { CoreServicesContext } from "../../../../components/core_services";
import { wildcardOption } from "../../../../utils/helpers";

interface RollupIndicesProps {
  indexService: IndexService;
  sourceIndex: { label: string; value?: IndexItem }[];
  sourceIndexError: string;
  targetIndex: { label: string; value?: IndexItem }[];
  targetIndexError: string;
  onChangeSourceIndex: (options: EuiComboBoxOptionOption<IndexItem>[]) => void;
  onChangeTargetIndex: (options: EuiComboBoxOptionOption<IndexItem>[]) => void;
  hasAggregation: boolean;
}

interface RollupIndicesState {
  isLoading: boolean;
  indexOptions: { label: string; value?: IndexItem }[];
  targetIndexOptions: { label: string; value?: IndexItem }[];
}

export const ROLLUP_RESULTS_HELP_TEXT_LINK = "https://opensearch.org/docs/latest/im-plugin/index-rollups/index/#step-1-set-up-indices";

export default class RollupIndices extends Component<RollupIndicesProps, RollupIndicesState> {
  static contextType = CoreServicesContext;
  _isMount: boolean;
  constructor(props: RollupIndicesProps) {
    super(props);
    this.state = {
      isLoading: true,
      indexOptions: [],
      targetIndexOptions: [],
    };

    this._isMount = true;
    this.onIndexSearchChange = _.debounce(this.onIndexSearchChange, 500, { leading: true });
  }

  async componentDidMount(): Promise<void> {
    await this.onIndexSearchChange("");
  }

  componentWillUnmount(): void {
    this._isMount = false;
  }

  onIndexSearchChange = async (searchValue: string): Promise<void> => {
    if (!this._isMount) {
      return;
    }
    const { indexService } = this.props;
    this.setState({ isLoading: true, indexOptions: [] });
    try {
      const dataStreamsAndIndicesNamesResponse = await indexService.getDataStreamsAndIndicesNames(searchValue);
      if (dataStreamsAndIndicesNamesResponse.ok) {
        // Adding wildcard to search value
        const options = searchValue.trim() ? [{ label: wildcardOption(searchValue) }] : [];
        const dataStreams = dataStreamsAndIndicesNamesResponse.response.dataStreams.map((label) => ({ label }));
        const indices = dataStreamsAndIndicesNamesResponse.response.indices.map((label) => ({ label }));
        if (this._isMount) {
          this.setState({ indexOptions: options.concat(dataStreams, indices), targetIndexOptions: indices });
        }
      } else {
        if (dataStreamsAndIndicesNamesResponse.error.startsWith("[index_not_found_exception]")) {
          this.context.notifications.toasts.addDanger("사용 가능한 인덱스가 없습니다");
        } else {
          this.context.notifications.toasts.addDanger(dataStreamsAndIndicesNamesResponse.error);
        }
      }
    } catch (err) {
      this.context.notifications.toasts.addDanger(err.message);
    }

    if (this._isMount) {
      this.setState({ isLoading: false });
    }
  };

  onCreateOption = (searchValue: string, flattenedOptions: { label: string; value?: IndexItem }[]): void => {
    const { targetIndexOptions } = this.state;
    const { onChangeTargetIndex } = this.props;
    const normalizedSearchValue = searchValue.trim();

    if (!normalizedSearchValue) {
      return;
    }

    const newOption = {
      label: searchValue,
    };

    // Create the option if it doesn't exist.
    if (flattenedOptions.findIndex((option) => option.label.trim() === normalizedSearchValue) === -1) {
      targetIndexOptions.concat(newOption);
      this.setState({ targetIndexOptions: targetIndexOptions });
    }
    onChangeTargetIndex([newOption]);
  };

  render() {
    const {
      sourceIndex,
      sourceIndexError,
      targetIndex,
      targetIndexError,
      onChangeSourceIndex,
      onChangeTargetIndex,
      hasAggregation,
    } = this.props;
    const { isLoading, indexOptions, targetIndexOptions } = this.state;
    return (
      <EuiPanel>
        <EuiFlexGroup gutterSize="xs" alignItems="center">
          <EuiTitle size="s">
            <h2>인덱스</h2>
          </EuiTitle>
        </EuiFlexGroup>
        <EuiHorizontalRule margin={"xs"} />
        <EuiSpacer size="s" />
        <EuiCallOut color="warning">
          <EuiText size="s">
            <p>작업을 생성한 후에는 인덱스를 변경할 수 없습니다. 계속하기 전에 원본 및 대상 인덱스 이름을 다시 확인하세요.</p>
          </EuiText>
        </EuiCallOut>
        {hasAggregation && (
          <Fragment>
            <EuiSpacer />
            <EuiCallOut color="warning">
              <p>참고: 원본 인덱스를 변경하면 기존에 정의된 모든 집계 및 지표 설정이 삭제됩니다.</p>
            </EuiCallOut>
          </Fragment>
        )}
        <EuiSpacer size="m" />
        <EuiCompressedFormRow
          label={
            <EuiText size="s">
              <h3>원본 인덱스</h3>
            </EuiText>
          }
          error={sourceIndexError}
          isInvalid={sourceIndexError != ""}
          helpText="롤업 작업을 수행할 인덱스 패턴입니다. 와일드카드로 *를 사용할 수 있습니다."
        >
          <EuiCompressedComboBox
            placeholder="원본 인덱스 선택"
            options={indexOptions}
            selectedOptions={sourceIndex}
            onChange={onChangeSourceIndex}
            singleSelection={{ asPlainText: true }}
            onSearchChange={this.onIndexSearchChange}
            isLoading={isLoading}
            isInvalid={sourceIndexError != ""}
            data-test-subj="sourceIndexCombobox"
          />
        </EuiCompressedFormRow>

        <EuiCompressedFormRow
          label={
            <EuiText size="s">
              <h3>대상 인덱스</h3>
            </EuiText>
          }
          error={targetIndexError}
          isInvalid={targetIndexError != ""}
          helpText={
            <EuiText size={"xs"}>
              {"대상 인덱스는 롤업 결과를 저장합니다. 기존 인덱스를 선택하거나 변수가 포함된 새 인덱스 이름을 입력할 수 있습니다 "}
              {
                <EuiLink external href={ROLLUP_RESULTS_HELP_TEXT_LINK} target={"_blank"} rel="noopener noreferrer">
                  자세히 알아보기
                </EuiLink>
              }
            </EuiText>
          }
        >
          <EuiCompressedComboBox
            placeholder="대상 인덱스 선택 또는 생성"
            options={targetIndexOptions}
            selectedOptions={targetIndex}
            onChange={onChangeTargetIndex}
            onCreateOption={this.onCreateOption}
            singleSelection={{ asPlainText: true }}
            onSearchChange={this.onIndexSearchChange}
            isLoading={isLoading}
            isInvalid={targetIndexError != ""}
            data-test-subj="targetIndexCombobox"
          />
        </EuiCompressedFormRow>
      </EuiPanel>
    );
  }
}
