import {
  IFindPostLikesDTO,
  ILikeDTO,
  IFindUserLikesDTO,
  IFindCommentLikesDTO,
} from '../../DTO';
import { SWRResponse } from 'swr';

export interface ISWRSupport {
  swrFindByPost(post: IFindPostLikesDTO): SWRResponse<ILikeDTO[]>;
  swrFindByUser(user: IFindUserLikesDTO): SWRResponse<ILikeDTO[]>;
  swrFindByComment(comment: IFindCommentLikesDTO): SWRResponse<ILikeDTO[]>;
}
