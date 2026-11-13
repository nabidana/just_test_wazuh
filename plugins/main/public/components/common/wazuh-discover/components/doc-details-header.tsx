import React from 'react';
import { EuiFlexGroup, EuiFlexItem, EuiTitle, EuiLink } from '@elastic/eui';
import { RedirectAppLinks } from '../../../../../../../src/plugins/opensearch_dashboards_react/public';
import { getCore } from '../../../../kibana-services';
import NavigationService from '../../../../react-services/navigation-service';

const DocDetailsHeader = ({ doc, indexPattern }) => {
  return (
    <EuiFlexGroup>
      <EuiFlexItem>
        <EuiTitle>
          <h2>문서 상세 정보</h2>
        </EuiTitle>
      </EuiFlexItem>
      {/* GS 인증용: "주변 문서 보기" / "단일 문서 보기" 링크 삭제 */}
    </EuiFlexGroup>
  );
};

export default DocDetailsHeader;
