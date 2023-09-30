import { MODULES } from '@/app/modules';
import { IFindPostCommentsDTO } from '@/app/modules/@core/comment/DTO';
import { useMemo } from 'react';

export const useTweetComments = (post: IFindPostCommentsDTO) => {
  const result = MODULES.COMMENT.MAIN().findPostComments(post).comments;
  const comments = useMemo(() => result?.data?.comments || [], [result]);
  return { ...result, comments };
};
