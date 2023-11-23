import { MODULES } from '@/app/modules';
import { IGetFollowingDTO } from '@/app/modules/@core/follow/DTO';
import { useMemo } from 'react';

export const useFollowing = (user: IGetFollowingDTO) => {
  const result = MODULES.FOLLOW.MAIN().followingOf(user).following;
  const following = useMemo(() => result.data?.following, [result.data]);
  return { ...result, following };
};
