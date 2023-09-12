import {
  ICreateLikeDTO,
  IFindCommentLikesDTO,
  IFindPostLikesDTO,
  IDeleteLikeDTO,
  IFindUserLikesDTO,
} from '../DTO';
import { Like } from '../entity';
import { ISWRSupport } from './support/swr.support';

export interface ILikeGateway extends ISWRSupport {
  readonly prefix: string;

  get fullURL(): string;

  create(like: ICreateLikeDTO): Promise<Like>;
  deleteLike(like: IDeleteLikeDTO): Promise<void>;
  findCommentLikes(like: IFindCommentLikesDTO): Promise<Like[]>;
  findPostLikes(like: IFindPostLikesDTO): Promise<Like[]>;
  findUserLikes(like: IFindUserLikesDTO): Promise<Like[]>;
}
