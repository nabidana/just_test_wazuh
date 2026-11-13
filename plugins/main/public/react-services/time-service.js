/*
 * Wazuh app - Time and date functions
 * Copyright (C) 2015-2022 Wazuh, Inc.
 *
 * This program is free software; you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation; either version 2 of the License, or
 * (at your option) any later version.
 *
 * Find more information about this on the LICENSE file.
 */
import moment from 'moment-timezone';
import { getUiSettings } from '../kibana-services';

export const formatUIDate = date => {
  if (typeof date !== 'string') {
    return '-';
  }
  const dateFormat = getUiSettings().get('dateFormat');
  const timezone = getTimeZone();
  const momentDate = moment(date);
  momentDate.tz(timezone);
  return momentDate.format(dateFormat);
};
const getTimeZone = () => {
  const dateFormatTZ = getUiSettings().get('dateFormat:tz');
  const detectedTimezone = moment.tz.guess();
  return dateFormatTZ === 'Browser' ? detectedTimezone : dateFormatTZ;
};

// GS 인증용: Wazuh 매니저 API(GET /manager/logs, /cluster/<node>/logs)는 ossec.log의
// 로컬(매니저 서버) 시각 문자열을 실제 UTC로 변환하지 않고 끝에 "Z"만 붙여 반환하는
// 매니저 프레임워크 자체 이슈가 있다(진짜 UTC 값이 아님). 이 값에 formatUIDate처럼
// UTC → 표시 타임존 변환을 적용하면 서버 타임존 오프셋만큼(KST 기준 +9시간) 실제보다
// 앞선 시각으로 잘못 표시된다. Zero 서버 관리 > 로그 화면 전용으로, 타임존 변환 없이
// 문자열 끝의 거짓 "Z"만 제거하고 매니저가 기록한 시각 그대로를 포맷해서 보여준다.
export const formatManagerLogDate = date => {
  if (typeof date !== 'string') {
    return '-';
  }
  const dateFormat = getUiSettings().get('dateFormat');
  return moment(date.replace(/Z$/, '')).format(dateFormat);
};
