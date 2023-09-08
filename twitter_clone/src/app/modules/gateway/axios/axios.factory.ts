import { AxiosGatewayModule } from './axios.module';
import { AxiosGatewayRegistry } from './axios.registry';
import { AxiosCommentGateway } from './comment/comment.gateway';
import { AxiosHTTPGateway } from './generic/http.gateway';
import { AxiosLikeGateway } from './like/like.gateway';
import { AxiosPostGateway } from './post/post.gateway';
import { AxiosUserGateway } from './user/user.gateway';

export const AxiosGatewayFactory = {
  GENERIC: {
    HTTP: () =>
      AxiosGatewayModule.get<AxiosHTTPGateway>(
        AxiosGatewayRegistry.GENERIC.HTTP,
      ),
  },
  USER: () =>
    AxiosGatewayModule.get<AxiosUserGateway>(AxiosGatewayRegistry.USER),
  POST: () =>
    AxiosGatewayModule.get<AxiosPostGateway>(AxiosGatewayRegistry.POST),
  COMMENT: () =>
    AxiosGatewayModule.get<AxiosCommentGateway>(AxiosGatewayRegistry.COMMENT),
  LIKE: () =>
    AxiosGatewayModule.get<AxiosLikeGateway>(AxiosGatewayRegistry.LIKE),
};
