/*
 * Copyright OpenSearch Contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { ReadWriteAction, UIAction } from "../../../../../models/interfaces";
import { makeId } from "../../../../utils/helpers";
import { ActionType } from "../../utils/constants";

export default class ReadWriteUIAction implements UIAction<ReadWriteAction> {
  customDisplayText = "읽기 쓰기";
  id: string;
  action: ReadWriteAction;
  type = ActionType.ReadWrite;

  constructor(action: ReadWriteAction, id: string = makeId()) {
    this.action = action;
    this.id = id;
  }

  content = () => `읽기 쓰기`;

  clone = (action: ReadWriteAction) => new ReadWriteUIAction(action, this.id);

  isValid = () => true;

  render = (action: UIAction<ReadWriteAction>, onChangeAction: (action: UIAction<ReadWriteAction>) => void) => {
    return <div />;
  };

  toAction = () => this.action;
}
