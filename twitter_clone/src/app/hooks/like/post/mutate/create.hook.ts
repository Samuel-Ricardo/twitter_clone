import { MODULES } from '@/app/modules';
import {
  ICreateLikeDTO,
  IDeleteLikeDTO,
  ILikeDTO,
} from '@/app/modules/@core/like/DTO';
import { useMutation } from '@tanstack/react-query';
import { toast } from 'react-hot-toast';

export const useLike = () => {
  const MODULE = MODULES.LIKE.MAIN();

  const {
    data,
    mutate: giveLike,
    mutateAsync: giveLikeAsync,
    isLoading,
    error,
  } = useMutation<{ like: ILikeDTO }, any, ICreateLikeDTO>({
    mutationFn: async (DTO) =>
      await toast.promise(MODULE.create(DTO), {
        loading: `Givin like... 💌`,
        success: `Liked ❤️`,
        error: `Failed on like 💔 :(`,
      }),
    mutationKey: ['like', 'create'],
  });

  return {
    data,
    giveLike,
    giveLikeAsync,
    isLoading,
    error,
  };
};
