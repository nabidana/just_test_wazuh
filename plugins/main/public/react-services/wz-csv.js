/*
 * Wazuh app - API request service
 * Copyright (C) 2015-2022 Wazuh, Inc.
 *
 * This program is free software; you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation; either version 2 of the License, or
 * (at your option) any later version.
 *
 * Find more information about this on the LICENSE file.
 */

import { WzRequest } from './wz-request';
import * as FileSaver from '../services/file-saver';

/**
 * Generates a CSV through the given data
 * @param {String} path
 * @param {Array} filters
 * @param {String} exportName
 */
const exportCsv = async (path, filters = [], exportName = 'data') => {
  try {
    const data = await WzRequest.csvReq(path, filters);
    // GS 인증용: Excel(Windows)에서 BOM 없는 UTF-8 CSV를 열면 한글이 깨지는 문제 수정.
    // UTF-8 BOM을 맨 앞에 붙여서 Excel이 UTF-8로 정확히 인식하도록 함(macOS Numbers는 원래도 정상 표시됨).
    const UTF8_BOM = '﻿';
    // GS 인증용: CSV 내보내기의 버전 컬럼 값에 노출되는 Wazuh 코어 버전 문자열(예: "Wazuh v4.14.6")을
    // 자체 제품 버전 고정 문자열로 치환 (표시값만 변경, 서버 데이터/기능에는 영향 없음)
    const csvBody = data.data
      ? data.data.replace(/Wazuh\s+v\d+(\.\d+){0,2}/gi, 'V1.0.0.0')
      : '';
    const output = csvBody ? [UTF8_BOM + csvBody] : [];
    const blob = new Blob(output, { type: 'text/csv;charset=utf-8;' });
    FileSaver.saveAs(blob, `${exportName}.csv`);
  } catch (error) {
    return Promise.reject(error);
  }
};

export default exportCsv;
