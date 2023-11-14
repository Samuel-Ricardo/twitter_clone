import { Container } from 'inversify';
import { LIKE_REGISTRY_MOCK } from './like.registry';
import {
  mockCreateLikeUseCase,
  mockDeleteLikeUseCase,
  mockFindPostLikesUseCase,
  mockFindUserLikesUseCase,
  mockFindCommentLikesUseCase,
  mockEmitLikeCreatedUseCase,
  mockEmitLikeDeletedUseCase,
} from './use-case';
import { mockLikeService, simulateLikeService } from './service';
import { mockLikeController, simulateLikeController } from './controller';

export const LIKE_MODULE_MOCK = new Container({ autoBindInjectable: true });

LIKE_MODULE_MOCK.bind(LIKE_REGISTRY_MOCK.USE_CASE.CREATE).toDynamicValue(
  mockCreateLikeUseCase,
);

LIKE_MODULE_MOCK.bind(LIKE_REGISTRY_MOCK.USE_CASE.DELETE).toDynamicValue(
  mockDeleteLikeUseCase,
);

LIKE_MODULE_MOCK.bind(LIKE_REGISTRY_MOCK.USE_CASE.FIND.BY.POST).toDynamicValue(
  mockFindPostLikesUseCase,
);

LIKE_MODULE_MOCK.bind(LIKE_REGISTRY_MOCK.USE_CASE.FIND.BY.USER).toDynamicValue(
  mockFindUserLikesUseCase,
);

LIKE_MODULE_MOCK.bind(
  LIKE_REGISTRY_MOCK.USE_CASE.FIND.BY.COMMENT,
).toDynamicValue(mockFindCommentLikesUseCase);

LIKE_MODULE_MOCK.bind(
  LIKE_REGISTRY_MOCK.USE_CASE.OBSERVABLE.EMIT.CREATED,
).toDynamicValue(mockEmitLikeCreatedUseCase);

LIKE_MODULE_MOCK.bind(
  LIKE_REGISTRY_MOCK.USE_CASE.OBSERVABLE.EMIT.DELETED,
).toDynamicValue(mockEmitLikeDeletedUseCase);

LIKE_MODULE_MOCK.bind(LIKE_REGISTRY_MOCK.SERVICE.MOCK).toDynamicValue(
  mockLikeService,
);

LIKE_MODULE_MOCK.bind(LIKE_REGISTRY_MOCK.SERVICE.SIMULATE).toDynamicValue(
  simulateLikeService,
);

LIKE_MODULE_MOCK.bind(LIKE_REGISTRY_MOCK.CONTROLLER.MOCK).toDynamicValue(
  mockLikeController,
);

LIKE_MODULE_MOCK.bind(LIKE_REGISTRY_MOCK.CONTROLLER.SIMULATE).toDynamicValue(
  simulateLikeController,
);
