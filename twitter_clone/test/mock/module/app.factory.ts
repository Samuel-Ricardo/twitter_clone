import { POST_FACTORY_MOCK as POST } from './@core/post/post.factory';
import { USER_FACTORY_MOCK as USER } from './@core/user/user.factory';
import { AXIOS_FACTORY_MOCK as AXIOS } from './axios/axios.factory';
import { GATEWAY_FACTORY_MOCK as GATEWAY } from './gateway/gateway.factory';
import { HOOKS_FACTORY_MOCK as HOOKS } from './hooks/hooks.factory';
import { COMMENT_FACTORY_MOCK as COMMENT } from './@core/comment/comment.factory';
import { LIKE_FACTORY_MODULE_MOCK as LIKE } from './@core/like/like.factory';
import { FOLLOW_FACTORY_MOCK as FOLLOW } from './@core/follow/follow.factory';

export const MODULES_MOCK = {
  USER,
  POST,
  COMMENT,
  LIKE,
  FOLLOW,
  AXIOS,
  GATEWAY,
  HOOKS,
};
