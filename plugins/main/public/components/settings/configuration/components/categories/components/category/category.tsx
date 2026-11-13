/*
 * Wazuh app - React component building the configuration component.
 *
 * Copyright (C) 2015-2022 Wazuh, Inc.
 *
 * This program is free software; you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation; either version 2 of the License, or
 * (at your option) any later version.
 *
 * Find more information about this on the LICENSE file.
 */

import React from 'react';
import {
  EuiFlexItem,
  EuiPanel,
  EuiText,
  EuiFlexGroup,
  EuiForm,
  EuiDescribedFormGroup,
  EuiTitle,
  EuiSpacer,
  EuiIconTip,
} from '@elastic/eui';
import {
  EpluginSettingType,
  UI_LOGGER_LEVELS,
} from '../../../../../../../../common/constants';
import { TPluginSettingWithKey } from '../../../../../../../../../wazuh-core/common/constants';
import classNames from 'classnames';
import { InputForm } from '../../../../../../common/form';
import { useDispatch } from 'react-redux';
import { getHttp } from '../../../../../../../kibana-services';
import { getAssetURL } from '../../../../../../../utils/assets';
import { UI_ERROR_SEVERITIES } from '../../../../../../../react-services/error-orchestrator/types';
import { WzRequest } from '../../../../../../../react-services';
import { updateAppConfig } from '../../../../../../../redux/actions/appConfigActions';
import { getErrorOrchestrator } from '../../../../../../../react-services/common-services';
import { WzButtonModalConfirm } from '../../../../../../common/buttons';
import {
  toastRequiresReloadingBrowserTab,
  toastRequiresRestartingPluginPlatform,
  toastRequiresRunningHealthcheck,
  toastSuccessUpdateConfiguration,
} from '../show-toasts';

interface ICategoryProps {
  title: string;
  description?: string;
  documentationLink?: string;
  items: TPluginSettingWithKey[];
  currentConfiguration: { [field: string]: any };
}

export const Category: React.FunctionComponent<ICategoryProps> = ({
  title,
  currentConfiguration,
  description,
  documentationLink,
  items,
}) => {
  return (
    <EuiFlexItem>
      <EuiPanel paddingSize='l'>
        <EuiText>
          <EuiFlexGroup>
            <EuiFlexItem>
              <h2>{title}</h2>
            </EuiFlexItem>
          </EuiFlexGroup>
        </EuiText>
        {description && (
          <>
            <EuiText color='subdued'>
              <EuiFlexGroup>
                <EuiFlexItem>
                  <span>{description}</span>
                </EuiFlexItem>
              </EuiFlexGroup>
            </EuiText>
            <EuiSpacer />
          </>
        )}
        <EuiForm>
          {items.map((item, idx) => {
            const isUpdated = item.changed && !item.error;
            return (
              <EuiDescribedFormGroup
                fullWidth
                key={idx}
                className={classNames('mgtAdvancedSettings__field', {
                  'mgtAdvancedSettings__field--unsaved': isUpdated,
                  'mgtAdvancedSettings__field--invalid': item.error,
                })}
                title={
                  <EuiTitle
                    className='mgtAdvancedSettings__fieldTitle'
                    size='s'
                  >
                    <span>
                      {item.title}
                      {item.error && (
                        <EuiIconTip
                          anchorClassName='mgtAdvancedSettings__fieldTitleUnsavedIcon'
                          type='alert'
                          color='danger'
                          aria-label={item.key}
                          content='잘못됨'
                        />
                      )}
                      {isUpdated && (
                        <EuiIconTip
                          anchorClassName='mgtAdvancedSettings__fieldTitleUnsavedIcon'
                          type='dot'
                          color='warning'
                          aria-label={item.key}
                          content='저장되지 않음'
                        />
                      )}
                    </span>
                  </EuiTitle>
                }
                description={item.description}
              >
                <InputForm
                  // Wazuh: hide the "wazuh." branding prefix from the technical key label shown above the input.
                  label={item.key.replace(/^wazuh\./, '')}
                  {...item}
                  {...(item.type === EpluginSettingType.filepicker &&
                  currentConfiguration[item.key]
                    ? {
                        postInput: () => (
                          <EuiFlexItem grow={false}>
                            <InputFormFilePickerPreInput
                              image={getHttp().basePath.prepend(
                                getAssetURL(currentConfiguration[item.key]),
                              )}
                              field={item}
                            />
                          </EuiFlexItem>
                        ),
                      }
                    : {})}
                />
              </EuiDescribedFormGroup>
            );
          })}
        </EuiForm>
      </EuiPanel>
    </EuiFlexItem>
  );
};

const InputFormFilePickerPreInput = ({
  image,
  field,
}: {
  image: string;
  field: any;
}) => {
  const dispatch = useDispatch();

  return (
    <>
      <EuiFlexGroup alignItems='center' responsive={false}>
        <EuiFlexItem grow={false}>
          <img
            src={image}
            alt='사용자 지정 로고'
            style={{ maxWidth: '40px', maxHeight: '40px', width: '100%' }}
          />
        </EuiFlexItem>
        <EuiFlexItem grow={false}>
          <WzButtonModalConfirm
            buttonType='icon'
            tooltip={{
              content: '파일 삭제',
              position: 'top',
            }}
            modalTitle={`${field.key} 파일을 삭제하시겠습니까?`}
            onConfirm={async () => {
              try {
                const response = await WzRequest.genericReq(
                  'DELETE',
                  `/utils/configuration/files/${field.key}`,
                );
                dispatch(
                  updateAppConfig(response.data.data.updatedConfiguration),
                );

                // Show the toasts if necessary
                const {
                  requiresRunningHealthCheck,
                  requiresReloadingBrowserTab,
                  requiresRestartingPluginPlatform,
                } = response.data.data;
                requiresRunningHealthCheck && toastRequiresRunningHealthcheck();
                requiresReloadingBrowserTab &&
                  toastRequiresReloadingBrowserTab();
                requiresRestartingPluginPlatform &&
                  toastRequiresRestartingPluginPlatform();
                toastSuccessUpdateConfiguration();
              } catch (error) {
                const options = {
                  context: `${InputFormFilePickerPreInput.name}.confirmDeleteFile`,
                  level: UI_LOGGER_LEVELS.ERROR,
                  severity: UI_ERROR_SEVERITIES.BUSINESS,
                  store: true,
                  error: {
                    error: error,
                    message: error.message || error,
                    title: error.name || error,
                  },
                };
                getErrorOrchestrator().handleError(options);
              }
            }}
            modalProps={{ buttonColor: 'danger' }}
            iconType='trash'
            color='danger'
            aria-label='파일 삭제'
          />
        </EuiFlexItem>
      </EuiFlexGroup>
    </>
  );
};
