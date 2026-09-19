import { EuiCallOut, EuiLink, EuiSpacer } from "@elastic/eui";
import React from "react";
import { ROUTES } from "../../utils/constants";
import { ActionType, OperationType, OperationTypeMapTitle } from "../../pages/Notifications/constant";
import { getPermissionValue } from "./hooks";

export interface INotificationCalloutProps {
  hasDefaultNotification: boolean;
  operationType?: OperationType;
  actionType: ActionType;
  permissionForViewLRON: boolean;
  permissionForCreateLRON: boolean;
}

export default function NotificationCallout(props: INotificationCalloutProps) {
  const { hasDefaultNotification, operationType, actionType, permissionForCreateLRON, permissionForViewLRON } = props;
  const permissionValue = getPermissionValue(permissionForViewLRON, permissionForCreateLRON, hasDefaultNotification);

  if (permissionValue === "110") {
    return null;
  }

  let title: React.ReactChild = <></>;
  switch (permissionValue) {
    case "000":
      title = (
        <>
          관리자가 {OperationTypeMapTitle[operationType || actionType]} 작업에 대한 기본 알림 설정을 지정했을 수 있습니다.
          접근 권한을 요청하려면 관리자에게 문의하세요.
        </>
      );
      break;
    case "010":
      title = (
        <>
          관리자가 {OperationTypeMapTitle[operationType || actionType]} 작업에 대한 기본 알림 설정을 지정했을 수 있습니다.
          이 작업에 대한 추가 알림을 보낼 수 있습니다.
        </>
      );
      break;
    case "100":
      title = (
        <>
          관리자가 {OperationTypeMapTitle[operationType || actionType]} 작업에 대한 기본 알림 설정을 지정하지 않았습니다.
        </>
      );
      break;
    case "101":
      title = (
        <>
          관리자가 {OperationTypeMapTitle[operationType || actionType]} 작업에 대한 기본 알림 설정을 지정했습니다.
          접근 권한을 요청하려면 관리자에게 문의하세요.
        </>
      );
      break;
    case "111":
      title = (
        <>
          {OperationTypeMapTitle[operationType || actionType]} 작업에 대한 기본 알림 설정이 지정되어 있습니다. 기본
          설정은{" "}
          <EuiLink style={{ textDecoration: "underline" }} href={`#${ROUTES.NOTIFICATIONS}`} target="_blank" external={false}>
            알림 설정
          </EuiLink>
          에서 구성할 수 있습니다.
        </>
      );
      break;
  }
  return (
    <>
      <EuiSpacer size="s" />
      <EuiCallOut color="primary" iconType="iInCircle" data-test-subj="defaultNotificationCallout" title={title} />
    </>
  );
}
