import { MODULE } from '@/app/modules/app.registry';
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
import { EmitLikeCreatedUseCase } from '../use-case/observable/emit/create.use-case';
import { EmitLikeDeletedUseCase } from '../use-case/observable/emit/delete.use-case';

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
    @inject(MODULE.LIKE.USE_CASE.OBSERVABLE.EMIT.CREATE)
    private readonly emitLikeCreated: EmitLikeCreatedUseCase,
    @inject(MODULE.LIKE.USE_CASE.OBSERVABLE.EMIT.DELETE)
    private readonly emitLikeDeleted: EmitLikeDeletedUseCase,
  ) {}

  async create(like: ICreateLikeDTO) {
    console.log({ LIKECREATEDTO: like });
    const result = await this.createLike.execute(like);
    result.id &&
      this.emitLikeCreated.execute(result.toStruct(), like.isComment);
    console.log({ LIKE: result });
    return result;
  }

  async delete(like: IDeleteLikeDTO) {
    await this.deleteLike.execute(like);
    this.emitLikeDeleted.execute(like);
  }

  findByUser(like: IFindUserLikesDTO) {
    return this.finduserLikes.execute(like);
  }

  findByComment(like: IFindCommentLikesDTO) {
    return this.findCommentLikes.execute(like);
  }

  findByPost(like: IFindPostLikesDTO) {
    return this.findPostLikes.execute(like);
  }
}
