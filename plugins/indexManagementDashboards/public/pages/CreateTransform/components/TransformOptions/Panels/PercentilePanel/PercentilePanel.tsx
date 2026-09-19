/*
 * Copyright OpenSearch Contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { EuiSmallButton, EuiCompressedComboBox, EuiFlexGroup, EuiFlexItem, EuiCompressedFormRow, EuiPanel, EuiSpacer } from "@elastic/eui";
import { TRANSFORM_AGG_TYPE, TransformAggItem } from "../../../../../../../models/interfaces";

interface PercentilePanelProps {
  name: string;
  aggSelection: any;
  handleAggSelectionChange: (aggItem: TransformAggItem) => void;
  closePopover: () => void;
}

export default function PercentilePanel({ name, aggSelection, handleAggSelectionChange, closePopover }: PercentilePanelProps) {
  const [percents, setPercents] = useState<{ label: string }[]>([]);
  const [isInvalid, setInvalid] = useState(false);

  const onChangePercents = (selectedPercent: { label: string }[]): void => {
    setPercents(selectedPercent);
    setInvalid(false);
  };

  const isValidPercent = (value: string) => {
    // Only numbers between 0-100 including decimals. No spaces, numbers, or special characters.
    const numericValue = parseFloat(value);
    return numericValue >= 0.0 && numericValue <= 100.0;
  };

  const onCreateOption = (searchValue: string) => {
    if (!isValidPercent(searchValue)) {
      // Return false to explicitly reject the user's input.
      return false;
    }

    const newOption = {
      label: searchValue,
    };

    // Select the option.
    setPercents([...percents, newOption]);
  };

  const onSearchChange = (searchValue: string) => {
    if (!searchValue) {
      setInvalid(false);

      return;
    }

    setInvalid(!isValidPercent(searchValue));
  };

  return (
    <EuiPanel>
      <EuiFlexGroup gutterSize={"none"}>
        <EuiFlexItem grow={false} style={{ width: 230 }}>
          <EuiCompressedFormRow
            fullWidth={true}
            label="백분율"
            helpText="0-100 사이의 숫자만 허용됩니다."
            isInvalid={isInvalid}
            error={isInvalid ? "잘못된 입력입니다" : undefined}
          >
            <EuiCompressedComboBox
              fullWidth={true}
              noSuggestions
              selectedOptions={percents}
              onChange={onChangePercents}
              onCreateOption={onCreateOption}
              isInvalid={isInvalid}
              onSearchChange={onSearchChange}
            />
          </EuiCompressedFormRow>
          <EuiSpacer size="m" />
        </EuiFlexItem>
        <EuiFlexItem grow={false}></EuiFlexItem>
      </EuiFlexGroup>
      <EuiFlexGroup justifyContent={"flexEnd"} gutterSize={"m"}>
        <EuiFlexItem grow={false}>
          <EuiSmallButton fullWidth={false} onClick={() => closePopover()} style={{ minWidth: 84 }}>
            취소
          </EuiSmallButton>
        </EuiFlexItem>
        <EuiFlexItem grow={false}>
          <EuiSmallButton
            fill
            fullWidth={false}
            onClick={() => {
              const aggItem: TransformAggItem = {
                type: TRANSFORM_AGG_TYPE.percentiles,
                name: `percentiles_${name}`,
                item: {
                  percentiles: {
                    field: name,
                    percents: percents.map((value) => parseFloat(value.label)),
                  },
                },
              };
              aggSelection[`percentiles_${name}`] = {
                percentiles: {
                  field: name,
                  percents: percents.map((value) => parseFloat(value.label)),
                },
              };
              handleAggSelectionChange(aggItem);
            }}
            style={{ minWidth: 55 }}
          >
            확인
          </EuiSmallButton>
        </EuiFlexItem>
      </EuiFlexGroup>
    </EuiPanel>
  );
}
