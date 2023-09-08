import {
  ICreateLikeDTO,
  IFindCommentLikesDTO,
  IFindPostLikesDTO,
  IDeleteLikeDTO,
  IFindUserLikesDTO,
} from '../DTO';
import { Like } from '../entity';

export interface ICommentGateway extends Like {
  readonly prefix: string;

  get fullURL(): string;

  create(like: ICreateLikeDTO): Promise<Like>;
  deleteLike(like: IDeleteLikeDTO): Promise<Like>;
  findCommentLikes(like: IFindCommentLikesDTO): Promise<Like[]>;
  findPostLikes(like: IFindPostLikesDTO): Promise<Like[]>;
  findUserLikes(like: IFindUserLikesDTO): Promise<Like[]>;
}
