import {
  ICreateCommentDTO,
  IDeleteCommentDTO,
  IFindAuthorCommentsDTO,
  IFindPostCommentsDTO,
  IUpdateCommentDTO,
} from '../DTO';
import { IFindCommentByIDDTO } from '../DTO/get_by_id.dto';
import { Comment } from '../entity';
import { ISWRSupport } from './support/swr.support';

export interface ICommentGateway extends ISWRSupport {
  create(comment: ICreateCommentDTO): Promise<Comment>;
  update(comment: IUpdateCommentDTO): Promise<Comment>;
  deleteComment(comment: IDeleteCommentDTO): Promise<void>;
  findByPost(post: IFindPostCommentsDTO): Promise<Comment[]>;
  findByauthor(author: IFindAuthorCommentsDTO): Promise<Comment[]>;
  findById(comment: IFindCommentByIDDTO): Promise<Comment>;
}
