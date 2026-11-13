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

import './_index.scss';

import React from 'react';
import ReactDOM from 'react-dom';
import { AppMountParameters, CoreStart } from '../../../../../src/core/public';
import { SecurityPluginStartDependencies, ClientConfigType } from '../../types';
import { AppRouter } from './app-router';
import { DataSourceManagementPluginSetup } from '../../../../../src/plugins/data_source_management/public';

export function renderApp(
  coreStart: CoreStart,
  depsStart: SecurityPluginStartDependencies,
  params: AppMountParameters,
  config: ClientConfigType,
  redirect: string,
  dataSourceManagement?: DataSourceManagementPluginSetup
) {
  const deps = {
    coreStart,
    depsStart,
    params,
    config,
    dataSourceManagement,
    redirect,
  };
  // Use core's combined I18n/EuiContext provider (instead of a bare `I18nProvider`) so that
  // EUI's own built-in strings (e.g. the password field's show/hide tooltip) also pick up the
  // Korean overrides registered in src/core/public/i18n/i18n_eui_mapping.tsx.
  const I18nContext = coreStart.i18n.Context;
  ReactDOM.render(
    <I18nContext>
      <AppRouter {...deps} />
    </I18nContext>,
    params.element
  );
  return () => ReactDOM.unmountComponentAtNode(params.element);
}
