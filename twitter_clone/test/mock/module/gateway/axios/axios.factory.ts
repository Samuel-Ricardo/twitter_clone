import { DeepMockProxy } from 'jest-mock-extended';
import { AXIOS_GATEWAY_MODULE_MOCK } from './axios.module';
import { AxiosUserGateway } from '@/app/modules/gateway/axios/user/user.gateway';
import { AXIOS_GATEWAY_REGISTRY_MOCK } from './axios.registry';
import { ISimulatedUserGateweay } from '@test/@types/simulate/user/gateway';
import axios from 'axios';
import { AxiosPostGateway } from '@/app/modules/gateway/axios/post/post.gateway';
import { ISimulatedPostGateway } from '@test/@types/simulate/post/gateway';
import { AxiosCommentGateway } from '@/app/modules/gateway/axios/comment/comment.gateway';
import { ISimulatedCommentGateway } from '@test/@types/simulate/comment/gateway';

export const AXIOS_GATEWAY_FACTORY_MOCK = {
  COMMENT: {
    MOCK: () =>
      AXIOS_GATEWAY_MODULE_MOCK.get<DeepMockProxy<AxiosCommentGateway>>(
        AXIOS_GATEWAY_REGISTRY_MOCK.COMMENT.MOCK,
      ),
    SIMULATE: () =>
      AXIOS_GATEWAY_MODULE_MOCK.get<
        ISimulatedCommentGateway<AxiosCommentGateway, typeof axios>
      >(AXIOS_GATEWAY_REGISTRY_MOCK.COMMENT.SIMULATE),
  },
  POST: {
    MOCK: () =>
      AXIOS_GATEWAY_MODULE_MOCK.get<DeepMockProxy<AxiosPostGateway>>(
        AXIOS_GATEWAY_REGISTRY_MOCK.POST.MOCK,
      ),
    SIMULATE: () =>
      AXIOS_GATEWAY_MODULE_MOCK.get<
        ISimulatedPostGateway<AxiosPostGateway, typeof axios>
      >(AXIOS_GATEWAY_REGISTRY_MOCK.POST.SIMULATE),
  },
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
