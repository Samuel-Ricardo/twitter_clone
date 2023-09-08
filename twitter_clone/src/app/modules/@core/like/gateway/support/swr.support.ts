import {
  IFindPostLikesDTO,
  ILikeDTO,
  IFindUserLikesDTO,
  IFindCommentLikesDTO,
} from '../../DTO';
import { SWRResponse } from 'swr';

export interface ISWRSupport {
  swrFindPostLikes(post: IFindPostLikesDTO): SWRResponse<ILikeDTO[]>;
  swrFindUserLikes(user: IFindUserLikesDTO): SWRResponse<ILikeDTO[]>;
  swrFindCommentLikes(comment: IFindCommentLikesDTO): SWRResponse<ILikeDTO[]>;
}
