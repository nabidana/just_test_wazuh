export enum ActionType {
  REINDEX = "REINDEX",
  RESIZE = "RESIZE",
  FORCEMERGE = "FORCEMERGE",
  OPEN = "OPEN",
}

export enum OperationType {
  REINDEX = "REINDEX",
  FORCEMERGE = "FORCEMERGE",
  OPEN = "OPEN",
  SHRINK = "SHRINK",
  CLONE = "CLONE",
  SPLIT = "SPLIT",
}

export const ActionTypeMapTitle = {
  [ActionType.REINDEX]: "재색인",
  [ActionType.RESIZE]: "축소, 분할, 복제",
  [ActionType.FORCEMERGE]: "강제 병합",
  [ActionType.OPEN]: "열기",
};

export const ActionTypeMapDescription = {
  [ActionType.REINDEX]: "재색인 작업이 실패하거나 완료되면 알립니다.",
  [ActionType.RESIZE]: "축소, 분할 또는 복제 작업이 실패하거나 완료되면 알립니다.",
  [ActionType.FORCEMERGE]: "강제 병합 작업이 실패하거나 완료되면 알립니다.",
  [ActionType.OPEN]: "열기 작업이 실패하거나 완료되면 알립니다.",
};

export const OperationTypeMapTitle = {
  ...ActionTypeMapTitle,
  [OperationType.SHRINK]: "축소",
  [OperationType.SPLIT]: "분할",
  [OperationType.CLONE]: "복제",
};

export const ActionTypeMapName = {
  [ActionType.REINDEX]: "indices:data/write/reindex",
  [ActionType.RESIZE]: "indices:admin/resize",
  [ActionType.FORCEMERGE]: "indices:admin/forcemerge",
  [ActionType.OPEN]: "indices:admin/open",
} as const;

export const getKeyByValue = <T extends {}, Key extends keyof T>(obj: T, value: T[Key]) => {
  if (!obj) {
    return undefined;
  }
  return Object.keys(obj).find((key) => obj[key as Key] === value);
};

export enum FieldEnum {
  channels = "channels",
  failure = "failure",
  success = "success",
}

export const FieldMapLabel = {
  [FieldEnum.channels]: "알림 채널",
};

export const LABEL_FOR_CONDITION = "알림 조건";
export const VALIDATE_ERROR_FOR_CHANNELS = "하나 이상의 채널이 필요합니다.";
