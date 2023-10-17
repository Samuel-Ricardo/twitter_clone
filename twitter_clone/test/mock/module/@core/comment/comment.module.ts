import { Container } from 'inversify';
import { COMMENT_REGISTRY_MOCK } from './comment.registry';
import {
  mockCreateCommentUseCase,
  mockDeleteCommentUseCase,
  mockUpdateCommentUseCase,
  mockFindpostCommentsUseCase,
  mockDeepFindUserCommentsUseCase,
} from './use-case';
import {
  mockCommentService,
  simulateCommentService,
} from './service/comment.service';
import {
  mockCommentController,
  simulateCommentController,
} from './controller/comment.controller';
import { mockEmitCommentUseCase } from './use-case/observable/emit/created.use-case';

export const COMMENT_MODULE_MOCK = new Container({ autoBindInjectable: true });

COMMENT_MODULE_MOCK.bind(COMMENT_REGISTRY_MOCK.USE_CASE.CREATE).toDynamicValue(
  mockCreateCommentUseCase,
);
COMMENT_MODULE_MOCK.bind(COMMENT_REGISTRY_MOCK.USE_CASE.DELETE).toDynamicValue(
  mockDeleteCommentUseCase,
);
COMMENT_MODULE_MOCK.bind(COMMENT_REGISTRY_MOCK.USE_CASE.UPDATE).toDynamicValue(
  mockUpdateCommentUseCase,
);
COMMENT_MODULE_MOCK.bind(
  COMMENT_REGISTRY_MOCK.USE_CASE.FIND.BY.POST,
).toDynamicValue(mockFindpostCommentsUseCase);
COMMENT_MODULE_MOCK.bind(
  COMMENT_REGISTRY_MOCK.USE_CASE.FIND.BY.AUTHOR,
).toDynamicValue(mockDeepFindUserCommentsUseCase);
COMMENT_MODULE_MOCK.bind(
  COMMENT_REGISTRY_MOCK.USE_CASE.OBSERVABLE.EMIT.CREATED,
).toDynamicValue(mockEmitCommentUseCase);
COMMENT_MODULE_MOCK.bind(
  COMMENT_REGISTRY_MOCK.USE_CASE.OBSERVABLE.LISTEN.CREATED,
).toDynamicValue(mockEmitCommentUseCase);

COMMENT_MODULE_MOCK.bind(COMMENT_REGISTRY_MOCK.SERVICE.MOCK).toDynamicValue(
  mockCommentService,
);

COMMENT_MODULE_MOCK.bind(COMMENT_REGISTRY_MOCK.SERVICE.SIMULATE).toDynamicValue(
  simulateCommentService,
);

COMMENT_MODULE_MOCK.bind(COMMENT_REGISTRY_MOCK.CONTROLLER.MOCK).toDynamicValue(
  mockCommentController,
);

COMMENT_MODULE_MOCK.bind(
  COMMENT_REGISTRY_MOCK.CONTROLLER.SIMULATE,
).toDynamicValue(simulateCommentController);
