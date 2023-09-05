import { AxiosRegistry } from './axios/axios.registry';
import { GatewayRegistry as GATEWAY } from './gateway/gateway.registry';
import { UserRegistry as USER } from './@core/user/user.registry';
import { ConfigRegistry as CONFIG } from './config/config.registry';
import { POST_REGISTRY as POST } from './@core/post/post.registry';

export const MODULE = {
  ...AxiosRegistry,
  USER,
  POST,
  CONFIG,
  GATEWAY,
};
