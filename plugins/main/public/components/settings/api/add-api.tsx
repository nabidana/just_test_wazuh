import React from 'react';
import {
  EuiFlexGroup,
  EuiFlexItem,
  EuiCodeBlock,
  EuiText,
  EuiCode,
  EuiCallOut,
} from '@elastic/eui';
import { withErrorBoundary } from '../../common/hocs';
import { getWazuhCorePlugin } from '../../../kibana-services';

export const AddApi = withErrorBoundary(() => {
  const data = React.useMemo(() => {
    const settings = Object.entries(
      getWazuhCorePlugin().configuration._settings.get('hosts').options.arrayOf,
    ).map(([key, { description }]) => [
      key,
      description.charAt(0).toLowerCase() + description.slice(1), // lower case the first letter
    ]);

    return {
      settings,
      example: `hosts:
    - <id>:
     ${settings
       .filter(([key]) => key !== 'id')
       .map(([key]) => `${key}: <${key}>`)
       .join('\n     ')}`,
    };
  }, []);

  return (
    <>
      <EuiFlexGroup>
        <EuiFlexItem>
          <EuiText>
            연결 정보를 설정하려면{' '}
            <EuiCode>{getWazuhCorePlugin().configuration.store.file}</EuiCode>{' '}
            파일을 수정하세요.
          </EuiText>
        </EuiFlexItem>
      </EuiFlexGroup>
      <EuiFlexGroup>
        <EuiFlexItem>
          <EuiCodeBlock language='yaml'>{data.example}</EuiCodeBlock>
        </EuiFlexItem>
      </EuiFlexGroup>
      <EuiFlexGroup>
        <EuiFlexItem>
          <EuiText>설명:</EuiText>
        </EuiFlexItem>
      </EuiFlexGroup>
      <EuiFlexGroup>
        <EuiFlexItem>
          <ul style={{ paddingLeft: '4px' }}>
            {data.settings.map(([key, description]) => (
              <li key={`add-api-connection-field-${key}`}>
                - <EuiCode>{`<${key}>`}</EuiCode>: {description}
              </li>
            ))}
          </ul>
        </EuiFlexItem>
      </EuiFlexGroup>
      <EuiFlexGroup>
        <EuiFlexItem>
          <EuiCallOut title='경고' color='warning' iconType='alert'>
            <p>
              설정 파일의 캐시로 인해 API 연결 변경사항이 적용되기까지 시간이
              걸릴 수 있습니다.
            </p>
          </EuiCallOut>
        </EuiFlexItem>
      </EuiFlexGroup>
    </>
  );
});
