/*
 * Copyright OpenSearch Contributors
 * SPDX-License-Identifier: Apache-2.0
 */
import React from "react";
import { EuiHealth } from "@elastic/eui";
import { Link } from "react-router-dom";
import { ROUTES } from "../../../../utils/constants";
import { HEALTH_TO_COLOR } from "../../../Indices/utils/constants";
import { IFinalDetail } from "./interface";

export const OVERVIEW_DISPLAY_INFO: {
  label: string;
  value: string | React.FunctionComponent<{ detail: IFinalDetail }>;
}[] = [
  {
    label: "인덱스 이름",
    value: "index",
  },
  {
    label: "헬스",
    value: ({ detail }) => {
      const health = detail.health;
      const color = health ? HEALTH_TO_COLOR[health] : "subdued";
      const text = health || detail.status;
      return (
        <EuiHealth color={color} className="indices-health">
          {text}
        </EuiHealth>
      );
    },
  },
  {
    label: "상태",
    value: ({ detail }) => {
      return <span className="camel-first-letter">{detail.status}</span>;
    },
  },
  {
    label: "생성 날짜",
    value: ({ detail }) => (
      <span>
        {detail.settings?.index?.creation_date ? new Date(parseInt(detail.settings?.index?.creation_date)).toLocaleString() : "-"}
      </span>
    ),
  },
  {
    label: "전체 크기",
    value: ({ detail }) => <span>{detail["store.size"]}</span>,
  },
  {
    label: "프라이머리 크기",
    value: ({ detail }) => <span>{detail["pri.store.size"]}</span>,
  },
  {
    label: "전체 문서 수",
    value: ({ detail }) => <span>{detail["docs.count"]}</span>,
  },
  {
    label: "삭제된 문서 수",
    value: ({ detail }) => <span>{detail["docs.deleted"]}</span>,
  },
  {
    label: "프라이머리",
    value: "pri",
  },
  {
    label: "레플리카",
    value: "rep",
  },
  {
    label: "인덱스 블록",
    value: ({ detail }) => {
      const blocks = Object.entries(detail.settings?.index?.blocks || {}).filter(([key, value]) => value === "true");
      if (!blocks.length) {
        return <span>-</span>;
      }

      return (
        <ul style={{ listStyleType: "disc", listStylePosition: "inside" }}>
          {blocks.map(([key, value]) => (
            <li key={key}>{key}</li>
          ))}
        </ul>
      );
    },
  },
  {
    label: "정책 관리 대상",
    value: ({ detail }) => (
      <span>
        {detail.managedPolicy ? <Link to={`${ROUTES.POLICY_DETAILS}?id=${detail.managedPolicy}`}>{detail.managedPolicy}</Link> : "-"}
      </span>
    ),
  },
];
