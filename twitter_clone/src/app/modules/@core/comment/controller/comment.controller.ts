import { MODULE } from '@/app/modules/app.registry';
import { inject, injectable, tagged } from 'inversify';
import { CommentService } from '../service/comment.service';
import {
  ICreateCommentDTO,
  IDeleteCommentDTO,
  IFindAuthorCommentsDTO,
  IFindPostCommentsDTO,
  IUpdateCommentDTO,
} from '../DTO';
import { IFindCommentByIDDTO } from '../DTO/get_by_id.dto';
import { SCOPE } from '@/app/modules/app.tag';

@injectable()
export class CommentController {
  constructor(
    @inject(MODULE.COMMENT.SERVICE)
    @tagged(SCOPE.TAG, SCOPE.MAIN)
    private readonly service: CommentService,
  ) {}

  async create(comment: ICreateCommentDTO) {
    return { comment: (await this.service.create(comment)).toStruct() };
  }

  async update(comment: IUpdateCommentDTO) {
    return { comment: (await this.service.update(comment)).toStruct() };
  }

  async delete(comment: IDeleteCommentDTO) {
    return this.service.delete(comment);
  }

  async findAsyncByID(comment: IFindCommentByIDDTO) {
    return { comment: await this.service.findByID(comment) };
  }

  findPostComments(post: IFindPostCommentsDTO) {
    return { comments: this.service.findByPost(post) };
  }

  findUserComments(post: IFindAuthorCommentsDTO) {
    return { comments: this.service.findByAuthor(post) };
  }
}
