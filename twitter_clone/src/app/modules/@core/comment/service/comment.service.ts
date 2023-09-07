import { inject, injectable } from 'inversify';
import {
  CreateCommentUseCase,
  DeleteCommentUseCase,
  FindPostCommentsUseCase,
  FindUserCommentsUseCase,
  UpdateCommentUseCase,
} from '../use-case';
import { MODULE } from '@/app/modules/app.registry';
import {
  ICreateCommentDTO,
  IFindAuthorCommentsDTO,
  IFindPostCommentsDTO,
  IDeleteCommentDTO,
  IUpdateCommentDTO,
} from '../DTO';
import { create } from 'domain';

@injectable()
export class CommentService {
  constructor(
    @inject(MODULE.COMMENT.USE_CASE.CREATE)
    private readonly createComment: CreateCommentUseCase,
    @inject(MODULE.COMMENT.USE_CASE.DELETE)
    private readonly deleteComment: DeleteCommentUseCase,
    @inject(MODULE.COMMENT.USE_CASE.FIND.BY.POST.ID)
    private readonly findPostComments: FindPostCommentsUseCase,
    @inject(MODULE.COMMENT.USE_CASE.FIND.BY.AUTHOR.ID)
    private readonly findUserComments: FindUserCommentsUseCase,
    @inject(MODULE.COMMENT.USE_CASE.UPDATE)
    private readonly updateComment: UpdateCommentUseCase,
  ) {}

  async create(comment: ICreateCommentDTO) {
    return this.createComment.execute(comment);
  }

  async update(comment: IUpdateCommentDTO) {
    return this.updateComment.execute(comment);
  }

  async delete(comment: IDeleteCommentDTO) {
    return this.deleteComment.execute(comment);
  }

  findByPost(comment: IFindPostCommentsDTO) {
    return this.findPostComments.execute(comment);
  }

  findByAuthor(comment: IFindAuthorCommentsDTO) {
    return this.findUserComments.execute(comment);
  }
}
