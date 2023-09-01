import { AxiosRegistry } from './axios/axios.registry';
import { GatewayRegistry as GATEWAY } from './gateway/gateway.registry';
import { UserRegistry as USER } from './@core/user/user.registry';

export const MODULE = {
  ...AxiosRegistry,
  GATEWAY,
  USER,
};
