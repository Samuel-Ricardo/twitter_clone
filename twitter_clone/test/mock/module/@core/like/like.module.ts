import { Container } from 'inversify';
import { LIKE_REGISTRY_MOCK } from './like.registry';
import {
  mockCreateLikeUseCase,
  mockDeleteLikeUseCase,
  mockFindPostLikesUseCase,
  mockFindUserLikesUseCase,
  mockFindCommentLikesUseCase,
} from './use-case';

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
