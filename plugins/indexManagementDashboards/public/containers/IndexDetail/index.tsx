/*
 * Copyright OpenSearch Contributors
 * SPDX-License-Identifier: Apache-2.0
 */
import { EuiSpacer, EuiText, EuiTitle, EuiHorizontalRule, EuiPanel } from "@elastic/eui";
import React, { useContext, useEffect, useState } from "react";
import { CatIndex } from "../../../server/models/interfaces";
import { CoreServicesContext } from "../../components/core_services";
import { ServicesContext } from "../../services";
import DescriptionListHoz from "../../components/DescriptionListHoz";

export interface IIndexDetailProps {
  indices: string[];
  onGetIndicesDetail?: (args: CatIndex[]) => void;
  children?: React.ReactChild;
}

export default function IndexDetail(props: IIndexDetailProps) {
  const [loading, setLoading] = useState(false);
  const [items, setItems] = useState([] as CatIndex[]);
  const services = useContext(ServicesContext);
  const coreServices = useContext(CoreServicesContext);
  useEffect(() => {
    (async () => {
      setLoading(true);
      const result = await services?.commonService.apiCaller<CatIndex[]>({
        endpoint: "cat.indices",
        data: {
          index: props.indices,
          format: "json",
        },
      });
      let finalResponse: CatIndex[] = [];
      if (result?.ok) {
        finalResponse = result.response;
      } else {
        coreServices?.notifications.toasts.addDanger(result?.error || "");
      }
      setItems(finalResponse);
      props.onGetIndicesDetail && props.onGetIndicesDetail(finalResponse);
      setLoading(false);
    })();
  }, [props.indices.join(","), setLoading, setItems, coreServices]);
  return (
    <EuiPanel>
      <EuiTitle size="s">
        <h2>소스 인덱스 세부 정보</h2>
      </EuiTitle>
      <EuiHorizontalRule margin="xs" />
      <EuiSpacer size="s" />
      {items && items.length ? (
        <DescriptionListHoz
          compressed
          listItems={[
            {
              title: (
                <EuiText size="s">
                  <h4>인덱스 이름</h4>
                </EuiText>
              ),
              description: items[0].index,
            },
            {
              title: (
                <EuiText size="s">
                  <h4>기본 샤드</h4>
                </EuiText>
              ),
              description: items[0].pri,
            },
            {
              title: (
                <EuiText size="s">
                  <h4>복제 샤드</h4>
                </EuiText>
              ),
              description: items[0].rep,
            },
            {
              title: (
                <EuiText size="s">
                  <h4>전체 인덱스 크기</h4>
                </EuiText>
              ),
              description: items[0]["store.size"],
            },
          ]}
        />
      ) : null}
      <EuiSpacer />
      {loading ? null : props.children}
    </EuiPanel>
  );
}
