import { MODULES } from '@/app/modules';
import { AxiosCommentGateway } from '@/app/modules/gateway/axios/comment/comment.gateway';
import { ISimulatedCommentGateway } from '@test/@types/simulate/comment/gateway';
import { MODULE_MOCK } from '@test/mock/module/app.registry';
import axios from 'axios';
import { interfaces } from 'inversify';
import { mockDeep } from 'jest-mock-extended';

export const mockAxiosCommentGateway = () => mockDeep<AxiosCommentGateway>();

export const simulateAxiosCommentGateway = ({
  container,
}: interfaces.Context): ISimulatedCommentGateway<
  AxiosCommentGateway,
  typeof axios
> => {
  const client = container.get<any>(MODULE_MOCK.AXIOS.MOCK);
  const gateway = new AxiosCommentGateway(
    client,
    MODULES.SECURITY.CRYPTOGRAPHY.TURING(),
  );

  return { gateway, client };
};
