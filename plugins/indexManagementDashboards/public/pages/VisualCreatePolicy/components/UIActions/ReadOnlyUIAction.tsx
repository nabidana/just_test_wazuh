/*
 * Copyright OpenSearch Contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { ReadOnlyAction, UIAction } from "../../../../../models/interfaces";
import { makeId } from "../../../../utils/helpers";
import { ActionType } from "../../utils/constants";

export default class ReadOnlyUIAction implements UIAction<ReadOnlyAction> {
  customDisplayText = "읽기 전용";
  id: string;
  action: ReadOnlyAction;
  type = ActionType.ReadOnly;

  constructor(action: ReadOnlyAction, id: string = makeId()) {
    this.action = action;
    this.id = id;
  }

  content = () => `읽기 전용`;

  clone = (action: ReadOnlyAction) => new ReadOnlyUIAction(action, this.id);

  isValid = () => true;

  render = (action: UIAction<ReadOnlyAction>, onChangeAction: (action: UIAction<ReadOnlyAction>) => void) => {
    return <div />;
  };

  toAction = () => this.action;
}
