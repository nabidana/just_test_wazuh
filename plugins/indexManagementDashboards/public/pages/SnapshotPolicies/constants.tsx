/*
 * Copyright OpenSearch Contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import { SortDirection } from "../../utils/constants";

export const DEFAULT_PAGE_SIZE_OPTIONS = [5, 10, 20, 50];

export const DEFAULT_QUERY_PARAMS = {
  from: 0,
  size: 20,
  sortOrder: SortDirection.DESC,
  search: "",
};

export const PROMPT_TEXT = {
  NO_POLICIES: "기존 정책이 없습니다.",
  LOADING: "정책을 불러오는 중...",
};
