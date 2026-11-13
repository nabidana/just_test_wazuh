import React from 'react';
import {
  EuiSteps,
  EuiAccordion,
  EuiInMemoryTable,
  EuiCallOut,
  EuiText,
  EuiFlexGroup,
  EuiFlexItem,
  EuiIcon,
  EuiLoadingSpinner,
  EuiSpacer,
} from '@elastic/eui';
import { Agent, AgentInfoMinimal } from '../../../types';
import { Result } from './restart-modal';
import { ErrorAgent } from '../../../services/paginated-agents-request';

export enum RESULT_TYPE {
  SUCCESS = 'success',
  ERROR = 'error',
}

interface RestartAgentsModalResultProps {
  finalAgents: Agent[];
  getAgentsStatus: string;
  getAgentsError?: Error;
  saveChangesStatus: string;
  result?: Result;
}

export const RestartAgentsModalResult = ({
  finalAgents,
  getAgentsStatus,
  getAgentsError,
  saveChangesStatus,
  result = {},
}: RestartAgentsModalResultProps) => {
  const { successAgents, errorAgents, totalErrorAgents } = result;

  const agentsTable = (agents: Agent[]) => (
    <EuiInMemoryTable
      items={agents}
      tableLayout='auto'
      columns={[
        {
          field: 'id',
          name: 'ID',
          align: 'left',
          sortable: true,
        },
        {
          field: 'name',
          name: '이름',
          align: 'left',
          sortable: true,
        },
      ]}
      pagination={true}
      sorting={{
        sort: {
          field: 'id',
          direction: 'asc',
        },
      }}
    />
  );

  const restartedAgentsTable = (data: AgentInfoMinimal[]) => (
    <EuiInMemoryTable
      items={data}
      tableLayout='auto'
      columns={[
        {
          field: 'id',
          name: 'ID',
          align: 'left',
          sortable: true,
        },
        {
          field: 'name',
          name: '이름',
          align: 'left',
          sortable: true,
        },
      ]}
      pagination={true}
      sorting={{
        sort: {
          field: 'id',
          direction: 'asc',
        },
      }}
    />
  );

  const errorsTable = (errors: ErrorAgent[] = []) => (
    <EuiInMemoryTable
      items={errors}
      tableLayout='auto'
      columns={[
        {
          field: 'error.code',
          name: '코드',
          align: 'left',
          sortable: true,
          width: '100px',
        },
        {
          field: 'error.message',
          name: '오류',
          align: 'left',
          sortable: true,
        },
        {
          field: 'error.remediation',
          name: '해결 방법',
          align: 'left',
          sortable: true,
        },
        {
          field: 'id',
          name: '에이전트 ID',
          align: 'left',
          render: ids => ids.join(', '),
        },
      ]}
      pagination={true}
    />
  );

  const resultStatus = (options: { status: RESULT_TYPE; text: string }) => {
    const { status, text } = options;

    return (
      <EuiFlexGroup
        alignItems='center'
        responsive={false}
        wrap={false}
        gutterSize='s'
      >
        <EuiFlexItem grow={false}>
          <EuiIcon
            type={status === RESULT_TYPE.SUCCESS ? 'check' : 'alert'}
            color={status === RESULT_TYPE.SUCCESS ? 'success' : 'danger'}
          />
        </EuiFlexItem>
        <EuiFlexItem grow={false}>
          <EuiText color={status === RESULT_TYPE.ERROR ? 'danger' : undefined}>
            {text}
          </EuiText>
        </EuiFlexItem>
      </EuiFlexGroup>
    );
  };

  return (
    <EuiSteps
      steps={[
        {
          step: 1,
          title: '에이전트 데이터 조회',
          status: getAgentsStatus,
          children:
            getAgentsStatus === 'loading' ? null : getAgentsStatus ===
              'complete' ? (
              <EuiAccordion
                id='agentsAccordion'
                arrowDisplay='none'
                paddingSize='m'
                buttonContent={`에이전트 세부 정보 (${finalAgents.length})`}
              >
                {agentsTable(finalAgents)}
              </EuiAccordion>
            ) : (
              <EuiCallOut
                color='danger'
                iconType='alert'
                title='에이전트 데이터를 가져올 수 없습니다'
              >
                <EuiText>{getAgentsError?.message}</EuiText>
              </EuiCallOut>
            ),
        },
        {
          step: 2,
          title: '에이전트 재시작 적용',
          status: saveChangesStatus,
          children:
            getAgentsStatus === 'complete' ? (
              <EuiFlexGroup direction='column'>
                {saveChangesStatus === 'loading' ? (
                  <EuiFlexItem>
                    <EuiFlexGroup
                      alignItems='center'
                      responsive={false}
                      wrap={false}
                      gutterSize='s'
                    >
                      <EuiFlexItem grow={false}>
                        <EuiLoadingSpinner size='m' />
                      </EuiFlexItem>
                      <EuiFlexItem grow={false}>
                        <EuiText>에이전트 재시작 중</EuiText>
                      </EuiFlexItem>
                    </EuiFlexGroup>
                  </EuiFlexItem>
                ) : (
                  <>
                    {successAgents?.length ? (
                      <EuiFlexItem>
                        <EuiAccordion
                          id={`$successAccordion`}
                          arrowDisplay='none'
                          paddingSize='m'
                          buttonContent={resultStatus({
                            status: RESULT_TYPE.SUCCESS,
                            text: `재시작 요청된 에이전트 (${successAgents.length})`,
                          })}
                        >
                          {restartedAgentsTable(successAgents)}
                        </EuiAccordion>
                      </EuiFlexItem>
                    ) : null}
                    {successAgents?.length && errorAgents?.length ? (
                      <EuiSpacer size='s' />
                    ) : null}
                    {totalErrorAgents ? (
                      <EuiFlexItem>
                        <EuiAccordion
                          id={`$errorAccordion`}
                          arrowDisplay='none'
                          paddingSize='m'
                          buttonContent={resultStatus({
                            status: RESULT_TYPE.ERROR,
                            text: `오류 (${totalErrorAgents})`,
                          })}
                        >
                          {errorsTable(errorAgents)}
                        </EuiAccordion>
                      </EuiFlexItem>
                    ) : null}
                  </>
                )}
              </EuiFlexGroup>
            ) : null,
        },
      ]}
    />
  );
};
