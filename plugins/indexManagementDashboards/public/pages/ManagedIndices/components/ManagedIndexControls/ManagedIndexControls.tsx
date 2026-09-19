/*
 * Copyright OpenSearch Contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { Component } from "react";
import {
  ArgsWithQuery,
  ArgsWithError,
  EuiFlexGroup,
  EuiFlexItem,
  EuiSearchBar,
  EuiCompressedSwitch,
  EuiButtonIcon,
  EuiButtonEmpty,
  EuiSpacer,
  EuiToolTip,
} from "@elastic/eui";
import { DataStream } from "../../../../../server/models/interfaces";
import { getUISettings } from "../../../../services/Services";

interface ManagedIndexControlsProps {
  search: string;
  showDataStreams: boolean;
  onSearchChange: (args: ArgsWithQuery | ArgsWithError) => void;
  onRefresh: () => void;
  getDataStreams: () => Promise<DataStream[]>;
  toggleShowDataStreams: () => void;
  Actions?: React.JSX.Element;
}

export default class ManagedIndexControls extends Component<ManagedIndexControlsProps, object> {
  state = {
    refreshInterval: 0,
    isPaused: true,
  };

  onRefreshChange = ({ refreshInterval, isPaused }: { refreshInterval: number; isPaused: boolean }) => {
    this.setState({ isPaused, refreshInterval });
  };

  getDataStreams = async () => {
    return (await this.props.getDataStreams()).map((ds) => ({ value: ds.name }));
  };

  render() {
    const { search, onSearchChange, showDataStreams, toggleShowDataStreams, Actions, onRefresh } = this.props;

    const schema = {
      strict: true,
      fields: {
        indices: {
          type: "string",
        },
        data_streams: {
          type: "string",
        },
      },
    };

    const filters = showDataStreams
      ? [
          {
            type: "field_value_selection",
            field: "data_streams",
            name: "데이터 스트림",
            noOptionsMessage: "데이터 스트림을 찾을 수 없습니다",
            multiSelect: false,
            cache: 60000,
            options: () => this.getDataStreams(),
            popoverProps: {
              button: (
                <EuiButtonEmpty size="s" iconType="arrowDown" iconSide="right" flush="right">
                  데이터 스트림2
                </EuiButtonEmpty>
              ),
            },
          },
        ]
      : undefined;

    const uiSettings = getUISettings();
    const useUpdatedUX = uiSettings.get("home:useNewHomePage");

    return useUpdatedUX ? (
      <>
        <EuiFlexGroup alignItems="center" gutterSize="s">
          <EuiFlexItem>
            <EuiSearchBar
              query={search}
              box={{ placeholder: "검색", schema, incremental: true, compressed: true }}
              compressed
              onChange={onSearchChange}
              filters={filters}
            />
          </EuiFlexItem>
          <EuiFlexItem grow={false}>
            <EuiToolTip content="새로고침">
              <EuiButtonIcon iconType="refresh" data-test-subj="refreshButton" display="base" size="s" onClick={onRefresh} />
            </EuiToolTip>
          </EuiFlexItem>
          <EuiFlexItem grow={false}>{Actions}</EuiFlexItem>
          <EuiFlexItem grow={false}>
            <EuiCompressedSwitch
              label="데이터 스트림 인덱스 표시"
              checked={showDataStreams}
              onChange={toggleShowDataStreams}
              data-test-subj="toggleShowDataStreams"
            />
          </EuiFlexItem>
        </EuiFlexGroup>
        <EuiSpacer size="m" />
      </>
    ) : (
      <EuiFlexGroup style={{ padding: "0px 5px" }} alignItems="center">
        <EuiFlexItem>
          <EuiSearchBar
            query={search}
            box={{ placeholder: "인덱스 이름 검색", schema, incremental: true }}
            compressed
            onChange={onSearchChange}
            filters={filters}
          />
        </EuiFlexItem>
        <EuiFlexItem grow={false}>
          <EuiCompressedSwitch
            label="데이터 스트림 인덱스 표시"
            checked={showDataStreams}
            onChange={toggleShowDataStreams}
            data-test-subj="toggleShowDataStreams"
          />
        </EuiFlexItem>
      </EuiFlexGroup>
    );
  }
}
