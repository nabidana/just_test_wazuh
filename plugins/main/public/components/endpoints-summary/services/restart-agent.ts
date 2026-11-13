import IApiResponse from '../../../react-services/interfaces/api-response.interface';
import { WzRequest } from '../../../react-services/wz-request';
import { ResponseRestartAgent } from '../types';

export const restartAgentService = async (agentId: string) =>
  (await WzRequest.apiReq('PUT', '/agents/restart', {
    params: {
      agents_list: agentId,
      wait_for_complete: true,
    },
  })) as IApiResponse<ResponseRestartAgent>;
