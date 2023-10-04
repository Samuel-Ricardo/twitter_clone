import { MODULES } from '@/app/modules';
import { IDeleteFollowDTO } from '@/app/modules/@core/follow/DTO';
import { useMutation } from '@tanstack/react-query';
import { toast } from 'react-hot-toast';

export const useUnfollow = () => {
  const {
    data,
    mutate: unfollow,
    mutateAsync: unfollowAsync,
    isLoading,
    error,
  } = useMutation<any, Error, IDeleteFollowDTO>({
    mutationFn: async (DTO) =>
      await toast.promise(MODULES.FOLLOW.MAIN().unfollow(DTO), {
        loading: `Deleting follow... 💌`,
        success: `User Unfollowed 👌`,
        error: `Failed on unfollow 👎 :(`,
      }),
    mutationKey: ['delete', 'follow', 'unfollow'],
  });

  return {
    data,
    unfollow,
    unfollowAsync,
    isLoading,
    error,
  };
};
