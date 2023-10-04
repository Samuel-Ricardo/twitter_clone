import { MODULES } from '@/app/modules';
import { ICreateFollowDTO, IFollowDTO } from '@/app/modules/@core/follow/DTO';
import { useMutation } from '@tanstack/react-query';
import { toast } from 'react-hot-toast';

export const useFollow = () => {
  const {
    data: followRelationship,
    error,
    mutate: follow,
    mutateAsync: followAsync,
    isLoading,
    status,
  } = useMutation<IFollowDTO, Error, ICreateFollowDTO>({
    mutationFn: async (DTO) =>
      (
        await toast.promise(MODULES.FOLLOW.MAIN().follow(DTO), {
          loading: `Creating follow... 💌`,
          success: `User Followed 👌`,
          error: `Failed on follow 👎 :(`,
        })
      ).follow,
    mutationKey: ['create', 'follow'],
  });

  return {
    follow,
    followAsync,
    followRelationship,
    error,
    isLoading,
    status,
  };
};
