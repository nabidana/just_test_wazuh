/*
 * Copyright OpenSearch Contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { Component, useContext } from "react";
import {
  EuiSmallButtonEmpty,
  EuiFlexGrid,
  EuiFlexItem,
  EuiFlyout,
  EuiFlyoutBody,
  EuiFlyoutFooter,
  EuiFlyoutHeader,
  EuiLink,
  EuiSpacer,
  EuiText,
  EuiTitle,
} from "@elastic/eui";
import { SnapshotManagementService } from "../../../../services";
import { GetSnapshot } from "../../../../../server/models/interfaces";
import { CoreServicesContext } from "../../../../components/core_services";
import { getErrorMessage } from "../../../../utils/helpers";
import * as H from "history";
import { ROUTES } from "../../../../utils/constants";
import InfoModal from "../../../SnapshotPolicyDetails/components/InfoModal";
import { ModalConsumer } from "../../../../components/Modal";
import { DataSourceMenuContext, DataSourceMenuProperties } from "../../../../services/DataSourceMenuContext";
import MDSEnabledComponent from "../../../../components/MDSEnabledComponent";

interface SnapshotFlyoutProps extends DataSourceMenuProperties {
  snapshotId: string;
  repository: string;
  snapshotManagementService: SnapshotManagementService;
  onCloseFlyout: () => void;
  history: H.History;
}

interface SnapshotFlyoutState extends DataSourceMenuProperties {
  snapshot: GetSnapshot | null;
}

export class SnapshotFlyout extends MDSEnabledComponent<SnapshotFlyoutProps, SnapshotFlyoutState> {
  static contextType = CoreServicesContext;

  constructor(props: SnapshotFlyoutProps) {
    super(props);

    this.state = {
      ...this.state,
      snapshot: null,
    };
  }

  async componentDidMount() {
    const { snapshotId, repository } = this.props;
    await this.getSnapshot(snapshotId, repository);
  }

  async componentDidUpdate(prevProps: SnapshotFlyoutProps, prevState: SnapshotFlyoutState) {
    if (prevState.dataSourceId != this.state.dataSourceId) {
      const { snapshotId, repository } = this.props;
      await this.getSnapshot(snapshotId, repository);
    }
  }

  getSnapshot = async (snapshotId: string, repository: string) => {
    const { snapshotManagementService } = this.props;
    try {
      const response = await snapshotManagementService.getSnapshot(snapshotId, repository);
      if (response.ok) {
        this.setState({ snapshot: response.response });
      }
    } catch (err) {
      this.context.notifications.toasts.addDanger(getErrorMessage(err, "스냅샷을 불러오는 중 문제가 발생했습니다."));
    }
  };

  render() {
    const { onCloseFlyout, repository } = this.props;
    const { snapshot } = this.state;

    const items1 = [
      { term: "스냅샷 이름", value: snapshot?.snapshot },
      { term: "상태", value: snapshot?.state },
    ];

    const items2 = [
      { term: "시작 시간", value: snapshot?.start_time },
      { term: "종료 시간", value: snapshot?.end_time },
      { term: "리포지토리", value: repository },
      {
        term: "정책",
        value: (
          <EuiLink onClick={() => this.props.history.push(`${ROUTES.SNAPSHOT_POLICY_DETAILS}?id=${snapshot?.metadata?.sm_policy}`)}>
            {snapshot?.metadata?.sm_policy}
          </EuiLink>
        ),
      },
    ];

    let error;
    if (snapshot?.failures != null) {
      error = (
        <EuiText size="s">
          <dt>오류 세부정보</dt>
          <dd>
            <ModalConsumer>
              {({ onShow }) => <EuiLink onClick={() => onShow(InfoModal, { info: snapshot.failures })}>실패</EuiLink>}
            </ModalConsumer>
          </dd>
        </EuiText>
      );
    }

    return (
      <EuiFlyout ownFocus={false} onClose={onCloseFlyout} maxWidth={600} size="m" hideCloseButton>
        <EuiFlyoutHeader hasBorder>
          <EuiText size="s">
            <EuiTitle size="m">
              <h2 id="flyoutTitle">{snapshot?.snapshot}</h2>
            </EuiTitle>
          </EuiText>
        </EuiFlyoutHeader>

        <EuiFlyoutBody>
          <EuiFlexGrid columns={2}>
            {items1.map((item) => (
              <EuiFlexItem key={`${item.term}#${item.value}`}>
                <EuiText size="s">
                  <dt>{item.term}</dt>
                  <dd>{item.value}</dd>
                </EuiText>
              </EuiFlexItem>
            ))}
          </EuiFlexGrid>

          <EuiSpacer size="m" />
          {error}
          <EuiSpacer size="m" />

          <EuiFlexGrid columns={2}>
            {items2.map((item) => (
              <EuiFlexItem key={`${item.term}#${item.value}`}>
                <EuiText size="s">
                  <dt>{item.term}</dt>
                  <dd>{item.value}</dd>
                </EuiText>
              </EuiFlexItem>
            ))}
          </EuiFlexGrid>

          <EuiSpacer size="l" />

          <EuiText size="s">
            <dt>인덱스</dt>
            <dd>{snapshot?.indices.join(", ")}</dd>
          </EuiText>
        </EuiFlyoutBody>

        <EuiFlyoutFooter>
          <EuiSmallButtonEmpty onClick={onCloseFlyout}>닫기</EuiSmallButtonEmpty>
        </EuiFlyoutFooter>
      </EuiFlyout>
    );
  }
}

export default function (props: Omit<SnapshotFlyoutProps, keyof DataSourceMenuProperties>) {
  const dataSourceMenuProps = useContext(DataSourceMenuContext);
  return <SnapshotFlyout {...props} {...dataSourceMenuProps} />;
}
