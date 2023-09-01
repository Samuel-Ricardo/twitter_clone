import { AxiosFactory } from './axios/axios.factory';
import { GatewayFactory as GATEWAY } from './gateway/gateway.factory';

export const MODULES = {
  ...AxiosFactory,
  GATEWAY,
};
