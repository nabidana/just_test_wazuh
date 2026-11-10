/*
 *   Copyright OpenSearch Contributors
 *
 *   Licensed under the Apache License, Version 2.0 (the "License").
 *   You may not use this file except in compliance with the License.
 *   A copy of the License is located at
 *
 *       http://www.apache.org/licenses/LICENSE-2.0
 *
 *   or in the "license" file accompanying this file. This file is distributed
 *   on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either
 *   express or implied. See the License for the specific language governing
 *   permissions and limitations under the License.
 */

import { isValidResourceName } from '../../../../common';
import {
  MIN_NUMBER_OF_CHARS_IN_RESOURCE_NAME,
  MAX_NUMBER_OF_CHARS_IN_RESOURCE_NAME,
} from '../constants';

const RESOURCE_TYPE_LABELS: { [key: string]: string } = {
  role: '역할',
  user: '사용자',
  tenant: '테넌트',
};

function resourceTypeLabel(resourceType: string): string {
  return RESOURCE_TYPE_LABELS[resourceType] || '';
}

const VALID_LENGTH_HELP_TEXT = (resourceType: string) => {
  const label = resourceTypeLabel(resourceType);
  const prefix = label ? `${label} ` : '';
  return `${prefix}이름은 ${MIN_NUMBER_OF_CHARS_IN_RESOURCE_NAME}자에서 ${MAX_NUMBER_OF_CHARS_IN_RESOURCE_NAME}자 사이여야 합니다.`;
};

const VALID_CHARACTERS_HELP_TEXT =
  '사용 가능한 문자는 A-Z, a-z, 0-9, (_)밑줄, (-)하이픈 및 유니코드 문자입니다.';

export function validateResourceName(resourceType: string, resourceName: string): string[] {
  const errors: string[] = [];
  if (!isResourceNameLengthValid(resourceName)) {
    errors.push(VALID_LENGTH_HELP_TEXT(resourceType));
  }

  if (!isValidResourceName(resourceName)) {
    const label = resourceTypeLabel(resourceType);
    const prefix = label ? `${label} ` : '';
    errors.push(`${prefix}이름에 잘못된 문자가 있습니다. ${VALID_CHARACTERS_HELP_TEXT}`);
  }
  return errors;
}

export function isResourceNameLengthValid(resourceName: string): boolean {
  if (
    resourceName.length < MIN_NUMBER_OF_CHARS_IN_RESOURCE_NAME ||
    resourceName.length > MAX_NUMBER_OF_CHARS_IN_RESOURCE_NAME
  )
    return false;
  return true;
}

export function resourceNameHelpText(resourceType: string): string {
  return `${VALID_LENGTH_HELP_TEXT(resourceType)} ${VALID_CHARACTERS_HELP_TEXT}`;
}
