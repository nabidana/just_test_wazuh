/*
 * Copyright OpenSearch Contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { Component } from "react";
import { EuiSpacer, EuiFlexGroup, EuiFlexItem, EuiCallOut, EuiText } from "@elastic/eui";
import { RouteComponentProps } from "react-router-dom";
import { TransformService } from "../../../../services";
import { BREADCRUMBS, ROUTES } from "../../../../utils/constants";
import { FieldItem, IndexItem, TransformAggItem, TransformGroupItem } from "../../../../../models/interfaces";
import CreateTransformSteps from "../../components/CreateTransformSteps";
import JobNameAndIndices from "../../components/JobNameAndIndices";
import ReviewDefinition from "../../components/ReviewDefinition";
import ReviewSchedule from "../../components/ReviewSchedule";
import { CoreServicesContext } from "../../../../components/core_services";

interface ReviewAndCreateStepProps extends RouteComponentProps {
  transformService: TransformService;
  submitError: string;
  currentStep: number;
  onChangeStep: (step: number) => void;
  transformId: string;
  description: string;
  sourceIndex: { label: string; value?: IndexItem }[];
  targetIndex: { label: string; value?: IndexItem }[];
  sourceIndexFilter: string;

  jobEnabledByDefault: boolean;
  continuousJob: string;
  pageSize: number;
  fields: FieldItem[];
  selectedGroupField: TransformGroupItem[];
  onGroupSelectionChange: (selectedFields: TransformGroupItem[], aggItem: TransformAggItem) => void;
  selectedAggregations: any;
  aggList: TransformAggItem[];
  onAggregationSelectionChange: (selectedFields: any, aggItem: TransformAggItem) => void;
  onRemoveTransformation: (name: string) => void;
  previewTransform: any[];

  interval: number;
  intervalTimeunit: string;
  useUpdatedUX: boolean;
}

export default class ReviewAndCreateStep extends Component<ReviewAndCreateStepProps> {
  static contextType = CoreServicesContext;
  constructor(props: ReviewAndCreateStepProps) {
    super(props);
  }

  componentDidMount = async (): Promise<void> => {
    this.context.chrome.setBreadcrumbs([BREADCRUMBS.INDEX_MANAGEMENT, BREADCRUMBS.TRANSFORMS]);
  };

  onCancel = (): void => {
    this.props.history.push(ROUTES.TRANSFORMS);
  };

  render() {
    if (this.props.currentStep != 4) return null;

    const Title = !this.props.useUpdatedUX
      ? () => {
          return (
            <>
              <EuiText size="s">
                <h1>검토 및 생성</h1>
              </EuiText>
              <EuiSpacer />
            </>
          );
        }
      : () => {};

    return (
      <div style={this.props.useUpdatedUX ? { padding: "0px" } : { padding: "5px 50px" }}>
        <EuiFlexGroup>
          <EuiFlexItem style={{ maxWidth: 300 }} grow={false}>
            <CreateTransformSteps step={4} />
          </EuiFlexItem>
          <EuiFlexItem style={{ overflow: "auto", flex: 1 }} grow={false}>
            {Title()}
            <JobNameAndIndices {...this.props} />
            <EuiSpacer />
            <ReviewDefinition {...this.props} notifications={this.context.notifications} sourceIndex={this.props.sourceIndex[0].label} />
            <EuiSpacer />
            <ReviewSchedule {...this.props} />
            <EuiSpacer />
            <EuiCallOut color="warning" size="s">
              <p>작업을 생성한 후에는 설명과 일정만 변경할 수 있습니다. 진행하기 전에 선택 항목을 다시 확인하세요.</p>
            </EuiCallOut>
          </EuiFlexItem>
        </EuiFlexGroup>
        <EuiSpacer />
      </div>
    );
  }
}
