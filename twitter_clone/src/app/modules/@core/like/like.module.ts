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
import { LikeService } from './service';
import { LikeController } from './controller';
import { EmitLikeCreatedUseCase } from './use-case/observable/emit/create.use-case';
import { EmitLikeDeletedUseCase } from './use-case/observable/emit/delete.use-case';
import { ListenPostLikeUseCase } from './use-case/observable/listen/post/created.use-case';
import { ListenPostDislikeUseCase } from './use-case/observable/listen/post/deleted.use-case';
import { ListenCommentLikeUseCase } from './use-case/observable/listen/comment/created.use-case';
import { ListenCommentDislikeUseCase } from './use-case/observable/listen/comment/deleted.use-case';
import { ReactiveLikeService } from './service/reactive/like.service';
import { ReactiveLikeController } from './controller/reactive/like.controller';
import { SCOPE } from '../../app.tag';
import { OBSERVABLE_MODULE } from '../../observable/observable.module';

import getDecorators from 'inversify-inject-decorators';

const MODULE = new Container({ autoBindInjectable: true });

export const LIKE_MODULE = Container.merge(
  MODULE,
  OBSERVABLE_MODULE,
  GatewayModule,
);

LIKE_MODULE.bind(LIKE_REGISTRY.USE_CASE.CREATE).to(CreateLikeUseCase);
LIKE_MODULE.bind(LIKE_REGISTRY.USE_CASE.DELETE).to(DeleteLikeUseCase);
LIKE_MODULE.bind(LIKE_REGISTRY.USE_CASE.FIND.BY.POST).to(FindPostLikesUseCase);
LIKE_MODULE.bind(LIKE_REGISTRY.USE_CASE.FIND.BY.USER).to(FinduserLikesUseCase);
LIKE_MODULE.bind(LIKE_REGISTRY.USE_CASE.FIND.BY.COMMENT).to(
  FindCommentLikesUseCase,
);
LIKE_MODULE.bind(LIKE_REGISTRY.USE_CASE.OBSERVABLE.EMIT.CREATE).to(
  EmitLikeCreatedUseCase,
);
LIKE_MODULE.bind(LIKE_REGISTRY.USE_CASE.OBSERVABLE.EMIT.DELETE).to(
  EmitLikeDeletedUseCase,
);

LIKE_MODULE.bind(LIKE_REGISTRY.USE_CASE.OBSERVABLE.LISTEN.POST.CREATED).to(
  ListenPostLikeUseCase,
);
LIKE_MODULE.bind(LIKE_REGISTRY.USE_CASE.OBSERVABLE.LISTEN.POST.DELETED).to(
  ListenPostDislikeUseCase,
);

LIKE_MODULE.bind(LIKE_REGISTRY.USE_CASE.OBSERVABLE.LISTEN.COMMENT.CREATED).to(
  ListenCommentLikeUseCase,
);

LIKE_MODULE.bind(LIKE_REGISTRY.USE_CASE.OBSERVABLE.LISTEN.COMMENT.DELETED).to(
  ListenCommentDislikeUseCase,
);

LIKE_MODULE.bind(LIKE_REGISTRY.SERVICE)
  .to(LikeService)
  .whenTargetTagged(SCOPE.TAG, SCOPE.MAIN);

LIKE_MODULE.bind(LIKE_REGISTRY.SERVICE)
  .to(ReactiveLikeService)
  .inSingletonScope()
  .whenTargetTagged(SCOPE.TAG, SCOPE.REACTIVE);

LIKE_MODULE.bind(LIKE_REGISTRY.CONTROLLER)
  .to(LikeController)
  .whenTargetTagged(SCOPE.TAG, SCOPE.MAIN);

LIKE_MODULE.bind(LIKE_REGISTRY.MAIN).to(LikeController);
LIKE_MODULE.bind(LIKE_REGISTRY.REACTIVE)
  .to(ReactiveLikeController)
  .inSingletonScope();

export const { lazyInject } = getDecorators(LIKE_MODULE);
