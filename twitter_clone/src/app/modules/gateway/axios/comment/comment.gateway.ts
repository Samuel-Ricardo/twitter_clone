import { ICommentGateway } from '@/app/modules/@core/comment/gateway/comment.gateway';
import { AxiosHTTPGateway } from '../generic/http.gateway';
import {
  ICommentDTO,
  ICreateCommentDTO,
  IDeleteCommentDTO,
  IFindAuthorCommentsDTO,
  IFindPostCommentsDTO,
  IUpdateCommentDTO,
} from '@/app/modules/@core/comment/DTO';
import { injectable } from 'inversify';
import { Comment } from '@/app/modules/@core/comment/entity';

@injectable()
export class AxiosCommentGateway
  extends AxiosHTTPGateway
  implements ICommentGateway
{
  readonly prefix = 'comments';

  async create(comment: ICreateCommentDTO) {
    const result = await this.post<{ comment: ICommentDTO }>(
      this.prefix,
      comment,
    );

    return Comment.create(result.data.comment);
  }

  async update(comment: IUpdateCommentDTO) {
    const result = await this.patch<{ comment: ICommentDTO }>(
      this.prefix,
      comment,
    );

    return Comment.create(result.data.comment);
  }

  async deleteComment(comment: IDeleteCommentDTO) {
    await this.delete(`${this.prefix}/${comment.id}`);
    // throw error
    // or
    // if (status !== 204) events.emit('delete.error', ...data)
  }

  async findByPost({ postId }: IFindPostCommentsDTO) {
    const result = await this.get<{ comments: ICommentDTO[] }>(
      `${this.prefix}/post/${postId}`,
    );

    return Comment.createArray(result.data.comments);
  }

  async findByauthor({ authorId }: IFindAuthorCommentsDTO) {
    const result = await this.get<{ comments: ICommentDTO[] }>(
      `${this.prefix}/author/${authorId}`,
    );

    return Comment.createArray(result.data.comments);
  }
}
