import { AxiosLikeGateway } from '@/app/modules/gateway/axios/like/like.gateway';
import { mockDeep } from 'jest-mock-extended';
import { interfaces } from 'inversify';
import { ISimulatedLikeGateway } from '@test/@types/simulate/like/gateway';
import axios from 'axios';
import { MODULE_MOCK } from '@test/mock/module/app.registry';
import { MODULES } from '@/app/modules';

export const mockAxiosLikeGateway = () => mockDeep<AxiosLikeGateway>();

export const simulateAxiosLikeGateway = ({
  container,
}: interfaces.Context): ISimulatedLikeGateway<
  AxiosLikeGateway,
  typeof axios
> => {
  const client = container.get<any>(MODULE_MOCK.AXIOS.MOCK);
  const gateway = new AxiosLikeGateway(
    client,
    MODULES.SECURITY.CRYPTOGRAPHY.TURING(),
  );

  return { gateway, client };
};
