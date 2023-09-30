import { MODULES } from '@/app/modules';
import { IFindPostLikesDTO } from '@/app/modules/@core/like/DTO';
import { useMemo } from 'react';

export const useTweetLikes = (tweet: IFindPostLikesDTO) => {
  const result = MODULES.LIKE.MAIN().getTweetLikes(tweet).likes;
  const likes = useMemo(() => result?.data?.likes || [], [result]);
  return { ...result, likes };
};
