import { AxiosFactory } from './axios/axios.factory';
import { GatewayFactory as GATEWAY } from './gateway/gateway.factory';
import { UserFactory as USER } from './@core/user/user.factory';
import { ConfigFactory as CONFIG } from './config/config.factory';
import { POST_FACTORY as POST } from './@core/post/post.factory';
import { COMMENT_FACTORY as COMMENT } from './@core/comment/comment.factory';

export const MODULES = {
  ...AxiosFactory,
  USER,
  POST,
  COMMENT,
  CONFIG,
  GATEWAY,
};
