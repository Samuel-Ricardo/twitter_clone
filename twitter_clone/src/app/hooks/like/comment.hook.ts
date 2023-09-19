import { MODULES } from '@/app/modules';
import { IFindCommentLikesDTO } from '@/app/modules/@core/like/DTO';

export const useCommentLikes = (comment: IFindCommentLikesDTO) =>
  MODULES.LIKE.MAIN().getCommentLikes(comment).likes;
