import { ICommentGateway } from '@/app/modules/@core/comment/gateway/comment.gateway';
import { AxiosHTTPGateway } from '../generic/http.gateway';
import {
  ICommentDTO,
  ICreateCommentDTO,
  IDeleteCommentDTO,
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
    // if (status !== 204) events.emit('delete.error', ...data)
  }

  async findByPost({ postId }: IFindPostCommentsDTO) {
    const result = await this.get<{ comments: ICommentDTO[] }>(
      `${this.prefix}/${postId}`,
    );

    return Comment.createArray(result.data.comments);
  }

  findByauthor(author: IFindAuthorCommentsDTO): Promise<Comment[]> {
    throw new Error('Method not implemented.');
  }
}
