/*
 * Copyright OpenSearch Contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { ChangeEvent, Component, Fragment, useContext } from "react";
import {
  EuiSpacer,
  EuiTitle,
  EuiFlexGroup,
  EuiFlexItem,
  EuiSmallButton,
  EuiSmallButtonEmpty,
  EuiCallOut,
  EuiLink,
  EuiText,
} from "@elastic/eui";
import queryString from "query-string";
import { RouteComponentProps } from "react-router-dom";
import { DEFAULT_POLICY } from "../../utils/constants";
import DefinePolicy from "../../components/DefinePolicy";
import ConfigurePolicy from "../../components/ConfigurePolicy";
import { Policy } from "../../../../../models/interfaces";
import { PolicyService } from "../../../../services";
import { BREADCRUMBS, DOCUMENTATION_URL, ROUTES, POLICY_DOCUMENTATION_URL } from "../../../../utils/constants";
import { getErrorMessage } from "../../../../utils/helpers";
import { CoreServicesContext } from "../../../../components/core_services";
import { DataSourceMenuContext, DataSourceMenuProperties } from "../../../../services/DataSourceMenuContext";
import { useUpdateUrlWithDataSourceProperties } from "../../../../components/MDSEnabledComponent";
import { getApplication, getNavigationUI, getUISettings } from "../../../../services/Services";
import { TopNavControlDescriptionData, TopNavControlLinkData } from "src/plugins/navigation/public";

interface CreatePolicyProps extends RouteComponentProps, DataSourceMenuProperties {
  isEdit: boolean;
  policyService: PolicyService;
}

interface CreatePolicyState {
  policyId: string;
  policyIdError: string;
  jsonString: string;
  policySeqNo: number | null;
  policyPrimaryTerm: number | null;
  submitError: string;
  isSubmitting: boolean;
  hasSubmitted: boolean;
  useNewUX: boolean;
}

export class CreatePolicy extends Component<CreatePolicyProps, CreatePolicyState> {
  static contextType = CoreServicesContext;
  _isMount: boolean;
  constructor(props: CreatePolicyProps) {
    super(props);
    const uiSettings = getUISettings();
    const useNewUx = uiSettings.get("home:useNewHomePage");

    this.state = {
      policySeqNo: null,
      policyPrimaryTerm: null,
      policyId: "",
      policyIdError: "",
      submitError: "",
      jsonString: "",
      isSubmitting: false,
      hasSubmitted: false,
      useNewUX: useNewUx,
    };

    this._isMount = true;
  }

  componentDidMount = async (): Promise<void> => {
    const breadCrumbs = this.state.useNewUX ? [BREADCRUMBS.INDEX_POLICIES_NEW] : [BREADCRUMBS.INDEX_MANAGEMENT, BREADCRUMBS.INDEX_POLICIES];
    this.context.chrome.setBreadcrumbs(breadCrumbs);
    if (this.props.isEdit) {
      const { id } = queryString.parse(this.props.location.search);
      if (typeof id === "string" && !!id) {
        const editBreadCrumbs = this.state.useNewUX
          ? [BREADCRUMBS.INDEX_POLICIES_NEW, { text: id }, BREADCRUMBS.EDIT_POLICY]
          : [BREADCRUMBS.INDEX_MANAGEMENT, BREADCRUMBS.INDEX_POLICIES, BREADCRUMBS.EDIT_POLICY, { text: id }];
        this.context.chrome.setBreadcrumbs(editBreadCrumbs);
        await this.getPolicyToEdit(id);
      } else {
        this.context.notifications.toasts.addDanger(`유효하지 않은 정책 ID입니다: ${id}`);
        this.props.history.push(ROUTES.INDEX_POLICIES);
      }
    } else {
      const createBreadCrumbs = this.state.useNewUX
        ? [BREADCRUMBS.INDEX_POLICIES_NEW, BREADCRUMBS.CREATE_POLICY_NEW]
        : [BREADCRUMBS.INDEX_MANAGEMENT, BREADCRUMBS.INDEX_POLICIES, BREADCRUMBS.CREATE_POLICY];
      this.context.chrome.setBreadcrumbs(createBreadCrumbs);
      this.setState({ jsonString: DEFAULT_POLICY });
    }
  };

  componentWillUnmount() {
    this._isMount = false;
  }

  componentDidUpdate(prevProps: CreatePolicyProps, prevState: Readonly<CreatePolicyState>) {
    if (prevProps.dataSourceId != this.props.dataSourceId) {
      // reset the state, if dataSourceId changes, i.e., clear state
      this.setState({
        policySeqNo: null,
        policyPrimaryTerm: null,
        policyIdError: "",
        submitError: "",
        isSubmitting: false,
        hasSubmitted: false,
      });
    }
  }

  getPolicyToEdit = async (policyId: string): Promise<void> => {
    try {
      const { policyService } = this.props;
      const response = await policyService.getPolicy(policyId);
      if (response.ok) {
        this.setState({
          policySeqNo: response.response.seqNo,
          policyPrimaryTerm: response.response.primaryTerm,
          policyId: response.response.id,
          jsonString: JSON.stringify({ policy: response.response.policy }, null, 4),
        });
      } else {
        this.context.notifications.toasts.addDanger(`정책을 불러올 수 없습니다: ${response.error}`);
        this.props.history.push(ROUTES.INDEX_POLICIES);
      }
    } catch (err) {
      this.context.notifications.toasts.addDanger(getErrorMessage(err, "정책을 불러올 수 없습니다"));
      this.props.history.push(ROUTES.INDEX_POLICIES);
    }
  };

  onCreate = async (policyId: string, policy: { policy: Policy }): Promise<void> => {
    const { policyService } = this.props;
    try {
      const response = await policyService.putPolicy(policy, policyId);
      if (response.ok) {
        this.context.notifications.toasts.addSuccess(`정책이 생성되었습니다: ${response.response._id}`);
        this.props.history.push(ROUTES.INDEX_POLICIES);
      } else {
        this.setState({ submitError: response.error });
      }
    } catch (err) {
      this.setState({ submitError: getErrorMessage(err, "정책을 생성하는 중 문제가 발생했습니다") });
    }
  };

  onUpdate = async (policyId: string, policy: { policy: Policy }): Promise<void> => {
    try {
      const { policyService } = this.props;
      const { policyPrimaryTerm, policySeqNo } = this.state;
      if (policySeqNo == null || policyPrimaryTerm == null) {
        this.context.notifications.toasts.addDanger("seqNo와 primaryTerm 없이는 정책을 업데이트할 수 없습니다");
        return;
      }
      const response = await policyService.putPolicy(policy, policyId, policySeqNo, policyPrimaryTerm);
      if (response.ok) {
        this.context.notifications.toasts.addSuccess(`정책이 업데이트되었습니다: ${response.response._id}`);
        this.props.history.push(ROUTES.INDEX_POLICIES);
      } else {
        this.setState({ submitError: response.error });
      }
    } catch (err) {
      this.setState({ submitError: getErrorMessage(err, "정책을 업데이트하는 중 문제가 발생했습니다") });
    }
  };

  onCancel = (): void => {
    if (this.props.isEdit) this.props.history.goBack();
    else this.props.history.push(ROUTES.INDEX_POLICIES);
  };

  onChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const { hasSubmitted } = this.state;
    const policyId = e.target.value;
    if (hasSubmitted) this.setState({ policyId, policyIdError: policyId ? "" : "필수 항목입니다" });
    else this.setState({ policyId });
  };

  onChangeJSON = (value: string): void => {
    this.setState({ jsonString: value });
  };

  onAutoIndent = (): void => {
    try {
      const parsedJSON = JSON.parse(this.state.jsonString);
      this.setState({ jsonString: JSON.stringify(parsedJSON, null, 4) });
    } catch (err) {
      // do nothing
    }
  };

  onSubmit = async (): Promise<void> => {
    const { isEdit } = this.props;
    const { policyId, jsonString } = this.state;
    this.setState({ submitError: "", isSubmitting: true, hasSubmitted: true });
    try {
      if (!policyId) {
        this.setState({ policyIdError: "필수 항목입니다" });
      } else {
        const policy = JSON.parse(jsonString);
        if (isEdit) await this.onUpdate(policyId, policy);
        else await this.onCreate(policyId, policy);
      }
    } catch (err) {
      this.context.notifications.toasts.addDanger("유효하지 않은 정책 JSON입니다");
      console.error(err);
    }

    if (!this._isMount) {
      return;
    }
    this.setState({ isSubmitting: false });
  };

  renderEditCallOut = (): React.ReactNode | null => {
    const { isEdit } = this.props;
    if (!isEdit) return null;
    const titleSize = this.state.useNewUX ? "s" : undefined;
    return (
      <Fragment>
        <EuiCallOut
          title="정책을 편집해도 이미 이 정책으로 관리되고 있는 인덱스에는 자동으로 적용되지 않습니다."
          iconType="questionInCircle"
          size={titleSize}
        >
          <p>
            이는 정책을 업데이트하더라도 이전 버전의 정책으로 실행 중인 인덱스에 영향을 주지 않도록 하기 위한 것입니다. 편집 내용을
            제출한 후 이러한 인덱스에도 적용하려면 "관리 대상 인덱스"의 "정책 변경" 기능을 사용하여 정책을 다시 적용하세요.{" "}
            <EuiLink href={DOCUMENTATION_URL} target="_blank" rel="noopener noreferrer">
              자세히 알아보기
            </EuiLink>
          </p>
        </EuiCallOut>
        <EuiSpacer />
      </Fragment>
    );
  };

  render() {
    const { isEdit } = this.props;
    const { policyId, policyIdError, jsonString, submitError, isSubmitting, useNewUX } = this.state;

    const { HeaderControl } = getNavigationUI();
    const { setAppDescriptionControls } = getApplication();

    const descriptionData = [
      {
        description: "정책을 사용하면 인덱스에 대한 관리 작업을 자동으로 수행할 수 있습니다.",
        links: {
          label: "자세히 알아보기",
          href: POLICY_DOCUMENTATION_URL,
          iconType: "popout",
          iconSide: "right",
          controlType: "link",
          target: "_blank",
          flush: "both",
        } as TopNavControlLinkData,
      } as TopNavControlDescriptionData,
    ];

    let hasJSONError = false;
    try {
      JSON.parse(jsonString);
    } catch (err) {
      hasJSONError = true;
    }

    const padding_style = useNewUX ? { padding: "0px 0px" } : { padding: "25px 50px" };
    return (
      <div style={padding_style}>
        {!useNewUX ? (
          <>
            <EuiTitle size="l">
              <h1>{isEdit ? "정책 편집" : "정책 생성"}</h1>
            </EuiTitle>
            <EuiSpacer />
          </>
        ) : (
          <>
            <HeaderControl setMountPoint={setAppDescriptionControls} controls={descriptionData} />
          </>
        )}
        {this.renderEditCallOut()}
        <ConfigurePolicy policyId={policyId} policyIdError={policyIdError} isEdit={isEdit} onChange={this.onChange} useNewUx={useNewUX} />
        <EuiSpacer />
        <DefinePolicy jsonString={jsonString} onChange={this.onChangeJSON} onAutoIndent={this.onAutoIndent} hasJSONError={hasJSONError} />
        <EuiSpacer />
        {submitError && (
          <EuiCallOut title="죄송합니다. 오류가 발생했습니다" color="danger" iconType="alert">
            <p>{submitError}</p>
          </EuiCallOut>
        )}
        <EuiSpacer />
        <EuiFlexGroup alignItems="center" justifyContent="flexEnd" gutterSize="s">
          <EuiFlexItem grow={false}>
            <EuiSmallButtonEmpty onClick={this.onCancel} data-test-subj="createPolicyCancelButton">
              취소
            </EuiSmallButtonEmpty>
          </EuiFlexItem>
          <EuiFlexItem grow={false}>
            <EuiSmallButton fill onClick={this.onSubmit} isLoading={isSubmitting} data-test-subj="createPolicyCreateButton">
              {isEdit ? "업데이트" : "생성"}
            </EuiSmallButton>
          </EuiFlexItem>
        </EuiFlexGroup>
      </div>
    );
  }
}

export default function (props: Omit<CreatePolicyProps, keyof DataSourceMenuProperties>) {
  const dataSourceMenuProperties = useContext(DataSourceMenuContext);
  useUpdateUrlWithDataSourceProperties();
  return <CreatePolicy {...props} {...dataSourceMenuProperties} />;
}
