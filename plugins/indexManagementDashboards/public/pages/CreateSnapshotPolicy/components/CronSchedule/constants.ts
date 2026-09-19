/*
 * Copyright OpenSearch Contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import moment from "moment-timezone";

export const CRON_SCHEDULE_FREQUENCY_TYPE = [
  { value: "hourly", text: "매시간" },
  { value: "daily", text: "매일" },
  { value: "weekly", text: "매주" },
  { value: "monthly", text: "매월" },
  { value: "custom", text: "사용자 지정 (Cron 표현식)" },
];

export const TIMEZONES = moment.tz.names().map((tz) => ({ label: tz, text: tz }));

export const WEEK_DAYS = ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"];
