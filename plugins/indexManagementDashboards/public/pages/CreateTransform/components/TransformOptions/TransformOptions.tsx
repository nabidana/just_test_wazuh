/*
 * Copyright OpenSearch Contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import {
  EuiSmallButtonIcon,
  EuiContextMenu,
  EuiContextMenuPanelDescriptor,
  EuiFlexGroup,
  EuiFlexItem,
  EuiPopover,
  EuiText,
  EuiToolTip,
} from "@elastic/eui";
import { isNumericMapping } from "../../utils/helpers";
import { GROUP_TYPES, TRANSFORM_AGG_TYPE, TransformAggItem, TransformGroupItem } from "../../../../../models/interfaces";
import HistogramPanel from "./Panels/HistogramPanel";
import PercentilePanel from "./Panels/PercentilePanel";
import ScriptedMetricsPanel from "./Panels/ScriptedMetricsPanel";
import DateHistogramPanel from "./Panels/DateHistogramPanel";
import { IntervalType } from "../../../../utils/constants";

interface TransformOptionsProps {
  name: string;
  type?: string;
  selectedGroupField: TransformGroupItem[];
  onGroupSelectionChange: (selectedFields: TransformGroupItem[], aggItem: TransformAggItem) => void;
  selectedAggregations: any;
  aggList: TransformAggItem[];
  onAggregationSelectionChange: (selectedFields: any, aggItem: TransformAggItem) => void;
}

export default function TransformOptions({
  name,
  type,
  selectedGroupField,
  onGroupSelectionChange,
  selectedAggregations,
  aggList,
  onAggregationSelectionChange,
}: TransformOptionsProps) {
  const isNumeric = isNumericMapping(type);
  const isDate = type == "date";
  const isText = type == "text";

  const [isPopoverOpen, setIsPopoverOpen] = useState(false);
  const [groupSelection] = useState<TransformGroupItem[]>(selectedGroupField);
  const [aggSelection] = useState(selectedAggregations);

  const closePopover = () => {
    setIsPopoverOpen(false);
  };

  const handleGroupSelectionChange = (newAggItem: any, type: TRANSFORM_AGG_TYPE, name: string): void => {
    groupSelection.push(newAggItem);
    onGroupSelectionChange(groupSelection, {
      type,
      name,
      item: newAggItem,
    });
    closePopover();
  };
  const handleAggSelectionChange = (aggItem: TransformAggItem): void => {
    onAggregationSelectionChange(aggSelection, aggItem);
    closePopover();
  };

  const numberPanels: EuiContextMenuPanelDescriptor[] = [
    {
      id: 0,
      title: "트랜스폼 옵션",
      items: [
        {
          name: "히스토그램으로 그룹화",
          panel: 1,
        },
        {
          name: "용어로 그룹화",
          onClick: () => {
            const targetField = `${name}_${GROUP_TYPES.terms}`;
            handleGroupSelectionChange(
              {
                terms: {
                  source_field: name,
                  target_field: targetField,
                },
              },
              TRANSFORM_AGG_TYPE.terms,
              targetField
            );
          },
        },
        {
          name: "합계로 집계",
          onClick: () => {
            const aggItem: TransformAggItem = {
              type: TRANSFORM_AGG_TYPE.sum,
              name: `sum_${name}`,
              item: { sum: { field: name } },
            };
            aggSelection[`sum_${name}`] = {
              sum: { field: name },
            };
            handleAggSelectionChange(aggItem);
          },
        },
        {
          name: "최대값으로 집계",
          onClick: () => {
            const aggItem: TransformAggItem = {
              type: TRANSFORM_AGG_TYPE.max,
              name: `max_${name}`,
              item: { max: { field: name } },
            };
            aggSelection[`max_${name}`] = {
              max: { field: name },
            };
            handleAggSelectionChange(aggItem);
          },
        },
        {
          name: "최소값으로 집계",
          onClick: () => {
            const aggItem: TransformAggItem = {
              type: TRANSFORM_AGG_TYPE.min,
              name: `min_${name}`,
              item: { min: { field: name } },
            };
            aggSelection[`min_${name}`] = {
              min: { field: name },
            };
            handleAggSelectionChange(aggItem);
          },
        },
        {
          name: "평균으로 집계",
          onClick: () => {
            const aggItem: TransformAggItem = {
              type: TRANSFORM_AGG_TYPE.avg,
              name: `avg_${name}`,
              item: { avg: { field: name } },
            };
            aggSelection[`avg_${name}`] = {
              avg: { field: name },
            };
            handleAggSelectionChange(aggItem);
          },
        },
        {
          name: "개수로 집계",
          onClick: () => {
            const aggItem: TransformAggItem = {
              type: TRANSFORM_AGG_TYPE.value_count,
              name: `count_${name}`,
              item: { value_count: { field: name } },
            };
            aggSelection[`count_${name}`] = {
              value_count: { field: name },
            };
            handleAggSelectionChange(aggItem);
          },
        },
        {
          name: "백분율로 집계",
          panel: 2,
        },
        {
          name: "스크립트 메트릭으로 집계",
          panel: 3,
        },
      ],
    },
    {
      id: 1,
      title: "뒤로",
      content: (
        <HistogramPanel name={name} handleGroupSelectionChange={handleGroupSelectionChange} aggList={aggList} closePopover={closePopover} />
      ),
    },
    {
      id: 2,
      title: "뒤로",
      content: (
        <PercentilePanel
          name={name}
          aggSelection={aggSelection}
          handleAggSelectionChange={handleAggSelectionChange}
          closePopover={closePopover}
        />
      ),
    },
    {
      id: 3,
      title: "뒤로",
      width: 0.4 * window.innerWidth,
      content: (
        <ScriptedMetricsPanel
          name={name}
          aggSelection={aggSelection}
          handleAggSelectionChange={handleAggSelectionChange}
          closePopover={closePopover}
        />
      ),
    },
  ];
  const datePanels: EuiContextMenuPanelDescriptor[] = [
    {
      id: 0,
      title: "트랜스폼 옵션",
      items: [
        {
          name: "날짜 히스토그램으로 그룹화",
          panel: 1,
        },
        {
          name: "용어로 그룹화",
          onClick: () => {
            const targetField = `${name}_${GROUP_TYPES.terms}`;
            handleGroupSelectionChange(
              {
                terms: {
                  source_field: name,
                  target_field: targetField,
                },
              },
              TRANSFORM_AGG_TYPE.terms,
              targetField
            );
          },
        },
        {
          name: "최대값으로 집계",
          onClick: () => {
            const aggItem: TransformAggItem = {
              type: TRANSFORM_AGG_TYPE.max,
              name: `max_${name}`,
              item: { max: { field: name } },
            };
            aggSelection[`max_${name}`] = {
              max: { field: name },
            };
            handleAggSelectionChange(aggItem);
          },
        },
        {
          name: "최소값으로 집계",
          onClick: () => {
            const aggItem: TransformAggItem = {
              type: TRANSFORM_AGG_TYPE.min,
              name: `min_${name}`,
              item: { min: { field: name } },
            };
            aggSelection[`min_${name}`] = {
              min: { field: name },
            };
            handleAggSelectionChange(aggItem);
          },
        },
        {
          name: "개수로 집계",
          onClick: () => {
            const aggItem: TransformAggItem = {
              type: TRANSFORM_AGG_TYPE.value_count,
              name: `count_${name}`,
              item: { value_count: { field: name } },
            };
            aggSelection[`count_${name}`] = {
              value_count: { field: name },
            };
            handleAggSelectionChange(aggItem);
          },
        },
      ],
    },
    {
      id: 1,
      title: "뒤로",
      items: [
        {
          name: "고정 간격",
          panel: 2,
        },
        {
          name: "캘린더 간격",
          panel: 3,
        },
      ],
    },
    {
      id: 2,
      title: "뒤로",
      width: 350,
      content: (
        <DateHistogramPanel
          name={name}
          handleGroupSelectionChange={handleGroupSelectionChange}
          aggList={aggList}
          closePopover={closePopover}
          intervalType={IntervalType.FIXED}
        />
      ),
    },
    {
      id: 3,
      title: "뒤로",
      width: 350,
      content: (
        <DateHistogramPanel
          name={name}
          handleGroupSelectionChange={handleGroupSelectionChange}
          aggList={aggList}
          closePopover={closePopover}
          intervalType={IntervalType.CALENDAR}
        />
      ),
    },
  ];
  const textPanels: EuiContextMenuPanelDescriptor[] = [
    {
      id: 0,
      title: "트랜스폼 옵션",
      items: [
        {
          name: "텍스트 필드에는 사용 가능한 옵션이 없습니다",
        },
      ],
    },
  ];
  const defaultPanels: EuiContextMenuPanelDescriptor[] = [
    {
      id: 0,
      title: "트랜스폼 옵션",
      items: [
        {
          name: "용어로 그룹화",
          onClick: () => {
            const targetField = `${name}_${GROUP_TYPES.terms}`;
            handleGroupSelectionChange(
              {
                terms: {
                  source_field: name,
                  target_field: targetField,
                },
              },
              TRANSFORM_AGG_TYPE.terms,
              targetField
            );
          },
        },
        {
          name: "개수로 집계",
          onClick: () => {
            const aggItem: TransformAggItem = {
              type: TRANSFORM_AGG_TYPE.value_count,
              name: `count_${name}`,
              item: { value_count: { field: name } },
            };
            aggSelection[`count_${name}`] = {
              value_count: { field: name },
            };
            handleAggSelectionChange(aggItem);
          },
        },
      ],
    },
  ];

  const button = (
    <EuiSmallButtonIcon
      iconType="plusInCircleFilled"
      onClick={() => setIsPopoverOpen(!isPopoverOpen)}
      data-test-subj={`${name}OptionsPopover`}
    />
  );

  return (
    <div>
      <EuiFlexGroup justifyContent="spaceBetween">
        <EuiFlexItem className="eui-textTruncate" grow={false}>
          <EuiToolTip content={name}>
            <EuiText size="s">
              <b>{name}</b>
            </EuiText>
          </EuiToolTip>
        </EuiFlexItem>
        <EuiFlexItem grow={false}>
          <EuiPopover
            id="contextMenuExample"
            button={button}
            isOpen={isPopoverOpen}
            closePopover={closePopover}
            panelPaddingSize="none"
            anchorPosition="rightCenter"
          >
            <EuiContextMenu
              size="s"
              initialPanelId={0}
              panels={isNumeric ? numberPanels : isText ? textPanels : isDate ? datePanels : defaultPanels}
            />
          </EuiPopover>
        </EuiFlexItem>
      </EuiFlexGroup>
    </div>
  );
}
