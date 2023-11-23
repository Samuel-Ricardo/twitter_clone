import {
  IFindPostLikesDTO,
  ILikeDTO,
  IFindUserLikesDTO,
  IFindCommentLikesDTO,
} from '../../DTO';
import { SWRResponse } from 'swr';

export interface ISWRSupport {
  swrFindPostLikes(post: IFindPostLikesDTO): SWRResponse<{ likes: ILikeDTO[] }>;
  swrFindUserLikes(user: IFindUserLikesDTO): SWRResponse<{ liked: ILikeDTO[] }>;
  swrFindCommentLikes(
    comment: IFindCommentLikesDTO,
  ): SWRResponse<{ likes: ILikeDTO[] }>;
}
