import { MODULES } from '@/app/modules';
import { IDeletePostDTO } from '@/app/modules/@core/post';
import { useMutation } from '@tanstack/react-query';
import { toast } from 'react-hot-toast';

export const useDeletePost = () => {
  const {
    mutate: deleteSync,
    mutateAsync: deleteAsync,
    isLoading,
    error,
  } = useMutation<any, any, IDeletePostDTO>({
    mutationFn: async (DTO) =>
      await toast.promise(MODULES.POST.MAIN().delete(DTO), {
        loading: `Deleting post... 🐢`,
        success: `Post deleted successfully! 🔥`,
        error: `Error on delete post 🐢`,
      }),
    mutationKey: ['post', 'delete'],
  });

  return {
    deleteSync,
    deleteAsync,
    isLoading,
    error,
  };
};
