/*
 * Copyright OpenSearch Contributors
 * SPDX-License-Identifier: Apache-2.0
 */
import React, { useContext, useEffect, useState } from "react";
import {
  EuiBasicTable,
  EuiHealth,
  EuiLink,
  EuiSpacer,
  EuiText,
  EuiTitle,
  EuiFlexGroup,
  EuiHorizontalRule,
  EuiPanel,
  EuiFlexItem,
} from "@elastic/eui";
import { ServicesContext } from "../../../../services";
import { BrowserServices } from "../../../../models/interfaces";
import { ManagedCatIndex } from "../../../../../server/models/interfaces";
import { DataStreamInEdit, SubDetailProps } from "../../interface";
import { ROUTES } from "../../../../utils/constants";
import { ContentPanel } from "../../../../components/ContentPanel";
import CustomFormRow from "../../../../components/CustomFormRow";

const renderNumber = (value: string) => {
  return value || "-";
};

export const HEALTH_TO_COLOR: {
  [health: string]: string;
  green: string;
  yellow: string;
  red: string;
} = {
  green: "success",
  yellow: "warning",
  red: "danger",
};

export default function BackingIndices(props: SubDetailProps) {
  const { field } = props;
  const values: DataStreamInEdit = field.getValues();
  const services = useContext(ServicesContext) as BrowserServices;
  const [indexes, setIndexes] = useState<ManagedCatIndex[]>([]);
  useEffect(() => {
    if (values.name) {
      services.indexService
        .getIndices({
          from: 0,
          size: 999,
          search: values.name,
          terms: values.name,
          sortField: "index",
          sortDirection: "desc",
          showDataStreams: true,
        })
        .then((result) => {
          if (result && result.ok) {
            setIndexes(result.response.indices.filter((item) => item.data_stream === values.name));
          }
        });
    }
  }, [values.name]);
  const writingIndex = (values.indices || [])[(values.indices?.length || 0) - 1]?.index_name;
  return (
    <EuiPanel>
      <EuiFlexGroup gutterSize="xs" alignItems="center">
        <EuiTitle size="s">
          <h2>백업 인덱스</h2>
        </EuiTitle>
      </EuiFlexGroup>
      <EuiText color="subdued" size="xs">
        <p>
          데이터 스트림은 백업 인덱스로 구성됩니다. 검색 요청은 모든 백업 인덱스로 라우팅되며, 색인 요청은 쓰기 백업 인덱스로 라우팅됩니다.
        </p>
      </EuiText>
      <EuiHorizontalRule margin={"xs"} />
      <EuiBasicTable
        pagination={undefined}
        items={indexes}
        columns={[
          {
            field: "index",
            name: "인덱스",
            sortable: true,
            truncateText: false,
            textOnly: true,
            width: "250px",
            render: (index: string) => {
              return <EuiLink href={`#${ROUTES.INDEX_DETAIL}/${index}`}>{index}</EuiLink>;
            },
          },
          {
            field: "health",
            name: "상태",
            sortable: true,
            truncateText: true,
            textOnly: true,
            render: (health: string, item: ManagedCatIndex) => {
              const color = health ? HEALTH_TO_COLOR[health] : "subdued";
              const text = health || item.status;
              return (
                <EuiHealth color={color} className="indices-health">
                  {text}
                </EuiHealth>
              );
            },
          },
          {
            field: "managed",
            name: "정책으로 관리",
            sortable: true,
            truncateText: true,
            textOnly: true,
            render: renderNumber,
          },
          {
            field: "status",
            name: "상태",
            sortable: true,
            truncateText: true,
            textOnly: true,
            render: (status: string, item: ManagedCatIndex) => {
              return <span className="camel-first-letter">{item.extraStatus || status}</span>;
            },
          },
          {
            field: "rep",
            name: "쓰기 인덱스",
            textOnly: true,
            render: (value: string, record: ManagedCatIndex) => {
              return record.index === writingIndex ? "예" : "아니요";
            },
          },
          {
            field: "store.size",
            name: "총 크기",
            sortable: true,
            truncateText: true,
            textOnly: true,
            dataType: "number",
            render: renderNumber,
          },
          {
            field: "pri.store.size",
            name: "프라이머리 크기",
            sortable: true,
            truncateText: true,
            textOnly: true,
            dataType: "number",
            render: renderNumber,
          },
          {
            field: "docs.count",
            name: "총 문서 수",
            sortable: true,
            truncateText: true,
            textOnly: true,
            dataType: "number",
            render: (count: string) => <span title={count}>{count || "-"}</span>,
          },
          {
            field: "docs.deleted",
            name: "삭제된 문서 수",
            sortable: true,
            truncateText: true,
            textOnly: true,
            dataType: "number",
            render: (deleted: string) => <span title={deleted}>{deleted || "-"}</span>,
          },
          {
            field: "pri",
            name: "프라이머리",
            sortable: true,
            truncateText: true,
            textOnly: true,
            dataType: "number",
          },
          {
            field: "rep",
            name: "복제본",
            sortable: true,
            truncateText: true,
            textOnly: true,
            dataType: "number",
          },
        ]}
      />
    </EuiPanel>
  );
}
