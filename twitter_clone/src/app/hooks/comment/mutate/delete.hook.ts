import { MODULES } from '@/app/modules';
import { IDeleteCommentDTO } from '@/app/modules/@core/comment/DTO';
import { useMutation } from '@tanstack/react-query';
import { toast } from 'react-hot-toast';

export const useDeleteComment = () => {
  const {
    mutate: deleteSync,
    mutateAsync: deleteAsync,
    isLoading,
    error,
  } = useMutation<any, any, IDeleteCommentDTO>({
    mutationFn: async (DTO) =>
      await toast.promise(MODULES.COMMENT.MAIN().delete(DTO), {
        loading: `Deleting comment... ✍️`,
        success: `Comment deleted successfully! 🔥💬`,
        error: `Error on delete comment 😢💬`,
      }),
    mutationKey: ['comment', 'delete'],
  });

  return {
    deleteSync,
    deleteAsync,
    isLoading,
    error,
  };
};
