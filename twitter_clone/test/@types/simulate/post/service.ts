import {
  CreatePostUseCase,
  DeletePostUseCase,
  FindAllPostUseCase,
  FindPostByIdUseCase,
  FindPostsByAuthorUseCase,
  PostService,
  UpdatePostUseCase,
} from '@/app/modules/@core/post';
import { EmitPostUseCase } from '@/app/modules/@core/post/use-case/observable/emit/created.use-case';
import { DeepMockProxy } from 'jest-mock-extended';

export interface ISimulatedPostService {
  service: PostService;
  use_case: {
    create: DeepMockProxy<CreatePostUseCase>;
    update: DeepMockProxy<UpdatePostUseCase>;
    deletePost: DeepMockProxy<DeletePostUseCase>;
    find: {
      all: DeepMockProxy<FindAllPostUseCase>;
      by: {
        id: DeepMockProxy<FindPostByIdUseCase>;
        author: DeepMockProxy<FindPostsByAuthorUseCase>;
      };
    };
    observable: {
      emit: {
        created: DeepMockProxy<EmitPostUseCase>;
      };
    };
  };
}
