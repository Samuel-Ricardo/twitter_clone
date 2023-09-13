import { Container } from 'inversify';
import { AxiosModule } from '../../axios/axios.module';
import { AxiosGatewayRegistry } from './axios.registry';
import { AxiosHTTPGateway } from './generic/http.gateway';
import { AxiosUserGateway } from './user/user.gateway';
import { ConfigModule } from '../../config/config.module';
import { AxiosPostGateway } from './post/post.gateway';
import { AxiosCommentGateway } from './comment/comment.gateway';
import { AxiosLikeGateway } from './like/like.gateway';
import { AxiosFollowGateway } from './follow/follow.gateway';

const Module = new Container({ autoBindInjectable: true });

export const AxiosGatewayModule = Container.merge(
  Module,
  AxiosModule,
  ConfigModule,
);

AxiosGatewayModule.bind(AxiosGatewayRegistry.GENERIC.HTTP)
  .to(AxiosHTTPGateway)
  .inSingletonScope();
AxiosGatewayModule.bind(AxiosGatewayRegistry.USER)
  .to(AxiosUserGateway)
  .inSingletonScope();
AxiosGatewayModule.bind(AxiosGatewayRegistry.POST)
  .to(AxiosPostGateway)
  .inSingletonScope();

AxiosGatewayModule.bind(AxiosGatewayRegistry.COMMENT)
  .to(AxiosCommentGateway)
  .inSingletonScope();

AxiosGatewayModule.bind(AxiosGatewayRegistry.LIKE)
  .to(AxiosLikeGateway)
  .inSingletonScope();

AxiosGatewayModule.bind(AxiosGatewayRegistry.FOLLOW)
  .to(AxiosFollowGateway)
  .inSingletonScope();
