import { ICommentGateway } from '@/app/modules/@core/comment/gateway/comment.gateway';
import { AxiosHTTPGateway } from '../generic/http.gateway';
import { ICreateCommentDTO } from '@/app/modules/@core/comment/DTO';

export class AxiosCommentGateway
  extends AxiosHTTPGateway
  implements ICommentGateway
{
  create(comment: ICreateCommentDTO) {
    throw new Error('Method not implemented.');
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
