import IApiResponse from '../../../react-services/interfaces/api-response.interface';
import { ResponseRestartAgents } from '../types';
import { paginatedAgentsRequestService } from './paginated-agents-request';

export const restartAgentsService = async ({
  agentIds,
}: {
  agentIds: string[];
}) =>
  (await paginatedAgentsRequestService({
    method: 'PUT',
    url: '/agents/restart',
    agentIds,
  })) as IApiResponse<ResponseRestartAgents>;
