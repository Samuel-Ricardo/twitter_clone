import { MODULES } from '@/app/modules';
import { IFindPostCommentsDTO } from '@/app/modules/@core/comment/DTO';

export const usePostComment = (post: IFindPostCommentsDTO) =>
  MODULES.COMMENT.MAIN().findPostComments(post).comments;
