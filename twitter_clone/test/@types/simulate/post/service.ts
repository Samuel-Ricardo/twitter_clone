import {
  CreatePostUseCase,
  DeletePostUseCase,
  FindAllPostUseCase,
  FindPostByIdUseCase,
  FindPostsByAuthorUseCase,
  PostService,
  UpdatePostUseCase,
} from '@/app/modules/@core/post';

export interface ISimulatedPostService {
  service: PostService;
  use_case: {
    create: CreatePostUseCase;
    update: UpdatePostUseCase;
    deletePost: DeletePostUseCase;
    find: {
      all: FindAllPostUseCase;
      by: {
        id: FindPostByIdUseCase;
        author: FindPostsByAuthorUseCase;
      };
    };
  };
}
