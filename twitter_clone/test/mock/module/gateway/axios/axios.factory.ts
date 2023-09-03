import { DeepMockProxy } from 'jest-mock-extended';
import { AXIOS_GATEWAY_MODULE_MOCK } from './axios.module';
import { AxiosUserGateway } from '@/app/modules/gateway/axios/user/user.gateway';
import { AXIOS_GATEWAY_REGISTRY_MOCK } from './axios.registry';
import { ISimulatedUserGateweay } from '@test/@types/simulate/user/gateway';
import axios from 'axios';

export const AXIOS_GATEWAY_FACTORY_MOCK = {
  USER: {
    MOCK: () =>
      AXIOS_GATEWAY_MODULE_MOCK.get<DeepMockProxy<AxiosUserGateway>>(
        AXIOS_GATEWAY_REGISTRY_MOCK.USER.MOCK,
      ),
    SIMULATE: () =>
      AXIOS_GATEWAY_MODULE_MOCK.get<
        ISimulatedUserGateweay<AxiosUserGateway, typeof axios>
      >(AXIOS_GATEWAY_REGISTRY_MOCK.USER.SIMULATE),
  },
};
