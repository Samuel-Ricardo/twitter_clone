import { AxiosPostGateway } from '@/app/modules/gateway/axios/post/post.gateway';
import { ISimulatedPostGateway } from '@test/@types/simulate/post/gateway';
import { MODULE_MOCK } from '@test/mock/module/app.registry';
import axios from 'axios';
import { interfaces } from 'inversify';
import { mockDeep } from 'jest-mock-extended';

export const mockAxiosPostGateway = () => mockDeep<AxiosPostGateway>();

export const simulateAxiosPostGateway = ({
  container,
}: interfaces.Context): ISimulatedPostGateway<
  AxiosPostGateway,
  typeof axios
> => {
  const client = container.get<any>(MODULE_MOCK.AXIOS.MOCK);
  const gateway = new AxiosPostGateway('http://localhost:3004', client);

  return { gateway, client };
};
