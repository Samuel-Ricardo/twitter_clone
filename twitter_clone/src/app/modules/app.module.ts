import 'reflect-metadata';

import { Container } from 'inversify';
import { AxiosModule as AXIOS } from './axios/axios.module';
import { GatewayModule as GATEWAY } from './gateway/gateway.module';
import { UserModule as USER } from './@core/user/user.module';
import { ConfigModule as CONFIG } from './config/config.module';
import { POST_MODULE as POST } from './@core/post/post.module';

const MODULE = new Container({ autoBindInjectable: true });

export const AppModule = Container.merge(
  MODULE,
  USER,
  POST,
  CONFIG,
  AXIOS,
  GATEWAY,
);
