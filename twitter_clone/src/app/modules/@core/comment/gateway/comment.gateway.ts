import {
  ICreateCommentDTO,
  IDeleteCommentDTO,
  IFindAuthorCommentsDTO,
  IFindPostCommentsDTO,
  IUpdateCommentDTO,
} from '../DTO';
import { ISWRSupport } from './support/swr.support';

export interface ICommentGateway extends ISWRSupport {
  create(comment: ICreateCommentDTO): Promise<Comment>;
  update(comment: IUpdateCommentDTO): Promise<Comment>;
  delete(comment: IDeleteCommentDTO): Promise<void>;
  findByPost(post: IFindPostCommentsDTO): Promise<Comment[]>;
  findByauthor(author: IFindAuthorCommentsDTO): Promise<Comment[]>;
}
