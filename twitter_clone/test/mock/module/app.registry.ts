import { POST_REGISTRY_MOCK as POST } from './@core/post/post.registry';
import { USER_REGISTRY_MOCK as USER } from './@core/user/user.registry';
import { AXIOS_REGISTRY_MOCK as AXIOS } from './axios/axios.registry';
import { GATEWAY_REGISTRY_MOCK as GATEWAY } from './gateway/gateway.registry';
import { HOOKS_REGISTRY_MOCK as HOOKS } from './hooks/hooks.registry';

export const MODULE_MOCK = {
  USER,
  POST,
  AXIOS,
  GATEWAY,
  HOOKS,
};
