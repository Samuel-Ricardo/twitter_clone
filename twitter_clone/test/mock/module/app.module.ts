import { Container } from 'inversify';
import { USER_MODULE_MOCK } from './@core/user/user.module';
import { AXIOS_MODULE_MOCK } from './axios/axios.module';
import { GATEWAY_MODULE_MOCK } from './gateway/gateway.module';

const MODULE = new Container();

export const APP_MODULE_MOCK = Container.merge(
  MODULE,
  USER_MODULE_MOCK,
  AXIOS_MODULE_MOCK,
  GATEWAY_MODULE_MOCK,
);
