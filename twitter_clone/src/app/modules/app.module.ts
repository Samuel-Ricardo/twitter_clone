import 'reflect-metadata';

import { Container } from 'inversify';
import { AxiosModule as AXIOS } from './axios/axios.module';
import { GatewayModule as GATEWAY } from './gateway/gateway.module';
import { UserModule as USER } from './@core/user/user.module';
import { ConfigModule as CONFIG } from './config/config.module';
import { POST_MODULE as POST } from './@core/post/post.module';
import { COMMENT_MODULE as COMMENT } from './@core/comment/comment.module';
import { LIKE_MODULE as LIKE } from './@core/like/like.module';
import { FOLLOW_MODULE as FOLLOW } from './@core/follow/follow.module';
import { EVENT_MODULE as EVENT } from './event/event.module';
import { AUTH_MODULE as AUTH } from './auth/auth.module';
import { SOCKET_MODULE as SOCKET } from './socket_io/socket.module';
import { REACTIVE_MODULE as REACTIVE } from './reactive/reactive.module';
import { OBSERVABLE_MODULE as OBSERVABLE } from './observable/observable.module';
import { NOTIFICATION_MODULE as NOTIFICATION } from './@core/notification/notification.module';
import { CRYPTO_MODULE as CRYPTO } from './crypto/crypto.module';
import { BCRYPT_MODULE as BCRYPT } from './bcrypt/bcrypt.module';
import { ARGON_MODULE as ARGON } from './argon2/argon.module';
import { SECURITY_MODULE as SECURITY } from './security/security.module';
import { CYPHER_MODULE as CYPHER } from './cypher/cypher.module';

import { MODULE } from './module';

export const AppModule = Container.merge(
  MODULE,
  USER,
  POST,
  COMMENT,
  LIKE,
  FOLLOW,
  NOTIFICATION,
  CONFIG,
  EVENT,
  AXIOS,
  GATEWAY,
  AUTH,
  SOCKET,
  REACTIVE,
  OBSERVABLE,
  CRYPTO,
  BCRYPT,
  ARGON,
  SECURITY,
  CYPHER,
);
