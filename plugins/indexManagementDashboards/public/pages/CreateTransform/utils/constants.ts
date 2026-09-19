/*
 * Copyright OpenSearch Contributors
 * SPDX-License-Identifier: Apache-2.0
 */

export const EMPTY_TRANSFORM = JSON.stringify({
  transform: {
    description: "",
    enabled: true,
    page_size: 1000,
    roles: [],
    schedule: {
      interval: {
        start_time: 234802,
        period: 1,
        unit: "MINUTES",
      },
    },
    source_index: "",
    target_index: "",
  },
});

export const DelayTimeunitOptions = [
  { value: "SECONDS", text: "초" },
  { value: "MINUTES", text: "분" },
  { value: "HOURS", text: "시간" },
  { value: "DAYS", text: "일" },
];

export const ScheduleIntervalTimeunitOptions = [
  { value: "Minutes", text: "분" },
  { value: "Hours", text: "시간" },
  { value: "Days", text: "일" },
];

export const AddFieldsColumns = [
  {
    field: "label",
    name: "필드 이름",
    sortable: true,
  },
  {
    field: "type",
    name: "필드 유형",
    sortable: true,
    render: (type: string | undefined) => (type == null || type == undefined ? "-" : type),
  },
];

export const DefaultSampleDataSize = 50;
