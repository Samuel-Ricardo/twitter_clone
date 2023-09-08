import { Container } from 'inversify';
import { GatewayModule } from '../../gateway/gateway.module';
import { LIKE_REGISTRY } from './like.registry';
import {
  CreateLikeUseCase,
  DeleteLikeUseCase,
  FindPostLikesUseCase,
  FinduserLikesUseCase,
  FindCommentLikesUseCase,
} from './use-case';

const MODULE = new Container({ autoBindInjectable: true });

export const LIKE_MODULE = Container.merge(MODULE, GatewayModule);

LIKE_MODULE.bind(LIKE_REGISTRY.USE_CASE.CREATE).to(CreateLikeUseCase);
LIKE_MODULE.bind(LIKE_REGISTRY.USE_CASE.DELETE).to(DeleteLikeUseCase);
LIKE_MODULE.bind(LIKE_REGISTRY.USE_CASE.FIND.BY.POST).to(FindPostLikesUseCase);
LIKE_MODULE.bind(LIKE_REGISTRY.USE_CASE.FIND.BY.USER).to(FinduserLikesUseCase);
LIKE_MODULE.bind(LIKE_REGISTRY.USE_CASE.FIND.BY.COMMENT).to(
  FindCommentLikesUseCase,
);
