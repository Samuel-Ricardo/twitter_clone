import { AxiosRegistry } from './axios/axios.registry';
import { GatewayRegistry as GATEWAY } from './gateway/gateway.registry';
import { UserRegistry as USER } from './@core/user/user.registry';
import { ConfigRegistry as CONFIG } from './config/config.registry';
import { POST_REGISTRY as POST } from './@core/post/post.registry';
import { COMMENT_REGISTRY as COMMENT } from './@core/comment/comment.registry';
import { LIKE_REGISTRY as LIKE } from './@core/like/like.registry';
import { FOLLOW_REGISTRY as FOLLOW } from './@core/follow/follow.registry';
import { EVENT_REGISTRY as EVENT } from './event/event.registry';
import { AUTH_REGISTRY as AUTH } from './auth/auth.registry';
import { SOCKET_REGISTRY as SOCKET } from './socket_io/socket.registry';
import { REACTIVE_REGISTRY as REACTIVE } from './reactive/reactive.registry';
import { OBSERVABLE_REGISTRY as OBSERVABLE } from './observable/observable.registry';
import { NOTIFICATION_REGISTRY as NOTIFICATION } from './@core/notification/notification.registry';
import { CRYPTO_REGISTRY } from './crypto/crypto.registry';
import { BCRYPT_REGISTRY } from './bcrypt/bcrypt.registry';
import { ARGON_REGISTRY } from './argon2/argon.registry';
import { SECURITY_REGISTRY as SECURITY } from './security/security.registry';
import { CYPHER_REGISTRY as CYPHER } from './cypher/cypher.registry';

export const MODULE = {
  ...AxiosRegistry,
  ...CRYPTO_REGISTRY,
  ...BCRYPT_REGISTRY,
  ...ARGON_REGISTRY,
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
  CYPHER,
};
