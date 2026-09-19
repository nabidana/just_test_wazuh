/*
 * Copyright OpenSearch Contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { Component } from "react";
import { EuiFlexGrid, EuiFlexItem, EuiText, EuiPanel, EuiFlexGroup, EuiHorizontalRule, EuiTitle } from "@elastic/eui";
import { ContentPanelActions } from "../../../../components/ContentPanel";
import { ModalConsumer } from "../../../../components/Modal";
import { buildIntervalScheduleText } from "../../../CreateRollup/utils/helpers";

interface ReviewScheduleProps {
  jobEnabledByDefault: boolean;
  continuousJob: string;
  interval: number;
  intervalTimeunit: string;
  pageSize: number;
  onChangeStep: (step: number) => void;
}

export default class ReviewSchedule extends Component<ReviewScheduleProps> {
  constructor(props: ReviewScheduleProps) {
    super(props);
  }

  render() {
    const { jobEnabledByDefault, continuousJob, interval, intervalTimeunit, pageSize, onChangeStep } = this.props;

    const enabled = jobEnabledByDefault ? "예" : "아니요";

    const schedule = buildIntervalScheduleText(continuousJob === "yes", interval, intervalTimeunit);

    return (
      <EuiPanel>
        <EuiFlexGroup>
          <EuiFlexItem>
            <EuiTitle size="s">
              <h2>일정 지정</h2>
            </EuiTitle>
          </EuiFlexItem>
          <EuiFlexItem grow={false}>
            <ModalConsumer>
              {() => (
                <ContentPanelActions
                  actions={[
                    {
                      text: "편집",
                      buttonProps: {
                        onClick: () => onChangeStep(3),
                      },
                    },
                  ]}
                />
              )}
            </ModalConsumer>
          </EuiFlexItem>
        </EuiFlexGroup>
        <EuiHorizontalRule margin="xs" />
        <div>
          <EuiFlexGrid columns={4}>
            <EuiFlexItem>
              <EuiText size="xs">
                <dt>기본적으로 활성화</dt>
                <dd>{enabled}</dd>
              </EuiText>
            </EuiFlexItem>
            <EuiFlexItem>
              <EuiText size="xs">
                <dt>일정</dt>
                <dd>{schedule}</dd>
              </EuiText>
            </EuiFlexItem>
            <EuiFlexItem>
              <EuiText size="xs">
                <dt>실행당 페이지 수</dt>
                <dd>{pageSize}</dd>
              </EuiText>
            </EuiFlexItem>
          </EuiFlexGrid>
        </div>
      </EuiPanel>
    );
  }
}
