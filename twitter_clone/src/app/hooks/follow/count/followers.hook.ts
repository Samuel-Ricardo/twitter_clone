import { MODULES } from '@/app/modules';
import { ICountFollowersDTO } from '@/app/modules/@core/follow/DTO';
import { useMemo } from 'react';

export const useCountFollowers = (user: ICountFollowersDTO) => {
  const { followers: result } = MODULES.FOLLOW.MAIN().countFollowersOf(user);
  const followers = useMemo(() => result.data?.followers, [result]);
  return { ...result, followers };
};
