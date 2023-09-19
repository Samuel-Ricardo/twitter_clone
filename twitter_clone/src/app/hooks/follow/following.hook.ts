import { MODULES } from '@/app/modules';
import { IGetFollowingDTO } from '@/app/modules/@core/follow/DTO';

export const useFollowing = (user: IGetFollowingDTO) =>
  MODULES.FOLLOW.MAIN().followingOf(user);
