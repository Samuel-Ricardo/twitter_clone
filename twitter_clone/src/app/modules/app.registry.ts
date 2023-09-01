import { AxiosRegistry } from './axios/axios.registry';
import { GatewayRegistry as GATEWAY } from './gateway/gateway.registry';

export const MODULE = {
  ...AxiosRegistry,
  GATEWAY,
};
