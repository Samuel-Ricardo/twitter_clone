import { Container } from 'inversify';
import { AXIOS_MODULE_MOCK } from '../../axios/axios.module';
import { AXIOS_GATEWAY_REGISTRY_MOCK } from './axios.registry';
import { mockAxiosUserGateway, simulateAxiosUserGateway } from './user';
import {
  mockAxiosPostGateway,
  simulateAxiosPostGateway,
} from './post/post.gateway';

const MODULE = new Container({ autoBindInjectable: true });

export const AXIOS_GATEWAY_MODULE_MOCK = Container.merge(
  MODULE,
  AXIOS_MODULE_MOCK,
);

AXIOS_GATEWAY_MODULE_MOCK.bind(
  AXIOS_GATEWAY_REGISTRY_MOCK.USER.MOCK,
).toDynamicValue(mockAxiosUserGateway);

AXIOS_GATEWAY_MODULE_MOCK.bind(
  AXIOS_GATEWAY_REGISTRY_MOCK.USER.SIMULATE,
).toDynamicValue(simulateAxiosUserGateway);

AXIOS_GATEWAY_MODULE_MOCK.bind(
  AXIOS_GATEWAY_REGISTRY_MOCK.POST.MOCK,
).toDynamicValue(mockAxiosPostGateway);

AXIOS_GATEWAY_MODULE_MOCK.bind(
  AXIOS_GATEWAY_REGISTRY_MOCK.POST.SIMULATE,
).toDynamicValue(simulateAxiosPostGateway);
