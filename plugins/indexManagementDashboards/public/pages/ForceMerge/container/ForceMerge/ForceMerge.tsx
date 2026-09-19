/*
 * Copyright OpenSearch Contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import {
  EuiSmallButton,
  EuiSmallButtonEmpty,
  EuiSmallButtonIcon,
  EuiCallOut,
  EuiFlexGroup,
  EuiFlexItem,
  EuiSpacer,
  EuiTitle,
  EuiText,
  EuiHorizontalRule,
  EuiPanel,
} from "@elastic/eui";
import React, { useContext, useEffect, useRef, useState } from "react";
import { RouteComponentProps } from "react-router-dom";
import { CoreStart } from "opensearch-dashboards/public";
import { CoreServicesContext } from "../../../../components/core_services";
import CustomFormRow from "../../../../components/CustomFormRow";
import { ContentPanel } from "../../../../components/ContentPanel";
import ForceMergeAdvancedOptions from "../../components/ForceMergeAdvancedOptions";
import IndexSelect from "../../components/IndexSelect";
import { checkNotReadOnlyIndexes, getIndexOptions } from "../../utils/helper";
import { BrowserServices, ForceMergeJobMetaData } from "../../../../models/interfaces";
import { ServicesContext } from "../../../../services";
import useField from "../../../../lib/field";
import { BREADCRUMBS, ROUTES } from "../../../../utils/constants";
import { IndexItem } from "../../../../../models/interfaces";
import { jobSchedulerInstance } from "../../../../context/JobSchedulerContext";
import { ListenType } from "../../../../lib/JobScheduler";
import NotificationConfig, { NotificationConfigRef } from "../../../../containers/NotificationConfig";
import { ActionType } from "../../../Notifications/constant";
import { getClusterInfo } from "../../../../utils/helpers";
import { useUpdateUrlWithDataSourceProperties } from "../../../../components/MDSEnabledComponent";
import { getApplication, getNavigationUI, getUISettings } from "../../../../services/Services";

interface ForceMergeProps extends RouteComponentProps<{ indexes?: string }> {
  services: BrowserServices;
}

export default function ForceMergeWrapper(props: Omit<ForceMergeProps, "services">) {
  const services = useContext(ServicesContext) as BrowserServices;
  const context = useContext(CoreServicesContext) as CoreStart;
  const [advancedSettingsOpen, setAdvancedSettingsOpen] = useState(false);
  const [executing, setExecuting] = useState(false);
  const uiSettings = getUISettings();
  const useNewUx = uiSettings.get("home:useNewHomePage");
  const [useNewUX, setUseNewUX] = useState(useNewUx);
  const [notReadOnlyIndexes, setNotReadOnlyIndexes] = useState<
    [
      string,
      {
        settings: IndexItem["settings"];
      }
    ][]
  >([]);
  const { indexes = "" } = props.match.params;
  const destroyedRef = useRef(false);
  const notificationRef = useRef<NotificationConfigRef | null>(null);
  const field = useField({
    values: {
      flush: true,
      indexes: indexes ? indexes.split(",") : [],
    },
  });
  const getIndexOptionsCachedRef = useRef((searchValue: string) =>
    getIndexOptions({
      services,
      searchValue,
      context,
    })
  );

  useUpdateUrlWithDataSourceProperties();
  const onCancel = () => {
    props.history.push(ROUTES.INDICES);
  };
  const onClickAction = async () => {
    const { errors, values } = await field.validatePromise();
    if (advancedSettingsOpen) {
      const notificationResult = await notificationRef.current?.validatePromise();
      if (notificationResult?.errors) {
        return;
      }
    }
    if (errors) {
      const errorsKey = Object.keys(errors);
      if (errorsKey.includes("max_num_segments")) {
        setAdvancedSettingsOpen(true);
      }
      return;
    }
    setExecuting(true);
    const { indexes, ...others } = values;
    const result = await services.commonService.apiCaller<{
      task: string;
    }>({
      endpoint: "transport.request",
      data: {
        path: `/${indexes.join(",")}/_forcemerge?wait_for_completion=false`,
        method: "POST",
        body: others,
      },
    });
    if (result && result.ok) {
      const toast = `${indexes.join(", ")} 강제 병합을 시작했습니다.`;
      const toastInstance = context.notifications.toasts.addSuccess(toast, {
        toastLifeTimeMs: 1000 * 60 * 60 * 24 * 5,
      });
      if (advancedSettingsOpen) {
        notificationRef.current?.associateWithTask({
          taskId: result.response?.task,
        });
      }
      const clusterInfo = await getClusterInfo({
        commonService: services.commonService,
      });
      await jobSchedulerInstance.addJob({
        type: ListenType.FORCE_MERGE,
        extras: {
          clusterInfo,
          toastId: toastInstance.id,
          sourceIndex: indexes,
          taskId: result.response?.task,
        },
        interval: 30000,
      } as ForceMergeJobMetaData);
      props.history.push(ROUTES.INDICES);
    } else {
      context.notifications.toasts.addDanger(result.error);
    }
    if (destroyedRef.current) {
      return;
    }
    setExecuting(false);
  };

  const advanceTitle = (
    <EuiFlexGroup gutterSize="none" justifyContent="flexStart" alignItems="center">
      <EuiFlexItem grow={false}>
        <EuiSmallButtonIcon
          iconType={advancedSettingsOpen ? "arrowDown" : "arrowRight"}
          color="text"
          data-test-subj="advanceOptionToggle"
          onClick={() => {
            setAdvancedSettingsOpen(!advancedSettingsOpen);
          }}
          aria-label="드롭다운 아이콘"
        />
      </EuiFlexItem>
      <EuiFlexItem grow={false}>
        <EuiTitle size="s">
          <h2>고급 설정</h2>
        </EuiTitle>
      </EuiFlexItem>
    </EuiFlexGroup>
  );

  useEffect(() => {
    let breadCrumbs = useNewUX
      ? [BREADCRUMBS.INDICES, { ...BREADCRUMBS.FORCE_MERGE, href: `#${props.location.pathname}` }]
      : [BREADCRUMBS.INDEX_MANAGEMENT, BREADCRUMBS.INDICES, { ...BREADCRUMBS.FORCE_MERGE, href: `#${props.location.pathname}` }];
    context.chrome.setBreadcrumbs(breadCrumbs);
    return () => {
      destroyedRef.current = true;
    };
  }, []);

  useEffect(() => {
    checkNotReadOnlyIndexes({
      services,
      indexes: field.getValue("indexes"),
    }).then((result) => {
      setNotReadOnlyIndexes(result);
    });
  }, [field.getValue("indexes")]);

  const { HeaderControl } = getNavigationUI();
  const { setAppDescriptionControls } = getApplication();

  const descriptionData = [
    {
      renderComponent: (
        <EuiText size="s" color="subdued">
          인덱스 또는 데이터 스트림의 백킹 인덱스에 있는 샤드를 수동으로 병합합니다. 강제 병합을 사용하여 인덱스 내의 삭제된 문서를
          정리할 수도 있습니다.
        </EuiText>
      ),
    },
  ];

  const padding_style = useNewUX ? { padding: "0px 0px" } : { padding: "0px 50px" };

  return (
    <div style={padding_style}>
      {useNewUX && <HeaderControl setMountPoint={setAppDescriptionControls} controls={descriptionData} />}
      {!useNewUX && (
        <>
          <EuiText size="s">
            <h1>강제 병합</h1>
          </EuiText>
          <CustomFormRow
            fullWidth
            helpText="인덱스 또는 데이터 스트림의 백킹 인덱스에 있는 샤드를 수동으로 병합합니다. 강제 병합을 사용하여 인덱스 내의 삭제된 문서를 정리할 수도 있습니다."
          >
            <></>
          </CustomFormRow>
          <EuiSpacer />
        </>
      )}

      <EuiPanel>
        <EuiFlexGroup gutterSize="xs" alignItems="center">
          <EuiTitle size="s">
            <h2>원본 인덱스 구성</h2>
          </EuiTitle>
        </EuiFlexGroup>
        <EuiHorizontalRule margin={"xs"} />
        <CustomFormRow
          label={
            <EuiText size="s">
              <h3>원본 인덱스 또는 데이터 스트림 선택</h3>
            </EuiText>
          }
          isInvalid={!!field.getError("indexes")}
          error={field.getError("indexes")}
          fullWidth
          helpText="강제 병합할 인덱스 또는 데이터 스트림을 하나 이상 선택합니다."
        >
          <IndexSelect
            data-test-subj="sourceSelector"
            placeholder="인덱스 또는 데이터 스트림 선택"
            getIndexOptions={getIndexOptionsCachedRef.current}
            {...field.registerField({
              name: "indexes",
              rules: [
                {
                  validator(rule, value) {
                    if (!value || !value.length) {
                      return Promise.reject("인덱스 또는 데이터 스트림은 필수입니다.");
                    } else {
                      return Promise.resolve("");
                    }
                  },
                },
              ],
            })}
            singleSelect={false}
          />
        </CustomFormRow>

        {notReadOnlyIndexes.length ? (
          <>
            <EuiSpacer />
            <EuiCallOut color="warning" title="읽기 전용 인덱스에서 강제 병합하는 것을 권장합니다">
              {notReadOnlyIndexes.map((item) => item[0]).join(", ")}은(는) 읽기 전용 인덱스가 아닙니다. 큰 세그먼트가 생성되는 것을
              방지하기 위해 읽기 전용 인덱스에서만 강제 병합을 수행하는 것을 권장합니다.
            </EuiCallOut>
          </>
        ) : null}
      </EuiPanel>

      <EuiSpacer />

      <ContentPanel title={advanceTitle} noExtraPadding titleSize="s">
        {advancedSettingsOpen && (
          <>
            <EuiSpacer size="s" />
            <ForceMergeAdvancedOptions field={field} />
            <NotificationConfig ref={notificationRef} actionType={ActionType.FORCEMERGE} />
            <EuiSpacer size="s" />
          </>
        )}
      </ContentPanel>

      <EuiSpacer />

      <EuiFlexGroup alignItems="center" justifyContent="flexEnd" gutterSize="s">
        <EuiFlexItem grow={false}>
          <EuiSmallButtonEmpty onClick={onCancel} data-test-subj="reindexCancelButton">
            취소
          </EuiSmallButtonEmpty>
        </EuiFlexItem>
        <EuiFlexItem grow={false}>
          <EuiSmallButton fill onClick={onClickAction} isLoading={executing} data-test-subj="forceMergeConfirmButton">
            강제 병합
          </EuiSmallButton>
        </EuiFlexItem>
      </EuiFlexGroup>
    </div>
  );
}
