import { AxiosFactory } from './axios/axios.factory';
import { GatewayFactory as GATEWAY } from './gateway/gateway.factory';
import { UserFactory as USER } from './@core/user/user.factory';

export const MODULES = {
  ...AxiosFactory,
  GATEWAY,
  USER,
};
