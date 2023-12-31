import { DeepMockProxy } from 'jest-mock-extended';
import { POST_MODULE_MOCK } from './post.module';
import {
  CreatePostUseCase,
  DeletePostUseCase,
  FindAllPostUseCase,
  FindPostByIdUseCase,
  FindPostsByAuthorUseCase,
  UpdatePostUseCase,
} from '@/app/modules/@core/post/use-case';
import { POST_REGISTRY_MOCK } from './post.registry';
import {
  ISimulatedPostController,
  ISimulatedPostService,
} from '@test/@types/simulate/post';
import { PostController, PostService } from '@/app/modules/@core/post';
import { EmitPostUseCase } from '@/app/modules/@core/post/use-case/observable/emit/created.use-case';

export const POST_FACTORY_MOCK = {
  CONTROLLER: {
    MOCK: () =>
      POST_MODULE_MOCK.get<DeepMockProxy<PostController>>(
        POST_REGISTRY_MOCK.CONTROLLER.MOCK,
      ),
    SIMULATE: () =>
      POST_MODULE_MOCK.get<ISimulatedPostController>(
        POST_REGISTRY_MOCK.CONTROLLER.SIMULATE,
      ),
  },
  SERVICE: {
    MOCK: () =>
      POST_MODULE_MOCK.get<DeepMockProxy<PostService>>(
        POST_REGISTRY_MOCK.SERVICE.MOCK,
      ),
    SIMULATE: () =>
      POST_MODULE_MOCK.get<ISimulatedPostService>(
        POST_REGISTRY_MOCK.SERVICE.SIMULATE,
      ),
  },
  USE_CASE: {
    CREATE: () =>
      POST_MODULE_MOCK.get<DeepMockProxy<CreatePostUseCase>>(
        POST_REGISTRY_MOCK.USE_CASE.CREATE,
      ),
    UPDATE: () =>
      POST_MODULE_MOCK.get<DeepMockProxy<UpdatePostUseCase>>(
        POST_REGISTRY_MOCK.USE_CASE.UPDATE,
      ),
    DELETE: () =>
      POST_MODULE_MOCK.get<DeepMockProxy<DeletePostUseCase>>(
        POST_REGISTRY_MOCK.USE_CASE.DELETE,
      ),
    FIND: {
      ALL: () =>
        POST_MODULE_MOCK.get<DeepMockProxy<FindAllPostUseCase>>(
          POST_REGISTRY_MOCK.USE_CASE.FIND.ALL,
        ),
      BY: {
        ID: () =>
          POST_MODULE_MOCK.get<DeepMockProxy<FindPostByIdUseCase>>(
            POST_REGISTRY_MOCK.USE_CASE.FIND.BY.ID,
          ),
        AUTHOR: () =>
          POST_MODULE_MOCK.get<DeepMockProxy<FindPostsByAuthorUseCase>>(
            POST_REGISTRY_MOCK.USE_CASE.FIND.BY.AUTHOR,
          ),
      },
    },
    OBSERVABLE: {
      EMIT: {
        CREATED: () =>
          POST_MODULE_MOCK.get<DeepMockProxy<EmitPostUseCase>>(
            POST_REGISTRY_MOCK.USE_CASE.OBSERVABLE.EMIT.CREATED,
          ),
      },
    },
  },
};
