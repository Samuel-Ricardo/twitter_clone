import { AxiosFactory } from './axios/axios.factory';
import { GatewayFactory as GATEWAY } from './gateway/gateway.factory';
import { UserFactory as USER } from './@core/user/user.factory';
import { ConfigFactory as CONFIG } from './config/config.factory';
import { POST_FACTORY as POST } from './@core/post/post.factory';
import { COMMENT_FACTORY as COMMENT } from './@core/comment/comment.factory';
import { LIKE_FACTORY as LIKE } from './@core/like/like.factory';
import { FOLLOW_FACTORY as FOLLOW } from './@core/follow/follow.factory';
import { EVENT_FACTORY as EVENT } from './event/event.factory';
import { AUTH_FACTORY as AUTH } from './auth/auth.factory';
import { SOCKET_FACTORY as SOCKET } from './socket_io/socket.factory';
import { REACTIVE_FACTORY as REACTIVE } from './reactive/reactive.factory';
import { OBSERVABLE_FACTORY as OBSERVABLE } from './observable/observable.factory';
import { NOTIFICATION_FACTORY as NOTIFICATION } from './@core/notification/notification.factory';
import { CRYPTO_FACTORY } from './crypto/crypto.factory';
import { BCRYPT_FACTORY } from './bcrypt/bcrypt.factory';
import { ARGON_FACTORY } from './argon2/argon.factory';
import { SECURITY_FACTORY as SECURITY } from './security/security.factory';

export const MODULES = {
  ...AxiosFactory,
  ...CRYPTO_FACTORY,
  ...BCRYPT_FACTORY,
  ...ARGON_FACTORY,
  USER,
  POST,
  COMMENT,
  LIKE,
  CONFIG,
  EVENT,
  GATEWAY,
  FOLLOW,
  NOTIFICATION,
  AUTH,
  SOCKET,
  REACTIVE,
  OBSERVABLE,
  SECURITY,
};
