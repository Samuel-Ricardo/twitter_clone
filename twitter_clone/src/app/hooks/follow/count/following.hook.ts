import { MODULES } from '@/app/modules';
import { ICountFollowingDTO } from '@/app/modules/@core/follow/DTO';
import { useMemo } from 'react';

export const useCountFollowing = (user: ICountFollowingDTO) => {
  const result = MODULES.FOLLOW.MAIN().countFollowingOf(user).following;
  const following = useMemo(() => result.data?.following, [result]);
  return { ...result, following };
};
