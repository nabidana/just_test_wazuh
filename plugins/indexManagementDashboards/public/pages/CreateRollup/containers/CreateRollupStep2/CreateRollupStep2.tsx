/*
 * Copyright OpenSearch Contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { ChangeEvent, Component } from "react";
import { EuiSpacer, EuiTitle, EuiFlexGroup, EuiFlexItem, EuiCallOut, EuiComboBoxOptionOption, EuiText } from "@elastic/eui";
import { RouteComponentProps } from "react-router-dom";
import { RollupService } from "../../../../services";
import { BREADCRUMBS, ROUTES } from "../../../../utils/constants";
import CreateRollupSteps from "../../components/CreateRollupSteps";
import TimeAggregation from "../../components/TimeAggregations";
import AdvancedAggregation from "../../components/AdvancedAggregation";
import MetricsCalculation from "../../components/MetricsCalculation";
import { DimensionItem, FieldItem, MetricItem } from "../../../../../models/interfaces";
import { CoreServicesContext } from "../../../../components/core_services";

interface CreateRollupStep2Props extends RouteComponentProps {
  rollupService: RollupService;
  currentStep: number;
  fields: FieldItem[];
  selectedTerms: FieldItem[];
  selectedDimensionField: DimensionItem[];
  selectedMetrics: MetricItem[];
  metricError: string;
  timestamp: EuiComboBoxOptionOption<String>[];
  timestampError: string;
  intervalValue: number;
  intervalType: string;
  timezone: string;
  timeunit: string;
  onChangeTimestamp: (selectedOptions: EuiComboBoxOptionOption<String>[]) => void;
  onChangeIntervalType: (optionId: string) => void;
  onChangeIntervalValue: (e: ChangeEvent<HTMLInputElement>) => void;
  onChangeTimeunit: (e: ChangeEvent<HTMLSelectElement>) => void;
  onChangeTimezone: (e: ChangeEvent<HTMLSelectElement>) => void;
  onDimensionSelectionChange: (selectedFields: DimensionItem[]) => void;
  onMetricSelectionChange: (selectedFields: MetricItem[]) => void;
  useNewUX: boolean;
}

export default class CreateRollupStep2 extends Component<CreateRollupStep2Props> {
  static contextType = CoreServicesContext;
  constructor(props: CreateRollupStep2Props) {
    super(props);
  }

  componentDidMount = async (): Promise<void> => {
    this.context.chrome.setBreadcrumbs([BREADCRUMBS.INDEX_MANAGEMENT, BREADCRUMBS.ROLLUPS]);
  };

  onCancel = (): void => {
    this.props.history.push(ROUTES.ROLLUPS);
  };

  render() {
    if (this.props.currentStep !== 2) return null;
    const { fields, timestamp } = this.props;

    const getTitle = !this.props.useNewUX
      ? () => {
          return (
            <>
              <EuiText size="s">
                <h1>집계 및 지표 정의</h1>
              </EuiText>
              <EuiSpacer />
            </>
          );
        }
      : () => {};
    const padding_style = this.props.useNewUX ? { padding: "0px 0px" } : { padding: "5px 50px" };

    return (
      <div style={padding_style}>
        <EuiFlexGroup>
          <EuiFlexItem style={{ maxWidth: 300 }} grow={false}>
            <CreateRollupSteps step={2} />
          </EuiFlexItem>

          <EuiFlexItem>
            {getTitle()}

            <TimeAggregation {...this.props} selectedTimestamp={timestamp} fieldsOption={fields} />
            <EuiSpacer />
            <AdvancedAggregation {...this.props} fieldsOption={fields} />
            <EuiSpacer />
            <MetricsCalculation {...this.props} fieldsOption={fields} />
            <EuiSpacer />
            <EuiCallOut color="warning">
              <EuiText size="s">
                <p>작업을 생성한 후에는 집계 또는 지표를 변경할 수 없습니다. 계속하기 전에 선택 항목을 다시 확인하세요.</p>
              </EuiText>
            </EuiCallOut>
          </EuiFlexItem>
        </EuiFlexGroup>
        <EuiSpacer />
      </div>
    );
  }
}
