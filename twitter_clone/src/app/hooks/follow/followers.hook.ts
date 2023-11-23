import { MODULES } from '@/app/modules';
import { IGetFollowersDTO } from '@/app/modules/@core/follow/DTO';
import { useMemo } from 'react';

export const useFollowers = (user: IGetFollowersDTO) => {
  const result = MODULES.FOLLOW.MAIN().followersOf(user).followers;
  const followers = useMemo(() => result.data?.followers, [result.data]);
  return { ...result, followers };
};
