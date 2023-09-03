import { Container } from 'inversify';
import { AXIOS_MODULE_MOCK } from '../../axios/axios.module';
import { AXIOS_GATEWAY_REGISTRY_MOCK } from './axios.registry';
import { mockAxiosUserGateway, simulateAxiosUserGateway } from './user';

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
