import { Container } from 'inversify';
import { AXIOS_REGISTRY_MOCK } from './axios.registry';
import { mockAxios } from './axios';

export const AXIOS_MODULE_MOCK = new Container({
  autoBindInjectable: true,
  defaultScope: 'Singleton',
});

AXIOS_MODULE_MOCK.bind(AXIOS_REGISTRY_MOCK.MOCK).toDynamicValue(mockAxios);
