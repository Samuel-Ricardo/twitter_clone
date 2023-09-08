import { MODULE } from '@/app/modules';
import { inject, injectable } from 'inversify';
import {
  CreateLikeUseCase,
  DeleteLikeUseCase,
  FinduserLikesUseCase,
  FindCommentLikesUseCase,
  FindPostLikesUseCase,
} from '../use-case';

@injectable()
export class LikeService {
  constructor(
    @inject(MODULE.LIKE.USE_CASE.CREATE)
    private readonly createLike: CreateLikeUseCase,
    @inject(MODULE.LIKE.USE_CASE.DELETE)
    private readonly deleteLike: DeleteLikeUseCase,
    @inject(MODULE.LIKE.USE_CASE.FIND.BY.USER)
    private readonly finduserLikes: FinduserLikesUseCase,
    @inject(MODULE.LIKE.USE_CASE.FIND.BY.COMMENT)
    private readonly findCommentLikes: FindCommentLikesUseCase,
    @inject(MODULE.LIKE.USE_CASE.FIND.BY.POST)
    private readonly findPostLikes: FindPostLikesUseCase,
  ) {}
}
