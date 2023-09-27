import { MODULES } from '@/app/modules';
import { IDeleteLikeDTO } from '@/app/modules/@core/like/DTO';
import { useMutation } from '@tanstack/react-query';
import { toast } from 'react-hot-toast';

export const useDislike = () => {
  const MODULE = MODULES.LIKE.MAIN();

  const {
    data,
    mutate: dislike,
    mutateAsync: dislikeAsync,
    isLoading,
    error,
  } = useMutation<any, any, IDeleteLikeDTO>({
    mutationFn: async (DTO) =>
      await toast.promise(MODULE.dislike(DTO), {
        loading: `Deleting like... 💌`,
        success: `Dislike ❤️`,
        error: `Failed on dislike 💔 :(`,
      }),
    mutationKey: ['like', 'delete'],
  });

  return {
    data,
    dislike,
    dislikeAsync,
    isLoading,
    error,
  };
};
