/*
 * Copyright OpenSearch Contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import {
  EuiAccordion,
  EuiCallOut,
  EuiCodeEditor,
  EuiCompressedComboBox,
  EuiComboBoxOptionOption,
  EuiCompressedFieldText,
  EuiFlyout,
  EuiFlyoutBody,
  EuiFlyoutFooter,
  EuiFlyoutHeader,
  EuiCompressedFormRow,
  EuiLink,
  EuiCompressedSelect,
  EuiSpacer,
  EuiText,
  EuiTitle,
} from "@elastic/eui";
import _ from "lodash";
import { CreateRepositorySettings } from "../../../../../server/models/interfaces";
import React, { Component, useContext } from "react";
import FlyoutFooter from "../../../VisualCreatePolicy/components/FlyoutFooter";
import { CoreServicesContext } from "../../../../components/core_services";
import { SnapshotManagementService } from "../../../../services";
import { getErrorMessage } from "../../../../utils/helpers";
import CustomLabel from "../../../../components/CustomLabel";
import { CUSTOM_CONFIGURATION, FS_ADVANCED_SETTINGS, REPO_SELECT_OPTIONS, REPO_TYPES } from "./constants";
import {
  FS_REPOSITORY_DOCUMENTATION_URL,
  REPOSITORY_DOCUMENTATION_URL,
  S3_REPOSITORY_DOCUMENTATION_URL,
  SNAPSHOT_MANAGEMENT_DOCUMENTATION_URL,
} from "../../../../utils/constants";
import { DataSourceMenuContext, DataSourceMenuProperties } from "../../../../services/DataSourceMenuContext";
import MDSEnabledComponent from "../../../../components/MDSEnabledComponent";

interface CreateRepositoryProps extends DataSourceMenuProperties {
  service: SnapshotManagementService;
  editRepo: string | null;
  onCloseFlyout: () => void;
  createRepo: (repoName: string, repoType: string, settings: CreateRepositorySettings) => void;
}

interface CreateRepositoryState extends DataSourceMenuProperties {
  repoName: string;
  location: string;
  // repoTypeOptions: EuiComboBoxOptionOption<string>[];
  // selectedRepoTypeOption: EuiComboBoxOptionOption<string>[];

  selectedRepoTypeOption: string;
  fsSettingsJsonString: string;
  customSettingsJsonString: string;

  repoNameError: string;
  repoTypeError: string;
  locationError: string;
}

export class CreateRepositoryFlyout extends MDSEnabledComponent<CreateRepositoryProps, CreateRepositoryState> {
  static contextType = CoreServicesContext;

  constructor(props: CreateRepositoryProps) {
    super(props);

    this.state = {
      ...this.state,
      repoName: "",
      location: "",
      // repoTypeOptions: [],
      selectedRepoTypeOption: REPO_SELECT_OPTIONS[0].value as string,
      fsSettingsJsonString: JSON.stringify(FS_ADVANCED_SETTINGS, null, 4),
      customSettingsJsonString: JSON.stringify(CUSTOM_CONFIGURATION, null, 4),
      repoNameError: "",
      repoTypeError: "",
      locationError: "",
    };
  }

  async componentDidMount() {
    const { editRepo } = this.props;
    if (!!editRepo) {
      await this.getRepo(editRepo);
    }
  }

  async componentDidUpdate(prevProps: CreateRepositoryProps, prevState: CreateRepositoryState) {
    if (prevState.dataSourceId != this.state.dataSourceId) {
      const { editRepo } = this.props;
      this.setState({
        repoName: "",
        location: "",
        selectedRepoTypeOption: REPO_SELECT_OPTIONS[0].value as string,
        fsSettingsJsonString: JSON.stringify(FS_ADVANCED_SETTINGS, null, 4),
        customSettingsJsonString: JSON.stringify(CUSTOM_CONFIGURATION, null, 4),
        repoNameError: "",
        repoTypeError: "",
        locationError: "",
      });
      if (!!editRepo) {
        await this.getRepo(editRepo);
      }
    }
  }

  getRepo = async (repoName: string) => {
    const { service } = this.props;
    try {
      const response = await service.getRepository(repoName);
      if (response.ok) {
        const repoName = Object.keys(response.response)[0];
        const repoBody = response.response[repoName];
        const type = repoBody.type;
        const settings = repoBody.settings;
        const location = settings.location;
        delete settings.location;
        const settingsJsonString = JSON.stringify(settings);
        this.setState({ repoName, location });
      } else {
        this.context.notifications.toasts.addDanger(response.error);
      }
    } catch (err) {
      this.context.notifications.toasts.addDanger(getErrorMessage(err, "편집할 리포지토리를 불러오는 중 문제가 발생했습니다."));
    }
  };

  onClickAction = () => {
    const { createRepo } = this.props;
    const { repoName, selectedRepoTypeOption, location, fsSettingsJsonString, customSettingsJsonString } = this.state;

    if (!repoName.trim()) {
      this.setState({ repoNameError: "필수 항목입니다." });
      return;
    }
    if (!location.trim()) {
      this.setState({ location: "필수 항목입니다." });
      return;
    }
    if (selectedRepoTypeOption == "fs") {
      let settings;
      try {
        settings = JSON.parse(fsSettingsJsonString);
        settings.location = location;
      } catch (err) {
        this.context.notifications.toasts.addDanger("유효하지 않은 정책 JSON입니다");
      }
      createRepo(repoName, selectedRepoTypeOption, settings);
    } else if (selectedRepoTypeOption == "custom") {
      let repoType;
      let settings;
      try {
        const parsed = JSON.parse(customSettingsJsonString);
        repoType = parsed.type;
        settings = parsed.settings;
        createRepo(repoName, repoType, settings);
      } catch (err) {
        this.context.notifications.toasts.addDanger("유효하지 않은 정책 JSON입니다");
      }
    }
  };

  render() {
    const { editRepo, onCloseFlyout } = this.props;
    const {
      repoName,
      location,
      selectedRepoTypeOption,
      fsSettingsJsonString,
      customSettingsJsonString,
      repoNameError,
      repoTypeError,
      locationError,
    } = this.state;

    const customConfigHelpText = (
      <EuiText color="subdued" size="xs" style={{ padding: "5px 0px" }}>
        <p style={{ fontWeight: 200 }}>
          사용자 지정 유형과 설정으로 리포지토리를 정의합니다.{" "}
          <EuiLink href={S3_REPOSITORY_DOCUMENTATION_URL} target="_blank" rel="noopener noreferrer">
            샘플 구성 보기
          </EuiLink>
        </p>
      </EuiText>
    );
    let configuration;
    if (selectedRepoTypeOption == "fs") {
      configuration = (
        <>
          <CustomLabel title="위치" />
          <EuiCompressedFormRow isInvalid={!!locationError} error={locationError}>
            <EuiCompressedFieldText
              disabled={!!editRepo}
              placeholder="예: /mnt/snapshots"
              value={location}
              onChange={(e) => this.setState({ location: e.target.value })}
            />
          </EuiCompressedFormRow>

          <EuiSpacer size="l" />

          <EuiAccordion
            id="repo_advanced_settings"
            buttonContent={
              <EuiText size="s">
                <h3>고급 설정</h3>
              </EuiText>
            }
          >
            <EuiSpacer size="s" />

            <EuiText color="subdued" size="xs" style={{ padding: "5px 0px" }}>
              <p style={{ fontWeight: 200 }}>
                이 리포지토리에 대한 추가 설정을 정의합니다.{" "}
                <EuiLink href={FS_REPOSITORY_DOCUMENTATION_URL} target="_blank" rel="noopener noreferrer">
                  자세히 알아보기
                </EuiLink>
              </p>
            </EuiText>
            <EuiCodeEditor
              mode="json"
              width="90%"
              height="250px"
              value={fsSettingsJsonString}
              onChange={(str) => {
                this.setState({ fsSettingsJsonString: str });
              }}
              setOptions={{ fontSize: "14px" }}
            />
          </EuiAccordion>
        </>
      );
    }
    if (selectedRepoTypeOption == "custom") {
      configuration = (
        <>
          <EuiCallOut title="사용자 지정 리포지토리 유형 설치 및 구성">
            <EuiText size="s">
              <p>
                Amazon S3, Azure Blob Storage 등과 같은 사용자 지정 리포지토리를 사용하려면 OpenSearch에서 해당 리포지토리
                플러그인을 설치 및 구성한 다음 아래에서 리포지토리 구성을 정의하세요.{" "}
                <EuiLink href={REPOSITORY_DOCUMENTATION_URL} target="_blank" rel="noopener noreferrer">
                  자세히 알아보기
                </EuiLink>
              </p>
            </EuiText>
          </EuiCallOut>

          <EuiSpacer size="s" />

          <CustomLabel title="사용자 지정 구성" helpText={customConfigHelpText} />

          <EuiCodeEditor
            mode="json"
            width="90%"
            height="250px"
            value={customSettingsJsonString}
            onChange={(str) => {
              this.setState({ customSettingsJsonString: str });
            }}
            setOptions={{ fontSize: "14px" }}
          />
        </>
      );
    }

    const repoTypeHelpText = (
      <EuiText color="subdued" size="xs" style={{ padding: "5px 0px" }}>
        <p style={{ fontWeight: 200 }}>
          지원되는 리포지토리 유형을 선택하세요. 추가 유형을 사용하려면 최신 리포지토리 플러그인을 설치하고 사용자 지정 구성을 선택하세요.{" "}
          <EuiLink href={REPOSITORY_DOCUMENTATION_URL} target="_blank" rel="noopener noreferrer">
            자세히 알아보기
          </EuiLink>
        </p>
      </EuiText>
    );

    return (
      <EuiFlyout ownFocus={false} onClose={onCloseFlyout} maxWidth={600} size="m" hideCloseButton>
        <EuiFlyoutHeader hasBorder>
          <EuiText size="s">
            <EuiTitle size="m">
              <h2 id="flyoutTitle">{!!editRepo ? "리포지토리 편집" : "리포지토리 생성"}</h2>
            </EuiTitle>
          </EuiText>
        </EuiFlyoutHeader>

        <EuiFlyoutBody>
          <CustomLabel title="리포지토리 이름" />
          <EuiCompressedFormRow isInvalid={!!repoNameError} error={repoNameError}>
            <EuiCompressedFieldText
              disabled={!!editRepo}
              value={repoName}
              data-test-subj="repoNameInput"
              onChange={(e) => this.setState({ repoName: e.target.value })}
            />
          </EuiCompressedFormRow>

          <EuiSpacer size="m" />

          <CustomLabel title="리포지토리 유형" helpText={repoTypeHelpText} />
          <EuiCompressedFormRow isInvalid={!!repoTypeError} error={repoTypeError}>
            <EuiCompressedSelect
              options={REPO_SELECT_OPTIONS}
              value={selectedRepoTypeOption}
              onChange={(e) => this.setState({ selectedRepoTypeOption: e.target.value })}
            />
          </EuiCompressedFormRow>

          <EuiSpacer size="m" />

          {configuration}

          <EuiSpacer size="m" />
        </EuiFlyoutBody>

        <EuiFlyoutFooter>
          <FlyoutFooter save={!!editRepo} edit={!!editRepo} action="" onClickAction={this.onClickAction} onClickCancel={onCloseFlyout} />
        </EuiFlyoutFooter>
      </EuiFlyout>
    );
  }
}

export default function (props: Omit<CreateRepositoryProps, keyof DataSourceMenuProperties>) {
  const dataSourceMenuProps = useContext(DataSourceMenuContext);
  return <CreateRepositoryFlyout {...props} {...dataSourceMenuProps} />;
}
