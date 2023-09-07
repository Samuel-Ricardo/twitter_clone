import {
  ICreateCommentDTO,
  IDeleteCommentDTO,
  IFindAuthorCommentsDTO,
  IFindPostCommentsDTO,
  IUpdateCommentDTO,
} from '../DTO';

export interface ICommentGateway {
  create(comment: ICreateCommentDTO): Promise<Comment>;
  update(comment: IUpdateCommentDTO): Promise<Comment>;
  delete(comment: IDeleteCommentDTO): Promise<void>;
  findByPost(post: IFindPostCommentsDTO): Promise<Comment[]>;
  findByauthor(author: IFindAuthorCommentsDTO): Promise<Comment[]>;
}
