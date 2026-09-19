/*
 * Copyright OpenSearch Contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import { FieldItem } from "../../../../models/interfaces";
import { COMPARISON_OPERATORS } from "./constants";
import moment from "moment";

const timeunits = {
  isMilliseconds: function (stringToCheck: string): boolean {
    return stringToCheck.trim().toLowerCase() == "milliseconds" || stringToCheck.trim().toLowerCase() == "ms";
  },
  isSeconds: function (stringToCheck: string): boolean {
    return stringToCheck.trim().toLowerCase() == "seconds" || stringToCheck.trim().toLowerCase() == "s";
  },
  isMinutes: function (stringToCheck: string): boolean {
    return stringToCheck.trim().toLowerCase() == "minutes" || stringToCheck.trim() == "m";
  },
  isHours: function (stringToCheck: string): boolean {
    return stringToCheck.trim().toLowerCase() == "hours" || stringToCheck.trim().toLowerCase() == "h";
  },
  isDays: function (stringToCheck: string): boolean {
    return stringToCheck.trim().toLowerCase() == "days" || stringToCheck.trim().toLowerCase() == "d";
  },
  isWeeks: function (stringToCheck: string): boolean {
    return stringToCheck.trim().toLowerCase() == "weeks" || stringToCheck.trim().toLowerCase() == "w";
  },
  isMonths: function (stringToCheck: string): boolean {
    return stringToCheck.trim().toLowerCase() == "months" || stringToCheck.trim() == "M";
  },
  isQuarters: function (stringToCheck: string): boolean {
    return stringToCheck.trim().toLowerCase() == "quarters" || stringToCheck.trim().toLowerCase() == "q";
  },
  isYears: function (stringToCheck: string): boolean {
    return stringToCheck.trim().toLowerCase() == "years" || stringToCheck.trim().toLowerCase() == "y";
  },
} as const;

export const buildIntervalScheduleText = (continuous: boolean, interval: number, intervalTimeUnit: string): string => {
  let scheduleText = "";
  if (continuous) {
    scheduleText += "연속형, " + interval + " " + parseTimeunit(intervalTimeUnit) + "마다";
  } else {
    scheduleText += "비연속형";
  }
  return scheduleText;
};

export const buildCronScheduleText = (continuous: boolean, cronExpression: string): string => {
  let scheduleText = "";
  if (continuous) {
    scheduleText += "연속형, cron 표현식으로 정의: " + cronExpression;
  } else {
    scheduleText += "비연속형";
  }
  return scheduleText;
};

export const parseTimeunit = (timeunit: string): string => {
  if (timeunits.isMilliseconds(timeunit)) return "밀리초";
  else if (timeunits.isSeconds(timeunit)) return "초";
  else if (timeunits.isMinutes(timeunit)) return "분";
  else if (timeunits.isHours(timeunit)) return "시간";
  else if (timeunits.isDays(timeunit)) return "일";
  else if (timeunits.isWeeks(timeunit)) return "주";
  else if (timeunits.isMonths(timeunit)) return "개월";
  else if (timeunits.isQuarters(timeunit)) return "분기";
  else if (timeunits.isYears(timeunit)) return "년";

  return timeunit;
};

export const delayTimeUnitToMS = (delay: number, timeunit: string): number => {
  if (timeunits.isSeconds(timeunit)) {
    return moment.duration(delay, "seconds").asMilliseconds();
  } else if (timeunits.isMinutes(timeunit)) {
    return moment.duration(delay, "minutes").asMilliseconds();
  } else if (timeunits.isHours(timeunit)) {
    return moment.duration(delay, "hours").asMilliseconds();
  } else if (timeunits.isDays(timeunit)) {
    return moment.duration(delay, "days").asMilliseconds();
  } else {
    return delay;
  }
};

export const msToDelayTimeUnit = (delay: number, timeunit: string): number => {
  if (timeunits.isSeconds(timeunit)) {
    return moment.duration(delay, "milliseconds").asSeconds();
  } else if (timeunits.isMinutes(timeunit)) {
    return moment.duration(delay, "milliseconds").asMinutes();
  } else if (timeunits.isHours(timeunit)) {
    return moment.duration(delay, "milliseconds").asHours();
  } else if (timeunits.isDays(timeunit)) {
    return moment.duration(delay, "milliseconds").asDays();
  } else {
    return delay;
  }
};

//Returns true if field type is numeric
export const isNumericMapping = (fieldType: string | undefined): boolean => {
  return (
    fieldType == "long" ||
    fieldType == "integer" ||
    fieldType == "short" ||
    fieldType == "byte" ||
    fieldType == "double" ||
    fieldType == "float" ||
    fieldType == "half_float" ||
    fieldType == "scaled_float"
  );
};

export const compareFieldItem = (itemA: FieldItem, itemB: FieldItem): boolean => {
  return itemB.label == itemA.label && itemA.type == itemB.type && itemA.path == itemB.path;
};

export const parseFieldOptions = (prefix: string, mappings: any): FieldItem[] => {
  let fieldsOption: FieldItem[] = [];
  for (let field in mappings) {
    if (mappings.hasOwnProperty(field)) {
      if (mappings[field].type != "object" && mappings[field].type != null && mappings[field].type != "nested")
        fieldsOption.push({ label: prefix + field, type: mappings[field].type });
      if (mappings[field].fields != null)
        fieldsOption = fieldsOption.concat(parseFieldOptions(prefix + field + ".", mappings[field].fields));
      if (mappings[field].properties != null)
        fieldsOption = fieldsOption.concat(parseFieldOptions(prefix + field + ".", mappings[field].properties));
    }
  }
  return fieldsOption;
};

export const getOperators = (fieldType) =>
  COMPARISON_OPERATORS.reduce(
    (acc, currentOperator) =>
      currentOperator.dataTypes.includes(fieldType) ? [...acc, { text: currentOperator.text, value: currentOperator.value }] : acc,
    []
  );
