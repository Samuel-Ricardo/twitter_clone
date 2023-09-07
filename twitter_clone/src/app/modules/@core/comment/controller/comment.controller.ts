import { MODULE } from '@/app/modules/app.registry';
import { inject, injectable } from 'inversify';
import { CommentService } from '../service/comment.service';
import {
  ICreateCommentDTO,
  IDeleteCommentDTO,
  IUpdateCommentDTO,
} from '../DTO';

@injectable()
export class CommentController {
  constructor(
    @inject(MODULE.COMMENT.SERVICE)
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
}
