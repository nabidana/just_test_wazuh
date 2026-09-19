/*
 * Copyright OpenSearch Contributors
 * SPDX-License-Identifier: Apache-2.0
 */

export const DEFAULT_POLICY = JSON.stringify(
  {
    policy: {
      description: "핫 상태와 콜드 상태 간에 복제본 개수를 변경하는 간단한 기본 정책입니다.",
      default_state: "example_hot_state",
      states: [
        {
          name: "example_hot_state",
          actions: [{ replica_count: { number_of_replicas: 5 } }],
          transitions: [{ state_name: "example_cold_state", conditions: { min_index_age: "30d" } }],
        },
        {
          name: "example_cold_state",
          actions: [{ replica_count: { number_of_replicas: 2 } }],
          transitions: [],
        },
      ],
      ism_template: {
        index_patterns: ["example-index-*"],
      },
    },
  },
  null,
  4
);
