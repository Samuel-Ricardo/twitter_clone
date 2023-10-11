import { Container } from 'inversify';
import { GatewayModule } from '../../gateway/gateway.module';
import {
  CreateCommentUseCase,
  DeleteCommentUseCase,
  UpdateCommentUseCase,
  FindPostCommentsUseCase,
  FindUserCommentsUseCase,
} from './use-case';
import { COMMENT_REGISTRY } from './comment.registry';
import { CommentService } from './service/comment.service';
import { CommentController } from './controller/comment.controller';
import { FindCommentByIDUseCase } from './use-case/find_by_id.use-case';
import { EmitCommentUseCase } from './use-case/observable/emit/created.use-case';
import { ListenCommentUseCase } from './use-case/observable/listen/created.use-case';
import { ReactiveCommentService } from './service/reactive/comment.service';
import { SCOPE } from '../../app.tag';
import { ReactiveCommentController } from './controller/reactive/comment.controller';

const MODULE = new Container({ autoBindInjectable: true });

export const COMMENT_MODULE = Container.merge(MODULE, GatewayModule);

COMMENT_MODULE.bind(COMMENT_REGISTRY.USE_CASE.CREATE).to(CreateCommentUseCase);

COMMENT_MODULE.bind(COMMENT_REGISTRY.USE_CASE.DELETE).to(DeleteCommentUseCase);
COMMENT_MODULE.bind(COMMENT_REGISTRY.USE_CASE.UPDATE).to(UpdateCommentUseCase);
COMMENT_MODULE.bind(COMMENT_REGISTRY.USE_CASE.FIND.BY.POST.ID).to(
  FindPostCommentsUseCase,
);
COMMENT_MODULE.bind(COMMENT_REGISTRY.USE_CASE.FIND.BY.AUTHOR.ID).to(
  FindUserCommentsUseCase,
);
COMMENT_MODULE.bind(COMMENT_REGISTRY.USE_CASE.FIND.BY.ID).to(
  FindCommentByIDUseCase,
);

COMMENT_MODULE.bind(COMMENT_REGISTRY.USE_CASE.OBSERVABLE.LISTEN.CREATED).to(
  ListenCommentUseCase,
);
COMMENT_MODULE.bind(COMMENT_REGISTRY.USE_CASE.OBSERVABLE.EMIT.CREATED).to(
  EmitCommentUseCase,
);

COMMENT_MODULE.bind(COMMENT_REGISTRY.SERVICE)
  .to(CommentService)
  .whenTargetTagged(SCOPE.TAG, SCOPE.MAIN);
COMMENT_MODULE.bind(COMMENT_REGISTRY.CONTROLLER)
  .to(CommentController)
  .whenTargetTagged(SCOPE.TAG, SCOPE.MAIN);

COMMENT_MODULE.bind(COMMENT_REGISTRY.MAIN).to(CommentController);

COMMENT_MODULE.bind(COMMENT_REGISTRY.SERVICE)
  .to(ReactiveCommentService)
  .whenTargetTagged(SCOPE.TAG, SCOPE.REACTIVE);
COMMENT_MODULE.bind(COMMENT_REGISTRY.CONTROLLER)
  .to(ReactiveCommentController)
  .whenTargetTagged(SCOPE.TAG, SCOPE.REACTIVE);

COMMENT_MODULE.bind(COMMENT_REGISTRY.REACTIVE).to(ReactiveCommentController);
