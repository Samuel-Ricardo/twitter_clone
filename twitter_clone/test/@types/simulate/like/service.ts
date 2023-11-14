import { LikeService } from '@/app/modules/@core/like/service';
import {
  CreateLikeUseCase,
  DeleteLikeUseCase,
  FindCommentLikesUseCase,
  FindPostLikesUseCase,
  FinduserLikesUseCase,
} from '@/app/modules/@core/like/use-case';
import { EmitLikeCreatedUseCase } from '@/app/modules/@core/like/use-case/observable/emit/create.use-case';
import { EmitLikeDeletedUseCase } from '@/app/modules/@core/like/use-case/observable/emit/delete.use-case';
import { DeepMockProxy } from 'jest-mock-extended';

export interface ISimulatedLikeService {
  service: LikeService;
  use_case: {
    create: DeepMockProxy<CreateLikeUseCase>;
    deleteLike: DeepMockProxy<DeleteLikeUseCase>;
    find: {
      by: {
        post: DeepMockProxy<FindPostLikesUseCase>;
        user: DeepMockProxy<FinduserLikesUseCase>;
        comment: DeepMockProxy<FindCommentLikesUseCase>;
      };
    };
    observable: {
      emit: {
        created: DeepMockProxy<EmitLikeCreatedUseCase>;
        deleted: DeepMockProxy<EmitLikeDeletedUseCase>;
      };
    };
  };
}
