import React, { useState } from "react";
import { Criteria, EuiBasicTable, EuiFlyout, EuiFlyoutBody, EuiFlyoutHeader, EuiLink, EuiText } from "@elastic/eui";

export default function IndexPatternDisplay(props: { indexPatterns: string[]; templateName: string }) {
  const [hide, setHide] = useState(true);
  const [tableParams, setTableParams] = useState<Criteria<{ pattern: string }>>({});
  const { index, size } = tableParams.page || {
    index: 0,
    size: 10,
  };

  return (
    <div>
      <span>{props.indexPatterns.slice(0, 3).join(", ")}</span>
      {props.indexPatterns.length <= 3 ? null : (
        <EuiLink style={{ marginLeft: 8 }} data-test-subj={`${props.indexPatterns.length - 3} more`} onClick={() => setHide(!hide)}>
          {props.indexPatterns.length - 3}개 더보기
        </EuiLink>
      )}
      {hide ? null : (
        <EuiFlyout onClose={() => setHide(!hide)}>
          <EuiFlyoutHeader hasBorder>
            <EuiText size="m">
              <h2 title={`${props.templateName}의 인덱스 패턴 (${props.indexPatterns.length})`}>
                {props.templateName}의 인덱스 패턴 ({props.indexPatterns.length})
              </h2>
            </EuiText>
          </EuiFlyoutHeader>
          <EuiFlyoutBody>
            <EuiBasicTable
              data-test-subj="indexPatternsTable"
              columns={[
                {
                  name: "인덱스 패턴",
                  field: "pattern",
                },
              ]}
              items={props.indexPatterns.slice(index * size, (index + 1) * size).map((pattern) => ({ pattern }))}
              onChange={setTableParams}
              pagination={{
                pageIndex: index,
                pageSize: size,
                totalItemCount: props.indexPatterns.length,
              }}
            />
          </EuiFlyoutBody>
        </EuiFlyout>
      )}
    </div>
  );
}
