import { Container } from 'inversify';
import { AXIOS_GATEWAY_MODULE_MOCK } from './axios/axios.module';

const MODULE = new Container({ autoBindInjectable: true });

export const GATEWAY_MODULE_MOCK = Container.merge(
  MODULE,
  AXIOS_GATEWAY_MODULE_MOCK,
);
