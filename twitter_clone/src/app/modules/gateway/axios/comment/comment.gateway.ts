import { ICommentGateway } from '@/app/modules/@core/comment/gateway/comment.gateway';
import { AxiosHTTPGateway } from '../generic/http.gateway';
import {
  ICommentDTO,
  ICreateCommentDTO,
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
  update(comment: IUpdateCommentDTO): Promise<Comment> {
    throw new Error('Method not implemented.');
  }
  delete(comment: IDeleteCommentDTO): Promise<void> {
    throw new Error('Method not implemented.');
  }
  findByPost(post: IFindPostCommentsDTO): Promise<Comment[]> {
    throw new Error('Method not implemented.');
  }
  findByauthor(author: IFindAuthorCommentsDTO): Promise<Comment[]> {
    throw new Error('Method not implemented.');
  }
}
