/*
 * Copyright OpenSearch Contributors
 * SPDX-License-Identifier: Apache-2.0
 */

export const DATA_STREAM_REGEX = /^.ds-(.*)-\d{6}$/;

export const DEFAULT_SLICE = "1";

export const DEFAULT_QUERY = JSON.stringify({ query: { match_all: {} } }, null, 2);

export const REINDEX_ERROR_PROMPT = {
  DEST_REQUIRED: "대상은 필수입니다.",
  SOURCE_REQUIRED: "원본은 필수입니다.",
  HEALTH_RED: "상태가 빨간색(red)입니다.",
  SLICES_FORMAT_ERROR: "2 이상의 정수여야 합니다.",
};
