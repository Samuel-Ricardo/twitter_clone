import { Container } from 'inversify';
import { POST_REGISTRY_MOCK } from './post.registry';
import { mockCreatUserUseCase } from '../user/use-case';
import { mockUpdatePostUseCase } from './use-case/update.use-case';
import { mockDeletePostUseCase } from './use-case/delete.use-case';
import { mockFindAllPostUseCase } from './use-case/find_all.use-case';
import { mockFindPostById } from './use-case/find_by_id.use-case';
import { mockFindPostByAuthorUseCase } from './use-case/find_by_author.use-case';
import { mockPostService, simulatePostService } from './service/post.service';
import {
  mockPostController,
  simulatePostController,
} from './controller/post.controller';
import { mockEmitPostUseCase } from './use-case/observable/emit/created.use-case';

export const POST_MODULE_MOCK = new Container({ autoBindInjectable: true });

POST_MODULE_MOCK.bind(POST_REGISTRY_MOCK.USE_CASE.CREATE).toDynamicValue(
  mockCreatUserUseCase,
);

POST_MODULE_MOCK.bind(POST_REGISTRY_MOCK.USE_CASE.UPDATE).toDynamicValue(
  mockUpdatePostUseCase,
);

POST_MODULE_MOCK.bind(POST_REGISTRY_MOCK.USE_CASE.DELETE).toDynamicValue(
  mockDeletePostUseCase,
);

POST_MODULE_MOCK.bind(POST_REGISTRY_MOCK.USE_CASE.FIND.ALL).toDynamicValue(
  mockFindAllPostUseCase,
);

POST_MODULE_MOCK.bind(POST_REGISTRY_MOCK.USE_CASE.FIND.BY.ID).toDynamicValue(
  mockFindPostById,
);

POST_MODULE_MOCK.bind(
  POST_REGISTRY_MOCK.USE_CASE.FIND.BY.AUTHOR,
).toDynamicValue(mockFindPostByAuthorUseCase);

POST_MODULE_MOCK.bind(
  POST_REGISTRY_MOCK.USE_CASE.OBSERVABLE.EMIT.CREATED,
).toDynamicValue(mockEmitPostUseCase);

POST_MODULE_MOCK.bind(POST_REGISTRY_MOCK.SERVICE.MOCK).toDynamicValue(
  mockPostService,
);

POST_MODULE_MOCK.bind(POST_REGISTRY_MOCK.SERVICE.SIMULATE).toDynamicValue(
  simulatePostService,
);

POST_MODULE_MOCK.bind(POST_REGISTRY_MOCK.CONTROLLER.MOCK).toDynamicValue(
  mockPostController,
);

POST_MODULE_MOCK.bind(POST_REGISTRY_MOCK.CONTROLLER.SIMULATE).toDynamicValue(
  simulatePostController,
);
