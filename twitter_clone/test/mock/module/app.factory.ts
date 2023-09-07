import { POST_FACTORY_MOCK as POST } from './@core/post/post.factory';
import { USER_FACTORY_MOCK as USER } from './@core/user/user.factory';
import { AXIOS_FACTORY_MOCK as AXIOS } from './axios/axios.factory';
import { GATEWAY_FACTORY_MOCK as GATEWAY } from './gateway/gateway.factory';
import { HOOKS_FACTORY_MOCK as HOOKS } from './hooks/hooks.factory';
import { COMMENT_FACTORY_MOCK as COMMENT } from './@core/comment/comment.factory';

export const MODULES_MOCK = {
  USER,
  POST,
  COMMENT,
  AXIOS,
  GATEWAY,
  HOOKS,
};
