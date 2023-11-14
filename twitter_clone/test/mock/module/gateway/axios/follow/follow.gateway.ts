import { MODULES } from '@/app/modules';
import { AxiosFollowGateway } from '@/app/modules/gateway/axios/follow/follow.gateway';
import { ISimulatedFollowGateway } from '@test/@types/simulate/follow/gateway';
import { MODULE_MOCK } from '@test/mock/module/app.registry';
import axios from 'axios';
import { interfaces } from 'inversify';
import { mockDeep } from 'jest-mock-extended';

export const mockAxiosFollowGateway = () => mockDeep<AxiosFollowGateway>();

export const simulateAxiosFollowGateway = ({
  container,
}: interfaces.Context): ISimulatedFollowGateway<
  AxiosFollowGateway,
  typeof axios
> => {
  const client = container.get<any>(MODULE_MOCK.AXIOS.MOCK);

  return {
    gateway: new AxiosFollowGateway(
      client,
      MODULES.SECURITY.CRYPTOGRAPHY.TURING(),
    ),
    client,
  };
};
