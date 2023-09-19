import { AxiosRegistry } from './axios/axios.registry';
import { GatewayRegistry as GATEWAY } from './gateway/gateway.registry';
import { UserRegistry as USER } from './@core/user/user.registry';
import { ConfigRegistry as CONFIG } from './config/config.registry';
import { POST_REGISTRY as POST } from './@core/post/post.registry';
import { COMMENT_REGISTRY as COMMENT } from './@core/comment/comment.registry';
import { LIKE_REGISTRY as LIKE } from './@core/like/like.registry';
import { FOLLOW_REGISTRY as FOLLOW } from './@core/follow/follow.registry';
import { EVENT_REGISTRY as EVENT } from './event/event.registry';

export const MODULE = {
  ...AxiosRegistry,
  USER,
  POST,
  COMMENT,
  LIKE,
  CONFIG,
  EVENT,
  GATEWAY,
  FOLLOW,
};
