import React, { Component, Fragment } from 'react';
import { EuiEmptyPrompt } from '@elastic/eui';
import { withErrorBoundary } from '../../common/hocs';
export const ClusterDisabled = withErrorBoundary(
  class ClusterDisabled extends Component {
    constructor(props) {
      super(props);
      this.state = {};
    }

    render() {
      return (
        <EuiEmptyPrompt
          iconType='iInCircle'
          title={
            <h2>
              {this.props.error
                ? this.props.error.title
                : !this.props.enabled
                ? '클러스터가 비활성화되어 있습니다'
                : !this.props.running
                ? '클러스터가 실행되고 있지 않습니다'
                : ''}
            </h2>
          }
          body={
            <Fragment>
              {this.props.error ? (
                this.props.error.message
              ) : !this.props.enabled ? null : !this.props.running ? (
                <p>클러스터가 활성화되어 있지만 실행되고 있지 않습니다.</p>
              ) : null}
            </Fragment>
          }
        />
      );
    }
  },
);
