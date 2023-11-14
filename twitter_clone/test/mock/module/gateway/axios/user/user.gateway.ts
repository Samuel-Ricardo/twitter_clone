import { MODULES } from '@/app/modules';
import { AxiosUserGateway } from '@/app/modules/gateway/axios/user/user.gateway';
import { ISimulatedUserGateweay } from '@test/@types/simulate/user/gateway';
import { MODULE_MOCK } from '@test/mock/module/app.registry';
import axios from 'axios';
import { interfaces } from 'inversify';
import { mockDeep } from 'jest-mock-extended';

export const mockAxiosUserGateway = () => mockDeep<AxiosUserGateway>();

export const simulateAxiosUserGateway = ({
  container,
}: interfaces.Context): ISimulatedUserGateweay<
  AxiosUserGateway,
  typeof axios
> => {
  const client = container.get<any>(MODULE_MOCK.AXIOS.MOCK);
  const gateway = new AxiosUserGateway(
    client,
    MODULES.SECURITY.CRYPTOGRAPHY.TURING(),
  );

  return { gateway, client };
};
