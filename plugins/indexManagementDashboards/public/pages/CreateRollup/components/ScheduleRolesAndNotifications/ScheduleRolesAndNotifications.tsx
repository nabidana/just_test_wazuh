/*
 * Copyright OpenSearch Contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { Component } from "react";
import { EuiFlexGrid, EuiFlexGroup, EuiFlexItem, EuiHorizontalRule, EuiPanel, EuiSpacer, EuiText, EuiTitle } from "@elastic/eui";
import { ContentPanel, ContentPanelActions } from "../../../../components/ContentPanel";
import { ModalConsumer } from "../../../../components/Modal";
import { parseTimeunit, buildIntervalScheduleText, buildCronScheduleText } from "../../utils/helpers";

interface ScheduleRolesAndNotificationsProps {
  rollupId: string;
  onChangeStep: (step: number) => void;
  jobEnabledByDefault: boolean;
  continuousJob: string;
  continuousDefinition: string;
  interval: number;
  intervalTimeunit: string;
  cronExpression: string;
  cronTimezone: string;
  pageSize: number;
  delayTime: number | undefined;
  delayTimeunit: string;
}

export default class ScheduleRolesAndNotifications extends Component<ScheduleRolesAndNotificationsProps> {
  render() {
    const {
      onChangeStep,
      jobEnabledByDefault,
      continuousJob,
      continuousDefinition,
      interval,
      intervalTimeunit,
      cronExpression,
      pageSize,
      delayTime,
      delayTimeunit,
    } = this.props;

    let scheduleText =
      continuousDefinition === "fixed"
        ? buildIntervalScheduleText(continuousJob === "yes", interval, intervalTimeunit)
        : buildCronScheduleText(continuousJob === "yes", cronExpression);

    return (
      <EuiPanel>
        <EuiFlexGroup gutterSize="xs">
          <EuiFlexItem>
            <EuiTitle size="s">
              <h2>일정</h2>
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
        <EuiHorizontalRule margin={"xs"} />
        <div>
          <EuiSpacer size="s" />
          <EuiFlexGrid columns={4}>
            <EuiFlexItem>
              <EuiText size="s">
                <dt>기본적으로 활성화</dt>
                <dd>{jobEnabledByDefault ? "예" : "아니요"}</dd>
              </EuiText>
            </EuiFlexItem>
            <EuiFlexItem>
              <EuiText size="s">
                <dt>일정</dt>
                <dd>{scheduleText}</dd>
              </EuiText>
            </EuiFlexItem>
            <EuiFlexItem>
              <EuiText size="s">
                <dt>실행당 페이지 수</dt>
                <dd>{pageSize}</dd>
              </EuiText>
            </EuiFlexItem>
            <EuiFlexItem>
              <EuiText size="s">
                <dt>실행 지연</dt>
                <dd>
                  {isNaN(delayTime) || delayTime == undefined || delayTime == 0 ? "-" : delayTime + " " + parseTimeunit(delayTimeunit)}
                </dd>
              </EuiText>
            </EuiFlexItem>
          </EuiFlexGrid>
          <EuiSpacer size="s" />
        </div>
      </EuiPanel>
    );
  }
}
