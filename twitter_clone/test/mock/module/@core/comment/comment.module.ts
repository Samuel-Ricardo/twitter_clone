import { Container } from 'inversify';
import { COMMENT_REGISTRY_MOCK } from './comment.registry';
import {
  mockCreateCommentUseCase,
  mockDeleteCommentUseCase,
  mockUpdateCommentUseCase,
  mockFindpostCommentsUseCase,
  mockDeepFindUserCommentsUseCase,
} from './use-case';

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
