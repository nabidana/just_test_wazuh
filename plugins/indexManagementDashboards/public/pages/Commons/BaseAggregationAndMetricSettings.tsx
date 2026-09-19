/*
 * Copyright OpenSearch Contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { Fragment } from "react";

import { EuiFlexItem, EuiText, EuiBasicTable, EuiTableFieldDataColumnType, EuiPanel, EuiFlexGroup, EuiIcon } from "@elastic/eui";

import { DimensionItem, MetricItem } from "../../../models/interfaces";

export const AGGREGATION_AND_METRIC_SETTINGS = "집계 및 메트릭 설정";

export interface BaseAggregationAndMetricsState {
  from: number;
  size: number;
  sortField: string;
  sortDirection: string;
  dimensionFrom: number;
  dimensionSize: number;
  dimensionSortField: string;
  dimensionSortDirection: string;
}

export const BaseAggregationColumns: Readonly<EuiTableFieldDataColumnType<DimensionItem>>[] = [
  {
    field: "sequence",
    name: "순서",
    sortable: true,
    align: "left",
    dataType: "number",
  },
  {
    field: "field.label",
    name: "필드 이름",
    align: "left",
  },
  {
    field: "aggregationMethod",
    name: "집계 방법",
    align: "left",
  },
  {
    field: "interval",
    name: "간격",
    dataType: "number",
    align: "left",
    render: (interval: null | number) => {
      if (interval == null) return "-";
      else return `${interval}`;
    },
  },
];

export const BaseMetricsColumns: Readonly<EuiTableFieldDataColumnType<MetricItem>>[] = [
  {
    field: "source_field",
    name: "필드 이름",
  },
  {
    field: "min",
    name: "최소값",
    align: "center",
    render: (min: boolean) => min && <EuiIcon type="check" />,
  },
  {
    field: "max",
    name: "최대값",
    align: "center",
    render: (max: boolean) => max && <EuiIcon type="check" />,
  },
  {
    field: "sum",
    name: "합계",
    align: "center",
    render: (sum: boolean) => sum && <EuiIcon type="check" />,
  },
  {
    field: "avg",
    name: "평균",
    align: "center",
    render: (avg: boolean) => avg && <EuiIcon type="check" />,
  },
  {
    field: "value_count",
    name: "값 개수",
    align: "center",
    render: (value_count: boolean) => value_count && <EuiIcon type="check" />,
  },
];

export function sequenceTableComponents(selectedDimensionField, items, columns, pagination, sorting, onChange) {
  if (selectedDimensionField.length == 0) {
    return (
      <EuiText size="xs">
        <dd>집계에 추가된 필드가 없습니다</dd>
      </EuiText>
    );
  }

  return (
    <Fragment>
      <EuiPanel>
        <EuiBasicTable
          items={items}
          rowHeader="sequence"
          columns={columns}
          tableLayout="auto"
          noItemsMessage="집계에 추가된 필드가 없습니다"
          pagination={pagination}
          sorting={sorting}
          onChange={onChange}
        />
      </EuiPanel>
    </Fragment>
  );
}

export function additionalMetricsComponent(selectedMetrics) {
  return (
    <EuiFlexGroup gutterSize="xs">
      <EuiFlexItem grow={false}>
        <EuiText size="s">
          <h3>추가 메트릭</h3>
        </EuiText>
      </EuiFlexItem>
      <EuiFlexItem grow={false}>
        <EuiText color="subdued" textAlign="left" size="s">
          <h3>{`(${selectedMetrics.length})`}</h3>
        </EuiText>
      </EuiFlexItem>
    </EuiFlexGroup>
  );
}

export function sourceFieldComponents(selectedMetrics, items, columns, pagination, sorting, onChange) {
  if (selectedMetrics.length == 0) {
    return (
      <EuiText size="xs">
        <dd>메트릭에 추가된 필드가 없습니다</dd>
      </EuiText>
    );
  }

  return (
    <Fragment>
      <EuiPanel>
        <EuiBasicTable
          items={items}
          rowHeader="source_field"
          columns={columns}
          tableLayout="auto"
          pagination={pagination}
          sorting={sorting}
          onChange={onChange}
          noItemsMessage="메트릭에 추가된 필드가 없습니다"
        />
      </EuiPanel>
    </Fragment>
  );
}
