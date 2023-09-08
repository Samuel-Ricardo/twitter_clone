import { MODULE } from '@/app/modules';
import { inject, injectable } from 'inversify';
import {
  CreateLikeUseCase,
  DeleteLikeUseCase,
  FinduserLikesUseCase,
  FindCommentLikesUseCase,
  FindPostLikesUseCase,
} from '../use-case';
import {
  ICreateLikeDTO,
  IDeleteLikeDTO,
  IFindUserLikesDTO,
  IFindPostLikesDTO,
  IFindCommentLikesDTO,
} from '../DTO';

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

  async create(like: ICreateLikeDTO) {
    return await this.createLike.execute(like);
  }
}
