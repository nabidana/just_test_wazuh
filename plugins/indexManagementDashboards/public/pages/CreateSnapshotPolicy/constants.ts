/*
 * Copyright OpenSearch Contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import { SMPolicy } from "../../../models/interfaces";

/**
 * Every time Component init we want to give a different default object
 */
export const getDefaultSMPolicy = (): SMPolicy => ({
  name: "",
  description: "",
  enabled: true,
  creation: {
    schedule: {
      cron: {
        expression: "0 20 * * *",
        timezone: "UTC",
      },
    },
  },
  snapshot_config: {
    repository: "",
    // ignore_unavailable: false,
    // include_global_state: false,
    // partial: false,
    // date_expression: "yyyy-MM-dd-HH:mm",
  },
});

export const maxAgeUnitOptions = [
  { value: "d", text: "일" },
  { value: "h", text: "시간" },
];

export const DEFAULT_INDEX_OPTIONS = [{ label: "*" }];

export const ERROR_PROMPT = {
  NAME: "이름을 입력해야 합니다.",
  REPO: "리포지토리를 지정해야 합니다.",
  TIMEZONE: "시간대를 지정해야 합니다.",
};

export const DEFAULT_DATE_FORMAT = "yyyy-MM-dd'T'HH:mm:ss";
export const DEFAULT_DATE_FORMAT_TIMEZONE = "UTC";
