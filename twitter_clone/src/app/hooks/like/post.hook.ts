import { MODULES } from '@/app/modules';
import { IFindPostLikesDTO } from '@/app/modules/@core/like/DTO';

export const useTweetLikes = (tweet: IFindPostLikesDTO) =>
  MODULES.LIKE.MAIN().getTweetLikes(tweet).likes;
