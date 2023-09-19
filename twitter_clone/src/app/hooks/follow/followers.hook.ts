import { MODULES } from '@/app/modules';
import { IGetFollowersDTO } from '@/app/modules/@core/follow/DTO';

export const useFollowers = (user: IGetFollowersDTO) =>
  MODULES.FOLLOW.MAIN().followersOf(user).followers;
